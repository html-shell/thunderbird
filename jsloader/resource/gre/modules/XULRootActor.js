çżsš                G  F   š   '                                         resource://gre/modules/XULRootActor.js                                         	                         ;   â   =   : 5    n    
o    Q5   n   
o   QQn   ;   â   =   : o   Qn   ;   â   =   : o   Q;   â   =   : 5   n   
o   QQ;   â   =   
: 5   	n   	
o   	QQ;   ¸   
=   Y   : 5   n   
o   QQ;   â   =   : 5   n   
o   Q5   n   
o   Q5   n   
o   QQ;   Y   @]   @]   @]   B]   B]      a      b      ]      ]      ]      	]   ;   ¸   
   
=   : ]    ;   ¸   
   =   !: ]   "   ]   #6   Q;   $   6   %Q;   $   6   &QĘ	0	8	M	ĎčÔÉ˙˙˙ýÔÉ˙˙˙ýĎÖ&ĎÖÖÖ3Ď8ú,+038CMSUĘ\Ę`ĘhĘtĘ{Ę  Ę  ˛Ń  Ĺ  ˛Č  ÇŃ  ĺ  ÇČ  çĐĐĐ    Ci   Cu   require   chrome   Services   DevToolsUtils=   devtools/toolkit/DevToolsUtils   RootActor7   devtools/server/actors/root   DebuggerServer)   devtools/server/main   Promise   importE   resource://gre/modules/Promise.jsm   BrowserTabList   BrowserTabActor!   BrowserAddonListC   devtools/server/actors/webbrowser   XulTabList   prototype   _onListChanged   _actorByBrowser   _checkedWindows   _mustNotify)   _listeningToMediator   onListChanged   _checkListening%   _notifyListChanged   _getTopWindow   getList   makeInfallibleC   XulTabList.prototype.onOpenWindow   onOpenWindowE   XulTabList.prototype.onCloseWindow   onCloseWindow'   onWindowTitleChange   exports   register   unregister   ˙˙˙˙      createRootActor               ¨       š      8                                        aConnection   parameters   rootActor    E               Y   ;    T  R ]   ;   T  R ]   ;   5   ]   ;   ]      Q;   T  V   R   Q;   5   	   /V  ;   5   	¸   
=   : >76   
Q   V  =   6   
QV  É	ČÉČĎĎ#ÍČĘ*ÚĐĎ*    XulTabList   tabList!   BrowserAddonList   addonList   DebuggerServer)   globalActorFactories#   sendShutdownEvent   onShutdown   RootActor!   chromeWindowType   applicationType   split   :   xulrunner   ˙˙˙˙   +   appShellDOMWindowType                        š      
                                        aWindow   -  0             T  5    5   ¸   
=   : 2Ů<    document   documentElement   getAttribute   windowtype   ˙˙˙˙   #   sendShutdownEvent                      š      E                                      windowTypes  -	  8             ;    5   5      QV   - Á
:    Q   Ŕm5   W  Q  Q;   5   ¸   
V  :   Q   vm  Q  QV  ¸   
:    QV  5   ¸   	
=   
:   QV  ¸   
=   CB: QV  5   5   ¸   
V  : QČăV  ¸   
:  ˙˙˙ČăQ¸   
:  5   ˙˙˙1Č ÔÓ8  Ô×ŐČ(  )Í
ËČ
ŐČÖŢ<Ö:Ë˙˙˙ďŇ    DebuggerServer)   RemoteDebuggerServer#   chromeWindowTypes   value   Services   wm   getEnumerator   getNext   document   createEvent   Event   initEvent#   Debugger:Shutdown   documentElement   dispatchEvent   hasMoreElements	   next	   done    ˙˙˙˙      	   type                     enumerator                    win       evt       ,   Ô      `          "   ß   ˙˙˙˙   9   Ž          c   n         ˙˙˙˙      XulTabList                 :       š                                              aConnection Ŕ
  Ť  M             AT  6    QA;   R  6   QA;   ;   5   5   R 6   QĘÉRÖÉ?    _connection   _actorByBrowser   Map   _checkedWindows   Set   DebuggerServer)   RemoteDebuggerServer#   chromeWindowTypes   ˙˙˙˙   E   XulTabList.prototype.onListChangedÁ                          š                                            Y    \             A5        _onListChanged   ˙˙˙˙   E   XulTabList.prototype.onListChangedÁ                 D       š                                              v   e  `             T  @IE   QT  '=    I   ;   â   =   : pAT  6   QA¸   
:  QËĘĎdĘĚ    function   Error}   onListChanged property may only be set to 'null' or a function   _onListChanged   _checkListening   ˙˙˙˙   I   XulTabList.prototype._checkListeningÁ                       š   	                            	           -   shouldListenToMediator  ó  h             A5    E   QA5   D   QA5   5   >   QA5   V   I   J  QV      =      
=     Q;   5   V  Á
A: QAV   6   QČŘŇmËË

ŮÖĚm?    _onListChanged   _mustNotify   _actorByBrowser	   size)   _listeningToMediator   addListener   removeListener   Services   wm    ˙˙˙˙         op        ;   D   ˙˙˙˙   ˙˙˙˙   O   XulTabList.prototype._notifyListChangedÁ                   ,       š                                                t             A5    E   QA5      A¸    
:  QAB6   QŇĚČ    _onListChanged   _mustNotify   ˙˙˙˙   E   XulTabList.prototype._getTopWindowÁ                       š      1                                      winIterŽ  ď  {             ;    5   ¸   
@C:    Q   Mm  QV   ¸   
:    QA5   ¸   
;   â   V  : :    V  ČČăV   ¸   
:  ˙˙˙¨@Ó
Č(]&
ËČŰ#˙˙˙çČ}Ő      Services   wm9   getZOrderDOMWindowEnumerator   getNext   _checkedWindows   has+   appShellDOMWindowType   hasMoreElements    ˙˙˙˙         win            ]       "   F   ˙˙˙˙˙˙˙˙f             ˙˙˙˙   9   XulTabList.prototype.getListÁ     	           ž      š      Č                        >              topWindow  Ř               A¸    
:     QA5   - Á
:    Q  m5   W  Q  Q;   5   ¸   
V  :   Q  Tm  Q  QV  ¸   
:    QB  QV  5   ¸   
=   	: - Á
:    Q   äm5   W  Q  Q  QV  5   
5   =      Č   ­A5   ¸   
V  :   QV      7;   A5   V  @R W  QA5   ¸   
V  V  : QV  5     QV  V  V   E   -QV   E   "QV  5   >E   QV  5   >W  6   QČăQ¸   
:  5   ˙˙˙Č ČăV  ¸   
:  ˙˙ţĄČăQ¸   
:  5   ˙˙ţSČ AC6   QA¸   
:  Q;   ¸   
Y     Q  Q    QA5   - Á
:     rm5   - Á
:  ¸   
:  5      Q   
5   W  Q¸   
:  5      Q   
5   W  QQQ  V  ,  ÎăQ¸   
:  5   ˙˙˙ Č: ČČŐ8 ˛×
Ő
Č( d(ÍËČŐŇ8  řÝÔAŃČĚ  ČŮ  ˘Î
ĎËŃÖ  Ë˙˙˙ěÓ  Ö  Ë˙˙˙ěŇ  ŹČĚÝ#Ů8  ćçĺË˙˙˙ňŇ˙˙˙äB    _getTopWindow   _checkedWindows   value   Services   wm   getEnumerator   getNext   document)   getElementsByTagName   browser   currentURI	   spec   about:blank   _actorByBrowser   get   BrowserTabActor   _connection   set   boxObject   selected   height   width	   next	   done   hasMoreElements   _mustNotify   _checkListening   Promise   resolve    ˙˙˙˙         winName                     winIter                    win       foundSelected                    browser                    actor       bo        ˙˙˙˙         _       actor       /        *   ˛     ^   d     °   ř           ˝  ˙˙˙˙   7            a   L        Ś           ž   Ń         â              ˛   ˙˙˙˙   ˙˙˙˙   E   XulTabList.prototype.onOpenWindow<Á                j       š   	   $                                @      aWindow   handleLoad  z  ˛             ;    ¸   
A    :    Q   ¸   
;   5   : ¸   
;   5   :    Q   ¸   
=      B: QŇÉ  ÂÖ
ĘĘ  ÂÉŰ4    DevToolsUtils   makeInfallible   QueryInterface   Ci+   nsIInterfaceRequestor   getInterface   nsIDOMWindow!   addEventListener	   load   ˙˙˙˙   ]   XulTabList.prototype.onOpenWindow</handleLoad<Ĺ                   T       š                                            N  Ź  ł                ¸    
=         B: QA5   ¸   
;   â      : :    A¸   
:  QŕÜ#˙˙˙çĚ '   removeEventListener	   load   _checkedWindows   has+   appShellDOMWindowType%   _notifyListChanged   ˙˙˙˙   G   XulTabList.prototype.onCloseWindow<Á                        š      H                                       aWindow Ů     Ç             T  ¸    
;   5   : ¸   
;   5   : U  QA5   ¸   
;   â   T  : :    ;   5   	5   
¸   
;   ¸   
A    =   : >: QÔ
ĘĘ  ČÚ!˙˙˙ç  Óč  ä  Ó'  ä  Ó  ä@    QueryInterface   Ci+   nsIInterfaceRequestor   getInterface   nsIDOMWindow   _checkedWindows   has+   appShellDOMWindowType   Services   tm   currentThread   dispatch   DevToolsUtils   makeInfalliblec   XulTabList.prototype.onCloseWindow's delayed body   ˙˙˙˙   K   XulTabList.prototype.onCloseWindow</<Ĺ                      š   
   G                                      shouldNotifyŢ  á  Ó             B   QA5    - Á
:    Q  Q   Łm5   - Á
:  ¸   
:  5      Q   
5   W  Q¸   
:  5      Q   
5   W  QQQV  5   5       /A5    ¸   
V  : QV  ¸   
:  QCW   QăQ¸   
:  5   ˙˙˙NČ V      A¸   
:  QA¸   	
:  Q
Ű8  ˇÝÉçŘĎ
Ő
Ď
  ×#Ë˙˙˙ăŇ  ŕĚĚ    _actorByBrowser   value	   next	   done   ownerDocument   defaultView   delete	   exit%   _notifyListChanged   _checkListening    ˙˙˙˙         browser       actor       &   ˇ          Ç   ˙˙˙˙   ˙˙˙˙   Q   XulTabList.prototype.onWindowTitleChangeÁ                          š                                              i  n  ç              #    ˙˙˙˙   !   exports.registerÁ                        š                                              handle   Â  ę             T  ¸    
;   : QÓ%    setRootActor   createRootActor   ˙˙˙˙   %   exports.unregisterÁ                        š                                              handle â     î             T  ¸    
@: QĎ    setRootActor