çżsš                     š   (   Ę                                      resource://gre/components/crypto-SDR.js              	                        %;   5       Q;   5      Q;   5      Q;   5   ¸   
=   	: Q;   5   ¸   
=   
: Q;   Y   ;   ¸   
=   : ]   ;   ¸   
Z  ;   5   `   : ]   @]      a   @]      a   @]      a      ]   B]   B]      ]      ]      ]      ]       	a   !   
a   "   a   #   ]   $6   Qn   %Z  ;   `   o   %QA;   ¸   '
;   %: 6   &QĘ	  ÜĐĐĐ
ÚAÚ?ĘŃ
ČĐ(Î˙˙˙éČĘ Ę(Ę2Ę6?ĘGĘbĘ  Ę  ˇĘ  żĘ  ÎĘ  ÖĐÉĎ˙˙˙üŇÉ+    Cc   Components   classes   Ci   interfaces   Cr   results   utils   importK   resource://gre/modules/XPCOMUtils.jsmG   resource://gre/modules/Services.jsm-   LoginManagerCrypto_SDR   prototype   IDM   {dc6c2976-0f73-4f1f-b9ff-3d72b4e28309}   classID   XPCOMUtils   generateQI+   nsILoginManagerCrypto   QueryInterface   __sdrSlot   _sdrSlot   __decoderRing   _decoderRing   __utfConverter   _utfConverter%   _utfConverterReset   _debug   _uiBusy   log	   init   encrypt   decrypt   uiBusy   isLoggedIn   defaultEncType!   _notifyObservers   component   NSGetFactory)   generateNSGetFactory   ˙˙˙˙   -   LoginManagerCrypto_SDR                          š                                            Ň  ç               A¸    
:  QĚ 	   init   ˙˙˙˙   S   LoginManagerCrypto_SDR.prototype._sdrSlotÁ                  X       š                               
           ĺ  Ô               A5        I   Q;   5   ¸   
;   5   :    QAV   ¸   
=   : 6    QČA5    Ë
ŃĘČŃĘ    __sdrSlot   CcM   @mozilla.org/security/pkcs11moduledb;1   getService   Ci#   nsIPKCS11ModuleDB   findSlotByName       ˙˙˙˙          modules           C   ˙˙˙˙   ˙˙˙˙   [   LoginManagerCrypto_SDR.prototype._decoderRingÁ                   9       š                                            !  ă  !             A5        *A;   5   ¸   
;   5   : 6    QA5    ŇĘ#É%    __decoderRing   Cc7   @mozilla.org/security/sdr;1   getService   Ci)   nsISecretDecoderRing   ˙˙˙˙   ]   LoginManagerCrypto_SDR.prototype._utfConverterÁ                   J       š                                 	           6  O  )             A5        ;A;   5   ¸   
;   5   : 6    QA5    =   6   QA5    ŇĘ+É-Ń/    __utfConverter   CcY   @mozilla.org/intl/scriptableunicodeconverter   createInstance   Ci;   nsIScriptableUnicodeConverter   charset   UTF-8   ˙˙˙˙   g   LoginManagerCrypto_SDR.prototype._utfConverterResetÁ                   	       š                                             q    2             A@6    QČ    __utfConverter   ˙˙˙˙   I   LoginManagerCrypto_SDR.prototype.logÁ                 J       š                                              message N  ÷  ?             A5        ;   â   =   T  =   : Q;   5   ¸   
=   T  : QÝŢA    _debug	   dump#   PwMgr cryptoSDR:    
   Services   console!   logStringMessage   ˙˙˙˙   K   LoginManagerCrypto_SDR.prototype.initÁ                 Ś       š      2                                         tokenDB   token  Q
  G             A;   5   ¸   
=   : 6    QAA5    ¸   
=   : 6   Q;   5   	¸   

;   5   :    QV   ¸   
:    QV  5      *A¸   
=   : QV  ¸   
=   : QI×ÉKÓÉOŃĘOČRËČÉŃÔ    _prefBranch   Services   prefs   getBranch   signon.   _debug   getBoolPref   debug   CcG   @mozilla.org/security/pk11tokendb;1   getService   Ci   nsIPK11TokenDB'   getInternalKeyToken   needsUserInit   logc   Initializing key3.db with default blank password.   initPassword      ˙˙˙˙   Q   LoginManagerCrypto_SDR.prototype.encryptÁ              o      š      e                                     plainText   cipherText   wasLoggedIn   canceledMP $  Ł  b             @   QA5      QB  QAC6   Q  QA5   ¸   
T  :   QV  A5   ¸   
:  W  QA5   ¸   
V  : W   QČt   ¤   đ  Qv  QA¸   
=   V  5   	=   
: QV  5   ;   5      /CW  Q;   ¸   
=   ;   5   : p   $;   ¸   
=   ;   5   : pČt   
   VAB6   QV   E   QA5       A¸   
=   : Q   V     A¸   
=   : Qu V   eËhČX
ĐČŃ{ŃÓĚáqÔ*ŰÉŰĎwČz
ŃÖÓ    isLoggedIn   _uiBusy   _utfConverter%   ConvertFromUnicode   Finish   _decoderRing   encryptString   log7   Failed to encrypt string. (	   name   )   result   Cr!   NS_ERROR_FAILURE   Components   ExceptionG   User canceled master password entry   NS_ERROR_ABORT/   Couldn't encrypt string!   _notifyObservers1   passwordmgr-crypto-loginA   passwordmgr-crypto-loginCanceled    ˙˙˙˙         plainOctet        ˙˙˙˙         e            ö            \       !   Q   ˙˙˙˙   }      ˙˙˙˙   ˙˙˙˙   Q   LoginManagerCrypto_SDR.prototype.decryptÁ              q      š      u                                     cipherText   plainText   wasLoggedIn   canceledMP v  Ę               @   QA5      QB  QAC6   Q  Q  QA5   ¸   
T  : W  QA5   ¸   
V  : W   QČt   ş    Qv  QA¸   
=   T  =   V  5   	=   
: QA¸   
:  QV  5   ;   5      /CW  Q;   ¸   
=   ;   5   : p   $;   ¸   
=   ;   5   : pČt   
   VAB6   QV   E   QA5       A¸   
=   : Q   V     A¸   
=   : Qu V   ËČD
ĐČŃÓĚŃÖ  Ě  ĄÔ*ŰÉŰĎČ
ŃÖÓ    isLoggedIn   _uiBusy   _decoderRing   decryptString   _utfConverter!   ConvertToUnicode   log5   Failed to decrypt string:     (	   name   )%   _utfConverterReset   result   Cr-   NS_ERROR_NOT_AVAILABLE   Components   ExceptionG   User canceled master password entry   NS_ERROR_ABORT/   Couldn't decrypt string!   NS_ERROR_FAILURE!   _notifyObservers1   passwordmgr-crypto-loginA   passwordmgr-crypto-loginCanceled    ˙˙˙˙         plainOctet        ˙˙˙˙         e            ř            H       !   =   ˙˙˙˙   i   Ľ   ˙˙˙˙   ˙˙˙˙   O   LoginManagerCrypto_SDR.prototype.uiBusyÁ                          š                                            ń    ˇ             A5        _uiBusy   ˙˙˙˙   W   LoginManagerCrypto_SDR.prototype.isLoggedInÁ                        š                                               statusA  ş  ż             A5    5      QA¸   
=   V   : QV   ;   5   5   D   QV   ;   5   5      CV   ;   5   5      B;   	¸   

=   V   ;   5   : pĐÖÚÔÔŕO    _sdrSlot   status   log'   SDR slot status is    Ci   nsIPKCS11Slot   SLOT_READY   SLOT_LOGGED_IN%   SLOT_NOT_LOGGED_IN   Components   Exception1   unexpected slot status:    Cr!   NS_ERROR_FAILURE   ˙˙˙˙   _   LoginManagerCrypto_SDR.prototype.defaultEncTypeÁ                          š                                            ń  *  Î             ;    5   5   Đ,    Ci+   nsILoginManagerCrypto   ENCTYPE_SDR   ˙˙˙˙   c   LoginManagerCrypto_SDR.prototype._notifyObserversÁ                 0       š                                              topic l  ö  Ö             A¸    
=   T  : Q;   5   ¸   
@T  @: QŐÚ0    log]   Prompted for a master password, notifying for    Services   obs   notifyObservers