ç¿s¹                ù  -   ¹   0                            !       0     resource://gre/modules/NotificationDB.jsm     l+                                            AZ   0    QB   Q;   5      Q;   5      Q;   5      Q;   ¸   	
=   
: Q;   ¸   	
=   : Q;   ¸   	
=   : Q;   ¸   
A=   =   : Q;   ¸   
A=   =   =   : Q;   5   5   5      Q;   5   ¸   
;   =   :    Qf      Qn   Y   B]      ]       ]   !   ]   "   ]   #   ]   $   ]   %   ]   &   	]   '   
]   (   ]   )   ]   *   ]   +   ]   ,   ]   -   ]   .   ]   /1   Q;   ¸    
:  Q	Ê	&Ë	HÐÐÐÕ3Õ/Õ0ÒIÒ@ÚÛÉË	&Ê)+Ê;ÊAÊGÊQÊpÊzÊÊ  Ê  Ê  ÙÊ  òÊ #Ê 0Ê IÊ `Ð& xÐ !   EXPORTED_SYMBOLS   DEBUG   Cu   Components   utils   Cc   classes   Ci   interfaces   importK   resource://gre/modules/XPCOMUtils.jsmC   resource://gre/modules/osfile.jsmE   resource://gre/modules/Promise.jsm   XPCOMUtils-   defineLazyModuleGetter   ServicesG   resource://gre/modules/Services.jsm/   defineLazyServiceGetter	   ppmmU   @mozilla.org/parentprocessmessagemanager;13   nsIMessageListenerManager-   NOTIFICATION_STORE_DIR   OS   Constants	   Path   profileDir/   NOTIFICATION_STORE_PATH	   join-   notificationstore.json   kMessages   NotificationDB'   _shutdownInProgress	   init#   registerListeners'   unregisterListeners   observe	   load   createStore   createFile	   save   ensureLoaded   receiveMessage   queueTask   runNextTask   taskGetAll+   taskGetAllCrossOrigin   taskSave   taskDelete   ÿÿÿÿ      debug                        ¹                                             s   W  
             ;    â    =   T  =   : QÝ2 	   dump=   -*- NotificationDB component:    
                  #   Notification:Save   '   Notification:Delete   '   Notification:GetAll   =   Notification:GetAllCrossOrigin                  ÿÿÿÿ   '   NotificationDB.initÁ                   i       ¹      '                                     E  ~  +             A5       AY   0   QAY   0   QAB0   QAZ   0   QA@0   Q;   5   ¸   
A=   	B: QA¸   

:  Q0ÌÌÈ4ËÈ7ÜÌ '   _shutdownInProgress   notifications   byTag   loaded   tasks   runningTask   Services   obs   addObserver   xpcom-shutdown#   registerListeners   ÿÿÿÿ   A   NotificationDB.registerListenersÁ                  X       ¹                              
            ÿ  ;             ;    - Á
:     Q   &m5   W   Q;   ¸   
V   A: QãQ¸   
:  5   ÿÿÿËÈ Ô8:ÑÕ<ËÿÿÿìÒ-    kMessages   value	   ppmm%   addMessageListener	   next	   done    ÿÿÿÿ          message          :          E   ÿÿÿÿ   ÿÿÿÿ   E   NotificationDB.unregisterListenersÁ                  X       ¹                              
          !    A             ;    - Á
:     Q   &m5   W   Q;   ¸   
V   A: QãQ¸   
:  5   ÿÿÿËÈ Ô8:ÑÕBËÿÿÿìÒ0    kMessages   value	   ppmm+   removeMessageListener	   next	   done    ÿÿÿÿ          message          :          E   ÿÿÿÿ   ÿÿÿÿ   -   NotificationDB.observeÁ                 _       ¹   	                              	            aSubject   aTopic   aData       G             ;       ;   â   =   T : QT =      4AC0   Q;   5   ¸   
A=   : QA¸   
:  Q×ÉÈÛÌ    DEBUG   debug   Topic:    xpcom-shutdown'   _shutdownInProgress   Services   obs   removeObserver'   unregisterListeners   ÿÿÿÿ   '   NotificationDB.loadÁ                 ]       ¹      +                                       promiseô  ¥  Q       	      ;    5   ¸   
;   Y   =   ]   : W   QV   ¸   
    ¸   
A:    ¸   
A: : Û2ÊÿÿÿØÈËÌeThÌkhSl    OS	   File	   read/   NOTIFICATION_STORE_PATH   utf-8   encoding	   then	   bind   ÿÿÿÿ      onSuccess               Í       ¹      5                                   	   data   origin   id   curNotification y	  Ó  T             T  Ù    >   A;   ¸   
T  : 0   QA5      A5   K   |mW   A5   V   Y   9QA5   V   7K   GmW  A5   V   7V  7W  QV  5      A5   V   7V  5   V  9QãQLMÿÿÿ¹QNãQLMÿÿÿQNAC0   QÊ
ÐÉYÉ0  ÊÑÎ0LÊÕÉòdÈ    length   notifications	   JSON   parse   byTag   tag   loaded   A         j   M      ÿÿÿÿ      onFailure                        ¹                                             reason >    h             AC0    QA¸   
:  ÈÈ    loaded   createStore   ÿÿÿÿ   5   NotificationDB.createStoreÁ                 J       ¹                                 
             promiseè    p             ;    5   ¸   
;   Y   C]   : W   QV   ¸   
A5   ¸   
A: : ÛqÈtËÎtv    OS	   File   makeDir-   NOTIFICATION_STORE_DIR   ignoreExisting	   then   createFile	   bind   ÿÿÿÿ   3   NotificationDB.createFileÁ                           ¹      	                                     ë  0  z             ;    5   ¸   
;   =   : Û1    OS	   File   writeAtomic/   NOTIFICATION_STORE_PATH      ÿÿÿÿ   '   NotificationDB.saveÁ                 H       ¹   	                              	          	   datap                  ;    ¸   
A5   : W   Q;   5   ¸   
;   V   Y   =   ]   : ÒÈß<ÊÿÿÿËI 	   JSON   stringify   notifications   OS	   File   writeAtomic/   NOTIFICATION_STORE_PATH   utf-8   encoding   ÿÿÿÿ   7   NotificationDB.ensureLoadedÁ                   .       ¹                                           m  Ú               A5        A¸   
:     ;   ¸   
:  ÈÉÌ    loaded	   load   Promise   resolve   ÿÿÿÿ   ;   NotificationDB.receiveMessageÁ                      ¹      ®       	                   ,      D      message   returnMessage÷  m                      Q;       #;   â   =      5   : Q   5   x=   y   (=   y   \=   y   =   y   Äz   ýA¸   
=   	   5   
: ¸   
   : ¸   
   : Q   çA¸   
=      5   
: ¸   
   : ¸   
   : Q   ©A¸   
=      5   
: ¸   
   : ¸   
   : Q   kA¸   
=      5   
: ¸   
   : ¸   
   : Q   -;       #;   â   =      5   : Q  Ë  Þ  Êh Nu
  «u
  ¸u
  ÅuÊ  ð  ¢    ©Xá  ¬Ê  ±  ¬  ¶Xð  ¹  ÃXð  Æ  ÐXÞ    DEBUG   debug#   Received message:	   name'   Notification:GetAll=   Notification:GetAllCrossOrigin#   Notification:Save'   Notification:Delete   queueTask   getall	   data	   then   catch'   getallaccrossorigin	   save   delete)   Invalid message name   ÿÿÿÿ      returnMessage                V       ¹                                       	   name	   data  ê                    5    ¸   
T  T : Q   9   Qv   Q;      ;   â   =   T  : QÈ    àÌÞ    target!   sendAsyncMessage   DEBUG   debug/   Return message failed,     ÿÿÿÿ          e                    "   -   ÿÿÿÿ   ÿÿÿÿ   ?   NotificationDB.receiveMessage/<Á                 E       ¹                                             notifications   ü                  =    Y      5   5   ]      5   5   ]   T  ]   : Q
ÐÔÔÈ  
 ;   Notification:GetAll:Return:OK	   data   requestID   origin   notifications   ÿÿÿÿ   ?   NotificationDB.receiveMessage/<Á                 E       ¹                                             error   Ü  ¢                =    Y      5   5   ]      5   5   ]   T  ]   : Q
ÐÔÔÈ  £
 ;   Notification:GetAll:Return:KO	   data   requestID   origin   errorMsg   ÿÿÿÿ   ?   NotificationDB.receiveMessage/<Á                        ¹                                             notifications p    ­                =    Y   T  ]   : QÐÈ  ® Q   Notification:GetAllCrossOrigin:Return:OK   notifications   ÿÿÿÿ   ?   NotificationDB.receiveMessage/<Á                        ¹                                             error    «  ±                =    Y   T  ]   : QÐÈ  ² Q   Notification:GetAllCrossOrigin:Return:KO   errorMsg   ÿÿÿÿ   ?   NotificationDB.receiveMessage/<Á                   )       ¹                                               ¹                =    Y      5   5   ]   : Q
ÐÔ  º
 7   Notification:Save:Return:OK	   data   requestID   ÿÿÿÿ   ?   NotificationDB.receiveMessage/<Á                 1       ¹                                             error «  P  ½                =    Y      5   5   ]   T  ]   : Q
ÐÔÈ  ¾
 7   Notification:Save:Return:KO	   data   requestID   errorMsg   ÿÿÿÿ   ?   NotificationDB.receiveMessage/<Á                   )       ¹                                           Á  F  Æ                =    Y      5   5   ]   : Q
ÐÔ  Ç
 ;   Notification:Delete:Return:OK	   data   requestID   ÿÿÿÿ   ?   NotificationDB.receiveMessage/<Á                 1       ¹                                             error V  ý  Ê                =    Y      5   5   ]   T  ]   : Q
ÐÔÈ  Ë
 ;   Notification:Delete:Return:KO	   data   requestID   errorMsg   ÿÿÿÿ   1   NotificationDB.queueTaskÁ               ª       ¹      F                                      operation	   data   defer   promise  ý  (  Ù             ;       ;   â   =   T  : QY      QA5   ¸   
Y   T  ]   T ]      ]   : Q;       R W   QA5   	    .;       ;   â   =   
: QA¸   
:  QV   ×ËÒÈÈÊ  Þ  äË
È  êÓÌ    DEBUG   debug   Queueing task:    tasks	   push   operation	   data   defer   Promise   runningTaskW   Task queue was not running, starting now...   runNextTask   ÿÿÿÿ   C   NotificationDB.queueTask/promise<Á                        ¹                                             resolve   reject  æ  ;  ä                T  0    Q   T 0   QÎÎ    resolve   reject   ÿÿÿÿ   5   NotificationDB.runNextTaskÁ                   Å       ¹                                          B  !  ò             A5    Ù   >H   ,;      ;   â   =   : QA@0   QAA5    ¸   
:  0   QA¸   
:  ¸   
    ¸   	
A: : ¸   
   ¸   	
A: : ¸   

   ¸   	
A: : ¸   
   ¸   	
A: : QÍÓÈÎÉÒÌ   ü
  ûÊ Ì  
  ûÊ Ì    ûÊ Ì 
  û      tasks   length   DEBUG   debugI   No more tasks to run, queue depleted   runningTask   shift   ensureLoaded	   then	   bind   catch   ÿÿÿÿ   9   NotificationDB.runNextTask/<Á                 ¢       ¹      R                                     	   task  >  ü             A5    W   QV   5   x=   y   (=   y   8=   y   ?=   y   Oz   dA¸   
V   5   :    JA¸   
:     9A¸   	
V   5   :    A¸   

V   5   :    
ËÉh  u
u
u
uÊ  
ÑX
ÈX
ÑX
ÑX    runningTask   operation   getall'   getallaccrossorigin	   save   delete   taskGetAll	   data+   taskGetAllCrossOrigin   taskSave   taskDelete   ÿÿÿÿ   9   NotificationDB.runNextTask/<Á                 C       ¹                                 	            payload ]  ø              ;       $;   â   =   A5   5   : QA5   5   ¸   
T  : QßÙ(    DEBUG   debug!   Finishing task:    runningTask   operation   defer   resolve   ÿÿÿÿ   9   NotificationDB.runNextTask/<Á                 V       ¹   	                                          err    Ç               ;       .;   â   =   A5   5   =   T  : QA5   5   ¸   
;   T  R : QéÛÿÿÿâ/    DEBUG   debug)   Error while running    runningTask   operation   :    defer   reject   String   ÿÿÿÿ   9   NotificationDB.runNextTask/<Á                          ¹                                           æ   
!              A¸    
:  QÌ    runNextTask   ÿÿÿÿ   3   NotificationDB.taskGetAllÁ                      ¹      '                                   	   data   origin   notifications   i 4!  ®"  #            ;       ;   â   =   : QT  5   W   QZ   W  QA5   V   7   HA5   V   7K   )mW  V  ¸   
A5   V   7V  7: QãQLMÿÿÿ×QN;   ¸   
V  : ÓÍÉËÎ0.ÊëÐ    DEBUG   debug#   Task, getting all   origin   notifications	   push   Promise   resolve   V   /      ÿÿÿÿ   I   NotificationDB.taskGetAllCrossOriginÁ                 ß       ¹   	   G                                       notifications   origin   i   notificationÒ"  ½%  0            ;       ;   â   =   : QZ   W   QA5   K   mW  A5   V  7    
   tA5   V  7K   UmW  A5   V  7V  7W  Q=   V  q    
   &V  V  0   QV   ¸   
V  : QãQLMÿÿÿ«QNãQLMÿÿÿqQN;   ¸   
V   : ÓÉÉ0  Ê
Ì@Î0ZÊÕ >Ë@ÎëÐ    DEBUG   debugC   Task, getting all whatever origin   notifications   alertName   origin	   push   Promise   resolve   4         b   [      ÿÿÿÿ   /   NotificationDB.taskSaveÁ               ò       ¹   
   ?                                    	   data   origin   notification   oldNotification Ô%  (  I            ;       ;   â   =   : QT  5   W   QT  5   W  QA5   V   7    'A5   V   Y   9QA5   V   Y   9QV  5      XA5   V   7V  5   7W  QV     A5   V   7V  5   /QA5   V   7V  5   V  9QA5   V   7V  5   V  9QA¸   	
:  ÓÍÍÌÑÑ TÉ
ÚÖÚÚÈ    DEBUG   debug   Task, saving   origin   notification   notifications   byTag   tag   id	   save   ÿÿÿÿ   3   NotificationDB.taskDeleteÁ                     ¹      J                                    	   data   origin   id   oldNotification ²(  P+  `            ;       ;   â   =   : QT  5   W   QT  5   W  QA5   V   7    7;       ;   â   =   V   : Q;   ¸   
:  A5   V   7V  7W  QV      7;       ;   â   =   	V  : Q;   ¸   
:  V  5   
   A5   V   7V  5   
/QA5   V   7V  /QA¸   
:  ÓÍÍÌØÌÕØÌÉÖÑÈ    DEBUG   debug   Task, deleting   origin   id   notificationsG   No notifications found for origin:    Promise   resolve?   No notification found with id:    tag   byTag	   save