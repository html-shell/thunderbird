ç¿s¹                ÷  7   ¹   Y   T      ,                   6            resource://gre/components/nsLoginManagerPrompter.js     ±Ç         	                                          V;   5       Q;   5      Q;   5      Q;   5   ¸   
=   	: Q;   5   ¸   
=   
: Q;   5   ¸   
=   : Q;   5   ¸   
=   : Q>   Q?   Q×   Q×   Q?   Q;   Y   ;   ¸   
=   : ]   ;   ¸   
Z  ;   5   `   ;   5   `  ;   5   `  : ]   B]   Y   ]   B]      ]       ]   !   ]   "   ]   #   ]   $6   Q;   %Y   ;   ¸   
=   &: ]   ;   ¸   
Z  ;   5   '`   ;   5   (`  ;   5   )`  : ]   @]   *@]   +@]   ,@]   -B]   @]   .   a   /@]   0   a   1@]   2   	a   3@]   4   
a   5   a   6   ]   $   ]   7   ]   8   ]   9   ]   :   ]   ;   ]   <   ]   =   ]   >   ]   ?   ]   @   ]   A   ]   B   ]   C   ]   D   ]   E   ]   F   ]   G   ]   H   ]   I    ]   J   !]   K   "]   L   #]   M   $]   N   %]   O   &]   P   ']   Q   (]   R   )]   S   *]   T   +]   U6   Qn   VZ  ;   `   ;   %`  o   VQA;   ¸   X
;   V: 6   WQÊ!	  Ë	 ÐÐÐÚAÚ?ÚKÚH
ÈÈ!%'Ê)Ñ
ÈÐ(ÎÎÎÿÿÿÄÈ,Ê0Ê>ÊGÊ  Ê  ­Ð  ´  Ë"ÊÑ
ÈÐ(Î*Î*Î  ÐÈÊ  âÊ  ìÊ  ûÊ 	Ê Ê 0Ê FÊ ¬Ê ÷Ê Ê Ê ÐÊ ÛÊ çÊ øÊ Ê Ê ¬Ê èÊ ûÊ MÊ uÊ Ê ¬Ê »Ê Ê Ê 5Ê JÊ ZÊ kÊ Ê ¦Ê ÖÊ êÊ ûÐ ÉÉÏÿÿÿáÒÉ+    Cc   Components   classes   Ci   interfaces   Cr   results   utils   importK   resource://gre/modules/XPCOMUtils.jsmG   resource://gre/modules/Services.jsm_   resource://gre/modules/PrivateBrowsingUtils.jsmY   resource://gre/modules/SharedPromptUtils.jsm!   PROMPT_DISPLAYED   PROMPT_ADD   PROMPT_NOTNOW   PROMPT_NEVER   PROMPT_UPDATE3   LoginManagerPromptFactory   prototype   IDM   {749e62f4-60ae-4569-a8a2-de78b649660e}   classID   XPCOMUtils   generateQI!   nsIPromptFactory   nsIObserver1   nsISupportsWeakReference   QueryInterface   _debug   _asyncPrompts-   _asyncPromptInProgress   observe   getPrompt   _doAsyncPrompt+   _cancelPendingPrompts   log)   LoginManagerPrompterM   {8aa66d77-1bbb-45a6-991e-b8f47751c291}   nsIAuthPrompt   nsIAuthPrompt2/   nsILoginManagerPrompter   _factory   _window   _browser   _opener   __pwmgr   _pwmgr   __promptService   _promptService   __strBundle   _strBundle   __ellipsis   _ellipsis%   _inPrivateBrowsing   prompt3   promptUsernameAndPassword   promptPassword   _getRealmInfo   promptAuth   asyncPromptAuth	   init   setE10sData)   promptToSavePassword-   _showLoginNotification5   _showSaveLoginNotification3   _removeLoginNotifications)   _showSaveLoginDialog-   promptToChangePassword9   _showChangeLoginNotification-   _showChangeLoginDialogG   promptToChangePasswordWithUsernames   _updateLogin!   _getChromeWindow!   _getNotifyWindow   _getPopupNote   _getNotifyBox)   _repickSelectedLogin'   _getLocalizedString#   _sanitizeUsername+   _getFormattedHostname)   _getShortDisplayHost   _getAuthTarget   _GetAuthInfo   _SetAuthInfo/   _newAsyncPromptConsumer   component   NSGetFactory)   generateNSGetFactory   ÿÿÿÿ   3   LoginManagerPromptFactory                   U       ¹                                              â  !             ;    5   ¸   
A=   C: Q;    5   ¸   
A=   C: Q;    5   ¸   
A=   C: QÜÜÜI    Services   obs   addObserver1   quit-application-granted1   passwordmgr-crypto-loginA   passwordmgr-crypto-loginCanceled   ÿÿÿÿ   W   LoginManagerPromptFactory.prototype.observeÁ                 n       ¹                                               subject   topic	   data   !  +  0             A¸    
=   T : QT =      A¸   
:  Q   >T =      A¸   
:  Q   T =      A¸   
:  QÕÉÑÉ6ÑÉ:Ì    log   Observed: 1   quit-application-granted+   _cancelPendingPrompts1   passwordmgr-crypto-login   _doAsyncPromptA   passwordmgr-crypto-loginCanceled   ÿÿÿÿ   [   LoginManagerPromptFactory.prototype.getPromptÁ               l       ¹   
                                           aWindow	   aIID   prefBranch   prompt  E  =	  >             ;    5   ¸   
=   : W   QAV   ¸   
=   : 6   Q;   R  ¸   
T : W  QV  ¸   	
T  A: QV  ÖÈÑÉB	ÕÓ    Services   prefs   getBranch   signon.   _debug   getBoolPref   debug)   LoginManagerPrompter   QueryInterface	   init   ÿÿÿÿ   e   LoginManagerPromptFactory.prototype._doAsyncPromptÁ                 É      ¹      r                         1              hashKey   prompt   prompter   hostname   httpRealm   hasLogins	   self   runnable[	  c  G             A5       A¸   
=   : Q@   QA5   K   m      ãQLMÿÿÿðQN       A¸   
=   : QA5      7   Q   5      Q   ¸   
   5      5   : - Á
:  ¸   	
:  5   
   Q   
5   W   Q¸   	
:  5   
   Q   
5   W  QQQ   5   ¸   
V   @V  : >W  QV  E   Q   5   5      A¸   
=   : QAC6    Q   C6   QA   QY       ]   W  Q;   5   5   ¸   
V  ;   5   5   : QA¸   
=   : QÑNÉ0ËHÑRÑYÒÐàÔÿÿÿèÉçØÚÊÙÑbÈÌegÏ  íÑ* -   _asyncPromptInProgress   logY   _doAsyncPrompt bypassed, already in progress   _asyncPromptsi   _doAsyncPrompt:run bypassed, no prompts in the queue   prompter   _getAuthTarget   channel   authInfo	   next	   done   value   _pwmgr   countLogins   uiBusyi   _doAsyncPrompt:run bypassed, master password UI busy   inProgress   run   Services   tm   mainThread   dispatch   Ci   nsIThread   DISPATCH_NORMAL;   _doAsyncPrompt:run dispatched   ÿÿÿÿ      LoginManagerPromptFactory.prototype._doAsyncPrompt/runnable.runÁ                ü      ¹      k                        2              ok   consumer^  Ü  h             BW   Q   ¸    
=      =   : Q   ¸   
   5      5      5   : W   Q     Qv  QV  ;   5   rE   QV  5   	;   
5      È   !Q   ¸    
=   : QÈ   =  Qv  Q;   5   ¸   
=   V  =   : QÈ       5      &Q   B6   Q   B6   Q   5   K   ´mW  V  5       
      ¸    
=   V  5   =   V   : QV      1V  5   ¸   
V  5      5   : Q   #V  5   ¸   
V  5   C: Q     Qv  QÈ    ãQLMÿÿÿLQN   ¸   
:  QT
á
ÖÊÊlÍoâá
ÛÌ
ÖËs
ËwÑÌÌ{Í0  ¹ÊÊ@
êT,ìãßÐ    loga   _doAsyncPrompt:run - performing the prompt for '   '   promptAuth   channel   level   authInfo   Components   Exception   result   Cr-   NS_ERROR_NOT_AVAILABLE   _doAsyncPrompt:run bypassed, UI is not available in this context   utils   reportErrorU   LoginManagerPrompter: _doAsyncPrompt:run:    
   _asyncPrompts   inProgress-   _asyncPromptInProgress   consumers   callback!   Calling back to 	    ok=   onAuthAvailable   context   onAuthCancelled   _doAsyncPrompt    ÿÿÿÿ         e        ÿÿÿÿ         e        ÿÿÿÿ         e       0  º       t  X           X       `   X   ÿÿÿÿÿÿÿÿ             ¾   1   ÿÿÿÿ   Í     ÿÿÿÿ   3         ÿÿÿÿ   s   LoginManagerPromptFactory.prototype._cancelPendingPromptsÁ                ÷       ¹      C                                      asyncPrompts   prompt   consumer  æ               A¸    
=   : QA5   W   QA5   Y   6   QV   K   ¶mW  V  5      A¸    
=   : Q   V  5   K   pmW  V  5       
   WA¸    
=   V  5   : QV  5   ¸   	
V  5   
C: Q     Qv  QÈ    ãQLMÿÿÿQNãQLMÿÿÿJQNÑËÑ7  »ÊÉÑ@Ì0uÊÊ@Û
ãëF    logA   Canceling all pending prompts...   _asyncPrompts   __proto__   inProgress;   skipping a prompt in progress   consumers   callbackK   Canceling async auth prompt callback    onAuthCancelled   context    ÿÿÿÿ         e       9   ¼      s   v       ¨   #       Ì      ÿÿÿÿ   ÿÿÿÿ   O   LoginManagerPromptFactory.prototype.logÁ                 J       ¹                                              message û  ¬  ­             A5        ;   â   =   T  =   : Q;   5   ¸   
=   T  : QÝÞD    _debug	   dump+   Pwmgr PromptFactory:    
   Services   console!   logStringMessage)   Pwmgr PrompFactory:    ÿÿÿÿ   )   LoginManagerPrompter                          ¹                                              ã  è  Ë              !    ÿÿÿÿ   K   LoginManagerPrompter.prototype._pwmgrÁ                   9       ¹                                            æ    Û             A5        *A;   5   ¸   
;   5   : 6    QA5    ÒÊ  ÝÉ    __pwmgr   Cc9   @mozilla.org/login-manager;1   getService   Ci   nsILoginManager   ÿÿÿÿ   [   LoginManagerPrompter.prototype._promptServiceÁ                   9       ¹                                            ä  ®  ã             A5        *A;   5   ¸   
;   5   : 6    QA5    ÑÊ  æ
É    __promptService   CcO   @mozilla.org/embedcomp/prompt-service;1   getService   Ci#   nsIPromptService2   ÿÿÿÿ   S   LoginManagerPrompter.prototype._strBundleÁ                 c       ¹   	   0                                         bunServiceò    í             A5        T;   5   ¸   
;   5   : W   QAV   ¸   
=   : 6    QA5        =   pA5    
ÑÊ  ïÈÌ  ñÉ
    __strBundle   CcA   @mozilla.org/intl/stringbundle;1   getService   Ci-   nsIStringBundleService   createBundlee   chrome://passwordmgr/locale/passwordmgr.propertiesY   String bundle for Login Manager not present!   ÿÿÿÿ   Q   LoginManagerPrompter.prototype._ellipsisÁ                  h       ¹   	   #                        	           ¶  È   ü       	      A5        YA=   6    QA;   5   ¸   
=   ;   5   : 5   6    Q      Qv   QÈ    A5    Ì0ÒÏ  ÓÓ    __ellipsis   &    Services   prefs   getComplexValue   intl.ellipsis   Ci-   nsIPrefLocalizedString	   data    ÿÿÿÿ          e            4       N      ÿÿÿÿ   ÿÿÿÿ   c   LoginManagerPrompter.prototype._inPrivateBrowsingÁ                   )       ¹                                            !  Ú"  	            A5        ;   ¸   
A5    :    CÒÉ     _window)   PrivateBrowsingUtils-   isContentWindowPrivate   ÿÿÿÿ   E   LoginManagerPrompter.prototype.logÁ                 J       ¹                                              message W#  ÿ#              A5        ;   â   =   T  =   : Q;   5   ¸   
=   T  : QÝÞ@    _debug	   dump!   Pwmgr Prompter:    
   Services   console!   logStringMessage   ÿÿÿÿ   K   LoginManagerPrompter.prototype.promptÁ                 t       ¹      '                                        aDialogTitle   aText   aPasswordRealm   aSavePassword   aDefaultText   aResult      ô$  ¬&  0            T ;    5   5      ;   5   5   pA¸   
=   : QT    T T 6   QA5   	¸   

A5   T  T T @Y   : ÓÐÑÌÓÏ ;3    Ci   nsIAuthPrompt'   SAVE_PASSWORD_NEVER   Components   results1   NS_ERROR_NOT_IMPLEMENTED   log7   ===== prompt() called =====   value   _promptService   prompt   _window   ÿÿÿÿ   q   LoginManagerPrompter.prototype.promptUsernameAndPasswordÁ       
   
           ¹   &   $                          R             aDialogTitle   aText   aPasswordRealm   aSavePassword   aUsername   aPassword   selectedLogin   checkBox   checkBoxLabel   hostname   realm   unused!   canRememberLogin   foundLogins   ok   newLogin      '  è4  F            A¸    
=   : QT ;   5   5      ;   5   5   p@W   QY   B]   W  Q@W  QA¸   	
T : - Á
:  ¸   

:  5      Q   
5   W  Q¸   

:  5      Q   
5   W  Q¸   

:  5      Q   
5   W  QQQV    V  QA5      BW  Q   7T ;   5   5   E   QA5   ¸   
V  : W  QV     A¸   
=   : W  QA5   ¸   
Y   V  @V  : W  QV  Ù   >   V  >7W   QT 5      !A¸   
V  T 5   : W   QV      BV  C6   QT V   5   6   QT 5       T V   5   6   QA5   ¸   
A5   T  T T T V  V  : W  QV   D   QV  5    D   QV      
V  T 5       A¸    
=   : QV  A¸   
V  T 5   : W   QV       A¸    
=   V  : Q;   5   ¸   
;   5   : W  	QV  	¸    
V  @V  T 5   T 5   =   !=   !: QA5   ¸   "
V  	: Q   pT 5   V   5      8A¸    
=   #V  : QA¸   $
V   T 5   : Q   &A¸    
=   %: QA¸   $
V   : QV  ÑÓÐËËÔÿÿÿäÉççØ
ËÖÑÈÍÈ
× aÈ fËË lÈ
ÌÈ mÈ
Ë
ÒÉÒ zÓÌÈ zÈËÐÉÑ ÔÈ  Ö
ÑÊ ÈÔÚ ÚÒ3ÖÝÑÐ
    log]   ===== promptUsernameAndPassword() called =====   Ci   nsIAuthPrompt3   SAVE_PASSWORD_FOR_SESSION   Components   results1   NS_ERROR_NOT_IMPLEMENTED   value   _getRealmInfo	   next	   done%   _inPrivateBrowsing3   SAVE_PASSWORD_PERMANENTLY   _pwmgr+   getLoginSavingEnabled'   _getLocalizedString!   rememberPassword   findLogins   length)   _repickSelectedLogin   username   password   _promptService3   promptUsernameAndPassword   _windowY   No password entered, so won't offer to save.'   New login seen for    CcM   @mozilla.org/login-manager/loginInfo;1   createInstance   nsILoginInfo	   init      addLogin/   Updating password for     _updateLoginU   Login unchanged, no further action needed.   ÿÿÿÿ   [   LoginManagerPrompter.prototype.promptPasswordÁ       
   
     Æ      ¹   "   â                          @             aDialogTitle   aText   aPasswordRealm   aSavePassword   aPassword   checkBox   checkBoxLabel   hostname   realm   username!   canRememberLogin   foundLogins   i   ok   newLogin     6  ~?  ¬            A¸    
=   : QT ;   5   5      ;   5   5   pY   B]   W   Q@W  QA¸   	
T : - Á
:  ¸   

:  5      Q   
5   W  Q¸   

:  5      Q   
5   W  Q¸   

:  5      Q   
5   W  QQQ;   â   V  : W  QV  E   QA5       äT ;   5   5   E   QA5   ¸   
V  : W  QV     A¸   
=   : W  QT 5       A5   ¸   
Y   V  @V  : W  Q>W  Q   CmV  V  75   V     T V  V  75   6   QCV  #?W  QãV  V  Ù   ÿÿÿ²A5   ¸   
A5   T  T T V  V   : W  QV  E   'QV   5   E   QV  E   QT 5      ;   5   ¸   
;   5   : W  	QV  	¸   
V  @V  V  T 5   =   =   : QA¸    
=    V  : QA5   ¸   !
V  	: QV  ÑÓÐËËÔÿÿÿâÉççØÎÈÊ
ÖÑÈÍÈ
É× ÅÈ Ì%C7S
 ÌÓ× Ì0Ì Ð ÌÕ ÖÖÈ ÖÈë
ÑÊ ÛÈØÒ ÝÖÕ
    logG   ===== promptPassword called() =====   Ci   nsIAuthPrompt3   SAVE_PASSWORD_FOR_SESSION   Components   results1   NS_ERROR_NOT_IMPLEMENTED   value   _getRealmInfo	   next	   done%   decodeURIComponent%   _inPrivateBrowsing3   SAVE_PASSWORD_PERMANENTLY   _pwmgr+   getLoginSavingEnabled'   _getLocalizedString!   rememberPassword   findLogins   username   password   length   _promptService   promptPassword   _window   CcM   @mozilla.org/login-manager/loginInfo;1   createInstance   nsILoginInfo	   init   '   New login seen for    addLogin      S      ÿÿÿÿ   Y   LoginManagerPrompter.prototype._getRealmInfoÁ               ¬       ¹   	   8                                      aRealmString   httpRealm   uri   pathname#   formattedHostname ®A  @C  ÷      	           W   QV   ¸    
T  :    f    ;   5   ¸   
T  @@: W  Q=   W  QV  5   =      V  5   W  QA¸   
V  : W  QZ  V  `   V  V  `  V  5   `  ÊÎÖÈÊÏÎÌÈÈÍÎ 	   test   Services   io   newURI   	   path   /+   _getFormattedHostname   username                                          ^.+ \(.+\)$       ÿÿÿÿ   S   LoginManagerPrompter.prototype.promptAuthÁ                    ¹   ?   Ç                       t             aChannel   aLevel   aAuthInfo   selectedLogin   checkbox   checkboxLabel   epicfail   canAutologin   hostname   httpRealm   foundLogins!   canRememberLogin   notifyBox   ok   rememberLogin   username   password   newLogin   notifyObj   2D  V              @W   QY   B]    W  Q@W  QBW  QBW  QA¸   
=   : QA¸   
:  QA¸   
T  T : - Á
:  ¸   
:  5      Q   
5    W  Q¸   
:  5      Q   
5    W  QQQA5   ¸   
Y   V  @V  : W  QA¸   
=   	V  Ù   
=   : QV  Ù   
>   »V  >7W   QA¸   
T V   5   V   5   : QT 5   ;   5   5   E   KQT 5   ;   5   5    E   ,Q;   5   ¸   
=   : E   QA5       A¸   
=   : QCW  QV  C6    QA5   ¸   
V  : W  QA5      BW  QA¸   
:  W  	QV  E   QV  	    A¸   
=   : W  Q   C  Qv  QCW  Q;   5   ¸    
=   !V  =   ": QÈ    V  W  
QV  
    ]A5   #   &;   $¸   %
A5   #=   &A5   ': QA5   (¸   )
A5   #T  T T V  V  : W  
QV  	   V     V  5    W  QV  
 D   QV   D   
QV     
V  
A¸   *
T : - Á
:  ¸   
:  5      Q   
5    W  Q¸   
:  5      Q   
5    W  QQQV      A¸   
=   +: QV  
A¸   ,
V  V  : W   QV       ÚA¸   
=   -V  =   .V  =   /V  =   0: Q;   15   2¸   3
;   5   4: W  QV  ¸   5
V  @V  V  V  =   6=   6: QA¸   7
:  D   
QV  	W  QV     A¸   8
V  V  : Q   A5   ¸   9
V  : Q   ÄV  V   5      A¸   
=   :V  =   .V  =   /V  =   0: QA¸   7
:  D   
QV  	W  QV     "A¸   ;
V  V   V  : Q   A¸   <
V   V  : Q   &A¸   
=   =: QA¸   <
V   : Q   =  Qv  Q;   5   ¸    
=   >V  =   ": QÈ    V  
Ë õÑ #Ì
ÎÔÿÿÿèÉçØ
ÒÉ )ÈáËËÔÉ 0ÞßÖÉ
Ñ
Ë
ÑÈ
ÈÈÊÍÍÌÖË KËÉáÓÉÈ SÈ \	ÜËÏ >
ËÔÿÿÿéÉçØ
Ñ kÐÈ
  ÕÒÜ pÑÊ sÈÔÒ uÈÒ
Ù
ÚÎ  ÒÜ ÈÒ
ÌÈ 
É
ÙÑÕÌÖË Ë
    value   log;   ===== promptAuth called =====3   _removeLoginNotifications   _getAuthTarget	   next	   done   _pwmgr   findLogins   found    length#    matching logins.   _SetAuthInfo   username   password   flags   Ci%   nsIAuthInformation   AUTH_PROXY   PREVIOUS_FAILED   Services   prefs   getBoolPref-   signon.autologin.proxy%   _inPrivateBrowsingQ   Autologin enabled, skipping auth prompt.+   getLoginSavingEnabled   _getNotifyBox'   _getLocalizedString!   rememberPassword   Components   utils   reportError_   LoginManagerPrompter: Epic fail in promptAuth:    
   _window   PromptUtils   fireDialogEvent-   DOMWillOpenModalDialog   _browser   _promptService   promptAuth   _GetAuthInfoY   No password entered, so won't offer to save.)   _repickSelectedLogin'   New login seen for     @     (   )   CcM   @mozilla.org/login-manager/loginInfo;1   createInstance   nsILoginInfo	   init      _getPopupNote5   _showSaveLoginNotification   addLogin-   Updating password for 9   _showChangeLoginNotification   _updateLoginU   Login unchanged, no further action needed.W   LoginManagerPrompter: Fail2 in promptAuth:     ÿÿÿÿ         e        ÿÿÿÿ         e           B       )   ù      #  7   ÿÿÿÿ   S  1   ÿÿÿÿ   ÿÿÿÿ   ]   LoginManagerPrompter.prototype.asyncPromptAuthÁ              ê      ¹                              '             aChannel   aCallback   aContext   aLevel   aAuthInfo   cancelable   hostname   httpRealm   hashKey   asyncPrompt      V  à\              @W   QA¸    
=   : QA¸   
:  QA¸   
T T : W   QA¸   
T  T : - Á
:  ¸   
:  5      Q   
5   W  Q¸   
:  5      Q   
5   W  QQQT =   V  =   V  W  QA¸    
=   	V  : QA5   
5   V  7W  QV     7A¸    
=   T : QV  5   ¸   
V   : QV   A¸    
=   T : QY   Z  V   `   ]   T  ]   T ]   T ]   B]   A]   W  QA5   
5   V  V  8QA5   
¸   
:  Q   B  Qv  Q;   5   ¸   
=   V  =   : QV  pÈ    V    Ñ ÌÎÈ
ÎÔÿÿÿèÉçØ
ÞÖ
ÕÕØÕÍÈÈÈËÕÖÌÖË ºÌ    logE   ===== asyncPromptAuth called =====3   _removeLoginNotifications/   _newAsyncPromptConsumer   _getAuthTarget	   next	   done   value   |'   Async prompt key =    _factory   _asyncPromptss   Prompt bound to an existing one in the queue, callback =    consumers	   pushW   Adding new prompt to the queue, callback =    channel   authInfo   level   inProgress   prompter   _doAsyncPrompt   Components   utils   reportErrorO   LoginManagerPrompter: asyncPromptAuth: 9   
Falling back to promptAuth
    ÿÿÿÿ         e                   ¨  6   ÿÿÿÿ   ÿÿÿÿ   G   LoginManagerPrompter.prototype.initÁ               u       ¹      &                                        aWindow   aFactory   prefBranch  T]  y^  Ð            AT  6    QAT D   Q@6   QA@6   QA@6   Q;   5   ¸   
=   : W   QAV   ¸   	
=   
: 6   QA¸   
=   : QÊÑÈÈÖÈÑÉÑ$    _window   _factory   _browser   _opener   Services   prefs   getBranch   signon.   _debug   getBoolPref   debug   log/   ===== initialized =====   ÿÿÿÿ   U   LoginManagerPrompter.prototype.setE10sDataÁ                 ;       ¹                                              aBrowser   aOpener  ^  L_  Û            A5    ;   5   r    ;   =   R pAT  6   QAT 6   QÒËÊÊ    _window   Ci%   nsIDOMChromeWindow   Error   Unexpected call   _browser   _opener   ÿÿÿÿ   g   LoginManagerPrompter.prototype.promptToSavePasswordÁ               {       ¹   
                                           aLogin   notifyObj _  Ë`  ç            A¸    
:  D   QA¸   
:  W   Q;   5   ¸   
=   : ¸   
;   : QV      A¸   
V   T  : Q   A¸   	
T  : QÈÑÈéØÏ"    _getPopupNote   _getNotifyBox   Services   telemetry!   getHistogramById9   PWMGR_PROMPT_REMEMBER_ACTION   add!   PROMPT_DISPLAYED5   _showSaveLoginNotification)   _showSaveLoginDialog   ÿÿÿÿ   k   LoginManagerPrompter.prototype._showLoginNotificationÁ             Í       ¹      @                                        aNotifyBox   aName   aText   aButtons   oldBar   newBar   priority    Fa  ]e  ø      
      T  ¸    
T : W   QT  5     QA¸   
=   T =   : QT  ¸   
T T =   V  T : W  QV  5   #?
6   QQV  ;   	¸   

:  XN 6   QV      2A¸   
=   T =   : QT  ¸   
V   : QÍ	È
ÍÛÊ ýÈ Ø 
ÐÍÛÒ& 1   getNotificationWithValue)   PRIORITY_INFO_MEDIUM   log   Adding new #    notification bar%   appendNotificationS   chrome://mozapps/skin/passwordmgr/key.png   persistence   timeout	   Date   now+   (...and removing old %    notification bar)%   removeNotification   ÿÿÿÿ   s   LoginManagerPrompter.prototype._showSaveLoginNotificationÁ              ¸      ¹   !   2                         ,      @      aNotifyObj   aLogin   neverButtonText)   neverButtonAccessKey%   rememberButtonText/   rememberButtonAccessKey   displayHost!   notificationText   displayUser   pwmgr   mainAction!   secondaryActions   browser!   notNowButtonText+   notNowButtonAccessKey   buttons   promptHistogram åf  v              A¸    
=   : W   QA¸    
=   : W  QA¸    
=   : W  QA¸    
=   : W  QA¸   
   5   : W  QV  Q   5      MA¸   
   5   : W  QA¸    
=   	Z  V  `   V  `  : W  Q   &A¸    
=   
Z  V  `   : W  QA5      Q;   5   ¸   
=   :    QT  A¸   
:     ÂY   V  ]   V  ]       ]   W  QZ  Y   V   ]   V  ]      ]   `   W  QA¸   
:  5      QQT  ¸   
   =   V  =   V  V  Y   ;   ¸   
:  X']   C]   : Q   ÕA¸    
=   : W  	QA¸    
=   : W  
QZ  Y   V  ]   V  ]   @]      ]   `   Y   V   ]   V  ]   @]      ]   `  Y   V  	]   V  
]   @]      ]   `  W  QA¸    
T  =   V  V  : Q !Í
ÈÍ
ÈÍ
ÈÍ
ÈÒÈÊH
ÒÈÈ#ÈÈ .ÍÈ#È 2È :ÌÖÉË  ½
ÉÉÏ K

É
É
Ó X
ÈÐØÉÉ*Ì	Ì* ZÉ
ÍÈ
ÍÈ

É
É

Î q
É
É

Î {
É
É

ÓÐÈ = '   _getLocalizedStringA   notifyBarNeverRememberButtonTextK   notifyBarNeverRememberButtonAccessKeyG   notifyBarRememberPasswordButtonTextQ   notifyBarRememberPasswordButtonAccessKey)   _getShortDisplayHost   hostname   username#   _sanitizeUsername'   rememberPasswordMsg;   rememberPasswordMsgNoUsername   _pwmgr   Services   telemetry!   getHistogramById9   PWMGR_PROMPT_REMEMBER_ACTION   _getPopupNote   label   accessKey   callback!   _getNotifyWindow   browser	   show   password-save5   password-notification-icon	   Date   now   timeout'   persistWhileVisible3   notifyBarNotNowButtonText=   notifyBarNotNowButtonAccessKey   popup-   _showLoginNotification   ÿÿÿÿ      LoginManagerPrompter.prototype._showSaveLoginNotification/mainAction.callbackÁ                 W       ¹                                              aNotifyObj   aButton  n  òn  C               ¸    
;   : Q   ¸   
   : Q;   5   ¸   
@=   @: Q   ¸   
:  Q
Õ
Õ
Ü
Ð    add   PROMPT_ADD   addLogin   Services   obs   notifyObservers7   LoginStats:NewSavedPassword   focus   ÿÿÿÿ   ©   LoginManagerPrompter.prototype._showSaveLoginNotification/secondaryActions<.callbackÁ                 A       ¹                                              aNotifyObj   aButton  »o  kp  P               ¸    
;   : Q   ¸   
   5   B: Q   ¸   
:  QÕÛÐ    add   PROMPT_NEVER+   setLoginSavingEnabled   hostname   focus   ÿÿÿÿ      LoginManagerPrompter.prototype._showSaveLoginNotification/buttons<.callbackÁ                 2       ¹                                              aNotifyObj   aButton  es  t  i               ¸    
   : Q;   5   ¸   
@=   @: QÕÜH    addLogin   Services   obs   notifyObservers7   LoginStats:NewSavedPassword   ÿÿÿÿ      LoginManagerPrompter.prototype._showSaveLoginNotification/buttons<.callbackÁ                        ¹                                              aNotifyObj   aButton  Ét  -u  u               ¸    
   5   B: QÛ4 +   setLoginSavingEnabled   hostname   ÿÿÿÿ      LoginManagerPrompter.prototype._showSaveLoginNotification/buttons<.callbackÁ                          ¹                                              ëu  ûu               !    ÿÿÿÿ   q   LoginManagerPrompter.prototype._removeLoginNotificationsÁ                 í       ¹      G                                         popupNote   notifyBox   oldBarðv  y              A¸    
:  W   QV      V   ¸   
=   : W   QV      V   ¸   
:  QA¸   
:  W  QV     V  ¸   
=   : W  QV     )A¸   
=   : QV  ¸   
V  : QV  ¸   
=   	: W  QV     )A¸   
=   
: QV  ¸   
V  : QÈÈÐÈÏÈÈ
Ð	ÈÑÓÐ	ÈÑÓ%    _getPopupNote   getNotification   password-save   remove   _getNotifyBox1   getNotificationWithValue   logQ   Removing save-password notification bar.%   removeNotification   password-changeU   Removing change-password notification bar.   ÿÿÿÿ   g   LoginManagerPrompter.prototype._showSaveLoginDialogÁ             >      ¹      À                           =             aLogin   displayHost   dialogText   displayUser   dialogTitle   neverButtonText%   rememberButtonText!   notNowButtonText   userChoice   buttonFlags 8z  ­  ¬            ;    5   5   ;    5   5   ;    5   5   ;    5   5   ;    5   5   ;    5   5   ;    5   5     QA¸   
T  5   : W   QV  QT  5   	   KA¸   

T  5   	: W  QA¸   
=   Z  V  `   V   `  : W  Q   &A¸   
=   Z  V   `   : W  QA¸   
=   : W  QA¸   
=   : W  QA¸   
=   : W  QA¸   
=   : W  QA¸   
=   : QA5   ¸   
A5   V  V  V  V  V  V  @Y   : 	W  QV  ×   DA¸   
=   T  5   =   : QA5   ¸   
T  5   B: Q   TV  >   8A¸   
=   T  5   : QA5   ¸   
T  : Q   A¸   
=   : Q
ÏààåÐÈÈF
ÐÈÈÈÈ ·ÍÈÈ »È ÀÈ ÀÈÈ ÂÈÈ ÄÈÈ ÆÈÑÓÈÈÈ ÊÈ Ó?àß3ÚÙÑ    Ci   nsIPrompt)   BUTTON_POS_1_DEFAULT-   BUTTON_TITLE_IS_STRING   BUTTON_POS_0   BUTTON_POS_1   BUTTON_POS_2)   _getShortDisplayHost   hostname   username#   _sanitizeUsername'   _getLocalizedString'   rememberPasswordMsg;   rememberPasswordMsgNoUsername#   savePasswordTitle-   neverForSiteButtonText%   rememberButtonText!   notNowButtonText   logG   Prompting user to save/ignore login   _promptService   confirmEx   _window   Disabling '    logins by request.   _pwmgr+   setLoginSavingEnabled#   Saving login for    addLogin   Ignoring login.   ÿÿÿÿ   k   LoginManagerPrompter.prototype.promptToChangePasswordÁ               b       ¹      %                           
             aOldLogin   aNewLogin   notifyObj    Ö  è      	      A¸    
:  D   QA¸   
:  W   QV      %A¸   
V   T  T 5   : Q   A¸   
T  T 5   : QÈÑÈ ÏÈ ìÉ×;    _getPopupNote   _getNotifyBox9   _showChangeLoginNotification   password-   _showChangeLoginDialog   ÿÿÿÿ   w   LoginManagerPrompter.prototype._showChangeLoginNotificationÁ      
   	     ,      ¹      ë                          )      @      aNotifyObj   aOldLogin   aNewPassword!   notificationText   displayUser!   changeButtonText+   changeButtonAccessKey	   self   mainAction   browser)   dontChangeButtonText3   dontChangeButtonAccessKey   buttons   promptHistogram Ñ  S  û            V   Q   5       EA¸   
   5    : W  QA¸   
=   Z  V  `   : W   Q   A¸   
=   : W   QA¸   
=   : W  QA¸   
=   : W  QA   Q;   5   ¸   	
=   
:    QT  A¸   
:     ¾Y   V  ]   V  ]   @]       ]   W  QA¸   
:  5   W  QQ;   5   ¸   	
=   
: ¸   
;   : QT  ¸   
V  =   V   =   V  @Y   ;   ¸   
:  X']   C]   : Q   ªA¸   
=   : W  QA¸   
=   : W  QZ  Y   V  ]   V  ]   @]      ]   `   Y   V  ]   V  ]   @]      ]   `  W  QA¸   
T  =   V   V  : QÊ@
ÒÈÈ%È ÿÍÈ ÈÍ
ÈÍ
È ÖÉË  ¹
ÉÉÏ 
ÈÏé×ÉÌ	Ì "É
ÍÈ
ÍÈ

É
É

Î 7
É
É

Ó AÐÈ A=    username#   _sanitizeUsername'   _getLocalizedString#   updatePasswordMsg/   updatePasswordMsgNoUser3   notifyBarUpdateButtonText=   notifyBarUpdateButtonAccessKey   Services   telemetry!   getHistogramById5   PWMGR_PROMPT_UPDATE_ACTION   _getPopupNote   label   accessKey   popup   callback!   _getNotifyWindow   browser   add!   PROMPT_DISPLAYED	   show   password-change5   password-notification-icon	   Date   now   timeout'   persistWhileVisible;   notifyBarDontChangeButtonTextE   notifyBarDontChangeButtonAccessKey-   _showLoginNotification   ÿÿÿÿ      LoginManagerPrompter.prototype._showChangeLoginNotification/mainAction.callbackÁ                 0       ¹                                 	             aNotifyObj   aButton                     ¸    
      : Q   ¸   
;   : Q
Ú
Õ#    _updateLogin   add   PROMPT_UPDATE   ÿÿÿÿ      LoginManagerPrompter.prototype._showChangeLoginNotification/buttons<.callbackÁ                        ¹                                              aNotifyObj   aButton  ]  ¸  1               ¸    
      : QÚ+    _updateLogin   ÿÿÿÿ      LoginManagerPrompter.prototype._showChangeLoginNotification/buttons<.callbackÁ                        ¹                                                aNotifyObj   aButton  y  ¶  ;             4    ÿÿÿÿ   k   LoginManagerPrompter.prototype._showChangeLoginDialogÁ             á       ¹      a                                        aOldLogin   aNewPassword   dialogText   dialogTitle   ok   buttonFlags  Ó  L  M            ;    5   5     QV   QT  5      /A¸   
=   Z  T  5   `   : W   Q   A¸   
=   : W   QA¸   
=   : W  QA5   ¸   	
A5   
V  V   V  @@@@Y   : 	 W  QV     1A¸   
=   T  5   : QA¸   
T  T : Q
ÔÈ*ÈÌ RÍÈ VÈÈ YÈÓÌ ]ÉÚÒ+    Ci   nsIPrompt%   STD_YES_NO_BUTTONS   username'   _getLocalizedString#   updatePasswordMsg/   updatePasswordMsgNoUser'   passwordChangeTitle   _promptService   confirmEx   _window   log7   Updating password for user    _updateLogin   ÿÿÿÿ      LoginManagerPrompter.prototype.promptToChangePasswordWithUsernamesÁ             è       ¹      I                                       logins   count   aNewLogin   usernames   dialogText   dialogTitle   selectedIndex   ok   selectedLogin   buttonFlags       u            ;    5   5     QT  ¸   
    : W   QA¸   
=   : W  QA¸   
=   : W  QY   @]   W  QA5   ¸   	
A5   
V  V  V   Ù   V   V  : W  QV     JT  V  5   7W  QA¸   
=   V  5   : QA¸   
V  T 5   : Q
ÔÏÈÍÈÍÈËÓÈÍ È
ÒÛØ5    Ci   nsIPrompt%   STD_YES_NO_BUTTONS   map'   _getLocalizedString   userSelectText'   passwordChangeTitle   value   _promptService   select   _window   length   log7   Updating password for user    username   _updateLogin   password   ÿÿÿÿ      LoginManagerPrompter.prototype.promptToChangePasswordWithUsernames/usernames<á                 
       ¹                                              l     x            T  5    ,É
    username   ÿÿÿÿ   W   LoginManagerPrompter.prototype._updateLoginÁ               ´       ¹      3                                        login   newPassword   now   propBag    û              ;    ¸   
:  W   Q;   5   ¸   
;   5   : W  QT    4V  ¸   
=   T : QV  ¸   
=   	V   : QV  ¸   
=   
V   : QV  ¸   
=   ?: QA5   ¸   
T  V  : QÌÈÑÊ È×ØØÕØ( 	   Date   now   CcA   @mozilla.org/hash-property-bag;1   createInstance   Ci-   nsIWritablePropertyBag   setProperty   password'   timePasswordChanged   timeLastUsed%   timesUsedIncrement   _pwmgr   modifyLogin   ÿÿÿÿ   _   LoginManagerPrompter.prototype._getChromeWindowÁ               p       ¹   
   ,                                        aWindow   chromeWin   3  ¬            T  ;    5   r   	T  T  ¸   
;    5   : ¸   
;    5   : ¸   
;    5   : 5   5   5   	W   QV   ÎÔÊÊ °ÊÊ °×    Ci%   nsIDOMChromeWindow   QueryInterface+   nsIInterfaceRequestor   getInterface!   nsIWebNavigation   nsIDocShell%   chromeEventHandler   ownerDocument   defaultView   ÿÿÿÿ   _   LoginManagerPrompter.prototype._getNotifyWindowÁ                <      ¹   #   ¼                        0              notifyWin   isE10s   useOpener   chromeDoc   hasHistory   webnav   chromeWinu  Þ¨  »              QA5    5   W   QV   ;   5   rW  QBW  QV   5      ïA¸   
V   : 5   5   W  QV  QV     5A5       ;   	=   
R pA5   5   W  Q   KV   ¸   
;   5   : ¸   
;   5   : W  QV  5   5   ?W  QV  ¸   
=   : E   QV      *A¸   
=   : QV   5   W   QCW  Q  QV  E   QA5   E   
QV     (V   5   ¸   
A5   : W  Q   ]V     A5   W  Q   DA¸   
V   : 5   W  QV  5   ¸   
V   5   5   : W  QY   V   ]   V  ]   ÈÈ   W  Qv  QA¸   
=   V  5   =   V  5    =   !V  5   ": Q@ÈÈ     ä
Ð
Ô
 ÆÉÌÒ0Ë
ÕËÊ ÐÊÊ ÐÈ
Õ ÚÐÉ*
Ñ
Î

Ú# éÖ
ÍÐÌÍÐÎ îÈ	ÉÒÌûË    _window   top   Ci%   nsIDOMChromeWindow   opener!   _getChromeWindow   document   documentElement   _browser   Error5   Expected a browser in e10s   canGoBack   QueryInterface+   nsIInterfaceRequestor   getInterface!   nsIWebNavigation   sessionHistory   count   getAttribute   chromehidden   logS   Using opener window for notification bar.   _opener   gBrowser5   getBrowserForContentWindow   wrappedJSObject+   getBrowserForDocument   notifyWin   browser;   Unable to get notify window:    fileName   :   lineNumber   :    message    ÿÿÿÿ         browser        ÿÿÿÿ         e            è         â  ÿÿÿÿÿÿÿÿâ            ê  K   ÿÿÿÿÿÿÿÿ3           ÿÿÿÿ   Y   LoginManagerPrompter.prototype._getPopupNoteÁ                       ¹      ,                        	              popupNote©  O«              @   Q  Q  QA¸    
:  5     QQA¸   
V  : 5     QV  5   W   QÈ   )  Qv  QA¸   
=   : QÈ    V   LÍ
ÈÏ
ÌÍÔÌØ !   _getNotifyWindow   notifyWin!   _getChromeWindow   wrappedJSObject%   PopupNotifications   logW   Popup notifications not available on window    ÿÿÿÿ         notifyWin       chromeWin        ÿÿÿÿ         e            P       	   I   ÿÿÿÿ   X      ÿÿÿÿ   ÿÿÿÿ   Y   LoginManagerPrompter.prototype._getNotifyBoxÁ                       ¹      /                        
              notifyBoxÿ«  Ö­              @   Q  Q  QA¸    
:  5     QQA¸   
V  : 5     QV  ¸   
V  : W   QÈ   )  Qv  QA¸   
=   : QÈ    V   UÍ
ÈÏ
ÌÍÏÎÌØ !   _getNotifyWindow   notifyWin!   _getChromeWindow   wrappedJSObject%   getNotificationBox   logS   Notification bars not available on window    ÿÿÿÿ         notifyWin       chromeWin        ÿÿÿÿ         e            Y       	   R   ÿÿÿÿ   a      ÿÿÿÿ   ÿÿÿÿ   g   LoginManagerPrompter.prototype._repickSelectedLoginÁ               P       ¹      /                                       foundLogins   username   i  Ü®  ¯  5            >W   Q   3mT  V   75    T    T  V   7V   #?W   QQãV   T  Ù   ÿÿÿÃ@	%3%BÒÉ 6,Î 8 6Ô    username   length       B      ÿÿÿÿ   e   LoginManagerPrompter.prototype._getLocalizedStringÁ                 A       ¹                                              key   formatArgs  â°  Å±  J            T    )A5    ¸   
T  T T Ù   :    A5    ¸   
T  : $ÍÎ LÉÐ'    _strBundle)   formatStringFromName   length#   GetStringFromName   ÿÿÿÿ   a   LoginManagerPrompter.prototype._sanitizeUsernameÁ                 K       ¹                                             username Í²  {³  Z            T  Ù    ×   'T  ¸   
>×: U  QT  A5   U  QT  ¸   
     =   : ËÍÉxÔ    length   substring   _ellipsis   replace   	   ['"]      ÿÿÿÿ   i   LoginManagerPrompter.prototype._getFormattedHostnameÁ               Î       ¹      =                                     	   aURI   uri   scheme   hostname	   port   handler ´  ¶¶  k      
      V   QT  ;    5   r   T  W   Q   #;   5   ¸   
T  @@: W   QV   5   W  QV  =   V   5   W  QV   5   W  QV  ×ÿ   I;   5   ¸   	
V  : W  QV  V  5   
   V  =   V  W  QV  ÎÍÖÈÎÙÎ
Õ
ÈÎÎx    Ci   nsIURI   Services   io   newURI   scheme   ://	   host	   port%   getProtocolHandler   defaultPort   :   ÿÿÿÿ   g   LoginManagerPrompter.prototype._getShortDisplayHostÁ              â       ¹      Q                                     aURIString   displayHost   eTLDService   idnService   uri   baseDomain ¸·  Iº              V   Q;    5   ¸   
;   5   : W  Q;    5   ¸   
;   5   : W  Q;   5   ¸   	
T  @@: W  QV  ¸   

V  : W  QV  ¸   
V  Y   : W   Q   -  Qv  QA¸   
=   T  : QÈ    V       T  W   QV   ÑÊ ÈÑÊ ÈR
ÖÈ
ÏÈÔÍÌÜÈ    CcY   @mozilla.org/network/effective-tld-service;1   getService   Ci-   nsIEffectiveTLDServiceE   @mozilla.org/network/idn-service;1   nsIIDNService   Services   io   newURI   getBaseDomain'   convertToDisplayIDN   logM   _getShortDisplayHost couldn't process     ÿÿÿÿ         e         L   V       £   !   ÿÿÿÿ   ÿÿÿÿ   [   LoginManagerPrompter.prototype._getAuthTargetÁ               G      ¹      z                                        aChannel   aAuthInfo   hostname   realm	   info   idnService  »  0À  ¦            V   QV  QT 5    ;   5   5      ×A¸   
=   : QT  ;   5   r    =   pT  5   W  QV      =   	p;   
5   ¸   
;   5   : W  Q=   V  ¸   
V  5   : =   V  5   W   QT 5   W  QV      V   W  QZ  V   `   V  `  A¸   
T  5   : W   QT 5   W  QV      V   W  QZ  V   `   V  `  
ØÑ
Ï
Í

ÑÊ ¶ÈÔÕÍ
ÉÈ
ÉÐÈ ÇÍÉÈ
É    flags   Ci%   nsIAuthInformation   AUTH_PROXY   log?   getAuthTarget is for proxy auth#   nsIProxiedChannelE   proxy auth needs nsIProxiedChannel   proxyInfo;   proxy auth needs nsIProxyInfo   CcE   @mozilla.org/network/idn-service;1   getService   nsIIDNService   moz-proxy://!   convertUTF8toACE	   host   :	   port   realm+   _getFormattedHostname   URI   ÿÿÿÿ   W   LoginManagerPrompter.prototype._GetAuthInfoÁ                      ¹      )                           	             aAuthInfo   username   password   flags [Á  ¤Â  Ö            V   QV  QT  5    W  QV  ;   5   5   E   QT  5      &T  5   =   T  5   W   Q   T  5   W   QT  5   W  QZ  V   `   V  `  
Íâ!áÍÍÈ
É
    flags   Ci%   nsIAuthInformation   NEED_DOMAIN   domain   \   username   password   ÿÿÿÿ   W   LoginManagerPrompter.prototype._SetAuthInfoÁ               ¯       ¹   
   4                           
             aAuthInfo   username   password   flags   idx   Ã  Å  ê            T  5    W   QV   ;   5   5      uT ¸   
=   : W  QV  ×ÿ   T  T 6   Q   <T  T ¸   
>V  : 6   QT  T ¸   
V  ?: 6   Q   T  T 6   QT  T 6   	QÍÔp
ÏÈÑÒÉÓÎÌÌ    flags   Ci%   nsIAuthInformation   NEED_DOMAIN   indexOf   \   username   domain   substring   password   ÿÿÿÿ   m   LoginManagerPrompter.prototype._newAsyncPromptConsumerÁ                 G       ¹      $                                       aCallback   aContext  ¼Å  ùÆ  û            Y   ;    ¸   
Z  ;   5   `   : ]   T  ]   T ]       ]   Ð'ÎÿÿÿéÈÈÈË     XPCOMUtils   generateQI   Ci   nsICancelable   QueryInterface   callback   context   cancel   ÿÿÿÿ      LoginManagerPrompter.prototype._newAsyncPromptConsumer/<.cancelÁ                   )       ¹                                            lÆ  ïÆ               A5    ¸   
A5   B: QA@6    QA@6   QØÈÈ    callback   onAuthCancelled   context