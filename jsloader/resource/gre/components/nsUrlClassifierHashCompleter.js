ç¿s¹                Ã  A   ¹   8   ¢                         1            resource://gre/components/nsUrlClassifierHashCompleter.js     â@         	                       	   
                      ;   5       Q;   5      Q;   5      Q;   5      Q×    	Q×   
Q×   Q¼w@   QØ·t    Q;   ¸   
=   : Q;   ¸   
=   : Q;   Y   ;   ¸   
=   : ]   ;   ¸   
Z  ;   5   `   ;   5   `  ;   5   `  ;   5   `  ;   5   `  ;   5   `  : ]      ]      ]       ]   !   ]   "   ]   #   ]   $6   Q;   %Y   ;   ¸   
Z  ;   5   &`   ;   5   '`  ;   5   `  ;   5   `  : ]      ]   (   	]   )   
]   *   ]   +   ]   ,   ]   -   ]   .   ]   /   ]   0   ]   1   ]   2   ]   3   ]   4   ]   5   ]   $6   QA;   ¸   7
Z  ;   `   : 6   6QÊ	  	 Ç	 Ì	ÐÐÐÐÈÈÈÊËÕ3Õ1.0ÊÑ	ÈÐ'Î)Î)Î)Î)Î)Î2È<ÊcÊ  Ê  Ê  ÊÐ    ¦ÊÐ'Î)Î)Î)Î  ¨È  ¯Ê  ºÊ  ÏÊ  ÚÊ  üÊ Ê )Ê 8Ê \Ê mÊ zÊ Ê Ê Ê ¸Ð Â ÇÑ5ÉÿÿÿßÉ1    Cc   Components   classes   Ci   interfaces   Cr   results   Cu   utils   COMPLETE_LENGTH   PARTIAL_LENGTH   BACKOFF_ERRORS!   BACKOFF_INTERVAL   BACKOFF_MAX   importK   resource://gre/modules/XPCOMUtils.jsmG   resource://gre/modules/Services.jsm   HashCompleter   prototype   IDM   {9111de73-9322-4bfc-8b65-2b727f3e6ec8}   classID   XPCOMUtils   generateQI;   nsIUrlClassifierHashCompleter   nsIRunnable   nsIObserver1   nsISupportsWeakReference!   nsITimerCallback   nsISupports   QueryInterface   complete   run   finishRequest   canMakeRequest   noteRequest   observe)   HashCompleterRequest%   nsIRequestObserver#   nsIStreamListener   add   begin   notify   openChannel   buildRequest   addRequestBody   handleResponse   handleTable   handleItem   notifySuccess   notifyFailure   onDataAvailable   onStartRequest   onStopRequest   NSGetFactory)   generateNSGetFactory   ÿÿÿÿ      HashCompleter                   E       ¹                                            ©  	               A@6    QAY   6   QAY   6   QAB6   Q;   5   ¸   
A=   C: Q#È%Ì(Ì+È-Ü7    _currentRequest!   _pendingRequests   _backoffs   _shuttingDown   Services   obs   addObserver   xpcom-shutdown   ÿÿÿÿ      HC_complete               -      ¹      U                           (             aPartialHash   aGethashUrl   aCallback   jslib   ç	  |  <             T     ;    5   pA5       A;   AT R 6   QA5   5   T    !A5   ¸   
T  T : Q   HA5   T 7    A5   T ;   AT R 8QA5   T 7¸   
T  T : QA5   T 7    P;   5   	¸   

:  5   W   QA5   T V   5   ;   Xê`×
>;   ;   R 8Q;   5   5   ¸   
A;   5   5   : QËAËÉDÏÜ
ËÉÊ
KÛNËQ
ÑÍSÓS$]êG    Cr1   NS_ERROR_NOT_INITIALIZED   _currentRequest)   HashCompleterRequest   gethashUrl   add!   _pendingRequests   _backoffs   CcG   @mozilla.org/url-classifier/jslib;1   getService   wrappedJSObject   RequestBackoff   BACKOFF_ERRORS!   BACKOFF_INTERVAL   BACKOFF_MAX   Services   tm   currentThread   dispatch   Ci   nsIThread   DISPATCH_NORMAL   ÿÿÿÿ   7   HashCompleter.prototype.runÁ              î       ¹   
   J                                      url   pendingUrlsO  }  c       	      A5       LA@6   QA@6   QA5   K   mW   A5   V   @8QãQLMÿÿÿéQN;   5   p;   ¸   
A5   :   QA5    E   QV  Ù   >   5  QV  >7  QAA5   V  76   QA5   V  &QÈA5      ,A5   ¸   	
:  Qt   
   A@6   Qu eÈÈÉ0ÊÙkËoÒÈØË
ËÒÍvÛ{Ê    _shuttingDown   _currentRequest!   _pendingRequests   _backoffs   Cr1   NS_ERROR_NOT_INITIALIZED   Object	   keys   length   begin    ÿÿÿÿ         nextUrl        Å         )             /   ÿÿÿÿ   ÿÿÿÿ   K   HashCompleter.prototype.finishRequestÁ                 C       ¹   	                                           url   aStatus  '  ¼               A5    T  7¸   
T : Q;   5   5   ¸   
A;   5   5   : QØêG    _backoffs%   noteServerResponse   Services   tm   currentThread   dispatch   Ci   nsIThread   DISPATCH_NORMAL   ÿÿÿÿ   M   HashCompleter.prototype.canMakeRequestÁ                        ¹      	                                        aGethashUrl )  u               A5    T  7¸   
:  Ñ-    _backoffs   canMakeRequest   ÿÿÿÿ   G   HashCompleter.prototype.noteRequestÁ                        ¹      	                                        aGethashUrl q  º               A5    T  7¸   
:  Ñ*    _backoffs   noteRequest   ÿÿÿÿ      HC_observe                        ¹      
                                         aSubject   aTopic   aData   Û  G               T =       AC6   QÉÈ    xpcom-shutdown   _shuttingDown   ÿÿÿÿ   )   HashCompleterRequest                 <       ¹                                                aCompleter   aGethashUrl  j                 AT  6    QAZ   6   QA@6   QA=   6   QAB6   QAT 6   QÊËÈÌÈÊ    _completer   _requests   _channel   _response      _shuttingDown   gethashUrl   ÿÿÿÿ      HCR_add                 0       ¹                                              aPartialHash   aCallback  R  ã  ¯             A5    ¸   
Y   T  ]   T ]   Z   ]   : QÒÈÈÉ  °    _requests	   push   partialHash   callback   responses   ÿÿÿÿ      HCR_begin                  Â       ¹      5                                   §  Ú  º             A5    ¸   
A5   :     =;   â   =   A5   =   : QA¸   
;   5   : Q;   	5   
¸   
A=   B: QA¸   
:  QA5    ¸   
A5   : Q   -   Qv   QA¸   
V   : QV   pÈ    ÓàÖÜ$ÌÜÌÐÌ    _completer   canMakeRequest   gethashUrl	   dumpK   hashcompleter: Can't make request to    
   notifyFailure   Cr   NS_ERROR_ABORT   Services   obs   addObserver   xpcom-shutdown   openChannel   noteRequest    ÿÿÿÿ          err         q   (          !   ÿÿÿÿ   ÿÿÿÿ      HCR_notify                   ]       ¹   	                                         ú  _   Ï             A5    E   QA5    ¸   
:     @;   â   =   A5   =   : QA5    ¸   
;   5   : QÙàÛ,    _channel   isPending	   dumpK   hashcompleter: cancelling request to    gethashUrl   
   cancel   Cr%   NS_BINDING_ABORTED   ÿÿÿÿ      HCR_openChannel                 |      ¹   #   n                           4              loadFlags   uri   channel   httpChannel	   body   timeoutÈ   7&  Ú             ;    5   5   ;    5   5      Q;   5   ¸   
A5   @@:   Q;   5   ¸   
V  @;   5   	¸   

:  @;    5   5   ;    5   5   :   QV  V   6   QV  ¸   
;    5   :   QV  ¸   
=   =   B: QAV  6   QA¸   
:    QA¸   
V  : QA;   5   ¸   
;    5   : 6   Q;   5   ¸   
=   :   QA5   ¸    
AV  A5   5   !: QV  ¸   "
A@: QÏÕÙÈÕÑ1ÏÏ  ßÈ  åÎÕÈÚËÈÈÐÜÉÑ  ôÈáÑ    Ci   nsIChannel   INHIBIT_CACHING#   LOAD_BYPASS_CACHE   Services   io   newURI   gethashUrl%   newChannelFromURI2+   scriptSecurityManager%   getSystemPrincipal   nsILoadInfo   SEC_NORMAL!   nsIContentPolicy   TYPE_OTHER   loadFlags   QueryInterface   nsIHttpChannel!   setRequestHeader   Connection   close   _channel   buildRequest   addRequestBody   timer_   Cc)   @mozilla.org/timer;1   createInstance   nsITimer   prefs   getIntPrefA   urlclassifier.gethash.timeout_ms!   initWithCallback   TYPE_ONE_SHOT   asyncOpen   ÿÿÿÿ   !   HCR_buildRequest                ^      ¹      q                                      prefixes   i	   body¼&  ì)  ü             Z      Q>  Q    bm  QA5    V  7  QV   ¸   
V  5   : ×ÿ   V   ¸   
V  5   : QÈV  #?W  QQãV  A5    Ù   ÿÿÿÈV   Ù     Q   lm  Q  Q;   ¸   
;   ¸   
:  V  ?:   QV   V  7  QV   V  V   V  78QV   V  V  8QÈãV  #?W  Qÿÿÿ  Q;   =   	;   V   Ù   =   
V   ¸   
=   : W  QV  É&bTt'
ÐÔ
Ù /ÎÿÿÿåØ 
Î({Í
ØÊÿÿÿõÈ
ÎÓÏ Ô ÛÖÉ    _requests   indexOf   partialHash	   push   length	   Math   floor   random   PARTIAL_LENGTH   :   
	   join       ÿÿÿÿ         i                     request        ÿÿÿÿ         j    	   temp           {          t       
      ÿÿÿÿ      M              d   ÿÿÿÿ   ÿÿÿÿ   %   HCR_addRequestBody               ¥       ¹      /                                        aBody   inputStream   uploadChannel   httpChannel I*  ,        
      ;    5   ¸   
;   5   :    QV   ¸   
T  T  Ù   : QA5   ¸   
;   5   	:   QV  ¸   

V   =   ×ÿ: QA5   ¸   
;   5   :   QV  =   6   QÑÊ ÈÚ×ÈÚ×ÈÏ#    CcK   @mozilla.org/io/string-input-stream;1   createInstance   Ci)   nsIStringInputStream   setData   length   _channel   QueryInterface!   nsIUploadChannel   setUploadStream   text/plain   nsIHttpChannel   requestMethod	   POST   ÿÿÿÿ   %   HCR_handleResponse                 T       ¹      .                                        start   length­,  q-  )            A5    =      >   QA5    Ù     Q   mA¸   
V   : W   QãV   V  ÿÿÿàÌÐ(% 1ÌÈ 1Ð&    _response      length   handleTable    .   %      ÿÿÿÿ      HCR_handleTable              ¬      ¹                              "             aStart	   body   newlineIndex   header   entries	   list   addChunk   dataLength	   data .  ô1  8            A5    ¸   
T  :    QV   ¸   
=   :   QV  ×ÿ   ;   â   :  pV   ¸   
>V  :   QV  ¸   
=   :   QV  Ù   ×   ;   â   :  pV  >7  Q;   â   V  ?7:   Q;   â   V  ×7:   QV  ;   	>D   'QV  >D   QV  V   Ù   V  ?   ;   â   :  pV   ¸   

V  ?V  :   Q>  Q    EmA¸   
V  ¸   

V  ;   	;   	: V  V  : QV  #?W  QQãV  V  ;   	ÿÿÿ¯ÈT  V  ?V  ÐÈÐÈÊÐ	ÈÐ
ÈÌÊËÐÈÑÈÒÌÕÊÕÈ&E7V Râ S R8Î T R× WÐ.    _response   substring   indexOf   
   errorWithStack   split   :   length   parseInt   COMPLETE_LENGTH   substr   handleItem    ÿÿÿÿ         i        D  V       9  b   ÿÿÿÿ   ÿÿÿÿ      HCR_handleItem                       ¹   	   >                        
             aData   aTableName   aChunkId   x2  É3  \            >   Q    {m  QA5    V   7  QT  ¸   
>×: V  5      6V  5   ¸   
Y   T  ]   T ]   T ]   : QÈV   #?W   QQãV   A5    Ù   ÿÿÿxÈ&{m  '
ÐÍ
ÍÕ
È
È
È ` ]/ÎÿÿÿåØ!    _requests   substring   partialHash   responses	   push   completeHash   tableName   chunkId   length    ÿÿÿÿ          i                     request                        ÿÿÿÿ      f          ÿÿÿÿ   #   HCR_notifySuccess                  è       ¹      W                                   é4  6  m            >   Q    Èm  QA5    V   7  Q>  Q    ]m  QV  5   V  7  QV  5   ¸   
V  5   V  5   V  5   : QÈV  #?W  QQãV  V  5   Ù   ÿÿÿÈV  5   ¸   
;   	5   
: QÈV   #?W   QQãV   A5    Ù   ÿÿÿ+È&  È  º  Ú'
Ð&]Or*ÓâÉ r p4ÎÿÿÿâÛ vß n/ÎÿÿÿåØ!    _requests   responses   callback   completion   completeHash   tableName   chunkId   length%   completionFinished   Cr   NS_OK    ÿÿÿÿ          i                     request                    j                    response           Ú       /   r          æ   ÿÿÿÿ      ³          $   ~         1   H         ÿÿÿÿ   #   HCR_notifyFailure                u       ¹      &                        	             aStatus ®6  7  z            ;    â    =   : Q>   Q    Bm  QA5   V   7  QV  5   ¸   
T  : QÈV   #?W   QQãV   A5   Ù   ÿÿÿ±ÈÓ&B4T'
ÐØ |/ÎÿÿÿåØ! 	   dumpC   hashcompleter: notifying failure
   _requests   callback%   completionFinished   length    ÿÿÿÿ          i                     request           T          `   ÿÿÿÿ   !   -          ÿÿÿÿ   '   HCR_onDataAvailable               U       ¹                                              aRequest   aContext   aInputStream   aOffset   aCount   sis     ¶7  Ý8              ;    5   ¸   
;   5   :    QV   ¸   
T : QA5   V   ¸   
T : 6   QÑÊ ÈÒÕ{    CcI   @mozilla.org/scriptableinputstream;1   createInstance   Ci1   nsIScriptableInputStream	   init   _response   readBytes   ÿÿÿÿ   %   HCR_onStartRequest                        ¹                                                aRequest   aContext  9  º9               C    ÿÿÿÿ   #   HCR_onStopRequest              a      ¹      j                        #             aRequest   aContext   aStatusCode   httpStatus   success   è9  >        
      ;    5   ¸   
A=   : QA5      ;   5   pX÷   Q;   ¸   
T :    b  Q  QT  ¸   	
;   
5   :   QV  5     QV  5   W   QV      ;   5   U QÈ;   ¸   
T :   QA5   ¸   
A5   V   : QV     TA¸   
:  Q   B  Qv  Q;   â   V  5   : QV  5   U QBW  QÈ    V     A¸   
:  Q   A¸   
T : QÛË ÈÏÑ
Ô
È
ÎÎ
ÏÏ
ÈÛÑÌ×ÍÍÑÏ     Services   obs   removeObserver   xpcom-shutdown   _shuttingDown   Cr   NS_ERROR_ABORT   Components   isSuccessCode   QueryInterface   Ci   nsIHttpChannel!   requestSucceeded   responseStatus   _completer   finishRequest   gethashUrl   handleResponse	   dump   stack   value   notifySuccess   notifyFailure    ÿÿÿÿ         channel       success        ÿÿÿÿ         err         é          R   [   ÿÿÿÿ   û   6   ÿÿÿÿ   ÿÿÿÿ      HCR_observe                 ?       ¹                                              aSubject   aTopic   aData   4>  û>  ¸            T =       AC6   QA5       A5   ¸   
;   5   : QÉÈÛ(    xpcom-shutdown   _shuttingDown   _channel   cancel   Cr   NS_ERROR_ABORT   ÿÿÿÿ      unUrlsafeBase64                 @       ¹                                          	   aStr Ê?  1@  Ç            T      =       0T  ¸   
     =   : ¸   
    =   : 
ãÊÊ È.       replace   +   /   -      _      ÿÿÿÿ      errorWithStack                 (       ¹                                               errJ@  @  Ì            ;    R     QV   ;   5   6   QV   ÈÔ    Error   value   Cr!   NS_ERROR_FAILURE