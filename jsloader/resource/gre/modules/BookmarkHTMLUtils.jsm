çżsš                  i   š   N   f      .                   )            resource://gre/modules/BookmarkHTMLUtils.jsm     c˘                                                     !   #                  
       Af    6    Q;   5      Q;   5      Q;   5      Q;   ¸   
=   	: Q;   ¸   
=   
: Q;   ¸   
=   : Q;   ¸   
=   : Q;   ¸   
=   : Q;   ¸   
=   : Q;   ¸   
=   : Q;   ¸   
=   : Q;   ¸   
A=   =   : Q;   ¸   
A=   =   : Q>   Q?   Q×   Q×   Q×   Q=      Q=      QźB@    Q=   "   !Qn   #>o   #QA;   %¸   &
Y      ]   '   ]   (   ]   )   	a   *: 6   $Q;   +Y      ]   -   a   .   a   /   ]   0   ]   1   ]   2   ]   3   ]   4   ]   5   ]   6   ]   7   ]   8   ]   9   ]   :   ]   ;   ]   <   ]   =   ]   >   ]   ?   ]   '6   ,Q;   @Y      !]   )@]   A   "]   B   #]   C   $]   D   %]   E   &]   F   ']   G   (]   H   )]   I   *]   J   +]   K   ,]   L   -]   M6   ,Q=OUXZ]Ę_	l	x	|	  	  ű	 C	 Ć	;Ě0=ĐĐĐAŐ3Ő1Ő0Ő/Ő2Ő4Ő0Ő-JŇJ.ŇL+OČČČUËËXĘZË]Ě_flrxz|  Ň  Ę  łĘ  ŘĘ  óĘ  É  ů AĘĘĘĘ [Ę Ę ĽĘ ľĘ ůĘ |Ę Ę Ę ĄĘ ČĘ čĘ 8Ę HĘ sĘ {Ę ĽĘĐ Ä ÚĘĘ ýĘĘĘĘ Ę 0Ę ?Ę GĘ RĘ wĘ Ę Đ  !   EXPORTED_SYMBOLS   Ci   Components   interfaces   Cc   classes   Cu   utils   importK   resource://gre/modules/XPCOMUtils.jsmG   resource://gre/modules/Services.jsmE   resource://gre/modules/NetUtil.jsmC   resource://gre/modules/osfile.jsmI   resource://gre/modules/FileUtils.jsmM   resource://gre/modules/PlacesUtils.jsmE   resource://gre/modules/Promise.jsm?   resource://gre/modules/Task.jsm   XPCOMUtils-   defineLazyModuleGetter   PlacesBackupsQ   resource://gre/modules/PlacesBackups.jsm   DeprecatedK   resource://gre/modules/Deprecated.jsm!   Container_Normal#   Container_Toolbar   Container_Menu#   Container_Unfiled!   Container_Places)   LOAD_IN_SIDEBAR_ANNOA   bookmarkProperties/loadInSidebar!   DESCRIPTION_ANNO=   bookmarkProperties/description!   MICROSEC_PER_SEC   EXPORT_INDENT	          serialNumber#   BookmarkHTMLUtils   Object   freeze   importFromURL   importFromFile   exportToFile   defaultPath!   BookmarkImporter   prototype   _safeTrim   _curFrame   _previousFrame   _newFrame!   _handleSeparator#   _handleHead1Begin!   _handleHeadBegin!   _handleLinkBegin+   _handleContainerBegin'   _handleContainerEnd   _handleHeadEnd   _handleLinkEnd   _openContainer   _closeContainer   _appendText#   _setFaviconForURIE   _convertImportedDateToInternalDate   runBatched%   _walkTreeForImport!   BookmarkExporter   _converterOut   _write   _writeAttribute   _writeLine   _writeHeader   _writeContainer/   _writeContainerContents   _writeSeparator   _writeLivemark   _writeItem)   _writeDateAttributes-   _writeFaviconAttribute#   _writeDescription                  #   BookmarkHTMLUtils                  ˙˙˙˙   %   base64EncodeString               |       š   
   %                                        aString   stream   encoder   ü  _       	      ;    5   ¸   
;   5   :    QV   ¸   
T  T  Ů   : Q;    5   ¸   
;   5   :   QV  ¸   	
V   T  Ů   : ŃĘ`ČbÚŃĘcČe×/    CcK   @mozilla.org/io/string-input-stream;1   createInstance   Ci)   nsIStringInputStream   setData   lengthM   @mozilla.org/scriptablebase64encoder;15   nsIScriptableBase64Encoder   encodeToString   ˙˙˙˙   %   escapeHtmlEntities                        š      *                           
             aText Ł  Š  l             T  D   Q=    ¸   
=   =   =   : ¸   
=   =   =   : ¸   
=   =   =   : ¸   
=   	=   
=   : ¸   
=   =   =   : äĘĎm
ĘoĎm
ĘpĎm
ĘqĎm
q2       replace   &   &amp;   g   <	   &lt;   >	   &gt;   "   &quot;   '   &#39;   ˙˙˙˙      escapeUrl                 )       š      	                                        aText =  z  x             T  D   Q=    ¸   
=   =   =   : ä'       replace   "   %22   g   ˙˙˙˙      notifyObservers                 1       š                                              aTopic   aInitialImport    D  |             ;    5   ¸   
@T  T    =      
=   : QŘ
Ď}F    Services   obs   notifyObservers   html-initial	   html   ˙˙˙˙      promiseSoon                 Q       š                                               deferredZ                 ;    ¸   
:     Q;   5   5   ¸   
V   5   ;   5   5   	: QV   5   
ĚČßĎ  Ę    Promise   defer   Services   tm   mainThread   dispatch   resolve   Ci   nsIThread   DISPATCH_NORMAL   promise   ˙˙˙˙   #   BHU_importFromURL                        š                                      @      aSpec   aInitialImport!  ]               ;    ¸   
    : Ń  Ł 	   Task   spawn   ˙˙˙˙   '   BHU_importFromURL/<Á                        š      8                                    .generator   .genrval[  W               É   Ę   ĐQ;    â    ;   5     : QĆ       Q;     R    QY      ¸   
  : ]   B]     Ë  ĐQ;    â    ;   5     : QČÇ   jĆ      Qv   Q;   ¸   	
=   
  =      : Q;    â    ;   5     : Q   pČÇ    Y   ]   C]      Ě  ˘  ĚÝoÍËÉÖŮäÓçÝÎ    notifyObservers   PlacesUtils;   TOPIC_BOOKMARKS_RESTORE_BEGIN!   BookmarkImporter   importFromURL   value	   done?   TOPIC_BOOKMARKS_RESTORE_SUCCESS   Cu   reportErrorA   Failed to import bookmarks from    : =   TOPIC_BOOKMARKS_RESTORE_FAILED    ˙˙˙˙          importer       ˙˙˙˙          ex        *   s       0   g   ˙˙˙˙   Ł   X   ˙˙˙˙
   w      ˙˙˙˙   %   BHU_importFromFile                 U       š   	   &                                @      aFilePath   aInitialImportX    ł                ;    5   r   /;   ¸   
=   =   : Q   5      Q;   ¸   
    : ĐŃ  ľĐŃ  Ę    Ci   nsIFile   Deprecated   warningă   Passing an nsIFile to BookmarksJSONUtils.importFromFile is deprecated. Please use an OS.File path string instead.k   https://developer.mozilla.org/docs/JavaScript_OS.File	   path	   Task   spawn   ˙˙˙˙   )   BHU_importFromFile/<Á                  }      š      O                       +             .generator   .genrvalé    ť             É   Ę   ĐQ;    â    ;   5     : QĆ       QY   ;   5   ¸   
  : ]   B]     Ë  Đ    ;   =   	  R p;   
  R    QY      ¸   
;   5   ¸   
  : : ]   B]     Ë  ĐQ;    â    ;   5     : QČÇ   jĆ      Qv   Q;   ¸   
=     =      : Q;    â    ;   5     : Q   pČÇ    Y   ]   C]      Ě  É  ťĚÝ  ŃÍŰŮ
ŃËÉç˙˙˙éŮäÓçÝÎ    notifyObservers   PlacesUtils;   TOPIC_BOOKMARKS_RESTORE_BEGIN   OS	   File   exists   value	   done   ErrorU   Cannot import from nonexisting html file: !   BookmarkImporter   importFromURL	   Path   toFileURI?   TOPIC_BOOKMARKS_RESTORE_SUCCESS   Cu   reportErrorA   Failed to import bookmarks from    : =   TOPIC_BOOKMARKS_RESTORE_FAILED    ˙˙˙˙          importer       ˙˙˙˙          ex        *   Ő       0   É   ˙˙˙˙     X   ˙˙˙˙
   h   Ů      ˙˙˙˙   !   BHU_exportToFile                 U       š   	   %                                @      aFilePath?!  á$  Ř                ;    5   r   /;   ¸   
=   =   : Q   5      Q;   ¸   
    : ĐŃ  ÚĐŃ  đ    Ci   nsIFile   Deprecated   warningß   Passing an nsIFile to BookmarksHTMLUtils.exportToFile is deprecated. Please use an OS.File path string instead.k   https://developer.mozilla.org/docs/JavaScript_OS.File	   path	   Task   spawn   ˙˙˙˙   %   BHU_exportToFile/<Á                       š      e                       *             .generator   .genrval   bookmarks   count   startTime   exporter˝"  Ű$  ß             É   Ę   ĐQY   ;    ¸   
:  ]   B]      Ë  Đ- Á
:  ¸   
:  5      Q   
5      Q¸   
:  5      Q   
5      QQQ;   ¸   
:     Q;      R    QY      ¸   
  : ]   B]      Ë  ĐQ;   	5   
¸   
=   : ¸   
;   ¸   
:     : Q   :Ć       Qv   Q;   5   ¸   
=   : QČÇ    Y      ]   C]      ĚY   ]   C]      Ě  ď  ßĚ
Ńé˙˙˙ĺÉčŮ
ĚÉ
ËÉÖŮ:Ń  čĘĚÉ  čÉÓâÜ    PlacesBackups!   getBookmarksTree   value	   done	   next	   Date   now!   BookmarkExporter   exportToFile   Services   telemetry!   getHistogramById/   PLACES_EXPORT_TOHTML_MS   add   Components   utils   reportError7   Unable to report telemetry.    ˙˙˙˙          ex        é   >       -  (   ˙˙˙˙
   4   ć      ˙˙˙˙   G   this.BookmarkHTMLUtils<.defaultPathÁ                  b       š   
                                      ő$  Ś%  ó             ;    5   ¸   
=   :       Qv   QČ    ;   5   ¸   
;   5   5   5   =   	: ÖÉÓę<    Services   prefs   getCharPref-   browser.bookmarks.file   OS	   Path	   join   Constants   profileDir   bookmarks.html    ˙˙˙˙          ex                   !      ˙˙˙˙   ˙˙˙˙      Frame                 [       š      K                                        aFrameId ş%   0  ű             AT  6    QA>6   QA;   6   QA=   6   QAB6   QA@6   QA@6   QA>6   	QA>6   
QA>6   QĘ Č Ě Ě &Č .Č 4Č 9Č ?ČČ"    containerId!   containerNesting#   lastContainerType!   Container_Normal   previousText      inDescription   previousLink   previousFeed   previousId#   previousDateAdded1   previousLastModifiedDate   ˙˙˙˙   !   BookmarkImporter                 ?       š                                 	             aInitialImport ;0  Ű0  C            AT  6    QA;   R  6   QA5   ¸   
;   ;   5   R : QĘÉÝ˙˙˙î@ #   _isImportDefaults   _frames   Array	   push   Frame   PlacesUtils+   bookmarksMenuFolderId   ˙˙˙˙      safeTrim                        š                                           	   aStr 1  M1  K            T     T  ¸    
:     T  ĎĚ 	   trim   ˙˙˙˙   I   BookmarkImporter.prototype._curFrameÁ                          š                                            _1  1  O            A5    A5    Ů   ?7Ő-    _frames   length   ˙˙˙˙   S   BookmarkImporter.prototype._previousFrameÁ                          š                                            °1  ę1  S            A5    A5    Ů   ×7Ö-    _frames   length   ˙˙˙˙      newFrame                ŕ      š      Ş                        +              containerId   frame   containerTitle   containerType2  8  [            ×˙   QA5      QV  5     QV  =   6   QV  5     QV  x;   y   2;   y   b;   y   l;   y   v;   y   z   ;   	5   
¸   
V  5   V  ;   	5   
5   : W   Q   d;   	5   W   Q   P;   	5   W   Q   <;   	5   W   Q   (;   	5   W   Q   ;   =   R pV  5   >   K;   	5   
¸   
V   V  5   : Q     Qv  QČ    V  >6   QV  5   >   @;   	5   
¸   
V   V  5   : Q     Qv  QČ    V  V   6   QA5   ¸   
;   V   R : QËÎĎÎl  Ńu
 ju
u
u
uĘ cÚĎ f
ČXĎXĎXĎXĎXËË#çÓËË#çÓ Î×˙˙˙î*    _curFrame   previousText   #   lastContainerType!   Container_Normal!   Container_Places   Container_Menu#   Container_Unfiled#   Container_Toolbar   PlacesUtils   bookmarks   createFolder   containerId   DEFAULT_INDEX   placesRootId+   bookmarksMenuFolderId1   unfiledBookmarksFolderId   toolbarFolderId   Error   Unreached#   previousDateAdded!   setItemDateAdded1   previousLastModifiedDate'   setItemLastModified   previousId   _frames	   push   Frame    ˙˙˙˙         e        ˙˙˙˙         e         y  '        #  '       K     ˙˙˙˙   Ą     ˙˙˙˙   ˙˙˙˙      handleSeparator              [       š                              	          	   aElt   frame ě9  â:        
      A5       QV   ;   5   ¸   
V   5   ;   5   5   : 6   Q     Qv  QČ    Ë7ÚĎ ÎÓ    _curFrame   previousId   PlacesUtils   bookmarks   insertSeparator   containerId   DEFAULT_INDEX    ˙˙˙˙         e            ;       H      ˙˙˙˙   ˙˙˙˙   !   handleHead1Begin                 B       š                                           	   aElt ÷;  Š<  Ľ            A5    Ů   ?   T  ¸   
=   :    A5   ;   5   6   QÍĎÖ6    _frames   length   hasAttribute   places_root   _curFrame   containerId   PlacesUtils   placesRootId   ˙˙˙˙      handleHeadBegin              Â      š                               !          	   aElt   frame K>  "H  ľ      	      A5       QV   @6   QV   ;   6   QV   5   >E   QA5   Ů   ?   A5   ¸   
:  QT  ¸   
=   	:    $A5   
   V   ;   6   Q  &T  ¸   
=   :    $A5   
   V   ;   6   Q   đT  ¸   
=   :    $A5   
   V   ;   6   Q   şT  ¸   
=   :    $A5   
   V   ;   6   Q     Q  QT  ¸   
=   :   QV     V   A¸   
V  : 6   QT  ¸   
=   :   QV     V   A¸   
V  : 6   QČA5    =   6   QËËĎ ÎŢŃ ŐĎÔĎÔĎÔĎÔĚ
Ď
ČĚ
É
Ď
ČĚ
ĘŃ!    _curFrame   previousLink#   lastContainerType!   Container_Normal!   containerNesting   _frames   length   pop   hasAttribute/   personal_toolbar_folder#   _isImportDefaults#   Container_Toolbar   bookmarks_menu   Container_Menu1   unfiled_bookmarks_folder#   Container_Unfiled   places_root!   Container_Places   getAttribute   add_date#   previousDateAddedE   _convertImportedDateToInternalDate   last_modified1   previousLastModifiedDate   previousText       ˙˙˙˙         addDate       modDate        3  }   ˙˙˙˙   ˙˙˙˙      handleLinkBegin                    š   (   ´                
       p          	   aElt   frame	   href   feedUrl	   icon   iconUri   lastCharset   keyword   postData   webPanel   micsumGenURI   generatedTitle   dateAdded   lastModified #I  ĹZ  ů            A5       QV   @6   QV   >6   QV   =   6   QA¸   
T  ¸   
=   : :   QA¸   
T  ¸   
=   : :   QA¸   
T  ¸   
=   	: :   QA¸   
T  ¸   
=   
: :   QA¸   
T  ¸   
=   : :   QA¸   
T  ¸   
=   : :   QA¸   
T  ¸   
=   : :   QA¸   
T  ¸   
=   : :   QA¸   
T  ¸   
=   : :   	QA¸   
T  ¸   
=   : :   
QA¸   
T  ¸   
=   : :   QA¸   
T  ¸   
=   : :   QV     "V   ;   ¸   
V  : 6   QV     ^V   ;   ¸   
V  : 6   Q   6  Qv  QV   5       V   @6   QČČ       !V   @6   QV   5       V     V   A¸   
V  : 6   QV   5      V   ;   5   ¸   
V   5   V   5   ;   5   5   =   : 6   Q     Qv  QČČ    V     K;   5   ¸   
V   5   A¸   
V  : : Q     Qv  QČ    V  D   
QV       Q  Q;   ¸   
V  : W  Q     Qv  QČ    V  D   
QV     ;A¸   
V   5   V  V  : Q     Qv  QČ    ČV     ;   5   ¸   
V   5   V  : QV     A;   5    ¸   !
V   5   ;   5   "V  >;   5    5   #: Q     Qv  QČ    V  E   QV  ¸   $
:  =   %   R;   5    ¸   !
V   5   ;   &?>;   5    5   #: Q     Qv  QČ    V     ";   ¸   '
V   5   V  : QËËËĎ×˙˙˙ńČ×˙˙˙ńČ×˙˙˙ńČ×˙˙˙ńČ×˙˙˙ńČ×˙˙˙ńČ×˙˙˙ńČ×˙˙˙ńČ×˙˙˙ńČ× ˙˙˙ńČ×˙˙˙ńČ×˙˙˙ńČÔÉYÔÎĚĘ
Ë
ĐË
Ę -ĚÉ 4ÉEÚÉĎ ;ÎĚË.ÚĚ
 FÉÓ MÎË
ĐÍÓÎ
âÔ \hâ
ÚĘĎ `
É fÓ kŐÉ5ÚĎ mÉ rÓ wÝ>    _curFrame   previousFeed   previousId   previousText      _safeTrim   getAttribute	   href   feedurl	   icon   icon_uri   last_charset   shortcuturl   post_data   web_panel   micsum_gen_uri   generated_title   add_date   last_modified   NetUtil   newURI   previousLink1   previousLastModifiedDateE   _convertImportedDateToInternalDate   PlacesUtils   bookmarks   insertBookmark   containerId   DEFAULT_INDEX!   setItemDateAdded#   _setFaviconForURI+   setKeywordForBookmark   annotations#   setItemAnnotation   POST_DATA_ANNO   EXPIRE_NEVER   toLowerCase	   true)   LOAD_IN_SIDEBAR_ANNO!   setCharsetForURI    ˙˙˙˙         e        ˙˙˙˙         e        ˙˙˙˙         e        ˙˙˙˙         iconUriObject                    e                    e        ˙˙˙˙         e        ˙˙˙˙         e           9        ň  l        ˛  "        n          	  2          I        ř  "         *   ˙˙˙˙˙˙˙˙C            é     ˙˙˙˙˙˙˙˙÷           <     ˙˙˙˙   b     ˙˙˙˙              Ő           _     ˙˙˙˙   Ď     ˙˙˙˙   ˙˙˙˙   )   handleContainerBegin                          š                                            ţZ  -[  |            A5    5   #?
6   QQÚ"    _curFrame!   containerNesting   ˙˙˙˙   %   handleContainerEnd                ą       š      3                                       frame%\  ^        	      A5       QV   5   >   V   5   #?
6   QQA5   Ů   ?E   QV   5   >   _  QA5     QV  5   >   ,;   5   ¸   
V   5   	V  5   : QA5   ¸   

:  QČËËŘŢË
ËËÚÉ Ň A    _curFrame!   containerNesting   _frames   length   _previousFrame1   previousLastModifiedDate   PlacesUtils   bookmarks'   setItemLastModified   containerId   pop    ˙˙˙˙         prevFrame        W   Y   ˙˙˙˙   ˙˙˙˙      handleHeadEnd                          š                                            k_  _              A¸    
:  QĚ    _newFrame   ˙˙˙˙      handleLinkEnd                u      š                              #              frameí_  Üd  Ą      	      A5       QV   V   5   ¸   
:  6   QV   5      ;   5   ¸   
Y   V   5   ]   V   5   ]   	;   5   
5   ]   V   5   ]   V   5   ]   : ¸   
@;   5   : Q   :V   5      ,;   5   
¸   
V   5   V   5   : Q     Qv  QČ    V   5   >E   QV   5   >   E;   5   
¸   
V   5   V   5   : Q     Qv  QČ    V   =   6   QËÔÉ  ÄÉ  Ö
Î
Î
Ô
Î
Î ŠĘ ŻË ŠÉ °ÉÚÉ ˛ÉÓ şÜ(ÚÉ źÉÓ ÄĎ    _curFrame   previousText	   trim   previousFeed   PlacesUtils   livemarks   addLivemark   title   containerId   parentId   bookmarks   DEFAULT_INDEX   index   feedURI   previousLink   siteURI	   then   Cu   reportError   setItemTitle   previousId1   previousLastModifiedDate'   setItemLastModified       ˙˙˙˙         e        ˙˙˙˙         e         &  ,        )   Č       ň      ˙˙˙˙   S     ˙˙˙˙   ˙˙˙˙      openContainer                       š      v                                     	   aElt e  g  Č            T  5    =      T  5   x=   y   x=   y   =   y   x=   y   n=   y   d=   y   Z=   	y   d=   
y   n=   y   d=   y   Z=   y   a=   y   iz   xA¸   
T  : Q   dA¸   
T  : Q   PA¸   
T  : Q   <A¸   
:  Q   +A5   C6   Q   A¸   
T  : Q   ÎČh  ńu
u
u
u
u
u
u
u
u
u
u
uĘ ÍĎXĎXĎXĚXÍXĎX    namespaceURI9   http://www.w3.org/1999/xhtml   localName   h1   h2   h3   h4   h5   h6   a   dl   ul	   menu   dd   hr#   _handleHead1Begin!   _handleHeadBegin!   _handleLinkBegin+   _handleContainerBegin   _curFrame   inDescription!   _handleSeparator   ˙˙˙˙      closeContainer              I      š   #   ×                        '          	   aElt   frame Ĺg  ^r  č            A5       QV   5     aV   V   5   ¸   
:  6   QV   5     +  Q  QV   5       V   5      V   5     Q;   5   ¸   	
V  ;   
:     <;   5   ¸   
V  ;   
V   5   >;   5   5   : Q     Qv  QČ    V   =   6   Q  QV   5       A5   5   W  Q   V   5   W  QV  >E   QV  >   ";   5   ¸   
V  V  : QČV   B6   QT  5   =      T  5   x=   y   n=   y   d=   y   Z=   y   a=   y   \=   y   W=   y   M=   y   C=   y   9=   y   /=   y   6z   BA¸    
:  Q   6   1   ,A¸   !
:  Q   A¸   "
:  Q   
   Ë îÉÔÉÉŃ	ĘÓÎ[ÚŐÉĎ řÉ ţÓĎ Ę
Ő
ÎŇ
ŢËÎČh  śu
u
u
u
u
u
u
u
u
u
uĘ ĚXXXĚXĚXX    _curFrame   inDescription   previousText	   trim   previousLink   containerId   previousId   PlacesUtils   annotations#   itemHasAnnotation!   DESCRIPTION_ANNO#   setItemAnnotation   EXPIRE_NEVER      _previousFrame1   previousLastModifiedDate   bookmarks'   setItemLastModified   namespaceURI9   http://www.w3.org/1999/xhtml   localName   dl   ul	   menu   dt   h1   h2   h3   h4   h5   h6   a'   _handleContainerEnd   _handleHeadEnd   _handleLinkEnd    ˙˙˙˙         itemId       lastModified                     e         |   _       F   $  ˙˙˙˙   Ü             ˙˙˙˙      appendText                        š                                              str r  śr  8            A5    5   T  6   QĎx#    _curFrame   previousText   ˙˙˙˙   !   setFaviconForURI              #      š      Y                                      aPageURI   aIconURI   aData   faviconURI   ÷t  .{  H            T    IT ¸    
=   :    2;   5   ¸   
T  T B;   5   5   : QT Ů   ×      QT    T W   Q   f  Q=   ;   =   	;   
R  ¸   
:    Q;   ¸   
V  : W   Qn   ;   #?
o   QQČ;   5   ¸   
V   T : Q;   5   ¸   
T  V   B;   5   5   : QĎ
×Ď M VËÍ
ÓĐČŮ lÜě{    schemeIs   chrome   PlacesUtils   favicons3   setAndFetchFaviconForPage1   FAVICON_LOAD_NON_PRIVATE   lengthY   http://www.mozilla.org/2005/made-up-favicon/   serialNumber   -	   Date   getTime   NetUtil   newURI;   replaceFaviconDataFromDataURL    ˙˙˙˙         faviconSpec        z   `   ˙˙˙˙   ˙˙˙˙   C   convertImportedDateToInternalDate                 K       š                                              aDate Ó{  |  s            T  E   Q;    â    T  :      ;   â   T  : źB@   ;   ¸   
:  ÉÍÍÎĚ    isNaN   parseInt	   Date   now   ˙˙˙˙      runBatched                     š                                (          	   aDoc   current	   next ş|  ŕ  {            T      A5       b;   5   ¸   
;   5   : Q;   5   ¸   
;   5   : Q;   5   ¸   
;   5   : QT     Q  Q măV   5   x;   5   	5   
y   ;   5   	5   y   z   4A¸   
V   : Q   A¸   
V   5   : Q   V   5   W     V  W   Q   y măV   5   ;   5   	5   
   A¸   
V   : QV   T     V   5   W     V  W   Q   V   5   W   Q˙˙˙˙˙˙ßßßČ   ý  ý  ý Éh]ĎpĎpĘ 
ĐX
ŐXÍÉ@ nnn Ů
ĐČ
Í
ÉHŘ #   _isImportDefaults   PlacesUtils   bookmarks)   removeFolderChildren+   bookmarksMenuFolderId   toolbarFolderId1   unfiledBookmarksFolderId   nodeType   Ci   nsIDOMNode   ELEMENT_NODE   TEXT_NODE   _openContainer   _appendText	   data   firstChild   _closeContainer   nextSibling   parentNode               s      ˙˙˙˙   #   walkTreeForImport                        š                                           	   aDoc   U  Ľ            ;    5   ¸   
AT  : QŮ1    PlacesUtils   bookmarks   runInBatchMode   ˙˙˙˙      importFromURL               ő       š      E                                     aSpec   deferred   xhr   6  Š            ;    ¸   
:     Q;   5   ¸   
;   5   :    Q   A    6   Q         A   6   
6   	6   Q   ¸   
=   T  : Q   =   6   Q   ¸   
=   : Q   ¸   
:  Q   ,   Qv   Q   ¸   
V   : QČ       5   ĚÉŃĘ ŤÉŃ śĺNŘĐŐŐĚŰË    Promise   defer   CcO   @mozilla.org/xmlextras/xmlhttprequest;1   createInstance   Ci#   nsIXMLHttpRequest   onload   onabort   onerror   ontimeout	   open   GET   responseType   document!   overrideMimeType   text/html	   send   reject   promise   ˙˙˙˙   1   importFromURL/xhr.onloadĹ                  h       š                              
           1  ŕ  ­            A¸    
      5   : Q      ¸   
:  Q   6   Qv   Q      ¸   
V   : QV   pČ    1ŰÚĚŮĚ %   _walkTreeForImport   responseXML   resolve   reject    ˙˙˙˙          e            5       7   *   ˙˙˙˙   ˙˙˙˙   7   importFromURL/xhr.ontimeoutĹ                   $       š                                              Z  ś                  ¸    
;   =   R : QÜ˙˙˙đ4    reject   Error+   xmlhttprequest failed    ˙˙˙˙          e         p   R      Ă       ˙˙˙˙   ˙˙˙˙   !   BookmarkExporter              W      š      ]                        !             aBookmarksTree   rootsMap V  ë  Ć            ;    R     QT  5   - Á
:    Q   ;m5   W  QV  5      !V   ¸   
V  5   V  : QăQ¸   
:  5   ˙˙˙śČ AV   ¸   
=   	: 6   Qf   - Á
:    Q   m5   W  Q  QV   ¸   
V  :   QV  5   E   QV  5   Ů   
>   @A5   5       A5   Z   6   QA5   5   ¸   
V  : QČăQ¸   
:  5   ˙˙˙cČ Č×8OŃÉÜ ÉË˙˙˙îŇ ĐŃÉÔ8  ˘×ĎČß
ĚĐŰ ŇË˙˙˙đŇ@    Map   children   value	   root   set	   next	   done   _root   get'   bookmarksMenuFolder   length	   push    ˙˙˙˙         child                         toolbarFolder   -   unfiledBookmarksFolder                   ˙˙˙˙         key                 	   root       °   ˘      *   O           Z   ˙˙˙˙   Ś   ­   ˙˙˙˙   ˝   |         ˙˙˙˙      exportToFile                 !       š                                      @      aFilePath1  ý  Ý            ;    ¸   
    ¸   
A: : Ř ú Ţ˙˙˙í ú 	   Task   spawn	   bind   ˙˙˙˙      exportToFile/<Á                       š      ~                       2             .generator   .genrval   out_  ě  Ţ            É   Ę   ĐQ;    ¸   
;    5     R :    QĆ       Q;   5   ¸   
;   5   :    Q   ¸   
  X : QA;   5   
¸   
;   5   : 6   	QA5   	¸   
   =   >>: QA¸   
:  QY   A¸   
A5   : ]   B]     Ë  ĐQ   ¸   
;   5   : ¸   
:  Qt   
   !A5   	¸   
:  QA@6   	Qu t   
      ¸   
:  Qu ČÇt   
      ¸   
:  Qu Y   ]   C]      Ě ů ŢĚ
Ü+˙˙˙ŰÉ 3ÍŃĘ ăÉŘ  Ë
ŇĘ čÉ
ÝbĚÓŮîŃÔ
ŢŇ    FileUtils5   openAtomicFileOutputStream	   File   Cc[   @mozilla.org/network/buffered-output-stream;1   createInstance   Ci/   nsIBufferedOutputStream	   init   _converterOutW   @mozilla.org/intl/converter-output-stream;11   nsIConverterOutputStream   utf-8   _writeHeader   _writeContainer   _root   value	   done   QueryInterface'   nsISafeOutputStream   finish   close    ˙˙˙˙          bufferedOut       5   7      ~   Ď       Á   f       ;   &  ˙˙˙˙
   ÷      ˙˙˙˙   C   BookmarkExporter.prototype._writeÁ                         š                                              aText +  i  ˙            A5    ¸   
T  D   Q=   : Qß,    _converterOut   writeString      ˙˙˙˙   U   BookmarkExporter.prototype._writeAttributeÁ                 &       š                                              aName   aValue    Ň              A¸    
=   T  =   T =   : Qĺ0    _write       ="   "   ˙˙˙˙   K   BookmarkExporter.prototype._writeLineÁ                        š                                              aText ě                A¸    
T  =   : QŐ    _write   
   ˙˙˙˙   O   BookmarkExporter.prototype._writeHeaderÁ                   g       š                                            4  Đ              A¸    
=   : QA¸    
=   : QA¸    
=   : QA¸    
=   : QA¸    
=   : QA¸    
=   : QŃŃŃŃŃŃ,    _writeLineG   <!DOCTYPE NETSCAPE-Bookmark-file-1>[   <!-- This is an automatically generated file.K        It will be read and overwritten.+        DO NOT EDIT! -->   <META HTTP-EQUIV="Content-Type" CONTENT="text/html; charset=UTF-8">1   <TITLE>Bookmarks</TITLE>   ˙˙˙˙   U   BookmarkExporter.prototype._writeContainerÁ                Ő      š      l                          6      @     aItem   aIndent   .generatorď  P        	         H   =       QÉ   Ę   ĐQ   A5      KA¸   
=   ;   â   A5   5   : =   : QA¸   
=    : Q   ˇA¸   
   =   : QA¸   	
   : Q   5   
=   H    A¸   
=   =   : Q   0   5   
=   H   A¸   
=   =   : QA¸   
=   ;   â      5   : =   : QA¸   
      : QA¸   
   =   : Q   5      %A¸   
      :    Ë  ĐQ   A5      !A¸   
   =   : Q   A¸   
   =   : Q   ĚĐ - ĚĚFâĘ˙˙˙çÖ×ŃĐŰĐÖáĘ˙˙˙ęÖ×ĘŇÎĚÜ×&       _root   _writeLine	   <H1>%   escapeHtmlEntities   title   </H1>   _write   <DT><H3)   _writeDateAttributes	   root   toolbarFolder   _writeAttribute/   PERSONAL_TOOLBAR_FOLDER	   true-   unfiledBookmarksFolder1   UNFILED_BOOKMARKS_FOLDER   >   </H3>#   _writeDescription   <DL><p>   children/   _writeContainerContents   </DL>   </DL><p>!        ˙˙˙˙   e   BookmarkExporter.prototype._writeContainerContentsÁ               S      š      S                       +      @     aItem   aIndent   .generator   localIndentw  Ž  0            É   Ę   ĐQ   ;       Q   5   - Á
:  Ć       Q   đm5      Q   5   E    Q   5   ¸   
A   :     A¸   
     : Q      5   ;   5      *A¸   	
     :   Ë  ĐQ   Z   5   ;   5   
    A¸   
     : Q   %A¸   
     :   Ë  ĐQăQ¸   
:  5   ˙˙˙ČÇ    Ě < 0ĚŃß8 Ňç
ŰŐ%
ŇÓŐŰŇÎ 3Ë˙˙˙îÓ ;2    EXPORT_INDENT   children   value   annos	   some   _writeLivemark	   type   PlacesUtils5   TYPE_X_MOZ_PLACE_CONTAINER   _writeContainer5   TYPE_X_MOZ_PLACE_SEPARATOR   _writeSeparator   _writeItem	   next	   done    ˙˙˙˙          child             i   BookmarkExporter.prototype._writeContainerContents/<ĺ                        š                                           	   anno   ;  4            T  5    ;   5   2Ô' 	   name   PlacesUtils   LMANNO_FEEDURI   A         6     ˙˙˙˙
   Đ   *     ˙˙˙˙   U   BookmarkExporter.prototype._writeSeparatorÁ                 Z       š                                 
             aItem   aIndent  Í  Ŕ  ?      	      A¸    
T =   : QT  5      +A¸   
=   ;   â   T  5   : : QA¸    
=   : QŐČß˙˙˙ăŃ    _write   <HR   title   _writeAttribute	   NAME%   escapeHtmlEntities   >   ˙˙˙˙   S   BookmarkExporter.prototype._writeLivemarkÁ               ć       š      =                                       aItem   aIndent   feedSpec   siteSpecAnno  Ţ  Ó  G            A¸    
T =   : QT  5   ¸   
A    : 5      QA¸   
=   ;   â   V   : : QT  5   ¸   
A   :   QV     ,A¸   
=   ;   â   V  5   : : QA¸   	
=   
;   â   T  5   : =   : QA¸   
T  T : QŐŐÍŰ ˙˙˙ŕŐČŕ˙˙˙ăßĘ˙˙˙ęŇ'    _write   <DT><A   annos	   find   value   _writeAttribute   FEEDURL   escapeUrl	   HREF   _writeLine   >%   escapeHtmlEntities   title	   </A>#   _writeDescription   ˙˙˙˙   g   BookmarkExporter.prototype._writeLivemark/feedSpec<ĺ                        š                                           	   anno :  i  I            T  5    ;   5   ,Ô' 	   name   PlacesUtils   LMANNO_FEEDURI   ˙˙˙˙   o   BookmarkExporter.prototype._writeLivemark/siteSpecAnno<ĺ                        š                                           	   anno Ô    K            T  5    ;   5   0Ô' 	   name   PlacesUtils   LMANNO_SITEURI   ˙˙˙˙   K   BookmarkExporter.prototype._writeItemÁ                     š   "   ¤                       T      @     aItem   aIndent   .generator   uri   keyword   postDataAnnoí  u  R      	      É   Ę   ĐQ;    â    :     Ë  ĐQ@   Q;   ¸   
   5   :    Q   *Ć       Qv   QČÇ   ĚČÇ    A¸   
   =   : QA¸   
=   ;   â      5   : : QA¸   	
   : QA¸   

   :    Ë  ĐQ;   5   ¸   
   5   :    Q   5      (A¸   
=   ;   â      : : Q   5   E    Q   5   ¸   
A   :    Q      -A¸   
=   ;   â      5   : : Q   5   E    Q   5   ¸   
A   :    A¸   
=   =   : Q   5      -A¸   
=   ;   â      5   : : Q   5       A¸   
=      5   : QA¸   
=   ;   â      5   : =    : QA¸   !
      : Q   Ě t RĚĘÎ ÖÎÓŇ×á˙˙˙ăŃÍÎŰ
ÉĘÜ$˙˙˙ÜĐ×Éá"˙˙˙ŢçÖĘá%˙˙˙ŰĘŰáĘ˙˙˙ęÖ'    promiseSoon   NetUtil   newURI   uri   _write   <DT><A   _writeAttribute	   HREF   escapeUrl)   _writeDateAttributes-   _writeFaviconAttribute   PlacesUtils   bookmarks+   getKeywordForBookmark   id   keyword   SHORTCUTURL%   escapeHtmlEntities   annos	   find   POST_DATA   value	   some   WEB_PANEL	   true   charset   LAST_CHARSET	   tags	   TAGS   _writeLine   >   title	   </A>#   _writeDescription    ˙˙˙˙          ex      ˙˙˙˙   g   BookmarkExporter.prototype._writeItem/postDataAnno<ĺ                        š                                           	   anno 8  g  i            T  5    ;   5   0Ô' 	   name   PlacesUtils   POST_DATA_ANNO   ˙˙˙˙   O   BookmarkExporter.prototype._writeItem/<ĺ                        š                                           	   anno ú  #  m            T  5    ;   0Ď! 	   name)   LOAD_IN_SIDEBAR_ANNO     ,   $       V      ˙˙˙˙˙˙˙˙f          
   "   Ţ      ˙˙˙˙   _   BookmarkExporter.prototype._writeDateAttributesÁ                 w       š      )                                        aItem   É  w      	      T  5       3A¸   
=   ;   ¸   
T  5    ;   : : QT  5      3A¸   
=   ;   ¸   
T  5   ;   : : QČÍÚ yČÍÚ |N    dateAdded   _writeAttribute   ADD_DATE	   Math   floor!   MICROSEC_PER_SEC   lastModified   LAST_MODIFIED   ˙˙˙˙   c   BookmarkExporter.prototype._writeFaviconAttributeÁ               `      š      [                       (      @     aItem   .generator   faviconď  >Ą        
      É   Ę   ĐQ   5           Ě   Q;   ¸   
   5   :    Ë  Đ   Q   DĆ       Qv   Q;   5   ¸   
=   : QČÇ   ĚČÇ    A¸   
=   	;   
â   
   5   5   : : Q   5   ¸   
=   :  E   Q   5   >   eĆ      Q=   ;   â   ;   5   ¸   
;     5   O :    QA¸   
=      : QČÇ   Ě  ĚËČ*ÖŘÓÚŇć!˙˙˙ßÖÖŃ
ę˙˙˙íĘŘ A    iconuri   PlacesUtils%   promiseFaviconData   uri   Components   utils   reportErrorU   Unexpected Error trying to fetch icon data   _writeAttribute   ICON_URI   escapeUrl	   spec   schemeIs   chrome   dataLen-   data:image/png;base64,%   base64EncodeString   String   fromCharCode   apply	   data	   ICON    ˙˙˙˙          ex       ˙˙˙˙          faviconContents        ,   .       `   2   ˙˙˙˙˙˙˙˙             ý   Y   ˙˙˙˙
   N      ˙˙˙˙   Y   BookmarkExporter.prototype._writeDescriptionÁ               a       š                                	             aItem   aIndent   descriptionAnno  _Ą  _˘        
      T  5    E   QT  5    ¸   
A    :    QV      1A¸   
T =   ;   â   V   5   : : QÎŐČä#˙˙˙ÝN    annos	   find   _writeLine	   <DD>%   escapeHtmlEntities   value   ˙˙˙˙   {   BookmarkExporter.prototype._writeDescription/descriptionAnno<ĺ                        š                                           	   anno ĆĄ  ëĄ              T  5    ;   3Ď 	   name!   DESCRIPTION_ANNO