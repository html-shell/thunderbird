ç¿s¹                ÿ  U   ¹   H   x                         .       0     resource://gre/modules/UserAgentUpdates.jsm     5         	                            !   #   %   '   )   +   -   /   1   3   5Af    0    Q;   5      Q;   5      Q;   5      Q;   ¸   
=   	: Q;   ¸   
=   
: Q;   ¸   
A=   =   : Q;   ¸   
A=   =   : Q;   ¸   
A=   =   : Q;   ¸   
A=   =   =   : Q;   ¸   
A=      : Q;   ¸   
A=      : Q;   ¸   
A=      : Q=      Q=      Q;   =       Q;   =   "   !Q;   =   $   #Q;   =   &   %Q;   =   (   'Q;   =   *   )Q=   ,   +Q=   .   -Q=   0   /Q=   2   1Q=   4   3Qn   5B1   5QAY      ]   7   ]   8   ]   9   ]   :   ]   ;   	]   <   
]   =   ]   >   ]   ?   ]   @   ]   A   ]   B   ]   C;   ¸   D
Z  ;   5   E`   ;   5   F`  : ]   G0   6Q	*,48;Ì-	ÐÐÐÕ1Õ3ÌË=ÌË3ÌËEÌÐYÒ "Ò"$&Ò&(*Ë,ËÑÑÑÑÑÑ4ËË
Ë8ËË;Ì=ÊKÊSÊ\ÊyÊ  Ê  Ê  ¡Ê  «Ê  ¼Ê  ÊÊ  ÖÊ  ÝÊ  ñÐÎÎ  ñÎ !   EXPORTED_SYMBOLS   Ci   Components   interfaces   Cc   classes   Cu   utils   importG   resource://gre/modules/Services.jsmK   resource://gre/modules/XPCOMUtils.jsm   XPCOMUtils-   defineLazyModuleGetter   FileUtilsI   resource://gre/modules/FileUtils.jsm   OSC   resource://gre/modules/osfile.jsm   UpdateChannelQ   resource://gre/modules/UpdateChannel.jsm/   defineLazyServiceGetter   gUpdateTimerI   @mozilla.org/updates/timer-manager;1+   nsIUpdateTimerManager!   defineLazyGetter	   gApp   gDecoder   gEncoder   TIMER_ID1   user-agent-updates-timer   PREF_UPDATES5   general.useragent.updates.)   PREF_UPDATES_ENABLED   enabled!   PREF_UPDATES_URL   url+   PREF_UPDATES_INTERVAL   interval%   PREF_UPDATES_RETRY   retry)   PREF_UPDATES_TIMEOUT   timeout1   PREF_UPDATES_LASTUPDATED   lastupdated   KEY_PREFDIR   PrefD   KEY_APPDIR   XCurProcD   FILE_UPDATES   ua-update.json+   PREF_APP_DISTRIBUTION   distribution.id;   PREF_APP_DISTRIBUTION_VERSION)   distribution.version   gInitialized!   UserAgentUpdates	   init   uninit   _applyUpdate#   _applySavedUpdate   _saveToFile   _getPref   _getParameters   _getUpdateURL   _fetchUpdate   _update   _scheduleUpdate   notify   observe   generateQI   nsIObserver!   nsITimerCallback   QueryInterface                  !   UserAgentUpdates                  ÿÿÿÿ                       4       ¹                                 
          ©  J               ;    5   ¸   
;   5   : ¸   
;   5   : ÛÊÊN    Cc7   @mozilla.org/xre/app-info;1   getService   Ci   nsIXULAppInfo   QueryInterface   nsIXULRuntime   ÿÿÿÿ                              ¹                                             ¦  #             ;    R      TextDecoder   ÿÿÿÿ                              ¹                                           ã    '             ;    R      TextEncoder   ÿÿÿÿ   5   this.UserAgentUpdates.initÁ                 S       ¹                                             callback Ì  ¶  >             ;       n    C1    QAT  0   QA>0   QA¸   
:  Q;   5   ¸   
;   AB: QBÌDÊÈÌHÜ6    gInitialized   _callback   _lastUpdated#   _applySavedUpdate   Services   prefs   addObserver   PREF_UPDATES   ÿÿÿÿ   9   this.UserAgentUpdates.uninitÁ                   5       ¹                                           Ë  Q	  K             ;        n    B1    Q;   5   ¸   
;   A: QOÌÛ2    gInitialized   Services   prefs   removeObserver   PREF_UPDATES   ÿÿÿÿ   E   this.UserAgentUpdates._applyUpdateÁ                 A       ¹                                             update l	  6
  S             T  E   QA¸    
;   B:    A¸   
T  : Q   A¸   
@: QU×ÔÍ    _getPref)   PREF_UPDATES_ENABLED   _callback   ÿÿÿÿ   O   this.UserAgentUpdates._applySavedUpdateÁ                 t       ¹      2                                    	   dirsV
    \             A¸    
;   B:     A¸   
@: QZ  ;   `   ;   `     QV   ¸   
A    @: ¸   
A   : QA¸   
:  QÎ_ÍcÉÎÑrdÊrdvÌ    _getPref)   PREF_UPDATES_ENABLED   _applyUpdate   KEY_PREFDIR   KEY_APPDIR   reduce	   then   _scheduleUpdate   ÿÿÿÿ   S   this.UserAgentUpdates._applySavedUpdate/<Å               _       ¹      !                                      prevLoad   dir	   file   tryNext  Y  {  d             ;    ¸   
T Z  ;   `   C: 5      QA       QT     T  ¸   
@V   :    V   :  
ÓÊÿÿÿèÎg
ËqÔÍ
    FileUtils   getFile   FILE_UPDATES	   path	   then   ÿÿÿÿ   c   this.UserAgentUpdates._applySavedUpdate/</tryNextå                   0       ¹                                            ø  g             ;    5   ¸   
      : ¸   
A    : ïo    OS	   File	   read	   then   ÿÿÿÿ   g   this.UserAgentUpdates._applySavedUpdate/</tryNext/<Å               E       ¹                                             bytes   update 2  ð  g             ;    ¸   
;   ¸   
T  : :    QV       ;   =   R pV   ÛÿÿÿõÈËm
 	   JSON   parse   gDecoder   decode   Error   invalid update   ÿÿÿÿ   S   this.UserAgentUpdates._applySavedUpdate/<å                        ¹                                             update ¿  ä  r             A¸    
T  : tÏ    _applyUpdate   ÿÿÿÿ   C   this.UserAgentUpdates._saveToFileÁ               §       ¹      <                                      update	   file	   path   bytes %  Ò  y       
      ;    ¸   
;   Z  ;   `   C:    QV   5     Q;   ¸   
;   ¸   
T  : :   Q;   	5   
¸   
V  V  Y   V  =   ]   : ¸   
A    ;   5   : QÕ'ÊÿÿÿàÈÎÛÿÿÿðÈÞ"ÏÿÿÿÞÐ  Ê}      FileUtils   getFile   KEY_PREFDIR   FILE_UPDATES	   path   gEncoder   encode	   JSON   stringify   OS	   File   writeAtomic	   .tmp   tmpPath	   then   Cu   reportError   ÿÿÿÿ   G   this.UserAgentUpdates._saveToFile/<Å                   A       ¹                                             ±  }             A;   ¸   
:  0    Q;   5   ¸   
;   A5    ¸   
:  : QÍÉÑÒ$  B    _lastUpdated	   Date   now   Services   prefs   setCharPref1   PREF_UPDATES_LASTUPDATED   toString   ÿÿÿÿ   =   this.UserAgentUpdates._getPrefÁ                       ¹      2                                 	   name   def  é                 T 'x=    y   =   y   "z   5;   5   ¸   
T  : ;   5   ¸   
T  : ;   5   ¸   
T  :       Qv   QT ÈÈ    glJu
uÊ  ÔÔÔÉÌÍ    number   boolean   Services   prefs   getIntPref   getBoolPref   getCharPref    ÿÿÿÿ          e            k       m      ÿÿÿÿÿÿÿÿ}             ÿÿÿÿ      _getParameters                   a       ¹   	   +       	                                |               Y       ]       ]      ]      ]      ]      ]      ]      ]      ]   ÊÊÊÊÊÊÊÊË    %DATE%   %PRODUCT%   %APP_ID%   %APP_VERSION%   %BUILD_ID%	   %OS%   %CHANNEL%   %DISTRIBUTION%-   %DISTRIBUTION_VERSION%   ÿÿÿÿ   5   _getParameters/<["%DATE%"]Á                          ¹      	                                     >  b               ;    ¸   
:  ¸   
:  ÌÎ 	   Date   now   toString   ÿÿÿÿ   ;   _getParameters/<["%PRODUCT%"]Á                          ¹                                                            ;    5    Ë 	   gApp	   name   ÿÿÿÿ   9   _getParameters/<["%APP_ID%"]Á                          ¹                                           ³  É               ;    5   Ë 	   gApp   ID   ÿÿÿÿ   C   _getParameters/<["%APP_VERSION%"]Á                          ¹                                           ê                 ;    5   $Ë 	   gApp   version   ÿÿÿÿ   =   _getParameters/<["%BUILD_ID%"]Á                          ¹                                           #  A               ;    5   !Ë 	   gApp   appBuildID   ÿÿÿÿ   1   _getParameters/<["%OS%"]Á                          ¹                                           Y  o               ;    5   Ë 	   gApp   OS   ÿÿÿÿ   ;   _getParameters/<["%CHANNEL%"]Á                          ¹                                             ®               ;    ¸   
:   Ì    UpdateChannel   get   ÿÿÿÿ   E   _getParameters/<["%DISTRIBUTION%"]Á                          ¹                                           Ð                 A¸    
;   =   : %Ò)    _getPref+   PREF_APP_DISTRIBUTION      ÿÿÿÿ   U   _getParameters/<["%DISTRIBUTION_VERSION%"]Á                          ¹                                           1  p               A¸    
;   =   : -Ò1    _getPref;   PREF_APP_DISTRIBUTION_VERSION      ÿÿÿÿ   G   this.UserAgentUpdates._getUpdateURLÁ                 E       ¹                                            url   params  ì  ¡             A¸    
;   =   :    QA¸   
:     QV   ¸   
         : ÒÈÈ	ÉÕ    _getPref!   PREF_UPDATES_URL      _getParameters   replace   ÿÿÿÿ   K   this.UserAgentUpdates._getUpdateURL/<Á               ;       ¹                                             match   param %  æ  ¤                   T  7   QV      ;    â    V   :  :    T  
ÓÔ"ÿÿÿíÌ$ %   encodeURIComponent   %[A-Z_]+%      ÿÿÿÿ   E   this.UserAgentUpdates._fetchUpdateÁ                Ñ       ¹      9                                D      url   success   error   request   S  «             ;    5   ¸   
;   5   :    Q   C0   Q   A¸   
;   Xê`: 0   Q   ¸   	
=   
T  C: Q   ¸   
=   : Q   =   0   Q   ¸   
=       : Q   ¸   
=      : Q   ¸   
:  QÑÊ  ¬ÉÌÕÉÙÕÐÚÚÐ    CcO   @mozilla.org/xmlextras/xmlhttprequest;1   createInstance   Ci#   nsIXMLHttpRequest)   mozBackgroundRequest   timeout   _getPref)   PREF_UPDATES_TIMEOUT	   open   GET!   overrideMimeType!   application/json   responseType	   json!   addEventListener	   load   error	   send   ÿÿÿÿ   I   this.UserAgentUpdates._fetchUpdate/<Á                 :       ¹                                              response¬    ´                   5       QV         V   :       :  Q
ÔÏÎ    response   ÿÿÿÿ   ;   this.UserAgentUpdates._updateÁ                 K       ¹      7                                       urli    ¼       
      A¸    
:     QV   E   5QA¸   
V       ¸   
A:    ¸   
A: : QÈÈÖÌ  Ä  ¿  ÅÌ  Å  ¾  Ç    _getUpdateURL   _fetchUpdate	   bind   ÿÿÿÿ   ?   this.UserAgentUpdates._update/<Á                 +       ¹                                             response Ã    ¿             A¸    
T  : QA¸   
T  : QA¸   
:  QÏÏÌ    _applyUpdate   _saveToFile   _scheduleUpdate   ÿÿÿÿ   ?   this.UserAgentUpdates._update/<Á                        ¹                                             response ´    Å             A¸    
C: QÍ'    _scheduleUpdate   ÿÿÿÿ   K   this.UserAgentUpdates._scheduleUpdateÁ                      ¹      '                                       retry   interval 1  ³  Ê       
      ;    5   ;   5   5   I   A¸   
;   ¼	::    QT     A¸   
;   V   : W   Q;   ¸   	
;   
A;   ¸   
?V   : : QÚÑÈÑÈã+ÿÿÿÕB 	   gApp   processType   Ci   nsIXULRuntime)   PROCESS_TYPE_DEFAULT   _getPref+   PREF_UPDATES_INTERVAL%   PREF_UPDATES_RETRY   gUpdateTimer   registerTimer   TIMER_ID	   Math   max   ÿÿÿÿ   9   this.UserAgentUpdates.notifyÁ                 #       ¹                                             timer È  A  Ö             A¸    
;   B:    A¸   
:  QÎÌ    _getPref)   PREF_UPDATES_ENABLED   _update   ÿÿÿÿ   ;   this.UserAgentUpdates.observeÁ                »       ¹   
   D                                     subject   topic	   data   W  Ò  Ý             T x=    y   
z   ¬T ;   H   A¸   
:  Q   T ;   H   A¸   
:  Q   iT ;   H   [   Q;   â   A¸   
;   =   : >:    QV   A5   	   A¸   
:  QAV   0   	QÈ   k  ·uÊÉ
ÑÉ
ÑÉËÊÒ  æÈËÌÌX    nsPref:changed)   PREF_UPDATES_ENABLED#   _applySavedUpdate+   PREF_UPDATES_INTERVAL   _scheduleUpdate1   PREF_UPDATES_LASTUPDATED   parseInt   _getPref   0   _lastUpdated    ÿÿÿÿ          lastUpdated        `   U   ÿÿÿÿ