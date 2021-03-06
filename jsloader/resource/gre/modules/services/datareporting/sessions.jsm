�s�                J     �   3   A                                0     resource://gre/modules/services/datareporting/sessions.jsm     )+                �   �   �   �   �   �   Af    0    Q;   5      Q5      Q5      QQ;   �   
=   	: Q;   �   
=   
: Q;   �   
=   : Q;   �   
=   : Q�$�    QX�   Q���;      QA�   0   Q;   ;   �   
Y   ;   �   
Z  ;   5   `   : ]   ;   ]   �   a   �   b   �   a   �   b   �   a   �   b   �   a   �   	]   �   
a   �   ]   �   a    �   b   !�   a   "�   b   #�   a   $�   b   %�   ]   &�   ]   '�   ]   (�   ]   )�   ]   *�   ]   +�   ]   ,�   ]   -f   ]   .�   ]   /�   ]   0�   ]   1�   ]   2: 0   Q���������������	̘����5�Ո4�Ո3�Ո,�Ո1��ˈ��Ɉ��Ј�?̘U��W֐�Ј'Έ����ȘZ�ʘ\�ʘ`�ʘd�ʘh�ʘl�ʘp�ʘt�ʘx�ʘ�  ��ʐ����ʘ�  ��ʐ����ʘ�  ��ʐ����ʘ�  ��ʐ����ʘ�  ��ʘ�  ��ʘ�  ǈʘ�  ؈ʘ�  ��ʘ� �ʘ� &�ʘ� 1�ʘ� =�ʘ� H�ʘ� i�ʘ� }�ʘ� ��ʘW�ɘ� �� !   EXPORTED_SYMBOLS   Cc   Ci   Cu   Components   classes   interfaces   utils   importM   resource://gre/modules/Preferences.jsmK   resource://gre/modules/XPCOMUtils.jsm=   resource://gre/modules/Log.jsmG   resource://services-common/utils.js%   MAX_SESSION_AGE_MS3   STARTUP_RETRY_INTERVAL_MS#   MAX_STARTUP_TRIES   SessionRecorder   prototype   Object   freeze   XPCOMUtils   generateQI   nsIObserver   QueryInterface   _currentIndex   _prunedIndex   startDate   _startDate   activeTicks)   incrementActiveTicks   totalTime   updateTotalTime	   main   _main   firstPaint   _firstPaint   sessionRestored!   _sessionRestored'   getPreviousSessions%   getPreviousSession!   pruneOldSessions'   recordStartupFields%   _clearStartupTimer   onStartup   onActivity   onShutdown   _CURRENT_PREFS-   _moveCurrentToPrevious   _deserialize   _getStartupInfo   observe                     SessionRecorder                  ����   )   this.SessionRecorder�                 �       �      P                                       branch �	    ?             T      ;    =   R pT  �   
=   :     ;    =   T  R pA;   5   �   
=   	: 0   QA;   T  R 0   
QAB0   QA>0   QA>0   QAB0   QA@0   QA>0   QA;   5   �   
;   5   : 0   Q�����ˈ�D�ψ��ψ�H�׈ɘJ�ʈɐ�Ȑ�Ȑ�Ȑ�Ȑ�Ȑ�ȘR�ҐʘR�ɐ�2    ErrorA   branch argument must be defined.   endsWith   .G   branch argument must end with '.': 	   _log   Log   repository   getLoggerM   Services.DataReporting.SessionRecorder   _prefs   Preferences1   _lastActivityWasInactive   _activeTicks   fineTotalTime   _started   _timer%   _startupFieldTries   _os   Cc?   @mozilla.org/observer-service;1   getService   Ci%   nsIObserverService   ����   Q   SessionRecorder.prototype<._currentIndex�                          �      	                                     �  �  \             A5    �   
=   >: ���ӈ�#    _prefs   get   currentIndex   ����   Q   SessionRecorder.prototype<._currentIndex�                        �                                             value   K  `             A5    �   
=   T  : Q���و'    _prefs   set   currentIndex   ����   O   SessionRecorder.prototype<._prunedIndex�                          �      	                                     `  �  d             A5    �   
=   >: ���ӈ�"    _prefs   get   prunedIndex   ����   O   SessionRecorder.prototype<._prunedIndex�                        �                                             value �  �  h             A5    �   
=   T  : Q���و&    _prefs   set   prunedIndex   ����   I   SessionRecorder.prototype<.startDate�                          �      	                                     �  C  l             ;    �   
A5   =   : ���׈�:    CommonUtils   getDatePref   _prefs#   current.startTime   ����   K   SessionRecorder.prototype<._startDate�                        �                                             value V  �  p             ;    �   
A5   =   T  : Q���ވA    CommonUtils   setDatePref   _prefs#   current.startTime   ����   M   SessionRecorder.prototype<.activeTicks�                          �      	                                     �  �  t             A5    �   
=   >: ���ӈ�*    _prefs   get'   current.activeTicks   ����   _   SessionRecorder.prototype<.incrementActiveTicks�                   &       �                                             h  x             A5    �   
=   A5   #?0   : Q����<    _prefs   set'   current.activeTicks   _activeTicks   ����   I   SessionRecorder.prototype<.totalTime�                          �      	                                     �  5  �             A5    �   
=   >: ���ӈ�(    _prefs   get#   current.totalTime   ����   U   SessionRecorder.prototype<.updateTotalTime�                   M       �   	                                        T  D  �       	      A;   �   
:  A5   0    QA5   �   
=   ;   �   
A5    X�: : Q�����͈А��%����یL    fineTotalTime	   Date   now   startDate   _prefs   set#   current.totalTime	   Math   floor   ����   ?   SessionRecorder.prototype<.main�                          �      	                                     Q  �  �             A5    �   
=   ��: ���Ԉ�$    _prefs   get   current.main   ����   A   SessionRecorder.prototype<._main�                 A       �                                             value �  3  �             ;    �   
T  :     ;   =   R pA5   �   
=   T  : Q���ψ��ˈ����و'    Number   isInteger   Error;   main time must be an integer.   _prefs   set   current.main   ����   K   SessionRecorder.prototype<.firstPaint�                          �      	                                     F  �  �             A5    �   
=   ��: ���Ԉ�*    _prefs   get%   current.firstPaint   ����   M   SessionRecorder.prototype<._firstPaint�                 A       �                                             value �  ;  �             ;    �   
T  :     ;   =   R pA5   �   
=   T  : Q���ψ��ˈ����و-    Number   isInteger   Error=   firstPaint must be an integer.   _prefs   set%   current.firstPaint   ����   U   SessionRecorder.prototype<.sessionRestored�                          �      	                                     S  �  �             A5    �   
=   ��: ���Ԉ�/    _prefs   get/   current.sessionRestored   ����   W   SessionRecorder.prototype<._sessionRestored�                 A       �                                             value �  \  �             ;    �   
T  :     ;   =   R pA5   �   
=   T  : Q���ψ��ˈ����و2    Number   isInteger   ErrorG   sessionRestored must be an integer.   _prefs   set/   current.sessionRestored   ����   ]   SessionRecorder.prototype<.getPreviousSessions�                |       �      :                                     result  d  �             Y   �   QA5    �  Q    Mm��  QA�   
V  : �  QV      �   V   V  V  9Q�V  #?W  QQ�V  A5   �����V   ���ʐ��� M?Z�4��
̈Ȑ�
�A����Ϙ�  ��<Έ����Ә�  ���    _prunedIndex%   getPreviousSession   _currentIndex    ����         i                     s           Z          f   ����      8           A            ����   [   SessionRecorder.prototype<.getPreviousSession�                 &       �                                             index �  �  �             A�    
A5   �   
=   T  : : ���ވ�����8    _deserialize   _prefs   get   previous.   ����   W   SessionRecorder.prototype<.pruneOldSessions�                �       �      F                                 	   date Z  �  �             A5    �   Q    �m��  QA�   
V   : �  QV      �   eV  5   T     �   MA5   �   
=   V   =   : QA5   �   
=   	V   : QAV   0    Q�V   #?W   QQ�V   A5   
���Zș��� �  ��  ��  ��4��
̈Ȑ�
�A�����A����ᐈې�̘�  Ȉ<Έ����ӈ    _prunedIndex%   getPreviousSession   startDate	   _log   debug#   Pruning session #   .   _prefs   reset   previous.   _currentIndex    ����          i                     s           �          �   ����      �           7             O            ����   ]   SessionRecorder.prototype<.recordStartupFields�                �      �      �                        )             si   missing�  �  �             A�    
:  �   QV   5       ;   =   R pB�  Qf    - �
:  �  Q   zm5   W  QV  V   q    +A5   �   
=   V  : QCW  Q   9A=   V  V   V  7�   	
:  V   5   �   	
:  9Q�Q�   

:  5   ���w� V   D   QA5   ;      A�   
:  QA5   #?�
0   QQA5       gA;   5   �   
;   5   : 0   QA5   �   
Y   A5   �   
A: ]   A5   A5   5   : Q���ȈȐ�����ˈ�������8�  �ѐ�
���ې��@����ۈӈ��  �ˈ����Ҙ�  ����̐���  �Ր����܈ɐ�Ґ�ΈȐј�  �����K    _getStartupInfo   process   Error7   Startup info not available.   value	   _log   debug/   Missing startup field:    _   getTime	   next	   done%   _startupFieldTries#   MAX_STARTUP_TRIES%   _clearStartupTimer   _timer   Cc)   @mozilla.org/timer;1   createInstance   Ci   nsITimer!   initWithCallback'   recordStartupFields	   bind   notify3   STARTUP_RETRY_INTERVAL_MS)   TYPE_REPEATING_SLACK                  	   main      firstPaint      sessionRestored                   ����         field       M   �      C   �   ����   ����   [   SessionRecorder.prototype<._clearStartupTimer�                   $       �                                           �    �             A5       A5    �   
:  QA.    Q����ѐ��    _timer   cancel   ����   I   SessionRecorder.prototype<.onStartup�                 �       �      N                                        si�  �              A5       ;   =   R pA�   
:  �   QV   5       ;   =   R pAC0    QA5   �   
A=   B: QA5   �   
A=   	B: QA5   �   
A=   
B: QA5   �   
A=   B: QA�   
:  QAV   5   0   QA5   �   
=   >: QA�   
:  QA�   
:  Q����ˈ����ȈȐ����ˈ����Ȑ��ؐ�ؐ�ؐ�ؐ���̐��А�א�̐��̈    _started   ErrorE   onStartup has already been called.   _getStartupInfo   processk   Process information not available. Misconfigured app?   _os   addObserver+   profile-before-change/   user-interaction-active3   user-interaction-inactive   idle-daily-   _moveCurrentToPrevious   _startDate   _prefs   set'   current.activeTicks   updateTotalTime'   recordStartupFields   ����   K   SessionRecorder.prototype<.onActivity�               B       �                                             active   updateActive �  �   &            T  E   QA5     �   QAT   0    QA�   
:  QV      A�   
:  Q���Ɉ̐�� ʐ��̐���̈ 1   _lastActivityWasInactive   updateTotalTime)   incrementActiveTicks   ����   K   SessionRecorder.prototype<.onShutdown�                   �       �      $                                     �   �"  1            A5    �   
=   : QA5   �   
=   C: QA�   
:  QA�   
:  QA5   �   	
A=   
: QA5   �   	
A=   : QA5   �   	
A=   : QA5   �   	
A=   : Q���֐�א�̐�̐��א�א�א�׈, 	   _log	   infoC   Recording clean session shutdown.   _prefs   set   current.clean   updateTotalTime%   _clearStartupTimer   _os   removeObserver+   profile-before-change/   user-interaction-active3   user-interaction-inactive   idle-daily         
         #   current.startTime   '   current.activeTicks   #   current.totalTime      current.main   %   current.firstPaint   /   current.sessionRestored      current.clean                  ����   c   SessionRecorder.prototype<._moveCurrentToPrevious�                  �      �   &   �                        .          �#  @'  H            �����  Q�  Q�   QA5    �   
:      $A5   �   
=   : Q��t  4�A5   �   
=   B: �   QA5   #?�
0   Q�  QY   A5    �   
:  ]   	A5   
]   A5   ]   V   ]   A5   ]   A5   ]   A5   ]   �  QA5   �   
=   V  =   : QA5   �   
=   V  ;   �   
V  : : Q�t   K   ���   Qv�   QA5   �   
=   ;   �   
V   : : Q�t   
   v�A5   �   
=    : QA5   !- �
:  �   Q   &m5   "W   QA5   �   #
V   : Q�Q�   $
:  5   %����� u ���� 0Ӑ�
͈��֐�ɐ���
ӈȐ��
ِ�
��͈Ȑ�ː�ː�ɐ�ː�ː�А���ᐈ�%�����ϐ̐�ҐЈ�� _�ϐ����֐�8:ѐ�՘� c�ˈ����Ԑ�     startDate   getTime	   _log	   infoW   No previous session. Is this first app run?   _prefs   get   current.clean   _currentIndex   s   activeTicks   a   totalTime   t   c	   main   m   firstPaint   fp   sessionRestored   sr   debug9   Recording last sessions as #   .   set   previous.	   JSON   stringify	   warnO   Exception when migrating last session:    CommonUtils   exceptionStrE   Resetting prefs from last session.   _CURRENT_PREFS   value   reset	   next	   done    ����          clean       count       obj        ����          ex        ����       	   pref           u          4     �  :          '  ��������B             6  6   ����   �  E   ����   ����   O   SessionRecorder.prototype<._deserialize�              �       �      ?                                    s   o \'  |(  i      	      �   Q�;    �   
T  : W   Q   ��  Qv�  Q@�ș�    Y   ;   V   5   R ]   V   5   ]   V   5   ]   V   5   	  ]   
V   5   ]   V   5   ]   V   5   ]   �������ψ͐̐�ː�����ψȐ�ΐ�ΐ���А�ΐ�ΐ�ϐ� 	   JSON   parse	   Date   s   startDate   a   activeTicks   t   totalTime   c   clean   m	   main   fp   firstPaint   sr   sessionRestored    ����         ex                   $      ��������2             ����   U   SessionRecorder.prototype<._getStartupInfo�                   *       �                                           �(  g)  }            ;    5   �   
;   5   : �   
:  ���ѐʘ� ~�ΐ��    CcE   @mozilla.org/toolkit/app-startup;1   getService   Ci   nsIAppStartup   getStartupInfo   ����   E   SessionRecorder.prototype<.observe�                 �       �   
   Q                                       subject   topic	   data   ~)  #+  �      	      T x=    y   (=   y   /=   y   7=   y   ?z   iA�   
:  Q   XA�   
C: Q   FA�   
B: Q   4A�   
;   ;   �   
:  ;   	R : Q   ��k�  ��u
����u
����u
����uʘ� ���̐X����͐X����͐X����ڈɈ���������X�� +   profile-before-change/   user-interaction-active3   user-interaction-inactive   idle-daily   onShutdown   onActivity!   pruneOldSessions	   Date   now%   MAX_SESSION_AGE_MS