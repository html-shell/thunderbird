ç¿s¹                ß  _   ¹   -   J                                     resource://gre/modules/BackgroundPageThumbs.jsm     7                                         	   
                        	      f        QXu0   QXê`   Q=      Q=      Q>   Q?   Q×   	Q×   
Q=      Q=      Q;   5      Q5      Q5      QQ;   ¸   
=   : Q;   ¸   
=   : QA   QY      ]      ]      ]      ]      ]      ]       ]   !   ]   ";   ]   #   Q;   $Y      
a   &   ]   '   ]   (   ]   )   ]   *   ]   +6   %Q;   $>6   ,Q	 Ê 	 	 	Ë	ÉÉËËÈÈËËê7Õ3Õ1 2ÊTÊlÊ  Ê  Ê  ËÊ  ÖÊ  éÊ  ûÐ   ÊÊ Ê 4Ê FÊ YÊÐ Ì  !   EXPORTED_SYMBOLS/   DEFAULT_CAPTURE_TIMEOUT/   DESTROY_BROWSER_TIMEOUT!   FRAME_SCRIPT_URLm   chrome://global/content/backgroundPageThumbsContent.js;   TELEMETRY_HISTOGRAM_ID_PREFIX#   FX_THUMBNAILS_BG_'   TEL_CAPTURE_DONE_OK1   TEL_CAPTURE_DONE_TIMEOUT1   TEL_CAPTURE_DONE_CRASHED1   TEL_CAPTURE_DONE_BAD_URI   XUL_NS{   http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul   HTML_NS9   http://www.w3.org/1999/xhtml   Cc   Ci   Cu   Components   classes   interfaces   utils   importK   resource://gre/modules/PageThumbs.jsmG   resource://gre/modules/Services.jsm   global)   BackgroundPageThumbs   capture!   captureIfMissing1   _ensureParentWindowReady   _destroy   _ensureBrowser   _destroyBrowser)   _processCaptureQueue'   _onCaptureOrTimeout-   _destroyBrowserTimeout   Capture   prototype   pending   start   destroy   receiveMessage   notify   _done   nextID                  )   BackgroundPageThumbs                  ÿÿÿÿ   9   BackgroundPageThumbs.captureÁ               Y      ¹      V                          +      @      url   options   existing   cap   &  2       
         H   Y      Q;    ¸   
:      *   5      ;   â   A    : QAA5   D   
QZ   6   QAA5   D   Q;   R  6   Q;   â   =   A5   Ù   	: QA5   ¸   

   :    QV      4   5      #V   5   ¸   
   5   : Q;      A5   ¸   
A:    R   QA5   ¸   
V  : QA5   ¸   
   V  : QA¸   
:  QÐÌÊÔ8×Ó-É;Þ?ÒÈÊÞDFÙÈÿÿÿïÈÕÚÌ    PageThumbs   _prefEnabled   onDone   schedule   _captureQueue   _capturesByURL   Map   tel+   QUEUE_SIZE_ON_CAPTURE   length   get   doneCallbacks	   push   Capture'   _onCaptureOrTimeout	   bind   set)   _processCaptureQueue   ÿÿÿÿ   =   BackgroundPageThumbs.capture/<å                          ¹                                                5                ¸    
   : Õ    onDone   ÿÿÿÿ   K   BackgroundPageThumbs.captureIfMissingÁ                 C       ¹                                      @      url   optionsq  z  T                H   Y      Q;    ¸   
   : ¸   
A    A   : QÐXá_Xb #   PageThumbsStorage!   fileExistsForURL	   then   ÿÿÿÿ   O   BackgroundPageThumbs.captureIfMissing/<Å                 E       ¹                                 
             exists   -  X             T     +   5          ¸    
   : QA¸   
      : QÊ
Õ^Ö    onDone   capture   ÿÿÿÿ   O   BackgroundPageThumbs.captureIfMissing/<Å                 %       ¹      
                                        err /  t  _                5          ¸    
   : QÊÕ    onDone   ÿÿÿÿ   [   BackgroundPageThumbs._ensureParentWindowReadyÁ                 Ñ       ¹      E                                        hostWindow   iframe   onLoad©    l             A5       CA5      BAC6   Q;   5   5      QV   5   ¸   
;   =   :    Q   ¸   	
=   
=   : Q    ¸   
A:    Q   ¸   
=      C: QV   5   5   ¸   
   : QA   6   QBortÈyÔÚ	ÉÚÌ|É  ÛÞÌ    _parentWin+   _startedParentWinInit   Services   appShell   hiddenDOMWindow   document   createElementNS   HTML_NS   iframe   setAttribute   srcK   chrome://global/content/mozilla.xhtml	   bind!   addEventListener	   load   documentElement   appendChild   _hostIframe   ÿÿÿÿ      onLoadFn                   H       ¹                                            I  Ü  |                   ¸    
=         C: QA      5   6   QA¸   
:  QåÖÌ '   removeEventListener	   load   _parentWin   contentWindow)   _processCaptureQueue   ÿÿÿÿ   ;   BackgroundPageThumbs._destroyÁ                   g       ¹                                
           7  i               A5       A5    ¸   
A    : QA¸   
:  QA5      A5   ¸   
:  QA%    QA%   QA%   QA%   Q×ÌÑ    _captureQueue   forEach   _destroyBrowser   _hostIframe   remove+   _startedParentWinInit   _parentWin   ÿÿÿÿ   ?   BackgroundPageThumbs._destroy/<å                        ¹                                              cap y                 T  ¸    
:  (Î    destroy   ÿÿÿÿ   G   BackgroundPageThumbs._ensureBrowserÁ                 ×      ¹   "   v                          0              browser   swidth   sheight   bwidthÓ  §               A5       A5   5   ¸   
;   =   :    QV   ¸   
=   =   : QV   ¸   
=   	=   
: QZ  Y   `   Y   `  - Á
:  ¸   
:  5      Q   
5     Q¸   
:  5      Q   
5     QQQ;   5   ¸   
;   5   : 5   ¸   
Y   Y   V  V  : Q;   ¸   
X V  5   :   QV   5   V  =   6   QV   5   V  V  5   V  5   =   6   QA5   5   5   ¸   
V   : QV   ¸   
=   A    : QV   5   ¸    
;   !B: QAV   6    QÜ
ÈÙÙ  ¦ÉÚÿÿÿçÉçØÑÊ  §ÏÒ  §Ø	ÈÙíßÚ  ÇÚË    _thumbBrowser   _parentWin   document   createElementNS   XUL_NS   browser   setAttribute	   type   content   remote	   true	   next	   done   value   CcA   @mozilla.org/gfx/screenmanager;1   getService   Ci!   nsIScreenManager   primaryScreen#   GetRectDisplayPix	   Math   min   style   width   px   height   documentElement   appendChild!   addEventListener'   oop-browser-crashed   messageManager   loadFrameScript!   FRAME_SCRIPT_URL   ÿÿÿÿ   K   BackgroundPageThumbs._ensureBrowser/<Å                 r       ¹   	                                            curCapture¦  9  µ             ;    ¸   
=   : QA¸   
:  QA5   Ù      A5   >7   @   QV   E   QV   5      V   ¸   
@;   : QÕÌ
ËØ  ¾ÓÕ1    Cu   reportErrorq   BackgroundThumbnails remote process crashed - recovering   _destroyBrowser   _captureQueue   length   pending   _done1   TEL_CAPTURE_DONE_CRASHED   ÿÿÿÿ   I   BackgroundPageThumbs._destroyBrowserÁ                   '       ¹                                            Æ  9  Ë             A5        A5    ¸   
:  QA%    QÑ    _thumbBrowser   remove   ÿÿÿÿ   S   BackgroundPageThumbs._processCaptureQueueÁ                          ¹   
   &                                      Ë  m!  Ö             A5    Ù    D   %QA5    >75   D   QA¸   
:      A¸   
:  QA5    >7¸   
A5   5   : QA5      A5   ¸   	
:  QA%   QÒÓÈÌÞÑ!    _captureQueue   length   pending1   _ensureParentWindowReady   _ensureBrowser   start   _thumbBrowser   messageManager)   _destroyBrowserTimer   cancel   ÿÿÿÿ   Q   BackgroundPageThumbs._onCaptureOrTimeoutÁ               º       ¹      :                                        capture   timer "  ß$  é       	      T  A5    >7I   ;   =   R pA5    ¸   
:  QA5   ¸   
T  5   : Q;   5   ¸   	
;   
5   :    QV   ¸   
A5   ¸   
A: A5   ;   
5   5   : QAV   6   QA¸   
:  QÌËÑÙÛÈÙÏ  óËÌ    _captureQueue   Error_   The capture should be at the head of the queue.   shift   _capturesByURL   delete   url   Cc)   @mozilla.org/timer;1   createInstance   Ci   nsITimer!   initWithCallback   _destroyBrowser	   bind-   _destroyBrowserTimeout   TYPE_ONE_SHOT)   _destroyBrowserTimer)   _processCaptureQueue   ÿÿÿÿ      Capture                        ¹      $                           	             url   captureCallback   options   =&  T'              AT  6    QAT 6   QAT 6   QA;   5   #?
6   Q6   QA;   R  6   QAZ   6   QT 5   	   A5   ¸   

T 5   	: QÊÊÊßÉËÈÙ(    url   captureCallback   options   id   Capture   nextID   creationDate	   Date   doneCallbacks   onDone	   push   ÿÿÿÿ   3   Capture.prototype.pendingÁ                   
       ¹                                            z'  '              A5      É    _msgMan   ÿÿÿÿ   /   Capture.prototype.startÁ               þ       ¹      M                                        messageManager   timeout O(  U+        	      A;   R  6    Q;   â   =   A5    A5   : QA5   5   Å=      A5   5      
;      QA;   
5   ¸   
;   5   : 6   	QA5   	¸   
AV   ;   5   5   : QAT  6   QA5   ¸   
=   Y   A5   ]   A5   ]   : QA5   ¸   
=   A: QÉà
ÒÐÊÜÉÒÏ %ÊÒ$ËË *×I    startDate	   Date   tel+   CAPTURE_QUEUE_TIME_MS   creationDate   options   timeout   number/   DEFAULT_CAPTURE_TIMEOUT   _timeoutTimer   Cc)   @mozilla.org/timer;1   createInstance   Ci   nsITimer!   initWithCallback   TYPE_ONE_SHOT   _msgMan!   sendAsyncMessage9   BackgroundPageThumbs:capture   id   url%   addMessageListener?   BackgroundPageThumbs:didCapture   ÿÿÿÿ   3   Capture.prototype.destroyÁ                   b       ¹      +                                      _,  u.  4            A5       A5    ¸   
:  QA%    QA5      #A5   ¸   
=   A: QA%   QA%   QA%   QA%   QÑÒ <    _timeoutTimer   cancel   _msgMan+   removeMessageListener?   BackgroundPageThumbs:didCapture   captureCallback   doneCallbacks   options   ÿÿÿÿ   A   Capture.prototype.receiveMessageÁ                ¶       ¹      1                                      msg È.  ¸0  F      	      T  5    5      (;   â   =   ;   R  A5   : QT  5    5   A5      T  5    5      ?   Q;   =   	T  5    5   7   QA¸   

@V   : QÈÈA¸   

T  5    ;   : QÍÕÊÿÿÿáÔÍË
ÞÑÙ* 	   data   imageData   tel/   CAPTURE_SERVICE_TIME_MS	   Date   startDate   id   failReason   global#   TEL_CAPTURE_DONE_   _done'   TEL_CAPTURE_DONE_OK    ÿÿÿÿ          reason        c   9   ÿÿÿÿÿÿÿÿ             ÿÿÿÿ   1   Capture.prototype.notifyÁ                          ¹                                            ø0  01  Y            A¸    
@;   : QÒ+    _done1   TEL_CAPTURE_DONE_TIMEOUT   ÿÿÿÿ   /   Capture.prototype._doneÁ                    ¹      Q                                  	   data   reason   captureCallback   doneCallbacks   options	   done  E1  T5  ]            A5       Q5      Q5      QQA¸   
:  QT '=      ;   =   R p;   â   =   T : QT  E   QT  5   	   LT  5   	K  Q   )mW  ;   â   V  T  5   	V  7: QãQLMÿÿÿ×QNÈA      QT      V   :  Q;   
¸   
A5   T  5   T  5   C: ¸   
V   V   : QæÌÊËÖÑÑ0.ÊìË zÉíÈ      captureCallback   doneCallbacks   options   destroy   number   Error9   A done reason must be given.   tel+   CAPTURE_DONE_REASON_2   telemetry   PageThumbs   _store   url   finalURL   imageData	   then    ÿÿÿÿ         id       ÿÿÿÿ   9   Capture.prototype._done/doneÅ                  ¤       ¹      -                                   Ó3  ´4  n                  A: Q      - Á
:     Q   ]m5    W   QV   ¸   
      A5   l Q   ,  Qv  Q;   ¸   
V  : QÈ    ãQ¸   
:  5   ÿÿÿÈ ÐÙ8qÑ 
äÌ
Û pËÿÿÿëÒ v	    value	   call   url   Cu   reportError	   next	   done    ÿÿÿÿ          callback                     err       .   q       ;   $       $   |   ÿÿÿÿ   `                 /          ;   ÿÿÿÿ   ÿÿÿÿ      tel               5       ¹                                              histogramID   value   id  ,6  ²6              ;    T     Q;   5   ¸   
V   : ¸   
T : QÎæ3 ;   TELEMETRY_HISTOGRAM_ID_PREFIX   Services   telemetry!   getHistogramById   add   ÿÿÿÿ      schedule                 -       ¹                                              callback Å6  7              ;    5   5   ¸   
T  ;   5   5   : QìH    Services   tm   mainThread   dispatch   Ci   nsIThread   DISPATCH_NORMAL