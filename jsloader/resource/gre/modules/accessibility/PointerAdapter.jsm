ç¿s¹                     ¹   #   ¸                                 0     resource://gre/modules/accessibility/PointerAdapter.jsm                                     ;   5       Q;   5      QAf    0   Q;   ¸   
=   : Q;   ¸   	
A=   
=   : Q;   ¸   	
A=   =   : Q;   ¸   	
A=   =   : Q;   ¸   	
A=   =   : Q=      Q×ÿ   Qn   Y      a   Y   =   ]   =   ]   =   ]   =   ]   =   ]   =   ]   ]      ]      ]       ]   !1   QAY      ]      ]       ]   !0   "Q 	ÐÐÌ;Õ3Ò4Ò4Ò7Ò7ËÈ Ê&ÊIÊÊÊÊÊÏRÊZÊcÐ   Ê  £Ê  ©Ð    Ci   Components   interfaces   Cu   utils!   EXPORTED_SYMBOLS   importK   resource://gre/modules/XPCOMUtils.jsm   XPCOMUtils-   defineLazyModuleGetter   Utils]   resource://gre/modules/accessibility/Utils.jsm   Logger   GestureSettingsc   resource://gre/modules/accessibility/Gestures.jsm   GestureTracker   MOUSE_ID   mouse   SYNTH_ID   PointerRelay#   _eventsOfInterest   pointerdown   touchstart   mousedown   pointermove   touchmove   mousemove   pointerup   touchend   mouseup   _eventMap   start	   stop   handleEvent   PointerAdapter                     PointerRelay      PointerAdapter                  ÿÿÿÿ   =   PointerRelay._eventsOfInterestÁ                  û       ¹      f                                  Ý  	  &             A.    Q;   5   x=   y   =   y   
z   @AY   C]   C]   C]   B]   B]   	B]   
B]   0    Q   AY   C]   	C]   C]   
B]   0    Q=   ;   5   q   Tf    - Á
:     Q   m5   W   QA5    V   C9QãQ¸   
:  5   ÿÿÿÓÈ    A5    )Êh  âu
uÊ*






ÌX68



Ì>ÐÔ82ÑÍ? ËÿÿÿêÒCXF #   _eventsOfInterest   Utils   widgetToolkit	   gonk   android   touchstart   touchmove   touchend   mousedown   mousemove   mouseup   click   ontouchstart   win   value	   next	   done                     touchstart      touchmove      touchend                   ÿÿÿÿ          eventType       ¸   2      ®   =   ÿÿÿÿ   ÿÿÿÿ   %   PointerRelay_start                b       ¹                                          aOnPointerEvent 
  ñ
  R       	      ;    ¸   
=   : QAT  0   QA5   K   Q   &mW   ;   5   ¸   
V   ACC: QãQLMÿÿÿÚQNÈÕÊÏ0+Êé8    Logger   debug%   PointerRelay.start   onPointerEvent#   _eventsOfInterest   Utils   win!   addEventListener    ÿÿÿÿ          eventType       3   ,       )   8   ÿÿÿÿ   ÿÿÿÿ   #   PointerRelay_stop                  f       ¹   	                                         Z       	      ;    ¸   
=   : QA.   QA.   QA5   K   Q   &mW   ;   5   ¸   
V   ACC: QãQLMÿÿÿÚQNÈÕÏ0+Êé;    Logger   debug#   PointerRelay.stop   lastPointerMove   onPointerEvent#   _eventsOfInterest   Utils   win'   removeEventListener    ÿÿÿÿ          eventType       7   ,       -   8   ÿÿÿÿ   ÿÿÿÿ   1   PointerRelay_handleEvent               û      ¹                                 0            aEvent   changedTouches	   type   pointerType 5  &  c             ;    5   =   HE   QT  5   5   ;   5   r   T  5   ;   5   5   	HD   QT  5   
   T  5   D   DQZ  Y   ;   ]   T  5   ]   T  5   ]   T  5   ]   `      Q;    5   =   HE   $QV   Ù   ?HE   QV   >75   ?H   ]Z  Y   >]   V   >75   ×]   V   >75   ×]   V   >75   ]   `   V   >7`  W   QV   Ù   ?HE   QV   >75   ;   H   T  ¸   
:  QT  ¸   
:  QT  5     QA5   V  7    A5   V  7  QA¸   
Y   V  ]   ;   5   5   ¸   
V       l ]   : QeÖØiÞÈloÒ+ÊÍÍÖvÖÞÓÓÔ	ÏÑÑÎÎÍÌÐÍÉÚ  È        Utils   MozBuildApp   browser	   view   top   Ci%   nsIDOMChromeWindow   mozInputSource!   nsIDOMMouseEvent%   MOZ_SOURCE_UNKNOWN   isSynthesized   changedTouches   MOUSE_ID   identifier   screenX   screenY   target   widgetToolkit   android   length   SYNTH_ID   preventDefault1   stopImmediatePropagation	   type#   _eventsOfInterest   _eventMap   onPointerEvent   Array   prototype   map	   call   points   ÿÿÿÿ      mapTouch                 .       ¹                                             aTouch v                 Y   T  5    ]    T  5   ]   T  5   ]   
ÍÍÎ    identifier   screenX   x   screenY   y   ÿÿÿÿ   )   PointerAdapter_start                   <       ¹                                 
            ÷               ;    ¸   
=   : Q;   ¸   
:  Q;   ¸   
A5   : QÕÐÖ%    Logger   debug)   PointerAdapter.start   GestureTracker   reset   PointerRelay   start   handleEvent   ÿÿÿÿ   '   PointerAdapter_stop                   6       ¹                                 	              £             ;    ¸   
=   : Q;   ¸   
:  Q;   ¸   
:  QÕÐÐ    Logger   debug'   PointerAdapter.stop   PointerRelay	   stop   GestureTracker   reset   ÿÿÿÿ   5   PointerAdapter_handleEvent               ,       ¹                                             aDetail   timeStamp ¹    ©             ;    ¸   
:     Q;   ¸   
T  V   : QÌÈ×* 	   Date   now   GestureTracker   handle