ç¿s¹                ¤     ¹   (   Ú                                 0     resource://gre/modules/UserCustomizations.jsm     »+                                ;   5       Q;   5      Q;   5      QAf    0   Q;    ¸   
=   	: Q;    ¸   
=   
: Q;    ¸   
=   : Q;   ¸   
A=   =   =   : Q;   ¸   
A=   =   =   : Q;   ¸   
A=   =   =   : QAY   B]   Z   ]   Y   ]   @]   B]      ]      ]      ]      ]       ]   !   ]   "   	]   #   
]   $   ]   %   ]   &   ]   '0   Q;   ¸   &
:  QÊ(	1	ÐÐÐÌ/Õ3Õ1Õ2Ò<Ò7Ò8(/135ÉÊ<ÊDÊVÊ  Ê  Ê  ¦Ê  ÆÊ Ê $Ê 9Ê ZÐ pÐ    Cu   Components   utils   Cc   classes   Ci   interfaces!   EXPORTED_SYMBOLS   importK   resource://gre/modules/XPCOMUtils.jsmG   resource://gre/modules/Services.jsmI   resource://gre/modules/AppsUtils.jsm   XPCOMUtils/   defineLazyServiceGetter	   ppmmU   @mozilla.org/parentprocessmessagemanager;1+   nsIMessageBroadcaster	   cpmmS   @mozilla.org/childprocessmessagemanager;1!   nsIMessageSender   console;   @mozilla.org/consoleservice;1#   nsIConsoleService%   UserCustomizations   _debug   _items   _loaded   _windows   _enabled   _addItem   _removeItem   register#   _updateAllWindows   unregister+   _unloadForManifestURL   _injectItem   _injectInWindow   observe	   init   receiveMessage                  %   UserCustomizations                  ÿÿÿÿ      debug                 U       ¹   	                                       	   aMsg o  5  (             ;    5       ;   â   =   ;    5      =      
=   =   T  =   : QË,ÏÊ
ÕÐ,.  %   UserCustomizations   _debug	   dump5   -*-*- UserCustomizations (   _inParent   parent   child   ):    
   ÿÿÿÿ      log                        ¹                                          	   aStr C  o  1             ;    ¸   
T  : QÓ    console!   logStringMessage   ÿÿÿÿ   A   this.UserCustomizations._addItemÁ                 d       ¹   	                                          aItem U    <             ;    â    =   ;   â   T  : : QA5   ¸   
T  : QA5      %;   ¸   
=   Z  T  `   : QÜÿÿÿëÔÕ6ÿÿÿÊ>    debug   _addItem:    uneval   _items	   push   _inParent	   ppmm+   broadcastAsyncMessage-   UserCustomizations:Add   ÿÿÿÿ   G   this.UserCustomizations._removeItemÁ                       ¹   	                                   D      aHash   index'  	  D             ;    â    =      : Q×ÿ   QA5   ¸   
A    : Q   ×ÿ   A5   ¸   
   ?: QA5      ;   ¸   
=      : QÙÈ×MÈ×QÚ?    debug   _removeItem:    _items   forEach   splice   _inParent	   ppmm+   broadcastAsyncMessage3   UserCustomizations:Remove   ÿÿÿÿ   K   this.UserCustomizations._removeItem/<Å                 "       ¹      
                                       script   pos    Ù  G             T  5          T       QÎÎ 	   hash   ÿÿÿÿ   A   this.UserCustomizations.registerÁ               5      ¹      P                          $      D      aManifest	   aApp   customizations	   base 	  ß  V             ;    â    =      5   : QA5    D   'Q   5    D   Q   5   =      i;    â    =   A5   =      5   =   	   5   =   
: Q;    â    ;   â      : : QT  5      QV   ;   HD   Q;   ¸   
V   :     ;   5   ¸   
   5   @@:    QV   ¸   
A    : QA¸   
:  QÞYÍáÖÑ×Z]ÙÿÿÿúaÍÐ(ÐfÝÉhÕ  Ì    debugQ   Starting customization registration for    manifestURL   _enabled   enabled	   role   addonO   Rejecting registration (global enabled=   ) (app role=   , enabled=   )   uneval   customizations   undefined   Array   isArray   Services   io   newURI   origin   forEach#   _updateAllWindows   ÿÿÿÿ   E   this.UserCustomizations.register/<Å                W      ¹      \                          $         	   item   custom ü  »  h             T  5     D   QT  5    Å=   I   <;   â   =   ;   â   T  : =     5   : QY   T  5    ]      5   ]     5   ]   Z   ]   	Z   ]   
   Q   ;   ¸   
T  : 0   QT  5   	E   Q;   ¸   
T  5   	:    T  5   	¸   
A    : QT  5   
E   Q;   ¸   
T  5   
:    T  5   
¸   
A   : QA¸   
   : Qj
ÏÏÏÍÕkmr
ÍÏÏÉÏyÔÉ{âÙ  âÙ  Ñ    filter   string   log   Mandatory filter property not found in this customization item:    uneval	    in    manifestURL   appStatus   status   css   scripts	   hash   AppsUtils#   computeObjectHash   Array   isArray   forEach   _addItem   ÿÿÿÿ   I   this.UserCustomizations.register/</<Å                 -       ¹                                             css   ß  |                5    ¸   
    ¸   
T  : : Q
åÿÿÿð#    css	   push   resolve   ÿÿÿÿ   I   this.UserCustomizations.register/</<Å                 -       ¹                                             script A                    5    ¸   
    ¸   
T  : : Q
åÿÿÿì*    scripts	   push   resolve   ÿÿÿÿ   S   this.UserCustomizations._updateAllWindowsÁ                   [       ¹   
                                        ÿ  ø               ;    â    =   : QA5      ;   ¸   
=   Y   : QA5   ¸   
A5   ¸   	
A: : QÓÚÛÿÿÿê7    debug   UpdateWindows   _inParent	   ppmm+   broadcastAsyncMessageA   UserCustomizations:UpdateWindows   _windows   forEach   _injectInWindow	   bind   ÿÿÿÿ   E   this.UserCustomizations.unregisterÁ                      ¹   
   +                                      aManifest	   aApp   customizations    Ï               A5        ;   â   =   T 5   : QT  5      QV   ;   HD   Q;   ¸   
V   :     V   ¸   
A    : QA¸   	
T 5   : QÜÍÐ(ÐÕÔ-    _enabled   debugU   Starting customization unregistration for    manifestURL   customizations   undefined   Array   isArray   forEach+   _unloadForManifestURL   ÿÿÿÿ   I   this.UserCustomizations.unregister/<Å                        ¹                                          	   item M                  A¸    
;   ¸   
T  : : Q×ÿÿÿï4    _removeItem   AppsUtils#   computeObjectHash   ÿÿÿÿ   [   this.UserCustomizations._unloadForManifestURLÁ                 «       ¹      2                                      aManifestURL ó  ¡  ¦             ;    â    =   T  : QA5      ;   ¸   
=   T  : QA5   T  7    A5   T  75   E   QA5   T  75   Ù   >   A5   T  75   	¸   

A    : QA5   T  @9Q×ØËÕÖà  ÃÌ"    debug-   _unloadForManifestURL    _inParent	   ppmm+   broadcastAsyncMessage3   UserCustomizations:Unload   _loaded   scripts   length   css   forEach   ÿÿÿÿ   _   this.UserCustomizations._unloadForManifestURL/<Å                É       ¹      *                                    aItem í  s  ¸                Q;    â    =   T  5   5   : QT  5   ¸   
;   5   : ¸   
;   5   	:    QV   ¸   

T  5   ;   5   	5   : QÈ   D   Qv   Q;   â   =   T  5   5   =   V   : QÈ      áÙÊÊ  »ÈìÌó    debug   unloading    uri	   spec   window   QueryInterface   Ci+   nsIInterfaceRequestor   getInterface#   nsIDOMWindowUtils   removeSheet   AUTHOR_SHEET   log7   Error unloading stylesheet     :     ÿÿÿÿ          utils        ÿÿÿÿ          e                         ÿÿÿÿ      8   ÿÿÿÿ   ÿÿÿÿ   G   this.UserCustomizations._injectItemÁ                %      ¹      a                          "      D      aWindow   aItem   aInjected   utils   manifestURL   sandbox »  x  Æ             ;    â    =   ;   â   T : =      5   5   : Q   ¸   
;   5   : ¸   	
;   5   
:    QT 5      QT 5   ¸   
A    : Q   QT 5   Ù   >   <;   ¸   
Z     `   Y   B]      ]   :    QT 5   ¸   
A   : Q          ¸   
=   A   : QÜÚÿÿÿæÖÊÊ  ÈÉÎÙ  áÏÐÉÊ  ãÉ  éÙ  ýÛ	    debug   Injecting item    uneval	    in    location	   href   QueryInterface   Ci+   nsIInterfaceRequestor   getInterface#   nsIDOMWindowUtils   manifestURL   css   forEach   scripts   length   Cu   Sandbox   wantComponents!   sandboxPrototype!   addEventListener   unload   ÿÿÿÿ   K   this.UserCustomizations._injectItem/<Å              A      ¹      L                                  	   aCss   uri   V  Î       	         ¸    
T  : ×ÿI   ;   â   =   T  : Q;   5   ¸   
T  @@:    Q      ¸   
V   ;   5   5   	: QA5   
      7    .A5   
      Y   Z   ]   Z   ]   9QA5   
      75   ¸   
Y      ]   V   ]   : Q   ¸   
T  : Q   :  Qv  Q;   â   =   T  =   V  : QÈ    Ï
×
ÖÈ  µèÒ
ÕÉ	Ëâ%ÊÉÿÿÿÊØÌé    indexOf   debug3   Skipping duplicated css:    Services   io   newURI   loadSheet   Ci#   nsIDOMWindowUtils   AUTHOR_SHEET   _loaded   css   scripts	   push   window   uri   log3   Error loading stylesheet     :     ÿÿÿÿ         e         R   ¹         .   ÿÿÿÿ   ÿÿÿÿ   K   this.UserCustomizations._injectItem/<Å                =      ¹      I                                    aScript n  ·  é             ;    â    =   T  : Q   ¸   
T  : ×ÿI   ;    â    =   T  : Q;   5   ¸   
T        =   : QA5         7    .A5         Y   Z   ]   	Z   ]   
9QA5         75   
¸   
Y         ]   T  ]   : Q   ¸   
T  : Q   :   Qv   Q;   â   =   T  =   V   : QÈ    ×Ï
×  ¸çÒ
ÕÉ	Ëâ)ÏÈÿÿÿÅØÌé    debug   Sandboxing    indexOf9   Skipping duplicated script:    Services   scriptloader   loadSubScript   UTF-8   _loaded   css   scripts	   push   sandbox   uri   log#   Error sandboxing     :     ÿÿÿÿ          e         K   ¼         .   ÿÿÿÿ   ÿÿÿÿ   K   this.UserCustomizations._injectItem/<Å                          ¹      
                                     $  l  þ             ;    ¸   
   : Q@   QÕ    Cu   nukeSandbox   ÿÿÿÿ   O   this.UserCustomizations._injectInWindowÁ                       ¹   
   3                                D      aWindow   principal	   href   injected  ¯!              ;    â    =   : Q    D   Q   5          5   5      Q;    â    =      5   : Q   5   5      QZ      QA5   ¸   	
A    : QÓÌËÕÞÕÊ× !    debug   _injectInWindow   document   nodePrincipal%   principal status:    appStatus   location	   href   _items   forEach   ÿÿÿÿ   S   this.UserCustomizations._injectInWindow/<Å                      ¹   
   (                                       aItem   regexp    ©!        	            5    T  5      ;   T  5   =   R    QV   ¸   
      :    KA¸   
   T        : Q;   â   =         ¸   	
:  : QØ
Ó	ÈÕ
Þàÿÿÿá4    appStatus   status   RegExp   filter   g	   test   _injectItem   debug)   Currently injected:    toString   ÿÿÿÿ   ?   this.UserCustomizations.observeÁ                6      ¹      T                                     aSubject   aTopic   aData   Å!  $  $      	      T =    H   á  Q  Q   QT  ¸   
;   5   :    QV   5   5     QV   D   QV  =      	ÈV   ¸   
;   5   : ¸   
;   5   	: 5   
  QA5   ¸   
V  V   : Q;   â   =   V  : QA¸   
V   : QÈ   PT =   H   B   QT  ¸   
;   5   : 5      QA5   ¸   
V   : QÈÉ  Ü×
Ô	È
Ó
Õ
ÕÊÊ ,ÍÙØÖÉË
ÔÍÖ 35 ?   content-document-global-created   QueryInterface   Ci   nsIDOMWindow   location	   href   about:blank+   nsIInterfaceRequestor   getInterface#   nsIDOMWindowUtils)   currentInnerWindowID   _windows   set   debug%   document created:    _injectInWindow-   inner-window-destroyed'   nsISupportsPRUint64	   data   delete    ÿÿÿÿ          window    	   href       id        ÿÿÿÿ          winId           Ô   ÿÿÿÿÿÿÿÿl             ù   <   ÿÿÿÿ   ÿÿÿÿ   9   this.UserCustomizations.initÁ                  }      ¹      q                        .          $  )  9            AB0    QA;   5   ¸   
=   : 0    Q      Qv   QÈ    A5        A;   R  0   QA;   5   	¸   

;   5   : 5   ;   5   5   0   Q;   â   =   : Q;   5   ¸   
A=   B: Q;   5   ¸   
A=   B: QA5       ;   ¸   
=   A: Q   w;   ¸   
=   A: Q;   ¸   
=   A: Q;   ¸   
=   A: Q;   ¸   
=   A: Q;   ¸   
=   Y   : QÈ!×ÎÓÉÒÊ DÈÖÓ× J× LÛÖÖÖÖÚ5    _enabled   Services   prefs   getBoolPref=   dom.apps.customization.enabled   _windows   Map   _inParent   Cc5   @mozilla.org/xre/runtime;1   getService   Ci   nsIXULRuntime   processType)   PROCESS_TYPE_DEFAULT   debug	   init   obs   addObserver?   content-document-global-created-   inner-window-destroyed	   ppmm%   addMessageListener/   UserCustomizations:List	   cpmm-   UserCustomizations:Add3   UserCustomizations:Remove3   UserCustomizations:UnloadA   UserCustomizations:UpdateWindows!   sendAsyncMessage    ÿÿÿÿ          e         	   %       /      ÿÿÿÿ   ÿÿÿÿ   M   this.UserCustomizations.receiveMessageÁ               Ð       ¹      S                                       aMessage	   name	   data 9)  +  Z      	      T  5       QT  5     QV   x=   y   2=   y   K=   y   \=   y   g=   y   rz   ~T  5   ¸   
=   A5   	: Q   [V  ¸   

A5   A: Q   @A¸   
V  : Q   +A¸   
V  : Q   A¸   
:  Q   ÍÍl  ±u
u
u
u
uÊ _ÞXÖXÐXÐXÌX 	   name	   data/   UserCustomizations:List-   UserCustomizations:Add3   UserCustomizations:Remove3   UserCustomizations:UnloadA   UserCustomizations:UpdateWindows   target!   sendAsyncMessage   _items   forEach   _addItem   _removeItem+   _unloadForManifestURL#   _updateAllWindows