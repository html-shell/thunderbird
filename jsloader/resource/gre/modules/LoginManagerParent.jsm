ç¿s¹                @  #   ¹             	                          0     resource://gre/modules/LoginManagerParent.jsm     ¢3                                      ;   5       Q;   5      Q;   5      Q;    ¸   
=   : Q;    ¸   
=   	: Q;   
¸   
A=   =   : Q;   
¸   
A=   =   : QAf    0   Q;   Q;   5   ¸   
=   ;   B: Q;   â   :  Qn   Y      ]      ]      ]      ]      ]      ]   1   QÊ	8	?ÐÐÐÕ3Õ1ÒTÒQÌM48:<à?Î?ÊÊKÊOÊyÊ  »Ê  éÐ?    Cu   Components   utils   Ci   interfaces   Cc   classes   importK   resource://gre/modules/XPCOMUtils.jsmG   resource://gre/modules/Services.jsm   XPCOMUtils-   defineLazyModuleGetter-   UserAutoCompleteResult]   resource://gre/modules/LoginManagerContent.jsm!   AutoCompleteE10SW   resource://gre/modules/AutoCompleteE10S.jsm!   EXPORTED_SYMBOLS   gDebug   Services   prefs   addObserver   signon.debug   prefChanged%   LoginManagerParent	   init   observe   receiveMessage   findLogins)   doAutocompleteSearch   onFormSubmit                  %   LoginManagerParent   1   PasswordsMetricsProvider                  ÿÿÿÿ      log            ^      ¹                                 	             pieces%   generateLogMessage   message Z                 àU  Q    W   Q;        V   T  :   Q;   â   V  =   : Q;   5   ¸   
V  : QÊ.1È
ÈØÙ+    gDebug	   dump   
   Services   console!   logStringMessage   ÿÿÿÿ   %   generateLogMessage                4       ¹                                         	   args   strings   ~               f       QT  ¸    
   : Q   ¸   
=   : ËÓ+Ñ    forEach	   join                      /   Login Manager (parent):                  ÿÿÿÿ   1   log/generateLogMessage/<Á                á       ¹      5                                    arg ×  Z               T  '=    H   "      ¸   
T  : Q   ¹T  '=   H   $      ¸   
=   : Q   T  @H   $      ¸   
=   : Q   b      ¸   
;   ¸   
T  @×: : Q   2   Qv   Q      ¸   
=   : QÈ    
ÊÝÊßß+
ãÿÿÿóÉÌ
á	    string	   push   undefined	   null	   JSON   stringify   <<something>>    ÿÿÿÿ          err            /       ´   &   ÿÿÿÿ   ÿÿÿÿ      prefChanged                   %       ¹      
                                     ¬  é  8             n    ;   5   ¸   
=   : 1    QÛ	É+    gDebug   Services   prefs   getBoolPref   signon.debug   ÿÿÿÿ   /   LoginManagerParent.initÁ                 ©       ¹      '                                        mmf  j	  @             ;    5   ¸   
;   5   :    QV   ¸   
=   A: QV   ¸   
=   A: QV   ¸   
=   A: QV   ¸   
=   	A: QV   ¸   
=   
A: Q;   5   ¸   
A=   B: QÑÊAÈCÕÕÕÕÕÜE    CcG   @mozilla.org/globalmessagemanager;1   getService   Ci3   nsIMessageListenerManager%   addMessageListener/   RemoteLogins:findLogins3   RemoteLogins:onFormSubmit?   RemoteLogins:autoCompleteLogins7   LoginStats:LoginEncountered=   LoginStats:LoginFillSuccessful   Services   obs   addObserver7   LoginStats:NewSavedPassword   ÿÿÿÿ   5   LoginManagerParent.observeÁ                        ¹                                               aSubject   aTopic   aData   	  &
  K              /    ÿÿÿÿ   C   LoginManagerParent.receiveMessageÁ                     ¹      g                                       msg	   data D
  Ñ  O             T  5       QT  5   x=   y   2=   y   o=   y   ¸=   y   Ë=   y   Æz   ÆA¸   
V   5   5   	V   5   
V   5   V   5   T  5   5   : Q   A¸   
V   5   V   5   V   5   V   5   V   5   T  5   5   T  5   : Q   ,A¸   
V   T  5   : Q      
   ÍÈh  ùu
\u
hu
mu
ruÊRTÖÉÉÉÍTYX\^ÑÉÉÉÉÍÈ^eXhØXmoXrtXv 	   data	   name/   RemoteLogins:findLogins3   RemoteLogins:onFormSubmit?   RemoteLogins:autoCompleteLogins=   LoginStats:LoginFillSuccessful7   LoginStats:LoginEncountered   findLogins   options%   showMasterPassword   formOrigin   actionOrigin   requestId   target   messageManager   onFormSubmit   hostname   formSubmitURL   usernameField!   newPasswordField!   oldPasswordField   objects   openerWin)   doAutocompleteSearch   ÿÿÿÿ   ;   LoginManagerParent.findLoginsÁ            R      ¹      ·                         <      D   %   showMasterPassword   formOrigin   actionOrigin   requestId   target   logins   allLoginsCount1   PWMGR_FORM_ACTION_EFFECTê    y                 E   Q;    5   5       4   ¸   
=   Y      ]   Z   ]   : Q;    5   ¸   
   =   @:   QV      4   ¸   
=   Y      ]   Z   ]   : Q;    5   5      ÃÆ      Q   Q;   	â   	=   
  : QA   QY   ;   ¸   
Z  ;   5   `   ;   5   `  : ]      ]     Q;    5   ¸   
V  =   B: Q;    5   ¸   
V  =   B: QÈÇÈÇ;    5   ¸   
Y         @: W   Q   ¸   
=   Y      ]   V   ]   : Q;    5   ¸   
=   :   QV   Ù   >   V  ¸   
×: Q   =V   Ù   V     V  ¸   
>: Q   V  ¸   
?: QÌÐÑ ÊÉ|~ÜÈÑ ÊÉ    Ï×Ø

Ð'Î/Î  ÈÏ  §ßßá	ÈÑÊÉ  ­
ÖÈËÖÎÕÐ     Services   logins   isLoggedIn!   sendAsyncMessage1   RemoteLogins:loginsFound   requestId   countLogins      uiBusy   log9   deferring onFormPassword for   XPCOMUtils   generateQI   Ci   nsIObserver1   nsISupportsWeakReference   QueryInterface   observe   obs   addObserver1   passwordmgr-crypto-loginA   passwordmgr-crypto-loginCanceled   findLogins   telemetry!   getHistogramById1   PWMGR_FORM_ACTION_EFFECT   length   add    ÿÿÿÿ      	   self      observer              ]   LoginManagerParent.findLogins/observer.observeÁ                 ³       ¹      9                                       subject   topic	   data                     ;    â    =   T : Q;   5   ¸   
A=   : Q;   5   ¸   
A=   : QT =      4  ¸   
=   Y     ]   	Z   ]   
: Q   ¸   
          : Q
Ö
Û
ÛÉÑ&ÊÉ  
ÛÊ  
-    logS   Got deferred onFormPassword notification:   Services   obs   removeObserver1   passwordmgr-crypto-loginA   passwordmgr-crypto-loginCanceled!   sendAsyncMessage1   RemoteLogins:loginsFound   requestId   logins   findLogins    È   ¶   ÿÿÿÿÿÿÿÿ{            ÿÿÿÿ   O   LoginManagerParent.doAutocompleteSearchÁ                   ¹      y                          $               target   formOrigin   actionOrigin   searchString   previousResult	   rect   requestId   remote   result#   searchStringLower   logins   matchingLogins  ¥  "  »             T  5    W   Q5   W  Q5   W  Q5   W  Q5   W  Q5   W  Q5   W  QQV  QV  ¸   
:     Q  QV  E   (Q   ¸   
V  5   ¸   
:  :    +;   	â   	=   
: QV  5   W  Q   ?;   	â   	=   : Q;   5   ¸   
Y   V   V  @: W  QV  ¸   
    :   	QV     @;   V  V  	R W  Q;   ¸   
T 5   5   V  V  : QT 5   ¸   
=   Y   V  ]   V  	]   : QF  »!ÿÒËÉÊÜ%ÿÿÿã&ÓÓÓß	ÈÐÈ  ßÎ	ÈåÔ-É-É  äG    formOrigin   actionOrigin   searchString   previousResult	   rect   requestId   remote   toLowerCase   startsWith   logE   Using previous autocomplete result   loginsQ   Creating new autocomplete search result.   Services   findLogins   filter-   UserAutoCompleteResult!   AutoCompleteE10S)   showPopupWithResults   ownerDocument   defaultView   messageManager!   sendAsyncMessageA   RemoteLogins:loginsAutoCompleted   ÿÿÿÿ   o   LoginManagerParent.doAutocompleteSearch/matchingLogins<Á               ;       ¹                                             fullMatch   match :  B  Ò             T  5       QV   E   (QV   ¸   
:  ¸   
      : 
ÍÕØ2    username   toLowerCase   startsWith   ÿÿÿÿ   ?   LoginManagerParent.onFormSubmitÁ                     ¹   #   u                        R      D      hostname   formSubmitURL   usernameField!   newPasswordField!   oldPasswordField   opener   target   getPrompter   formLogin   logins   prompter   oldLogin   existingLogin   i	   same   login   restoreMe   propBag     0"  3  é                 W   Q;    5   ¸   
T  :     ";   â   =   T  =   : Q;   5   ¸   
;   	5   
: W  QV  ¸   
T  T @T    T 5      
=   T 5   T    T 5      
=   T 5   : QT  E   	QT    Û;    5   ¸   
Y   T  T @: W  QV  Ù   >   ;   â   =   : QV   :  W  QV  Ù   ?   RV  >7W  QV  V  5   0   QV  V  5   0   QV  ¸   
V  V  : Q   %V  ¸   
V  V  Ù   V  : Q@W  Q;    5   ¸   
Y   T  T @: W  Q>W  Q  mV  QV  V  7W  QV  5    E   QV  5      MV  5   W  	QV  =   0   QV  ¸   
V  B: W  QV  V  	0   Q   zV  5    E   QV  5      DV  V  5   0   QV  ¸   
V  B: W  QV  =   0   Q   V  ¸   
V  C: W  QV     V  W  Q   (V  #?W  QQãV  V  Ù   ÿÿþÜV     æ;   â   =   : QV  5   V  5      A;   â   =   : QV   :  W  QV  ¸   
V  V  : Q   };   5   ¸   
;   	5   : W  
QV  
¸   
=   ;   ¸   
:  : QV  
¸   
=    ?: Q;    5   ¸   !
V  V  
: QV   :  W  QV  ¸   "
V  : QÊ  ì  ýÔÛÑÊ ÈÒ×È×È  Í
Ý	ÈËÓ
ÈËMËÓÓÜËÑ ! *Ý	È	%   ) -
Î 4
ÙHÎÏÐÈÓÙ?ÓÐÈÔÐÈÉH -'Î C -Õ GÓÓ<ÓÈÜÑÊ QÈÜ$ÿÿÿÜÕÝ ]ÈÓ)    Services   logins+   getLoginSavingEnabled   logg   (form submission ignored -- saving is disabled for:   )   CcM   @mozilla.org/login-manager/loginInfo;1   createInstance   Ci   nsILoginInfo	   init   value   	   name   findLogins   length[   (no logins for this host -- pwchange ignored)   username   usernameField-   promptToChangePasswordG   promptToChangePasswordWithUsernames   matchesk   Found an existing login matching this form submission   passwordS   ...passwords differ, prompting to change.A   @mozilla.org/hash-property-bag;1-   nsIWritablePropertyBag   setProperty   timeLastUsed	   Date   now%   timesUsedIncrement   modifyLogin)   promptToSavePassword   ÿÿÿÿ      getPrompter                        ¹      2                                        prompterSvcò"  ô%  í             ;    5   ¸   
;   5   : W   QV   ¸   
   5         5   5         5   	: Q   5      V   ¸   

      : QV   
ÑÊ  îÈ  õÕÔÊ  õÊÙ    CcK   @mozilla.org/login-manager/prompter;1   createInstance   Ci/   nsILoginManagerPrompter	   init   isRemoteBrowser   ownerDocument   defaultView   contentWindow   setE10sData    ß  )  