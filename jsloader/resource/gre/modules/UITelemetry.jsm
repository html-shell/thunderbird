�s�                	     �      �                                 0     resource://gre/modules/UITelemetry.jsm     �                �    �   �   ;   5       Q=      Q;   =      QAf    0   Q;    �   
=   	A: QAY   ;   ]   Y   ]   Z   ]   �   a   �   ]   �   a   Y   ]   �   ]   �   ]   �   ]   �   ]   �   ]   �   	]   �   
]   �   ]   �   ]   0   
Q����	��������Ј�	�ˈ��ш�̘��ֈ7���ʐ�ʐ�ɘ�ʘ0�ʘL�ʘU�ʘ\�ʘi�ʘ�  ��ʘ�  ��ʘ�  ��ʘ�  ��ʘ�  ƈʘ�  ֈʐ����И�  �    Cu   Components   utils   PREF_BRANCH%   toolkit.telemetry.   PREF_ENABLED   enabled!   EXPORTED_SYMBOLS   importG   resource://gre/modules/Services.jsm   UITelemetry   undefined   _enabled   _activeSessions   _measurements   observe   wrappedJSObject/   _simpleMeasureFunctions   uptimeMillis   addEvent   startSession   stopSession   _recordEvent#   getSimpleMeasures1   addSimpleMeasureFunction7   removeSimpleMeasureFunction#   getUIMeasurements                     UITelemetry                  ����   1   this.UITelemetry.enabled�                  �       �   	   '                                  �  �               A5    ;   I   A5    ;   5   �   
;   AB: Q;   5   �   
A=   B: Q�A;   5   �   
;   : 0    Q    ��   Qv�   QAB0    Q�    A5    ������#�ܐ�ܘ'�!��׈ΐ̐�Ϙ-��    _enabled   undefined   Services   prefs   addObserver   PREF_ENABLED   obs+   profile-before-change   getBoolPref    ����          e         Q   %       w      ����   ����   1   this.UITelemetry.observe�                �       �      >                                     aSubject   aTopic   aData   �  C  0             T =       I;   5   �   
A=    : Q;   5   �   
;   A: QA;   0   QT =      nT ��   Qx;   y   
z   T;   5   �   	
;   : �   QAV   0   QV       AY   0   
QAZ   0   Q   ș����ې�ې�̐��8���h_�uʐ�ֈȐ�
˘?���̐�˘CX�� +   profile-before-change   Services   obs   removeObserver   prefs   PREF_ENABLED   _enabled   undefined   nsPref:changed   getBoolPref   _activeSessions   _measurements    ����          on        d   e   ����   ����   A   this.UITelemetry.wrappedJSObject�                          �                                             �  �  L             A����    ����   ;   this.UITelemetry.uptimeMillis�                   +       �                                           �	  �	  \             ;    �   
:  ;   5   �   
:  5   ���̈Ԉʈ* 	   Date   now   Services   startup   getStartupInfo   process   ����   3   this.UITelemetry.addEvent�               �       �      ;                           
            aAction   aMethod   aTimestamp   aExtras   sessions   aEvent    #  �  i             A5        ;   �   
A5   : �   QY   =   ]   T  ]   T ]   V   ]   T ;   	   A�   

:     T ]   �  QT    V  T 0   QA�   
V  : Q������n�҈Ȑ���ʐ�Ȑ�Ȑ�ɐ��͈'՘w��͘{�Ј    enabled   Object	   keys   _activeSessions   event	   type   action   method   sessions   undefined   uptimeMillis   timestamp   extras   _recordEvent   ����   ;   this.UITelemetry.startSession�                 L       �                                             aName   aTimestamp  C  l  �             A5        A5   T  7   A5   T  T ;      A�   
:     T 9Q����������������͈:͈!    enabled   _activeSessions   undefined   uptimeMillis   ����   9   this.UITelemetry.stopSession�               �       �      A                           	            aName   aReason   aTimestamp   sessionStart   aEvent   �    �             A5        A5   T  7�   QA5   T  /QV       Y   =   ]   T  ]   T ]   V   ]   T ;      A�   
:     T ]   	�  QA�   

V  : Q���������ϐ�ː����������ʐ�Ȑ�Ȑ�ɐ��͈!Ր���Ј    enabled   _activeSessions   session	   type	   name   reason   start   undefined   uptimeMillis   end   _recordEvent   ����   ;   this.UITelemetry._recordEvent�                        �                                             aEvent �  �  �             A5    �   
T  : Q���Ԉ     _measurements	   push   ����   E   this.UITelemetry.getSimpleMeasures�                b       �                                            result�  �  �       
      A5        Y   Y   �   QA5   K�  Q   $mW  V   V  A5   V  �
:  9Q�QLM����QN�V   ���������ʐ�0)ʐ�ՈҐ���    enabled/   _simpleMeasureFunctions    ����      	   name       0   *       &   6   ����   ����   S   this.UITelemetry.addSimpleMeasureFunction�                 g       �      +                                       aName   aFunction  <  �  �             A5        T  A5   q   ;   =   T  R pT  D   QT '=   I   ;   =   R pA5   T  T 9Q�����������ψ����ʈ���ˈ����Έ0    enabled/   _simpleMeasureFunctions   Errorq   A simple measurement function is already registered for    functionw   addSimpleMeasureFunction called with non-function argument.   ����   Y   this.UITelemetry.removeSimpleMeasureFunction�                        �                                             aName 
  G  �             A5    T  /Q���ˈ+ /   _simpleMeasureFunctions   ����   E   this.UITelemetry.getUIMeasurements�                   #       �                                           g  �  �             A5        
Z   A5   �   
:  ���������͈�    enabled   _measurements   slice