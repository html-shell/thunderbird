ç¿s¹                     ¹   '   á                                      resource://gre/modules/sessionStoreManager.js     ¼)                                   f        Q;   5      Q;   5      Q;   5      Q;   ¸   
=   	: Q;   ¸   
=   
: Q;   ¸   
=   : Q;   ¸   
=   : Q¼à   Qn   Y   B]   @]   ;   ]   @]   @]   B]   @]      a      ]      ]      ]      ]      ]      ]      ]      	]      
]      ]       ]   !   ]   "o   Q;   #5   $¸   %
=   &A   : QËÐÐÐÕ6Õ0Õ/Õ1Ê#%Ê,29>CÊOÊaÊ  Ê  Ê  ²Ê  ½Ê  ÐÊ  ×Ê  ñÊ Ê /Ê <Ð JÑË J !   EXPORTED_SYMBOLS   Cc   Components   classes   Ci   interfaces   Cu   utils   importQ   resource://gre/modules/AsyncShutdown.jsmE   resource://gre/modules/NetUtil.jsmC   resource://gre/modules/osfile.jsmG   resource://gre/modules/Services.jsm9   SESSION_AUTO_SAVE_DEFAULT_MS'   sessionStoreManager   _initialized+   _sessionAutoSaveTimer?   _sessionAutoSaveTimerIntervalMS   _initialState'   _currentStateString'   _shutdownStateSaved   _promise   sessionFile   _init!   _loadSessionFile3   _openOtherRequiredWindows!   _saveStateObject%   _createStateObject   _saveState;   _sessionAutoSaveTimerCallback   observe   loadingWindow   unloadingWindow!   stopPeriodicSave#   startPeriodicSave   AsyncShutdown'   profileBeforeChange   addBlockerC   sessionStoreManager: session.json                  '   sessionStoreManager                  ÿÿÿÿ   ?   sessionStoreManager.sessionFileÁ                 B       ¹                                               sessionFileU  ß  C             ;    5   ¸   
=   ;   5   :    QV   ¸   
=   : QV   àÈÔ    Services   dirsvc   get   ProfD   Ci   nsIFile   append   session.json   ÿÿÿÿ      ssm_init                   =       ¹                                            È  
  O             A¸    
:  Q;   5   ¸   
A=   B: QA¸   
:  QAC6   QÌVÜXÌZÈ !   _loadSessionFile   Services   obs   addObserver1   quit-application-granted#   startPeriodicSave   _initialized   ÿÿÿÿ   '   ssm_loadSessionFile                ¹      ¹   $   s                       1              inStream	   dataÃ
  º  a             A5    ¸   
:      ;   5   ¸   
;   5   :    QV   ¸   
A5    ×ÿ>>: Q;   ¸   	
V   V   ¸   

:  Y   =   ]   :   QV   ¸   
:  QA@6   QA;   ¸   
V  : 6   Q   2  Qv  Q;   ¸   
=   V  : QÈ    V   D   QA5       ¹Æ      Q  Q=   ;   R  ¸   
:  ¸   
     =   : =     Q;   5   ¸   
;   5   5   5   V  :    Q;   5    ¸   !
A5    5   "   : ¸   #
@A   : QÈÇÍgÑÊgÈiÙÐË/1ÊjÈmÏqÈsuÑÎwÌá{Ë	×~
í
éÉë  {'    sessionFile   exists   CcQ   @mozilla.org/network/file-input-stream;1   createInstance   Ci%   nsIFileInputStream	   init   NetUtil/   readInputStreamToString   available   UTF-8   charset   close'   _currentStateString   _initialState	   JSON   parse   Cu   reportErrore   sessionStoreManager: error in session state data,    session_error_	   Date   toISOString   replace      .json   OS	   Path	   join   Constants   profileDir	   File	   move	   path	   then    ÿÿÿÿ         ex        ÿÿÿÿ         errorFile       errorFilePath            +   ssm_loadSessionFile/<å                 8       ¹                                              error Ë  ®               ;    ¸   
=   A5   5   =      =   T  : "ÑÒÐ  "N    Cu   reportErrorM   sessionStoreManager: failed to rename    sessionFile	   path	    to    :    \D        ¡          Á   &   ÿÿÿÿ     ¬   ÿÿÿÿ   ÿÿÿÿ   9   ssm_openOtherRequiredWindows               |       ¹      E                                       aWindow   i J  7               A5     D   QA5    5    D   
QT      >W   Q   /mT  ¸   
=   =   =   : QV   #?W   QãV   A5    5   Ù   ÿÿÿ¿ÍÒ	%/#FË    ;Ì    ÜO    _initialState   windows	   openQ   chrome://messenger/content/messenger.xul   _blank}   chrome,extrachrome,menubar,resizable,scrollbars,status,toolbar   length    5   F      ÿÿÿÿ   '   ssm_saveStateObject                       ¹      ;                                       aStateObj	   data   û         
      ;    ¸   
T  :    Q   A5      A;   5   ¸   
A5   5      Y   A5   5   =   	]   
C]   : ¸   
A    A   : 6   QÏÉÌÒÐÖ  ¥ÊÌ  ¥É  ¬+ 	   JSON   stringify'   _currentStateString   _promise   OS	   File   writeAtomic   sessionFile	   path	   .tmp   tmpPath   flush	   then   ÿÿÿÿ   E   ssm_saveStateObject/this._promise<å                          ¹                                              A  ©             ;          6   Õ. '   sessionStoreManager'   _currentStateString   ÿÿÿÿ   E   ssm_saveStateObject/this._promise<å                        ¹                                              error O  ö  ©             ;    ¸   
=   T  : Ñ  ª*    Cu   reportErroro   sessionStoreManager: error storing session state data,    ÿÿÿÿ   +   ssm_createStateObject                          ¹                                               É  ²             Y   >]    Z   ]   Ê    rev   windows   ÿÿÿÿ      ssm_saveState                È       ¹      D                                      state   enumerator?  N  ½       
      A¸    
:     Q;   5   ¸   
=   :   Q   tm  QV  ¸   
:    QV  E   )Q=   V  5   5   E   QV  5   	   'V   5   
¸   
V  ¸   	
:  : QÈãV  ¸   
:  ÿÿÿA¸   
V   : QÈÈÖÈ(  )
ËÈäÉÛÿÿÿí  ÄÕ  ËÐ %   _createStateObject   Services   wm   getEnumerator   mail:3pane   getNext   complete   document   readyStateG   getWindowStateForSessionPersistence   windows	   push   hasMoreElements!   _saveStateObject    ÿÿÿÿ         win        3          5   m   ÿÿÿÿ   ÿÿÿÿ   A   ssm_sessionAutoSaveTimerCallback                          ¹                                            Ê  ú  Ð             ;    ¸   
:  QÐ! '   sessionStoreManager   _saveState   ÿÿÿÿ      ssm_observe                 E       ¹      %                                        aSubject   aTopic   aData   Z    ×             T x=    y   
z   6A5       %A¸   
:  QA¸   
:  QAC6   Q   kAuÊ
ÌÌÈX 1   quit-application-granted'   _shutdownStateSaved!   stopPeriodicSave   _saveState   ÿÿÿÿ   #   ssm_loadingWindow               ®       ¹      9                                        aWindow   firstWindow   windowState ½  $!  ñ             A5     D   QA5      QV      A¸   
:  QAB6   Q@  QA5   E   QA5   5      >A5   5   ¸   
:  W  Q>A5   5   Ù      A@6   QV      A¸   
T  : QV  ØÌ  üÈ×ÒÈÒÈÏ    _initialized'   _shutdownStateSaved   _init   _initialState   windows   pop   length3   _openOtherRequiredWindows   ÿÿÿÿ   '   ssm_unloadingWindow                Û       ¹      `                                     aWindow B"  å%        
      A5        Ó  Q   QC   Q;   5   ¸   
=   :   Q   #mV  ¸   
:  T     BW   QãV  ¸   
:  ÿÿÿÒV      a  QA¸   
:  QA¸   
:    QV  5   	¸   

T  ¸   
:  : QA¸   
V  : QAC6    QÈÈÑ

ÖÈ(3 Ë
 Õ ËÌÈÈÚÿÿÿíÐÊ $ '   _shutdownStateSaved   Services   wm   getEnumerator   mail:3pane   getNext   hasMoreElements!   stopPeriodicSave%   _createStateObject   windows	   pushG   getWindowStateForSessionPersistence!   _saveStateObject    ÿÿÿÿ          lastWindow       enumerator                     state        A   3          Ì   ÿÿÿÿ   ~   [          ÿÿÿÿ   )   ssm_stopPeriodicSave                   ,       ¹                                            N&  '  /            A5       %A5    ¸   
:  QA%    QA@6    QÑÈ" +   _sessionAutoSaveTimer   cancel   ÿÿÿÿ   +   ssm_startPeriodicSave                   ^       ¹   
   *                                      n'  .)  <            A5        VA;   5   ¸   
;   5   : 6    QA5    ¸   
A5   A5   ;   5   5   	: QÒÊ ?#ÉÍÏ BE +   _sessionAutoSaveTimer   Cc)   @mozilla.org/timer;1   createInstance   Ci   nsITimer!   initWithCallback;   _sessionAutoSaveTimerCallback?   _sessionAutoSaveTimerIntervalMS)   TYPE_REPEATING_SLACK   ÿÿÿÿ                              ¹                                            )  ¸)  K            ;    5   
Ë$ '   sessionStoreManager   _promise