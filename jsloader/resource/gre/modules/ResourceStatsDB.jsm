ç¿s¹                "  F   ¹   5   $                                0     resource://gre/modules/ResourceStatsDB.jsm     è?                                                           !Af    0    QB   Q;   5      Q5      Q5   	   Q5   
   QQ;   ¸   
=   : Q;   ¸   
=   : Q;   ¸   
f   : Q;   ¸   
A=   =   =   : Q=      Q?   Q=      Q=      Q=      QY   ;   ]   ;   ]      QØ&\     QX ´;       !QA   0   "Q;   "Y   ;   $5   #Â   ]   %   ]   &   ]   '   ]   (   ]   )   	]   *   
]   +   ]   ,   ]   -   ]   .   ]   /   ]   0   ]   1   ]   2   a   3   a   40   #Q
Ê	#&Ì,
?öDÕ8Õ3Õ)Ò5Ë
ËËËÊÐ#Ë&Ï(Ì/1ÊË4Ê>Ê_ÊrÊ  ²Ê  ßÊ AÊ kÊ {Ê Ê Ê ÀÊ ×Ê óÊ ÊÐ !   EXPORTED_SYMBOLS   DEBUG   Cc   Ci   Cu   Cr   Components   classes   interfaces   utils   results   importU   resource://gre/modules/IndexedDBHelper.jsmK   resource://gre/modules/XPCOMUtils.jsm-   importGlobalProperties   XPCOMUtils/   defineLazyServiceGetter   appsService5   @mozilla.org/AppsService;1   nsIAppsService   DB_NAME   resource_stats   DB_VERSION#   POWER_STATS_STORE#   power_stats_store'   NETWORK_STATS_STORE'   network_stats_store   ALARM_STORE   alarm_store   statsStoreNames   power   network   SAMPLE_RATE   MAX_STORAGE_AGE   ResourceStatsDB   prototype   IndexedDBHelper   _dbNewTxn   upgradeSchema   _normalizeTime!   saveNetworkStats   savePowerStats   getStats   clearStats   clearAllStats   addAlarm   _recordToAlarm   getAlarms   removeAlarm   removeAllAlarms   getComponents   sampleRate   maxStorageAge                     ResourceStatsDB                  ÿÿÿÿ      debug                        ¹                                             s /  `               ;    â    =   T  =   : QÝ) 	   dump+   -*- ResourceStatsDB:    
                     indexedDB                  ÿÿÿÿ      ResourceStatsDB                   S       ¹   	                              
            ¯  (             ;       ;   â   =   : QA¸   
;   ;   Z  ;   `   ;   `  ;   `  : QÓ-ÒÉÉÉ-K    DEBUG   debug   Constructor()   initDBHelper   DB_NAME   DB_VERSION#   POWER_STATS_STORE'   NETWORK_STATS_STORE   ALARM_STORE   ÿÿÿÿ   G   ResourceStatsDB.prototype._dbNewTxnÁ               2       ¹                                      D      aStoreName   aTxnType   aCallback   aTxnCb   successCb   errorCb       4       	          W   Q   W  QA¸    
T T  T V   V  : Ê8Ê48;ÙA    newTxn   ÿÿÿÿ      successCb                        ¹                                              aResult P  ~  5                @T  : QÎ    ÿÿÿÿ      errorCb                        ¹                                              aError   ¿  8                T  @: QÎ    ÿÿÿÿ   O   ResourceStatsDB.prototype.upgradeSchemaÁ               :      ¹      m                                      aTransaction   aDb   aOldVersion   aNewVersion   objectStore    ,  f  >             ;       &;   â   =   T =   T : Q   QT ¸   
;   Y   f    ]   : W   QV   ¸   
=   =   Y   B]   	: QT ¸   
;   
Y   f   ]   : W   QV   ¸   
=   =   Y   B]   	: QT ¸   
;   Y   =   ]   C]   : W   QV   ¸   
=   =   Y   B]   	: QV   ¸   
=   f   Y   B]   	: QáCFÔÊFÈIÚ4ÿÿÿÌLÔÊLÈOÚ4ÿÿÿÌRÔÊRÈVÚ*ÿÿÿÖXÐXZ/    DEBUG   debug)   Upgrade DB from ver.    to ver.#   createObjectStore#   POWER_STATS_STORE   keyPath   createIndex   component   unique'   NETWORK_STATS_STORE   ALARM_STORE   alarmId   autoIncrement	   type   controlTarget                     appId      serviceType      component      timestamp                                    appId      serviceType      component      timestamp                                 	   type      manifestURL      serviceType      component                  ÿÿÿÿ   Q   ResourceStatsDB.prototype._normalizeTimeÁ               -       ¹                                             aTime   aOffset	   time  ö  h  _             ;    ¸   
T  T ;   : ;      QV   ÙÎb 	   Math   floor   SAMPLE_RATE   ÿÿÿÿ   U   ResourceStatsDB.prototype.saveNetworkStatsÁ               s       ¹   	   *                                D      aRecordArray   aTimestamp   aResultCb   offset   timestamp  õ  ù  r             ;       ;   â   =   : Q;   R  ¸   
:  ×<Xè   QA¸   
T V   :    QA¸   
;   =       T : QÓw
ÙÏÉz×  ¢z  ¢    DEBUG   debug%   saveNetworkStats()	   Date#   getTimezoneOffset   _normalizeTime   _dbNewTxn'   NETWORK_STATS_STORE   readwrite   ÿÿÿÿ   Y   ResourceStatsDB.prototype.saveNetworkStats/<Á                        ¹                                      D   	   aTxn   aStore   è  z               ¸    
    : QÕ  ¡	    forEach   ÿÿÿÿ   ]   ResourceStatsDB.prototype.saveNetworkStats/</<Á                     ¹                                          aRecord   stats%   totalReceivedBytes   totalSentBytes	   data F  à  {             Y   T  5    ]    T  5   ]   =   ]       ]   >]   >]      Q>  Q>  QT  5     QV  K  Q   ³mW  V   V  0   QV   V  V  75   0   QV   V  V  75   0   Q   ¸   
V   : Q;   	   ,;   
â   
=   ;   ¸   
V   : : QV  V   5   W  QV  V   5   W  QãQLMÿÿÿMQNÈV   =   0   QV   V  0   QV   V  0   Q   ¸   
V   : Q;   	   ,;   
â   
=   ;   ¸   
V   : : Q
Í
Í
Ê
Ï

ËÍÍ0  ¸Ê
Î
Ø
Ø
Ôßÿÿÿá
Íx
ÍxÓÏÎÎÔ
ßÿÿÿá6    appId   serviceType      component   timestamp   receivedBytes   sentBytes   componentStats   put   DEBUG   debug)   Save network stats: 	   JSON   stringify    ÿÿÿÿ         component       t   ¹       j   Å   ÿÿÿÿ   ÿÿÿÿ   Q   ResourceStatsDB.prototype.savePowerStatsÁ               s       ¹   	   -                                D      aRecordArray   aTimestamp   aResultCb   offset   timestamp  O    ²             ;       ;   â   =   : Q;   R  ¸   
:  ×<Xè   QA¸   
T V   :    QA¸   
;   =       T : QÓ
ÙÏÉ×  Û  ¹  Û    DEBUG   debug!   savePowerStats()	   Date#   getTimezoneOffset   _normalizeTime   _dbNewTxn#   POWER_STATS_STORE   readwrite   ÿÿÿÿ   U   ResourceStatsDB.prototype.savePowerStats/<Á                        ¹                                      D   	   aTxn   aStore g    ¹               ¸    
    : QÕ  Ú	    forEach   ÿÿÿÿ   Y   ResourceStatsDB.prototype.savePowerStats/</<Á              ]      ¹      k                                    aRecord   stats%   totalConsumedPower	   data   y  º             Y   T  5    ]    T  5   ]   =   ]       ]   T  5   ]      Q>  QT  5     QV  K  Q   mW  V   V  0   QV   V  V  70   Q   ¸   
V   : Q;   	   ,;   
â   
=   ;   ¸   
V   : : QV  V   5   W  QãQLMÿÿÿ}QNÈV   =   0   QV   V  0   Q   ¸   
V   : Q;   	   ,;   
â   
=   ;   ¸   
V   : : Q
Í
Í
Ê
Ï
ÒÍÍ0  Ê
Î
Ó
Ôßÿÿÿã
ÍxÓÏÎÔ
ßÿÿÿã4    appId   serviceType      component   timestamp   totalStats   consumedPower   componentStats   put   DEBUG   debug%   Save power stats: 	   JSON   stringify    ÿÿÿÿ         component       o          e      ÿÿÿÿ   ÿÿÿÿ   E   ResourceStatsDB.prototype.getStatsÁ               ¥      ¹                                (      D      aType   aManifestURL   aServiceType   aComponent   aStart	   aEnd   aResultCb   offset   appId   storeName   start   end   lowerFilter   upperFilter   Æ  '  ß             ;       ;   â      =   : Q;   R  ¸   
:  ×<Xè   Q>   Q      8;   ¸   
   : W   QV       T =   @: Q;      7  QA¸   	
T    :    QA¸   	
T    :    Q;       `;   â   =   
   =      : Q;   â   =   V   =      =      =   : QZ  V   `      `     `     `     	QZ  V   `      `     `     `     
QA¸   
V  =       T : QÙ
ÚÑÈ
Î  óÐÐÉÐÉåàÒ  ú  ÿÈÉÉÏÈÉÉÏÖ =  =    DEBUG   debug   Mgr.getStats()	   Date#   getTimezoneOffset   appsService5   getAppLocalIdByManifestURL'   Invalid manifestURL   statsStoreNames   _normalizeTime%   Query time range: 	    to G   [appId, serviceType, component] = [   ,    ]   _dbNewTxn   readonly   ÿÿÿÿ   I   ResourceStatsDB.prototype.getStats/<Á               q      ¹      \                          &      D   	   aTxn   aStore   range   statsData   request P  ö&              ;    ¸   
  	  	  
  
BB:    QZ      Q   5           ;   ¸   
@: 0   Q   5     0   Q   5     0   Q   5     0   Q   5     0   Q   5           0   	Q   5           0   
Q   5   ;   0   QT ¸   
V   =   :   Q  =      V      0   Q   $  =      V     0   Q
âÈ
Ê
ËÒÉÕÕÕÕååÕ
Ó
ÈËÔ )ËÏ ;
    IDBKeyRange   bound   result   Object   create	   type   component   serviceType   manifestURL   start   end   sampleRate   SAMPLE_RATE   openCursor	   prev   power   onsuccess   network   ÿÿÿÿ   m   ResourceStatsDB.prototype.getStats/</request.onsuccessÁ               ¾       ¹      ;                                       aEvent   cursor o"  l$        
      T  5    5   W   QV      ;      1;   â   =   ;   ¸   
V   5   : : Q   ¸   
Y   V   5   5   	    ]   	V   5   5   
]   
: QV   ¸   
:  Q   5      0   QÒäÿÿÿñÑÞÓ  Ï
Õ"    target   result   DEBUG   debug	   Get 	   JSON   stringify   value	   push   timestamp   consumedPower   continue   statsData   ÿÿÿÿ   m   ResourceStatsDB.prototype.getStats/</request.onsuccessÁ               Ñ       ¹      @                                       aEvent   cursor ¹$  ç&  *      
      T  5    5   W   QV      ¥;      1;   â   =   ;   ¸   
V   5   : : Q   ¸   
Y   V   5   5   	    ]   	V   5   5   
]   
V   5   5   ]   : QV   ¸   
:  Q   5      0   QÒäÿÿÿñÑÞÓÓ 2 7Ï
Õ"    target   result   DEBUG   debug	   Get 	   JSON   stringify   value	   push   timestamp   receivedBytes   sentBytes   continue   statsData   ÿÿÿÿ   I   ResourceStatsDB.prototype.clearStatsÁ               F      ¹      n                                      aType   aAppId   aServiceType   aComponent   aStart	   aEnd   aResultCb   offset   storeName   start   end   lowerFilter   upperFilter       q'  ¾,  A      
      ;       ;   â   T  =   : Q;   R  ¸   
:  ×<Xè   Q;   T  7  QA¸   
T V   :   QA¸   
T V   :   Q;       Y;   â   =   V  =   V  : Q;   â   =   	T =   
T =   
T =   : QZ  T `   T `  T `  V  `     QZ  T `   T `  T `  V  `     QA¸   
V  =       T : Q×
ÙÎÏÈÏÈãÝÐ Q VÎÎÖ g Z g    DEBUG   debug!   Mgr.clearStats()	   Date#   getTimezoneOffset   statsStoreNames   _normalizeTime%   Query time range: 	    to G   [appId, serviceType, component] = [   ,    ]   _dbNewTxn   readwrite   ÿÿÿÿ   M   ResourceStatsDB.prototype.clearStats/<Á               K       ¹                                         	   aTxn   aStore   range   request  í*  ­,  Z            ;    ¸   
            BB:    QT ¸   
V   :     0     Q
âÈ
Î
Òÿÿÿý    IDBKeyRange   bound   openCursor   onsuccess   ÿÿÿÿ                   x       ¹      #                                       aEvent   cursor +  ¦,  \      
      T  5    5      QV      a;      7;   â   =   ;   ¸   
V   5   : =   : QV   ¸   	
:  QV   ¸   

:  QÒäÊÿÿÿî
Ï
Ï
    target   result   DEBUG   debug   Delete 	   JSON   stringify   value    from database   delete   continue   ÿÿÿÿ   O   ResourceStatsDB.prototype.clearAllStatsÁ               Q       ¹      &                          	      D      aType   aResultCb   storeName -  n.  k            ;       ;   â      =   : Q;      7   QA¸   
V   =       T : QÙÐÖ x s x    DEBUG   debug'   Mgr.clearAllStats()   statsStoreNames   _dbNewTxn   readwrite   ÿÿÿÿ   S   ResourceStatsDB.prototype.clearAllStats/<Á                 8       ¹                                          	   aTxn   aStore  Û-  ].  s            ;       $;   â   =      =   : QT ¸   
:  QßÎ    DEBUG   debug   Clear +    stats from datastore   clear   ÿÿÿÿ   E   ResourceStatsDB.prototype.addAlarmÁ                 o       ¹   
   +                                D      aAlarm   aResultCb .  M0  {            ;       K;   â      5   =   : Q;   â   =   ;   ¸   
   : : QA¸   
;   =   	    T : QÞàÿÿÿí×       DEBUG   debug	   type   Mgr.addAlarm()   alarm = 	   JSON   stringify   _dbNewTxn   ALARM_STORE   readwrite   ÿÿÿÿ   I   ResourceStatsDB.prototype.addAlarm/<Á                        ¹                                      D   	   aTxn   aStore G/  <0              T ¸    
  :     0   QÝ     put   onsuccess   ÿÿÿÿ      setResult                 A       ¹                                             aEvent /  50                 T  5   5    0    Q;      #;   â   =      5    : QØ
Þ&    result   target   DEBUG   debug   New alarm ID:    ÿÿÿÿ   Q   ResourceStatsDB.prototype._recordToAlarmÁ               k       ¹      '                                       aRecord   alarm 0  ¸1              Y   T  5    ]    T  5   ]   T  5   ]   T  5   ]   T  5   ]   T  5   ]   T  5   ]      QV   ÍÍÍÍÍÍÒ    alarmId	   type   component   serviceType   manifestURL   threshold	   data   ÿÿÿÿ   G   ResourceStatsDB.prototype.getAlarmsÁ                        ¹      ;                                D      aType   aOptions   aResultCb Ð1  ~6        	      ;       d;   â      =   : Q;   â   =      5   =      5   =      5   =   : QA¸   	
;   
=       ¸   
A: T : QÙàâ  £Þ ½ £- ½ £ ½    DEBUG   debug   Mgr.getAlarms()G   [appId, serviceType, component] = [   appId   ,    serviceType   component   ]   _dbNewTxn   ALARM_STORE   readwrite	   bind   ÿÿÿÿ   K   ResourceStatsDB.prototype.getAlarms/<Á               ñ       ¹      a                                D   	   aTxn   aStore   indexName   range   request 3  b6  £      
         5           Z   0    Q@   Q@  Q     _=   W   Q;   ¸   
Z    `     5   `    5   `    5   `  : W  Q   (=   W   Q;   ¸   
  : W  QT ¸   
V   : ¸   	
V  :   QV      ¸   
A: 0   
Q
ËÏ

ZÊÐÉÎ"ÎÎ ­ÍÊÑÈ
Î
ÖÐ ¼ µ#É ¼    result   controlTarget   IDBKeyRange	   only   manifestURL   serviceType   component	   type   index   openCursor   onsuccess	   bind   ÿÿÿÿ      onsuccess               V       ¹                                             aEvent   cursor 5  P6  µ      	      T  5    5      QV      ?   5   ¸   
A¸   
V   5   : : QV   ¸   
:  QÒ
âÿÿÿï
Ï
    target   result	   push   _recordToAlarm   value   continue   ÿÿÿÿ   K   ResourceStatsDB.prototype.removeAlarmÁ                 H       ¹      !                                D      aType   aAlarmId   aResultCb 6  9  À            ;       $;   â   =      =   : QA¸   
;   =       T : Qß× Ô Æ Ô    DEBUG   debug   removeAlarms(   )   _dbNewTxn   ALARM_STORE   readwrite   ÿÿÿÿ   O   ResourceStatsDB.prototype.removeAlarm/<Á                         ¹                                      D   	   aTxn   aStoreS7  ò8  Æ               ¸    
  :     0   Qß Ó    get   onsuccess   ÿÿÿÿ      onsuccess                      ¹   
   ,                                       aEvent   alarm 7  ë8  Ç      	      T  5    5      Q   B0   QV    D   Q  V   5   I   ;      2;   â   =   ;   ¸   
V   : =   : Q   ¸   	
  : Q   C0   QÒÌÚ

ßÊÿÿÿèÕÌ    target   result	   type   DEBUG   debug   Remove alarm 	   JSON   stringify    from datastore   delete   ÿÿÿÿ   S   ResourceStatsDB.prototype.removeAllAlarmsÁ                 B       ¹      !                                D      aType   aResultCb !9  <  ×            ;       ;   â      =   : QA¸   
;   =       T : QÙ× ï Ý ï    DEBUG   debug+   Mgr.removeAllAlarms()   _dbNewTxn   ALARM_STORE   readwrite   ÿÿÿÿ   W   ResourceStatsDB.prototype.removeAllAlarms/<Á               w       ¹   
   "                                   	   aTxn   aStore   range   request  Ñ9  õ;  Ý            ;       $;   â   =      =   : Q;   ¸   
   :    QT ¸   
=   : ¸   
V   :   QV      0   	Qß
ÑÈ
Ï
ÖÏ î    DEBUG   debug   Remove all /    alarms from datastore.   IDBKeyRange	   only   index	   type   openCursor   onsuccess   ÿÿÿÿ      onsuccess               x       ¹      #                                       aEvent   cursor Ó:  î;  ä      
      T  5    5      QV      a;      7;   â   =   ;   ¸   
V   5   : =   : QV   ¸   	
:  QV   ¸   

:  QÒäÊÿÿÿî
Ï
Ï
    target   result   DEBUG   debug   Remove 	   JSON   stringify   value    from database.   delete   continue   ÿÿÿÿ   O   ResourceStatsDB.prototype.getComponentsÁ               M       ¹      %                                      aType   aResultCb   storeName  L<  t?  ó            ;       ;   â   T  =   : Q;   T  7   QA¸   
V   =       T : Q×ÎÖ  ú     DEBUG   debug'   Mgr.getComponents()   statsStoreNames   _dbNewTxn   readonly   ÿÿÿÿ   S   ResourceStatsDB.prototype.getComponents/<Á               V       ¹                                      D   	   aTxn   aStore   request =  c?  ú               5           Z   0    QT ¸   
=   : ¸   
@=   :    QV       0   Q
ËÏ
Ï
ØÏ     result   index   component   openKeyCursor   nextunique   onsuccess   ÿÿÿÿ      onsuccess                      ¹      %                                       aEvent   cursor   index Ï=  \?               T  5    5      QV      4   5   ¸   
V   5   : QV   ¸   
:  Q   5   ¸   
=   :   QV  ×ÿ      5   ¸   
V  ?: QÒ
Þ
Ï
 
ÖÈ
Ú    target   result	   push   key   continue   indexOf      splice   ÿÿÿÿ   I   ResourceStatsDB.prototype.sampleRateÁ                          ¹                                           ?  ¨?              ;        SAMPLE_RATE   ÿÿÿÿ   O   ResourceStatsDB.prototype.maxStorageAgeÁ                          ¹                                           ¾?  â?              ;        MAX_STORAGE_AGE