ç¿s¹                     ¹   '   Â                                 0     resource://gre/modules/ResourceStatsService.jsm     )                                  Af    0    QB   Q;   5      Q5      Q5   	   Q5   
   QQ;   ¸   
=   : Q;   ¸   
=   : Q;   ¸   
=   : Q;   ¸   
A=   =   =   : Q;   ¸   
A=   =   =   : Q;   ¸   
A=   =   =   : QAY      ]      ]      ]      ]      ]      ]       ]   !   	]   "   
]   #   ]   $   ]   %   ]   &0   QA5   ¸   
:  Q
Ê	Ì1
DöDÕ3Õ1Õ8Ò@Ò@Ò5 "Ê>ÊxÊ  Ê  Ê  ©Ê  ÇÊ  ÒÊ  öÊ Ê 6Ê AÐ KÑ! !   EXPORTED_SYMBOLS   DEBUG   Cc   Ci   Cu   Cr   Components   classes   interfaces   utils   results   importK   resource://gre/modules/XPCOMUtils.jsmG   resource://gre/modules/Services.jsmU   resource://gre/modules/ResourceStatsDB.jsm   XPCOMUtils/   defineLazyServiceGetter   gIDBManagerI   @mozilla.org/dom/indexeddb/manager;13   nsIIndexedDatabaseManager	   ppmmU   @mozilla.org/parentprocessmessagemanager;13   nsIMessageListenerManager   appsService5   @mozilla.org/AppsService;1   nsIAppsService)   ResourceStatsService	   init   receiveMessage   observe#   _createDbCallback   getStats   clearStats   clearAllStats   addAlarm   getAlarms   removeAlarm   removeAllAlarms   getComponents                  )   ResourceStatsService                  ÿÿÿÿ      debug                        ¹                                             s 4  j               ;    â    =   T  =   : QÝ. 	   dump5   -*- ResourceStatsService:    
   ÿÿÿÿ   =   this.ResourceStatsService.initÁ                   m       ¹      %                                    Ú  B  "             ;       ;   â   =   : Q;   5   ¸   
A=   B: QAf    0   QA5   ¸   
   A: QA;   
R  0   	QÓ(Ü+Ì6Ò86;É    DEBUG   debug   Service started   Services   obs   addObserver   xpcom-shutdown   messages   forEach   _db   ResourceStatsDB      
      
      -   ResourceStats:GetStats   1   ResourceStats:ClearStats   7   ResourceStats:ClearAllStats   -   ResourceStats:AddAlarm   /   ResourceStats:GetAlarms   3   ResourceStats:RemoveAlarm   ;   ResourceStats:RemoveAllAlarms   7   ResourceStats:GetComponents   1   ResourceStats:SampleRate   7   ResourceStats:MaxStorageAge                  ÿÿÿÿ   A   this.ResourceStatsService.init/<Á                        ¹                                             aMessageName ®  ö  6             ;    ¸   
T  A: QÔ, 	   ppmm%   addMessageListener   ÿÿÿÿ   Q   this.ResourceStatsService.receiveMessageÁ               #      ¹   #   ´                           +            aMessage   mm	   data _  Ã  >       
      ;       !;   â   =   T  5   : QT  5      QT  5     Q;       ,;   â   =   ;   ¸   
V  : : QT  5   ¸   	
=   
:     T  5   ¸   
V  5   :     $;       ;   â   =   : QT  5   x=   y   d=   y   s=   y   =   y   =   y    =   y   ¯=   y   ¾=   y   Í=   y   Ü=   y   Þz   åA¸   
V   V  : Q   ÌA¸   
V   V  : Q   ³A¸   
V   V  : Q   A¸   
V   V  : Q   A¸   
V   V  : Q   hA¸   
V   V  : Q   OA¸   
V   V  : Q   6A¸   
V   V  : Q   A5    5   !A5    5   "ÜCÍÍFß$ÿÿÿÜLÔOØÓSVÈh Ju
Zu
]u
`u
cu
fu
iu
lu
ou
ruÊWÔXÔXÔXÔXÔXÔXÔXÔXqÌtÌ    DEBUG   debug%   receiveMessage(): 	   name   target	   data3   received aMessage.data = 	   JSON   stringify!   assertPermission)   resourcestats-manage!   assertContainApp   manifestURLy   Got msg from a child process containing illegal manifestURL.-   ResourceStats:GetStats1   ResourceStats:ClearStats7   ResourceStats:ClearAllStats-   ResourceStats:AddAlarm/   ResourceStats:GetAlarms3   ResourceStats:RemoveAlarm;   ResourceStats:RemoveAllAlarms7   ResourceStats:GetComponents1   ResourceStats:SampleRate7   ResourceStats:MaxStorageAge   getStats   clearStats   clearAllStats   addAlarm   getAlarms   removeAlarm   removeAllAlarms   getComponents   _db   sampleRate   maxStorageAge   ÿÿÿÿ   C   this.ResourceStatsService.observeÁ                 n       ¹   	   *                          
            aSubject   aTopic   aData   Ù  n  x             T x=    y   
z   ];      ;   â   =   T : QA5   ¸   
    A: Q;   5   ¸   
A=    : Q   kjuÊ
×ÒÛX    xpcom-shutdown   DEBUG   debug#   Service shutdown    messages   forEach   Services   obs   removeObserver   ÿÿÿÿ   G   this.ResourceStatsService.observe/<Á                        ¹                                             aMessageName   ð               ;    ¸   
T  A: Q
Ô/ 	   ppmm+   removeMessageListener   ÿÿÿÿ   W   this.ResourceStatsService._createDbCallbackÁ                %       ¹                                       D      aMm   aId   aMessage   resolveMsg   rejectMsg Ç  0               T =       QT =      Q    ÏÏ      :Resolved   :Rejected   ÿÿÿÿ   [   this.ResourceStatsService._createDbCallback/<Á                 m       ¹      '                           
            aError   aResult  K  +               T     8   ¸    
      Y      ]   T  ]   : Q   ¸    
      Y      ]   T ]   : QÛ"ÊÈÿÿÿÍÛ#ÊÈÿÿÿÌF !   sendAsyncMessage   resolverId   reason   value   ÿÿÿÿ   E   this.ResourceStatsService.getStatsÁ               á       ¹      =                                       aMm   aData   manifestURL   serviceType   component   onStatsGot  G  ¼               ;       +;   â   =   ;   ¸   
T : : QT 5   5   D   Q=      QT 5   5   D   Q=     QT 5   5   	D   Q=     QA¸   

T  T 5   =   :   QA5   ¸   
T 5   V   V  V  T 5   T 5   V  : QÞÿÿÿéÝÝÝÓ  £ÈáÔ  ¥:    DEBUG   debug   getStats(): 	   JSON   stringify   statsOptions   manifestURL      serviceType   component#   _createDbCallback   resolverId-   ResourceStats:GetStats   _db   getStats	   type   start   end   ÿÿÿÿ   I   this.ResourceStatsService.clearStatsÁ               C      ¹      j                                       aMm   aData   appId   manifestURL   serviceType   component   onStatsCleared  Õ    ©             ;       +;   â   =   ;   ¸   
T : : Q>   QT 5   5   D   Q=     QV     X;   ¸   	
V  : W   QV       6T  ¸   

=   Y   T 5   ]   =   ]   : QT 5   5   D   Q=     QT 5   5   D   Q=     QA¸   
T  T 5   =   :   QA5   ¸   
T 5   V   V  V  T 5   T 5   V  : QÞÿÿÿçÝÐÈ
Ô
Í
Ê  µÝÝÓ  ÁÈáÔ  Ã@    DEBUG   debug   clearStats(): 	   JSON   stringify   statsOptions   manifestURL      appsService5   getAppLocalIdByManifestURL!   sendAsyncMessage?   ResourceStats:GetStats:Rejected   resolverId'   Invalid manifestURL   reason   serviceType   component#   _createDbCallback1   ResourceStats:ClearStats   _db   clearStats	   type   start   end   ÿÿÿÿ   O   this.ResourceStatsService.clearAllStatsÁ               n       ¹      %                                       aMm   aData#   onAllStatsCleared  ¶    Ç       	      ;       +;   â   =   ;   ¸   
T : : QA¸   
T  T 5   =   :    QA5   ¸   	
T 5   
V   : QÞÿÿÿäÓ  ÍÈÝ6    DEBUG   debug#   clearAllStats(): 	   JSON   stringify#   _createDbCallback   resolverId7   ResourceStats:ClearAllStats   _db   clearAllStats	   type   ÿÿÿÿ   E   this.ResourceStatsService.addAlarmÁ              m      ¹      w                                     aMm   aData   manifestURL   newAlarm   onAlarmAdded  &  G  Ò             ;       +;   â   =   ;   ¸   
T : : QT 5   5      QV      a  Q;   ¸   
V   :   QV      8T  ¸   	
=   
Y   T 5   ]   =   ]   : QÈÈY   T 5   ]   T 5   5   D   Q=   ]   T 5   5   D   Q=   ]   V   D   Q=   ]   T 5   ]   T 5   ]   T 5   ]     QA¸   
T  T 5   =   :   QA5   ¸   
V  V  : QÞÿÿÿéÒË
ÐÈ
Ô
Í
Ê  Ý  æÍÝÝÔÍÍÒÓ  ñÈÙ*    DEBUG   debug   addAlarm(): 	   JSON   stringify   statsOptions   manifestURL   appsService5   getAppLocalIdByManifestURL!   sendAsyncMessage?   ResourceStats:GetStats:Rejected   resolverId'   Invalid manifestURL   reason	   type   component      serviceType   threshold   startTime	   data#   _createDbCallback-   ResourceStats:AddAlarm   _db   addAlarm    ÿÿÿÿ         appId        L   [   ÿÿÿÿÿÿÿÿ¥             ÿÿÿÿ   G   this.ResourceStatsService.getAlarmsÁ              |      ¹      w                                     aMm   aData   options   statsOptions   onAlarmsGot  _  O#  ö             ;       +;   â   =   ;   ¸   
T : : Q@   QT 5     QV  5   D   QV  5   D   QV  5      Ð  QV  5   D   Q=   	  QV     b  Q;   
¸   
V  :   QV      9T  ¸   
=   Y   T 5   ]   =   ]   : QÈÈÈY   V  ]   V  5   D   Q=   	]   V  5   D   Q=   	]   W   QÈA¸   
T  T 5   =   :   QA5   ¸   
T 5   V   V  : QÞÿÿÿèÍÞÉË
ÙËÐÈ
ÔÍÊ 

ÉÙß Ó Èá5    DEBUG   debug   getAlarms(): 	   JSON   stringify   statsOptions   manifestURL   serviceType   component      appsService5   getAppLocalIdByManifestURL!   sendAsyncMessage?   ResourceStats:GetStats:Rejected   resolverId'   Invalid manifestURL   reason#   _createDbCallback/   ResourceStats:GetAlarms   _db   getAlarms	   type    ÿÿÿÿ         manifestURL                     appId        p   Ê   ÿÿÿÿ      \           ñ         ÿÿÿÿò            ÿÿÿÿ   K   this.ResourceStatsService.removeAlarmÁ               f       ¹   	                                   D      aMm   aData   onAlarmRemovedi#  &        	      ;       -;   â   =   ;   ¸   
   : : Q       QA5   ¸   
   5      5   V   : QàÿÿÿæÊ 3é@    DEBUG   debug   removeAlarm(): 	   JSON   stringify   _db   removeAlarm	   type   alarmId   ÿÿÿÿ   i   this.ResourceStatsService.removeAlarm/onAlarmRemovedÁ                 §       ¹      H                                       aError   aResult  $  <&  #            T     6   ¸    
=   Y      5   ]   T  ]   : QT     8   ¸    
=   Y      5   ]   =   ]   : Q   ¸    
=   Y      5   ]   T ]   : QÑÏÈ %
ÑÏÊ * /ÑÏÈ /M !   sendAsyncMessageE   ResourceStats:RemoveAlarm:Rejected   resolverId   reason#   alarm not existedE   ResourceStats:RemoveAlarm:Resolved   value   ÿÿÿÿ   S   this.ResourceStatsService.removeAllAlarmsÁ               n       ¹      %                                       aMm   aData%   onAllAlarmsRemoved  ¥&  (  6      	      ;       +;   â   =   ;   ¸   
T : : QA¸   
T  T 5   =   :    QA5   ¸   	
T 5   
V   : QÞÿÿÿâÓ <ÈÝ9    DEBUG   debug'   removeAllAlarms(): 	   JSON   stringify#   _createDbCallback   resolverId;   ResourceStats:RemoveAllAlarms   _db   removeAllAlarms	   type   ÿÿÿÿ   O   this.ResourceStatsService.getComponentsÁ               n       ¹      %                                       aMm   aData   onComponentsGot  #(  v)  A      	      ;       +;   â   =   ;   ¸   
T : : QA¸   
T  T 5   =   :    QA5   ¸   	
T 5   
V   : QÞÿÿÿäÓ GÈÝ4    DEBUG   debug#   getComponents(): 	   JSON   stringify#   _createDbCallback   resolverId7   ResourceStats:GetComponents   _db   getComponents	   type