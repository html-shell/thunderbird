/* debugging prefs */
pref("browser.dom.window.dump.enabled", true);
pref("javascript.options.showInConsole", true);
//pref("javascript.options.strict", true);
pref("nglayout.debug.disable_xul_cache", true);
pref("nglayout.debug.disable_xul_fastload", true);

pref("extensions.autoDisableScopes", 0);
pref("extensions.enabledScopes", 15);

// Will show a progress dialog when saving or sending a message
pref("mailnews.show_send_progress", false);

pref("network.protocol-handler.expose.app", true);



pref("devtools.debugger.force-local", false);
pref("mail.biff.show_new_alert", true);



//There are 3 values for this pref: 
//0 means always ask user, 
//1 means always block remote content,
//2 means always show remote content.
pref("bolt.remote_conent_policy_for_all_msgs", 2);


pref("conversations.hide_quote_length", 5);
pref("conversations.expand_who", 4); // kExpandAuto
pref("conversations.monospaced_senders", "bugzilla-daemon@mozilla.org");
pref("conversations.no_friendly_date", false);
pref("conversations.version", 0);
pref("conversations.nruns", 0);
pref("conversations.uninstall_infos", "{}");
pref("conversations.logging_enabled", false);
pref("conversations.tweak_bodies", true);
pref("conversations.tweak_chrome", true);
pref("conversations.add_embeds", true);
pref("conversations.expensive_quote_detection", false);
pref("conversations.operate_on_conversations", false);
pref("conversations.enabled", true);
pref("conversations.extra_attachments", false);
pref("conversations.compose_in_tab", true);
pref("conversations.unwanted_recipients", "{}");
pref("conversations.hide_sigs", false);

pref("dom.webcomponents.enabled", true);

pref('extensions.mintrayr.dblclickrestore', false);
pref('extensions.mintrayr.showcontext', true);
pref('extensions.mintrayr.minimizeon', 1);
pref("extensions.mintrayr.always", false);

pref('extensions.mintrayr.browser.watchbrowser', true);
pref('extensions.mintrayr.browser.watchbookmarks', false);

pref('extensions.mintrayr.messenger.watchmessenger', true);
pref('extensions.mintrayr.messenger.watchreader', true);
pref('extensions.mintrayr.messenger.watchcomposer', false);

pref('extensions.mintrayr.songbird.watchplayer', true);
pref('extensions.mintrayr.songbird.titlestring', '%artistName% / %trackName%');
pref('extensions.mintrayr.songbird.titlefloating', true);
pref('extensions.mintrayr.songbird.middleclickplays', true);

pref('extensions.mintrayr.instantbird.watchblist', true);

pref('extensions.mintrayr.mozapps.watchdownloads', false);

pref('bolt.close.minimizewhenclosing', true);
pref('bolt.close.dontaskagain', false);

pref('bolt.autoStartup', false);
pref('bolt.createTrayIconWhenMiminize', false);