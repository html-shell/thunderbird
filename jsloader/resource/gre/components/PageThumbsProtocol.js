çżsš                m     š   "   ˘                          !       0     resource://gre/components/PageThumbsProtocol.js              	                           ;   5       Q;   5      Q;   5      Q;   5      Q;    ¸   	
=   
: Q;    ¸   	
=   : Q;   ¸   
A=   =   : Q;   ¸   
A=   =   : Q;   Y      a      a      a      ]      ]      ]   ;   ¸   
=   : ]   ;   ¸   
Z  ;   5   `   : ]   0   QA;   ¸   !
Z  ;   `   : 0    QĘ$	j	ĐĐĐĐŐ3Ő3Ň)Ň*$'Ę+Ę0Ę5ĘBĘMĘ]Ę_Ń	ČĐ'Î˙˙˙éÎcŃ5É˙˙˙ßÉ,jv    Cu   Components   utils   Cc   classes   Cr   results   Ci   interfaces   importK   resource://gre/modules/PageThumbs.jsmK   resource://gre/modules/XPCOMUtils.jsm   XPCOMUtils-   defineLazyModuleGetter   ServicesG   resource://gre/modules/Services.jsm   FileUtilsI   resource://gre/modules/FileUtils.jsm   Protocol   prototype   scheme   defaultPort   protocolFlags   newURI   newChannel   allowPort   IDM   {5a4ae9b5-f475-48ae-9dce-0b4c1d347884}   classID   generateQI%   nsIProtocolHandler   QueryInterface   NSGetFactory)   generateNSGetFactory   ˙˙˙˙      Protocol                          š                                             $  *  $                  ˙˙˙˙   3   Protocol.prototype.schemeá                          š                                               +             ;    5   Ë    PageThumbs   scheme   ˙˙˙˙   =   Protocol.prototype.defaultPortá                          š                                             ř  ý  0             ×˙    ˙˙˙˙   A   Protocol.prototype.protocolFlagsÁ                   A       š                                           X  1  5             ;    5   5   ;    5   5   ;    5   5   ;    5   5   ĎĐĐŃ,    Ci%   nsIProtocolHandler+   URI_DANGEROUS_TO_LOAD+   URI_IS_LOCAL_RESOURCE   URI_NORELATIVE   URI_NOAUTH   ˙˙˙˙      Proto_newURI               6       š                                             aSpec   aOriginCharset   uri  Y  í  B             ;    5   ¸   
;   5   :    QV   T  0   QV   ŰČÍ    CcC   @mozilla.org/network/simple-uri;1   createInstance   Ci   nsIURI	   spec   ˙˙˙˙   !   Proto_newChannel               ­       š      1                                    	   aURI   url	   file   fileuri Ň  /  M             ;    â    T  : 5      QQ;   ¸   
V   :   Q;   5   ¸   
;   5   V  R :   Q;   5   ¸   	
V  @;   5   
¸   
:  @;   5   5   ;   5   5   : ÍĎĐČŕ!˙˙˙éČŐŃ*ĎĎQVJ    parseURI   url#   PageThumbsStorage#   getFilePathForURL   Services   io   newFileURI   FileUtils	   File%   newChannelFromURI2+   scriptSecurityManager%   getSystemPrincipal   Ci   nsILoadInfo   SEC_NORMAL!   nsIContentPolicy   TYPE_IMAGE   ˙˙˙˙   9   Protocol.prototype.allowPortá                          š                                             ş  Â  ]             B    ˙˙˙˙      parseURI                      š      "                                   	   aURI   scheme   staticHost   re   query   params 9    j       	      ;    5      Q5     QQ;   =   V   =   V  =   R   QT  5   ¸   
V  =   	:   QY      QV  ¸   

=   : ¸   
    : Q   ÜáČŘČËpău    PageThumbs   scheme   staticHost   RegExp   ^   ://   .*?\?	   spec   replace      split   &   forEach   ˙˙˙˙      parseURI/<Á                      š                                             aParam   key   value     p       	      T  ¸    
=   : ¸   
;   : - Á
:  ¸   
:  5      Q   
5      Q¸   
:  5      Q   
5     QQQ      V   ¸   
:  V  9QĎă˙˙˙ńÉçŘŐÉ    split   =   map%   decodeURIComponent	   next	   done   value   toLowerCase