ç¿s¹                 7   ¹   4   ü                        A       0     resource://gre/modules/Credentials.jsm     ¿         	                                        %Af    0    Q;   5      Q5      QQ;   ¸   
=   : Q;   ¸   
=   : Q;   ¸   
=   	: Q;   ¸   
=   
: Q;   ¸   
=   : Q=      QXè   Q×    Q;   ¸   
=   :    Q×    Q;   5   5      Q×    Q=      QA;   5   ¸   
;   : ;   5   5    E   Q;   5   ¸   !
;   : 0   Q   .   Qv   QA;   "5   #5   $0   QÈ    n   %;   "5   &¸   '
=   (: 1   %Q;   %;   0   )Q;   %¸   *
;   "5   +;   "5   ,R  R : QA;   .¸   /
Y   Y   ;   ]   ;   ]   ;   ]   ;   ]   ;   ]   ;   ]   ;   ]   ]   0   ]   1   ]   2   ]   3: 0   -Q#,Ì(Þ(Õ,Õ1Õ0Õ1Õ1ËÉÈÑÉÿÿÿýÈÕÈ#ËPÖÙÖÎÌÝ,ÛÉÿÿÿýÐâ(ÿÿÿèÿÿÿðC0Ò4ÊÊÊÊÊÊÏKÊ\Ê`Ê0É   !   EXPORTED_SYMBOLS   Cu   Ci   Components   utils   interfaces   import=   resource://gre/modules/Log.jsmG   resource://gre/modules/Services.jsmE   resource://gre/modules/Promise.jsmG   resource://services-crypto/utils.jsG   resource://services-common/utils.js!   PROTOCOL_VERSION;   identity.mozilla.com/picl/v1/   PBKDF2_ROUNDS3   STRETCHED_PW_LENGTH_BYTES   HKDF_SALT   CommonUtils   hexToBytes   00   HKDF_LENGTH   HMAC_ALGORITHM   nsICryptoHMAC   SHA256   HMAC_LENGTH   PREF_LOG_LEVEL9   identity.fxaccounts.loglevel   LOG_LEVEL   Services   prefs   getPrefType   nsIPrefBranch   PREF_STRING   getCharPref   Log   Level   Error   log   repository   getLogger'   Identity.FxAccounts   level   addAppender   ConsoleAppender   BasicFormatter   Credentials   Object   freeze   constants   keyWord   keyWordExtended   setup                     Credentials                   ÿÿÿÿ          e       ÿÿÿÿ   3   this.Credentials<.keyWordÁ                        ¹      	                                       context 0	  	  K             ;    ¸   
;   T  : Õ6    CommonUtils   stringToBytes!   PROTOCOL_VERSION   ÿÿÿÿ   C   this.Credentials<.keyWordExtendedÁ                 $       ¹      	                                    	   name   email  W  ·  \             ;    ¸   
;   T  =   T : ßA    CommonUtils   stringToBytes!   PROTOCOL_VERSION   :   ÿÿÿÿ   /   this.Credentials<.setupÁ               |      ¹       d                          $            emailInput   passwordInput   options   deferred   hkdfSalt   hkdfLength   hmacLength   hmacAlgorithm#   stretchedPWLength   pbkdf2Rounds   result   password	   salt   runnable   Ë  ¹  `             T H   Y   U Q;    ¸   
:     Q;   ¸   
=   T  : QT 5   D   Q;      QT 5   D   Q;      QT 5   	D   Q;   
   QT 5   D   Q;      QT 5   D   Q;      QT 5   D   Q;      QY   T  ]   T ]      	Q;   ¸   
T :    
QA¸   
=   T  :    QA       Q;   5   5   ¸   
V   ;   5   5   : Q;   ¸   
=   : Q   5   ÎÌÉÙdÙÙÙÙÙÙkÈÎpÏÉÐÉsË  ÚÏ  ÕË    Promise   defer   log   debug-   setup credentials for    hkdfSalt   HKDF_SALT   hkdfLength   HKDF_LENGTH   hmacLength   HMAC_LENGTH   hmacAlgorithm   HMAC_ALGORITHM'   stretchedPassLength3   STRETCHED_PW_LENGTH_BYTES   pbkdf2Rounds   PBKDF2_ROUNDS   emailUTF8   passwordUTF8   CommonUtils   encodeUTF8   keyWordExtended   quickStretch   Services   tm   currentThread   dispatch   Ci   nsIThread   DISPATCH_NORMALg   Dispatched thread for credentials setup crypto work   promise   ÿÿÿÿ   A   this.Credentials<.setup/runnableÅ                 V      ¹      K                           '             start!   quickStretchedPW²  ø  s             ;    ¸   
:     Q;   ¸   
   
   
                              :   Q   	   	V  0   Q   	   	;   ¸   
V        A¸   
=   :       : 0   Q   	   	;   ¸   
V        A¸   
=   	:       : 0   Q;   
¸   
=   ;    ¸   
:  V   =   : Q      ¸   
   	   	: Q
ÌÈ
ÌüuÈxÔzÊç5ÍÿÿÿÓÉ}Êç5ÍÿÿÿÓÉÝ)Ïÿÿÿ×ß 	   Date   now   CryptoUtils   pbkdf2Generate!   quickStretchedPW   authPW	   hkdf   keyWord   unwrapBKey   unwrapBkey   log   debug3   Credentials set up after     ms   resolve     ú   T      O  "   ÿÿÿÿ