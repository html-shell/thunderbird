çżsš                F     š   0   ě                          .       0     resource://gre/modules/ReaderMode.jsm     +                         Af    0    Q;   5      Q5      Q5      QQ;   ¸   
=   	: Q;   ¸   
=   
: Q;   ¸   
f   : Q;   ¸   
A=   =   : Q;   ¸   
A=   =   : Q;   ¸   
A=   =   : Q;   ¸   
A=   =   : Q;   ¸   
A=      : QAY   ?]   >]      a      a      a      ]      ]      ]       	]   !;   ¸   "
   
: ]   #;   ¸   "
   : ]   $   ]   %;   ¸   "
   : ]   &;   ¸   "
   : ]   ';   ¸   "
   : ]   (   ]   )   ]   *;   ¸   "
   : ]   +   a   ,   a   -   ]   .   ]   /0   Q	Ě'	ę7Ő1Ő3Ő.Ű^ŰSŰjŰSŰ#Ę*Ę3Ę9ĘAĘTĘlĘ~ŃČ  ŃČ  Ę  żŃČ  ŃŃČ  ŕŃČ  ĺĘ  ęĘ ŃČ ,Ę 1Ę ?Ę PĐ X !   EXPORTED_SYMBOLS   Cc   Ci   Cu   Components   classes   interfaces   utils   importG   resource://gre/modules/Services.jsmK   resource://gre/modules/XPCOMUtils.jsm-   importGlobalProperties   XPCOMUtils-   defineLazyModuleGetter   CommonUtilsG   resource://services-common/utils.js   OSC   resource://gre/modules/osfile.jsm   ReaderWorker]   resource://gre/modules/reader/ReaderWorker.jsm	   Task?   resource://gre/modules/Task.jsm!   defineLazyGetter   Readability   ReaderMode   CACHE_VERSION   DEBUG   maxElemsToParse/   isEnabledForParseOnLoad+   isOnLowMemoryPlatform/   _getStateForParseOnLoad   observe   getOriginalUrl)   isProbablyReaderable   async   parseDocument1   downloadAndParseDocument#   _downloadDocument'   getArticleFromCache'   storeArticleInCache-   removeArticleFromCache   log   _shouldCheckUri   _readerParse   _cryptoHash#   _unicodeConverter   _toHashedPath   _ensureCacheDir                     ReaderMode                                    XMLHttpRequest                  ˙˙˙˙                     3       š                                              scope˝  R               Y      Q;    5   ¸   
=   V   : QV   5   ĘŢĘ    Services   scriptloader   loadSubScriptY   resource://gre/modules/reader/Readability.js   Readability   ˙˙˙˙   ?   this.ReaderMode.maxElemsToParseÁ                   D       š                                           *  ň  #             A.    Q;   5   ¸   
=   AB: QA;   5   ¸   
=   : 0    &Ü×É5    parseNodeLimit   Services   prefs   addObserver/   reader.parse-node-limit   getIntPref   ˙˙˙˙   O   this.ReaderMode.isEnabledForParseOnLoadÁ                   6       š                                             ü  *             A.    Q;   5   ¸   
=   AB: QAA¸   
:  0    .Ü0É&É /   isEnabledForParseOnLoad   Services   prefs   addObserver+   reader.parse-on-load./   _getStateForParseOnLoad   ˙˙˙˙   K   this.ReaderMode.isOnLowMemoryPlatformÁ                 @       š                                              memory  ä  3             ;    5   ¸   
;   5   :    QA.   QAV   ¸   
:  0   Ű	ČĚ$É    CcG   @mozilla.org/xpcom/memory-service;1   getService   Ci   nsIMemory+   isOnLowMemoryPlatform'   isLowMemoryPlatform   ˙˙˙˙   O   this.ReaderMode._getStateForParseOnLoadÁ                 Y       š                                 	             isEnabled   isForceEnabled  ­	  9             ;    5   ¸   
=   :    Q;    5   ¸   
=   :   QV  D   QV   E   QA5    ÖČÖČ>Ô'Č    Services   prefs   getBoolPref9   reader.parse-on-load.enabledE   reader.parse-on-load.force-enabled+   isOnLowMemoryPlatform   ˙˙˙˙   /   this.ReaderMode.observeÁ                 s       š   
   &                                       aMessage   aTopic   aData   Ă	  1  A             T x=    y   
z   dT ¸   
=   :    AA¸   
:  0   Q   1T =   H   #A;   5   ¸   	
T : 0   Q   kouĘĎ
ÉÎÉ
ŐÉIX    nsPref:changed   startsWith+   reader.parse-on-load./   isEnabledForParseOnLoad/   _getStateForParseOnLoad/   reader.parse-node-limit   parseNodeLimit   Services   prefs   getIntPref   ˙˙˙˙   =   this.ReaderMode.getOriginalUrlÁ              ż       š      A                                    url   searchParams   encodedURL 6  č  T             T  ¸    
=   :     @;   T  ¸   
=   Ů   : R    QV   ¸   
=   :     @V   ¸   
=   :   Q;   â   V  :    9  Qv  Q;   	¸   

=   V  : QV  ČČ    ĎYÚ#˙˙˙ěČĐ]ĐČÎÉĚÚÎ    startsWith   about:reader?   URLSearchParams   substring   length   has   url   get%   decodeURIComponent   Cu   reportError;   Error decoding original URL:     ˙˙˙˙         e         s             -   ˙˙˙˙˙˙˙˙ś             ˙˙˙˙   I   this.ReaderMode.isProbablyReaderableÁ               [       š                                             doc   uri ă  Ž  l             ;    5   ¸   
T  5   5   @@:    QA¸   
V   :     B;   V   T  R ¸   
:  ŕČoĚsÍÎ1    Services   io   newURI   location	   href   _shouldCheckUri   Readability)   isProbablyReaderable   ˙˙˙˙   =   this.ReaderMode.parseDocument<Á               Đ       š   
   *                                D     doc   .generator   .genrval   uriú  â  ~             É   Ę   ĐQ;    5   ¸   
   5   @@:    QA¸   
   :     .A¸   
=   : QY   @]   C]      ĚY   Y   A¸   	
      : ]   B]      Ë  Đ]   C]      ĚY   ]   C]      Ě  ~ĚÝÉÍŃŘÜę    Services   io   newURI   documentURI   _shouldCheckUri   log9   Reader mode disabled for URI   value	   done   _readerParse
   ¤      ˙˙˙˙   S   this.ReaderMode.downloadAndParseDocument<Á               ź       š      !                                D     url   .generator   .genrval   uri   docî                 É   Ę   ĐQ;    5   ¸   
   @@:    QY   A¸   
   : ]   B]      Ë  Đ   QY   Y   A¸   
      : ]   B]      Ë  Đ]   C]      ĚY   ]   C]      Ě  ĚŘÉŇŢÜę    Services   io   newURI#   _downloadDocument   value	   done   _readerParse
   V         ˙˙˙˙   C   this.ReaderMode._downloadDocumentÁ                        š                                      D      url­  p               ;    A    R Ě  ł    Promise   ˙˙˙˙   G   this.ReaderMode._downloadDocument/<Ĺ                m       š      !                                D      resolve   reject   xhrĚ  j               ;    R     Q   ¸   
=     C: Q   A    0   Q   =   0   Q   A   0   Q   ¸   
:  Q
ÉŰŃĐŃ  ˛Đ    XMLHttpRequest	   open   GET   onerror   responseType   document   onload	   send   ˙˙˙˙   _   this.ReaderMode._downloadDocument/</xhr.onerrorĺ                        š                                             evt ?  W                  T  5    : Ň    error   ˙˙˙˙   ]   this.ReaderMode._downloadDocument/</xhr.onloadĹ                    š      I                                     evt   doc	   meta   R                     5    X ČI   &   =         5    : Q      5      QV   ¸   
=   :   QV       QV  ¸   
=   :   QV     w  QV  ¸   
=   :   QV  ×˙   L  QV  ¸   	
V  ×:   QA¸   

V  : ¸   
A   : QČČČČČČ   V   : QÓ
ß
ÔĐČËĐ
ČËĐČËŇČŕÉÎ    statusI   Reader mode XHR failed with status:    responseXML   querySelector1   meta[http-equiv=refresh]   getAttribute   content   indexOf	   URL=   substring#   _downloadDocument	   then    ˙˙˙˙         content                     urlIndex                    url             a   this.ReaderMode._downloadDocument/</xhr.onload/<ĺ                        š                                              doc ă  ř  Ť                T  : 8Í     o      ˙˙˙˙      q          Ŕ   F                             ˙˙˙˙           ˙˙˙˙   I   this.ReaderMode.getArticleFromCache<Á               3      š      8                             D     url   .generator   .genrval	   path    ż             É   Ę   ĐQA¸    
   :    QĆ       QY   ;   5   ¸   
  : ]   B]     Ë  Đ   QY   ;   ¸   
;   R  ¸   	
   : : ]   C]   ČÇ   ĚČÇ   pĆ      Qv   Q   ;   5   5   
rE   Q   5      ČÇ   'QY   @]   C]   ČÇ   ĚČÇ   vp Y   ]   C]      Ě  Ć  żĚÍÉ  Í
ŰŢ×Ň˙˙˙őŢ˙Čä    _toHashedPath   OS	   File	   read   value	   done	   JSON   parse   TextDecoder   decode   Error#   becauseNoSuchFile    ˙˙˙˙          array       ˙˙˙˙          e        #          )      ˙˙˙˙˙˙˙˙Ą             ľ   \   ˙˙˙˙˙˙˙˙ď         ˙˙˙˙	        
   a      ˙˙˙˙   I   this.ReaderMode.storeArticleInCache<Á               á       š      6                                D     article   .generator   .genrval   array	   path  ~  Ń             É   Ę   ĐQ;    R  ¸   
;   ¸   
   : :    QA¸   
   5   :    QY   A¸   
:  ]   B]      Ë  ĐQY   ;   	5   
¸   
      Y      =   ]   : ]   B]      Ë  ĐQY   ]   C]      Ě  ŃĚŰ˙˙˙çÉŇÉÍŮĺ)Đ˙˙˙ÝŮ=    TextEncoder   encode	   JSON   stringify   _toHashedPath   url   _ensureCacheDir   value	   done   OS	   File   writeAtomic	   .tmp   tmpPath
   x   Ć      ˙˙˙˙   O   this.ReaderMode.removeArticleFromCache<Á               o       š                                
      D     url   .generator   .genrval	   path  Ň  ŕ             É   Ę   ĐQA¸    
   :    QY   ;   5   ¸   
   : ]   B]      Ë  ĐQY   ]   C]      Ě  ŕĚÍÉŰŮ    _toHashedPath   OS	   File   remove   value	   done
   T      ˙˙˙˙   '   this.ReaderMode.logÁ                 #       š      	                                       msg ĺ  "  ĺ             A5       ;   â   =   T  : Q×    DEBUG	   dump   Reader:    ˙˙˙˙   ?   this.ReaderMode._shouldCheckUriÁ                        š      (                                       uri A    ę             T  5    =   T  5   H   !A¸   
=   T  5   : QBT  ¸   
=   : D   0QT  ¸   
=   : D   QT  ¸   
=   :     !A¸   
=   	T  5   
: QBC×ÚĎŘŘÚ    prePath   /	   spec   log/   Not parsing home page:    schemeIs	   http   https	   file1   Not parsing URI scheme:    scheme   ˙˙˙˙   ;   this.ReaderMode._readerParse<Á               ÷      š   ,   Ž                       Q      D     uri   doc   .generator   .genrval   uriParam   serializer   serializedDoc   article   flagsĎ  D%              É   Ę   ĐQA5       Ć       Q  ¸   
=   : Ů      Q   A5       MA¸   
=     5   =      =   : QY   @]   	C]   
ČÇ   ĚČÇY      5   ]      5   ]      5   ]      5   ]   ;   5   ¸   
=   @   : 5   ]      Q;   5   ¸   
;   5   :    QY   ;   ¸   
   ¸   
   : : ]   	B]   
   Ë  Đ   Q@   	QY   ;   ¸   
=   Z     `      `  : ]   	B]   
   Ë  Đ   	Q   ;Ć      Qv   Q;   ¸   
=       : QČÇ       	    .A¸   
=   !: QY   @]   	C]   
   Ě   	   	5   #5   0   "Q   	.   #Q;   5   $5   %;   5   $5   &   
Q   	;   5   (¸   )
;   5   *: ¸   +
   	5   '   
>: 0   'QY      	]   	C]   
   ĚY   ]   	C]   
   Ě ) ĚŃ
Ń
ÎĚîÜĎĎĎĎÜ
ÓŃĘ Éâ&˙˙˙đŢKÚ4É
É˙˙˙ŇăÓăŃŘÚËĺŕĘĐ 'ÉÜ    parseNodeLimit)   getElementsByTagName   *   length   log'   Aborting parse for 	   spec   ;     elements found   value	   done	   host   prePath   scheme   Services   io   newURI   .   pathBase   CcM   @mozilla.org/xmlextras/xmlserializer;1   createInstance   Ci!   nsIDOMSerializer   Promise   resolve#   serializeToString   ReaderWorker	   post   parseDocument   Cu   reportError/   Error in ReaderWorker: A   Worker did not return an article   url   uri%   nsIDocumentEncoder'   OutputSelectionOnly'   OutputAbsoluteLinks   title5   @mozilla.org/parserutils;1   getService   nsIParserUtils%   convertToPlainText    ˙˙˙˙          numTags       ˙˙˙˙          e        |  O             ˙˙˙˙˙˙˙˙             Ń  )   ˙˙˙˙
   m  ż     ˙˙˙˙   7   this.ReaderMode._cryptoHashÁ                   -       š                                           Y%  á%  ,            A.    QA;   5   ¸   
;   5   : 0    ÜÉD    _cryptoHash   Cc9   @mozilla.org/security/hash;1   createInstance   Ci   nsICryptoHash   ˙˙˙˙   C   this.ReaderMode._unicodeConverterÁ                   E       š                                           ű%  '  1            A.    QA;   5   ¸   
;   5   : 0    QA5    =   0   QA5    ŇĘ 3ÉŃ #   _unicodeConverter   CcY   @mozilla.org/intl/scriptableunicodeconverter   createInstance   Ci;   nsIScriptableUnicodeConverter   charset	   utf8   ˙˙˙˙   ;   this.ReaderMode._toHashedPathÁ               ×       š      1                                       url   value	   hash   fileName ÷'  )  ?            A5    ¸   
T  :    QA5   ¸   
A5   5   : QA5   ¸   
V   V   Ů   : Q;   ¸   
A5   ¸   	
B: :   QV  ¸   

>V  ¸   
=   : : =     Q;   5   ¸   
;   5   5   5   =   V  : ĐČÜŢÚ ˙˙˙çČÜ˙˙˙îÎîD #   _unicodeConverter%   convertToByteArray   _cryptoHash	   init   MD5   update   length   CommonUtils   encodeBase32   finish   substring   indexOf   =   .json   OS	   Path	   join   Constants   profileDir   readercache   ˙˙˙˙   ?   this.ReaderMode._ensureCacheDirÁ                  ^       š   	                                          dir<*  +  P            ;    5   ¸   
;    5   5   5   =   :    Q;    5   ¸   
   : ¸   
A    : ęÉÖÔ    OS	   Path	   join   Constants   profileDir   readercache	   File   exists	   then   ˙˙˙˙   C   this.ReaderMode._ensureCacheDir/<Ĺ                 )       š                                             exists Ž*  +  R            T      $;    5   ¸   
      : 
Ű    OS	   File   makeDir