ç¿s¹                æ  d   ¹   #   +      
                   &       0     resource://gre/modules/OfflineCacheInstaller.jsm     $                                                                             	;   5       Q;   5      Q;   5      Q;   5      QAf    0   	Q;    ¸   

=   : Q;    ¸   

=   : Q;    ¸   

=   : Qn   ;   â   =   =   =   : 1   Qn   ;   â   =   =   =   : 1   Qn   ;   â   =   =   : 1   Q;    ¸   

=   Y   : 5   n   
1   QQ;   5      Q;   5      Q;   5   ¸   
;   5    :    QAY   ;   "]   "0   !QÊ#	(	1	Q	o	x	  	  	  Ì	ÐÐÐÐÌ2Õ1Õ2Õ0ÔÉÿÿÿýÔÉÿÿÿýÙÉÿÿÿýÖÖ;ÐÐÑÊÉ#%(.1OQmovx      Ê  Ð    Cu   Components   utils   Cc   classes   Ci   interfaces   CC   Constructor!   EXPORTED_SYMBOLS   importG   resource://gre/modules/Services.jsmI   resource://gre/modules/AppsUtils.jsmE   resource://gre/modules/NetUtil.jsm   Namespacee   @mozilla.org/network/application-cache-namespace;19   nsIApplicationCacheNamespace	   init   makeFile3   @mozilla.org/file/local;1   nsIFile   initWithPath   MutableArray)   @mozilla.org/array;1   nsIMutableArray   LoadContextInfoU   resource://gre/modules/LoadContextInfo.jsm   nsICacheStorage'   nsIApplicationCache/   applicationCacheServicea   @mozilla.org/network/application-cache-service;1   getService5   nsIApplicationCacheService+   OfflineCacheInstaller   installCache                  +   OfflineCacheInstaller                  ÿÿÿÿ      debug                        ¹                                            	   aMsg ¿    #                  ÿÿÿÿ   1   enableOfflineCacheForApp                 Y       ¹                                             aPrincipal +  j  (             ;    5   ¸   
T  =   ;   5   5   : Q;    5   ¸   
T  =   ;   5   5   : QÙÏ),ÙÏ,H    Services   perms!   addFromPrincipal   offline-app   Ci)   nsIPermissionManager   ALLOW_ACTION   pin-app   ÿÿÿÿ      storeCache               z       ¹      !                                D   !   applicationCache   url	   file   itemType   storage   uri    1       
      ;    5   ¸   
;   5      :    Q;    5   ¸   
   @@:   QV   ¸   
V  =   ;   	5   
Y       ]   : QàÈØÈãÊ5N    Services   cache2   appCacheStorage   LoadContextInfo   default   io   newURI   asyncOpenURI      nsICacheStorage   OPEN_TRUNCATE+   onCacheEntryAvailable   ÿÿÿÿ   E   storeCache/<.onCacheEntryAvailableÁ               r      ¹      \                           0            cacheEntry   isNew   appCache   result   outputStream   inputStream)   bufferedOutputStream    ¦  ù  7             T  ¸    
=   =   : QT  ¸    
=   =   : QT  ¸   
>:    Q;   5   ¸   
;   	5   
:   QV  ¸   
   ?×ÿ@: Q;   5   ¸   
;   	5   :   QV  ¸   
V   X : QV  ¸   
V  V  ¸   
:  : QV  ¸   
:  QV  ¸   
:  QV  ¸   
:  QT  ¸   
:  Q;   â      5   =      =      =   : Q   ¸   
      : QT  ¸   
:  QØØ;ËÈ>ÑÊ>È@ØÑÊA#ÈCÖÚ,ÿÿÿÔÏÏÏIÎöÚÎ %   setMetaDataElement   request-method   GET   response-head#   HTTP/1.1 200 OK
!   openOutputStream   CcQ   @mozilla.org/network/file-input-stream;1   createInstance   Ci%   nsIFileInputStream	   init[   @mozilla.org/network/buffered-output-stream;1/   nsIBufferedOutputStream   writeFrom   available   flush   close   markValid   debug	   path	    ->     (   )   markEntry   ÿÿÿÿ      readFile               g       ¹   
   !                                D      aFile   aPrincipal   aCallback   channel   À  Q             ;    ¸   
   @@@T @;   5   5   ;   5   5   :    QV   =   0   Q;    ¸   	
V       : QSÑÏÏSÈ[ÏÙl    NetUtil   newChannel2   Ci   nsILoadInfo   SEC_NORMAL!   nsIContentPolicy   TYPE_OTHER   contentType   plain/text   asyncFetch2   ÿÿÿÿ      readFile/<Á               Â       ¹      B                                       aStream   aResult   converter	   data  <  ¼  \       
      ;    ¸   
T :     <;   ¸   
=      5   : Q         @: Q;   5   ¸   
;   	5   
:    QV   =   0   Q;   ¸   
T  T  ¸   
:  :   Q   V   ¸   
V  : : QÏàËeÑÊeÈgÏiÏÊ/iÈkÕ
ÿÿÿö,    Components   isSuccessCode   Cu   reportErrorW   OfflineCacheInstaller: Could not read file 	   path   CcY   @mozilla.org/intl/scriptableunicodeconverter   createInstance   Ci;   nsIScriptableUnicodeConverter   charset   UTF-8   NetUtil/   readInputStreamToString   available!   ConvertToUnicode   ÿÿÿÿ      parseCacheLine                       ¹   
                           
            app	   urls	   line   Ù  ¨  o       	         Q;    5   ¸   
T @T  5   :    QT ¸   
V   5   : QÈ   <   Qv   Q;   =   T =   V   =   	R pÈ    DÝÈÝÌàË    Services   io   newURI   origin	   push	   spec   Error9   Unable to parse cache line:    (   )    ÿÿÿÿ          url        ÿÿÿÿ          e            H          B   ÿÿÿÿ   J   0   ÿÿÿÿ   ÿÿÿÿ   #   parseFallbackLine                    ¹      Z                       &            app	   urls   namespaces   fallbacks	   line   split	   type   namespace   fallback     Ä  p  x             T ¸    
     :    QV   Ù   ×   ;   =   R p;   5   5     QV   - Á
:  ¸   
:  5      Q   
5   	  Q¸   
:  5      Q   
5   	  QQQ;   
5   ¸   
V  @T  5   : 5   W  Q;   
5   ¸   
V  @T  5   : 5   W  Q   <  Qv  Q;   =   T =   V  =   R pÈ    T ¸   
Z  V  `   V  `  V  `  : QT ¸   
V  : QT ¸   
V  : QÏÈÌË}ÔÞçØWÞÍÞÒÌàËÎÈÈÈÿÿÿÞÒÒ    split   length   Errora   Should be made of two URLs seperated with spaces   Ci9   nsIApplicationCacheNamespace%   NAMESPACE_FALLBACK	   next	   done   value   Services   io   newURI   origin	   spec?   Unable to parse fallback line:    (   )	   push    ÿÿÿÿ         e       [ \t]+         ©   [         0   ÿÿÿÿ   ÿÿÿÿ   !   parseNetworkLine               ´       ¹   
   3                                       namespaces	   line	   type    ½               ;    5   5      QT >7=   E   2QT Ù   ?D   "QT ?7=   D   QT ?7=      6T  ¸   
Z  V   `   =   `  =   `  : Q   1T  ¸   
Z  V   `   ;   	`  =   `  : QÔòË1ÎÈÉÉÿÿÿåÉÎÈÉÉÿÿÿÞ'    Ci9   nsIApplicationCacheNamespace!   NAMESPACE_BYPASS   *   length       		   push      namespace   ÿÿÿÿ      parseAppCache              2      ¹      ¼                                   app	   path   content   lines	   urls   namespaces   fallbacks   currentSection   Õ                 T ¸    
     :    QZ     QZ     QZ     Q=     Q>  Q   ·m  QV   V  7  Q    ¸   
V  : D   QV  Ù       È  fV  =      È  QV  =      =   W  QÈ  2   HV  =      =   W  QÈ     $V  =      =   	W  QÈ   êV  =      #;   
â   
T  V  V  : Q   _V  =       ;   â   V  V  : Q   5V  =   	   &;   â   T  V  V  V  V  : Q   \  Qv  Q;   =   V  =   V  5   =   T =   V  =   V  R pÈ    ÈV  #?W  QQãV  V   Ù   ÿÿþ>ÈY   V  ]   V  ]   V  ]   ÏÈÉÉÉÊ& · © ÇÎÐÉÊAÊAÊÊAÊÊÊAÊÊÊA  ÊÞÊÛÊæÌÖÊÊÖ  ¾Ì  $ÎÿÿÿîÖ  ÅÉÉÊ    split   CACHE	   test   length   CACHE MANIFEST   CACHE:   NETWORK:   NETWORK   FALLBACK:   FALLBACK   parseCacheLine!   parseNetworkLine#   parseFallbackLine   Error   Invalid 9    line in appcache manifest:
   message   
From:    
Line    : 	   urls   namespaces   fallbacks    ÿÿÿÿ         i                  	   line                    e       \r?\n       ^#        H   Ç                =   Ó  ÿÿÿÿ   J   ¢                                    º             Þ                          P         ÿÿÿÿ      installCache               m      ¹      t                          2      D      app   cacheDir   cacheManifest   principal   appcacheURL   groupID!   applicationCache#  3$  Ì       	         5        ;   â      5    :    Q   ¸   
   5   : Q   ¸   
=   : Q   ¸   
:         ¸   
:     Q   ¸   
=   : Q   ¸   
:      ;   5   	¸   

   5      5   B:    Q;   â   V   : Q   5      Q   =      5   =     Q;   ¸   
V  :    Q   ¸   
:  Q;   â      V       : QËÔÉÚÕÌÌÉÕÌÑÕ  ÜÈÒÐ  çáÐÉÐÜ     cachePath   makeFile   append   appId   cache   exists   clone#   manifest.appcache   Services+   scriptSecurityManager/   getAppCodebasePrincipal   origin   localId1   enableOfflineCacheForApp   appcache_path   #   +f/   applicationCacheService-   createApplicationCache   activate   readFile   ÿÿÿÿ      readAppCache                ¾       ¹   
   3                                      content   entries   array õ  /$  ë       	      ;    â          5   T  :    Q   5   ¸   
    : Q;   R     Q   5   ¸   
   : Q    ¸   
   : Q;   â               ;   5   	: Qá
ÉÚ ÉÚÚèÊ 2    parseAppCache	   path	   urls   forEach   MutableArray   namespaces   addNamespaces   storeCache'   nsIApplicationCache   ITEM_MANIFEST   ÿÿÿÿ   #   processCachedFile              :      ¹      L                                     url	   path	   file   paths   itemType x  "  î             T  ¸    
  5   5   =   :    Q    ¸   
:    QV   ¸   
=   :   QV  ¸   
V  5   : QV  ¸   	
:      4  Q=   
V  5   =     Q;   V  R pÈ;   5     Q      5   ¸   
T  : ×ÿ   6;   â   =   T  =   : QV  ;   5   W  Q;   â       T  V  V  : Q
ÞÈ
ÑÈ
ÐÈØ
ËËÚÊ
ÏÙ
ÝÎxã2    replace   origin	   spec      clone   split   /   forEach   append   exists   File 	   pathw    exists in the manifest but does not points to a real file.   Error'   nsIApplicationCache   ITEM_EXPLICIT   fallbacks   indexOf   debug   add fallback:    
   ITEM_FALLBACK   storeCache    ÿÿÿÿ         msg           .   ÿÿÿÿ   ÿÿÿÿ   !   processNamespace               ã       ¹   	   #                                       	   type	   spec	   data â"  #        
      T  - Á
:  ¸    
:  5      Q   
5   W   Q¸    
:  5      Q   
5   W  Q¸    
:  5      Q   
5   W  QQQ;   â   =   V   =   V  =   V  =   : Q      ¸   
;   V   V  V  R B: QMÿÿÿìÝççØôãÿÿÿì< 	   next	   done   value   debug   add namespace:     -    
   appendElement   Namespace