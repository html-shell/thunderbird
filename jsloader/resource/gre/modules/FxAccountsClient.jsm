çżsš                Ć     š   &   ş                          $            resource://gre/modules/FxAccountsClient.jsm     L3                            Af    6    Q;   5      Q5      Q5      QQ;   ¸   
=   	: Q;   ¸   
=   
: Q;   ¸   
=   : Q;   ¸   
=   : Q;   ¸   
=   : Q;   ¸   
=   : Q;   ¸   
=   : Q;   ¸   
=   : Q;   ¸   
=   : Q;   5   ¸   
=   :    QA   6   QA5   Y      a      ]      ]      ]      ]      ]      ]      	]       
]   !   ]   "   ]   #   ]   $   ]   %6   QĚ-ę5	Ő,Ő0Ő1Ő1Ő6Ő7Ő1Ő8Ő4ÖÉ˙˙˙ýĚ "Ë-Ę7ĘJĘmĘ  Ę  ŤĘ  ˇĘ  ÉĘ  úĘ Ę -Ę 9Ę TĐ | !   EXPORTED_SYMBOLS   Cc   Ci   Cu   Components   classes   interfaces   utils   import=   resource://gre/modules/Log.jsmE   resource://gre/modules/Promise.jsmG   resource://gre/modules/Services.jsmG   resource://services-common/utils.jsQ   resource://services-common/hawkclient.jsS   resource://services-common/hawkrequest.jsG   resource://services-crypto/utils.jsU   resource://gre/modules/FxAccountsCommon.jsM   resource://gre/modules/Credentials.jsm	   HOST   Services   prefs   getCharPref9   identity.fxaccounts.auth.uri!   FxAccountsClient   prototype'   localtimeOffsetMsec   now   signUp   signIn   signOut'   recoveryEmailStatus/   resendVerificationEmail   accountKeys   signCertificate   accountExists   accountStatus   _clearBackoff   _request                  !   FxAccountsClient                  ˙˙˙˙   +   this.FxAccountsClientÁ                 J       š                                            	   host w  č               T  H   ;    U  QAT  6   QA;   T  R 6   QA5   =   6   QA@6   QÎĘĘÉŃČ 	   HOST	   host	   hawk   HawkClient   observerPrefix   FxA:hawk   backoffError   ˙˙˙˙   g   this.FxAccountsClient.prototype.localtimeOffsetMsecÁ                          š                                            Ď    -             A5    5   Ě% 	   hawk'   localtimeOffsetMsec   ˙˙˙˙   G   this.FxAccountsClient.prototype.nowÁ                          š      	                                      Ż  Ó  7             A5    ¸   
:  Í 	   hawk   now   ˙˙˙˙   M   this.FxAccountsClient.prototype.signUpÁ                 '       š                                             email   password  ¨	  ź
  J             ;    ¸   
T  T : ¸   
A    : ŇÔQ    Credentials   setup	   then   ˙˙˙˙   Q   this.FxAccountsClient.prototype.signUp/<Ĺ               O       š                                              creds	   data ď	  ś
  K             Y   T  5    ]   ;   ¸   
T  5   : ]      QA¸   
=   =   @V   : 
ÍÔÍP×5    emailUTF8   email   CommonUtils   bytesAsHex   authPW   _request   /account/create	   POST   ˙˙˙˙      signIn                 O       š                                      @      email   password   getKeys   retryOK !  O  m                H   B   Q   H   C   Q;    ¸   
T     : ¸   
A    : ÓĚÔÔ      Credentials   setup	   then   ˙˙˙˙      signIn/<Ĺ                      š      +                                @      creds	   data	   keys  I  n             Y   ;    ¸   
   5   : ]      5   ]      Q     =      
=      QA¸   
=   V   =   	@   : ¸   

A    A   : 
ÖČŐs

ŮuÝĐ}u      CommonUtils   bytesAsHex   authPW   emailUTF8   email   ?keys=true      _request   /account/login	   POST	   then   ˙˙˙˙      signIn/</<Ĺ                 ?       š                                              result   š  u             T        5    6    QT  ;   ¸   
   5   : 6   QT  x
Ř
ŮÉ|
    email   unwrapBKey   CommonUtils   bytesAsHex   ˙˙˙˙      signIn/</<Ĺ                        š      -                                        error Ă  :  }             ;    ¸   
=   ;   ¸   
T  : : Q;   T  5   HE   Q     KT  5       ;    ¸   
=   	: QT  pA¸   

T  5       B: T  p
ŕ˙˙˙ă  ŮÉŐŰ
    log   debug   signIn error: 	   JSON   stringify5   ERRNO_INCORRECT_EMAIL_CASE   errno   email   errorg   Server returned errno 120 but did not provide email   signIn   ˙˙˙˙   O   this.FxAccountsClient.prototype.signOutÁ                 ,       š                                              sessionTokenHex   Ľ               A¸    
=   =   ;   â   T  =   : : ŇŇ   >    _request!   /session/destroy	   POST+   deriveHawkCredentials   sessionToken   ˙˙˙˙   g   this.FxAccountsClient.prototype.recoveryEmailStatusÁ                 ,       š                                              sessionTokenHex     Ť             A¸    
=   =   ;   â   T  =   : : ŇŇ  Ź>    _request-   /recovery_email/status   GET+   deriveHawkCredentials   sessionToken   ˙˙˙˙   o   this.FxAccountsClient.prototype.resendVerificationEmailÁ                 ,       š                                              sessionTokenHex ×  m  ˇ             A¸    
=   =   ;   â   T  =   : : ŇŇ  ¸>    _request7   /recovery_email/resend_code	   POST+   deriveHawkCredentials   sessionToken   ˙˙˙˙   W   this.FxAccountsClient.prototype.accountKeysÁ               Â       š      =                                    !   keyFetchTokenHex   creds   keyRequestKey   morecreds   respHMACKey   respXORKey /     É             ;    â    T  =   :    QV   5   ¸   
>× :   Q;   ¸   
V  ;   ;   ¸   
=   	: ×`:   QV  ¸   
>× :    QV  ¸   
× ×`:    QA¸   

=   =   V   : ¸   
A    : ŇČÓČŐŃ%  ĚČÎÉĎÉÖÔ  ç +   deriveHawkCredentials   keyFetchToken   extra   slice   CryptoUtils	   hkdf   undefined   Credentials   keyWord   account/keys   _request   /account/keys   GET	   then   ˙˙˙˙   [   this.FxAccountsClient.prototype.accountKeys/<Ĺ               1      š      g                           $          	   resp   bundle   mac   hasher   bundleMAC   keyAWrapB ě     Ń             T  5        ;   =   R p;   ¸   
T  5    :    QV   ¸   
×ŕ:   Q;   ¸   
;   5   	5   
;   ¸   
      : :   Q;   ¸   
V   ¸   
>×ŕ: V  :   QV  V  I   ;   =   R p;   ¸   
      V   ¸   
>×@: :   QY   V  ¸   
>× : ]   V  ¸   
× : ]   
ÉË
Ô	Č
ÍČ
ŰÖ  ŮČ
Ú$˙˙˙čČÉË
ä(˙˙˙äČÎČÍÉ    bundle   Error/   failed to retrieve keys   CommonUtils   hexToBytes   slice   CryptoUtils   makeHMACHasher   Ci   nsICryptoHMAC   SHA256   makeHMACKey   digestBytesA   error unbundling encryption keys   xor   kA   wrapKB   ˙˙˙˙   _   this.FxAccountsClient.prototype.signCertificateÁ                m       š      4                          	             sessionTokenHex'   serializedPublicKey   lifetime   creds	   body   F#  0%  ú             ;    â    T  =   :    QY   T ]   T ]      Q;   ¸   
:  ¸   
A    : ¸   
A   A   : ŇÉ	ČÎĚĘ  ˙ĘĚ  ˙  +   deriveHawkCredentials   sessionToken   publicKey   duration   Promise   resolve	   then   ˙˙˙˙   c   this.FxAccountsClient.prototype.signCertificate/<ĺ                 +       š                                              _ C$  $               A¸    
=   =               : ę7    _request#   /certificate/sign	   POST   ˙˙˙˙   c   this.FxAccountsClient.prototype.signCertificate/<ĺ                 
       š                                           	   resp $  $              T  5    É	 	   cert   ˙˙˙˙   c   this.FxAccountsClient.prototype.signCertificate/<Ĺ                 -       š                                              err Ź$  *%              ;    ¸   
=   ;   ¸   
T  : : QT  pŕ+˙˙˙Ő
    log   error9   HAWK.signCertificate error: 	   JSON   stringify   ˙˙˙˙   [   this.FxAccountsClient.prototype.accountExistsÁ                 +       š                                             email ]&  w(              A¸    
T  =   : ¸   
A    A   : ĐĐ  $    signIn   	   then   ˙˙˙˙   _   this.FxAccountsClient.prototype.accountExists/<Ĺ                        š      
                                        cantHappen &  ô&              ;    =   R pË7    ErrorS   How did I sign in with an empty password?   ˙˙˙˙   _   this.FxAccountsClient.prototype.accountExists/<Ĺ                 :       š      *                                        expectedError ü&  l(              T  5    x;   y   ;   y   z   B   C   T  p   Čh1u
uĘ XXX	    errno9   ERRNO_ACCOUNT_DOES_NOT_EXIST1   ERRNO_INCORRECT_PASSWORD   ˙˙˙˙   [   this.FxAccountsClient.prototype.accountStatusÁ                 1       š                                             uid p)  z*  -            A¸    
=   T  =   : ¸   
A    A   : ÖĐ . 6    _request)   /account/status?uid=   GET	   then   ˙˙˙˙   _   this.FxAccountsClient.prototype.accountStatus/<Ĺ                 
       š                                              result Ŕ)  ó)  .            T  5    É    exists   ˙˙˙˙   _   this.FxAccountsClient.prototype.accountStatus/<Ĺ                 -       š                                              error ű)  o*  1            ;    ¸   
=   T  : Q;   ¸   
T  : ŮĎ    log   error7   accountStatus failed with:    Promise   reject   ˙˙˙˙   [   this.FxAccountsClient.prototype._clearBackoffÁ                   	       š                                             *  ž*  9            A@6    QČ    backoffError   ˙˙˙˙      hawkRequest                       š      4                                @   	   path   method   credentials   jsonPayload   deferred  .  F3  T            ;    ¸   
:     QA5      ;;   ¸   
=   : Q   ¸   
A5   : Q   5   A5   ¸   	
      T T : ¸   

A    A   : Q   5   ĚÉŐÖËí g ^ zË    Promise   defer   backoffError   log   debuge   Received new request during backoff, re-rejecting.   reject   promise	   hawk   request	   then   ˙˙˙˙      hawkRequest/<Ĺ                       š      &                                     response ţ/  1  ^               Q;    ¸   
T  5   :    Q      ¸   
V   : QČ   Y   Qv   Q;   ¸   
=   T  5   : Q      ¸   
Y   V   ]   : QČ    =ÔČ
ßĚ
Ţ
ÖÉ˙˙˙ďË	 	   JSON   parse	   body   resolve   log   error=   json parse error on response:    reject    ˙˙˙˙          responseObj        ˙˙˙˙          err            A          ;   ˙˙˙˙   C   M   ˙˙˙˙   ˙˙˙˙      hawkRequest/<Ĺ                 ­       š      4                                        error 1  3  g            ;    ¸   
=      =      =   ;   ¸   
T  : : QT  5      L;    ¸   
=   	: QAT  6   
Q;   ¸   
A5   T  5   XčA=   : Q      ¸   
T  : Qř5˙˙˙ËČ
Ő
Ę
ĚĚ o
 vŘ    log   error   error 	   ing    : 	   JSON   stringify   retryAfter   debugc   Received backoff response; caching error as flag.   backoffError   CommonUtils   namedTimer   _clearBackoff   fxaBackoffTimer   reject