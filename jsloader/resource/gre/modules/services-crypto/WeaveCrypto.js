ç¿s¹                å  7   ¹   K                                        resource://gre/modules/services-crypto/WeaveCrypto.js     q         
                                        Af    6    Q;   5      Q;   5      Q;   5      Q;   5   ¸   	
=   
: Q;   5   ¸   	
=   : Q;   5   ¸   	
=   : QX    QX ¸   QX º   QX ¼   Q;      Q×    QX    QX    QA   6   Q;   Y   @]   C]   @]   @]   Y   @]   ;   ¸   
Z  ;   5   `   ;   5   `  : ]       ]   !]   "   ]   #@]   $@]   %@]   &@]   '   ]   (   ]   )   ]   *   ]   +@]   ,@]   ->]   .@]   />]   0@]   1@]   2>]   3   ]   4   	]   5   
]   6   ]   7   ]   8   ]   9   ]   :   ]   ;   ]   <   ]   =Y   ]   >Y   ]   ?   ]   @   ]   A   ]   B   ]   C   ]   D   ]   E   ]   F@]   G@]   H   ]   I   ]   J6   QÌ(ÐÐÐÚAÚ?Ú=ÉÉÉÉË	ÈÉÉÌ!Ê'*Ð(Î0Î*È-Ï6ÊNSÊfÊtÊ{Ê bÊ uÊ ~Ê Ê Ê ¥Ê ¿Ê øÊ ÊÊ -ÊÊÊ dÊ mÊ vÊ Ê Ê Ê  Ê ¸Ð ó !   EXPORTED_SYMBOLS   Cc   Components   classes   Ci   interfaces   Cr   results   utils   importK   resource://gre/modules/XPCOMUtils.jsmG   resource://gre/modules/Services.jsmC   resource://gre/modules/ctypes.jsm   DES_EDE3_CBC   AES_128_CBC   AES_192_CBC   AES_256_CBC   ALGORITHM   KEYSIZE_AES_2563   KEY_DERIVATION_ITERATIONS'   INITIAL_BUFFER_SIZE   WeaveCrypto   prototype   prefBranch   debug   nss   nss_t   _self   XPCOMUtils   generateQI   nsIObserver1   nsISupportsWeakReference   QueryInterface   observe   observer	   init9   _commonCryptSignedOutputSizeA   _commonCryptSignedOutputSizeAddr=   _commonCryptUnsignedOutputSizeE   _commonCryptUnsignedOutputSizeAddr   initSharedInts+   initAlgorithmSettings   log   initNSS%   _sharedInputBuffer-   _sharedInputBufferInts-   _sharedInputBufferSize'   _sharedOutputBuffer/   _sharedOutputBufferSize#   _randomByteBuffer+   _randomByteBufferAddr+   _randomByteBufferSize   _getInputBuffer!   _getOutputBuffer)   _getRandomByteBuffer   initBuffers   encrypt   decrypt   _commonCrypt#   generateRandomKey!   generateRandomIV'   generateRandomBytes+   _encryptionSymKeyMemo+   _decryptionSymKeyMemo   importSymKey!   byteCompressInts   byteExpand   expandData   encodeBase64   makeSECItem   freeSECItem   _ivSECItem%   _ivSECItemContents   initIVSECItem/   deriveKeyFromPassphrase                     WeaveCrypto                  ÿÿÿÿ      WeaveCrypto                          ¹                                              %               A¸    
:  QÌ 	   init   ÿÿÿÿ   M   WeaveCrypto.prototype.observer.observeÁ               Z       ¹   	                                           subject   topic	   data	   self       -             A5       QV   ¸   
=   T =   : QT =      'V   V   5   ¸   
=   : 6   QËÞÉÙÉ+    _self   log   Observed     topic.   nsPref:changed   debug   prefBranch   getBoolPref   cryptoDebug   ÿÿÿÿ   5   WeaveCrypto.prototype.initÁ                  ý       ¹      I                                   ¯  ª	  6       	      A;   5   ¸   
=   : 6    QA5    ¸   
=   A5   B: QA5   A6   QAA5    ¸   

=   : 6   	Q       Qv   QAB6   	QÈ    A¸   
:  QA¸   
:  QA¸   
:  QA¸   
:  QA¸   
;   : Q   3   Qv   QA¸   
=   V   : QV   pÈ      É9×ÉÝÍÓÎÌÏBÌÌÌÌÖÌÖÌ	    prefBranch   Services   prefs   getBranch%   services.sync.log.   addObserver   cryptoDebug   observer   _self   debug   getBoolPref   initNSS+   initAlgorithmSettings   initIVSECItem   initSharedInts   initBuffers'   INITIAL_BUFFER_SIZE   log   init failed:     ÿÿÿÿ          x        ÿÿÿÿ          e            Í        L   !       n      ÿÿÿÿ   Ï   '   ÿÿÿÿ   ÿÿÿÿ      initSharedInts                 g       ¹      '                           
              signed   unsignedÚ
  ?  S             ;    5   R     Q;    5   R    QAV   6   QAV  6   QAV   ¸   
:  6   QAV  ¸   
:  6   QËÈËÈËËÌ*ÉÌ*É    ctypes   int   unsigned_int9   _commonCryptSignedOutputSize=   _commonCryptUnsignedOutputSizeA   _commonCryptSignedOutputSizeAddr   addressE   _commonCryptUnsignedOutputSizeAddr   ÿÿÿÿ   W   WeaveCrypto.prototype.initAlgorithmSettingsÁ                   É       ¹      1                                      Y    f             AA5   ¸   
;   : 6    QAA5   ¸   
A5    @: 6   QAA5   ¸   
A5    : 6   QA;   	6   QAA5   5   6   
QAA5   ¸   
A5    : 6   QA5   A5   5      $;   ¸   
=   ;   5   : pÓÉÕÉÔÉÌÒoÔÉÒÛK    mechanism   nss-   PK11_AlgtagToMechanism   ALGORITHM   blockSize#   PK11_GetBlockSize   ivLength!   PK11_GetIVLength   keySize   KEYSIZE_AES_256   keygenMechanism   CKM_AES_KEY_GEN   padMechanism)   PK11_GetPadMechanism+   CKM_INVALID_MECHANISM   Components   Exception;   invalid algorithm (can't pad)   Cr!   NS_ERROR_FAILURE   ÿÿÿÿ   3   WeaveCrypto.prototype.logÁ                 J       ¹                                              message /  ã  t             A5        ;   â   =   T  =   : Q;   5   ¸   
=   T  : QÝÞ=    debug	   dump   WeaveCrypto:    
   Services   console!   logStringMessage   ÿÿÿÿ   ;   WeaveCrypto.prototype.initNSSÁ               Ç      ¹   Z   ú                          ¯             nsslib	   path	   fileü  ðK  {             ;    5   ¸   
;   5   : Q;   ¸   
=   :   QV   Q;   5   	¸   

=   ;   5   :   QV  ¸   
V  : QA¸   
=   V  5   : Q;   ¸   
V  5   : W   QA¸   
=   : QAY   6   QAY   6   QA5   ;   5   6   QA5   ;   5   6   QA5   ;   5   6   QA5   ;   5   6   QA5   ;   5   6   QA5   ;   5   6   QA5   ;   5   6   QA5   ;   5   6   QA5   ×6    QA5   ;   5   6   !QA5   ;   5   6   "QA5   ;   5   6   #QA5   >6   $QA5   ;   5   6   %QA5   ;   5   6   &QA5   ;   5   6   'QA5   ;   5   )6   (QA5   ;   ¸   +
=   *Z  Y   A5   5   #]   ,`   Y   ;   5   -5   .]   /`  Y   ;   5   ]   0`  : 6   *QA5   ;   ¸   +
=   1Z  Y   A5   5   *]   2`   Y   A5   5   *]   3`  : 6   1QA5   >6   4QA5   >6   5QA5   X6   6QA5   X6   7QA5   X6   8QA5   ×6   9QA5   ×6   :QA5   ×@6   ;QA5   X#6   <QA5   X&6   =QA5   ×6   >QA5   V   ¸   @
=   ?;   5   AA5   5   ;   5   -5   .;   5   : 6   ?QA5   V   ¸   @
=   B;   5   AA5   5   5   .: 6   BQA5   V   ¸   @
=   C;   5   AA5   5   5   .: 6   CQA5   V   ¸   @
=   D;   5   AA5   5   !5   .A5   5   5   .A5   5   A5   5   *5   .;   5   ;   5   E: 6   DQA5   V   ¸   @
=   F;   5   AA5   5   A5   5   !5   .: 6   FQA5   V   ¸   @
=   G;   5   AA5   5   *5   .A5   5   !5   .: 6   GQA5   V   ¸   @
=   H;   5   AA5   5   A5   5   ": 6   HQA5   V   ¸   @
=   I;   5   A;   5   A5   5   : 6   IQA5   V   ¸   @
=   J;   5   A;   5   A5   5   A5   5   *5   .: 6   JQA5   V   ¸   @
=   K;   5   AA5   5   A5   5   : 6   KQA5   V   ¸   @
=   L;   5   AA5   5   *5   .A5   5   A5   5   *5   .: 6   LQA5   V   ¸   @
=   M;   5   AA5   5   !5   .A5   5   5   .A5   5   A5   5   A5   5   A5   5   *5   .;   5   E: 	6   MQA5   V   ¸   @
=   N;   5   AA5   5   %5   .A5   5   A5   5   A5   5   !5   .A5   5   *5   .: 6   NQA5   V   ¸   @
=   O;   5   AA5   5   A5   5   %5   .;   5   -5   .;   5   5   .;   5   ;   5   -5   .;   5   : 	6   OQA5   V   ¸   @
=   P;   5   AA5   5   A5   5   %5   .;   5   -5   .;   5   )5   .;   5   ): 6   PQA5   V   ¸   @
=   Q;   5   AA5   5   15   .A5   5   "A5   5   "A5   5   ";   5   ;   5   A5   5   *5   .: 	6   QQA5   V   ¸   @
=   R;   5   AA5   5   !5   .A5   5   5   .A5   5   15   .A5   5   *5   .A5   5   ;   5   E: 6   RQA5   V   ¸   @
=   S;   5   A;   5   A5   5   %5   .A5   5   : 6   SQA5   V   ¸   @
=   T;   5   A;   5   A5   5   !5   .: 6   TQA5   V   ¸   @
=   U;   5   A;   5   A5   5   5   .: 6   UQA5   V   ¸   @
=   V;   5   AA5   5   *5   .A5   5   &5   .A5   5   *5   .;   5   ): 6   VQA5   V   ¸   @
=   W;   5   A;   5   A5   5   *5   .A5   5   : 6   WQA5   V   ¸   @
=   X;   5   A;   5   A5   5   *5   .A5   5   : 6   XQA5   V   ¸   @
=   Y;   5   A;   5   A5   5   15   .A5   5   : 6   YQ  ßÑÈàÈÓÛÕ	ÈÑÌÌÖÖÖÖÖÖÖÖÎÖÖÖÍÖÖÖÖÒÉÔØÓ  ¾É  ÄÒÉÔÔ  Ä$É  ÊÍÍÏÏÏÎÎÎÏÏÎ  ÝÖÕÙ  Ý'É  âÖÚ  â(ÉÖÚ  æ+ÉÖÚÛä  êÉ  ðÖÕÐ  ð(É  õÖÚÐ  õ#É  úÖÕË  ú*É  ÿÖÔË  ÿ$É ÖÔÛ %É 	ÖÕË 	(É ÖÚÛ $É ÖÚæå %É ÖÚÖà .É "ÖÕßò "!É )ÖÕßÙ )$É 1ÖÚáä 1/É 7ÖÚàå 7"É =ÖÔÛ ='É BÖÔÐ B#É GÖÔÐ G!É LÖÚÐÚ L%É RÖÔÛ R%É WÖÔÛ W$É \ÖÔÛ \-Én    Cc%   @mozilla.org/psm;1   getService   Ci   nsISupports   ctypes   libraryName	   nss3   Services   dirsvc   get   GreBinD   nsILocalFile   append   log;   Trying NSS library with path 	   path	   openg   Initializing NSS types and function declarations...   nss   nss_t   PRBool   int   SECStatus   PK11SlotInfo   void_t#   CK_MECHANISM_TYPE   unsigned_long#   CK_ATTRIBUTE_TYPE   CK_KEY_TYPE!   CK_OBJECT_HANDLE   PK11Origin#   PK11_OriginUnwrap   PK11SymKey   SECOidTag   SECItemType   SIBUFFER   PK11Context   PLArenaPool   KeyType   PK11AttrFlags   unsigned_int   SECItem   StructType	   type   unsigned_char   ptr	   data   len   SECAlgorithmID   algorithm   parameters   CKK_RSA3   CKM_RSA_PKCS_KEY_PAIR_GEN   CKM_AES_KEY_GEN   CKA_ENCRYPT   CKA_DECRYPT#   PK11_ATTR_SESSION!   PK11_ATTR_PUBLIC'   PK11_ATTR_SENSITIVE)   SEC_OID_PKCS5_PBKDF2#   SEC_OID_HMAC_SHA19   SEC_OID_PKCS1_RSA_ENCRYPTION'   PK11_GenerateRandom   declare   default_abi)   PK11_GetInternalSlot/   PK11_GetInternalKeySlot   PK11_KeyGen   voidptr_t)   PK11_ExtractKeyValue   PK11_GetKeyData-   PK11_AlgtagToMechanism!   PK11_GetIVLength#   PK11_GetBlockSize)   PK11_GetPadMechanism!   PK11_ParamFromIV#   PK11_ImportSymKey5   PK11_CreateContextBySymKey   PK11_CipherOp!   PK11_DigestFinal7   PK11_CreatePBEV2AlgorithmID   PK11_PBEKeyGen'   PK11_DestroyContext   PK11_FreeSymKey   PK11_FreeSlot#   SECITEM_AllocItem#   SECITEM_ZfreeItem!   SECITEM_FreeItem3   SECOID_DestroyAlgorithmID   ÿÿÿÿ      _getInputBuffer                       ¹   	   &                                   	   size 1M  N  k      
      T  A5       v   Q;   5   ;   5   T  R :     QAV   6   QA;   ¸   
V   ;   5   ¸   
T  : : 6   QAT  6    QÈA5   ÊËØÌËå-ÿÿÿñÉË -   _sharedInputBufferSize   ctypes   ArrayType   unsigned_char%   _sharedInputBuffer-   _sharedInputBufferInts	   cast   uint8_t   array    ÿÿÿÿ          b           p   ÿÿÿÿ   ÿÿÿÿ   !   _getOutputBuffer                W       ¹                                         	   size ºN  ÃO  u            T  A5       E   Q;   5   ;   5   T  R :     QAV   6   QAT  6    QÈA5   ÊËØÌËË  /   _sharedOutputBufferSize   ctypes   ArrayType   unsigned_char'   _sharedOutputBuffer    ÿÿÿÿ          b           ?   ÿÿÿÿ   ÿÿÿÿ   )   _getRandomByteBuffer                l       ¹      !                         
          	   size ýO  >Q  ~            T  A5       Z   Q;   5   ;   5   T  R :     QAV   6   QAV   ¸   
:  6   QAT  6    QÈA5   ÊËØÌ
Ë
ÌÉ
Ë +   _randomByteBufferSize   ctypes   ArrayType   unsigned_char#   _randomByteBuffer+   _randomByteBufferAddr   address    ÿÿÿÿ          b           T   ÿÿÿÿ   ÿÿÿÿ      initBuffers                 1       ¹                                              initialSize fQ  R              A¸    
T  : QA¸   
T  : QA¸   
A5   : QÏÏÒ)    _getInputBuffer!   _getOutputBuffer)   _getRandomByteBuffer   ivLength   ÿÿÿÿ   ;   WeaveCrypto.prototype.encryptÁ               ¾       ¹      D                                        clearTextUCS2   symmetricKey   iv   inputBuffer   inputBufferSize!   outputBufferSize   outputBuffer   R  V              A¸    
=   : Q;   5   ;   5   R T  :    QV   Ù   ?  QV  A5     QA¸   
V  :   QA¸   
V   V  V  V  T T A5   	5   
: W  QA¸   
V  ¸   
:  V  Ù   : ÑÕÏÐ ÐÌÈÐÈÑ ÈÓÌÿÿÿî?    log!   encrypt() called   ctypes   ArrayType   unsigned_char   length   blockSize!   _getOutputBuffer   _commonCrypt   nss   CKA_ENCRYPT   encodeBase64   address   ÿÿÿÿ   ;   WeaveCrypto.prototype.decryptÁ               Ñ       ¹      G                                        cipherText   symmetricKey   iv   inputUCS2   len   input   outputBuffer   1V  ªZ  ¥            A¸    
=   : Q=      QT  Ù      ;   â   T  : W   QV   Ù     QA¸   
V  :   QA¸   
V   A5   V  : QA¸   
V  V  A¸   	
V  : V  T T A5   
5   :   Q=   V  ¸   
:  =   ÑÊÈÍÈ ±ÎÌÈÚÐÌ-Ñ µÈ ¼ÐË    log!   decrypt() called      length	   atob   _getInputBuffer!   byteCompressInts-   _sharedInputBufferInts   _commonCrypt!   _getOutputBuffer   nss   CKA_DECRYPT   readString   ÿÿÿÿ   E   WeaveCrypto.prototype._commonCryptÁ              S      ¹   (   Ò                        V             input   inputLength   output   outputLength   symmetricKey   iv   operation   ctx   symKey   ivParam       ÉZ  Àe  ¿            A¸    
=   : Q;   â   T : U QT Ù   A5      =   A5   =   pT Ù   A5      T ¸   
>A5   : U QA¸   
T A5   	T Ù   : Q   Q  Q  Q  Q  Q  Q  QA5   
¸   
A5   A5   : W  QV  ¸   
:     $;   ¸   
=   ;   5   : pA¸   
T T : W  QA5   
¸   
A5   T V  V  : W   QV   ¸   
:     $;   ¸   
=   ;   5   : pT   QA5   
¸   
V   T A5   ¸   
:  V  T  T :    $;   ¸   
=   ;   5   : pA5   5     QT ¸   
V  :   QV  V  W  QA5   
¸   
V   V  A5   V  :    $;   ¸   
=   ;   5   : pV  A5    5   W  Q;   !¸   "
T ;   !5   #¸   $
V  : :   QV  Èt   CÈt   <   ¢  Qv  QA¸    
=   %V  : QV  pÈt   
   pV   E   QV   ¸   
:      A5   
¸   &
V   C: QV  E   QV  ¸   
:      A5   
¸   '
V  C: Qu ÑÍÏÓÏÑÝ ÙÙ
ÈËÛÎ	ÈÞÈËÛÈá4ÍÿÿÿÜÛÐÎÈÈx ãßÛÏxä ÿÿÿìÈ×ÌÖÐÊËÖÊËØ)    log+   _commonCrypt() called	   atob   length   blockSize-   IV too short; must be     bytes.   slice!   byteCompressInts%   _ivSECItemContents   nss!   PK11_ParamFromIV   padMechanism   _ivSECItem   isNull   Components   Exception3   can't convert IV to param   Cr!   NS_ERROR_FAILURE   importSymKey5   PK11_CreateContextBySymKeyE   couldn't create context for symkey   PK11_CipherOp9   _commonCryptSignedOutputSize   address/   cipher operation failed   value!   addressOfElement!   PK11_DigestFinalE   _commonCryptUnsignedOutputSizeAddr-   cipher finalize failed=   _commonCryptUnsignedOutputSize   ctypes	   cast   unsigned_char   array-   _commonCrypt: failed: '   PK11_DestroyContext!   SECITEM_FreeItem    ÿÿÿÿ         maxOutputSize    !   actualOutputSize       finalOutput       newOutput        ÿÿÿÿ         e        ¨   =       ¨         ¬   ý  ÿÿÿÿÿÿÿÿ¢            ´  '   ÿÿÿÿ   ÿÿÿÿ   O   WeaveCrypto.prototype.generateRandomKeyÁ                      ¹                              <           	   slot   randKey   keydataäe  _k  ø            A¸    
=   : Q   Q  Q  QA5   ¸   
:  W   QV   ¸   
:     $;   ¸   
=   ;   5   	: pA5   ¸   

V   A5   @A5   @: W  QV  ¸   
:     $;   ¸   
=   ;   5   	: pA5   ¸   
V  :    $;   ¸   
=   ;   5   	: pA5   ¸   
V  : W  QV  ¸   
:     $;   ¸   
=   ;   5   	: pA¸   
V  5   5   V  5   5   : t   Bt   <      Qv  QA¸    
=   V  : QV  pÈt   
   nV  E   QV  ¸   
:      A5   ¸   
V  : QV   E   QV   ¸   
:      A5   ¸   
V   : Qu Ñ	 WÍÈËÛß
ÈËÛÑÛÑ
ÈËÛäÔÌÖÐÊËÕÊË×    log5   generateRandomKey() called   nss)   PK11_GetInternalSlot   isNull   Components   Exception5   couldn't get internal slot   Cr!   NS_ERROR_FAILURE   PK11_KeyGen   keygenMechanism   keySize'   PK11_KeyGen failed.)   PK11_ExtractKeyValue9   PK11_ExtractKeyValue failed.   PK11_GetKeyData/   PK11_GetKeyData failed.   encodeBase64   contents	   data   len7   generateRandomKey: failed:    PK11_FreeSymKey   PK11_FreeSlot    ÿÿÿÿ         e        $          $   [        '   ÿÿÿÿ   ÿÿÿÿ   M   WeaveCrypto.prototype.generateRandomIVá                          ¹                                            k  «k              A¸    
A5   : "Ò' '   generateRandomBytes   ivLength   ÿÿÿÿ   S   WeaveCrypto.prototype.generateRandomBytesÁ               u       ¹      "                                        byteCount   scratch Ðk  lm              A¸    
=   : QA¸   
T  :    QA5   ¸   
V   T  :    $;   ¸   
=   ;   5   	: pA¸   

A5   T  : ÑË
ÈÔÛÑ9    log9   generateRandomBytes() called)   _getRandomByteBuffer   nss'   PK11_GenerateRandom   Components   Exception3   PK11_GenrateRandom failed   Cr!   NS_ERROR_FAILURE   encodeBase64+   _randomByteBufferAddr   ÿÿÿÿ      importSymKey              °      ¹      ¤                        '          !   encodedKeyString   operation	   memo   keyItem	   slot  ãn  ít  /               QT xA5    5   y   A5    5   y   z   %A5   W   Q   A5   W   Q   =   pT  V   q   V   T  7  Q  Q  QA¸   
T  C: W  QA5    ¸   
:  W  QV  ¸   
:     $;   	¸   

=   ;   5   : pA5    ¸   
V  A5   A5    5   T V  @:   QV   D   QV  ¸   
:     $;   	¸   

=   ;   5   : pV   T  V  8Èt   Èt   
   KV  E   QV  ¸   
:      A5    ¸   
V  : QA¸   
V  : Qu kLËpËpÊ 5ËXËXÈÉ	  ëÌ
ÈÍ
ÈËÑÊ G×ËÈ JÈÖÑÊ NßÊËÕÒ    nss   CKA_ENCRYPT   CKA_DECRYPT+   _encryptionSymKeyMemo+   _decryptionSymKeyMemoM   Unsupported operation in importSymKey.   makeSECItem/   PK11_GetInternalKeySlot   isNull   Components   Exception7   can't get internal key slot   Cr!   NS_ERROR_FAILURE#   PK11_ImportSymKey   padMechanism#   PK11_OriginUnwrap)   symkey import failed   PK11_FreeSlot   freeSECItem    ÿÿÿÿ         symKey        x   ï       y   ä   ÿÿÿÿÿÿÿÿV            ÿÿÿÿ   !   byteCompressInts              s       ¹      2                                     jsString   intArray   count   len   end   mv  Pw  d      
      T  Ù       Q;   ¸   
V   T :   Q>  Q    2mT V  T  ¸   
V  : X ÿ8QV  #?W  QQãV  V  ÿÿÿÈÈÍÓÈ&2$=ÖÉ g!Î h gÑ8    length	   Math   min   charCodeAt    ÿÿÿÿ         i        4   =       )   I   ÿÿÿÿ   ÿÿÿÿ   A   WeaveCrypto.prototype.byteExpandÁ                     ¹      >                                     charArray   expanded   len   intData ÿw  y  m            =       QT  Ù     Q;   ¸   
T  ;   5   ¸   
V  : :   Q>  Q    6mV   ;   ¸   
V  V  7: W   QV  #?W  QQãV  V  ÿÿÿÄÈV   ÊÍä!ÿÿÿéÈ&6(AÚ{ q!Î r qÑ       length   ctypes	   cast   uint8_t   array   String   fromCharCode    ÿÿÿÿ         i        R   A       G   M   ÿÿÿÿ   ÿÿÿÿ      expandData                     ¹   	   =                                  	   data   len   expanded   intData  9y  z  v            =       Q;   ¸   
T  ;   5   ¸   
T : 5   : 5     Q>  Q    6mV   ;   ¸   
V  V  7: W   QV  #?W  QQãV  T ÿÿÿÅÈV   ÊãÈÿÿÿîÍ&6(@Ú{ {!Î | {Ð       ctypes	   cast   uint8_t   array   ptr   contents   String   fromCharCode    ÿÿÿÿ         i        N   @       C   L   ÿÿÿÿ   ÿÿÿÿ   E   WeaveCrypto.prototype.encodeBase64Á                         ¹                                           	   data   len  ½z  {              ;    â    A¸   
T  T : : Øÿÿÿû! 	   btoa   expandData   ÿÿÿÿ   C   WeaveCrypto.prototype.makeSECItemÁ               î       ¹      E                                        input   isEncoded   len	   item   ptr	   dest  Ú{  ß}              T    ;    â    T  : U  QT  Ù      QA5   ¸   
@@V   :   QV  ¸   
:     =   p;   ¸   
V  5   5   	;   5   
¸   
V   : 5   :   Q;   ¸   
V  5   ;   5   ¸   
V   : :   QA¸   
T  V  V   : QV  ÍÍÓÈËÚÕÈ Èê!ÿÿÿæÈ× 	   atob   length   nss#   SECITEM_AllocItem   isNull3   SECITEM_AllocItem failed.   ctypes	   cast   contents	   data   unsigned_char   array   ptr   uint8_t!   byteCompressInts   ÿÿÿÿ   C   WeaveCrypto.prototype.freeSECItemÁ                 2       ¹                                              zap ü}  ^~              T  E   QT  ¸    
:      A5   ¸   
T  C: QÉÊÕ&    isNull   nss#   SECITEM_ZfreeItem   ÿÿÿÿ      initIVSECItem                 ê       ¹      J                                      	   item   ptr   contents     £            A5       A@6   QA¸   
A5    : QA5   ¸   
@@A5   :    QV   ¸   
:     =   p;   ¸   	
V   5   
5   ;   5   ¸   
A5   : 5   :   Q;   ¸   	
V  5   
;   5   ¸   
A5   : :   QAV   6    QAV  6   QÈÒÕÈËÚ×È ­ÈÕ×# ¯ÈËË#    _ivSECItem%   _ivSECItemContents   freeSECItem   nss#   SECITEM_AllocItem   blockSize   isNull3   SECITEM_AllocItem failed.   ctypes	   cast   contents	   data   unsigned_char   array   ptr   uint8_t   ÿÿÿÿ   /   deriveKeyFromPassphrase    
         
 1      ¹       å                        U             passphrase	   salt   keyLength   passItem   saltItem   pbeAlg   cipherAlg   prfAlg   iterations   algid	   slot   symKey   keyData     l  ¸            A¸    
=   : QA¸   
T  B:    QA¸   
T C:   Q;     Q;     QA5   5     QT D   Q>U Q;     Q  Q  Q  Q  	QA5   ¸   
V  V  V  T V  V  : W  QV  ¸   
:     $;   	¸   

=   ;   5   : pA5   ¸   
:  W  QV  ¸   
:     $;   	¸   

=   ;   5   : pA5   ¸   
V  V  V   B@: W  QV  ¸   
:     $;   	¸   

=   ;   5   : pA5   ¸   
V  :     A¸   
=   ;   5   : pA5   ¸   
V  : W  	QV  	¸   
:     $;   	¸   

=   ;   5   : pA¸   
V  	5   5   V  	5   5   : t   Bt   <   ô  
Qv  
QA¸    
=   V  
: QV  
pÈt   
   ÂV  E   QV  ¸   
:      A5   ¸   
V  C: QV  E   QV  ¸   
:      A5   ¸   
V  : QV  E   QV  ¸   
:      A5   ¸   
V  : QA¸   
V   : QA¸   
V  : Qu ÑÌÈÌÈÊÊÐÎÊ ­Ù ÈÈËÛÍÈËÛÛ	ÈËÛÑ×Ñ
ÈËÛäÔÌÖÐÊËÖÊËÕÊËÕÐÒ    logC   deriveKeyFromPassphrase() called.   makeSECItem   ALGORITHM   nss#   SEC_OID_HMAC_SHA13   KEY_DERIVATION_ITERATIONS7   PK11_CreatePBEV2AlgorithmID   isNull   Components   ExceptionE   PK11_CreatePBEV2AlgorithmID failed   Cr!   NS_ERROR_FAILURE)   PK11_GetInternalSlot5   couldn't get internal slot   PK11_PBEKeyGen+   PK11_PBEKeyGen failed)   PK11_ExtractKeyValue   makeException9   PK11_ExtractKeyValue failed.   PK11_GetKeyData-   PK11_GetKeyData failed   expandData   contents	   data   lenC   deriveKeyFromPassphrase: failed: 3   SECOID_DestroyAlgorithmID   PK11_FreeSlot   PK11_FreeSymKey   freeSECItem    ÿÿÿÿ   
      e           ã          ±      @  '   ÿÿÿÿ