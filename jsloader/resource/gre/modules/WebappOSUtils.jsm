çżsš                     š      y                                      resource://gre/modules/WebappOSUtils.jsm     đ                                   ;   5       Q5      Q5      Q5   	   Q5   
   QQ;   ¸   
=   : Q;   ¸   
=   : Q;   ¸   
=   : QAf    6   QAY      ]      ]      ]      ]      ]      ]      ]      	]      
]      ]   6   QĘ	˙UŐ1Ő2Ő0Ě*%'Ę2ĘVĘxĘ~Ę  Ę  Ę  ČĘ  ŮĘ  čĐ    Cc   Ci   Cr   Cu   CC   Components   classes   interfaces   results   utils   Constructor   importG   resource://gre/modules/Services.jsmI   resource://gre/modules/FileUtils.jsmE   resource://gre/modules/Promise.jsm!   EXPORTED_SYMBOLS   WebappOSUtils   getUniqueName   getAppRegKey   getLaunchTarget   getInstallPath   getPackagePath   launch   uninstall+   isOldInstallPathValid   isLaunchable3   sanitizeStringForFilename                     WebappOSUtils                  ˙˙˙˙      computeHash            .      š      ^                                     aString   toHexString   converter   result	   data   hasher	   hash                      W   Q;    5   ¸   
;   5   :   QV  =   6   QY     QV  ¸   
T  V  :   Q;    5   ¸   
;   5   	:   QV  ¸   

V  5   : QV  ¸   
V  V  Ů   : QV  ¸   
B:   QY     Q  QV  K   -mW  V   V  ¸   
  V  : : ,  ÎăQLM˙˙˙ÓQNČ¸   
=   : ĘŃĘČĎĘŇČŃĘČŘÜĚČ$Ë-Í02â˙˙˙ç˙˙˙ôá˙˙˙˙;    CcY   @mozilla.org/intl/scriptableunicodeconverter   createInstance   Ci;   nsIScriptableUnicodeConverter   charset   UTF-8%   convertToByteArray9   @mozilla.org/security/hash;1   nsICryptoHash	   init   MD5   update   length   finish   charCodeAt	   join      ˙˙˙˙      toHexString                 #       š                                              charCode Ü                  =    T  ¸   
×: ¸   
×ţ: ŃÍ˙˙˙ú'    0   toString   slice    ˙˙˙˙         i       č   3      Ń   L   ˙˙˙˙   ˙˙˙˙   A   this.WebappOSUtils.getUniqueNameÁ                 ;       š                                           	   aApp Í  N  (             A¸    
T  5   : ¸   
:  =   ;   â   T  5   : ĐÓŇ 3   sanitizeStringForFilename	   name   toLowerCase   -   computeHash   manifestURL   ˙˙˙˙   ?   this.WebappOSUtils.getAppRegKeyÁ              ˙       š      M                                  	   aApp   regKey |  š
  2             ;    5   ¸   
;   5   :    QV   ¸   
;   5   5   =   A¸   
T  : ;   5   5   	: QY   V   ]   
×]        Qv  QČ    V   ¸   
;   5   5   =   T  5   ;   5   5   	: QY   V   ]   
?]        Qv  QČ    @ŃĘ3Č6XÚËÓ7;	ÉÍÓ@QÚŘAE	ÉĚÓI    CcG   @mozilla.org/windows-registry-key;1   createInstance   Ci!   nsIWindowsRegKey	   open+   ROOT_KEY_CURRENT_USERi   SOFTWARE\Microsoft\Windows\CurrentVersion\Uninstall\   getUniqueName   ACCESS_READ   value'   namingSchemeVersion   origin    ˙˙˙˙         ex        ˙˙˙˙         ex            U        $   \             ˙˙˙˙   ę      ˙˙˙˙   ˙˙˙˙   E   this.WebappOSUtils.getLaunchTargetÁ              D      š      h                                  	   aApp   appRegKey   appFilename   installLocation   initWithPath   launchTarget    1  V             A¸    
T  :    QV       @  Q  QV   5   ¸   
=   : W  QV   5   ¸   
=   : W  Qt   *   <  Qv  Q@Čt   Čt   
   V   5   ¸   
:  Qu V  ¸   
?V  Ů   ?: W  QV   5   ?E   QA¸   	
T  V  :     @;   
â   
=   =   =   :   QV  V  :   QV  ¸   
V  =   : QV  XËČZ^@ŐČŐŇĚÔÖh×ČjŃĎoĎĘoČqÉČŮt    getAppRegKey   value   readStringValue   AppFilename   InstallLocation   close   substring   length'   namingSchemeVersion+   isOldInstallPathValid   CC3   @mozilla.org/file/local;1   nsILocalFile   initWithPath   append	   .exe    ˙˙˙˙         ex        ,   d        ,   D       q      ˙˙˙˙˙˙˙˙             ˙˙˙˙   C   this.WebappOSUtils.getInstallPathÁ                        š      
                                     	   aApp N  &  x             ;    =   R p{Ë'    Error3   Unsupported apps platform   ˙˙˙˙   C   this.WebappOSUtils.getPackagePathÁ                      š                                           	   aApp   packagePath C  0  ~             A¸    
T  :    QV   ËČ      getInstallPath   ˙˙˙˙   3   this.WebappOSUtils.launchÁ              Ł       š   	   B                                  	   aApp   uniqueName   launchTarget E  Á         	      A¸    
T  :    QA¸   
T  :   QV      B  Q;   5   ¸   
;   5   :   QV  ¸   
V  : QV  ¸   
Z   >: QČ     Qv  QBČČ    CËČËČR
ŃĘ  ČÓÚĚË    getUniqueName   getLaunchTarget   Cc7   @mozilla.org/process/util;1   createInstance   Ci   nsIProcess	   init   runwAsync    ˙˙˙˙         process        ˙˙˙˙         e         3   V       4   P   ˙˙˙˙         ˙˙˙˙˙˙˙˙            ˙˙˙˙   9   this.WebappOSUtils.uninstallÁ              x      š      x                        (          	   aApp   appRegKey   deferred Ů  Ď               A¸    
T  :    QV       ;   ¸   
=   : ;   ¸   
:     Q  Q  Q  QV   5   ¸   
=   :   QV  ¸   
?V  Ů   	?: W  Q;   
5   ¸   
;   5   :   QV  ¸   
V  : Q;   
5   ¸   
;   5   :   QV  ¸   
V  : QV  ¸   
f   ?A   : QČt   5   G  Qv  Q   ¸   
V  : QČt   
   V   5   ¸   
:  Qu    5   ËČŃĚÉ  ÜÓ
ŐČ×Č
ŃĘ  ŹČÓ
ŃĘ  °ČÓć  şĚßÖË    getAppRegKey   Promise   reject5   App registry key not found   defer   value   readStringValue   UninstallString   substring   length   Cc3   @mozilla.org/file/local;1   createInstance   Ci   nsIFile   initWithPath7   @mozilla.org/process/util;1   nsIProcess	   init   runwAsync   close   promise    ˙˙˙˙         uninstallerPath       uninstaller       process                         /S                         =   this.WebappOSUtils.uninstall/<Ĺ                 C       š                                              aSubject   aTopic  ů  Ř  ł             T =          ¸   
C: Q   #   ¸   
=   T  5   : QÉ
Ö
ŢL !   process-finished   resolve   rejectG   Uninstaller failed with exit code:    exitValue    ˙˙˙˙         e        H          H   ŕ       K   Ó   ˙˙˙˙   )      ˙˙˙˙   ˙˙˙˙   Q   this.WebappOSUtils.isOldInstallPathValidÁ                 !       š                                           	   aApp   aInstallPath  v  I  Č             T  5    ¸   
=   :    BC  ÍÔ  Ó    origin   startsWith   app   ˙˙˙˙   ?   this.WebappOSUtils.isLaunchableÁ               ,       š                                           	   aApp   uniqueName Ł    Ů             A¸    
T  :    QA¸   
T  :     BCËČË    getUniqueName   getLaunchTarget   ˙˙˙˙   Y   this.WebappOSUtils.sanitizeStringForFilenameÁ                        š      	                                    5   aPossiblyBadFilenameString   í  č             T  ¸    
     =   : Ô9    replace      [^a-z0-9_\-]   