çżsš                       š                                            resource://gre/modules/devtools/transport/transport.js     j`                    ¸    
A   l Q	Ě	 í 	   call   ˙˙˙˙                    É       š      (                                      factory ł  h  	       	      A5    E   !Q;    5   ¸   
=   : >   #T  ¸   
A;   ;   l Q   A5      T  ¸   
A;   Al Q   ^  Q   Q;   5      QV   ¸   	
=   
Y   : 5     QQT  ¸   
AV  5   Al QČâŢÚĚĎŐĎÚ    module   id   indexOf   transport	   call   require   exports   Components   utils   importU   resource://gre/modules/devtools/Loader.jsm   devtools    ˙˙˙˙          Cu      devtools       q   W   ˙˙˙˙   ˙˙˙˙                       š   4         $                               require   exports#   DebuggerTransport-   LocalDebuggerTransport-   ChildDebuggerTransport   Cc   Ci   Cr   Cu   CC   Services   DevToolsUtils   dumpn   dumpv   StreamUtils   Packet   JSONPacket   BulkPacket   promise   EventEmitter#   PACKET_HEADER_MAX  ~  g`                   W   Q   W  Q   W  QT  =    : 5      Q5      Q5      Q5      Q5      QQT  =   :   QT  =   :    Q   5      Q5   	   	QQT  =   
:    
QT  =   : 5      Q5      Q5      QQT  =   :    QT  =   :    Q   ¸   
A=   A   : Q   ¸   
A=   A   : QX Č   QV   Y      ]      ]      ]      a      	]      
]      ]      ¸   
   =   : ]      ]      ]       ]   !   ]   "   ]   #   ]   $   ¸   
   =   %: ]   &   ]   '   ]   (   ]   )   ]   *   ]   +   ]   ,0   QT V   0   -QV  Y      ]      ]      ]      ]   !   ]   .0   QT V  0   /QV  Y   V  ]   0@]   1   ]   !    ]      !]   2   "]      #]   0   QT V  0   3QgĘ Ę ÁĘÉ˙ÉČÉÉŢÉÉÉčÉ
ÉÉÉ#Ü'Ü,ÉgÉ  Ę  şĘ  ĘĘ  áĘ  çĘ  üĘ Ę Ń  Č  Ę *Ę 6Ę ?Ę KĘ RĘ \Ń e ]Č qĘ ŞĘ ÄĘ ŇĘ âĘ đĐ úÍ  É Ę @Ę Ę Ę ˘Đ ąÍ Á ÍÉÉĘĘ ÜĘ áĘ ćĐ ëÍ8    chrome   Cc   Ci   Cr   Cu   CC   Services=   devtools/toolkit/DevToolsUtils   dumpn   dumpvO   devtools/toolkit/transport/stream-utilsE   devtools/toolkit/transport/packets   Packet   JSONPacket   BulkPacket   promise=   devtools/toolkit/event-emitter!   defineLazyGetter	   Pipe+   ScriptableInputStream   prototype	   send   startBulkSend   close!   _currentOutgoing   _flushOutgoing   pauseOutgoing   resumeOutgoing   makeInfallible_   DebuggerTransport.prototype.onOutputStreamReady'   onOutputStreamReady-   _finishCurrentOutgoing'   _destroyAllOutgoing   ready!   _waitForIncoming   pauseIncoming   resumeIncoming]   DebuggerTransport.prototype.onInputStreamReady%   onInputStreamReady!   _processIncoming   _readHeader   _flushIncoming%   _onJSONObjectReady!   _onBulkReadReady!   _destroyIncoming#   DebuggerTransport   _deepFreeze-   LocalDebuggerTransport   constructor   hooks   receiveMessage-   ChildDebuggerTransport   ˙˙˙˙   #   DebuggerTransport                        š      @                                       input   output  ˙  T  g                   ¸    
A: QAT  0   QA;   T  R 0   QAT 0   QA=   0   QA@0   QAZ   0   QA@0   	QAB0   
QAC0   QAC0   QAA5   ¸   
A: 0   QÖjĘĘÉĘpĚrČtËvČČyČČ|ĎÉ    decorate   _input!   _scriptableInput+   ScriptableInputStream   _output   _incomingHeader      _incoming   _outgoing   hooks   active!   _incomingEnabled!   _outgoingEnabled   close	   bind   ˙˙˙˙   -   LocalDebuggerTransport                 n       š      $                           	            other jF  ÖG                    ¸    
A: QAT  0   QA@0   QAA5      A5   5      Y   >]   0   QAA5   ¸   
A: 0   QÖĘČ Ú3ĚĎÉ    decorate   other   hooks   _serial   count   close	   bind   ˙˙˙˙   -   ChildDebuggerTransport                 P       š                                             sender   prefix  G\  í\  Á                  ¸    
A: QAT  ¸   
      5   : 0   QA=   T =   0   QÖÚÉÖ2    decorate   _sender   QueryInterface!   nsIMessageSender   _messageName   debug:   :packet   ˙˙˙˙                              š      	                                       Ú  #                   =    =   =   : Ú- '   @mozilla.org/pipe;1   nsIPipe	   init   ˙˙˙˙                              š                                               '                   =    =   =   : ĐĘ(	0 I   @mozilla.org/scriptableinputstream;11   nsIScriptableInputStream	   init   ˙˙˙˙   A   DebuggerTransport.prototype.sendÁ               W       š                                 	            object   packet ¸  e               A¸    
=   T  : Q      AR    QV   T  0   QA5   ¸   
V   : QA¸   
:  QÔĚ	ČÍŐĚ 	   emit	   send   object   _outgoing	   push   _flushOutgoing   ˙˙˙˙   S   DebuggerTransport.prototype.startBulkSendÁ               a       š                                 
            header   packet ä  Ă   ş             A¸    
=   T  : Q      AR    QV   T  0   QA5   ¸   
V   : QA¸   
:  QV   5   ÔĚ	ČÍŐĚĘ$ 	   emit   startBulkSend   header   _outgoing	   push   _flushOutgoing+   streamReadyForWriting   ˙˙˙˙   C   DebuggerTransport.prototype.closeÁ                 Ü       š      ?                                       reason Ë!  #  Ę             A¸    
=   T  : QAB0   QA5   ¸   
:  QA5   ¸   
:  QA5   ¸   
:  QA¸   
:  QA¸   
:  QA5   	   !A5   	¸   
T  : QA@0   	QT     6      =   
      ¸   
T  : : Q         =   : QÔČŃŃŃĚĚÔČ1ä˙˙˙ăÉÔ 	   emit   onClosed   active   _input   close!   _scriptableInput   _output!   _destroyIncoming'   _destroyAllOutgoing   hooks%   Transport closed:    safeErrorString#   Transport closed.   ˙˙˙˙   Y   DebuggerTransport.prototype._currentOutgoingÁ                   
       š                                           ö#  $  á             A5    >7É    _outgoing   ˙˙˙˙   U   DebuggerTransport.prototype._flushOutgoingÁ                        š      %                                        threadManagerÔ$  &  ç       
      A5     D   QA5   Ů   >H   A5   5      A¸   
:  QA5   Ů   >   @      5   ¸   
:  W   QA5   ¸   	
A>>V   5   
: QÚËĚÍ
ÖČÝ@ !   _outgoingEnabled   _outgoing   length!   _currentOutgoing	   done-   _finishCurrentOutgoing;   @mozilla.org/thread-manager;1   getService   _output   asyncWait   currentThread   ˙˙˙˙   S   DebuggerTransport.prototype.pauseOutgoingÁ                   	       š                                            \'  '  ü             AB0    QČ !   _outgoingEnabled   ˙˙˙˙   U   DebuggerTransport.prototype.resumeOutgoingÁ                          š                                           ő'  :(              AC0    QA¸   
:  QČĚ !   _outgoingEnabled   _flushOutgoing   ˙˙˙˙   a   DebuggerTransport.prototype.onOutputStreamReady<Á                       š   	   $                                    stream Z)  }*              A5     D   QA5   Ů   >H   A5   ¸   
T  : Q   Z   Qv   QV   5         5      Č   %QA¸   
V   5   : QČČ   vp A¸   
:  QÚŮóŐÍĚ !   _outgoingEnabled   _outgoing   length!   _currentOutgoing   write   result5   NS_BASE_STREAM_WOULD_BLOCK   close   _flushOutgoing    ˙˙˙˙          e         "          <   L   ˙˙˙˙˙˙˙˙h          ˙˙˙˙             ˙˙˙˙   e   DebuggerTransport.prototype._finishCurrentOutgoingÁ                   .       š                                           *+  +               A5       'A5    ¸   
:  QA5   ¸   
:  QŃŃ !   _currentOutgoing   destroy   _outgoing   shift   ˙˙˙˙   _   DebuggerTransport.prototype._destroyAllOutgoingÁ                  ^       š                               	          ň+  Z,  *            A5    - Á
:     Q    m5   W   QV   ¸   
:  QăQ¸   
:  5   ˙˙˙ŃČ AZ   0    QŐ84ŃĎ +Ë˙˙˙íŇË    _outgoing   value   destroy	   next	   done    ˙˙˙˙          packet          4          ?   ˙˙˙˙   ˙˙˙˙   C   DebuggerTransport.prototype.readyÁ                          š                                           8-  u-  6            AC0    QA¸   
:  QČĚ    active!   _waitForIncoming   ˙˙˙˙   Y   DebuggerTransport.prototype._waitForIncomingÁ                  N       š                               	          .  Ĺ.  ?      
      A5       G   Q      5   ¸   
:     QA5   ¸   
A>>V   5   : QČË
ÖČŢ @  !   _incomingEnabled;   @mozilla.org/thread-manager;1   getService   _input   asyncWait   currentThread    ˙˙˙˙          threadManager           A   ˙˙˙˙   ˙˙˙˙   S   DebuggerTransport.prototype.pauseIncomingÁ                   	       š                                            /  ž/  K            AB0    QČ !   _incomingEnabled   ˙˙˙˙   U   DebuggerTransport.prototype.resumeIncomingÁ                   !       š                                           ,0  0  R            AC0    QA¸   
:  QA¸   
:  QČĚĚ !   _incomingEnabled   _flushIncoming!   _waitForIncoming   ˙˙˙˙   _   DebuggerTransport.prototype.onInputStreamReady<Á                Ť       š      )                                    stream 01  D2  ]      	         măT  ¸    
:  E   -QA5   E   !QA¸   
T  T  ¸    
:  : ˙˙˙ĂA¸   
:  Q   V   Qv   QV   5         5      Č   !QA¸   
V   5   : QČ   vp T(B? _áŐ*˙˙˙âČŃóŢ    available!   _incomingEnabled!   _processIncoming!   _waitForIncoming   result5   NS_BASE_STREAM_WOULD_BLOCK   close    ˙˙˙˙          e            X          B       Z   H   ˙˙˙˙˙˙˙˙             ˙˙˙˙   Y   DebuggerTransport.prototype._processIncomingÁ                      š                              $            stream   count  4  Ő9  q      	         	   	=    T : QT        	   	=   : QBA5       s   	   	=   : QA¸   
T  :     BA      ¸   
A5   A: 0   QA5       ;   =   A5   R pA5   5   	    3   	   	=   
: QA5   ¸   
T  A5   : Q   f  Q   Qv   Q=   V   =   V   5   =     Q      V  : QA¸   
:  QBČČ    A5   5   	       	   	=   : QCA¸   
:  QCŘÔ  ş
ÔË
 ŮÉ
Ë  
ĚÔßŇ
ĺÓĚËĚÔĚ !   Data available: 3   Nothing to read, skipping   _incomingG   Creating a new packet from incoming   _readHeader   fromHeader   _incomingHeader   Error9   No packet types for header: 	   doneQ   Existing packet incomplete, keep reading	   read!   _scriptableInputA   Error reading incoming packet: (    -    stack   )   close=   Packet not done, wait for more   _flushIncoming    ˙˙˙˙          e       msg         8   ž       ř   Y   ˙˙˙˙˙˙˙˙O            ˙˙˙˙   O   DebuggerTransport.prototype._readHeaderÁ                 ó       š      9                                        amountToRead;  x=  Ş      	            A5    Ů      QA5       
   
¸   
A5   =   V   : 0    Q   	   	5          	   	=   A5    : QA5    ¸   
=   :    6   	   	5          	   	=   A5    : QCA5    Ů            ;   	=   
R pBŰŕ{ĎŰŇĎŰÖË    _incomingHeader   length   delimitedRead!   _scriptableInput   :   wantVerbose   Header read:    endsWithE   Found packet header successfully:    Error=   Failed to parse packet header!   ˙˙˙˙   U   DebuggerTransport.prototype._flushIncomingÁ                   O       š                                 	          í=  >  Ä            A5    5             5             =   A5    : QA¸   
:  QĚĎŰĚ    _incoming	   done   wantLogging   Got: !   _destroyIncoming   ˙˙˙˙   ]   DebuggerTransport.prototype._onJSONObjectReadyÁ                 5       š                                      D      object>?  }@  Ň                ¸    
    ¸   
A    =   : : Qč Ů Ó˙˙˙ć Ů<    executeSoon   makeInfalliblea   DebuggerTransport instance's this.hooks.onPacket   ˙˙˙˙   a   DebuggerTransport.prototype._onJSONObjectReady/<Ĺ                   8       š                                           ?  B@  Ó            A5       1A¸   
=      : QA5   ¸   
   : QÖÖ    active	   emit   onPacket   hooks   ˙˙˙˙   Y   DebuggerTransport.prototype._onBulkReadReadyÁ                <      š                                       D   	   argsĆA  C  â            ŕ   Q    ¸    
    ¸   
A    =   : : Qč é ă˙˙˙ć é@    executeSoon   makeInfalliblei   DebuggerTransport instance's this.hooks.onBulkPacket   ˙˙˙˙   ]   DebuggerTransport.prototype._onBulkReadReady/<Ĺ                   ´       š                                          B  ŐB  ă      
      A5       ­A¸   
Z  =   `   ?   - Á
:     m5   _ă,  ¸   
:  5   ˙˙˙ă Q)QA5   ¸   
Z   >   - Á
:     m5   _ă,  ¸   
:  5   ˙˙˙ă Q)QĚ
ĘŃ8"ďŇŃ8"ď	    active	   emit   onBulkPacket   value	   next	   done   hooks      "      7   "      ˙˙˙˙   Y   DebuggerTransport.prototype._destroyIncomingÁ                   1       š                                           ŰC  ]D  đ            A5       A5    ¸   
:  QA=   0   QA@0    QŃĚČ    _incoming   destroy   _incomingHeader      ˙˙˙˙   K   LocalDebuggerTransport.prototype.sendÁ                8      š      T                          $      D      packet   serial   othervH  L        	      A¸    
=      : QA5   5   #?
0   Q   Q    5         5      B    =      =   ;   â      5   : : Q   L   5   	   =    =      =   
;   â      5   	: : QA¸   
   : QA5      Q      9    ¸   
    ¸   
A    =   : : QÖßĎĘ=đ+˙˙˙ŐÉĘđ)˙˙˙×ŃĚč 3 * ˙˙˙ć 3I 	   emit	   send   _serial   count   wantLogging	   from   Packet     sent from    uneval   to    sent to    _deepFreeze   other   executeSoon   makeInfalliblew   LocalDebuggerTransport instance's this.other.hooks.onPacket   ˙˙˙˙   O   LocalDebuggerTransport.prototype.send/<Ĺ                          š                                           }J  ÍK  *                5       =    =      =   ;   ¸   
   @×: : Q   5      9   ¸   
=      : Q   5   ¸   
   : QĎ
đ+˙˙˙ŐĘ
Ú
Ú    wantLogging!   Received packet    : 	   JSON   stringify   hooks	   emit   onPacket   ˙˙˙˙   ]   LocalDebuggerTransport.prototype.startBulkSendÁ               8      š      g                                         actor	   type   length   serial	   pipe   sendDeferred §M  U  @            T  5       Q5      QŮ      QQA¸   
=   Y      ]       ]      ]   : QA5   5   #?
0   Q   Q    =      =      : QA5   	    ;   
CC>>@R    Q    ¸   
    ¸   
A    =   : : Q    ¸   
:     Q    ¸   
A   : Q   5   1˙˙˙éčŇĘĘĘ˙˙˙×ßćËÉč g L˙˙˙ć jŃÉŰ Ë    actor	   type   length	   emit   startBulkSend   _serial   count#   Sent bulk packet     for actor    other	   Pipe   executeSoon   makeInfallible   LocalDebuggerTransport instance's this.other.hooks.onBulkPacket   defer   promise   ˙˙˙˙   a   LocalDebuggerTransport.prototype.startBulkSend/<Ĺ                 ó       š      H                                       deferred   packetűN  âQ  L                =        : QA5   5           ¸   
:     QY     ]     ]     ]   A    ]       5   ]   	   ]   
   QA5   ¸   
=   V   : QA5   5   ¸   
V   : Q   5   ¸   
A   A5   : Qß
Ě
ŃÉ
ĘĘĘË ^ÔĎÚÚáB +   Received bulk packet    other   hooks   defer   actor	   type   length   copyTo   inputStream   stream	   done	   emit   onBulkPacket   promise	   then   close   ˙˙˙˙   }   LocalDebuggerTransport.prototype.startBulkSend/</packet.copyToĹ               O       š                                 	            output   copying 	P  ˝P  X              
  
¸    
    5   T    :    Q      ¸   
V   : QV   čČ
Ů
    copyStream   inputStream   resolve   ˙˙˙˙   e   LocalDebuggerTransport.prototype.startBulkSend/</<ĺ                          š                                           °Q  ÎQ  f                5    ¸   
:  "Ú    inputStream   close   ˙˙˙˙   a   LocalDebuggerTransport.prototype.startBulkSend/<Ĺ                         š   	   .                                       copyDeferredóR  ÝT  n                ¸    
:     Q    ¸   
Y   A    ]       5   ]      ]   : Q   5   ¸   
A   A5   : Q
ŃÉÖË xÔĘ q }áG    defer   resolve   copyFrom   outputStream   stream	   done   promise	   then   close   ˙˙˙˙   w   LocalDebuggerTransport.prototype.startBulkSend/</<.copyFromĹ               O       š                                 	            input   copying US  T  r              
  
¸    
T      5     :    Q      ¸   
V   : QV   čČ
Ů
    copyStream   outputStream   resolve   ˙˙˙˙   e   LocalDebuggerTransport.prototype.startBulkSend/</<ĺ                          š                                           ŞT  ÉT  }                5    ¸   
:  &Ú    outputStream   close   ˙˙˙˙   M   LocalDebuggerTransport.prototype.closeÁ                         š      .                                  ?U  ŇV              A¸    
=   : QA5      .   QA5      QA@0   QV   ¸   
:  QČA5      PA5   ¸   
:  Q   1   Qv   Q      ¸   
V   : QČ    A@0   QŃË
ËČĐÖĚŕČ 	   emit   close   other   hooks   onClosed   reportError    ˙˙˙˙          other        ˙˙˙˙          ex         Q             (   ˙˙˙˙   h   %   ˙˙˙˙   ˙˙˙˙   M   LocalDebuggerTransport.prototype.readyÁ                          š                                             0W  5W                   ˙˙˙˙   Y   LocalDebuggerTransport.prototype._deepFreezeÁ                       š      #                                    object W  Y  ˘            ;    ¸   
T  : QT  K   Q   _mW   T  ¸   
V   : E   )QT  '=   HE   Q;    ¸   
T  :     A¸   
;   V   7: QăQLM˙˙˙ĄQNČÓĚ0dĘ ŠÎ
ÉĐ
Ďă    Object   freeze   hasOwnProperty   object   isFrozen   _deepFreeze   o    ˙˙˙˙       	   prop       $   e          q   ˙˙˙˙   ˙˙˙˙   M   ChildDebuggerTransport.prototype.readyÁ                          š                                           ý]  C^  Ň            A5    ¸   
A5   A: QŘ9    _sender%   addMessageListener   _messageName   ˙˙˙˙   M   ChildDebuggerTransport.prototype.closeÁ                   ;       š                                 	          X^  ×^  Ö            A5    ¸   
A5   A: QA¸   
=   : QA5   ¸   
:  QŘŃŃ    _sender+   removeMessageListener   _messageName	   emit   onClosed   hooks   ˙˙˙˙   _   ChildDebuggerTransport.prototype.receiveMessageÁ               :       š                                             	   data ő^  C_  Ü            T  5    W   QQA¸   
=   V   : QA5   ¸   
V   : Q$˙˙˙řĎŐŐ 	   data	   emit   onPacket   hooks   ˙˙˙˙   K   ChildDebuggerTransport.prototype.sendÁ                 /       š                                             packet W_  Â_  á            A¸    
=   T  : QA5   ¸   
A5   T  : QÔÚ9 	   emit	   send   _sender!   sendAsyncMessage   _messageName   ˙˙˙˙   ]   ChildDebuggerTransport.prototype.startBulkSendÁ                          š      	                                     Ţ_  '`  ć            ;    =   R pË6    ErrorQ   Can't send bulk data to child processes.