ç¿s¹                g  K   ¹   ;   x      	                   5            resource://gre/modules/devtools/server/actors/device.js     ê                                      	   
               #   4   8;   â   =   : 5        Q5      Q5      Q5      QQ;   â   =   :    Q;   â   =   :    Q;   5   	   	Q5   
   
QQ;   ¸   
=   Y   : 5      QQ;   â   =   : 5      QQ;   â   =   : 5      QQ;   ¸   
=   : QY   =   ]   =   ]   =   ]   =   ]   =   ]   =   ]    =   !]   "   Qn   #;   $;   ¸   %
Y   =   &]   '@]   (    ]   )   ]   *;   	â   	   Y   Y   ]   +Y   ;   
â   
=   ,: ]   -]   .: ]   /;   	â   	   Y   Y   ]   +Y   ;   
â   
=   0: ]   -]   .: ]   1;   	â   	   Y   Y   ]   +Y   ;   
â   
=   0: ]   -]   .: ]   2;   	â   	   Y   Y   ]   +Y   ;   
â   
=   ,: ]   -]   .: ]   3: 6   #o   #Qn   4;   ¸   5
;   #Y      ]   6   ]   7: o   4Q;   9R     8Q;   $   6   :Q  ¿  ÛÏôÏÉÿÿÿýÏÉÿÿÿýÞÖÐ3ÏÐ(ÏÐÕ8ÊÊÊÊÊÊÐÛÊÊ3ÊBÏ  ÊÏÍBÈ  Ï  ¡ÊÏÍ  È  £Ï  ²ÊÏÍ  £È  ´Ï  ¼ÊÏÍ  ´È(Îÿÿÿç  ¿ÛÊ  ÆÊ  ¿Éÿÿÿý  ÛÉÿÿÿýÐ  é    Cc   Ci   Cu   CC   require   chrome   Services   protocol1   devtools/server/protocol   method   RetVal   promise   importE   resource://gre/modules/Promise.jsm   Promise   LongStringActor;   devtools/server/actors/string   DebuggerServer)   devtools/server/mainW   resource://gre/modules/PermissionsTable.jsm   APP_MAP   firefoxM   {ec8030f7-c20a-464f-9b0e-13a3a9e97384}   thunderbirdM   {3550f703-e582-4d05-9a08-453d09bdfdc6}   seamonkeyM   {92650c4d-4b8e-4d2a-b7eb-24ecf4f6b63a}   sunbirdM   {718e30fb-e89b-41dd-9da7-e25a45638b28}   b2gM   {3c2e2abc-06d4-11e1-ac3b-374f68613e61}   mobile/androidM   {aa3c5121-dab2-40e2-81ca-7ea25febc110}   mobile/xulM   {a23983c0-fd0e-11dc-95ff-0800200c9a66}   DeviceActor   exports   ActorClass   device   typeName   _desc!   _getAppIniString   _getSetting   request	   json   value   response   getDescription   longstring   getWallpaper'   screenshotToDataURL-   getRawPermissionsTable   DeviceFront   FrontClass   initialize!   screenshotToBlob%   _knownDeviceFronts   WeakMap   getDeviceFront   ÿÿÿÿ   K   exports.DeviceActor<._getAppIniStringÁ                    ¹      E                                      section   key   inifile   iniParser  ¥  Ë         
      ;    5   ¸   
=   ;   5   :    QV   ¸   
=   : QV   ¸   
:      A;    5   ¸   
=   	;   5   : W   QV   ¸   
=   : QV   ¸   
:      ;   
;   5   ¸   
;   5   : ¸   
V   :   QV  ¸   
T  T :       Qv  Q;   
ÈÈ    à
ÈÔ"Ëà
ÈÔ'Ë+ÛÖÑÉÌÏ    Services   dirsvc   get	   GreD   Ci   nsIFile   append   application.ini   exists   CurProcD   undefined   CcO   @mozilla.org/xpcom/ini-parser-factory;1   getService'   nsIINIParserFactory   createINIParser   getString    ÿÿÿÿ         e         Ø          ó      ÿÿÿÿÿÿÿÿ            ÿÿÿÿ   A   exports.DeviceActor<._getSettingÁ               ¿       ¹      =                                   	   name   deferred å  Ê  3             ;    ¸   
:     Q=   ;   q   u  Q   Q;   5   ¸   
;   5   :    QV   ¸   
:  ¸   
T  Y   A   ]   	A   ]   
:   QÈ   #   ¸   
;   =   R : Q   5    ÌÉ6ËpÑ
ÛÈ
ËÒËË8Î<×ÿÿÿð?Ë    promise   defer=   @mozilla.org/settingsService;1   Cc   getService   Ci%   nsISettingsService   createLock   get   handle   handleError   reject   Error'   No settings service    ÿÿÿÿ          settingsService       req              Y   exports.DeviceActor<._getSetting/req<.handleå                        ¹                                           	   name   value  ò    9                ¸    
T : !Ó    resolve          c   exports.DeviceActor<._getSetting/req<.handleErrorå                        ¹                                              error 1  R  :                ¸    
T  :  Ó    reject    '   i   ÿÿÿÿ   ÿÿÿÿ   I   exports.DeviceActor<.getDescription<Á              0      ¹   T                          s              profiles   appInfo   win   profd   profservice   bundleî  Á  B             ;    5     Q;    5   ¸   
;   5   :   Qn   Y   V  5   ]   ;   	V  5   7]   
V  5   ]   V  5   ]   V  5   ]   V  5   ]   V  5   ]   V  5   ]   V  5   ]   V  5   ]   A¸   
=   =   : ]   ;   5   ¸   
;   5   : ¸   
=    : ]   !@]   "=   #]   $V  5   %¸   &
=   ': >7]   (V  5   %¸   &
=   ': ?7]   )@]   *@]   +@]   ,o   QV       QV  ¸   -
;   5   .: ¸   /
;   5   0:   Q;   V  5   26   1Q;   V  5   45   56   3Q;   V  5   75   66   6Q;   V  5   75   86   8QÈ;    5   9¸   :
=   ;;   5   <:   Q;   5   =¸   
;   5   >:   QV  5   ?W   Q   km  QV   ¸   @
:  ¸   -
;   5   A:   QV  5   B5   CV  5   C   ;   V  5   6   ,QÈ   ÈãV   ¸   D
:  ÿÿÿ;   5   ,    ;   V  5   E6   ,Q;   ;    5   F¸   G
=   H: 6   +Q     Qv  QÈ    ;   5   
=   I   f;   =   J6   "QA¸   K
=   L: ¸   M
A   : ¸   M
A   : ¸   M
A   : ¸   M
A   : ;   V  5   N6   "Q;    5   O¸   P
=   Q:   QV     #;   V  ¸   R
=   S: 6   *Q;   FÏÛÈIÊÎÔÎÎÎÎÎÎÎÎÒÈÛ×ÊÕÊÕ
ÊÌ^Ë
ÕÜÔÙÙÚgàÈÛÈÎ({'
Ë
ÜØÔIjÕrËÔw%ÛÎÓ{Ð}ÐÍÊÊÊÊ  ÔÖ	ÈÕÉ    Services   appinfo   wm'   getMostRecentWindow   DebuggerServer!   chromeWindowType	   desc   ID   appid   APP_MAP   apptype   vendor	   name   version   appBuildID   appbuildid   platformBuildID   platformbuildid   platformVersion   platformversion   geckobuildid   geckoversion!   _getAppIniString   App   SourceStamp   changeset   CcK   @mozilla.org/chrome/chrome-registry;1   getService   Ci)   nsIXULChromeRegistry#   getSelectedLocale   global   locale   os   unknown   hardware   XPCOMABI   split   -   processor   compiler   brandName   channel   profile   QueryInterface+   nsIInterfaceRequestor   getInterface#   nsIDOMWindowUtils   dpi   displayDPI   useragent   navigator   userAgent   width   screen   height   dirsvc   get   ProfD   nsILocalFileM   @mozilla.org/toolkit/profile-service;11   nsIToolkitProfileService   profiles   getNext#   nsIToolkitProfile   rootDir	   path   hasMoreElements   leafName   prefs   getCharPref%   app.update.channel   b2g   B2G   _getSetting'   deviceinfo.hardware	   then   OS   strings   createBundleS   chrome://branding/locale/brand.properties#   GetStringFromName   brandFullName    ÿÿÿÿ         utils        ÿÿÿÿ         profile        ÿÿÿÿ         e       ÿÿÿÿ   M   exports.DeviceActor<.getDescription</<å                        ¹                                              value +  I               ;    T  6   Î 	   desc   hardware   ÿÿÿÿ   M   exports.DeviceActor<.getDescription</<å                          ¹                                            W  ~               A¸    
=   : Ñ!    _getSetting   deviceinfo.os   ÿÿÿÿ   M   exports.DeviceActor<.getDescription</<å                        ¹                                              value   ©               ;    T  6   Î 	   desc   version   ÿÿÿÿ   M   exports.DeviceActor<.getDescription</<å                          ¹                                            ·  Á               ;     	   desc       )       ~  {            ÿÿÿÿ     d   ÿÿÿÿÿÿÿÿÞ           H     ÿÿÿÿ   ÿÿÿÿ   E   exports.DeviceActor<.getWallpaper<Á                  B       ¹                                	              deferred  >               ;    ¸   
:     QA¸   
=   : ¸   
A    : Q   5    ÌÉá   Ë    promise   defer   _getSetting   wallpaper.image	   then   ÿÿÿÿ   I   exports.DeviceActor<.getWallpaper</<Å               y       ¹      %                                    	   blob   FileReader   reader	   conn l                 ;    â    =   :    QV   R     QA5      Q   ¸   
=       : Q   ¸   
=      : Q   ¸   
T  : Q
ÏÈ
	É
ÌÚÚÓ    CC?   @mozilla.org/files/filereader;1	   conn!   addEventListener	   load   error   readAsDataURL   ÿÿÿÿ   M   exports.DeviceActor<.getWallpaper</</<Á                 A       ¹                                               str%                 ;                5   R    Q    ¸   
V   : QßÈÙ    LongStringActor   result   resolve   ÿÿÿÿ   M   exports.DeviceActor<.getWallpaper</</<Á                   %       ¹                                            ¾  ñ                   ¸    
      5   : Qä    reject   error   ÿÿÿÿ   S   exports.DeviceActor<.screenshotToDataURL<Á                       ¹      B                                         window   canvas   width   height   context   flags   dataURL   e  £             ;    5   ¸   
;   5   :    QV   5   ¸   
=   =   :   QV   5   	  QV   5   
  QV  ¸   
=   V  : QV  ¸   
=   V  : QV  ¸   
=   :   QV  5   V  5   V  5     QV  ¸   
V   >>V  V  =   V  : QV  ¸   
=   :   Q;   A5   V  R Û	ÈÚ	ÈÎÎØØÐ
ÈÉÊÏæÐ
ÈÐ(    Services   wm'   getMostRecentWindow   DebuggerServer!   chromeWindowType   document   createElementNS9   http://www.w3.org/1999/xhtml   canvas   innerWidth   innerHeight   setAttribute   width   height   getContext   2d+   DRAWWINDOW_DRAW_CARET)   DRAWWINDOW_DRAW_VIEW9   DRAWWINDOW_USE_WIDGET_LAYERS   drawWindow!   rgb(255,255,255)   toDataURL   image/png   LongStringActor	   conn   ÿÿÿÿ   Y   exports.DeviceActor<.getRawPermissionsTable<Á                   a       ¹                                            Ê  þ  ´             Y   ;    ]   ;   5   5   ]   ;   5   5   ]   ;   5   5   ]   ;   5   5   ]   ÊÔÔÔÕ !   PermissionsTable'   rawPermissionsTable   Ci)   nsIPermissionManager   UNKNOWN_ACTION   ALLOW_ACTION   DENY_ACTION   PROMPT_ACTION   ÿÿÿÿ   /   DeviceFront<.initializeÁ                 @       ¹                                 	             client	   form      À             ;    5   5   5   ¸   
AT  l QAT 5   6   QA¸   
A: QãÏÍ    protocol   Front   prototype   initialize	   call   actorID   deviceActor   manage   ÿÿÿÿ   ;   DeviceFront<.screenshotToBlobÁ                          ¹                                           -    Æ             A¸    
:  ¸   
A    : ÈÔ  × '   screenshotToDataURL	   then   ÿÿÿÿ   ?   DeviceFront<.screenshotToBlob/<Å                 !       ¹                                      @      longstr]    Ç                ¸    
:  ¸   
A    : ÌÔ  Ö	    string	   then   ÿÿÿÿ   C   DeviceFront<.screenshotToBlob/</<Å                Å       ¹      1                                       dataURL   deferred   req     È             ;    ¸   
:     Q  ¸   
:  ¸   
@;   5   : Q;   5   ¸   
;   	5   
:    Q   ¸   
=   T  C: Q   =   6   Q   A    6   Q   A   6   Q   ¸   
:  Q   5    ÌÉåÛÉÙÐÑÑÐË    promise   defer   release	   then   Cu   reportError   CcO   @mozilla.org/xmlextras/xmlhttprequest;1   createInstance   Ci#   nsIXMLHttpRequest	   open   GET   responseType	   blob   onload   onerror	   send   ÿÿÿÿ   Y   DeviceFront<.screenshotToBlob/</</req.onloadÅ                   %       ¹                                            ¾  ù  Î                   ¸    
      5   : Q
ä    resolve   response   ÿÿÿÿ   [   DeviceFront<.screenshotToBlob/</</req.onerrorÅ                   %       ¹                                              I  Ñ                   ¸    
      5   : Q
ä    reject   status   ÿÿÿÿ   -   exports.getDeviceFrontÁ               k       ¹      (                                        client	   form   front  ç  è  Ý             T 5        @;   ¸   
T  :    ;   ¸   
T  : ;   T  T R    Q;   ¸   
T  V   : QV   ÉÏÏÌÈ×    deviceActor%   _knownDeviceFronts   has   get   DeviceFront   set