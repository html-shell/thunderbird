çżsš                Ľ  7   š   K   Ľ                         9       0     resource://gre/modules/devtools/client/connection-manager.js     0.                                      	            ;   â   =   : 5        Q5      Q5      Q5      QQ;   â   =   : 5      Q5      QQ;   â   =   
:    	Q;   â   =   :    Q;   ¸   
=   : Q;   ¸   
=   : Q;   ¸   
=   : Q;   ¸   
A=   =   : Qn   Y   ;   R  ]       ]      ]      a      ]   1   Q;   	¸   
;   : Qn   ×˙1   Q;   Y   =   ]    =   !]   "=   #]   $=   %]   &=   ']   (0   Q;   Y   ;   5   5    ]    ;   5   5   "]   ";   5   5   $]   $;   5   5   &]   &;   5   5   (]   (=   *]   +=   ,]   -=   .]   /=   0]   1=   2]   30   )Q;   Y   =   5]   6   ]   7   a   8   a   9   b   9   	a   :   
b   :   a   ;   b   ;   a   <   b   <   a   =   ]   >   ]   ?   ]   @   ]   A;   ¸   B
   : ]   C   ]   D   a   E   ]   F   ]   G   ]   H   ]   I0   4Q;   J;   0   Q;   J;   0   Q	QqĘs		ĎôĎÜĎÉ˙˙˙ýĎÉ˙˙˙ýŐ1Ő<Ő<Ň%QĘČĘZĘbĘeĐQoŐ)qÍs}ĘĘĘĘĘĐĘÔÔÔÔÔĘĘĘĘĐĘĘĘ  ĄĘĘĘ  °ĘĘ  ťĘĘ  ĘĘĘ  ÜĘ  ěĘ  óĘ Ę Ę $ŃČ 0Ę GĘĘ SĘ kĘ qĐ vĐ.Đ     Cc   Ci   Cu   Cr   require   chrome   setTimeout   clearTimeout   sdk/timers   EventEmitter=   devtools/toolkit/event-emitter   DevToolsUtils=   devtools/toolkit/DevToolsUtils   importG   resource://gre/modules/Services.jsm]   resource://gre/modules/devtools/dbg-client.jsm]   resource://gre/modules/devtools/dbg-server.jsm-   defineLazyModuleGetter	   Task?   resource://gre/modules/Task.jsm#   ConnectionManager   Set   _connections!   createConnection#   destroyConnection   connections   getFreeTCPPort   decorate   lastID   Connection   Status   connected   CONNECTED   disconnected   DISCONNECTED   connecting   CONNECTING   disconnecting   DISCONNECTING   destroyed   DESTROYED   Events   timeout   TIMEOUT   status-changed   STATUS_CHANGED   host-changed   HOST_CHANGED   port-changed   PORT_CHANGED   new_log   NEW_LOG   prototype   	   logs   log   client	   host	   port   authentication   advertisement   socketSettings   resetOptions   disconnect   connect   destroy   async   _getTransport   _clientConnect   status   _setStatus   _onDisconnected   _onConnected   _onTimeout   exports   ˙˙˙˙   E   ConnectionManager.createConnectionÁ                c       š                                         	   host	   port   c  h  $  S             ;    T  T R    Q   ¸   
=   A    : QA5   ¸   
   : QA¸   
=      : Q   ĚÉŰÖÖ	    Connection	   once   destroy   _connections   add	   emit   new   ˙˙˙˙   I   ConnectionManager.createConnection/<ĺ                        š                                             event ľ  Ů  U             A¸    
      : !Ö #   destroyConnection   ˙˙˙˙   G   ConnectionManager.destroyConnectionÁ                 X       š                                             connection C    Z             A5    ¸   
T  :    DA5    ¸   
T  : QT  5   ;   5   5      T  ¸   
:  QĐÔŘÎ    _connections   has   delete   status   Connection   Status   DESTROYED   destroy   ˙˙˙˙   ;   ConnectionManager.connectionsÁ                  ]       š                                        +  `  b             Y      Q   QA5    - Á
:     m5   W   Q   V   ,  ÎăQ¸   
:  5   ˙˙˙Ó ČËŐ82ŢË˙˙˙űÓ    _connections   value	   next	   done    ˙˙˙˙          c       %   2          U   ˙˙˙˙   ˙˙˙˙   A   ConnectionManager.getFreeTCPPortÁ                 Z       š                                           	   serv	   port}  O  e             ;    5   ¸   
;   5   :    QV   ¸   
×˙C×˙: QV   5     QV   ¸   
:  QV  ŃĘfČhÔÎĎ    CcI   @mozilla.org/network/server-socket;1   createInstance   Ci   nsIServerSocket	   init	   port   close   ˙˙˙˙      Connection                 Ž       š      0                                    	   host	   port  ¤  ú  s             ;    ¸   
A: QAn   ;   #?1   0   QAT  0   QAT 0   QA¸   
;   5   5   	: QAA5   
¸   
A: 0   
QAA5   ¸   
A: 0   QAA5   ¸   
A: 0   QA¸   
:  QŃŮĘĘŰĎÉĎÉĎÉĚ    EventEmitter   decorate   uid   lastID	   host	   port   _setStatus   Connection   Status   DISCONNECTED   _onDisconnected	   bind   _onConnected   _onTimeout   resetOptions   ˙˙˙˙   1   Connection.prototype.logÁ               ő       š      O                                       str   d   hours   minutes   seconds   timestamp e  Č               ;    R     Q=   V   ¸   
:  ¸   
×ţ:   Q=   V   ¸   
:  ¸   
×ţ:   Q=   V   ¸   
:  ¸   
×ţ:   QZ  V  `   V  `  V  `  ¸   
=   : =     QV  T  U  QA5   	=   
T  0   	QA¸   
;   5   5   T  : QČĐÍ˙˙˙úČĐÍ˙˙˙úČĐÍ˙˙˙úČČČ	Ô˙˙˙ďÎĚĐxŢ* 	   Date   0   getHours   slice   getMinutes   getSeconds	   join   :   : 	   logs   
	   emit   Connection   Events   NEW_LOG   ˙˙˙˙   7   Connection.prototype.clientÁ                          š                                           ×  ÷  Ą             A5        _client   ˙˙˙˙   3   Connection.prototype.hostÁ                          š                                             "  Ľ             A5        _host   ˙˙˙˙   3   Connection.prototype.hostÁ                 C       š                                             value /  ź  Š             A5    E   QA5    T     AT  0    QA¸   
;   5   5   : QÖĘŰ*    _host	   emit   Connection   Events   HOST_CHANGED   ˙˙˙˙   3   Connection.prototype.portÁ                          š                                           É  ç  °             A5        _port   ˙˙˙˙   3   Connection.prototype.portÁ                 C       š                                             value ô    ´             A5    E   QA5    T     AT  0    QA¸   
;   5   5   : QÖĘŰ*    _port	   emit   Connection   Events   PORT_CHANGED   ˙˙˙˙   G   Connection.prototype.authenticationÁ                          š                                             Á  ť             A5        _authentication   ˙˙˙˙   G   Connection.prototype.authenticationÁ               N       š      "                                       value#   AuthenticatorType Ř  ű  ż             AT  0    QT      A@0   Q;   5   ¸   
T  :    QAV   5   R  0   QĘČÔČËÉ    _authentication   authenticator   DebuggerClient   Authenticators   get   Client   ˙˙˙˙   E   Connection.prototype.advertisementÁ                          š                                             9  Ę             A5        _advertisement   ˙˙˙˙   E   Connection.prototype.advertisementÁ                 -       š                                      D      advertisementO  ´  Î             A   0    Q      f    ¸   
A   : QĚÖ	    _advertisement   forEach                  	   host   	   port      encryption      authentication                  ˙˙˙˙   I   Connection.prototype.advertisement/<Ĺ                        š                                              key p  ¨  Ó             AT     T  79QĎ    ˙˙˙˙   G   Connection.prototype.socketSettingsÁ                 z       š      2                                        settings  Á  Ü       	      Y      QA5       ;   ¸   
V   A5    : Q;   ¸   
V   Y   A5   ]   A5   ]   A5   ]   A5   ]   : QV   ĘÚŐËËËË  ă  é    advertisement   Object   assign	   host	   port   encryption   authenticator   ˙˙˙˙      resetOptions                   !       š                                            Ň  W  ě             AB0    QAB0   QA@0   QA@0   QČČČČ    keepConnecting   encryption   authentication   advertisement   ˙˙˙˙   ?   Connection.prototype.disconnectÁ                 ą       š      !                                       force p  ö  ó             A5    ;   5   5      ;   â   A5   : QA5    ;   5   5   D   QA5    ;   5   5      MA¸   
=   	: QA¸   

;   5   5   : QA5      A5   ¸   
:  QÖÔÜÖŃŰŃ    status   Connection   Status   DESTROYED   clearTimeout   _timeoutID   CONNECTED   CONNECTING   log   disconnecting   _setStatus   DISCONNECTING   _client   close   ˙˙˙˙   9   Connection.prototype.connectÁ                      š      O                                     transport    ż"              A5    ;   5   5      A5       Ä   QAT  0   QA5      A¸   
=   : Q   *A¸   
=   A5   	=   
A5   : QA¸   
;   5   5   : Q;   5   ¸   
=   :    QA;   â   A5   V   : 0   QA¸   
:  QČ   4   Q=      QA¸   
V   : Q;   V   R pČÖ  żËĘÖĺŰ
ÖČŐÉŇ
ĘĐĘ     status   Connection   Status   DESTROYED   _client!   _customTransport   log;   connecting (custom transport)   connecting to 	   host   :	   port   _setStatus   CONNECTING   Services   prefs   getIntPrefA   devtools.debugger.remote-timeout   _timeoutID   setTimeout   _onTimeout   _clientConnect_   Can't connect. Client is not fully disconnected   Error    ˙˙˙˙          delay        ˙˙˙˙          msg        *   š   ˙˙˙˙   é   .   ˙˙˙˙   ˙˙˙˙   9   Connection.prototype.destroyÁ                   m       š                                           Ő"  Ě#              A¸    
=   : Q;   â   A5   : QAB0   QA5      A5   ¸   
:  QA@0   QA¸   
;   5   	5   
: QŃÔČŃČŰ-    log%   killing connection   clearTimeout   _timeoutID   keepConnecting   _client   close   _setStatus   Connection   Status   DESTROYED   ˙˙˙˙   G   Connection.prototype._getTransport<Á                 Ű       š   	   0                                      .generator   .genrval   settings   transportô#  %  $            É   Ę   ĐQA5       "Y   A5    ]   C]      ĚA5       +Y   ;   ¸   
:  ]   C]      ĚA5      QY   ;   ¸   
   : ]   B]      Ë  Đ   QY      ]   C]      ĚY   ]   C]      Ě - $ĚÝŃŐĚÖŢÜ !   _customTransport   value	   done	   host   DebuggerServer   connectPipe   socketSettings   DebuggerClient   socketConnect
         ˙˙˙˙   G   Connection.prototype._clientConnectÁ                   #       š                                          -%  (  0            A¸    
:  ¸   
A    A   : QŘ 8 1 D    _getTransport	   then   ˙˙˙˙   K   Connection.prototype._clientConnect/<Ĺ                 R       š                                 
            transport P%  >&  1            T      A;   T  R 0    QA5    ¸   
=   A5   : QA5    ¸   
A5   : Q
ĘÉÜ×(    _client   DebuggerClient%   addOneTimeListener   closed   _onDisconnected   connect   _onConnected   ˙˙˙˙   K   Connection.prototype._clientConnect/<Ĺ                 E       š                                 	            e @&  (  8            A5     D   QT  5   ;   5   I   ;   ¸   
T  : QA¸   
:  Q
ŕÓ CĚ    keepConnecting   result   Cr7   NS_ERROR_CONNECTION_REFUSED   console   error   _onDisconnected   ˙˙˙˙   7   Connection.prototype.statusÁ                          š                                           ­(  Í(  G            A5        _status   ˙˙˙˙   ?   Connection.prototype._setStatusÁ                 U       š                                 	            value ć(  )  K            A5    E   QA5    T     AT  0    QA¸   
T  : QA¸   
;   5   5   T  : QÖĘĎŢ3    _status	   emit   Connection   Events   STATUS_CHANGED   ˙˙˙˙   I   Connection.prototype._onDisconnectedÁ                   đ       š      H                                    ś)  ,  S            A@0    QA@0   QA5   ;   5   5   E   QA5      ;   â   A    ×d: Q;   â   A5   	: QA5   
x;   5   5   y   ;   5   5   y    z   1A¸   
=   : Q   ,A¸   
=   : Q   A¸   
=   : QA¸   
;   5   5   : QČČâÖÔnkĎpĎpĘ _ŃXŃXŃŰ0    _client!   _customTransport   _status   Connection   Status   CONNECTING   keepConnecting   setTimeout   clearTimeout   _timeoutID   status   CONNECTED   log3   disconnected (unexpected)9  connection error. Possible causes: USB port not connected, port not forwarded (adb forward), wrong host or port, remote debugging not enabled on the device.   disconnected   _setStatus   DISCONNECTED   ˙˙˙˙   M   Connection.prototype._onDisconnected/<ĺ                          š                                           W*  r*  X            A¸    
:  Ě    _clientConnect   ˙˙˙˙   C   Connection.prototype._onConnectedÁ                   A       š                                 
          ¨,   -  k            A¸    
=   : Q;   â   A5   : QA¸   
;   5   5   : QŃÔŰ-    log   connected   clearTimeout   _timeoutID   _setStatus   Connection   Status   CONNECTED   ˙˙˙˙   ?   Connection.prototype._onTimeoutÁ                   9       š                                 	          9-  Ű-  q            A¸    
=   : QA¸   
;   5   5   : QA¸   
:  QŃŰĚ    log   connection timeout. Possible causes: didn't click on 'accept' (prompt).	   emit   Connection   Events   TIMEOUT   disconnect