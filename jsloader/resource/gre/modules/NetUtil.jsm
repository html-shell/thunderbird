ç¿s¹                     ¹            	                               resource://gre/modules/NetUtil.jsm     ja                               
Af    6    Q;   5      Q;   5      Q;   5      Q;   5   	   Q<       
Q;   5   	¸   
=   : Q;   5   	¸   
=   : QAY      ]      ]      ]      ]      ]      ]      ]      a   6   QÌ	ÐÐÐÐËÚAÚ?1ÊhÊ  ¤Ê Ê sÊ ÜÊ Ê VÐ \ !   EXPORTED_SYMBOLS   Ci   Components   interfaces   Cc   classes   Cr   results   Cu   utils   PR_UINT32_MAX   importK   resource://gre/modules/XPCOMUtils.jsmG   resource://gre/modules/Services.jsm   NetUtil   asyncCopy   asyncFetch   asyncFetch2   newURI   newChannel   newChannel2/   readInputStreamToString   ioService     àÿÿÿïA                     NetUtil                  ÿÿÿÿ   #   NetUtil_asyncCopy                    ¹      W                               @      aSource   aSink   aCallback   copier   observer  ¡  >  1                H   @   QT   D   
QT     B  Q;    5   =   ;   5   ;    5   5   R   QV  pÈ;   5   ¸   	
;   
5   : W   QV   ¸   
T  T @>CC: QV  Q      (Y      ]      ]   W  Q   @W  QV   ¸   
;   
5   : ¸   
V  @: QV   ÊËËÊÏ5È:>ÑÊ>È@Ñ@E#ÊÔMRè    Components   Exception;   Must have a source and a sink   Cr)   NS_ERROR_INVALID_ARG   stack   caller   CcU   @mozilla.org/network/async-stream-copier;1   createInstance   Ci+   nsIAsyncStreamCopier2	   init   onStartRequest   onStopRequest   QueryInterface)   nsIAsyncStreamCopier   asyncCopy    ÿÿÿÿ         exception       ÿÿÿÿ   S   NetUtil_asyncCopy/observer.onStartRequestÁ                        ¹                                                aRequest   aContext  Ê	  á	  H              >    ÿÿÿÿ   Q   NetUtil_asyncCopy/observer.onStopRequestÁ                        ¹                                               aRequest   aContext   aStatusCode   

  k
  I                T : QÍ     '   <   ÿÿÿÿ   ÿÿÿÿ   %   NetUtil_asyncFetch                    ¹      ©                        8      @      aSource   aCallback	   pipe   listener   channel ä  Ý  h             T   D   Q       B  Q;    5   =   ;   5   ;    5   5   R   QV  pÈ;   5   ¸   	
;   
5   :    Q   ¸   
CC>;   @: Q;   5   ¸   	
;   
5   :    QV   ¸   
   5   Y      ]      ]   : QT  ;   
5   r   `  Q;   5   ¸   	
;   
5   :   QV  ¸   
T  ×ÿ×ÿ>>C: QV  ¸   
V   @: QÈÈT    QV  ;   
5   r    A¸   
T  : W  QV  ¸   
V   @: Q   o  Q  Qv  Q;    5   =   V  5   5   =   V  5   ;    5   5   T  V  R   QV  pÈ    ÊËËÊÏkÈpuÑÊuÉwÙzÑÊzÈ|ÚÊÊ|  ÎËÑÊ  ÈÙÔÈÐË
ÈÙÒËÚÉÏ  È  Ì	    Components   ExceptionC   Must have a source and a callback   Cr)   NS_ERROR_INVALID_ARG   stack   caller   Cc'   @mozilla.org/pipe;1   createInstance   Ci   nsIPipe	   init   PR_UINT32_MAX[   @mozilla.org/network/simple-stream-listener;1/   nsISimpleStreamListener   outputStream   onStartRequest   onStopRequest   nsIInputStreamQ   @mozilla.org/network/input-stream-pump;1%   nsIInputStreamPump   asyncRead   nsIChannel   newChannel   asyncOpen;   Failed to open input source '   originalURI	   spec   '   result    ÿÿÿÿ         exception       ÿÿÿÿ   G   NetUtil_asyncFetch/<.onStartRequestÁ                        ¹                                                aRequest   aContext  R  i  }              :    ÿÿÿÿ   E   NetUtil_asyncFetch/<.onStopRequestÁ                 :       ¹                                              aRequest   aContext   aStatusCode     .  ~                   5    ¸   
:  Q         5   T T  : QÚß3    outputStream   close   inputStream    ÿÿÿÿ      	   pump        ÿÿÿÿ         e       exception                     <   ÿÿÿÿ   ø   Z   ÿÿÿÿÿÿÿÿP             b   ÿÿÿÿ   ÿÿÿÿ   '   NetUtil_asyncFetch2              »      ¹   "                          B      @      aSource   aCallback   aLoadingNode#   aLoadingPrincipal)   aTriggeringPrincipal   aSecurityFlags%   aContentPolicyType	   pipe   listener   channel      e  ?%  ¤             T   D   Q       B  Q;    5   =   ;   5   ;    5   5   R   QV  pÈT  ;   5   r   T '=   	D   @QT '=   	D   0QT '=   	D    QT '=   	D   QT '=   	   B  Q;    5   =   
;   5   ;    5   5   R   QV  pÈ;   5   ¸   
;   5   :    Q   ¸   
CC>;   @: Q;   5   ¸   
;   5   :    QV   ¸   
   5   Y      ]      ]   : QT  ;   5   r   `  Q;   5   ¸   
;   5   :   QV  ¸   
T  ×ÿ×ÿ>>C: QV  ¸   
V   @: QÈÈT    QV  ;   5   r    -A¸   
T  =   @T T T T T : W  QV  ¸   
V   @: Q   o  Q  Qv  Q;    5   =   V  5   5   =    V  5   !;    5   5   T  V  R   QV  pÈ      «ÊËËÊÏ  ­È  ²  ·ÎÐÐÐÐÊËËÊÏ  ¾È  Ã  ÉÑÊ  ÉÉÙÑÊ  ÎÈÚÊÊ  Ð  ÙÎËÑÊ  ÚÈÙÔÈÐË  ãÈ  îÙÒËÚÉÏ  òÈ  ùÌ	    Components   ExceptionC   Must have a source and a callback   Cr)   NS_ERROR_INVALID_ARG   stack   caller   Ci   nsIChannel   undefinedI   LoadInfo arguments must be undefined   Cc'   @mozilla.org/pipe;1   createInstance   nsIPipe	   init   PR_UINT32_MAX[   @mozilla.org/network/simple-stream-listener;1/   nsISimpleStreamListener   outputStream   onStartRequest   onStopRequest   nsIInputStreamQ   @mozilla.org/network/input-stream-pump;1%   nsIInputStreamPump   asyncRead   newChannel2      asyncOpen;   Failed to open input source '   originalURI	   spec   '   result    ÿÿÿÿ         exception        ÿÿÿÿ         exception       ÿÿÿÿ   I   NetUtil_asyncFetch2/<.onStartRequestÁ                        ¹                                                aRequest   aContext    3  Ñ              :    ÿÿÿÿ   G   NetUtil_asyncFetch2/<.onStopRequestÁ                 :       ¹                                              aRequest   aContext   aStatusCode   X  ø  Ò                   5    ¸   
:  Q         5   T T  : QÚß3    outputStream   close   inputStream    ÿÿÿÿ      	   pump        ÿÿÿÿ         e       exception         7            <   ÿÿÿÿ   µ   <   ÿÿÿÿ     Z   ÿÿÿÿÿÿÿÿï           R  b   ÿÿÿÿ   ÿÿÿÿ      NetUtil_newURI                       ¹      4                                      aTarget   aOriginCharset   aBaseURI   l'  o)        	      T      B   Q;    5   =   ;   5   ;    5   5   R    QV   pÈT  ;   5   r   A5   	¸   

T  : A5   	¸   
T  T T : ËËÊÏ È ÎÐÖ9    Components   Exceptione   Must have a non-null string spec or nsIFile object   Cr)   NS_ERROR_INVALID_ARG   stack   caller   Ci   nsIFile   ioService   newFileURI   newURI    ÿÿÿÿ          exception        
   <   ÿÿÿÿ   ÿÿÿÿ   %   NetUtil_newChannel              =      ¹   $                           V             aWhatToLoad   aOriginCharset   aBaseURI   uri   loadingNode!   loadingPrincipal1   loadUsingSystemPrincipal'   triggeringPrincipal   securityFlags#   contentPolicyType   =  ïL  s            T  '=    D   (QT  ;   5   rD   QT  ;   5   r   W  QT  ;   5   r   T     A¸   
T  T T :   QA5   ¸   
V  : ÈÈT  '=   D   QT ;   ID   QT ;   I   2;   	5   
=   ;   5   ;   	5   5   R pT  5      Q5     Q5     Q5     Q5     Q5     Q5     QQV       2;   	5   
=   ;   5   ;   	5   5   R pV   '=       A¸   
V   : W   QV   E   QV   E   QV      2;   	5   
=   ;   5   ;   	5   5   R pV  CH   cV  D   
QV     2;   	5   
=   ;   5   ;   	5   5   R p;   5   ¸   
:  W  Q   AV  ;   I   2;   	5   
=   ;   5   ;   	5   5   R pV  ;   H   ;   5   5   W  QV  ;   H   PV      2;   	5   
=    ;   5   ;   	5   5   R p;   5   !5   "W  QA5   ¸   #
V   V  D   Q@V  D   Q@V  D   Q@V  V  : ÐÔÎËÎÈÑÈÑÐÏÉËÊÏ   ÿÒËÊÏ  ËÌÈËËËÊÏ £ ¬^ÎËÊÏ ® ¶ÑÍÊËÊÏ ¹ ÁÊÔÊËÊÏ Ç ÎÔÑËËË Ñ ÖD    string   Ci   nsIFile   nsIURI   newURI   ioService#   newChannelFromURI   object   undefined   Components   ExceptionY   newChannel requires a single object argument   Cr)   NS_ERROR_INVALID_ARG   stack   caller   uri   loadingNode!   loadingPrincipal1   loadUsingSystemPrincipal'   triggeringPrincipal   securityFlags#   contentPolicyType{   newChannel requires the 'uri' property on the options object.  newChannel requires at least one of the 'loadingNode', 'loadingPrincipal', or 'loadUsingSystemPrincipal' properties on the options object.  newChannel does not accept 'loadUsingSystemPrincipal' if the 'loadingNode' or 'loadingPrincipal' properties are present on the options object.   Services+   scriptSecurityManager%   getSystemPrincipalÝ   newChannel requires the 'loadUsingSystemPrincipal' property on the options object to be 'true' or 'undefined'.   nsILoadInfo   SEC_NORMALá   newChannel requires the 'contentPolicyType' property on the options object unless loading from system principal.!   nsIContentPolicy   TYPE_OTHER%   newChannelFromURI2    ÿÿÿÿ         uri        8   Q   ÿÿÿÿÿÿÿÿ             ÿÿÿÿ   '   NetUtil_newChannel2                      ¹      O                                      aWhatToLoad   aOriginCharset   aBaseURI   aLoadingNode#   aLoadingPrincipal)   aTriggeringPrincipal   aSecurityFlags%   aContentPolicyType   uri        mM  àR  Ü      
      T      B  Q;    5   =   ;   5   ;    5   5   R   QV  pÈT     QT  ;   5   r    A¸   	
T  T T : W   QA5   
¸   
V   T T T T T :  äËËÊÏ æÈ ëÈÏÑÈÑ ô ùE    Components   Exceptionw   Must have a non-null string spec, nsIURI, or nsIFile object   Cr)   NS_ERROR_INVALID_ARG   stack   caller   Ci   nsIURI   newURI   ioService%   newChannelFromURI2    ÿÿÿÿ         exception        
   <   ÿÿÿÿ   ÿÿÿÿ   ?   NetUtil_readInputStreamToString              D      ¹      Ó                        =             aInputStream   aCount   aOptions   sis   W  /`              T  ;    5   r    B  Q;   5   =   ;   5   ;   5   5   R   QV  pÈT     B  Q;   5   =   	;   5   ;   5   5   R   QV  pÈT E   Q=   
T q    Q;   5   ¸   
;    5   :   Q  Q=   T q    T >6   QV  ¸   
T  T 5   
T T 5   : QY     QV  ¸   
×ÿV  : QV  ¸   
:  QV  5   ÈÈÈ   Q  Qv  Q;   5   V  5   V  5   ;   5   5   V  5   R pÈ    È;   5   ¸   
;    5   :    QV   ¸   
T  : QV   ¸   
T :    Q  Qv  Q;   5   V  5   V  5   ;   5   5   V  5   R pÈ    ÏËËÊÏ È ËËÊÏ !È &ÒËÑÊ *È  ÊÊÙÈ 6ÊÕÏÓÌÝØ ?Ì DÑÊ DÈÒÎÉÌÝØ LË	    Ci   nsIInputStream   Components   ExceptionU   First argument should be an nsIInputStream   Cr)   NS_ERROR_INVALID_ARG   stack   callerU   Non-zero amount of bytes must be specified   charset   CcU   @mozilla.org/intl/converter-input-stream;1   createInstance/   nsIConverterInputStream   replacement	   init   readString   close   value   message   result	   dataI   @mozilla.org/scriptableinputstream;11   nsIScriptableInputStream   readBytes    ÿÿÿÿ         exception        ÿÿÿÿ         exception        ÿÿÿÿ         cis                    str                    e        ÿÿÿÿ         e         à          Ø             <   ÿÿÿÿ   [   <   ÿÿÿÿ   ¯   û   ÿÿÿÿ   Ù            U        ÿÿÿÿV           ^  E         ø  E   ÿÿÿÿ   ÿÿÿÿ   -   this.NetUtil.ioServiceÁ                   -       ¹                                            ²`  ea  V            A%    QA;   5   ¸   
;   5   : 6    ÒÊ Y É<    ioService   CcC   @mozilla.org/network/io-service;1   getService   Ci   nsIIOService