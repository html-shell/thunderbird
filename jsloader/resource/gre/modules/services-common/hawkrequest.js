çżsš                Ŕ  #   š   %   Ę                          #       0     resource://services-common/hawkrequest.js     ö                                   $   
;   5       Q5      Q5      Q5      QQAf    0   	Q;   ¸   

=   : Q;   ¸   

=   : Q;   ¸   

=   : Q;   ¸   

=   : Q;   ¸   

=   : Q;   ¸   

=   : Q;   ¸   

=   : Q;   ¸   
A=   =   : Q;   =   R    QA   0   Q;   Y   ;   5   Â   ]   0   QA   0   QA   0   QA5   Y      ]      ]       ]   !   ]   "   	a   #0   Qn   $@1   $Q  ¸Ę	öB	ĚŐ4Ő1Ő3Ő,Ő0Ő1Ő4ŇIËÉ˙˙˙ý5Ë@ĘËDĐ^xĚ    Ě  ËĘĘĘĘ  ŻĐ  ľĚ  ž    Cc   Ci   Cu   Cr   Components   classes   interfaces   utils   results!   EXPORTED_SYMBOLS   importM   resource://gre/modules/Preferences.jsmG   resource://gre/modules/Services.jsmK   resource://gre/modules/XPCOMUtils.jsm=   resource://gre/modules/Log.jsmE   resource://services-common/rest.jsG   resource://services-common/utils.jsM   resource://gre/modules/Credentials.jsm   XPCOMUtils-   defineLazyModuleGetter   CryptoUtilsG   resource://services-crypto/utils.js   Prefs   Preferences+   services.common.rest.9   HAWKAuthenticatedRESTRequest   prototype   RESTRequest   dispatch+   deriveHawkCredentials	   Intl	   init   uninit   observe   readPref!   accept_languages	   intl                  9   HAWKAuthenticatedRESTRequest   +   deriveHawkCredentials                  ˙˙˙˙   9   HawkAuthenticatedRESTRequest                 Ş       š      %                                       uri   credentials   extra   X  Ş  6             T H   Y   U Q;    ¸   
AT  l QAT 0   QAT 5   D   Q;   ¸   
:  0   QAT 5   D   Q>0   QA5   ¸   
=   A5   =   	A5   : QA;   â   :  0   
QÎÔ9ĘŰÉÖę?ËÉ
    RESTRequest	   call   credentials   now	   Date'   localtimeOffsetMsec	   _log   trace)   local time, offset:    ,    _intl   getIntl   ˙˙˙˙      dispatch              k      š      S                                     method	   data   onComplete   onProgress   contentType    	    D       
      =       QT  =   D   QT  =   D   QT  =      =   W   QA5      Ě  Q  QY   A5   ]   A5   ]   A5   ]   T E   Q;   ¸   	
T : D   Q=   
]   V   ]     Q;   ¸   
A5   T  V  :   QA¸   
=   V  5   : QA5   ¸   
=   V  5   : QČA¸   
=   V   : QA¸   
=   A5   5   : Q;   5   5   ¸   
AT  T T T l ĘçĘIŃ
ËËËŘÓÎQ
Ů	ČÚáVŐXÜZÖÍZ\    text/plain	   POST   PUT   PATCH!   application/json   credentials   now'   localtimeOffsetMsec	   JSON   stringify      payload   contentType   CryptoUtils   computeHAWK   uri   setHeader   Authorization   field	   _log   trace%   hawk auth header:    Content-Type   Accept-Language   _intl!   accept_languages   RESTRequest   prototype   dispatch	   call    ˙˙˙˙         options       header        M   Ĺ   ˙˙˙˙   ˙˙˙˙   +   deriveHawkCredentials                     š      P                                       tokenHex   context	   size   hexKey   token   out   result    Ű  B  x             T H   ×`U QT H   
BU Q;    ¸   
T  :    Q;   ¸   
V   ;   ;   ¸   
T : T :   QY   =   ]   T    +;    ¸   	
V  ¸   

× ×@: :    V  ¸   

× ×@: ]   ;    ¸   	
V  ¸   

>× : : ]     QT ×@   V  V  ¸   

×@: 0   QV  zËĎČä)˙˙˙ÝČĘ&ŕ%˙˙˙é×,ČÚ˙˙˙éÍŃÉ    CommonUtils   hexToBytes   CryptoUtils	   hkdf   undefined   Credentials   keyWord   sha256   algorithm   bytesAsHex   slice   key   id   extra   ˙˙˙˙   	   Intl                   l       š                                           X  p               A=   0    QAB0   QA;   5   ¸   
=   : 0   QA5   ;   5   	;   
¸   
=   : 70   QA¸   
:  QĚČ×ÉáĘĚ    _accepted      _everRead	   _log   Log   repository   getLogger7   Services.common.RESTRequest   level   Level   Prefs   get/   log.logger.rest.request	   init   ˙˙˙˙   1   this.Intl.prototype.initÁ                          š                                             é               ;    5   ¸   
=   AB: QÜA    Services   prefs   addObserver+   intl.accept_languages   ˙˙˙˙   5   this.Intl.prototype.uninitÁ                          š                                           ţ  H               ;    5   ¸   
=   A: QŰ=    Services   prefs   removeObserver+   intl.accept_languages   ˙˙˙˙   7   this.Intl.prototype.observeÁ                        š                                             subject   topic	   data   ^    Ą             A¸    
:  QĚ    readPref   ˙˙˙˙   9   this.Intl.prototype.readPrefÁ                  {       š      (                                  Ś  Ë  Ľ       	      AC0    QA;   5   ¸   
=   ;   5   : 5   0   Q   B   Qv   QA5   	¸   

=   ;   ¸   
V   : : QČ    Č0ŇĎ  ¨ÓĚâ?˙˙˙ÁË    _everRead   _accepted   Services   prefs   getComplexValue+   intl.accept_languages   Ci-   nsIPrefLocalizedString	   data	   _log   errorU   Error reading intl.accept_languages pref:    CommonUtils   exceptionStr    ˙˙˙˙          err         	   4       >   6   ˙˙˙˙   ˙˙˙˙   I   this.Intl.prototype.accept_languagesÁ                           š                                           ä  ?  Ż             A5        A¸   
:  QA5   Ě    _everRead   readPref   _accepted   ˙˙˙˙      getIntl                   &       š                                           ľ  ô  š             ;        n    ;   R  1    Q;    ËÉ 	   intl	   Intl