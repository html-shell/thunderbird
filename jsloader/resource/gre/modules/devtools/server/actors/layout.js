çżsš                ]  d   š   D         %                   D       0     resource://gre/modules/devtools/server/actors/layout.js     Z6                                	   
                           ,      5         ;   â   =   : 5        Q5      QQ;   ¸   
=   : Q;   â   =   :    Q;   5      Q5   	   	Q5   
   
Q5      QQ;   â   =   :    Q;   â   =   :    Q;   â   =   : 5      Q5      QQ;   â   =   :    Qn   ;   ;   ¸   
Y   =   ]   Y   Y   =   ]   ;   	â   	>=   : ]   ]   ]       ]      ]      ]   ;   â      Y   C]    : ]   !;   â      Y   C]    : ]   "   ]   #: 0   1   Q;   ;   ¸   %
;   Y      ]      ]   : 0   $Q;   &Y   B]   (   	]   !   
]   )   ]   "   ]   *   ]   +   ]   0   'Qn   ,B1   ,Q;      0   -Q;   ;   .0   .Q;   .;   ¸   /
;   &5   'Y   X,]   0   ]      ]   )   ]   *   ]   1   ]   2   ]   3   ]   4   ]   #: 0   'Qn   5;   6R  1   5Q;   ;   70   7Q;   ;   80   8Q;   9;   ¸   /
;   &5   'Y   ;   :¸   ;
Z  ;    5   <`   ;    5   =`  : ]   >   ]   ?   ]   @   ]   )   ]   *    ]   A   !]   B   "]      #]   C   $]   : 0   'Q'Ę  	  ŃĘ  ě	 [Ę	 t	 	ĎÜŐ3ĎÉ˙˙˙ýö'Ď	É˙˙˙ýĎÉ˙˙˙ýĎÜĎÉ˙˙˙ý'ŰĘ*3ĘĐ	Ň9ĘGĘKĘYĎ^Y	ČeĎjeČlĘ'(Î˙˙˙ç{ŰĘ  Ę{É    Ę  Ę   Ę  §Ę  ŽĘ  ľĘ  źĐ  Á  ŃĚĐ  ×  ě  řĐ6ŕ Č 
Ę Ę Ę "Ę 2Ę 7ĘĘ FĘ  ü"É S [ËÉ˙˙˙ý kĐ< t ĐD  ŕĐ'ÎÎ ČĘ Ę ˘ĘĘ ­Ę śĘ ĂĘĘĘ É Ő    Ci   Cu   require   chrome   importK   resource://gre/modules/XPCOMUtils.jsm   protocol1   devtools/server/protocol   method   Arg   RetVal   types   events   sdk/event/core   Heritage#   sdk/core/heritage   setTimeout   clearTimeout   sdk/timers   EventEmitter=   devtools/toolkit/event-emitter   ReflowActor   exports   ActorClass   reflow   typeName   reflows	   type   array:json   initialize   disconnect   destroy   oneway   start	   stop   _onReflow   ReflowFront   FrontClass   Observable   prototype   observing   _start   _stop   notifyCallback)   gIgnoreLayoutChanges-   setIgnoreLayoutChanges+   LayoutChangesObserver   extend)   EVENT_BATCHING_DELAY   _startEventLoop   _stopEventLoop   _setTimeout   _clearTimeout   observedWindows   Map1   getLayoutChangesObserver9   releaseLayoutChangesObserver   ReflowObserver   XPCOMUtils   generateQI#   nsIReflowObserver1   nsISupportsWeakReference   QueryInterface   _onWindowReady%   _onWindowDestroyed   _startListeners   _stopListeners'   reflowInterruptible   ˙˙˙˙   ?   exports.ReflowActor<.initializeÁ                 e       š                                          	   conn   tabActor  ­  Ą  9             ;    5   5   5   ¸   
AT  l QAT 0   QAA5   ¸   
A: 0   QA;   	â   	T : 0   QAB0   
Qă<ĘĎÉÎÉČ    protocol   Actor   prototype   initialize	   call   tabActor   _onReflow	   bind   observer1   getLayoutChangesObserver   _isStarted   ˙˙˙˙   ?   exports.ReflowActor<.disconnectÁ                          š                                           	  ś	  G             A¸    
:  QĚ    destroy   ˙˙˙˙   9   exports.ReflowActor<.destroyÁ                   Q       š   	                                        Ě	  |
  K             A¸    
:  Q;   â   A5   : QA@0   QA@0   Q;   5   5   5   ¸   
Al QĚÔČČQŕ, 	   stop9   releaseLayoutChangesObserver   tabActor   observer   protocol   Actor   prototype   destroy	   call   ˙˙˙˙   7   exports.ReflowActor<.start<Á                   1       š                                           D  ż  Y             A5        )A5   ¸   
=   A5   : QAC0    QÜČ    _isStarted   observer   on   reflows   _onReflow   ˙˙˙˙   5   exports.ReflowActor<.stop<Á                   0       š                                               e             A5       )A5   ¸   
=   A5   : QAB0    QÜČ    _isStarted   observer   off   reflows   _onReflow   ˙˙˙˙   =   exports.ReflowActor<._onReflowÁ                 %       š      	                                       event   reflows  ;    l             A5       ;   ¸   
A=   T : QŮ&    _isStarted   events	   emit   reflows   ˙˙˙˙   ?   exports.ReflowFront<.initializeÁ               N       š                                 	            client      reflowActor  Ę  P  |             T 5    W   QQ;   5   5   5   ¸   
AT  Y   V   ]   l QA¸   
A: Q.˙˙˙ńĎä8É˙˙˙ČÍ    reflowActor   protocol   Front   prototype   initialize	   call   actor   manage   ˙˙˙˙   9   exports.ReflowFront<.destroyÁ                   !       š                                           f                 ;    5   5   5   ¸   
Al Qŕ,    protocol   Front   prototype   destroy	   call   ˙˙˙˙      Observable                        š                                              tabActor   callback    Ď               AT  0    QAT 0   QĘĘ    tabActor   callback   ˙˙˙˙   5   Observable.prototype.startÁ                   !       š                                             ő               A5        A¸   
:  QAC0    QĚČ    observing   _start   ˙˙˙˙   7   Observable.prototype._startÁ                          š                                             
  =                     ˙˙˙˙   3   Observable.prototype.stopÁ                           š                                           p  Ę  §             A5       A¸   
:  QAB0    QĚČ    observing   _stop   ˙˙˙˙   5   Observable.prototype._stopÁ                          š                                             Ţ    Ž                  ˙˙˙˙   G   Observable.prototype.notifyCallbackÁ                3      š      	                                     	   args |  Ó  ľ             ŕU  QA5    E   &QA5   E   QA5   ¸   
@T  O Qé#     observing   callback   apply   ˙˙˙˙   9   Observable.prototype.destroyÁ                          š                                           +  x  ź             A¸    
:  QA@0   QA@0   QĚČČ 	   stop   callback   tabActor   ˙˙˙˙   =   exports.setIgnoreLayoutChangesÁ                +       š                                           ignore   syncReflowNode  s    Ň             T       QT 5       QČn   T  1   QËÎÎ    offsetWidth)   gIgnoreLayoutChanges    ˙˙˙˙          forceSyncReflow        	      ˙˙˙˙   ˙˙˙˙   +   LayoutChangesObserver                 r       š   
   &                                       tabActor 4  ë  ě             ;    ¸   
AT  l QAA5   ¸   
A: 0   QAA5   ¸   
A: 0   QA;   A5   A5   R 0   Q;   ¸   	
A: QÔĎÉ  ôĎÉÓÉŃ    Observable	   call   _startEventLoop	   bind   _onReflow   reflowObserver   ReflowObserver   tabActor   EventEmitter   decorate   ˙˙˙˙   Q   LayoutChangesObserver.prototype<.destroyÁ                   5       š                                           }  ď  
            A5    ¸   
:  QA@0   Q;   5   5   ¸   
Al QŃČŰ(    reflowObserver   destroy   reflows   Observable   prototype	   call   ˙˙˙˙   O   LayoutChangesObserver.prototype<._startÁ                   )       š                                              `               AZ   0    QA¸   
:  QA5   ¸   
:  QËĚŃ    reflows   _startEventLoop   reflowObserver   start   ˙˙˙˙   M   LayoutChangesObserver.prototype<._stopÁ                   )       š                                           t   Î               A¸    
:  QAZ   0   QA5   ¸   
:  QĚËŃ    _stopEventLoop   reflows   reflowObserver	   stop   ˙˙˙˙   a   LayoutChangesObserver.prototype<._startEventLoopÁ                   p       š   	   *                                     !  (#  "            A5    5       A5   E   QA5   Ů      'A¸   
=   A5   : QAZ   0   QAA¸   
A5   A5   : 0   QĚ××ËĎ .É!    tabActor   attached   reflows   length	   emit   eventLoopTimer   _setTimeout   _startEventLoop)   EVENT_BATCHING_DELAY   ˙˙˙˙   _   LayoutChangesObserver.prototype<._stopEventLoopÁ                          š                                           E#  z#  2            A¸    
A5   : QŇ(    _clearTimeout   eventLoopTimer   ˙˙˙˙   Y   LayoutChangesObserver.prototype<._setTimeoutÁ                        š      	                                       cb   ms  Ý#  
$  7            ;    â    T  T : Đ    setTimeout   ˙˙˙˙   ]   LayoutChangesObserver.prototype<._clearTimeoutÁ                        š      	                                       t %$  J$  :            ;    â    T  : Í    clearTimeout   ˙˙˙˙   U   LayoutChangesObserver.prototype<._onReflowÁ                 ;       š      '                                       start   end   isInterruptible   %  í&  F            ;       A5   ¸   
Y   T  ]   T ]   T ]   : Q MŇČČČ M )   gIgnoreLayoutChanges   reflows	   push   start   end   isInterruptible   ˙˙˙˙   1   getLayoutChangesObserver                      š      :                                       tabActor   observerData   obs ý'  ¤)  \            ;    ¸   
T  :    QV      'V   5   #?
0   QQV   5   ;   T  R   Q;    ¸   
T  Y   V  ]   ?]   : QV  ¸   
:  QV  ĎČŘĘÉČÔÉ d iĎ    observedWindows   get   refCounting   observer+   LayoutChangesObserver   set   start   ˙˙˙˙   9   releaseLayoutChangesObserver               r       š      $                                       tabActor   observerData +  ˙+  t            ;    ¸   
T  :    QV       V   5   #?
0   QQV   5       ,V   5   ¸   
:  Q;    ¸   
T  : QĎČŘĘÔÓ!    observedWindows   get   refCounting   observer   destroy   delete   ˙˙˙˙      ReflowObserver                        š   
                                          tabActor   callback  n-  ś.              ;    ¸   
AT  T l QAA5   ¸   
A: 0   Q;   ¸   
A5   =   A5   : QAA5   ¸   
A: 0   Q;   ¸   
A5   =   	A5   : Q×ĎÉáĎÉáF    Observable	   call   _onWindowReady	   bind   events   on   tabActor   window-ready%   _onWindowDestroyed!   window-destroyed   ˙˙˙˙   Q   ReflowObserver.prototype<._onWindowReadyÁ               3       š                                                window x/  Î/              T  5    W   QQA5      A¸   
Z  V   `   : Q%˙˙˙öĎĚČ˙˙˙ę    window   observing   _startListeners   ˙˙˙˙   Y   ReflowObserver.prototype<._onWindowDestroyedÁ               3       š                                                window ď/  D0              T  5    W   QQA5      A¸   
Z  V   `   : Q)˙˙˙öĎĚČ˙˙˙ë    window   observing   _stopListeners   ˙˙˙˙   A   ReflowObserver.prototype<._startÁ                          š                                           Y0  0  ˘            A¸    
A5   5   : Q×,    _startListeners   tabActor   windows   ˙˙˙˙   ?   ReflowObserver.prototype<._stopÁ                   9       š                                           Ś0  f1  Ś            A5    5   E   QA5    5      A¸   
A5    5   : QÜ×+    tabActor   attached   docShell   _stopListeners   windows   ˙˙˙˙   S   ReflowObserver.prototype<._startListenersÁ                       š   
   ;                                    windows 1  2  ­      
      T  - Á
:     Q   mm5    W   Q  QV   ¸   
;   5   : ¸   
;   5   : ¸   
;   5   :   QV  ¸   
A: QČăQ¸   
:  5   	˙˙˙Č Ň8  ×
ŐĘĘ ŻĘĘ ŻČŃ ŽË˙˙˙íŇ    value   QueryInterface   Ci+   nsIInterfaceRequestor   getInterface!   nsIWebNavigation   nsIDocShell+   addWeakReflowObserver	   next	   done    ˙˙˙˙          window                     docshell                       ˙˙˙˙   $   [          ˙˙˙˙   Q   ReflowObserver.prototype<._stopListenersÁ                ś       š   
   G                                    windows ˇ2  x4  ś      
      T  - Á
:     Q   m5    W   Q  QV   ¸   
;   5   : ¸   
;   5   : ¸   
;   5   :   QV  ¸   
A: QČ     Qv  QČ    ăQ¸   
:  5   	˙˙˙kČ Ň8  Ń]ŐĘĘ ťĘĘ ťČÖÓ ˇË˙˙˙íŇ ż    value   QueryInterface   Ci+   nsIInterfaceRequestor   getInterface!   nsIWebNavigation   nsIDocShell1   removeWeakReflowObserver	   next	   done    ˙˙˙˙          window                     docshell                     e                 $   a          Ľ   ˙˙˙˙   %   [                       ˙˙˙˙   A   ReflowObserver.prototype<.reflowÁ                        š                                             start   end  4  Ë4  Ă            A¸    
T  T B: QÓ'    notifyCallback   ˙˙˙˙   [   ReflowObserver.prototype<.reflowInterruptibleÁ                        š                                             start   end  í4  *5  Ç            A¸    
T  T C: QÓ&    notifyCallback   ˙˙˙˙   C   ReflowObserver.prototype<.destroyÁ                   s       š                                           @5  U6  Ë            A5       AC0    Q;   ¸   
A5   =   A5   : Q;   ¸   
A5   =   A5   : Q;   5   	5   
¸   
Al QČááŰ(    _isDestroyed   events   off   tabActor   window-ready   _onWindowReady!   window-destroyed%   _onWindowDestroyed   Observable   prototype   destroy	   call