çżsš                V     š   !   ˛                                      resource://gre/modules/media/PeerConnectionIdp.jsm     ;,                            Af    6    Q;   5      Q5      Q5      QQ;   ¸   
=   	: Q;   ¸   
=   
: Q;   ¸   
A=   =   : Q   :  Q;   Y      a      ]      ]      ]      ]      ]      	]      
]      ]      ]      ]      ]      ]      ]      ]      ]    6   QA;   6   QĘ	Ě.ę5
Ő1Ő3Ň1Ę$&ĘĘ+Ę0Ę?ĘFĘPĘ\ĘdĘ  Ę  Ę  žĘ  đĘ  ýĘ Ę 4Ę KĐ SĚ+ !   EXPORTED_SYMBOLS   Cc   Ci   Cu   Components   classes   interfaces   utils   importG   resource://gre/modules/Services.jsmK   resource://gre/modules/XPCOMUtils.jsm   XPCOMUtils-   defineLazyModuleGetter   IdpSandboxW   resource://gre/modules/media/IdpSandbox.jsm#   PeerConnectionIdp   prototype   enabled   _resetAssertion'   setIdentityProvider   start   close/   _getFingerprintsFromSdp#   _isValidAssertion'   _getIdentityFromSdp+   verifyIdentityFromSDP   _validateName!   _checkValidation   _verifyIdentity)   addIdentityAttribute)   getIdentityAssertion9   _wrapCrossCompartmentPromise   _applyTimeout                  #   PeerConnectionIdp                  ˙˙˙˙   #   PeerConnectionIdp                 2       š                                              win   timeout  ×  R               AT  6    QAT D   	QX6   QA@6   QA¸   
:  QĘÓČĚ 	   _win   _timeout   provider   _resetAssertion   ˙˙˙˙                     m       š   	   !                           	              pattern]  ô               ;    ;   =   =   R 6   Q=      Q;    ;   V   =   R 6   Q=   W   Q;    ;   V   =   R 6   QŐ"É ĘÔ%ÉĘÔ(É #   PeerConnectionIdp   _mLinePattern   RegExp   ^m=   mS   ^a=[iI][dD][eE][nN][tT][iI][tT][yY]:(\S+)!   _identityPatternw   ^a=[fF][iI][nN][gG][eE][rR][pP][rR][iI][nN][tT]:(\S+) (\S+)'   _fingerprintPattern   ˙˙˙˙   G   PeerConnectionIdp.prototype.enabledÁ                   
       š                                            '  G  '             A5      É 	   _idp   ˙˙˙˙   W   PeerConnectionIdp.prototype._resetAssertionÁ                          š                                             e  Ľ  +             A@6    QA@6   QČČ    assertion   idpLoginUrl   ˙˙˙˙   _   PeerConnectionIdp.prototype.setIdentityProviderÁ                        š   	   *                                        provider   protocol   username   Ç  '  0             A¸    
:  QAT  6   QAT D   Q=   6   QAT 6   QA5      3A5   ¸   
T  T :    A5   ¸   
:  QA;   T  T R 6   QĚĘŐĘÓ
9Ń;ÍÉ#    _resetAssertion   provider   protocol   default   username	   _idp   isSame	   stop   IdpSandbox   ˙˙˙˙   C   PeerConnectionIdp.prototype.startÁ                   "       š                                           f  ę  ?             A5    ¸   
:  ¸   
A    : ÍĘ@C	 	   _idp   start   catch   ˙˙˙˙   G   PeerConnectionIdp.prototype.start/<Ĺ                        š      	                                        e   ä  A             A5    5   T  5   =   R pŮ2 	   _win   DOMException   message   IdpError   ˙˙˙˙   C   PeerConnectionIdp.prototype.closeÁ                   A       š                                            ţ  Ą  F             A¸    
:  QA@6   QA@6   QA5      A5   ¸   
:  QA@6   QĚČČŃČ    _resetAssertion   provider   protocol	   _idp	   stop   ˙˙˙˙   g   PeerConnectionIdp.prototype._getFingerprintsFromSdpÁ               É       š      :                                      sdp   fingerprints   m Ç  .
  P             Y      QT  ¸    
;   5   :    Q   qm   V   >7Y   V   ?7]   V   ×7]   8QT  ¸   
V   5   V   >7Ů   : U  QT  ¸    
;   5   : W   QăV   ˙˙˙;   ¸   	
   : ¸   

A    : ËÔČ(wSĐËÎßÔČSËYŃÔ4    match#   PeerConnectionIdp'   _fingerprintPattern   algorithm   digest   substring   index   length   Object	   keys   map   ˙˙˙˙   k   PeerConnectionIdp.prototype._getFingerprintsFromSdp/<ĺ                        š                                               k 
  (
  Y                   T  7.Ď     ,   w      ˙˙˙˙   [   PeerConnectionIdp.prototype._isValidAssertionÁ                 p       š                                              assertion N
  A  \             T  E   kQT  5    E   ]QT  5    5   Ĺ=   HE   CQT  5    5    D   QT  5    5   Ĺ=   HE   QT  5   Ĺ=   H×ÚÔÚĐ(    idp   domain   string   protocol   assertion   ˙˙˙˙   _   PeerConnectionIdp.prototype._getIdentityFromSdpÁ                    š      [                                     sdp   idMatch   mLineMatch   assertion c  ­  d                QT  ¸    
;   5   :   QV     E  QT  ¸   
>V  5   :   QV  ¸    
;   5   : W   QČV         Q;   ¸   
;   â   V   ?7: : W  Q   7  Qv  QA5   	5   
=   V  =   R pČ    A¸   
V  :     A5   	5   
=   =   R pV  fÔČË
ÔČŐ
Élp(Ü˙˙˙őÍĚÖtËwĚŃx{    match#   PeerConnectionIdp   _mLinePattern   substring   index!   _identityPattern	   JSON   parse	   atob	   _win   DOMException9   invalid identity assertion: =   InvalidSessionDescriptionError#   _isValidAssertionU   assertion missing idp/idp.domain/assertion    ˙˙˙˙         sessionLevel        ˙˙˙˙         e         ~   ,       ,   ?   ˙˙˙˙   Ť   +   ˙˙˙˙   ˙˙˙˙   c   PeerConnectionIdp.prototype.verifyIdentityFromSDPÁ                      š      (                                        sdp   origin   identity   fingerprints  Đ  h         	      A¸    
T  :    QA¸   
T  :   QV    D   QV  Ů   >   A5   5   ¸   
:  A¸   
V   5   5   V   5   5   	: QA¸   

V   5   V  T : ËČËČÖŇčŘ? '   _getIdentityFromSdp/   _getFingerprintsFromSdp   length	   _win   Promise   resolve'   setIdentityProvider   idp   domain   protocol   _verifyIdentity   assertion   ˙˙˙˙   S   PeerConnectionIdp.prototype._validateNameÁ               :      š      i                                    	   name   error   atIdx	   tail   provider   providerPortIdx   idnService .                 A       QT  '=    I   V   =   : QT  ¸   
=   :   QV  >   V   =   : QT  ¸   
V  ?:   QA5     QV  ¸   
=   :   QV  >   V  ¸   
>V  : W  Q;   5   	5   
¸   
;   5   5   :   QV  ¸   
V  : V  ¸   
V  : I   1V   =   ;   5   =   A5   =   : QË  ĘÎĎČÎĐČËĐČĐČÖĎ  °ČĎĎŐÓ  ´=    string#   name not a string   indexOf   @E   missing authority in name from IdP   substring   provider   :   Components   classesE   @mozilla.org/network/idn-service;1   getService   interfaces   nsIIDNService!   convertUTF8toACE   name "   identity	   name-   " doesn't match IdP: "   "   ˙˙˙˙   _   PeerConnectionIdp.prototype._validateName/errorĹ                        š                                              msg G  Ô               A5    5   =   T  =   R pŐ  5 	   _win   DOMException-   assertion name error:    IdpError   ˙˙˙˙   Y   PeerConnectionIdp.prototype._checkValidationÁ              [      š      y                                     validation   sdpFingerprints   error   fingerprints   isFingerprint   isSubsetOf'   compareFingerprints    ž  ž             A       QA5        V   =   : QT  '=   ID   *QT  5   Ĺ=   ID   QT  5   Ĺ=   I   V   =   : Q  Q;   ¸   
T  5   : 5   	W  Q   &  Qv  QV   =   
: QČ    A     Q;   ¸   
V  :  D   QV  ¸   
V  :     V   =   : QA     QA     QV  V  T V  :     V   =   : QA¸   
T  5   : QT  Ë  ÄÎĐŐĎÎ"ÔŇĚŐËĐĘĎÎ  ŢË  ăËĐÎÔ    provider   IdP closed   object   contents   string   identityC   no payload in validation response	   JSON   parse   fingerprint   invalid JSON   Array   isArray   every   fingerprints must be an array of objects with digest and algorithm attributesc   the fingerprints must be covered by the assertion   _validateName   ˙˙˙˙   e   PeerConnectionIdp.prototype._checkValidation/errorĹ                        š                                              msg 2  ť  ż             A5    5   =   T  =   R pŐ  Ŕ3 	   _win   DOMException-   IdP validation error:    IdpError    ˙˙˙˙         e       ˙˙˙˙   u   PeerConnectionIdp.prototype._checkValidation/isFingerprintĺ                 &       š                                              f s  Ë  Ő             T  5    Ĺ=   HE   QT  5   Ĺ=   H	Ő	Đ    digest   string   algorithm   ˙˙˙˙   o   PeerConnectionIdp.prototype._checkValidation/isSubsetOfĹ                        š                                      @      outerSet   innerSet   comparator Ý  j  Ţ             T ¸    
A    : Đ	    every   ˙˙˙˙   s   PeerConnectionIdp.prototype._checkValidation/isSubsetOf/<Ĺ                        š      	                                @      i  b  ß               ¸    
A    : Ň% 	   some   ˙˙˙˙   w   PeerConnectionIdp.prototype._checkValidation/isSubsetOf/</<ĺ                        š                                               o C  X  ŕ                  T  : "Ň    ˙˙˙˙      PeerConnectionIdp.prototype._checkValidation/compareFingerprintsĹ                 *       š                                              a   b    â  ă             T  5    T 5    HE   QT  5   T 5   Hé@    digest   algorithm     s   &            ˙˙˙˙   ˙˙˙˙   W   PeerConnectionIdp.prototype._verifyIdentityÁ               A       š      (                                @      assertion   fingerprints   origin   p!  ?  đ             A¸    
:  ¸   
A    : ¸   
A   :    QA¸   
V   : ČĘ  ńĘ  ńČ  öĚ    start	   then   _applyTimeout   ˙˙˙˙   ]   PeerConnectionIdp.prototype._verifyIdentity/p<ĺ                 $       š                                              idp l  É  ň             A¸    
T  ¸   
      : : ČÔ
  ň3 9   _wrapCrossCompartmentPromise#   validateAssertion   ˙˙˙˙   ]   PeerConnectionIdp.prototype._verifyIdentity/p<ĺ                        š                                              validation Ů    ô             A¸    
T     : Ô/ !   _checkValidation   ˙˙˙˙   a   PeerConnectionIdp.prototype.addIdentityAttributeÁ               o       š                                               sdp   match    R!  ý             A5        	T  T  ¸   
;   5   :    QT  ¸   
>V   5   : =   A5    =   T  ¸   
V   5   : ÔČÔÓÓ    assertion   match#   PeerConnectionIdp   _mLinePattern   substring   index   a=identity:   
   ˙˙˙˙   a   PeerConnectionIdp.prototype.getIdentityAssertionÁ                     š      g                                @      fingerprint   origin   algorithm   digest   content   p ˇ"  ´&        
      A5        A5   5   =   =   R pT  ¸   
=   ×: - Á
:  ¸   
:  5      Q   
5   	   Q¸   
:  5      Q   
5   	  QQQY   Z  Y   V   ]   
V  ]   `   ]      QA¸   
:  QA¸   
:  ¸   
A    : ¸   
A   :   QA¸   
V  : ĚĘ ŃÔ˙˙˙ęÉçŘÉŘĚČĘ Ę Č ,Ě    enabled	   _win   DOMExceptionc   no IdP set, call setIdentityProvider() to set one#   InvalidStateError   split    	   next	   done   value   algorithm   digest   fingerprint   _resetAssertion   start	   then   _applyTimeout   ˙˙˙˙   g   PeerConnectionIdp.prototype.getIdentityAssertion/p<ĺ                 >       š                                 
             idp V$  đ$        
      A¸    
T  ¸   
;   ¸   
      :    A5   : : Čŕ Ë  
 7 9   _wrapCrossCompartmentPromise#   generateAssertion	   JSON   stringify   username   ˙˙˙˙   g   PeerConnectionIdp.prototype.getIdentityAssertion/p<Ĺ                 \       š   	   (                                        assertion  %  &  "            A¸    
T  :     A5   5   =   =   R pA;   â   ;   ¸   
T  : : 6   QA5   ËŃ $
Ú˙˙˙űÉ
 #   _isValidAssertion	   _win   DOMException?   IdP generated invalid assertion   IdpError   assertion	   btoa	   JSON   stringify   ˙˙˙˙   q   PeerConnectionIdp.prototype._wrapCrossCompartmentPromiseÁ                        š                                      @      sandboxPromiseĂ'   *  4            A5    5   A    R Ň C 	   _win   Promise   ˙˙˙˙   u   PeerConnectionIdp.prototype._wrapCrossCompartmentPromise/<Ĺ                        š                                      @      resolve   reject÷'  *  5              ¸    
A    A   : QŇ 6 B 	   then   ˙˙˙˙   y   PeerConnectionIdp.prototype._wrapCrossCompartmentPromise/</<ĺ                 #       š                                              result 1(  c(  6      	         ;    ¸   
T  A5   : : Ű˙˙˙ř(    Cu   cloneInto	   _win   ˙˙˙˙   y   PeerConnectionIdp.prototype._wrapCrossCompartmentPromise/</<Ĺ               ś       š      1                                        e   message m(  *  7            =    T  5   D   #Q;   ¸   
T  : D   Q=      QT  5   =   H   OT  5   Ĺ=   H   AT  5   6   	Q   A5   
5   V   =   R : Q   '   A5   
5   V   =   R : QâÔÎJĎĎŰ˙˙˙ůÉŰ˙˙˙ů8       message	   JSON   stringify   IdP error	   name   IdpLoginError   loginUrl   string   idpLoginUrl	   _win   DOMException   IdpError   ˙˙˙˙   S   PeerConnectionIdp.prototype._applyTimeoutÁ               T       š      &                          	             p   timeout +  
,  K            A5    5   A    R ¸   
A   :    QA5    5   ¸   
Z  V   `   T  `  : Ň
Ę LČ QÖ Č	˙˙˙Ţ' 	   _win   Promise	   then	   race   ˙˙˙˙   e   PeerConnectionIdp.prototype._applyTimeout/timeout<ĺ                        š                                              r <+  g+  L            A5    ¸   
T  A5   : Ú& 	   _win   setTimeout   _timeout   ˙˙˙˙   e   PeerConnectionIdp.prototype._applyTimeout/timeout<Ĺ                          š      	                                      w+  Ń+  N            A5    5   =   =   R p
Ö8 	   _win   DOMException   IdP timed out   IdpError