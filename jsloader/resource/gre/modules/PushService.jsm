ç¿s¹                @  Z   ¹   }   ^      B                   3       0     resource://gre/modules/PushService.jsm     ï                                             $   &   '   (   )   *   =   >   ?   @n    B1    Q;   5      Q;   5      Q;   5      Q;   5   	   Q;   ¸   

=   : Q;   ¸   

=   : Q;   ¸   

=   : Q;   ¸   

=   : Q;   ¸   

=   : Q;   ¸   

=   : Q;   ¸   
f   : Q;   ¸   
A=   =   =   : Q;   ¸   
A=   =   : Qn   ;   5   ¸   
;   5   : 1   QAf   0   Q;    =   !R    Qn    ;   ¸   "
=   #: 1    Q=   %   $Q?   &Q=   %   'QX¦   (Qf      )Q×   *QA   0   +QA5   +Y   ;   -5   ,Â   ]   .   ]   /   ]   0   ]   1   	]   2   
]   3   ]   4   ]   50   ,QA   0   6QA5   6Y      ]   7   ]   8   ]   9   ]   :   ]   ;   ]   <0   ,Q>   =Q?   >Q×   ?Q×   @QAY      ]   B   a   C   b   CZ   ]   D@]   EY   ]   F;   =]   G>]   H@]   I>]   JB]   KB]   LC]   MY   ]   N>]   O>]   P>]   Q   ]   R   ]   S   ]   T   ]   U   ]   V   ]   W   ]   X   ]   Y   ]   Z    ]   [   !]   \   "]   ]   #]   ^   $]   _   %]   `   &]   a   ']   b   (]   c   )]   d   *]   e   +]   f   ,]   g   -]   h   .]   i   /]   j   0]   k   1]   l   2]   m   3]   n   4]   o   5]   p   6]   q   7]   r   8]   s   9]   t   :]   u   ;]   v   <]   w   =]   x   >]   y   ?]   z   @]   {   A]   |0   AQ	Ê	$(,047 	ÌÐÐÐÐÕ3Õ1Õ8Õ.Õ4Õ0Õ)Ò4!Ò!M$àÉÿÿÿý&Ì((ËÉÿÿÿý*ÖÉ,ËË0É4Ë7È:Ì@BËËEÊ\ÊvÊ  Ê  Ê  ¬Ê  ËÊ  ÛÐ  ç  ñÌËÊ  üÊ ÊÊÊ Ð ÈÈ 'Ê  ÊÊ ¯ÉÊÊ Á É Ò ÚÊ ß ä ê ðÊ úÊ 2Ê BÊ {Ê £Ê 'Ê 2Ê pÊ zÊ Ê ¾Ê ëÊ $Ê :Ê _Ê iÊ Ê Ê ®Ê ÕÊ ùÊ Ê Ê Ê *Ê DÊ {Ê Ê ÃÊ ÐÊ áÊ éÊ !Ê 1Ê zÊ Ê ¢Ê ­Ê ¶Ê èÊ Ê Ð 3 #   gDebuggingEnabled   Cc   Components   classes   Ci   interfaces   Cu   utils   Cr   results   importK   resource://gre/modules/XPCOMUtils.jsmG   resource://gre/modules/Services.jsmU   resource://gre/modules/IndexedDBHelper.jsmA   resource://gre/modules/Timer.jsmM   resource://gre/modules/Preferences.jsmE   resource://gre/modules/Promise.jsm-   importGlobalProperties   XPCOMUtils/   defineLazyServiceGetter   gDNSServiceE   @mozilla.org/network/dns-service;1   nsIDNSService-   defineLazyModuleGetter   AlarmServiceO   resource://gre/modules/AlarmService.jsm   threadManager;   @mozilla.org/thread-manager;1   getService!   nsIThreadManager!   EXPORTED_SYMBOLS   prefs   Preferences   services.push.   get   debug   kPUSHDB_DB_NAME	   push%   kPUSHDB_DB_VERSION%   kPUSHDB_STORE_NAME5   kUDP_WAKEUP_WS_STATUS_CODE/   kCHILD_PROCESS_MESSAGES!   kWS_MAX_WENTDOWN   PushDB   prototype   IndexedDBHelper   upgradeSchema   put   delete#   getByPushEndpoint   getByChannelID'   getAllByManifestURL!   getAllChannelIDs	   drop+   PushWebSocketListener   onStart   onStop   onAcknowledge1   onBinaryMessageAvailable%   onMessageAvailable   onServerClose   STATE_SHUT_DOWN5   STATE_WAITING_FOR_WS_START/   STATE_WAITING_FOR_HELLO   STATE_READY   PushService   observe   _UAID   _requestQueue   _ws!   _pendingRequests   _currentState   _requestTimeout)   _requestTimeoutTimer   _retryFailCount'   _willBeWokenUpByUDP!   _adaptiveEnabled!   _recalculatePing/   _pingIntervalRetryTimes+   _lastGoodPingInterval   _upperLimit%   _wsWentDownCounter   _wsSendMessage	   init   _shutdownWS   uninit-   _reconnectAfterBackoff-   _calculateAdaptivePing   _save   _beginWSSetupA   _startListeningIfChannelsPresent   _setAlarm   _stopAlarm   _onAlarmFired#   _handleHelloReply)   _handleRegisterReply1   _handleNotificationReply   _sendAck   _sendRequest   _send5   _processNextRequestInQueue   _receivedUpdate-   _notifyAllAppsRegister   _notifyApp#   _updatePushRecord%   _dropRegistrations   receiveMessage   register%   _onRegisterSuccess!   _onRegisterError   unregister   registrations/   _onRegistrationsSuccess+   _onRegistrationsError   _wsOnStart   _wsOnStop+   _wsOnMessageAvailable!   _wsOnServerClose'   _listenForUDPWakeup!   onPacketReceived   onStopListening-   _getNetworkInformation!   _getNetworkState?   _getNetworkStateChangeEventName'   _getMobileNetworkId   ÿÿÿÿ      debug                 (       ¹      	                                       s g  µ               ;       ";   â   =   T  =   : QÝ) #   gDebuggingEnabled	   dump+   -*- PushService.jsm:    
                     indexedDB                                    PushService                                    Push:Register      Push:Unregister   %   Push:Registrations                  ÿÿÿÿ      PushDB                   7       ¹                                           ,  Ì  :             ;    â    =   : QA¸   
;   ;   Z  ;   `   : QÓ>ÒÉ>*    debug   PushDB()   initDBHelper   kPUSHDB_DB_NAME%   kPUSHDB_DB_VERSION%   kPUSHDB_STORE_NAME   ÿÿÿÿ   G   this.PushDB.prototype.upgradeSchemaÁ                      ¹   
   -                           	            aTransaction   aDb   aOldVersion   aNewVersion   objectStore    +	  ¥  E             ;    â    =   : QT ¸   
;   Y   =   ]   :    QV   ¸   
=   =   Y   C]   : QV   ¸   
=   	=   	Y   B]   : QÓHÏ.ÊHÈLÚ:ÿÿÿÆQÚ8ÿÿÿÈI    debug-   PushDB.upgradeSchema()#   createObjectStore%   kPUSHDB_STORE_NAME   channelID   keyPath   createIndex   pushEndpoint   unique   manifestURL   ÿÿÿÿ   3   this.PushDB.prototype.putÁ                 5       ¹                                      D      aChannelRecord   aSuccessCb   aErrorCb  ±  ~  \             ;    â    =   : QA¸   
=   ;       T T : QÓ_Èi_k    debug   put()   newTxn   readwrite%   kPUSHDB_STORE_NAME   ÿÿÿÿ      txnCb                 <       ¹                                         	   aTxn   aStore  A  Q  b             ;    â    =      5   : QT ¸   
   :     0   QÞÝg
    debug   Going to put    channelID   put   onsuccess   ÿÿÿÿ      setTxnResult                 "       ¹                                             aEvent Ñ  H  d             ;    â    =   T  5   5   : Q
ÏÎe
&    debugO   Request successful. Updated record ID:    target   result   ÿÿÿÿ   9   this.PushDB.prototype.deleteÁ                 5       ¹                                      D      aChannelID   aSuccessCb   aErrorCb    µ  v             ;    â    =   : QA¸   
=   ;       T T : QÓyÈy      debug   delete()   newTxn   readwrite%   kPUSHDB_STORE_NAME   ÿÿÿÿ      txnCb                 -       ¹                                          	   aTxn   aStore      |             ;    â    =      : QT ¸   
   : QÙÓ    debug!   Going to delete    delete   ÿÿÿÿ   O   this.PushDB.prototype.getByPushEndpointÁ                 5       ¹      !                                D      aPushEndpoint   aSuccessCb   aErrorCb  Õ  Ì               ;    â    =   : QA¸   
=   ;       T T : QÓÈ          debug'   getByPushEndpoint()   newTxn   readonly%   kPUSHDB_STORE_NAME   ÿÿÿÿ      txnCb               F       ¹                                      D   	   aTxn   aStore   index q                    ;   0    QT ¸   
=   :    QV   ¸   
  :     0   QÐÏÈÞ	    result   undefined   index   pushEndpoint   get   onsuccess   ÿÿÿÿ      setTxnResult                 :       ¹                                             aEvent                     T  5   5    0    Q;   â   =   T  5   5    : Q
Ø
á2    result   target   debug#   Fetch successful    ÿÿÿÿ   I   this.PushDB.prototype.getByChannelIDÁ                 5       ¹      !                                D      aChannelID   aSuccessCb   aErrorCb  é  ¦               ;    â    =   : QA¸   
=   ;       T T : QÓÈ  §    ©    debug!   getByChannelID()   newTxn   readonly%   kPUSHDB_STORE_NAME   ÿÿÿÿ      txnCb                 .       ¹                                      D   	   aTxn   aStore   y                  ;   0    QT ¸   
  :     0   QÐÝ	    result   undefined   get   onsuccess   ÿÿÿÿ      setTxnResult                 :       ¹                                             aEvent ò  q  ¢                T  5   5    0    Q;   â   =   T  5   5    : Q
Ø
á2    result   target   debug#   Fetch successful    ÿÿÿÿ   S   this.PushDB.prototype.getAllByManifestURLÁ               d       ¹      6                                D      aManifestURL   aSuccessCb   aErrorCb	   self  È    ¬             ;    â    =   : Q       #T '=      T =   : QA   QA¸   
=   ;       T T : QÓ
ÊÍÈ  Æ  ¶  È    debug+   getAllByManifestURL()   functionm   PushDB.getAllByManifestURL: Got undefined aManifestURL   newTxn   readonly%   kPUSHDB_STORE_NAME   ÿÿÿÿ      txnCb               ]       ¹                                	      D   	   aTxn   aStore   index   range &  ì  ¹             T ¸    
=   :    Q;   ¸   
  :   Q   Z   0   QV   ¸   
V  :     0   QÏÈÑÈÏÝ  Ä	    index   manifestURL   IDBKeyRange	   only   result   openCursor   onsuccess   ÿÿÿÿ                   z       ¹   	                                          event   cursor ê  ä  ½             T  5    5      QV      c;   â   V   5   5   =   V   5   5   : Q   5   ¸   
V   5   : QV   ¸   
:  QÒñÞÏ    target   result   debug   value   manifestURL       channelID	   push   continue   ÿÿÿÿ   M   this.PushDB.prototype.getAllChannelIDsÁ                 5       ¹      !                                      aSuccessCb   aErrorCb  8  y  Ë             ;    â    =   : QA¸   
=   ;       T  T : QÓÈ  Ö  Î  Ø    debug%   getAllChannelIDs()   newTxn   readonly%   kPUSHDB_STORE_NAME   ÿÿÿÿ      txnCb                        ¹      	                                D   	   aTxn   aStore Ä  L  Ñ             T ¸    
:      0   QØ	    mozGetAll   onsuccess   ÿÿÿÿ                            ¹                                             event   D  Ò                T  5   5    0    Q
Ø"    result   target   ÿÿÿÿ   5   this.PushDB.prototype.dropÁ                 =       ¹      "                                      aSuccessCb   aErrorCb    m  Û             ;    â    =   : QA¸   
=   ;       T  :  T :  : QÓÈ  Ý  å    debug   drop()   newTxn   readwrite%   kPUSHDB_STORE_NAME   ÿÿÿÿ      txnCb                        ¹                                          	   aTxn   aStore    <  à             T ¸    
:  QÎ    clear   ÿÿÿÿ   5   this.PushWebSocketListenerÁ                        ¹                                              pushService P    ñ             AT  0    QÊ     _pushService   ÿÿÿÿ   Y   this.PushWebSocketListener.prototype.onStartÁ                 #       ¹                                             context Â  (  ö             A5        A5    ¸   
T  : QÔ&    _pushService   _wsOnStart   ÿÿÿÿ   W   this.PushWebSocketListener.prototype.onStopÁ                 &       ¹                                             context   statusCode  =  º  ü             A5        A5    ¸   
T  T : Q×1    _pushService   _wsOnStop   ÿÿÿÿ   e   this.PushWebSocketListener.prototype.onAcknowledgeÁ                        ¹                                               context	   size  Ö  ø               *    ÿÿÿÿ   {   this.PushWebSocketListener.prototype.onBinaryMessageAvailableÁ                        ¹                                               context   message    D               8    ÿÿÿÿ   o   this.PushWebSocketListener.prototype.onMessageAvailableÁ                 &       ¹                                             context   message  e  è  
            A5        A5    ¸   
T  T : Q×:    _pushService+   _wsOnMessageAvailable   ÿÿÿÿ   e   this.PushWebSocketListener.prototype.onServerCloseÁ                 )       ¹                                             context   aStatusCode   aReason                   A5        A5    ¸   
T  T T : QÚB    _pushService!   _wsOnServerClose   ÿÿÿÿ      observe                *      ¹   9   ~                       \            aSubject   aTopic   aData   :"  ¡4  (            T Æ       Q  Q   Qx=    y   <=   y   >=   y   4=   y   =   y  @=   y  Óz  ÏA¸   
:  QA5      A5   ¸   
:  QA@0   QA¸   	
:  QT =   HD   QT =   
H   A¸   
:  Q  eT =      >;   â   =   ;   ¸   
=   : : QA¸   	
:  Q   {T =      @;   ¸   
=   :    A¸   
:  Q   A¸   	
:  Q   2T =      $n   ;   ¸   
=   : 1   Q  £T  A5       Q;   ¸   
A5   : Ù   >   A5   ¸   
:  QB  QA5   K  Q  mW    Q;   ¸   
:  A5   V  75     QV  D   QV  A5      Â;   â   =    V  : QCW  QA5   V  75   !¸   "
Y   >]   #=   $]   %: QA5   V  /QA5   &Ù   ?  Q    BmA5   &V  75   'V     A5   &¸   (
V  ?: QV  #?W  QãV  >ÿÿÿ»ÈÈãQLMÿÿþóQNÈV     A¸   	
:  QA¸   )
:  QÈ  ;   â   =   : QT  ¸   *
;   +5   ,:    QV       ;   â   =   -: QÈÇV   5   .   
ÈÇ;   /5   0¸   1
;   +5   2:   QV  ¸   3
V   5   4:    Q       ';   â   =   5V   5   4: QÈÇA5   6¸   7
      ¸   8
A:    : Q   ÈÇÛh  .u
u
u
 Cu
 Ru
 tuÊ .Ì
Ñ
ÈÌØ
ÌXÉ9
ÏÑ E

ÑÉ;ÑÑÑÉ
ÖÉXÊËÒÊÑÏ0 ÐÌÙÕØ×"Ê bÌÒ B6JÖÖ fBÌ h f:Ü nÌÍXÓÔÈ
Ó
É
ÑÊ ÈÔÉ
Ý
Þ  2   X    xpcom-shutdown-   network-active-changed=   network:offline-status-changed   nsPref:changed   timer-callback%   webapps-clear-data   uninit   _udpServer   close   _shutdownWS   onlineA   _startListeningIfChannelsPresent/   services.push.serverURL   debugm   services.push.serverURL changed! websocket. new value    prefs   get   serverURLA   services.push.connection.enabled%   connection.enabled'   services.push.debug#   gDebuggingEnabled)   _requestTimeoutTimer   Object	   keys!   _pendingRequests   length   cancel	   Date   now   ctime   _requestTimeout5   Request timeout: Removing    deferred   reject   status   TimeoutError   error   _requestQueue   channelID   splice-   _reconnectAfterBackoff   QueryInterface   CiK   mozIApplicationClearPrivateDataParams   webapps-clear-data: Failed to get information about application   browserOnly   Cc5   @mozilla.org/AppsService;1   getService   nsIAppsService/   getManifestURLByLocalId   appId]   webapps-clear-data: No manifest URL found for    _db'   getAllByManifestURL	   bind    ÿÿÿÿ       	   data       appsService       manifestURL                    requestTimedOut                    channelID                    duration                    i                 observe/<Á                Ë       ¹   
   Q                              D      records¦1  4        	      ;    â    =      Ù   : Q>Æ       Q    mA5   ¸   
     75   @   : QA5      C;    â    =   : QA¸   
=   	Y        75   ]   : Q   #?   QQã     Ù   ÿÿÿmÈÇ
ÞÌ   v   ç ÓÒÕÿÿÿæ .Ð  Ù J    debug	   Got    length   _db   delete   channelID   _wsO   Had a connection, so telling the server   _send   unregister    ÿÿÿÿ          i                observe/</<Á                   1       ¹                                           Q2  æ2              ;    â    =     =        75   : QÕ× G    debug)   webapps-clear-data: 1    Could not delete entry    channelID    0          $   ¥   ÿÿÿÿ             observe/<Á                           ¹                                           4  4              ;    â    =      =   : Q
ßO    debugc   webapps-clear-data: Error in getAllByManifestURL(   )   ê       ¦  J            ÿÿÿÿ              à          ð            V      ÿÿÿÿu         ÿÿÿÿ         ÿÿÿÿõ            ÿÿÿÿ   -   this.PushService._UAIDÁ                          ¹      	                                     ¯4  Ü4               ;    ¸   
=   : Ñ    prefs   get   userAgentID   ÿÿÿÿ   -   this.PushService._UAIDÁ                 ^       ¹      !                                       newID ê4  Ù5  ¤            T  '=    I   $;   â   =   T  =   : Q;   â   =   T  : Q;   ¸   
=   T  : QÊÓ ¦×Ø     string   debug;   Got invalid, non-string UAID 5   . Not updating userAgentID   New _UAID:    prefs   set   userAgentID   ÿÿÿÿ   ?   this.PushService._wsSendMessageÁ                 c       ¹                                             msg Ç>  ?  ð            A5        ;   â   =   : Q;   ¸   
T  : U  Q;   â   =   T  : QA5    ¸   
T  : QÓÏ×Ô    _ws   debuga   No WebSocket initialized. Cannot send a message.	   JSON   stringify#   Sending message:    sendMsg   ÿÿÿÿ   +   this.PushService.initÁ                        ¹   !                             4          	   ppmm¯?  (H  ú            ;    â    =   : Q;   ¸   
=   :     @A;   R  0   Q;   5   ¸   	
;   
5   :    Q;   ¸   
    ¸   
A: : QA@0   QA;   ¸   
=   : 0   QA;   ¸   
=   : 0   QA;   ¸   
=   : 0   QA¸   
:  Q;   5   ¸   
A=   B: Q;   5   ¸   
A=   B: Q;   5   ¸   
AA¸   
:  B: Q;   ¸   
=   A: Q;   ¸   
=   A: Q;   ¸   
=    A: QAC0    QÓÑÉÑÊ ÉØ -ÿÿÿ×ÈÒÉÒÉÒÉÌÜÜ %ÚÿÿÿáÖÖÖÈ    debug   init()   prefs   get   enabled   _db   PushDB   CcU   @mozilla.org/parentprocessmessagemanager;1   getService   Ci+   nsIMessageBroadcaster/   kCHILD_PROCESS_MESSAGES   forEach	   bind   _alarmID   _requestTimeout   requestTimeout!   _adaptiveEnabled!   adaptive.enabled   _upperLimit'   adaptive.upperLimitA   _startListeningIfChannelsPresent   Services   obs   addObserver   xpcom-shutdown%   webapps-clear-data?   _getNetworkStateChangeEventName   observe   serverURL%   connection.enabled   _started   ÿÿÿÿ      addMessage                        ¹                                             msgName Ì@  A                    ¸    
T  A: QÙ' %   addMessageListener   ÿÿÿÿ   9   this.PushService._shutdownWSÁ                         ¹      ,                        
          BH  I  2            ;    â    =   : QA;   0   QAB0   QA5      A5   @0   QA5   ¸   
>@: Q      Qv   QÈ    A@0   QAB0   	QA¸   

:  QÓÌÈÍØÓÈÈÌ    debug   shutdownWS()   _currentState   STATE_SHUT_DOWN'   _willBeWokenUpByUDP   _wsListener   _pushService   _ws   close   _waitingForPong   _stopAlarm    ÿÿÿÿ          e         @          Y      ÿÿÿÿ   ÿÿÿÿ   /   this.PushService.uninitÁ                   L      ¹      c                           ,          I  úM  B            A5        ;   â   =   : Q;   ¸   
=   A: Q;   ¸   
=   A: Q;   ¸   
=   A: Q;   5   ¸   	
AA¸   

:  : Q;   5   ¸   	
A=   B: Q;   5   ¸   	
A=   B: QA5      A5   ¸   
:  QA@0   QA5      A5   ¸   
:  QA@0   QA¸   
:  QA¸   
:  QA5      A5   ¸   
:  Q;   â   =   : QÓÖÖÖÚ"ÿÿÿÞÜÜÑÈÑÈ \Ì aÌÑÓ    _started   debug   uninit()   prefs   ignore%   connection.enabled   serverURL   Services   obs   removeObserver?   _getNetworkStateChangeEventName%   webapps-clear-data   xpcom-shutdown   _db   close   _udpServer   _shutdownWS   _stopAlarm)   _requestTimeoutTimer   cancel%   shutdown complete!   ÿÿÿÿ   O   this.PushService._reconnectAfterBackoffÁ                 È       ¹      3                                        retryTimeout·Q  ÁS  {      	      ;    â    =   : QA¸   
C: Q;   ¸   
=   : ;   ¸   
×A5   :    Q;   ¸   	
V   ;   ¸   
=   
: : W   QA5   #?
0   QQ;    â    =   V   =   A5   : QA¸   
V   : QÓÍÑÔÉá&ÿÿÿéÈÕåÐ    debug/   reconnectAfterBackoff()-   _calculateAdaptivePing   prefs   get#   retryBaseInterval	   Math   pow   _retryFailCount   min   pingInterval   Retry in     Try number    _setAlarm   ÿÿÿÿ   O   this.PushService._calculateAdaptivePingÁ              l      ¹   5   §                       x            wsWentDown   ns!   nextPingInterval+   lastTriedPingInterval xW  Wj  £            ;    â    =   : QA5       ;    â    =   : QA5   >   ';    â    =   A5   =   : QT       ;    â    =   : QA>0   QA5   	 E   
QT      ;    â    =   
: QA¸   
:     QV   5     R  Q  Q;    â    =   : Q;   ¸   
=   :   Q=   V   5   =   V   5     QV  V  I     Q;    â    =   V  =   V  : Q;   ¸   
=   V  : QAC0   	QAY   0   Q;   ¸   
=   :   Q;   ¸   
=   V  : QAV  0   QÈ   I;   ¸   
=   ;   ¸   
=   : : QA;   ¸   
=   : 0   QÈ   \;    â    =   : Q;   ¸   
=   ;   ¸   
=   : : QA;   ¸   
=    : 0   Q  Q;   ¸   
=   :   QA5   	 E   	QT     Ë;    â    =   !: QA5   #?
0   QQA5   ;   "   ;    â    =   #: QA>0   QAC0   	QA;   $¸   %
V  ×: 0   QA5   W  Q;   ¸   
=   V  : QA¸   &
V   V  : Q;    â    =   ': QT    :;    â    =   (: QA5   V  A5   V  7D   Q>?9QA5   V  7×   7;    â    =   )V  =   *A5   V  7=   +: Q;   $¸   %
V  ×: W  QV  A5   ;   ¸   
=   ,:    b;    â    =   -: Q;    â    =   .V  : Q;    â    =   /A5   : QA5   W  QAB0   	Q    ;    â    =   0: QAC0   	Q   A;    â    =   1: QAV  0   Q;   $¸   %
V  <    : W  QA5   2V     4;    â    =   3: QAB0   	QAV  0   QV  W  Q;    â    =   4V  : Q;   ¸   
=   V  : QA¸   &
V   V  : QÓÓÈÏÍ «ÓÈÍÓÈÈÉ MÑÓ
ÑÈ
äÉ  ËÔË ÇÙÈÌÑÈÙÑâÿÿÿæÒÏÓâÿÿÿæÒÉÑÈÐÓÕÌÓÈÈÔÉËÙÔÓ 5ÓÊÖÎ	ÚÒ þ		ÓÈÜ:]ÓØÚËÍÓÍÓËÖÈËÓÈËÉØÙÔ!    debug1   _calculateAdaptivePing()!   _adaptiveEnabled3   Adaptive ping is disabled   _retryFailCount]   Push has failed to connect to the Push Server _    times. Do not calculate a new pingInterval nowG   Setting websocket down counter to 0%   _wsWentDownCounter!   _recalculatePing   We do not need to recalculate the ping now, based on previous data-   _getNetworkInformation   ip   mobile   prefs   get   adaptive.mobile   mobile-   mcc   -   mncO   Mobile networks differ. Old network is     and new is    set/   _pingIntervalRetryTimes)   pingInterval.default   pingInterval+   _lastGoodPingInterval'   pingInterval.mobileI   adaptive.lastGoodPingInterval.mobile	   wifi#   pingInterval.wifiE   adaptive.lastGoodPingInterval.wifi   Websocket disconnected without ping adaptative algorithm running!   kWS_MAX_WENTDOWNs   Too many disconnects. Reenabling ping adaptative algoritm	   Math   floor   _save}   We do not need to recalculate the ping, based on previous datak   The WebSocket was disconnected, calculating next ping   pingInterval=     tried only     times   adaptive.gaps   We have reached the gap, we have finished the calculation#   nextPingInterval=   lastGoodPing==   We need to calculate next time3   The WebSocket is still up   _upperLimit   Next ping will be bigger than the configured upper limit, capping interval9   Setting the pingInterval to          ø?    ÿÿÿÿ         oldNetwork       newNetwork                     defaultPing        Ò   F  ÿÿÿÿ   ;            ÿÿÿÿ   -   this.PushService._saveÁ                 y       ¹                                             ns!   nextPingInterval  kj  îk  '            T  5       =;   ¸   
=   T : Q;   ¸   
=   A5   : Q   8;   ¸   
=   T : Q;   ¸   
=   A5   : QÈ8ØàØÛL    ip   prefs   set'   pingInterval.mobileI   adaptive.lastGoodPingInterval.mobile+   _lastGoodPingInterval#   pingInterval.wifiE   adaptive.lastGoodPingInterval.wifi   ÿÿÿÿ   =   this.PushService._beginWSSetupÁ                x      ¹   -   Ï                        C             serverURL   uri
l  4s  2            ;    â    =   : QA5   ;      !;    â    =   A5   : Q;   ¸   
=   :     ;    â    =   : QA¸   	
:  Q;   
5   5      ;    â    =   : Q;   ¸   
=   :    QV       ;    â    =   : Q  Q;   
5   ¸   
V   @@: W  Q   :  Qv  Q;    â    =   V   =   : QÈÈ    V  5   =   H   tA;   5   ¸   
;   5   : 0   QA5   ¸   
@;   
5   ¸   
:  @;   5   5   ;   5    5   !: Q   RV  5   =   "H   ;    â    =   #: Q   $;    â    =   $V  5   : Q;    â    =   %V  5   &: QA;   (AR 0   'QA5   =   *0   )QA5   ¸   +
V  V   A5   '@: QA;   ,0   QÓÌÏ 5ÑÓÌÏÓÑÈÓ ×ÍÌÏË QËÏoÒÊ WÉÎÑÏÏ ZÉ `ÏÓÝÝÈÉÑàÌ0    debug   beginWSSetup()   _currentState   STATE_SHUT_DOWNi   _beginWSSetup: Not in shutdown state! Current state    prefs   get%   connection.enabled   _beginWSSetup: connection.enabled is not set to true. Aborting.   _stopAlarm   Services   io   offline'   Network is offline.   serverURLC   No services.push.serverURL found!   newURIo   Error creating valid URI from services.push.serverURL (   )   scheme   wss   _ws   CcQ   @mozilla.org/network/protocol;1?name=wss   createInstance   Ci'   nsIWebSocketChannel   initLoadInfo+   scriptSecurityManager%   getSystemPrincipal   nsILoadInfo   SEC_NORMAL!   nsIContentPolicy   TYPE_WEBSOCKET   wsq   Push over an insecure connection (ws://) is not allowed!;   Unsupported websocket scheme    serverURL: 	   spec   _wsListener+   PushWebSocketListener   protocol#   push-notification   asyncOpen5   STATE_WAITING_FOR_WS_START    ÿÿÿÿ         e         ã   $         .   ÿÿÿÿÿÿÿÿ4            ÿÿÿÿ   c   this.PushService._startListeningIfChannelsPresentÁ                   "       ¹                                          cs  +t  p            A5    ¸   
    ¸   
A: : QÙ rÿÿÿæ    _db!   getAllChannelIDs	   bind   ÿÿÿÿ   g   this.PushService._startListeningIfChannelsPresent/<Á                        ¹      
                                       channelIDs ½s  t  r            T  Ù    >   A¸   
:  QÊÌ    length   _beginWSSetup   ÿÿÿÿ   5   this.PushService._setAlarmÁ                        ¹      T                                D      delayot  Hx  z      
      A5       A   0   QAC0   QA¸   
:  QAC0    Q;   ¸   
Y   ;   ;   ¸   
:     R ]   C]   	A5   
¸   
A:     ¸   
A: : QÌÈÌÈÌÒÉÿÿÿ÷ÈÎÌ        _settingAlarm#   _queuedAlarmDelay'   _waitingForAlarmSet   _stopAlarm   AlarmService   add	   Date   now	   date   ignoreTimezone   _onAlarmFired	   bind   ÿÿÿÿ      onSuccess                 ^       ¹                                             alarmID w  3x              AT  0    Q;   â   =      =   A5    : QAB0   QA5      AB0   QA¸   
A5   : QÊæÈ
È
Ò'    _alarmID   debug   Set alarm     in the future    _settingAlarm'   _waitingForAlarmSet   _setAlarm#   _queuedAlarmDelay   ÿÿÿÿ   7   this.PushService._stopAlarmÁ                   F       ¹                                           ax  y              A5    @I   =;   â   =   A5    : Q;   ¸   
A5    : QA@0    QÈÚÖÈ    _alarmID   debug/   Stopped existing alarm    AlarmService   remove   ÿÿÿÿ   =   this.PushService._onAlarmFiredÁ                  Ð       ¹      H                                  *~  X  ¾            A5       5;   â   =   : QA¸   
:  QA¸   
:  Q   A5   ;      \A¸   
Y   : Q      Qv   QÈ    AC0    QA¸   
;   	¸   

=   : : Q   1A5   @I   $;   â   =   : QA¸   
:  Q0ÓÌÑÌW ÍÖÓÈÙÿÿÿñÉÈÓ äÌ    _waitingForPong   debugk   Did not receive pong in time. Reconnecting WebSocket.   _shutdownWS-   _reconnectAfterBackoff   _currentState   STATE_READY   _wsSendMessage   _setAlarm   prefs   get   requestTimeout   _alarmID-   reconnect alarm fired.   _beginWSSetup    ÿÿÿÿ          e         M          d      ÿÿÿÿ   ÿÿÿÿ   E   this.PushService._handleHelloReplyÁ                     ¹                                2      D      reply   finishHandshakeµ  B  ë                W   Q;    â    =   : QA5   ;      3;    â    =   A5   =   : QA¸   
:  Q   5   Å=   I   &;    â    =   	: QA¸   
:  Q   5   =   
H   &;    â    =   : QA¸   
:  Q   5   Ù   X    1;    â    =      5   : QA¸   
:  QA5   E   QA5      5      Z;    â    =   : QA¸   
:  ¸   
A5   ¸   
A: : ¸   
V   ¸   
A: : QV   ¸   
A: :  Q Ê ëÓÌÖ îÌÑÓÌÐÓÌÓÏË Ì ÝÓÒÎ ÊÌ Ô    debug%   handleHelloReply()   _currentState/   STATE_WAITING_FOR_HELLO#   Unexpected state E   (expected STATE_WAITING_FOR_HELLO)   _shutdownWS	   uaid   stringY   No UAID received or non string UAID received   )   Empty UAID received!   lengthQ   UAID received from server was too long:    _UAID;   got new UAID: all re-register-   _notifyAllAppsRegister	   then%   _dropRegistrations	   bind   ÿÿÿÿ      finishHandshake                   *       ¹                                           È  B              A   5   0    QA;   0   QA¸   
:  QÑÌÌ"    _UAID	   uaid   _currentState   STATE_READY5   _processNextRequestInQueue   ÿÿÿÿ   K   this.PushService._handleRegisterReplyÁ               ì       ¹      5                                       reply   tmp ¢  ½  $            ;    â    =   : QT  5   Å=   ID   QA5   T  5   7Å=   I   A5   T  5   7   QA5   T  5   /Q;   ¸   
A5   : Ù   >E   QA5   	   A5   	¸   

:  QT  5   X È   !V   5   ¸   
T  : Q   V   5   ¸   
T  : QÓÕÖÔÐÒÐÑÌÜ×    debug+   handleRegisterReply()   channelID   string!   _pendingRequests   object   Object	   keys   length)   _requestTimeoutTimer   cancel   status   deferred   resolve   reject   ÿÿÿÿ   S   this.PushService._handleNotificationReplyÁ                Í      ¹                              "            reply !  T  :      
      ;    â    =   : QT  5   Å=   I   $;    â    =   T  5   Å: Q;    â    =   T  5   Ù   : Q>   Q   Dm  Q  QT  5   V   7  Q;    â    =   V  5   =   	V  5   
: QV  5   Å=   I   #;    â    =   V   : QÈ   ·V  5   
;   H   ;    â    =   : QÈ   V  5   
  QV  '=   H   ;   â   V  ×
: W  QV  '=   HE   QV  >   7A¸   
V  5   V  : QA¸   
V  5   V  : QÈV   #?W   QQãV   T  5   Ù   ÿÿþ­ÈÓÏÏ2ÊÿÿÿÎá& D 6 X&Í
Òí
ÐØAÏÓA
Î
ËÐ
È
×ÙÚ B.ÎÿÿÿæÚ     debug3   handleNotificationReply()   updates   objectO   No 'updates' field in response. Type =    Reply updates:    length   Update:    channelID   :    version   stringA   Invalid update literal at index    undefined;   update.version does not exist   parseInt   number   _receivedUpdate   _sendAck    ÿÿÿÿ          i                     update       version        s   X      h   d  ÿÿÿÿ   v   .          í                        ÿÿÿÿ   3   this.PushService._sendAckÁ                 L       ¹                                             channelID   version    +  _            ;    â    =   : QA¸   
=   Y   Z  Y   T  ]   T ]   `   ]   : QÓÒ
ÈÑ a    debug   sendAck()   _send   ack   channelID   version   updates   ÿÿÿÿ   ;   this.PushService._sendRequestÁ               /      ¹      c                           &            action	   data   deferred    5  i      	      ;    â    =   T  : QT 5   Å=   I   -;    â    =   : Q;   ¸   
=   : ;   ¸   
:     Q;   ¸   	
A5   
: Ù   >   ]A5       *A;   5   ¸   
;   5   : 0   QA5   ¸   
AA5   ;   5   5   : QA5   
T 5   Y   V   ]   ;   ¸   
:  ]   9QA¸   
T  T : QV   5   ×ÏÓÑÌÈÒÊ
ÒÊ u$ÉÎÏ w |Ó*É.ÌÊÒÊ    debug   sendRequest()    channelID   string;   Received non-string channelID   Promise   reject   defer   Object	   keys!   _pendingRequests   length)   _requestTimeoutTimer   Cc)   @mozilla.org/timer;1   createInstance   Ci   nsITimer	   init   _requestTimeout)   TYPE_REPEATING_SLACK   deferred	   Date   now   ctime   _send   promise   ÿÿÿÿ   -   this.PushService._sendÁ                 Z       ¹                                 	            action	   data  I  å              ;    â    =   : QA5   ¸   
Z  T  `   T `  : Q;    â    =   T  : QA¸   
:  QÓÑÿÿÿß×Ì"    debug   send()   _requestQueue	   push   Queued 5   _processNextRequestInQueue   ÿÿÿÿ   W   this.PushService._processNextRequestInQueueÁ                 =      ¹      d                           $             action	   data  ;        	      ;    â    =   : QA5   Ù   >   ;    â    =   : QA5   ;      $A5       A¸   
:  Q   A5   ¸   	
:  - Á
:  ¸   

:  5      Q   
5      Q¸   

:  5      Q   
5     QQQV  V   0   QA5       $;    â    =   : QA¸   
:  QA¸   
V  : Q;   â   A5   ¸   
A: >: QÓÍÓÌ
ÑÍÔÿÿÿïÉçØÎ ¥ÓÌÐØÿÿÿõ:    debug9   _processNextRequestInQueue()   _requestQueue   length'   Request queue empty   _currentState   STATE_READY   _ws   _beginWSSetup   shift	   next	   done   value   messageType3   This should never happen!   _shutdownWS   _wsSendMessage   setTimeout5   _processNextRequestInQueue	   bind   ÿÿÿÿ   A   this.PushService._receivedUpdateÁ               n       ¹      ,                                D      aChannelID   aLatestVersion;   compareRecordVersionAndNotify-   recoverNoSuchChannelIDY  ê  ®            ;    â    =      =      : Q       Q     QA5   ¸   
   V   ¸   
A: V  ¸   
A: : QåÊ ÊÊÒÌÌ Î?    debug   Updating: 	    ->    _db   getByChannelID	   bind   ÿÿÿÿ   }   this.PushService._receivedUpdate/compareRecordVersionAndNotifyÁ                 È       ¹   	   >                                      aPushRecord é  ¡  ±            ;    â    =   : QT       ;    â    =      : QT  5   @D   QT  5         Y;    â    =   : QT     0   QA¸   
T  : QA¸   
T  : ¸   
@    : Q   ;    â    =      : QÓ
ÙÐÎTÓÎÏÕ ½É ÅÙ:    debug?   compareRecordVersionAndNotify()3   No record for channel ID    version]   Version changed, notifying app and updating DB   _notifyApp#   _updatePushRecord	   then?   No significant version change:    ÿÿÿÿ      this.PushService._receivedUpdate/compareRecordVersionAndNotify/<Á                        ¹                                             e è  .  À            ;    â    =   : QÓ$    debug5   Error updating push record   ÿÿÿÿ   o   this.PushService._receivedUpdate/recoverNoSuchChannelIDÁ                        ¹                                          )   aChannelIDFromServer Ì  7  Ê            ;    â    =   T  =   : QÝF    debug1   Could not get channelID     from DB   ÿÿÿÿ   O   this.PushService._notifyAllAppsRegisterÁ                ]       ¹      )                                    )   wakeupRegisteredApps   deferredk   ú¤  Õ                W   Q;    â    =   : Q;   ¸   
:     QA5   ¸   
V      5   : Q   5    ÚÊ ÕÓÌÉ ôßË    debug/   notifyAllAppsRegister()   Promise   defer   _db!   getAllChannelIDs   reject   promise   ÿÿÿÿ   )   wakeupRegisteredApps                    ¹      Z                                    records   wakeupTable   messenger ,¡  ¤  Ú      
      Y      Q>  Q    qm  QT  V  7  QV  5    V   q    V   V  5    Z   9QV   V  5    7¸   
V  5   : QÈV  #?W  QQãV  T  Ù   ÿÿÿÈ;   5   ¸   
;   5   :    QV   KÆ      Q   %m   V      7¸   	
   : QãQLMÿÿÿÛQNÈÇ    ¸   

:  Q
Ê&qc   ÍÏ
Óã Þ*ÎÿÿÿìÕ æ
ÑÊ æÉÓ0*Ëè ñÕ    manifestURL	   push   pageURL   length   CcM   @mozilla.org/system-message-internal;1   getService   Ci3   nsISystemMessagesInternal   forEach   resolve    ÿÿÿÿ         i                     record        ÿÿÿÿ         manifestURL            }   this.PushService._notifyAllAppsRegister/wakeupRegisteredApps/<Á                 O       ¹                                             pageURL £  f¤  ê      
        ¸    
=   Y   ;   5   ¸   
T  @@: ;   5   ¸   
   @@: : Q
ÖÖ Ø  ë
M    sendMessage   push-register   Services   io   newURI   Ó   +                       ÿÿÿÿ      \          È   8   ÿÿÿÿ   ÿÿÿÿ   7   this.PushService._notifyAppÁ                     ¹      R                                       aPushRecord   pageURI   manifestURI   message   messenger ¥  ô§  ù            T   D   QT  5     D   QT  5       ;   â   =   : Q;   â   =   T  5    =   T  5   : Q;   5   ¸   
T  5    @@:    Q;   5   ¸   
T  5   @@:   QY   T  5   	]   	T  5   
]   
  Q;   5   ¸   
;   5   :   QV  ¸   
=   V  V   V  : QÊÏÉÓØÏ ÿÛ
ÈÛÈÍÒÑÊ Èà=    pageURL   manifestURL   debugu   notifyApp() something is undefined.  Dropping notification   notifyApp()         Services   io   newURI   pushEndpoint   version   CcM   @mozilla.org/system-message-internal;1   getService   Ci3   nsISystemMessagesInternal   sendMessage	   push   ÿÿÿÿ   E   this.PushService._updatePushRecordÁ               X       ¹   	                                          aPushRecord   deferred ¨  Ë¨        	      ;    â    =   : Q;   ¸   
:     QA5   ¸   
T  V   5   V   5   : QV   5   ÓÌÈæÊ    debug%   updatePushRecord()   Promise   defer   _db   put   resolve   reject   promise   ÿÿÿÿ   G   this.PushService._dropRegistrationsÁ                 B       ¹                                 	             deferredì¨  k©              ;    ¸   
:     QA5   ¸   
V   5   V   5   : QV   5   ÌÈãÊ    Promise   defer   _db	   drop   resolve   reject   promise   ÿÿÿÿ   ?   this.PushService.receiveMessageÁ               ¾       ¹      -                                       aMessage   mm	   json ©  «        
      ;    â    =   T  5   : Q;   ¸   
T  5   : ×ÿ   #;    â    =   T  5   : QT  5   ¸   
;   5   	:    QT  5   
  QAT  5   ¸   
=   Ù   : ¸   
:  Á
V  V   : QÜÔÜÙÈÍÛ×ÿÿÿûB    debug%   receiveMessage(): 	   name/   kCHILD_PROCESS_MESSAGES   indexOf7   Invalid message from child    target   QueryInterface   Ci!   nsIMessageSender	   data   slice   Push:   length   toLowerCase   ÿÿÿÿ   3   this.PushService.registerÁ               Ï       ¹      R                                D      aPageRecord   aMessageManager   uuidGenerator   channelID ¹«  Ö®  *      
      ;    â    =   : Q;   5   ¸   
;   5   :    QV   ¸   
:  ¸   
:  ¸   	
?×ÿ:   QA¸   

=   Y   V  ]   : ¸   
A5   ¸   
AT  V  : A5   ¸   
AT     : : ¸   
       : QÓÑÊ -ÈËßÒÉÿÿÿáÊÕÖ 2Ê 8 2 =	    debug   register()   Cc;   @mozilla.org/uuid-generator;1   getService   Ci!   nsIUUIDGenerator   generateUUID   toString   slice   _sendRequest   register   channelID	   then%   _onRegisterSuccess	   bind!   _onRegisterError   ÿÿÿÿ   7   this.PushService.register/<Á                        ¹                                             message ö­  [®  8               ¸    
=   T  : Q
ØE !   sendAsyncMessage/   PushService:Register:OK   ÿÿÿÿ   7   this.PushService.register/<Á                        ¹                                             message m®  Ð®  ;               ¸    
=   T  : Q
ØE !   sendAsyncMessage/   PushService:Register:KO   ÿÿÿÿ   G   this.PushService._onRegisterSuccessÁ               Î      ¹                              0      D      aPageRecord%   generatedChannelID	   data   deferred   message   record  ¯  uµ  D            ;    â    =   : Q;   ¸   
:     QY   T  5   ]      Q   5   Å=   I   9;    â    =      : Q   =   	0   Q   p   V   5   T    C;    â    =   
   5   =   T : Q   =   0   Q   p;   5   ¸   
   5   @@: Q   W   Qv   Q;    â    =      5   : Q   =      5   0   Q   pÈ    Y      5   ]      5   ]   T  5   ]   T  5   ]   @]      QA¸   
   : ¸   
      : Q   5   ÓÌÉÓÑ4ÙÐËÎÚÊ OÐ"æÌÞÛÍÏÏÍÍÌ× f tË    debug)   _onRegisterSuccess()   Promise   defer   requestID   channelID   string%   Invalid channelID    error5   Invalid channelID receivedQ   Server replied with different channelID 1    than what UA generated g   Server sent 200 status code but different channelID   Services   io   newURI   pushEndpoint+   Invalid pushEndpoint    pageURL   manifestURL   version#   _updatePushRecord	   then   promise    ÿÿÿÿ          e       ÿÿÿÿ   K   this.PushService._onRegisterSuccess/<Á                   :       ¹                                           ´  }´  h                     5    0    Q      ¸   
      : Q
Ú
ß    pushEndpoint   resolve   ÿÿÿÿ   K   this.PushService._onRegisterSuccess/<Á                 ]       ¹                                 	            error ´  Jµ  l            A¸    
=   Y         5   ]   : Q      T  0   Q      ¸   
      : Q
ÒÔÿÿÿæ
Ó
ß    _send   unregister   channelID   error   reject     Ü   &         K   ÿÿÿÿ   ÿÿÿÿ   C   this.PushService._onRegisterErrorÁ                 U       ¹                                             aPageRecord   aMessageManager   reply   2¶  ·  {            ;    â    =   : QT 5       ;    â    =   : QY   T  5   ]   T 5   ]   pÓÉÓÍ"Î    debug%   _onRegisterError()   errorG   Called without valid error message!   requestID   ÿÿÿÿ   7   this.PushService.unregisterÁ                O       ¹      1                          
      D      aPageRecord   aMessageManager	   failg¼  Á              ;    â    =   : Q       QA5   ¸   
   5      ¸   
A:    : QÓË ¤ã ½ ¤9 ½ ¤ ½    debug   unregister()   _db#   getByPushEndpoint   pushEndpoint	   bind   ÿÿÿÿ   A   this.PushService.unregister/failÁ               R       ¹                                             error   message »¼  ½              ;    â    =   T  : QY      5   ]   T  ]      Q   ¸   
=   V   : Q×
Ï"ÍÙG    debug5   unregister() fail() error    requestID   error!   sendAsyncMessage3   PushService:Unregister:KO   ÿÿÿÿ   ;   this.PushService.unregister/<Á                 °       ¹      Q                                D      recordÔ½  uÁ  ¤               ;    H       =   : Q   5     5   I   ?  ¸   
=   Y     5   ]     5   ]   : QA5   ¸   
   5   	    ¸   

A:     : QËÔÕÖ
Ï
Ï ­ã ¼ ´( ¼Ê ´ ¼    undefined   NotFoundError   manifestURL!   sendAsyncMessage3   PushService:Unregister:OK   requestID   pushEndpoint   _db   delete   channelID	   bind   ÿÿÿÿ   ?   this.PushService.unregister/</<Á                   ^       ¹      '                                     ó¿  \Á  ´            A¸    
=   Y      5   ]   : Q  ¸   
=   Y     5   ]     5   ]   : QÒÏÿÿÿæÖ
Ï
Ï ¸    _send   unregister   channelID!   sendAsyncMessage3   PushService:Unregister:OK   requestID   pushEndpoint   ÿÿÿÿ   =   this.PushService.registrationsÁ                        ¹      (                                       aPageRecord   aMessageManager  âÁ  xÃ  Ã      	      ;    â    =   : QT  5      QA5   ¸   
T  5   A5   ¸   
AT  T : A5   ¸   
AT  T : : Q   A¸   
T  T : QÓÈLÕÔÔ ÇÉÒ9    debug   registrations()   manifestURL   _db'   getAllByManifestURL/   _onRegistrationsSuccess	   bind+   _onRegistrationsError   ÿÿÿÿ   Q   this.PushService._onRegistrationsSuccessÁ                M       ¹      '                                      aPageRecord   aMessageManager   pushRecords   registrations   Ã  ÁÅ  Ð            Z      QT ¸    
    : QT ¸   
=   Y   T  5   ]      ]   : QÊÓ ÛÔÍÊ Û    forEach!   sendAsyncMessage9   PushService:Registrations:OK   requestID   registrations   ÿÿÿÿ   U   this.PushService._onRegistrationsSuccess/<Á                 S       ¹      #                                       pushRecord PÄ  !Å  Ô                  ¸    
Y   Y   =   ]   =   ]   ]   T  5   ]   T  5   ]   : QÖ
ÊÏ
Í
Í Õ	 	   push   r   pushEndpoint   version!   __exposedProps__   ÿÿÿÿ   M   this.PushService._onRegistrationsErrorÁ                 0       ¹                                             aPageRecord   aMessageManager  åÅ  Æ  á            T ¸    
=   Y   T  5   ]   =   ]   : QÔÍÊ â !   sendAsyncMessage9   PushService:Registrations:KO   requestID   Database error   error   ÿÿÿÿ   7   this.PushService._wsOnStartÁ                      ¹      L                                      context!   sendHelloMessage	   data ÚÆ  4Ì  é                   Q;    â    =   : QA5   ;      ';    â    =   A5   =   : QA>0   QY   =   ]      QA5   	      A5   	0   
QA¸   
A   : Q ûË éÓÌÏÍ ìÈÐÑ Ò     debug   wsOnStart()   _currentState5   STATE_WAITING_FOR_WS_STARTc   NOT in STATE_WAITING_FOR_WS_START. Current state    . Skipping   _retryFailCount   hello   messageType   _UAID	   uaid!   _getNetworkState   ÿÿÿÿ   !   sendHelloMessage                 [       ¹                                            ids ´È  ÃÉ  û                  T  5      T  ¸   
    :    	Z   0    QA¸   
      : QA;   0   QÒÏÒÖÌ-    channelIDs   map   _wsSendMessage   _currentState/   STATE_WAITING_FOR_HELLO   ÿÿÿÿ   {   this.PushService._wsOnStart/sendHelloMessage/data.channelIDs<Á                 
       ¹                                             el DÉ  aÉ  þ            T  5    2É    channelID   ÿÿÿÿ   ;   this.PushService._wsOnStart/<Å                 Å       ¹      @                                       networkState ßÉ  .Ì              T  5       A¸   
:  Q      Y   T  5    ]    A5   E   QA5   5   ]   0   Q      Y   T  5   ]   T  5   ]   T  5   ]   0   QA5   	¸   

   ¸   
A:    ¸   
A: : QÈÌÏ
Í
âÏ
Í
Í
ÓÚÍ  =    ip'   _listenForUDPWakeup   wakeup_hostport   _udpServer	   port   mobilenetwork   mcc   mnc   netid   _db!   getAllChannelIDs	   bind   ÿÿÿÿ   5   this.PushService._wsOnStopÁ                 w       ¹   	                                          context   statusCode  KÍ  Ï  !            ;    â    =   : QT ;   5   E   !QT ;   5   E   QA5       (;    â    =   T : QA¸   
:  QA¸   
:  QÓÔÛ×Ì .Ì    debug   wsOnStop()   Cr   NS_OK+   NS_BASE_STREAM_CLOSED'   _willBeWokenUpByUDP   Socket error -   _reconnectAfterBackoff   _shutdownWS   ÿÿÿÿ   M   this.PushService._wsOnMessageAvailableÁ              *      ¹       ®                        ,            context   message   reply   doNotHandle   handlers   handlerName   handler  «Ï  P×  1            ;    â    =   T : QAB0   Q;      Q;   ¸   
T : W   Q   3  Qv  Q;    â    =   T : QÈÈ    A5   ;      ,;    â    =   	: QA>0   
QAY   0   QB  QT =   HD   @QV   5   ;   HD   +QV   5   =   HD   QV   5   Å=      +;    â    =   : QA¸   
B: QCW  QA¸   
;   ¸   
=   : : QV     f     QV   5   >7¸   
:  V   5   ¸   
?: ¸   
:    QV  ¸   
V  : ×ÿ   /;    â    =   V  =   V   5   : Q=   V  =     QAV  7Å=   I   ;    â    =   V  : QAV  Á
V   : Q×ÈÊÏÍÌ×ËÌÓÈÌÏÕÕ	ÐÓÍ QÙÿÿÿñ ZÊÒÑÓÏÚÊ bÕÍØÐ    debug/   wsOnMessageAvailable()    _waitingForPong   undefined	   JSON   parse9   Parsing JSON failed. text :    _currentState/   STATE_WAITING_FOR_HELLOi   Reseting _retryFailCount and _pingIntervalRetryTimes   _retryFailCount/   _pingIntervalRetryTimes   {}   messageType	   ping   string   Pong received-   _calculateAdaptivePing   _setAlarm   prefs   get   pingInterval   toUpperCase   slice   toLowerCase   indexOf/   No whitelisted handler    . messageType:    _handle   Reply   functionS   Handler whitelisted but not implemented!     ÿÿÿÿ         e                         Hello      Register      Notification                    *          G   '   ÿÿÿÿÿÿÿÿl             ÿÿÿÿ   C   this.PushService._wsOnServerCloseÁ                 K       ¹                                             context   aStatusCode   aReason   ëØ  6Ú  z            ;    â    =   T =   T : QT ;       ;    â    =   : QAC0   QáÉÓÈ     debug%   wsOnServerClose()     5   kUDP_WAKEUP_WS_STATUS_CODEK   Server closed with promise to wake up'   _willBeWokenUpByUDP   ÿÿÿÿ   I   this.PushService._listenForUDPWakeupÁ                   Ù       ¹      C                                     ±Ú  ÉÜ              ;    â    =   : QA5      ;    â    =   : Q;   ¸   
=   :     ;    â    =   : QA;   5   	¸   

;   5   : 0   QA5   ¸   
×ÿB: QA5   ¸   
A: Q;    â    =   A5   5   : QA5   5   ÓÓÑÓÒÊ ÉÔÒßÌ    debug)   listenForUDPWakeup()   _udpServer5   UDP Server already running   prefs   get#   udp.wakeupEnabled)   UDP support disabled   CcC   @mozilla.org/network/udp-socket;1   createInstance   Ci   nsIUDPSocket	   init   asyncListenA   listenForUDPWakeup listening on 	   port   ÿÿÿÿ   C   this.PushService.onPacketReceivedÁ                 ,       ¹                                             aServ   aMessage  sÝ  åÝ  ¢            ;    â    =   A5   5   : QA¸   
:  QßÌ    debug7   Recv UDP datagram on port:    _udpServer	   port   _beginWSSetup   ÿÿÿÿ   A   this.PushService.onStopListeningÁ                 0       ¹                                             aServ   aStatus  ·Þ  Iß  ­            ;    â    =   T : QA;   0   QA¸   
:  Q×ÌÌ    debugQ   UDP Server socket was shutdown. Status:    _udpServer   undefined   _beginWSSetup   ÿÿÿÿ   O   this.PushService._getNetworkInformationÁ                  î      ¹                              +          Çß  Yå  ¶            ;    â    =   : Q   Q;   ¸   
=   :     ';    â    =   : Q;   =   R p;   5   	¸   

;   5   :    QV   5   E   $QV   5   5   ;   5   5      ç  Q  Q  Q;   5   ¸   

;   5   :   Q>  QV  ¸   
V  :   QV       Q  Q;    â    =   : QY     QY     QV   5   ¸   
V  V  : QY   V  5   ]   V  5   ]   V  5   >7]   ÈÈÈÈÈÈ   0   Qv   Q;    â    =   V   : QÈ    ;    â    =   : QY   >]   >]   ;   ]   Ó {
ÑÓË
ÛÈí×ÛÈ ÇÏ
ÈÑ
ÓÊÊ
Ü
ÎÎÝÌßÓË    debug/   getNetworkInformation()   prefs   get#   udp.wakeupEnabledk   UDP support disabled, we do not send any carrier info   Error   UDP disabled   Cc=   @mozilla.org/network/manager;1   getService   Ci#   nsINetworkManager   active	   type'   nsINetworkInterface'   NETWORK_TYPE_MOBILEC   @mozilla.org/ril/content-helper;1   nsIIccProvider   getIccInfo-   Running on mobile data   getAddresses   mcc   mnc   value   ip[   Error recovering mobile network information:    Running on wifi   undefined    ÿÿÿÿ          nm                     icc       clientId       iccInfo                    ips       prefixLengths        ÿÿÿÿ          e                     y  ÿÿÿÿ   ®   ß                                         ÿÿÿÿ             $   ÿÿÿÿ   ÿÿÿÿ   C   this.PushService._getNetworkStateÁ                ~       ¹      .                                D      callback   networkInfoKæ  {è  è            ;    â    =   : Q   '=   I   ;   =   R pA¸   
:     Q   5       A¸   
       : Q         : QÓÌËÈÉÊÛ ûÏ    debug#   getNetworkState()   function   ErrorS   No callback method. Aborting push agent !-   _getNetworkInformation   ip'   _getMobileNetworkId   ÿÿÿÿ   G   this.PushService._getNetworkState/<Á                 \       ¹      '                           
            netid rç  Eè  ò            ;    â    =   T  : Q   Y      5   ]      5   ]      5   ]   T  ]   : Q×Ë
Ï
Ï
Ï
È ô ù    debug%   Recovered netID =    mcc   mnc   ip   netid   ÿÿÿÿ   a   this.PushService._getNetworkStateChangeEventNameÁ                  G       ¹                                        õè  Âé              ;    5   ¸   
;   5   : Q=          Qv   Q=   ÈÈ    &ßËÌÏ    Cc=   @mozilla.org/network/manager;1   getService   Ci#   nsINetworkManager-   network-active-changed=   network:offline-status-changed    ÿÿÿÿ          e            *       ,      ÿÿÿÿÿÿÿÿ>             ÿÿÿÿ   I   this.PushService._getMobileNetworkIdÁ                    ¹   
   1                                D      networkInfo   callback#   queryDNSForDomain   netidAddress Òê  
ï                  W   Q   '=    I   ;   â   =   : Q=   =   T  5   ¸   
×ý: =   =   T  5   ¸   
×ý: =   	  QV   V     : Q Ê Ì ,ÓÜÝÏÒ*    function   debug   [_getMobileNetworkId:queryDNSForDomain] Getting mobile network ID   wakeup.mnc   00   mnc   slice	   .mcc   mcc!   .3gppnetwork.org   ÿÿÿÿ   #   queryDNSForDomain               S       ¹      ,                                      domain!   netIDDNSListener Ië  òí        
      ;    â    =   T  : QY       ]      Q;   ¸   
T  >V   ;   5   : QZ   Ï 
Ï 'ÔÊ '
    debugs   [_getMobileNetworkId:queryDNSForDomain] Querying DNS for !   onLookupComplete   gDNSService   asyncResolve   threadManager   currentThread   ÿÿÿÿ   ±   this.PushService._getMobileNetworkId/queryDNSForDomain/netIDDNSListener.onLookupCompleteÁ                k       ¹      (                         
            aRequest   aRecord   aStatus   ðë  pí              T    I   QT ¸    
:     Q;   â   =   V   : Q   V   : QÈ   #;   â   =   : Q   @: QDËÊÈÏ ÔÓË '   getNextAddrAsString   debugk   [_getMobileNetworkId:queryDNSForDomain] NetID found: o   [_getMobileNetworkId:queryDNSForDomain] NetID not found    ÿÿÿÿ          netid        	   >   ÿÿÿÿ