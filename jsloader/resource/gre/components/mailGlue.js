ç¿s¹                     ¹   !   «                          %            resource://gre/components/mailGlue.js     Ð         	                           ;   5       Q;   5      Q;   5      Q;   ¸   
=   : Q;   ¸   
=   	: Q;   ¸   
=   
: Q;   ¸   
=   : Q;   ¸   
=   : Q;   Y      ]      ]      ]      ]      ]      ]      ]   ;   ¸   
=   : ]   ;   ¸   
Z  ;    5   `   ;    5   `  : ]   6   Qn   Z  ;   `   o   Qn   ;   ¸    
;   : o   QÊ	  ÐÐÐ
Õ3Õ1Õ5Õ1Õ1!Ê#Ê,Ê5ÊOÊSÊ`Ê{Ê  Ñ	ÈÐ'Î)Î  ÎÉÏÿÿÿüÖÉÿÿÿý    Ci   Components   interfaces   Cc   classes   Cu   utils   importK   resource://gre/modules/XPCOMUtils.jsmG   resource://gre/modules/Services.jsmO   resource://gre/modules/AddonManager.jsmG   resource:///modules/distribution.jsG   resource:///modules/mailMigrator.js   MailGlue   prototype   _init   _dispose   observe   sanitize#   _onProfileStartup%   _onMailStartupDone   _handleLink   IDM   {eb239c82-fac9-431e-98d7-11cacd0f71b8}   classID   XPCOMUtils   generateQI   nsIObserver   nsIMailGlue   QueryInterface   components   NSGetFactory)   generateNSGetFactory   ÿÿÿÿ      MailGlue                   (       ¹                                           J  W               ;    ¸   
A=       : QA¸   
:  QÒÌ    XPCOMUtils!   defineLazyGetter   _sanitizer   _init   ÿÿÿÿ      MailGlue/<Á                 3       ¹                                               sanitizerScope  B               Y      Q;    5   ¸   
=   V   : QV   5   
ÊÞÊ     Services   scriptloader   loadSubScriptM   chrome://messenger/content/sanitize.js   Sanitizer   ÿÿÿÿ      MailGlue__init                          ¹                                            ²  ü  #             ;    5   ¸   
A=   B: Q;    5   ¸   
A=   B: Q;    5   ¸   
A=   B: Q;    5   ¸   
A=   B: Q;    5   ¸   
A=   B: QÜÜÜÜÜ>    Services   obs   addObserver   xpcom-shutdown!   final-ui-startup#   mail-startup-done)   handle-xul-text-link)   profile-after-change   ÿÿÿÿ   #   MailGlue__dispose                          ¹                                            G  }  ,             ;    5   ¸   
A=   : Q;    5   ¸   
A=   : Q;    5   ¸   
A=   : Q;    5   ¸   
A=   : Q;    5   ¸   
A=   : QÛÛÛÛÛ:    Services   obs   removeObserver   xpcom-shutdown!   final-ui-startup#   mail-startup-done)   handle-xul-text-link)   profile-after-change   ÿÿÿÿ   !   MailGlue_observe                 Ø       ¹      O                                        aSubject   aTopic   aData   Ä    5             T x=    y   2=   y   9=   y   @=   y   G=   y   Tz   ¡A¸   
:  Q   A¸   
:  Q   A¸   
:  Q   nA¸   
T  T : Q   W;   	5   
¸   
;   	5   5   : ¸   
;   	¸   
=   : =   =   @: Q   k  Ôu
:u
=u
@u
CuÊ7ÌXÌXÌXÒXGêÑËGJX    xpcom-shutdown!   final-ui-startup#   mail-startup-done)   handle-xul-text-link)   profile-after-change   _dispose#   _onProfileStartup%   _onMailStartupDone   _handleLink   Components   manager   QueryInterface   interfaces+   nsIComponentRegistrar   registerFactory   IDM   {b02be33b-d47c-4bd3-afd9-402a942426b0}   /   @mozilla.org/transfer;1   ÿÿÿÿ      MG_sanitize                        ¹                                              aParentWindow _  ¡  O             A5    ¸   
T  : QÔ(    _sanitizer   sanitize   ÿÿÿÿ   5   MailGlue__onProfileStartup                   [       ¹                                            Ü  y  S             ;    ¸   
:  Q;   ¸   
:  Q;   5   5      +;   5   ¸   
@=   	=   
=   @: QÐWÐZÏ×Ë[W !   TBDistCustomizer#   applyPrefDefaults   MailMigrator/   migrateAtProfileStartup   Services   appinfo   inSafeMode   ww   openWindowO   chrome://messenger/content/safeMode.xul   _blankM   chrome,centerscreen,modal,resizable=no   ÿÿÿÿ   7   MailGlue__onMailStartupDone               Û       ¹      4                                        win   tabmail   changedIDs+   WINTASKBAR_CONTRACTID¶  .  `       	      =      QV  ;   qE   )Q;   V  7¸   
;   5   : 5      *;   ¸   
=   : Q;   	¸   

:  Q;   5   ¸   
=   : W   QV   5   ¸   
=   :    Q;   ¸   
;   5   : W  Q;   ¸   
V      : Qb
ÊÐÛÈÕÐkÖÈÕ
ÉÖÈÙx =   @mozilla.org/windows-taskbar;1   Cc   getService   Ci   nsIWinTaskbar   available   Cu   importO   resource:///modules/windowsJumpLists.js%   WinTaskbarJumpList   startup   Services   wm'   getMostRecentWindow   mail:3pane   document   getElementById   tabmail   AddonManager#   getStartupChanges1   STARTUP_CHANGE_INSTALLED   getAddonsByIDs   ÿÿÿÿ   ;   MailGlue__onMailStartupDone/<Á                        ¹      	                                       aAddons   (  n             T  ¸    
    : QÓw	    forEach   ÿÿÿÿ   ?   MailGlue__onMailStartupDone/</<Á                 ^       ¹   
   !                                        aAddon ²     o       	      T  5     D   QT  5   ;   5          ¸   
=   Y   =   T  5   ]   @]   	: QqÏÔ
tÑÓtv0    userDisabled   permissions   AddonManager   PERM_CAN_ENABLE   openTab   contentTab%   about:newaddon?id=   id   contentPage   clickHandler   ÿÿÿÿ   )   MailGlue__handleLink              $      ¹      \                                      aSubject   aData   linkHandled  ]  ¥  {             T  ¸    
;   5   :    QV   5       ý  Q  Q;   5   ¸   
=   :   QY   T ]   @]   	  QV     i  QV  5   
¸   
=   :   QV     <V  ¸   
=   V  : QV  ¸   
:  QV   C6   QÈÈÈ;   5   ¸   
@=   =   =   Y   =   ]   V  ]   : QV   C6   QÈÔÈÊÑ
ÖÈ
ÈËËÕ
È
Ø
Ï
Ë
  ÜÊÉ  Ì}    QueryInterface   Ci#   nsISupportsPRBool	   data   Services   wm'   getMostRecentWindow   mail:3pane   contentPage   clickHandler   document   getElementById   tabmail   openTab   contentTab   focus   ww   openWindow7   chrome://messenger/content/   _blank)   chrome,dialog=no,all	   type   tabParams    ÿÿÿÿ         win       tabParams                     tabmail        -   ö   ÿÿÿÿ   w   c           ×         ÿÿÿÿØ         