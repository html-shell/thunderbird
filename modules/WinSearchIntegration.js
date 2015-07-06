/* -*- Mode: JavaScript; tab-width: 2; indent-tabs-mode: nil; c-basic-offset: 2 -*- */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

//@line 18 "c:\builds\moz2_slave\tb-rel-c-esr38-w32_bld-0000000\build\mail\components\search\content\searchCommon.js"

const Cc = Components.classes;
const Ci = Components.interfaces;
const Cu = Components.utils;

Cu.import("resource:///modules/gloda/log4moz.js");
Cu.import("resource:///modules/iteratorUtils.jsm");
Cu.import("resource:///modules/mailServices.js");
Cu.import("resource:///modules/MailUtils.js");
Cu.import("resource://gre/modules/Services.jsm");

const PERM_DIRECTORY = parseInt("0755", 8);
const PERM_FILE = parseInt("0644", 8);

let SearchSupport =
{
  /**
   * URI of last folder indexed. Kept in sync with the pref
   */
  __lastFolderIndexedUri: null,
  set _lastFolderIndexedUri(uri)
  {
    this._prefBranch.setCharPref("lastFolderIndexedUri", uri);
    this.__lastFolderIndexedUri = uri;
  },
  get _lastFolderIndexedUri()
  {
    // If we don't know about it, get it from the pref branch
    if (this.__lastFolderIndexedUri === null)
    {
      this.__lastFolderIndexedUri = "";
      try {
        this.__lastFolderIndexedUri =
          this._prefBranch.getCharPref("lastFolderIndexedUri");
      } catch (ex) {}
    }
    return this.__lastFolderIndexedUri;
  },

  /**
   * Queue of message headers to index, along with reindex times for each header
   */
  _msgHdrsToIndex: [],

  /**
   * Messenger object, used primarily to get message URIs
   */
  __messenger: null,
  get _messenger()
  {
    if (!this.__messenger)
      this.__messenger = Cc["@mozilla.org/messenger;1"]
                         .createInstance(Ci.nsIMessenger);
    return this.__messenger;
  },

  /// The preferences branch to use
  __prefBranch: null,
  get _prefBranch()
  {
    if (!this.__prefBranch)
      this.__prefBranch = Services.prefs.getBranch(this._prefBase);
    return this.__prefBranch;
  },

  /**
   * If this is true, we won't show any UI because the OS doesn't have the
   * support we need
   */
  osVersionTooLow: false,

  /**
   * If this is true, we'll show disabled UI, because while the OS does have
   * the support we need, not all the OS components we need are running
   */
  osComponentsNotRunning: false,

  /**
   * Whether the preference is enabled. The module might be in a state where
   * the preference is on but "enabled" is false, so take care of that.
   */
  get prefEnabled()
  {
    // Don't cache the value
    return this._prefBranch.getBoolPref("enable");
  },
  set prefEnabled(aEnabled)
  {
    if (this.prefEnabled != aEnabled)
      this._prefBranch.setBoolPref("enable", aEnabled);
  },

  /**
   * Whether the first run has occurred. This will be used to determine if
   * a dialog box needs to be displayed.
   */
  get firstRunDone()
  {
    // Don't cache this value either
    return this._prefBranch.getBoolPref("firstRunDone");
  },
  set firstRunDone(aAlwaysTrue)
  {
    this._prefBranch.setBoolPref("firstRunDone", true);
  },

  /**
   * Last global reindex time, used to check if reindexing is required.
   * Kept in sync with the pref
   */
  _globalReindexTime: null,
  set globalReindexTime(aTime)
  {
    this._globalReindexTime = aTime;
    // Set the pref as well
    this._prefBranch.setCharPref("global_reindex_time", "" + aTime);
  },
  get globalReindexTime()
  {
    if (!this._globalReindexTime)
    {
      // Try getting the time from the preferences
      try {
        this._globalReindexTime = parseInt(this._prefBranch
                                    .getCharPref("global_reindex_time"));
      }
      catch (e)
      {
        // We don't have it defined, so set it (Unix time, in seconds)
        this._globalReindexTime = parseInt(Date.now() / 1000);
        this._prefBranch.setCharPref("global_reindex_time",
                                     "" + this._globalReindexTime);
      }
    }
    return this._globalReindexTime;
  },

  /**
   * Amount of time the user is idle before we (re)start an indexing sweep
   */
  _idleThresholdSecs: 30,

  /**
   * Reference to timer object
   */
  __timer: null,
  get _timer()
  {
    if (!this.__timer)
      this.__timer = Cc["@mozilla.org/timer;1"].createInstance(Ci.nsITimer);
    return this.__timer;
  },

  _cancelTimer: function()
  {
    try {
      this._timer.cancel();
    }
    catch (ex) {}
  },

  /**
   * Enabled status.
   *
   * When we're enabled, then we get notifications about every message or folder
   * operation, including "message displayed" operations which we bump up in
   * priority. We also have a background sweep which we do on idle.
   *
   * We aren't fully disabled when we're "disabled", though. We still observe
   * message and folder moves and deletes, as we don't want to have support
   * files for non-existent messages.
   */
  _enabled: null,
  set enabled(aEnable)
  {
    // Nothing to do if there's no change in state
    if (this._enabled == aEnable)
      return;

    this._log.info("Enabled status changing from " + this._enabled + " to " +
                   aEnable);

    this._removeObservers();

    if (aEnable)
    {
      // This stuff we always need to do
      MailServices.mfn.addListener(this._msgFolderListener,
        MailServices.mfn.msgAdded |
        MailServices.mfn.msgsDeleted |
        MailServices.mfn.msgsMoveCopyCompleted |
        // this code pre-dates msgsClassified
        // folderAdded intentionally omitted
        MailServices.mfn.folderDeleted |
        MailServices.mfn.folderMoveCopyCompleted |
        MailServices.mfn.folderRenamed);
        // itemEvent intentionally omitted
      Services.obs.addObserver(this, "MsgMsgDisplayed", false);
      let idleService = Cc["@mozilla.org/widget/idleservice;1"]
                          .getService(Ci.nsIIdleService);
      idleService.addIdleObserver(this, this._idleThresholdSecs);
    }
    else
      // We want to observe moves, deletes and renames in case we're disabled
      // If we don't, we'll have no idea the support files exist later
      MailServices.mfn.addListener(this._msgFolderListener,
        MailServices.mfn.msgsMoveCopyCompleted |
        MailServices.mfn.msgsDeleted |
        // folderAdded intentionally omitted
        MailServices.mfn.folderDeleted |
        MailServices.mfn.folderMoveCopyCompleted |
        MailServices.mfn.folderRenamed);

    this._enabled = aEnable;
  },
  get enabled()
  {
    return this._enabled;
  },

  /**
   * Remove whatever observers are present. This is done while switching states
   */
  _removeObservers: function()
  {
    if (this.enabled === null)
      return;

    MailServices.mfn.removeListener(this._msgFolderListener);

    if (this.enabled)
    {
      Services.obs.removeObserver(this, "MsgMsgDisplayed", false);
      let idleService = Cc["@mozilla.org/widget/idleservice;1"]
                          .getService(Ci.nsIIdleService);
      idleService.removeIdleObserver(this, this._idleThresholdSecs);

      // in case there's a background sweep going on
      this._cancelTimer();
    }
    // We don't need to do anything extra if we're disabled
  },

  /**
   * Init function -- this should be called from the component's init function
   */
  _initSupport: function search_init_support(enabled)
  {
    this._log.info("Search integration running in " +
                   (enabled ? "active" : "backoff") + " mode");
    this.enabled = enabled;

    // Set up a pref observer
    this._prefBranch.addObserver("enable", this, false);
  },

  /**
   * Current folder being indexed
   */
  _currentFolderToIndex: null,

  /**
   * For the current folder being indexed, an enumerator for all the headers in
   * the folder
   */
  _headerEnumerator: null,

  /*
   * These functions are to index already existing messages
   */

  /**
   * Generator to look for the next folder to index, and return it
   *
   * This first looks for folders that have their corresponding search results
   * folders missing. If it finds such a folder first, it'll yield return that
   * folder.
   *
   * Next, it looks for the next folder after the lastFolderIndexedUri. If it is
   * in such a folder, it'll yield return that folder, then set the
   * lastFolderIndexedUrl to the URI of that folder.
   *
   * It resets lastFolderIndexedUri to an empty string, then yield returns null
   * once iteration across all folders is complete.
   */
  _foldersToIndexGenerator: function search_find_next_folder()
  {
    let servers = MailServices.accounts.allServers;

    // Stores whether we're after the last folder indexed or before that --
    // if the last folder indexed is empty, this needs to be true initially
    let afterLastFolderIndexed = (this._lastFolderIndexedUri.length == 0);

    for (var server in fixIterator(servers, Ci.nsIMsgIncomingServer))
    {
      let allFolders = server.rootFolder.descendants;
      let numFolders = allFolders.length;
      this._log.debug("in find next folder, lastFolderIndexedUri = " +
                      this._lastFolderIndexedUri);

      for (var folder in fixIterator(allFolders, Ci.nsIMsgFolder))
      {
        let searchPath = this._getSearchPathForFolder(folder);
        searchPath.leafName = searchPath.leafName + ".mozmsgs";
        // If after the last folder indexed, definitely index this
        if (afterLastFolderIndexed)
        {
          // Create the folder if it doesn't exist, so that we don't hit the
          // condition below later
          if (!searchPath.exists())
            searchPath.create(Ci.nsIFile.DIRECTORY_TYPE, PERM_DIRECTORY);

          yield folder;
          // We're back after yielding -- set the last folder indexed
          this._lastFolderIndexedUri = folder.URI;
        }
        else
        {
          // If a folder's entire corresponding search results folder is
          // missing, we need to index it, and force a reindex of all the
          // messages in it
          if (!searchPath.exists())
          {
            this._log.debug("using folder " + folder.URI + " because " +
                            "corresponding search folder does not exist");
            // Create the folder, so that next time we're checking we don't hit
            // this
            searchPath.create(Ci.nsIFile.DIRECTORY_TYPE, PERM_DIRECTORY);
            folder.setStringProperty(this._hdrIndexedProperty,
                                     "" + (Date.now() / 1000));
            yield folder;
          }
          // folder may need reindexing for other reasons
          else if (this._pathNeedsReindexing(searchPath)) {
            folder.setStringProperty(this._hdrIndexedProperty,
                                     "" + (Date.now() / 1000));
            yield folder;
          }

          // Even if we yielded above, check if this is the last folder
          // indexed
          if (this._lastFolderIndexedUri == folder.URI)
            afterLastFolderIndexed = true;
        }
      }
    }
    // We're done with one iteration of all the folders; time to reset the
    // lastFolderIndexedUri
    this._lastFolderIndexedUri = "";
    yield null;
  },

  __foldersToIndex: null,
  get _foldersToIndex()
  {
    if (!this.__foldersToIndex)
      this.__foldersToIndex = this._foldersToIndexGenerator();
    return this.__foldersToIndex;
  },

  _findNextHdrToIndex: function search_find_next_header()
  {
    try
    {
      let reindexTime = this._getLastReindexTime(this._currentFolderToIndex);
      this._log.debug("Reindex time for this folder is " + reindexTime);
      if (!this._headerEnumerator)
      {
        //  we need to create search terms for messages to index
        let searchSession = Cc["@mozilla.org/messenger/searchSession;1"]
                              .createInstance(Ci.nsIMsgSearchSession);
        let searchTerms = Cc["@mozilla.org/array;1"].createInstance(Ci.nsIMutableArray);

        searchSession.addScopeTerm(Ci.nsMsgSearchScope.offlineMail, this._currentFolderToIndex);
        let nsMsgSearchAttrib = Ci.nsMsgSearchAttrib;
        let nsMsgSearchOp = Ci.nsMsgSearchOp;
        // first term: (_hdrIndexProperty < reindexTime)
        let searchTerm = searchSession.createTerm();
        searchTerm.booleanAnd = false; // actually don't care here
        searchTerm.attrib = nsMsgSearchAttrib.Uint32HdrProperty;
        searchTerm.op = nsMsgSearchOp.IsLessThan;
        value = searchTerm.value;
        value.attrib = searchTerm.attrib;
        searchTerm.hdrProperty = this._hdrIndexedProperty;
        value.status = reindexTime;
        searchTerm.value = value;
        searchTerms.appendElement(searchTerm, false);
        this._headerEnumerator = this._currentFolderToIndex.msgDatabase
                                 .getFilterEnumerator(searchTerms);
      }

      // iterate over the folder finding the next message to index
      while (this._headerEnumerator.hasMoreElements())
      {
        let msgHdr = this._headerEnumerator.getNext()
                         .QueryInterface(Ci.nsIMsgDBHdr);

        // Check if the file exists. If it does, then assume indexing to be
        // complete for this file
        if (this._getSupportFile(msgHdr).exists())
        {
          this._log.debug("Message time not set but file exists; setting " +
                          "time to " + reindexTime);
          msgHdr.setUint32Property(this._hdrIndexedProperty, reindexTime);
        }
        else
        {
          return [msgHdr, reindexTime];
        }
      }
    }
    catch(ex) { this._log.debug("Error while finding next header: " + ex); }

    // If we couldn't find any headers to index, null out the enumerator
    this._headerEnumerator = null;
    if (! (this._currentFolderToIndex.flags & Ci.nsMsgFolderFlags.Inbox))
      this._currentFolderToIndex.msgDatabase = null;
    return null;
  },

  /**
   * Get the last reindex time for this folder. This will be whichever's
   * greater, the global reindex time or the folder reindex time
   */
  _getLastReindexTime: function search_get_last_reindex_time(aFolder)
  {
    let reindexTime = this.globalReindexTime;

    // Check if this folder has a separate string property set
    let folderReindexTime;
    try {
      folderReindexTime = this._currentFolderToIndex
        .getStringProperty(this._hdrIndexedProperty);
    }
    catch (e) { folderReindexTime = ""; }

    if (folderReindexTime.length > 0)
    {
      let folderReindexTimeInt = parseInt(folderReindexTime);
      if (folderReindexTimeInt > reindexTime)
        reindexTime = folderReindexTimeInt;
    }
    return reindexTime;
  },

  /**
   * Whether background indexing has been completed
   */
  __backgroundIndexingDone: false,

  /**
   * The main background sweeping function. It first looks for a folder to
   * start or continue indexing in, then for a header. If it can't find anything
   * to index, it resets the last folder indexed URI so that the sweep can
   * be restarted
   */
  _continueSweep: function search_continue_sweep()
  {
    let msgHdrAndReindexTime = null;

    if (this.__backgroundIndexingDone)
      return;

    // find the current folder we're working on
    if (!this._currentFolderToIndex)
      this._currentFolderToIndex = this._foldersToIndex.next();

    // we'd like to index more than one message on each timer fire,
    // but since streaming is async, it's hard to know how long
    // it's going to take to stream any particular message.
    if (this._currentFolderToIndex)
      msgHdrAndReindexTime = this._findNextHdrToIndex();
    else
      // we've cycled through all the folders, we should take a break
      // from indexing of existing messages
      this.__backgroundIndexingDone = true;

    if (!msgHdrAndReindexTime)
    {
      this._log.debug("reached end of folder");
      if (this._currentFolderToIndex)
        this._currentFolderToIndex = null;
    }
    else
      this._queueMessage(msgHdrAndReindexTime[0], msgHdrAndReindexTime[1]);

    // Restart the timer, and call ourselves
    this._cancelTimer();
    this._timer.initWithCallback(this._wrapContinueSweep,
                                 this._msgHdrsToIndex.length > 1 ? 5000 : 1000,
                                 Ci.nsITimer.TYPE_ONE_SHOT);
  },

  /**
   * A simple wrapper to make "this" be right for _continueSweep
   */
  _wrapContinueSweep: function search_wrap_continue_sweep()
  {
    SearchIntegration._continueSweep();
  },

  /**
   * Observer implementation. Consists of
   * - idle observer; starts running through folders when it receives an "idle"
   * notification, and cancels any timers when it receives a "back" notification
   * - msg displayed observer, queues the message if necessary
   * - pref observer, to see if the preference has been poked
   */
  observe: function search_observe(aSubject, aTopic, aData)
  {
    if (aTopic == "idle")
    {
      this._log.debug("Idle detected, continuing sweep")
      this._continueSweep();
    }
    else if (aTopic == "back")
    {
      this._log.debug("Non-idle, so suspending sweep")
      this._cancelTimer();
    }
    else if (aTopic == "MsgMsgDisplayed")
    {
      this._log.debug("topic = " + aTopic + " uri = " + aData);
      let msgHdr = this._messenger.msgHdrFromURI(aData);
      let reindexTime = this._getLastReindexTime(msgHdr.folder);
      this._log.debug("Reindex time for this folder is " + reindexTime);
      if (msgHdr.getUint32Property(this._hdrIndexedProperty) < reindexTime)
      {
        // Check if the file exists. If it does, then assume indexing to be
        // complete for this file
        if (this._getSupportFile(msgHdr).exists())
        {
          this._log.debug("Message time not set but file exists; setting " +
                          " time to " + reindexTime);
          msgHdr.setUint32Property(this._hdrIndexedProperty, reindexTime);
        }
        else
        {
          this._queueMessage(msgHdr, reindexTime);
        }
      }
    }
    else if (aTopic == "nsPref:changed" && aData == "enable")
    {
      let prefEnabled = this.prefEnabled;
      // Search integration turned on
      if (prefEnabled && this.register())
      {
        this.enabled = true;
      }
      // Search integration turned off
      else if (!prefEnabled && this.deregister())
      {
        this.enabled = false;
      }
      else
      {
        // The call to register or deregister has failed.
        // This is a hack to handle this case
        let timer = Cc["@mozilla.org/timer;1"].createInstance(Ci.nsITimer);
        timer.initWithCallback(function() {
          SearchIntegration._handleRegisterFailure(!prefEnabled);
        }, 200, Ci.nsITimer.TYPE_ONE_SHOT);
      }
    }
  },

  /// Handle failure to register or deregister
  _handleRegisterFailure: function search_handle_register_failure(enabled)
  {
    // Remove ourselves from the observer list, flip the pref,
    // and add ourselves back
    this._prefBranch.removeObserver("enable", this);
    this.prefEnabled = enabled;
    this._prefBranch.addObserver("enable", this, false);
  },

  /**
   * This object gets notifications for new/moved/copied/deleted messages/folders
   */
  _msgFolderListener: {
    msgAdded: function(aMsg)
    {
      SearchIntegration._log.info("in msgAdded");
      // The message already being there is an expected case
      let file = SearchIntegration._getSupportFile(aMsg);
      if (!file.exists())
        SearchIntegration._queueMessage(aMsg,
          SearchIntegration._getLastReindexTime(aMsg.folder));
    },

    msgsDeleted: function(aMsgs)
    {
      SearchIntegration._log.info("in msgsDeleted");
      let count = aMsgs.length;
      for (let i = 0; i < count; i++)
      {
        let file = SearchIntegration._getSupportFile(
                     aMsgs.queryElementAt(i, Ci.nsIMsgDBHdr));
        if (file.exists())
          file.remove(false);
      }
    },

    msgsMoveCopyCompleted: function(aMove, aSrcMsgs, aDestFolder)
    {
      SearchIntegration._log.info("in msgsMoveCopyCompleted, aMove = " + aMove);
      // Forget about copies if disabled
      if (!aMove && !this.enabled)
        return;

      let count = aSrcMsgs.length;
      for (let i = 0; i < count; i++)
      {
        let srcFile = SearchIntegration._getSupportFile(
                        aSrcMsgs.queryElementAt(i, Ci.nsIMsgDBHdr));
        if (srcFile && srcFile.exists())
        {
          let destFile = SearchIntegration._getSearchPathForFolder(aDestFolder);
          destFile.leafName = destFile.leafName + ".mozmsgs";
          if (!destFile.exists())
          {
            try {
              // create the directory, if it doesn't exist
              destFile.create(Ci.nsIFile.DIRECTORY_TYPE, PERM_DIRECTORY);
            }
            catch(ex) {SearchIntegration._log.warn(ex);}
          }
          SearchIntegration._log.debug("dst file path = " + destFile.path);
          SearchIntegration._log.debug("src file path = " + srcFile.path);
          // We're not going to copy in case we're not in active mode
          if (destFile.exists())
            if (aMove)
              srcFile.moveTo(destFile, "");
            else
              srcFile.copyTo(destFile, "");
        }
      }
    },

    folderDeleted: function(aFolder)
    {
      SearchIntegration._log.info("in folderDeleted, folder name = " +
                                  aFolder.prettiestName);
      let srcFile = SearchIntegration._getSearchPathForFolder(aFolder);
      srcFile.leafName = srcFile.leafName + ".mozmsgs";
      if (srcFile.exists())
        srcFile.remove(true);
    },

    folderMoveCopyCompleted: function(aMove, aSrcFolder, aDestFolder)
    {
      SearchIntegration._log.info("in folderMoveCopyCompleted, aMove = " +
                                  aMove);

      // Forget about copies if disabled
      if (!aMove && !this.enabled)
        return;

      let srcFile = SearchIntegration._getSearchPathForFolder(aSrcFolder);
      let destFile = SearchIntegration._getSearchPathForFolder(aDestFolder);
      srcFile.leafName = srcFile.leafName + ".mozmsgs";
      destFile.leafName += ".sbd";
      SearchIntegration._log.debug("src file path = " + srcFile.path);
      SearchIntegration._log.debug("dst file path = " + destFile.path);
      if (srcFile.exists())
      {
        // We're not going to copy if we aren't in active mode
        if (aMove)
          srcFile.moveTo(destFile, "");
        else
          srcFile.copyTo(destFile, "");
      }
    },

    folderRenamed: function(aOrigFolder, aNewFolder)
    {
      SearchIntegration._log.info("in folderRenamed, aOrigFolder = " +
                                  aOrigFolder.prettiestName +
                                  ", aNewFolder = " + aNewFolder.prettiestName);
      let srcFile = SearchIntegration._getSearchPathForFolder(aOrigFolder);
      srcFile.leafName = srcFile.leafName + ".mozmsgs";
      let destName = aNewFolder.name + ".mozmsgs";
      SearchIntegration._log.debug("src file path = " + srcFile.path);
      SearchIntegration._log.debug("dst name = " + destName);
      if (srcFile.exists())
        srcFile.moveTo(null, destName);
    },

    itemEvent: function(aItem, aEvent, aData)
    {
      SearchIntegration._log.info("in itemEvent, aItem = " + aItem +
                                  ", aEvent = " + aEvent + ", aData = " + aData);
    }
  },

  /*
   * Support functions to queue/generate files
   */
  _queueMessage: function search_queue_message(msgHdr, reindexTime)
  {
    if (this._msgHdrsToIndex.push([msgHdr, reindexTime]) == 1)
    {
      this._log.info("generating support file for id = " + msgHdr.messageId);
      this._streamListener.startStreaming(msgHdr, reindexTime);
    }
    else
      this._log.info("queueing support file generation for id = " +
                     msgHdr.messageId);
  },

  /**
   * Handle results from the command line. This method is the inverse of the
   * _getSupportFile method below.
   *
   * @param aFile the file passed in by the command line
   * @return the nsIMsgDBHdr corresponding to the file passed in
   */
  handleResult: function search_handle_result(aFile)
  {
    // The file path has two components -- the search path, which needs to be
    // converted into a folder, and the message ID.
    let searchPath = aFile.parent;
    // Strip off ".mozmsgs" from the end (8 characters)
    searchPath.leafName = searchPath.leafName.slice(0, -8);

    let folder = this._getFolderForSearchPath(searchPath);

    // Get rid of the file extension at the end (7 characters), and unescape
    let messageID = decodeURIComponent(aFile.leafName.slice(0, -7));

    // Look for the message ID in the folder
    return folder.msgDatabase.getMsgHdrForMessageID(messageID);
  },

  _getSupportFile: function search_get_support_file(msgHdr)
  {
    let folder = msgHdr.folder;
    if (folder)
    {
      let messageId = encodeURIComponent(msgHdr.messageId);
      this._log.debug("encoded message id = " + messageId);
      let file = this._getSearchPathForFolder(folder);
      file.leafName = file.leafName + ".mozmsgs";
      file.appendRelativePath(messageId + this._fileExt);
      this._log.debug("getting support file path = " + file.path);
      return file;
    }
    return null;
  },

  /**
   * Base to use for stream listeners, extended by the respective
   * implementations
   */
  _streamListenerBase: {
    /// Output file
    _outputFile: null,

    /// Stream to use to write to the output file
    __outputStream: null,
    set _outputStream(stream)
    {
      if (this.__outputStream)
        this.__outputStream.close();
      this.__outputStream = stream;
    },
    get _outputStream()
    {
      return this.__outputStream;
    },

    /// Reference to message header
    _msgHdr: null,

    /// Reindex time for this message header
    _reindexTime: null,

    QueryInterface: function(aIId, instance) {
      if (aIId.equals(Ci.nsIStreamListener) || aIId.equals(Ci.nsISupports))
        return this;

      throw Components.results.NS_ERROR_NO_INTERFACE;
    },

    /// "Finish" function, cleans up behind itself if unsuccessful
    _onDoneStreaming: function search_on_done_streaming(successful)
    {
      this._outputStream = null;
      if (!successful && this._msgHdr)
      {
        let file = SearchIntegration._getSupportFile(this._msgHdr);
        if (file && file.exists())
          file.remove(false);
      }
      // should we try to delete the file on disk in case not successful?
      SearchIntegration._msgHdrsToIndex.shift();

      if (SearchIntegration._msgHdrsToIndex.length > 0)
      {
        [msgHdr, reindexTime] = SearchIntegration._msgHdrsToIndex[0];
        this.startStreaming(msgHdr, reindexTime);
      }
    },

    /// "Start" function
    startStreaming: function search_start_streaming(msgHdr, reindexTime)
    {
      try
      {
        let folder = msgHdr.folder;
        if (folder)
        {
          let messageId = encodeURIComponent(msgHdr.messageId);
          SearchIntegration._log.info("generating support file, id = " +
                                      messageId);
          let file = SearchIntegration._getSearchPathForFolder(folder);

          file.leafName = file.leafName + ".mozmsgs";
          SearchIntegration._log.debug("file leafname = " + file.leafName);
          if (!file.exists())
          {
            try {
              // create the directory, if it doesn't exist
              file.create(Ci.nsIFile.DIRECTORY_TYPE, PERM_DIRECTORY);
            }
            catch(ex) { this._log.error(ex); }
          }

          file.appendRelativePath(messageId + SearchIntegration._fileExt);
          SearchIntegration._log.debug("file path = " + file.path);
          file.create(0, PERM_FILE);
          let uri = folder.getUriForMsg(msgHdr);
          let msgService = SearchIntegration._messenger
            .messageServiceFromURI(uri);
          this._msgHdr = msgHdr;
          this._outputFile = file;
          this._reindexTime = reindexTime;
          try
          {
            // XXX For now, try getting the messages from the server. This has
            // to be improved so that we don't generate any excess network
            // traffic
            msgService.streamMessage(uri, this, null, null, false, "", false);
          }
          catch (ex)
          {
            // This is an expected case, in case we're offline
            SearchIntegration._log.warn("StreamMessage unsuccessful for id = " +
                                        messageId);
            this._onDoneStreaming(false);
          }
        }
      }
      catch (ex)
      {
        SearchIntegration._log.error(ex);
        this._onDoneStreaming(false);
      }
    }
  },

  /**
   * Logging functionality, shamelessly ripped from gloda
   * If enabled, warnings and above are logged to the error console, while dump
   * gets everything
   */
  _log: null,
  _initLogging: function search_init_logging()
  {
    let formatter = new Log4Moz.BasicFormatter();
  let root = Log4Moz.repository.rootLogger;
    root.level = Log4Moz.Level.Debug;

  this._log = Log4Moz.repository.getLogger("SearchInt");

    let enableConsoleLogging = false;
    let enableDumpLogging = false;

    try
    {
      enableConsoleLogging = this._prefBranch.getBoolPref("logging.console");
      enableDumpLogging = this._prefBranch.getBoolPref("logging.dump");
    }
    catch (ex) {}

    if (enableConsoleLogging)
    {
      let capp = new Log4Moz.ConsoleAppender(formatter);
      capp.level = Log4Moz.Level.Warn;
      this._log.addAppender(capp);
    }
    if (enableDumpLogging)
    {
      let dapp = new Log4Moz.DumpAppender(formatter);
      dapp.level = Log4Moz.Level.All;
      this._log.addAppender(dapp);
    }

    this._log.info("Logging initialized");
  }
};
//@line 7 "c:\builds\moz2_slave\tb-rel-c-esr38-w32_bld-0000000\build\mail\components\search\WinSearchIntegration.js"

var EXPORTED_SYMBOLS = ["SearchIntegration"];

Components.utils.import("resource://gre/modules/Services.jsm");

const MSG_DB_LARGE_COMMIT = 1;
const CRLF="\r\n";

/**
 * Required to access the 64-bit registry, even though we're probably a 32-bit
 * program
 */
const ACCESS_WOW64_64KEY = 0x0100;

/**
 * The contract ID for the helper service.
 */
const WINSEARCHHELPER_CONTRACTID = "@mozilla.org/mail/windows-search-helper;1";

/**
 * All the registry keys required for integration
 */
const gRegKeys =
[
  // This is the property handler
  {
    root: Ci.nsIWindowsRegKey.ROOT_KEY_LOCAL_MACHINE,
    key: "SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\PropertySystem\\PropertyHandlers\\.wdseml",
    name: "",
    value: "{5FA29220-36A1-40f9-89C6-F4B384B7642E}"
  },
  // These two are the association with the MIME IFilter
  {
    root: Ci.nsIWindowsRegKey.ROOT_KEY_CLASSES_ROOT,
    key: ".wdseml",
    name: "Content Type",
    value: "message/rfc822"
  },
  {
    root: Ci.nsIWindowsRegKey.ROOT_KEY_CLASSES_ROOT,
    key: ".wdseml\\PersistentHandler",
    name: "",
    value: "{5645c8c4-e277-11cf-8fda-00aa00a14f93}"
  },
  // This is the association with the Windows mail preview handler
  {
    root: Ci.nsIWindowsRegKey.ROOT_KEY_CLASSES_ROOT,
    key: ".wdseml\\shellex\\{8895B1C6-B41F-4C1C-A562-0D564250836F}",
    name: "",
    value: "{b9815375-5d7f-4ce2-9245-c9d4da436930}"
  },
  // This is the association made to display results under email
  {
    root: Ci.nsIWindowsRegKey.ROOT_KEY_LOCAL_MACHINE,
    key: "SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\explorer\\KindMap",
    name: ".wdseml",
    value: "email;communication"
  }
];

/**
 * @namespace Windows Search-specific desktop search integration functionality
 */
let SearchIntegration =
{
  __proto__: SearchSupport,

  /// The property of the header and (sometimes) folders that's used to check
  /// if a message is indexed
  _hdrIndexedProperty: "winsearch_reindex_time",

  /// The file extension that is used for support files of this component
  _fileExt: ".wdseml",

  /// The Windows Search pref base
  _prefBase: "mail.winsearch.",

  /// Helper (native) component
  __winSearchHelper: null,
  get _winSearchHelper()
  {
    if (!this.__winSearchHelper)
      this.__winSearchHelper = Cc[WINSEARCHHELPER_CONTRACTID]
                                 .getService(Ci.nsIMailWinSearchHelper);
    return this.__winSearchHelper;
  },

  /// Whether the folders are already in the crawl scope
  get _foldersInCrawlScope()
  {
    return this._winSearchHelper.foldersInCrawlScope;
  },

  /**
   * Whether all the required registry keys are present
   * We'll be optimistic here and assume that once the registry keys have been
   * added, they won't be removed, at least while Thunderbird is open
   */
  __regKeysPresent: false,
  get _regKeysPresent()
  {
    if (!this.__regKeysPresent)
    {
      for (let i = 0; i < gRegKeys.length; i++)
      {
        let regKey = Cc["@mozilla.org/windows-registry-key;1"]
                       .createInstance(Ci.nsIWindowsRegKey);
        try {
          regKey.open(gRegKeys[i].root, gRegKeys[i].key, regKey.ACCESS_READ |
                                                         ACCESS_WOW64_64KEY);
        }
        catch (e) { return false; }
        let valuePresent = regKey.hasValue(gRegKeys[i].name) &&
                           (regKey.readStringValue(gRegKeys[i].name) ==
                            gRegKeys[i].value);
        regKey.close();
        if (!valuePresent)
          return false;
      }
      this.__regKeysPresent = true;
    }
    return true;
  },

  /// Use the folder's path (i.e., in profile dir) as is
  _getSearchPathForFolder: function winsearch_get_search_path(aFolder)
  {
    return aFolder.filePath;
  },

  /// Use the search path as is
  _getFolderForSearchPath: function winsearch_get_folder_for_search_path(aDir)
  {
    return MailUtils.getFolderForFileInProfile(aDir);
  },

  _pathNeedsReindexing: function winsearch_pathNeedsReindexing(aPath) {
    // only needed on MacOSX (see bug 670566).
    return false;
  },

  _init: function winsearch_init()
  {
    this._initLogging();
    // If the helper service isn't present, we weren't compiled with the needed
    // support. Mark ourselves null and return
    if (!(WINSEARCHHELPER_CONTRACTID in Cc))
    {
      SearchIntegration = null;
      return;
    }

    // We're currently only enabled on Vista and above
    let windowsVersion = Services.sysinfo.getProperty("version");
    if (parseFloat(windowsVersion) < 6)
    {
      this._log.fatal("Windows version " + windowsVersion + " < 6.0");
      this.osVersionTooLow = true;
      return;
    }

    let serviceRunning = false;
    try {
      serviceRunning = this._winSearchHelper.serviceRunning;
    }
    catch (e) {}
    // If the service isn't running, then we should stay in backoff mode
    if (!serviceRunning)
    {
      this._log.info("Windows Search service not running");
      this.osComponentsNotRunning = true;
      this._initSupport(false);
      return;
    }

    let enabled = this.prefEnabled;

    if (enabled)
      this._log.info("Initializing Windows Search integration");
    this._initSupport(enabled);
  },

  /**
   * Add necessary hooks to Windows
   *
   * @return false if registration did not succeed, because the elevation
   * request was denied
   */
  register: function winsearch_register()
  {
    // If any of the two are not present, we need to elevate.
    if (!this._foldersInCrawlScope || !this._regKeysPresent)
    {
      try {
        this._winSearchHelper.runSetup(true);
      }
      catch (e) { return false; }
    }

    if (!this._winSearchHelper.isFileAssociationSet)
    {
      try {
        this._winSearchHelper.setFileAssociation();
      }
      catch (e) { this._log.warn("File association not set"); }
    }
    // Also set the FANCI bit to 0 for the profile directory
    let profD = Services.dirsvc.get("ProfD", Ci.nsIFile);
    this._winSearchHelper.setFANCIBit(profD, false, true);

    return true;
  },

  /**
   * Remove integration from Windows. The only thing removed is the directory
   * from the index list. This will ask for elevation.
   *
   * @return false if deregistration did not succeed, because the elevation
   * request was denied
   */
  deregister: function winsearch_deregister()
  {
    try {
      this._winSearchHelper.runSetup(false);
    }
    catch (e) { return false; }

    return true;
  },

  /// The stream listener to read messages
  _streamListener: {
    __proto__: SearchSupport._streamListenerBase,

    /// Buffer to store the message
    _message: "",

    onStartRequest: function(request, context) {
      try {
        let outputFileStream =  Cc["@mozilla.org/network/file-output-stream;1"]
                                  .createInstance(Ci.nsIFileOutputStream);
        outputFileStream.init(this._outputFile, -1, -1, 0);
        this._outputStream = Cc["@mozilla.org/intl/converter-output-stream;1"]
                               .createInstance(Ci.nsIConverterOutputStream);
        this._outputStream.init(outputFileStream, "UTF-8", 0, 0x0000);
      }
      catch (ex) { this._onDoneStreaming(false); }
    },

    onStopRequest: function(request, context, status, errorMsg) {
      try {
        // XXX Once the JS emitter gets checked in, this code should probably be
        // switched over to use that
        // Decode using getMsgTextFromStream
        let stringStream = Cc["@mozilla.org/io/string-input-stream;1"]
                             .createInstance(Ci.nsIStringInputStream);
        stringStream.setData(this._message, this._message.length);
        let contentType = {};
        let folder = this._msgHdr.folder;
        let text = folder.getMsgTextFromStream(stringStream,
                                               this._msgHdr.Charset, 65536,
                                               50000, false, false,
                                               contentType);

        // To get the Received header, we need to parse the message headers.
        // We only need the first header, which contains the latest received
        // date
        let headers = this._message.split(/\r\n\r\n|\r\r|\n\n/, 1)[0];
        let mimeHeaders = Cc["@mozilla.org/messenger/mimeheaders;1"]
                            .createInstance(Ci.nsIMimeHeaders);
        mimeHeaders.initialize(headers);
        let receivedHeader = mimeHeaders.extractHeader("Received", false);

        this._outputStream.writeString("From: " + this._msgHdr.author + CRLF);
        // If we're a newsgroup, then add the name of the folder as the
        // newsgroups header
        if (folder instanceof Ci.nsIMsgNewsFolder)
          this._outputStream.writeString("Newsgroups: " + folder.name + CRLF);
        else
          this._outputStream.writeString("To: " + this._msgHdr.recipients +
                                         CRLF);
        this._outputStream.writeString("CC: " + this._msgHdr.ccList + CRLF);
        this._outputStream.writeString("Subject: " + this._msgHdr.subject +
                                       CRLF);
        if (receivedHeader)
          this._outputStream.writeString("Received: " + receivedHeader + CRLF);
        this._outputStream.writeString(
          "Date: " + new Date(this._msgHdr.date / 1000).toUTCString() + CRLF);
        this._outputStream.writeString("Content-Type: " + contentType.value +
                                       "; charset=utf-8" + CRLF + CRLF);

        this._outputStream.writeString(text + CRLF + CRLF);

        this._msgHdr.setUint32Property(SearchIntegration._hdrIndexedProperty,
                                       this._reindexTime);
        folder.msgDatabase.Commit(MSG_DB_LARGE_COMMIT);

        this._message = "";
        SearchIntegration._log.info("Successfully written file");
      }
      catch (ex) {
        SearchIntegration._log.error(ex);
        this._onDoneStreaming(false);
        return;
      }
      this._onDoneStreaming(true);
    },

    onDataAvailable: function(request, context, inputStream, offset, count) {
      try {
        let inStream = Cc["@mozilla.org/scriptableinputstream;1"]
                         .createInstance(Ci.nsIScriptableInputStream);
        inStream.init(inputStream);

        // It is necessary to read in data from the input stream
        let inData = inStream.read(count);

        // Ignore stuff after the first 50K or so
        if (this._message && this._message.length > 50000)
          return 0;

        this._message += inData;
        return 0;
      }
      catch (ex) {
        SearchIntegration._log.error(ex);
        this._onDoneStreaming(false);
      }
    }
  }
};

SearchIntegration._init();
