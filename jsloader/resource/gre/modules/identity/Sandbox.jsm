ç¿s¹                ô      ¹      k                                 0     resource://gre/modules/identity/Sandbox.jsm     1                            Af    0    Q;   5      Q5      Q5      QQ=   	   Q;   ¸   

=   : Q;   ¸   

=   : Q;   ¸   
A=   =   : QA   0   QA5   Y      a      ]      ]      ]      ]      ]   0   Q	Ì$	ê5ËÕ3Õ1ÍR"Ì(*Ë/Ê8ÊCÊOÊrÊ  Ð !   EXPORTED_SYMBOLS   Cc   Ci   Cu   Components   classes   interfaces   utils   XHTML_NS9   http://www.w3.org/1999/xhtml   importK   resource://gre/modules/XPCOMUtils.jsmG   resource://gre/modules/Services.jsm   XPCOMUtils-   defineLazyModuleGetter   LoggerY   resource://gre/modules/identity/LogUtils.jsm   Sandbox   prototype   id   reload	   free   _createFrame   _createSandbox	   _log                     Sandbox                  ÿÿÿÿ      Sandbox                 X       ¹   	                                       	   aURL   aCallback  ¥  ©  "             A;   5   ¸   
T  @@: 5   0    QA¸   
=   A5    : QA¸   
:  QA¸   
T : Q$×Î×ÌÏ 	   _url   Services   io   newURI	   spec	   _log+   Creating sandbox for:   _createFrame   _createSandbox   ÿÿÿÿ   3   this.Sandbox.prototype.idÁ                   :       ¹                                             ³  /             A5    5   ¸   
;   5   : ¸   
;   5   : 5   ÜÊÊ0ÉA    _frame   contentWindow   QueryInterface   Ci+   nsIInterfaceRequestor   getInterface#   nsIDOMWindowUtils   outerWindowID   ÿÿÿÿ      Sandbox_reload                 ?       ¹                                      D      aCallbackA  %  8       	      A¸    
=   A5   =   A5   : QA¸   
    ¸   
A: : QâÔ=:!ÿÿÿã= 	   _log   reload:   id   :	   _url   _createSandbox	   bind   ÿÿÿÿ      createdSandbox                 '       ¹                                             aSandbox ±    :             A¸    
=   T  5   : Q   T  : QÙÍ 	   _log)   reloaded sandbox id:   id   ÿÿÿÿ      Sandbox_free                   G       ¹                                             5	  C             A¸    
=   A5   : QA5   ¸   
A5   : QA@0   QA@0   QA@0   Q××ÈÈÈ 	   _log   free:   id   _container   removeChild   _frame	   _url   ÿÿÿÿ   )   Sandbox__createFrame                 {      ¹   #   n                           %             hiddenWindow   doc   frame   docShell   markupDocViewerÎ	  Ø  O             ;    5   5      QV   5     QV  ¸   
;   =   :   QV  ¸   
=   =   	: QV  =   0   
QV  5   =   0   QV  5   ¸   
V  : QV  5   ¸   
;   5   : ¸   
;   5   : ¸   
;   5   : ¸   
;   5   :   QV  ¸   
;   5   5   : QV  B0   QV  B0   QV  B0   QV  B0   QV  B0   QV  5     QV  C0    QAV  0   !QAV  5   0   "QÔÎTÕÈÙÏÔØZÚÊÊZÊ\ÊZÊ]ÊZÈ`ÞcËËËËËjÎËnËÐ&    Services   appShell   hiddenDOMWindow   document   createElementNS   XHTML_NS   iframe   setAttribute   mozframetype   content   sandboxW   allow-forms allow-scripts allow-same-origin   style   visibility   collapse   documentElement   appendChild   contentWindow   QueryInterface   Ci+   nsIInterfaceRequestor   getInterface!   nsIWebNavigation   nsIDocShell	   stop   STOP_NETWORK   allowAuth   allowPlugins   allowImages   allowMedia%   allowWindowControl   contentViewer'   authorStyleDisabled   _frame   _container   ÿÿÿÿ   -   Sandbox__createSandbox                     ¹      R                                D      aCallback3   _makeSandboxContentLoaded	   self   webNav  ´  r                    QA   QA5    ¸   
=      C: QA5    5   ¸   
;   5   : ¸   
;   5   :    QV   ¸   	
A5   
;   5   5   @@@: QtËrÒ    ÒÊ  ÊÊ  ÈËÏ        _frame!   addEventListener!   DOMWindowCreated   contentWindow   QueryInterface   Ci+   nsIInterfaceRequestor   getInterface!   nsIWebNavigation   loadURI	   _url/   LOAD_FLAGS_BYPASS_CACHE   ÿÿÿÿ   3   _makeSandboxContentLoaded                        ¹   
   &                                       event U  £  t       	            ¸    
=         5   T  5   5   ¸   
:  : QT  5         5   5            5   ¸   
=   	   C: Q         : QåÔuwÝzÖËz~Ô 	   _log5   _makeSandboxContentLoaded:   id   target   location   toString   _frame   contentDocument'   removeEventListener!   DOMWindowCreated   ÿÿÿÿ      Sandbox__log                2      ¹                                             aMessageArgs Ô  +               àU  Q;    5   ¸   
;    f    ¸   
T  : O Qåÿÿÿç;    Logger   log   apply   concat                     sandbox               