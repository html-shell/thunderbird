ç¿s¹                  K   ¹   '   ß                                      resource://gre/components/nsUpdateServiceStub.js     ï         	                                                      ;   5       Q;   5      Q;   5      Q;   ¸   
=   : Q;   ¸   
=   	: Q;   ¸   
=   
: Q=      Q=      Q=      Q=      Q=      Q=      Q=      Q=      Q;   Y      ]   ;   ¸   
=   : ]    ;   !¸   "
Z  ;    5   #`   : ]   $6   QA;   !¸   &
Z  ;   `   : 6   %QÊ	0	  		ÐÐÐ
Õ3Õ2Õ1ËËËËËËËË*0      °ÊÊÑ	ÈÐ'ÎÿÿÿéÎÑ5ÉÿÿÿßÉ5    Ci   Components   interfaces   Cc   classes   Cu   utils   importK   resource://gre/modules/XPCOMUtils.jsmI   resource://gre/modules/FileUtils.jsmG   resource://gre/modules/Services.jsm   DIR_UPDATES   updates   FILE_UPDATES_DB   updates.xml%   FILE_UPDATE_ACTIVE#   active-update.xml   FILE_LAST_LOG   last-update.log   FILE_BACKUP_LOG#   backup-update.log%   FILE_UPDATE_STATUS   update.status   KEY_UPDROOT   UpdRootD?   PREF_APP_UPDATE_MIGRATE_APP_DIR;   app.update.migrated.updateDir#   UpdateServiceStub   prototype   observe   IDM   {e43b0010-04ba-4da6-b523-1f92580bc150}   classID   XPCOMUtils   generateQI   nsIObserver   QueryInterface   NSGetFactory)   generateNSGetFactory   ÿÿÿÿ   !   getTaskbarIDHash              ¾       ¹      7                                     rootKey   exePath   appInfoName   registry     æ         
      ;    5   ¸   
;   5   :    QV   ¸   
T  =   T =   ;   5   5   : QV   ¸   	
T :    V   ¸   

T : t   't   !   .  Qv  QÈt   
   V   ¸   
:  Qu ;   ÑÊÈdÝÏ "ÎÎÔ%×Ñ)    CcG   @mozilla.org/windows-registry-key;1   createInstance   Ci!   nsIWindowsRegKey	   open#   Software\Mozilla\   \TaskBarIDs   ACCESS_READ   hasValue   readStringValue   close   undefined    ÿÿÿÿ         ex        $           $   h             ÿÿÿÿ   ÿÿÿÿ   '   migrateOldUpdateDir                 /      ¹   *   ê                          Y              appinfo   updateLeafName   programFiles   exeFile   oldUpdateRoot   newUpdateRoot   taskbarID   filesToMigrate  ª  0             ;    5   5   ¸   
;    5   5   : ¸   
;    5   5   : W   QV  Q;   ¸   	
=   
Z   : W  Q;   ¸   	
=   Z   : W  QV  5   ¸   
>V  5   Ù   : ¸   
:  V  5   ¸   
:     V  5   5   W  Q   V   5   W  Q   QV   5      K;   ¸   
=   Z  V   5   `   V   5   `  V  `  B:    Q   9;   ¸   
=   Z  V   5   `   V  `  B:    Q;   ¸   
=   Z   C:    Q;   â   ;   5   5   V  5   5   V   5   : W  QV      I;   â   ;   5   5   V  5   5   V   5   : W  QV      ;   5   ¸   
;   C: Q   5   ¸   
:     5   ¸   
:  D   QV  Ù   >      ¸    
:      Z  ;   !`   ;   "`  Z  =   #`   ;   $`  `  Z  =   #`   ;   %`  `  Z  =   #`   =   &`  ;   '`  `  W  QV  ¸   (
A    : Q   ¸   )
C: Q3ÖÏ3Ê5Ï3È6ÕÈÕ
ÈßÍÐØÎAÉFÕ2Í6Í6ÉCÎFÕ2Í6ÉGÉLÖÉPÙ×PÈRÙ×SÈUZÛ]ÑÔ$ÊËdÌjÉÉÉÍÉÍÉÉÒoÕ  Ñ    Components   classes7   @mozilla.org/xre/app-info;1   getService   interfaces   nsIXULAppInfo   QueryInterface   nsIXULRuntime   FileUtils   getFile   ProgF   XREExeF	   path   substring   length   toLowerCase   parent   leafName	   name   vendor   getDir   LocalAppData   UpdRootD!   getTaskbarIDHash   Ci!   nsIWindowsRegKey-   ROOT_KEY_LOCAL_MACHINE+   ROOT_KEY_CURRENT_USER   Services   prefs   setBoolPref?   PREF_APP_UPDATE_MIGRATE_APP_DIR   exists   FILE_UPDATES_DB%   FILE_UPDATE_ACTIVE   updates   FILE_LAST_LOG   FILE_BACKUP_LOG   0%   FILE_UPDATE_STATUS   forEach   remove   ÿÿÿÿ   +   migrateOldUpdateDir/<Å               ã       ¹      :                                     relPath   oldFile   newFile     o               ¸    
:     Q  ¸    
:     QT  ;   r   T  ¸   
A    : Q   +   ¸   
T  : Q   ¸   
T  : Q   ¸   
:      )   ¸   
   5      5   : Q   1   Qv   Q;   5   	¸   

V   : QÈ    Ì
ÉÌ
ÉÉÙwÓÓ|:
ÌéÌà    clone   Array   forEach   append   exists   moveTo   parent   leafName   Components   utils   reportError   ÿÿÿÿ   /   migrateOldUpdateDir/</<Å                 '       ¹                                              relPathPart #    s                ¸    
T  : Q   ¸    
T  : QÓÓ    append    ÿÿÿÿ          e         x   >      ·   %   ÿÿÿÿ   ÿÿÿÿ   )   getUpdateDirNoCreate                        ¹      	                                        pathArray   Ó               ;    ¸   
;   T  B: Õ0    FileUtils   getDir   KEY_UPDROOT   ÿÿÿÿ   #   UpdateServiceStub              4      ¹      j                                       migrated   statusFileï  é         	      >W   Q;    5   ¸   
;   : W   Q     Qv  QÈ    V       E;   â   :  Q   1  Qv  Q;   5   ¸   
V  : QÈ    ;   â   Z  ;   	`   =   
`  :   QV  ¸   
;   : QV  ¸   
:     b  Q;   5   5   ¸   
;   5   : ¸   
;   5   :   QV  ¸   
@=   =   : QÈÖÍÓÓÌà  §Î#ÉÉÿÿÿÝÈÔËËÖÊ  «ÊÊ  «ÈÛ  ª    Services   prefs   getBoolPref?   PREF_APP_UPDATE_MIGRATE_APP_DIR'   migrateOldUpdateDir   Components   utils   reportError)   getUpdateDirNoCreate   DIR_UPDATES   0   append%   FILE_UPDATE_STATUS   exists   classesK   @mozilla.org/updates/update-service;1   getService   Ci7   nsIApplicationUpdateService   QueryInterface   nsIObserver   observe-   post-update-processing       ÿÿÿÿ         e        ÿÿÿÿ         e        ÿÿÿÿ         aus         H              #       +      ÿÿÿÿ   \   %   ÿÿÿÿ   ×   \   ÿÿÿÿ   ÿÿÿÿ   G   UpdateServiceStub.prototype.observeÁ                          ¹                                                !  ²               