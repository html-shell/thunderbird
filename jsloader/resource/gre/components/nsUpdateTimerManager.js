ç¿s¹                ¯  2   ¹   *   à       	                                resource://gre/components/nsUpdateTimerManager.js     -         	                	                     ;    5   ¸   
=   : Q;    5   ¸   
=   : Q;    5      Q;    5      Q=   
   	Q=      Q=      Q=      Q=      Q;   ¸   
A=       : Q;   Y   @]   @]   Y   ]      ]      ]      ]      ]      ]   ;    ¸    
=   !: ]   ";   ¸   #
Z  ;   5   $`   ;   5   %`  ;   5   &`  : ]   '6   QA;   ¸   )
Z  ;   `   : 6   (QÊ"	0	<	ÚAÚ?ÐÐË"Ë!Ë"ËËÛ")05<>ÊCJOÊTÊ  Ê 
Ê Ê %Ê 7Ñ	ÈÐ'Î)Î)Î 8ÎÑ5ÉÿÿÿßÉ0    Components   utils   importK   resource://gre/modules/XPCOMUtils.jsmG   resource://gre/modules/Services.jsm   Cc   classes   Ci   interfacesE   PREF_APP_UPDATE_LASTUPDATETIME_FMT=   app.update.lastUpdateTime.%ID%C   PREF_APP_UPDATE_TIMERMINIMUMDELAY9   app.update.timerMinimumDelayE   PREF_APP_UPDATE_TIMERFIRSTINTERVAL;   app.update.timerFirstInterval'   PREF_APP_UPDATE_LOG   app.update.log+   CATEGORY_UPDATE_TIMER   update-timer   XPCOMUtils!   defineLazyGetter   gLogEnabled   TimerManager   prototype   _timer%   _timerMinimumDelay   _timers   observe   notify   _ensureTimer   _cancelTimer   registerTimer   IDM   {B322A5C0-A419-484E-96BA-D7182163899F}   classID   generateQI+   nsIUpdateTimerManager!   nsITimerCallback   nsIObserver   QueryInterface   NSGetFactory)   generateNSGetFactory   ÿÿÿÿ      tm_gLogEnabled                          ¹      	                                      >                 ;    â    =   ;   B: Õ3    getPref   getBoolPref'   PREF_APP_UPDATE_LOG   ÿÿÿÿ      getPref                5       ¹                                        	   func   preference   defaultValue   j  ð  "             ;    5   T  Á
T :       Qv   QÈ    T ÓÉ&Ó(    Services   prefs    ÿÿÿÿ          e                         ÿÿÿÿ   ÿÿÿÿ      LOG                 F       ¹                                              string y    0             ;       @;   â   =   T  =   : Q;   5   ¸   
=   T  : QÝÞ7    gLogEnabled	   dump   *** UTM:SVC    
   Services   console!   logStringMessage   UTM:SVC    ÿÿÿÿ      TimerManager                          ¹                                            ¡  â  <             ;    5   ¸   
A=   B: QÜ8    Services   obs   addObserver   xpcom-shutdown   ÿÿÿÿ      TM_observe              7      ¹      q                                     aSubject   aTopic   aData   minInterval!   minFirstInterval   timerID   ¥	  ì  T             Xu0W   QX'W  QT   Qx=    y   =   y   $=   y   £z   ýXôW   QXôW  QA;   ¸   
Xè;   â   =   ;   ×x: V   : 6   Q;   ¸   
;   â   =   ;   	A5   : V  :   QAC6   
QA¸   
V  : Q   d;   5   ¸   
A=   : QA¸   
:  QA5   K   mW  A5   V  &QãQLMÿÿÿêQNA@6   Q   ÈVÈYÈÉh u
`u
juÊ[^ÈÈcæ*c Ée
àe#eÈgÈÐXÛnÌÉ0ÊØÈX    utm-test-init)   profile-after-change   xpcom-shutdown%   _timerMinimumDelay	   Math   max   getPref   getIntPrefC   PREF_APP_UPDATE_TIMERMINIMUMDELAYE   PREF_APP_UPDATE_TIMERFIRSTINTERVAL   _canEnsureTimer   _ensureTimer   Services   obs   removeObserver   _cancelTimer   _timers    ÿÿÿÿ         firstInterval                   "  ÿÿÿÿ   ÿÿÿÿ      TM_notify   	   
        Ï      ¹   ,   W                      x      @      timer   nextDelay   updateNextDelay   now   callbackToFire)   earliestIntendedTime   skippedFirings   lastUpdateTime   tryFire   catMan   entriesC  %                      Q   W   Q@   Q;    ¸   
;   ¸   
:  Xè:    Q@   Q@   QB   Q@   	Q;   5   ¸   
;   5   : W  QV  ¸   	
;   
: W  Q  «mÆ      
Q   	Q  	Q  Q  Q   Q   Q  Q  QV  ¸   
:  ¸   
;   5   : 5     QV  ¸   
;   
V  :   QV  ¸   
=   : - Á
:  ¸   
:  5      Q   
5      Q¸   
:  5      Q   
5      Q¸   
:  5      Q   
5     Q¸   
:  5      Q   
5     Q¸   
:  5      Q   
5     	QQQ;   â   V  	: W  	QV   D   "QV  	 D   Q;   â   V  	:    E;   â   =         =         
=   =   : QÈÇÿÿþ;   â   =   V  V  	:    	Q;   ¸   
     V  :    
Q;   â   =      
>:   	Q  	     >  	Q  	>   $;    5   !¸   "
   
  	: QV        	   	: QÈÇãV  ¸   #
:  ÿÿýJA5   $K  Q   ÇmW  Æ      Q   QV     QA5   $   7   Q   5   %     Y  Q;   ¸   
       :   Q   >6   %Q;    5   !¸   "
V     5   %: QÈV         5   %   5   &: QÈÇãQLMÿÿÿ9QNÈ         :  Q   @I   i         A5   (6   'Q   .   ;    ¸   )
   XèA5   (: 6   'QA;   ¸   
:  6   *Q   A¸   +
:  QË  Ê    ØÿÿÿõÉ  ¦ÑÊ  ¦ÈÐ
È( »&ÿ
Ëá
ÔÈ
Ð8ÔÿÿÿÈÉèèççØÎÈ
ËÙÏá  ±B
×É
Ñ  ¸ÉÕÉ  ÁËßÊ  ÓË  Ç  ©Õ  ÖÏ0  ÌÝ
Ê
ÒÐËÖÈÌäÊ  õÕ  áÓ  øÊdÖàÉÍÎÌ 	   Math   round	   Date   now   Cc=   @mozilla.org/categorymanager;1   getService   Ci%   nsICategoryManager#   enumerateCategory+   CATEGORY_UPDATE_TIMER   getNext   QueryInterface%   nsISupportsCString	   data!   getCategoryEntry   split   ,	   next	   done   value   parseInt   isNaN   LOGm   TimerManager:notify - update-timer category registered    for    O    without required parameters - skipping   getPref   getIntPrefE   PREF_APP_UPDATE_LASTUPDATETIME_FMT   replace   Services   prefs   setIntPref   hasMoreElements   _timers   lastUpdateTime   interval   delay%   _timerMinimumDelay   max   lastTimerReset   _cancelTimer   ÿÿÿÿ      updateNextDelay                 %       ¹       
                                        delay   à                  @HD   QT        T     QÖÉ    ÿÿÿÿ      tryFire               }       ¹       ,                                        callback   intendedTime   selected  e  Ù               BW   QT       PT    D   Q   @H   "T     QT    QCW   Q      @I   C   QV          T    : Q
ÉÏ
É
É
Ë
  ¢
Ó$     ÿÿÿÿ	         entry       value       cid      method      timerID       prefInterval       defaultInterval       interval      prefLastUpdate               TM_notify/<Á                  Ñ       ¹      -                                   T  $  Ç             ;    5      7   Á
;   5   : ¸   
  : Q;   â   =      : Q   <   Qv   Q;   â   =      =   V   : QÈ        	Q;   	5   
¸   
   
  	: Q    	   	  : QO
õ
ÞÌ
ÏÑ  Í
ËËßÛ1    Components   classes   Ci!   nsITimerCallback   notify   LOG?   TimerManager:notify - notified i   TimerManager:notify - error notifying component id:     ,error:    Services   prefs   setIntPref    ÿÿÿÿ          e            S       U   0   ÿÿÿÿ    ÿÿÿÿ         _timerID                    timerID      timerData                   prefLastUpdate                TM_notify/<Á                5      ¹      D                       &              prefLastUpdate¼   $  á       	         5    E   Q   5    5      z   5    ¸   
  : Q;   â   =      : Q   <  Qv  Q;   â   =      =   V  : QÈ       $;   â   =      =   : Q    	Q     	6   Q;   	¸   

        :    Q;   5   ¸   
V     	: Q     5      5     : Qßu4ÚÞÌÕË  èÐ
ßËÐÖÈÞåE    callback   notify   LOGQ   TimerManager:notify - notified timerID: _   TimerManager:notify - error notifying timerID:    , error: ?   TimerManager:notify - timerID: ]    doesn't implement nsITimerCallback - skipping   lastUpdateTimeE   PREF_APP_UPDATE_LASTUPDATETIME_FMT   replace   Services   prefs   setIntPref   interval    ÿÿÿÿ         e    	   %ID%         %   8       ^   0   ÿÿÿÿ	   %ID%    	   %ID%       o  Í           »     ¯     ÿÿÿÿÿÿÿÿ            e  Ù   ÿÿÿÿ   {  µ         ¹  S         ÿÿÿÿ   G   TimerManager.prototype._ensureTimerÁ                 à       ¹      >                                        interval ;&  2(  
      	      A5        A5       iA;   5   ¸   
;   5   : 6   QA5   ¸   
AT  ;   5   5   : QA;   
¸   
:  6   	Q   f;   
¸   
:  T  A5   	A5   5      ;A5   ;   ¸   
A5   	T  ;   
¸   
:  >: 6   QdÜÉÑÏ ÍÎÌ
Úè>ÿÿÿÖÉ9    _canEnsureTimer   _timer   Cc)   @mozilla.org/timer;1   createInstance   Ci   nsITimer!   initWithCallback)   TYPE_REPEATING_SLACK   lastTimerReset	   Date   now   delay	   Math   max   ÿÿÿÿ   G   TimerManager.prototype._cancelTimerÁ                   %       ¹                                            (  Ü(              A5       A5    ¸   
:  QA@6    QÑÈ    _timer   cancel   ÿÿÿÿ   !   TM_registerTimer               ï       ¹      C                                       id   callback   interval   prefLastUpdate   lastUpdateTime   now   8)  B,  %      
      ;    â    =   T  : Q;   ¸   
     T  :    Q;   â   =   V   >:   Q;   ¸   
;   ¸   	
:  Xè:   QV  V     >W  QV  >   ";   
5   ¸   
V   V  : QA5   T  Y   T ]   T ]   V  ]   8QA¸   
T Xè: Q×ÔÈÔÈØÿÿÿõÈÉÝÎÈÈËÓ#    LOGC   TimerManager:registerTimer - id: E   PREF_APP_UPDATE_LASTUPDATETIME_FMT   replace   getPref   getIntPref	   Math   round	   Date   now   Services   prefs   setIntPref   _timers   callback   interval   lastUpdateTime   _ensureTimer	   %ID%    