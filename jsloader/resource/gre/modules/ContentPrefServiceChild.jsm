�s�                B  #   �   6   G                         &       0     resource://gre/modules/ContentPrefServiceChild.jsm     �         	       �   �   �            �   Af    0    Q;   5      Q;   5      Q;   5      Q;   �   
=   	: Q;   �   
=   
: Q;   �   
=   : Q;   Y   �   ]   �   ]   �   ]   0   Qn   Y   ;   �   
Z  ;   5   `   : ]   ;   R  ]   ;   5   �   
;   5   : ]   �   ]   ;   R  ]   �   ]   �   	]   �   
]    �   ]   !�   ]   "�   ]   #�   ]   $;   %]   &;   %]   ';   %]   (�   ]   )�   ]   *�   ]   +�   ]   ,�   ]   -�   ]   .�   ]   /�   ]   0�   ]   1�   ]   2�   ]   3�   ]   4;   %]   51   Q;   �   
:  Q��
�����ʘ�	��	��	�2�����̈6�
�Ј��Ј��Ј�Ո3�Ո9�Ո9����������!ʐ�ʘ)�ʘ-�И0��2�ʐ�Ј(Έ����Ș6��Ș8�ѐʘ8�Ș;�ʘA��ȘC�ʘI�ʘk�ʘt�ʘz�ʘ�  ��ʘ�  ��ʘ�  ��ʐ�ʐ�ʐ��ʘ�  ��ʘ�  ��ʘ�  ��ʘ�  ��ʐ����ʘ�  ��ʘ�  ��ʘ�  ��ʐ����ʘ�  Ĉʘ�  ֈʘ�  �И2���  �Ј !   EXPORTED_SYMBOLS   Ci   Components   interfaces   Cc   classes   Cu   utils   importK   resource://gre/modules/XPCOMUtils.jsmW   resource://gre/modules/ContentPrefUtils.jsmW   resource://gre/modules/ContentPrefStore.jsm   CallbackCaller   prototype   handleResult   handleError!   handleCompletion/   ContentPrefServiceChild   XPCOMUtils   generateQI-   nsIContentPrefService2   QueryInterface   Map   _observersS   @mozilla.org/childprocessmessagemanager;1   getService!   nsIMessageSender   _mm   _getRandomId   _requests	   init   receiveMessage   _callFunction   getByName%   getByDomainAndName+   getBySubdomainAndName   getGlobal   NYI1   getCachedByDomainAndName7   getCachedBySubdomainAndName   getCachedGlobal   set   setGlobal+   removeByDomainAndName1   removeBySubdomainAndName   removeGlobal   removeByDomain#   removeBySubdomain   removeByName!   removeAllDomains!   removeAllGlobals%   addObserverForName+   removeObserverForName   extractDomain                  /   ContentPrefServiceChild                  ����      contextArg                 )       �                                             context �                 T  E   QT  5       Y   C]       @������ː� %   usePrivateBrowsing   ����      NYI                          �      	                                       g               ;    =   R p���ˈ�9    ErrorW   Do not add any new users of these functions   ����      CallbackCaller                        �                                              callback �  �               AT  0    Q���ʈ    _callback   ����   K   CallbackCaller.prototype.handleResult�                 6       �                                             contentPref �  �  "             ;    �    A5   ;   T  5   T  5   T  5   R : Q���АΐȐȘ$��#��&�7    cbHandleResult   _callback   ContentPref   domain	   name   value   ����   I   CallbackCaller.prototype.handleError�                        �                                             result �    )             ;    �    A5   T  : Q���׈&    cbHandleError   _callback   ����   S   CallbackCaller.prototype.handleCompletion�                        �                                             reason .  l  -             ;    �    A5   T  : Q���׈+ %   cbHandleCompletion   _callback   ����   I   ContentPrefServiceChild._getRandomId�                   4       �                                 
          �    ;             ;    5   �   
;   5   : �   
:  �   
:  ���ѐʘ<�ؐ�H    Cc;   @mozilla.org/uuid-generator;1   getService   Ci!   nsIUUIDGenerator   generateUUID   toString   ����   9   ContentPrefServiceChild.init�                   F       �                                 	          �  ]  C             A5    �   
=   A: QA5    �   
=   A: QA5    �   
=   A: Q���א�א�׈C    _mm%   addMessageListener3   ContentPrefs:HandleResult1   ContentPrefs:HandleError;   ContentPrefs:HandleCompletion   ����   M   ContentPrefServiceChild.receiveMessage�              �      �      |                        )            msg	   data   callback z  �  I             T  5    �   Q�  QT  5   x=   y   (=   y   Y=   y   �=   y   �z  pA5   �   
V   5   : W  QV  �   	
V   5   
: Q  5A5   �   
V   5   : W  QV  �   
V   5   : Q   �A5   �   
V   5   : W  QA5   �   
V   5   : QV  �   
V   5   : Q   ���  QA5   �   
V   5   : �  QV      �   qV  - �
:  �  Q   5m5   W  Q;   �   V  V   5   V   5   : Q�Q�   
:  5   ����� �   ș��͐���h� ��u
�Ru
�Wu
�]uʘM��ֈȐ�ؐX�R��ֈȐ�ؐX�W��ֈȐ�ڐ�ؐX�]��ֈȐ��Y�b�8Iѐ�
�b�ˈ����ҘfY�h� 	   data	   name3   ContentPrefs:HandleResult1   ContentPrefs:HandleError;   ContentPrefs:HandleCompletion9   ContentPrefs:NotifyObservers   _requests   get   requestId   handleResult   contentPref   handleError   error   delete!   handleCompletion   reason   _observers   value   safeCallback   callback	   args	   next	   done    ����         observerList                     observer       `  I         �   ��������C            V  T       �����            ����   K   ContentPrefServiceChild._callFunction�               o       �   
   '                           
         	   call	   args   callback   requestId	   data       k             A�    
:  �   QY   T  ]   T ]   V   ]   �  QA5   �   
=   V  : QA5   �   
V   ;   	T R : Q���ȈȐ��	ȈȈΘo�ژq�ڈ�����<    _getRandomId	   call	   args   requestId   _mm!   sendAsyncMessage3   ContentPrefs:FunctionCall   _requests   set   CallbackCaller   ����   C   ContentPrefServiceChild.getByName�                 4       �                                          	   name   context   callback   7  �  t             A�    
=   Z  T  `   ;   �   T : `  T : ���͐� �Ԑ�u��w�(    _callFunction   getByName   contextArg   ����   U   ContentPrefServiceChild.getByDomainAndName�                 ;       �                                             domain	   name   context   callback      �  z             A�    
=   Z  T  `   T `  ;   �   T : `  T : ���͐� ��Ԑ�{��}�(    _callFunction%   getByDomainAndName   contextArg   ����   [   ContentPrefServiceChild.getBySubdomainAndName�                 ;       �                                             domain	   name   context   callback    �  �  �             A�    
=   Z  T  `   T `  ;   �   T : `  T : ���͐� ��Ԑ��  �����(    _callFunction+   getBySubdomainAndName   contextArg   ����   C   ContentPrefServiceChild.getGlobal�                 4       �                                          	   name   context   callback   �  �  �             A�    
=   Z  T  `   ;   �   T : `  T : ���͐� �Ԑ��  �����(    _callFunction   getGlobal   contextArg   ����   7   ContentPrefServiceChild.set�                 B       �                                             domain	   name   value   context   callback     �  �  �             A�    
=   Z  T  `   T `  T `  ;   �   T : `  T : Q���͐����Ԑ��  �����!    _callFunction   set   contextArg   ����   C   ContentPrefServiceChild.setGlobal�                 ;       �                                          	   name   value   context   callback    �  m  �             A�    
=   Z  T  `   T `  ;   �   T : `  T : Q���͐���Ԑ��  �����!    _callFunction   setGlobal   contextArg   ����   [   ContentPrefServiceChild.removeByDomainAndName�                 ;       �                                             domain	   name   context   callback    �  H  �             A�    
=   Z  T  `   T `  ;   �   T : `  T : Q���͐���Ԑ��  �����!    _callFunction+   removeByDomainAndName   contextArg   ����   a   ContentPrefServiceChild.removeBySubdomainAndName�                 ;       �                                             domain	   name   context   callback    o  )  �             A�    
=   Z  T  `   T `  ;   �   T : `  T : Q���͐���Ԑ��  �����!    _callFunction1   removeBySubdomainAndName   contextArg   ����   I   ContentPrefServiceChild.removeGlobal�                 4       �                                          	   name   context   callback   D  �  �             A�    
=   Z  T  `   ;   �   T : `  T : Q���ш%�׈���ՌL    _callFunction   removeGlobal   contextArg   ����   M   ContentPrefServiceChild.removeByDomain�                 4       �                                             domain   context   callback   �  ^  �             A�    
=   Z  T  `   ;   �   T : `  T : Q���ш'�Ԑ��  ����!    _callFunction   removeByDomain   contextArg   ����   S   ContentPrefServiceChild.removeBySubdomain�                 4       �                                             domain   context   callback   ~    �             A�    
=   Z  T  `   ;   �   T : `  T : Q���ш*�Ԑ��  ����!    _callFunction#   removeBySubdomain   contextArg   ����   I   ContentPrefServiceChild.removeByName�                 =       �                                          	   name   context   callback   )  �  �             A�    
=   Z  T  `   ;   `  ;   �   T : `  T : Q���ш%�ɈԐ��  ����!    _callFunction   removeByName   value   contextArg   ����   Q   ContentPrefServiceChild.removeAllDomains�                 -       �                                             context   callback  �  >  �             A�    
=   Z  ;   �   T  : `   T : Q���ш)׈���׌J    _callFunction!   removeAllDomains   contextArg   ����   Q   ContentPrefServiceChild.removeAllGlobals�                 -       �                                             context   callback  ]  �  �             A�    
=   Z  ;   �   T  : `   T : Q���ш)Ԑ��  ����!    _callFunction!   removeAllGlobals   contextArg   ����   U   ContentPrefServiceChild.addObserverForName�               �       �      6                                    	   name   observer   set  �  &  �             A5    �   
T  : �   QV       w;   R  W   QA5    5   >H   A5   �   
=   A: QA5   �   
=   Y   T  ]   	: QA5    �   

T  V   : QV   �   
T : Q���ЈȐ����Ȑ����ט�  ψ׈?Ȉ������ؐ���҈    _observers   get   Set	   size   _mm%   addMessageListener9   ContentPrefs:NotifyObservers!   sendAsyncMessage?   ContentPrefs:AddObserverForName	   name   set   add   ����   [   ContentPrefServiceChild.removeObserverForName�               �       �   
   4                                    	   name   observer   set  J  �  �             A5    �   
T  : �   QV       V   �   
T : QV   5   >H   eA5   �   
=   Y   T  ]   : QA5    �   
T  : QA5    5   >H   A5   �   
=   	A: Q���ЈȐ������Ґ����׈BȈ�������Ԑ�����׈E    _observers   get   delete	   size   _mm!   sendAsyncMessageE   ContentPrefs:RemoveObserverForName	   name+   removeMessageListener9   ContentPrefs:NotifyObservers