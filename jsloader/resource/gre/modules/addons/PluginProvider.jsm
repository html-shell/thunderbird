çżsš                [  F   š   :   q                         "       0     resource://gre/modules/addons/PluginProvider.jsm     G                                                            ;   5       Q;   5      Q;   5      QAZ   0   Q;   ¸   
=   	: Q;   ¸   
=   
: Q=      Q=      Q=      Q=      Q;   ¸   
=   : Q=      Qn   ;   5   ¸   
;   : 1   Qn   Y      a   @]      ]      ]      ]      ]       ]   !   ]   "   ]   #   	]   $   
]   %   ]   &   ]   '1   Q;   (Y   =   *]   +   a   ,   a   -   a   .   a   /   a   0   ]   1   ]   20   )Q;   3¸   4
;   Z  ;   35   5=   6;   ;   ;   75   8Xp;   75   9R `   : QĘ	3Ę 	 $	 ,	ĐĐĐËŐ5Ő1ËËËËŐ,Ë	Ű	É˙˙˙ý13ĘĘ79ĘBĘHĘhĘwĘ  Ę  ĽĘ  ąĘ  şĘ  ÚĘ  ăĐ3  " , ĘĘĘĘĘĘĘĘĐ (ŐŐÍĘ + * /    Cc   Components   classes   Ci   interfaces   Cu   utils!   EXPORTED_SYMBOLS   importO   resource://gre/modules/AddonManager.jsmG   resource://gre/modules/Services.jsm+   URI_EXTENSION_STRINGSq   chrome://mozapps/locale/extensions/extensions.properties!   STRING_TYPE_NAME   type.%ID%.name%   LIST_UPDATED_TOPIC)   plugins-list-updated   FLASH_MIME_TYPE;   application/x-shockwave-flash=   resource://gre/modules/Log.jsm   LOGGER_ID   addons.plugins   logger   Log   repository   getLogger   PluginProvider	   name   plugins   startup   shutdown   observe   buildWrapper   getAddonByID!   getAddonsByTypes=   getAddonsWithOperationsByTypes%   getInstallsByTypes   getPluginList   buildPluginList!   updatePluginList   PluginWrapper   prototypeg   chrome://mozapps/content/extensions/pluginPrefs.xul   optionsURL   updateDate   isCompatible)   isPlatformCompatible/   providesUpdatesSecurely   foreignInstall!   isCompatibleWith   findUpdates'   AddonManagerPrivate!   registerProvider   AddonType   plugin   AddonManager   VIEW_TYPE_LIST;   TYPE_SUPPORTS_ASK_TO_ACTIVATE   ˙˙˙˙   %   getIDHashForString            §      š      o                        &         	   aStr   toHexString   hasher   stringStream   binary	   hash Â  F                   W   Q;    5   ¸   
;   5   :   QV  ¸   
;   5   5   : Q;    5   ¸   
;   5   :   QV  T     T     
=   
0   	QV  ¸   
V  ×˙: QV  ¸   
B:   QY     Q  QV  K   -mW  V   V  ¸   
  V  : : ,  ÎăQLM˙˙˙ÓQNČ¸   
=   : ¸   
:    Q=   V  ¸   
>×: =   V  ¸   
××: =   V  ¸   
××: =   V  ¸   
××: =   V  ¸   
×: =   Ę!ŃĘ!Č#ŢŃĘ$Č&ŘŐ*Ě	ČË/Í02â˙˙˙ĺ˙˙˙ôá˙˙˙˙ŇÓĘĎĘĎĘĎĘÍË    Cc9   @mozilla.org/security/hash;1   createInstance   Ci   nsICryptoHash	   init   MD5K   @mozilla.org/io/string-input-stream;1)   nsIStringInputStream	   data	   null!   updateFromStream   finish   charCodeAt	   join      toLowerCase   {   substr   -   }   ˙˙˙˙      toHexString!                 #       š                                             charCode   M               =    T  ¸   
×: ¸   
×ţ: ŃÍ˙˙˙ú&    0   toString   slice    ˙˙˙˙         i       Ó   3      ź   L   ˙˙˙˙   ˙˙˙˙   '   PluginProvider.nameá                          š                                            i  |  4             =        PluginProvider   ˙˙˙˙      PL_startup                   >       š                                           ç    9             ;    5   ¸   
A;   B: Q;    5   ¸   
A;   5   B: QÜáS    Services   obs   addObserver%   LIST_UPDATED_TOPIC   AddonManager=   OPTIONS_NOTIFICATION_DISPLAYED   ˙˙˙˙      PL_shutdown                   D       š                                           )	  Ů	  B             A@0    Q;   5   ¸   
A;   5   : Q;   5   ¸   
A;   : QČŕŰ6    plugins   Services   obs   removeObserver   AddonManager=   OPTIONS_NOTIFICATION_DISPLAYED%   LIST_UPDATED_TOPIC   ˙˙˙˙   -   PluginProvider.observeÁ                 X       š      #                                D      aSubject   aTopic   aData  ď	  "  H             T x;    5   y   ;   y   #z   :A¸   
T     : Q   !A5      A¸   
:  Q   kTĘp
^uĘJÔ]XĚX    AddonManager=   OPTIONS_NOTIFICATION_DISPLAYED%   LIST_UPDATED_TOPIC   getAddonByID   plugins!   updatePluginList   ˙˙˙˙   )   PL_displayPluginInfo              Š      š      q                        $            plugin   libLabel   typeLabel   types+   showProtectedModePref 
  Ś  K             T         ¸    
=   :    QV   T  5   ¸   
=   : 0   Q   ¸    
=   :   QZ     QT  5   - Á
:    Q   m5   W  Q  QZ  V  5   ¸   
:  `   V  5   	`  ¸   

   : ¸   
=   :   QV  ¸   
V  5   V     =   V  =      
=   : QČăQ¸   
:  5   ˙˙˙RČ V  V  ¸   
=   : 0   Q;   â   T  :   Q   ¸    
=   : ¸   
=   V     =      
=   : Q
OŃČŘÉRŃČ,É×8  ł×
×ÔTĘTČV
ŘĺSË˙˙˙ďŇXÔÉÍČŰÉ
ÔZJ    getElementById   pluginLibraries   textContent	   join   ,    pluginMimeTypes   value   description	   trim   suffixes   filter   : 	   push	   type    (   )   	   next	   done   ,
9   canDisableFlashProtectedMode3   pluginEnableProtectedMode   setAttribute   collapsed	   true    ˙˙˙˙      	   type                     extras             g   PluginProvider.observe/PL_displayPluginInfo/extras<á                        š                                               x 6  ;  U             T  *       ł       y   ž   ˙˙˙˙                ˙˙˙˙      PL_buildWrapper                 +       š                                             aPlugin   L  h       	      ;    T  5   T  5   T  5   T  5   R ÎČČČil+    PluginWrapper   id	   name   description	   tags   ˙˙˙˙      PL_getAddon                 S       š      !                           
            aId   aCallback  9  ů  w             A5        A¸   
:  QT  A5    q   'T A¸   
A5    T  7: : Q   T @: QĚ{Ę"Ö
˙˙˙öÉ~É    plugins   buildPluginList   buildWrapper   ˙˙˙˙   '   PL_getAddonsByTypes                      š      0                                    aTypes   aCallback   results    o               T  E   QT  ¸    
=   : >   T Z   : QA5       A¸   
:  QZ      QA5   K   Q   mW   A¸   
V      : QăQLM˙˙˙áQNČT    : QŘĚĚĘĎ0$Ęâ  Í    indexOf   plugin   plugins   buildPluginList   getAddonByID    ˙˙˙˙          id              +   PL_getAddonsByTypes/<Á                        š                                             aAddon   J                  ¸    
T  : QÓ 	   push   f   %       \   1   ˙˙˙˙   ˙˙˙˙   C   PL_getAddonsWithOperationsByTypes                        š                                              aTypes   aCallback  Ž  Ú  Ľ             T Z   : QĚ    ˙˙˙˙   +   PL_getInstallsByTypes                        š                                              aTypes   aCallback    =  ą             T Z   : QĚ    ˙˙˙˙   !   PL_getPluginList                      š      ~                        $          	   tags	   list   seenPlugins  ß  ş             ;    5   ¸   
;   5   : ¸   
Y   :    QY     QY     QV   - Á
:    Q  m5   W  QV  5   V  q    V  V  5   Y   9QV  5   V  V  5   7q      QY   ;   	â   	V  5   V  5   : ]   
V  5   ]   V  5   ]   Z  V  `   ]     QV  V  5   7V  5   V  9QV  V  5   
V  9QČ   1V  V  5   7V  5   75   ¸   
V  : QăQ¸   
:  5   ˙˙ţÖČ V  ŃĘ  ťĘ  ťČĘĘÓ8 /Ń
ĎÔ
Ů  Ë
ÝČ
Î
Î
ŇÝŮě  ÁË˙˙˙đŇ  Ô    Cc5   @mozilla.org/plugin/host;1   getService   Ci   nsIPluginHost   getPluginTags   value	   name   description%   getIDHashForString   id	   tags	   push	   next	   done    ˙˙˙˙         tag                     plugin       ^   /      T   :  ˙˙˙˙   ą             ˙˙˙˙   %   PL_buildPluginList                          š      
                                     W    Ú             AA¸   
:  0    QÉÉ    plugins   getPluginList   ˙˙˙˙   '   PL_updatePluginList                @      š      9      
       	   
       [             newList   lostPlugins   newPlugins   matchedIDs   changedWrappersp  W$  ă             A¸    
:     QY     Q  Q;   ¸   
A5   : K   8mW  V  V   q    $A¸   
A5     V  7: ,  ÎăQLM˙˙˙ČQNČ  QY     Q  Q;   ¸   
V   : K   8mW  V  A5   q    "A¸   
V     V  7: ,  ÎăQLM˙˙˙ČQNČ  QY     Q  Q;   ¸   
V   : K   'mW  V  A5   q     V  ,  ÎăQLM˙˙˙ŮQNČ  QZ     QV  - Á
:    Q   Żm5   W  Q  Q  QA¸   
A5   V  7:   QA¸   
V   V  7:   QV  5   V  5      J;   ¸   
V  5      =   	   
=   
V  B: QV  ¸   
V  : QČăQ¸   
:  5   ˙˙˙BČ V  - Á
:    Q   Gm5   W  Q;   ¸   
=   @V  @B: Q;   ¸   
=   V  B: QăQ¸   
:  5   ˙˙˙ŞČ V  - Á
:    Q   +m5   W  Q;   ¸   
=   V  B: QăQ¸   
:  5   ˙˙˙ĆČ AV   0   QV  - Á
:    Q   *m5   W  Q;   ¸   
=   V  : QăQ¸   
:  5   ˙˙˙ÇČ V  - Á
:    Q   Bm5   W  Q;   ¸   
V  5      =      
=   V  : QăQ¸   
:  5   ˙˙˙ŻČ V  - Á
:    Q   *m5   W  Q;   ¸   
=   V  : QăQ¸   
:  5   ˙˙˙ÇČ Č
ČË!Ř6=ĘĘ  ć×ÚË Ö6=ĘĚ  čŐÚËÖ6,Őä  đÉÓ8  ĂÝ
ÓČ
ŃČÓŐ
Ď  öÔ  ńË˙˙˙ńŇ  ţÓ8[ŃŇ  ˙Ú  ţË˙˙˙íŇ Ó8?ŃÚ Ë˙˙˙íŇËÓ8>ŃŮ Ë˙˙˙íŇÓ8VŃŐ
Ď  Ë˙˙˙ěŇ Ó8>ŃŮ Ë˙˙˙íŇF    getPluginList   Object	   keys   plugins   buildWrapper   value   isActive'   AddonManagerPrivate%   callAddonListeners   onEnabling   onDisabling	   push	   next	   done)   callInstallListeners#   onExternalInstall   onInstalling   onUninstalling   onInstalled   onEnabled   onDisabled   onUninstalled    ˙˙˙˙         id        ˙˙˙˙         id        ˙˙˙˙         id        ˙˙˙˙         id                    oldWrapper       newWrapper        ˙˙˙˙         plugin        ˙˙˙˙         plugin        ˙˙˙˙         plugin        ˙˙˙˙         wrapper        ˙˙˙˙         plugin       ý  >        V      1  >      Ë  ?      T  [      u  Ă         -      Ż   >      >   >          h   ˙˙˙˙      f   ˙˙˙˙   ú   U   ˙˙˙˙   k  Î   ˙˙˙˙              J  f   ˙˙˙˙   Á  J   ˙˙˙˙   '  I   ˙˙˙˙     a   ˙˙˙˙	   ó  I   ˙˙˙˙   ˙˙˙˙      isFlashPlugin                c       š      #                        	            aPlugin r$  %              T  5    - Á
:     Q   ,m5   W   QV   5   ;      CČ ăQ¸   
:  5   ˙˙˙ĹČ B×8@ŃĎ Ë˙˙˙ďŇ !    pluginMimeTypes   value	   type   FLASH_MIME_TYPE	   next	   done    ˙˙˙˙       	   type          @          K   ˙˙˙˙˙˙˙˙?             ˙˙˙˙   9   canDisableFlashProtectedMode                 -       š      
                                       aPlugin S%  Ź%  $            ;    â    T  : E   Q;   5   5   =   ÍßB    isFlashPlugin   Services   appinfo   XPCOMABI   x86-msvc   ˙˙˙˙      PluginWrapper                P      š      Ż                         5      D      aId   aName   aDescription   aTags   safedesc   homepageURL @&  B  ,            T ¸    
     =   :    Q@   Q    ¸   
T :        ¸   
T : ?7   QA¸   
=       : QA¸   
=      : QA¸   
=      : QA¸   
=      : QA¸   
=   	   : QA¸   
=   
   : QA¸   
=      : QA¸   
=      : QA¸   
=      : QA¸   
=      	: QA¸   
=      
: QA¸   
=      : QA¸   
=      : QA¸   
=      : QA¸   
=      : QA¸   
=      : QA¸   
=      : QA¸   
=      : QA¸   
=      : QA¸   
=      : QA¸   
=      : QA¸   
=      : QA¸   
=      : QÔÉĎĎËÖÖÖÖÖÖÖÖÖÖ IÖ pÖ vÖ |Ö Ö Ö ĽÖ ˇÖ żÖ ŮÖÖÖ ýÖ     replace    	   test	   exec!   __defineGetter__   id	   type	   name   creator   description   version   homepageURL   isActive   appDisabled   userDisabled!   __defineSetter__   blocklistState   blocklistURL	   size   pluginLibraries   pluginFullpath   pluginMimeTypes   installDate   scope#   pendingOperations5   operationsRequiringRestart   permissions   optionsType   ˙˙˙˙      PluginWrapper/<á                          š                                            ['  a'  2               )    ˙˙˙˙      PluginWrapper/<á                          š                                            '  '  3            =    +    plugin   ˙˙˙˙      PluginWrapper/<á                          š                                            Â'  Ę'  4               +    ˙˙˙˙      PluginWrapper/<á                          š                                             ř'  ˙'  5            @.    ˙˙˙˙      PluginWrapper/<á                          š                                            1(  <(  6                  2Ë    ˙˙˙˙      PluginWrapper/<á                          š                                           j(  }(  7               >75    .Í    version   ˙˙˙˙      PluginWrapper/<á                          š                                            Ż(  ˝(  8                  2Ë    ˙˙˙˙      PluginWrapper/<á                   "       š      	                                     í(  )  :               >75     E   Q   >75    /ÓÎ    blocklisted   disabled   ˙˙˙˙      PluginWrapper/<á                          š                                           M)  d)  ;               >75    2Í    blocklisted   ˙˙˙˙      PluginWrapper/<Á                          š                                           )  +  =               >75       C;   5   ¸   
=   : E   Q   >75   D   8QA5   ;   5   5   	D   QA5   ;   5   5   
   ;   5   BĚÖ	ŰÜÖË    disabled   Services   prefs   getBoolPref+   plugins.click_to_play   clicktoplay   blocklistState   Ci'   nsIBlocklistServiceC   STATE_VULNERABLE_UPDATE_AVAILABLE5   STATE_VULNERABLE_NO_UPDATE   AddonManager+   STATE_ASK_TO_ACTIVATE   ˙˙˙˙      PluginWrapper/<Á              ¨      š      i                        &         	   aVal   previousVal M+  č0  I      	      A5       QT  V   H   	T     - Á
:    Q   m5   W  QT  CH   #V  ;   5   5   0   Q   YT  BH   #V  ;   5   5   0   Q   1T  ;   5      V  ;   5   5   	0   QăQ¸   

:  5   ˙˙˙dČ V   CHE   QT  CI   2;   ¸   
=   AB: Q;   ¸   
=   A: QV   CIE   QT  CH   2;   ¸   
=   AB: Q;   ¸   
=   A: QV   ;   5   D   QT  ;   5       ;   ¸   
=   Af   : QT  ËČÔ8  ĄŃŢŢÎŮ NË˙˙˙đŇ YŃ×Ö `Ń×Ö gŐÎŰ    userDisabled   value   enabledState   Ci   nsIPluginTag   STATE_DISABLED   STATE_ENABLED   AddonManager+   STATE_ASK_TO_ACTIVATE#   STATE_CLICKTOPLAY	   next	   done'   AddonManagerPrivate%   callAddonListeners   onEnabling   onEnabled   onDisabling   onDisabled#   onPropertyChanged    ˙˙˙˙         tag                         userDisabled                  5   Ą       +   Ź   ˙˙˙˙   ˙˙˙˙      PluginWrapper/<Á                 :       š                                 
             bs1  Á1  p            ;    5   ¸   
;   5   :    QV   ¸   
   >7: ŃĘ qČŇ%    CcG   @mozilla.org/extensions/blocklist;1   getService   Ci'   nsIBlocklistService/   getPluginBlocklistState   ˙˙˙˙      PluginWrapper/<Á                 :       š                                 
             bső1  2  v            ;    5   ¸   
;   5   :    QV   ¸   
   >7: ŃĘ wČŇ#    CcG   @mozilla.org/extensions/blocklist;1   getService   Ci'   nsIBlocklistService+   getPluginBlocklistURL   ˙˙˙˙      PluginWrapper/<Á               Ö       š      K                                  !   getDirectorySize	   size	   fileÁ2  5  |                   Q>   Q;    5   ¸   
;   5   :   Q  - Á
:    Q   km5   W  QV  ¸   
V  5   : QV  ¸   
:     !V      V  : W   Q   V   V  5   	W   QăQ¸   

:  5   ˙˙˙Č V   Ë | ŰČÔ8ŃŘË
Î{ËÍx Ë˙˙˙đŇ     Cc3   @mozilla.org/file/local;1   createInstance   Ci   nsIFile   value   initWithPath   fullpath   isDirectory   fileSize	   next	   done   ˙˙˙˙   !   getDirectorySize               ł       š   	   H                                      aFile	   size   entries   entry ă2  [4  }      	      >   QT  5    ¸   
;   5   :   Q  Q   ]mV  ¸   
:  D   QV  ¸   
:      V   V  5   W   Q   V      V  : W   QăV  5   W  ˙˙˙V  ¸   
:  QV   

Ů
Č
(l ËÉË
ÍxË
Î{ Ô Ď !   directoryEntries   QueryInterface   Ci-   nsIDirectoryEnumerator   isSymlink   isDirectory   fileSize   nextFile   close    2   l       ˙˙˙˙         tag       M         C      ˙˙˙˙   ˙˙˙˙      PluginWrapper/<Á                i       š      "                        
          	   libsż5  %6        
      Z      Q   - Á
:    Q   )m5    W  QV   ¸   
V  5   : QăQ¸   
:  5   ˙˙˙ČČ V   ÉÔ8=ŃŘ Ë˙˙˙đŇ    value	   push   filename	   next	   done    ˙˙˙˙         tag       "   =          H   ˙˙˙˙   ˙˙˙˙      PluginWrapper/<Á                i       š      "                        
             paths[6  Ä6        
      Z      Q   - Á
:    Q   )m5    W  QV   ¸   
V  5   : QăQ¸   
:  5   ˙˙˙ČČ V   ÉÔ8=ŃŘ  Ë˙˙˙đŇ    value	   push   fullpath	   next	   done    ˙˙˙˙         tag       "   =          H   ˙˙˙˙   ˙˙˙˙      PluginWrapper/<Á                :      š      h                                     typesú6  Ĺ8  Ľ            Z      Q   - Á
:    Q   úm5    W  Q  Q  Q  QV  ¸   
Y   :   QV  ¸   
Y   :   QV  ¸   
Y   :   Q>  Q    qm  QY     QV  V  V  70   QV  V  V  70   QV  V  V  70   QV   ¸   
V  : QČV  #?W  QQăV  V  Ů   ˙˙˙ČČăQ¸   	
:  5   
˙˙ţ÷Č V   ÉÔ8 ă
ĐČ
ĐČ
ĐČ&qc  "ĘÓÓÓÔ Ť,Î˙˙˙ę× §Ë˙˙˙đŇ ´    value   getMimeTypes'   getMimeDescriptions   getExtensions	   type   description   suffixes	   push   length	   next	   done    ˙˙˙˙         tag                     mimeTypes    !   mimeDescriptions       extensions                    i                 	   type       "                       ˙˙˙˙   1   ć                         \         ˙˙˙˙      PluginWrapper/<Á                x       š      (                                  	   dateř8  9  ˇ            >   Q   - Á
:    Q   2m5    W  Q;   ¸   
V   V  5   : W   QăQ¸   
:  5   ˙˙˙żČ ;   V   R Ô8FŃŮČ šË˙˙˙đŇĘ    value	   Math   max!   lastModifiedTime	   next	   done	   Date    ˙˙˙˙         tag          F          Q   ˙˙˙˙   ˙˙˙˙      PluginWrapper/<Á                [      š      K                        +          	   path   dir°9  P=  ż      
         >75       Q;   5   ¸   
=   ;   5   :   QV   ¸   
V  5   :    ;   	5   
;   5   ¸   
=   ;   5   : W  QV   ¸   
V  5   :    ;   	5   ;   5   ¸   
=   ;   5   : W  QV   ¸   
V  5   :    ;   	5      P  Qv  QV  5   E   QV  5   ;   5   5      Č   QČ   vp ;   	5   ŃŕČÔËŕČÔËPŕČÔ
Đ˙Ě ÖË!    fullpath   Services   dirsvc   get   APlugns   Ci   nsIFile   startsWith	   path   AddonManager#   SCOPE_APPLICATION   ProfD   SCOPE_PROFILE	   Home   SCOPE_USER   result   Components   results!   NS_ERROR_FAILURE   SCOPE_SYSTEM    ˙˙˙˙         e         °   T         B   ˙˙˙˙˙˙˙˙@            ˙˙˙˙      PluginWrapper/<Á                          š                                           =  ˇ=  Ů            ;    5   Ë!    AddonManager   PENDING_NONE   ˙˙˙˙      PluginWrapper/<Á                          š                                           ů=  0>  Ý            ;    5   Ë*    AddonManager+   OP_NEEDS_RESTART_NONE   ˙˙˙˙      PluginWrapper/<Á                      š      G                                      permissionsc>  ÄA  á            >   Q   >75       
V   A5       đ  Q  QA5   CI   V   ;   5   W   QA5     QV  ;   5   5   D   QV  ;   5   5   	  QA5   ;   5   
IE   )Q;   5   ¸   
=   : D   
QV     V   ;   5   W   QA5   BIE   QV      V   ;   5   W   QČV   ĚŃČÎx
Ë
ÚŮ×ÖÉÎxÎ)Îx )   isEnabledStateLocked   appDisabled   userDisabled   AddonManager!   PERM_CAN_DISABLE   blocklistState   Ci'   nsIBlocklistService5   STATE_VULNERABLE_NO_UPDATEC   STATE_VULNERABLE_UPDATE_AVAILABLE+   STATE_ASK_TO_ACTIVATE   Services   prefs   getBoolPref+   plugins.click_to_play1   PERM_CAN_ASK_TO_ACTIVATE   PERM_CAN_ENABLE    ˙˙˙˙         blocklistState    !   isCTPBlocklisted        *   é   ˙˙˙˙   ˙˙˙˙      PluginWrapper/<Á                   *       š                                           ÷A  B  ý            ;    â    A:    ;   5   ;   5   ËËË- 9   canDisableFlashProtectedMode   AddonManager'   OPTIONS_TYPE_INLINE1   OPTIONS_TYPE_INLINE_INFO   <\/?[a-z][^>]*>   !   <A\s+HREF=[^>]*>   5   <A\s+HREF=["']?([^>"'\s]*)      ˙˙˙˙   E   PluginWrapper.prototype.updateDateÁ                          š                                           C  1C              A5        installDate   ˙˙˙˙   I   PluginWrapper.prototype.isCompatibleÁ                          š                                             FC  _C              C    ˙˙˙˙   Y   PluginWrapper.prototype.isPlatformCompatibleÁ                          š                                             |C  C              C    ˙˙˙˙   _   PluginWrapper.prototype.providesUpdatesSecurelyÁ                          š                                             ľC  ÎC              C    ˙˙˙˙   M   PluginWrapper.prototype.foreignInstallÁ                          š                                             ĺC  ţC              C    ˙˙˙˙   Q   PluginWrapper.prototype.isCompatibleWithÁ                        š                                               aAppVerison!   aPlatformVersion  D  SD              C    ˙˙˙˙   G   PluginWrapper.prototype.findUpdatesÁ                 X       š                                             aListener   aReason   aAppVersion!   aPlatformVersion    mD  żE               =    T  q   T  ¸    
A: Q=   T  q   T  ¸   
A: Q=   T  q   T  ¸   
A: QÉĎÉĎÉĎ! A   onNoCompatibilityUpdateAvailable'   onNoUpdateAvailable!   onUpdateFinished