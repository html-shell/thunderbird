ç¿s¹                ¿     ¹   -   ÷                          "       0     resource://gre/components/DownloadLegacy.js     U1         	                        ;   5       Q;   5      Q;   5      Q;   5      Q;   ¸   	
=   
: Q;   ¸   
A=   =   : Q;   ¸   
A=   =   : Q;   Y   ;   ¸   
=   : ]   ;   ¸   
Z  ;   5   `   ;   5   `  ;   5   `  : ]      ]      ]      ]      ]      ]      ]       ]   !   ]   "   	]   #   
]   $   ]   %@]   &@]   'B]   (@]   )@]   *0   QA;   ¸   ,
Z  ;   `   : 0   +QÊA	ÐÐÐÐÕ3ÒJÒHADFÊÑ	ÈLÐ'Î)Î)ÎLÈSÊ  Ê  £ÊÊ  µÊ  ºÊ  ÆÊ  ÑÊ  Ê Ê 
Ê   # ( -Ì 3Ñ5ÉÿÿÿßÉ:    Cc   Components   classes   Ci   interfaces   Cu   utils   Cr   results   importK   resource://gre/modules/XPCOMUtils.jsm   XPCOMUtils-   defineLazyModuleGetter   DownloadsI   resource://gre/modules/Downloads.jsm   PromiseE   resource://gre/modules/Promise.jsm-   DownloadLegacyTransfer   prototype   IDM   {1b4c85df-cbdd-4bb6-b04e-613caece083c}   classID   generateQI-   nsIWebProgressListener/   nsIWebProgressListener2   nsITransfer   QueryInterface   onStateChange!   onProgressChange!   onLocationChange   onStatusChange!   onSecurityChange%   onProgressChange64%   onRefreshAttempted	   init   setSha256Hash!   setSignatureInfo   setRedirects   _deferDownload   _cancelable!   _componentFailed   _sha256Hash   _signatureInfo   NSGetFactory)   generateNSGetFactory   ÿÿÿÿ   -   DownloadLegacyTransfer                          ¹                                             ¼  A             A;   ¸   
:  0    QÍÉ    _deferDownload   Promise   defer   ÿÿÿÿ   #   DLT_onStateChange                P      ¹      \                         +      D      aWebProgress   aRequest   aStateFlags   aStatus  í  ¨  S             ;    ¸   
   :     AC0   QT ;   5   5   E   QT ;   5   5      Æ       Q  ;   5   rE   Q  5   XÂ   Q        ¸   	
;   
5   : QA5   5   ¸   
A   : ¸   
@;   5   : QÈÇ   oT ;   5   5   E   QT ;   5   5      >A5   5   ¸   
A   : ¸   
@;   5   : QA@0   QUÑÈZÙÓ  Ñ_
ÖÔÚgâ  ËgË  ÙÓâ  Ë    È    Components   isSuccessCode!   _componentFailed   Ci-   nsIWebProgressListener   STATE_START!   STATE_IS_NETWORK   nsIHttpChannel   responseStatus   cancel   Cr%   NS_BINDING_ABORTED   _deferDownload   promise	   then   Cu   reportError   STATE_STOP   _cancelable    ÿÿÿÿ       3   blockedByParentalControls             '   DLT_onStateChange/<Å                 g       ¹   	   "                                D      downloadj  	  g                     C0    Q   5   ¸   
  A5   ;   5   r: Q   5   5   5   ¸   
A    : k
ÌoÑÑoxá   5   _blockedByParentalControls   saver#   onTransferStarted   _cancelable   Ci)   nsIHelperAppLauncher   deferCanceled   promise	   then   ÿÿÿÿ   +   DLT_onStateChange/</<Å                   v       ¹   	                                        	  ÿ  x             A5    E   QA5       bA5    ¸   
;   5   : QA5    ;   5   r   1   5   ¸   
  ;   5   : QA@0    QzÌ"ÛÑ~äÈ    _cancelable!   _componentFailed   cancel   Cr   NS_ERROR_ABORT   Ci)   nsIWebBrowserPersist   saver%   onTransferFinished   ÿÿÿÿ   '   DLT_onStateChange/<Å                        ¹   
                                          download q                 ;    ¸   
   :    PT  5   ¸   
A5   : QT  5   ¸   
A5   : QT  5   ¸   
A5   : QT  5   ¸   	
      : QÑ
Ù
Ù
ÙÝ5    Components   isSuccessCode   saver   setSha256Hash   _sha256Hash!   setSignatureInfo   _signatureInfo   setRedirects   _redirects%   onTransferFinished    Y      ÿÿÿÿ   ÿÿÿÿ   )   DLT_onProgressChange                        ¹                                             aWebProgress   aRequest!   aCurSelfProgress!   aMaxSelfProgress#   aCurTotalProgress#   aMaxTotalProgress      Ü  Å               A¸    
T  T T T T T : Q  Ñ  / %   onProgressChange64   ÿÿÿÿ   c   DownloadLegacyTransfer.prototype.onLocationChangeÁ                          ¹                                             å  ë  £              !    ÿÿÿÿ   %   DLT_onStatusChange                 S       ¹      %                                D      aWebProgress   aRequest   aStatus   aMessage    ©  ¥             ;    ¸   
   :     =AC0   QA5   5   ¸   
    : ¸   
@;   5   : QÑÈáË  ¯$    Components   isSuccessCode!   _componentFailed   _deferDownload   promise	   then   Cu   reportError   ÿÿÿÿ   %   DLT_OSC_onDownload                        ¹                                             aDownload .    ¯             T  5    ¸   
      : QÝ6    saver%   onTransferFinished   ÿÿÿÿ   c   DownloadLegacyTransfer.prototype.onSecurityChangeÁ                          ¹                                             É  Ï  µ              !    ÿÿÿÿ   -   DLT_onProgressChange64                 1       ¹                                      D      aWebProgress   aRequest!   aCurSelfProgress!   aMaxSelfProgress#   aCurTotalProgress#   aMaxTotalProgress    x   º"  º             A5    5   ¸   
    : ¸   
@;   5   : Q  ¿áË  Á"    _deferDownload   promise	   then   Cu   reportError   ÿÿÿÿ   )   DLT_OPC64_onDownload                        ¹                                             aDownload 9"  "  Á             T  5    ¸   
      : QÝF    saver   onProgressBytes   ÿÿÿÿ   -   DLT_onRefreshAttempted                        ¹       
                                        aWebProgress   aRefreshURI   aMillis   aSameURI    ò"  
$  Æ             C    ÿÿÿÿ      DLT_init                    ¹                               %      D      aSource   aTarget   aDisplayName   aMIMEInfo   aStartTime   aTempFile   aCancelable   aIsPrivate'   launchWhenSucceeded   contentType   launcherPath       $  ,  Ñ             AT 0    QB   Q@  Q@  QT ;   5   r     QT 5   ;   5   5   W   QT 5   W  QT 5     QT 5   ;   5   5   E   QV  ;   5   r   V  5   	5   
W  QÈ;   ¸   
Y   Y   T  5   ]   T ]   ]   Y   T ¸   
;   5   : 5   5   
]   
   E   Q   5   
]   ]   =   ]   V   ]   V  ]   V  ]   : ¸   
   ¸   
A: : ¸   
@;   5   : QÊÎËÝÍ
ÍÞÏÔ  çÑ
ÍÍ
ÔÒßÊÉÉÉ  çÊ  ïÌ  ý  ï  çÊ  ýË  ç  ý-    _cancelable   Ci   nsIMIMEInfo   preferredAction   saveToDisk	   type7   preferredApplicationHandler   useHelperApp%   nsILocalHandlerApp   executable	   path   Downloads   createDownload	   spec   url   isPrivate   source   QueryInterface   nsIFileURL	   file   partFilePath   target   legacy   saver'   launchWhenSucceeded   contentType   launcherPath	   then	   bind   Cu   reportError    ÿÿÿÿ         appHandler       ÿÿÿÿ   !   DLT_I_onDownload                 x       ¹                                       D      aDownload)  Û+  ï                     C0    Q   ¸   
:  ¸   
@A    : QA5   ¸   
   : Q;   ¸   
;   5   : ¸   
A   : ÌáÖÖÔC )   tryToKeepPartialData   start	   then   _deferDownload   resolve   Downloads   getList   ALL   ÿÿÿÿ   7   DLT_init/DLT_I_onDownload/<Å                          ¹                                             ±*  ¹*  ö              *    ÿÿÿÿ   7   DLT_init/DLT_I_onDownload/<å                        ¹                                          	   list ¸+  Ó+  ü             T  ¸    
   : ;Ó    add    0      ÿÿÿÿ   ÿÿÿÿ   ]   DownloadLegacyTransfer.prototype.setSha256HashÁ                        ¹                                           	   hash $,  O,               AT  0    QÊ    _sha256Hash   ÿÿÿÿ   c   DownloadLegacyTransfer.prototype.setSignatureInfoÁ                        ¹                                              signatureInfo o,  ¯,              AT  0    QÊ$    _signatureInfo   ÿÿÿÿ   [   DownloadLegacyTransfer.prototype.setRedirectsÁ                        ¹                                              redirects Ë,  ÿ,  
            AT  0    QÊ    _redirects