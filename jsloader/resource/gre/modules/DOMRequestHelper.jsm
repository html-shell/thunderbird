�s�                �     �   *   �                                      resource://gre/modules/DOMRequestHelper.jsm     {&         	       �    �   �   �   ;   5       Q;   5      Q;   5      Q;   5      QAf    6   	Q;    �   

=   : Q;    �   

=   : Q;   �   
A=   =   =   : QA�   6   Q;   Y   ;   �   
Z  ;   5   `   ;   5   `  : ]   �   ]   �   ]   �   ]   �   ]   �   ]   �   ]   �   ]   �   	]   �   
]    �   ]   !�   ]   "�   ]   #�   ]   $�   ]   %�   ]   &�   ]   '�   ]   (�   ]   )6   Q������������Ј��Ј��Ј��Ј�̈0�Ո3�Ո1�Ґ����@�!̘/��1ʘ6�Ј'ΐ�)Θ6�ȘF�ʘn�ʘ�  ��ʘ�  ��ʘ�  ͈ʘ�  ڈʘ�  �ʘ�  �ʘ�  ��ʘ�  ��ʘ�  ��ʘ� �ʘ� �ʘ� �ʘ� �ʘ� $�ʘ� -�ʘ� 9�И� F    Cu   Components   utils   Cc   classes   Ci   interfaces   Cr   results!   EXPORTED_SYMBOLS   importK   resource://gre/modules/XPCOMUtils.jsmG   resource://gre/modules/Services.jsm   XPCOMUtils/   defineLazyServiceGetter	   cpmmS   @mozilla.org/childprocessmessagemanager;13   nsIMessageListenerManager'   DOMRequestIpcHelper   prototype   generateQI1   nsISupportsWeakReference   nsIObserver   QueryInterface'   addMessageListeners-   removeMessageListeners)   initDOMRequestHelper/   destroyDOMRequestHelper   observe   getRequestId)   getPromiseResolverId   getRequest%   getPromiseResolver   removeRequest+   removePromiseResolver   takeRequest'   takePromiseResolver   _getRandomId   createRequest   createPromise   forEachRequest-   forEachPromiseResolver                  '   DOMRequestIpcHelper                  ����   '   DOMRequestIpcHelper�                          �                                             �  �  !             A@6    QA@6   QA@6   Q��,�Ȑ�Ȑ�Ȉ    _listeners   _requests   _window   ����   c   DOMRequestIpcHelper.prototype.addMessageListeners�                 _       �      (                                       aMessages �
  s  F             T      A5        AY   6    Q;   �   
T  :     Z  T  `   U  QT  �   
A�    : Q������K���̘O�ψ���˘S�Ԙg�    _listeners   Array   isArray   forEach   ����   g   DOMRequestIpcHelper.prototype.addMessageListeners/<�               �       �   
   ?                                     	   aMsg	   name �  m  S             T  5    D   	QT  �   QA5   V   7;      VT  5     A5   V   75      +A5   V   75   #?�
6   QQ   ;   5   pT  5      ;   �   
V   A:    ;   �   	
V   A: QA5   V   Y   T  5     ]   ?]   8Q���
֘X�����&��
ߐ�
���
˘a��ֈȐш��ϐ��	�ϐ�Ȑ� 	   name   _listeners   undefined   weakRef   count   Cr!   NS_ERROR_FAILURE	   cpmm-   addWeakMessageListener%   addMessageListener   ����   i   DOMRequestIpcHelper.prototype.removeMessageListeners�                 T       �      %                                       aMessages )  �  n             A5     D   
QT      ;   �   
T  :     Z  T  `   U  QT  �   
A�    : Q���͈���s�ψ���˘w�Ԙ�  ��    _listeners   Array   isArray   forEach   ����   m   DOMRequestIpcHelper.prototype.removeMessageListeners/<�                 �       �      "                                        aName �  �  w             A5    T  7;      A5    T  75   #?6       PA5    T  75      ;   �   
T  A:    ;   �   
T  A: QA5    T  &Q������~�
�����ЈȐЈ��ˈ    _listeners   undefined   count   weakRef	   cpmm3   removeWeakMessageListener+   removeMessageListener   ����   e   DOMRequestIpcHelper.prototype.initDOMRequestHelper�                �       �      P                                      aWindow   aMessages    V  �             A�    
;   5   : QA�    
;   5   : QT    A�   
T : QAA�   
:  6   QAT  6   QA5      O��   QA5   �    
;   5   : �   	
;   5   
: �   QAV   5   6   Q�AB6   Q;   5   �   
A=   C: Q�����֐�֐���ϐ���Ɉɐ��ʐː��
׈ʐʘ�  ��Ȑ��ѐ���Ȑ��א��  ����2    QueryInterface   Ci1   nsISupportsWeakReference   nsIObserver'   addMessageListeners   _id   _getRandomId   _window+   nsIInterfaceRequestor   getInterface#   nsIDOMWindowUtils   innerWindowID)   currentInnerWindowID   _destroyed   Services   obs   addObserver-   inner-window-destroyed    ����       	   util        k   I   ����   ����   k   DOMRequestIpcHelper.prototype.destroyDOMRequestHelper�                   �       �      4                                     |  �  �             A5       AC6    Q;   5   �   
A=   : QA5      +;   �   
A5   : �   
A�    : QA@6   QA@6   	QA5   
   A�   

:  QA@6   Q��������Ȑ��ې���昀  Ȑ�Ȑ����̐���Ȉ    _destroyed   Services   obs   removeObserver-   inner-window-destroyed   _listeners   Object	   keys   forEach   _requests   uninit   _window   ����   o   DOMRequestIpcHelper.prototype.destroyDOMRequestHelper/<�                 A       �                                 	             aName V    �             A5    T  75      ;   �   
T  A:    ;   �   
T  A: Q����Ո!ȐЈ)�(    _listeners   weakRef	   cpmm3   removeWeakMessageListener+   removeMessageListener   ����   K   DOMRequestIpcHelper.prototype.observe�               P       �                                              aSubject   aTopic   aData   wId       �             T =    I   T  �   
;   5   : 5   �   QV   A5      A�   
:  Q���������Ԉ͐�������̈ -   inner-window-destroyed   QueryInterface   Ci'   nsISupportsPRUint64	   data   innerWindowID/   destroyDOMRequestHelper   ����   U   DOMRequestIpcHelper.prototype.getRequestId�               C       �                                              aRequest   id (  �  �             A5        AY   6    Q=   A�   
:  �   QA5    V   T  8QV   �����̐���͈ɐ�ϐ��
    _requests   id   _getRandomId   ����   e   DOMRequestIpcHelper.prototype.getPromiseResolverId�                        �                                           !   aPromiseResolver �  �  �             A�    
T  : �����ˈ�$    getRequestId   ����   Q   DOMRequestIpcHelper.prototype.getRequest�                 '       �      
                                        aId �    �             A5    E   QA5    T  7   A5    T  7�����ˈ    _requests   ����   a   DOMRequestIpcHelper.prototype.getPromiseResolver�                        �                                              aId 3  �  �             A�    
T  : �����ˈ�    getRequest   ����   W   DOMRequestIpcHelper.prototype.removeRequest�                 '       �      
                                        aId �  9  �             A5    E   QA5    T  7   A5    T  &Q�����ˈ    _requests   ����   g   DOMRequestIpcHelper.prototype.removePromiseResolver�                        �      	                                        aId ]  �  �             A�    
T  : Q�����ψ    removeRequest   ����   S   DOMRequestIpcHelper.prototype.takeRequest�               ?       �                                              aId   request �  �              A5     D   QA5    T  7    @A5    T  7�   QA5    T  &QV   ���͈������ϐ�ː��    _requests   ����   c   DOMRequestIpcHelper.prototype.takePromiseResolver�                        �                                              aId �  T               A�    
T  : �����ˈ�    takeRequest   ����   U   DOMRequestIpcHelper.prototype._getRandomId�                   4       �                                 
           o   �               ;    5   �   
;   5   : �   
:  �   
:  ���ѐʘ� �ؐ�H    Cc;   @mozilla.org/uuid-generator;1   getService   Ci!   nsIUUIDGenerator   generateUUID   toString   ����   W   DOMRequestIpcHelper.prototype.createRequest�                   H       �   	                                         !  ."              A5        %;   �   
=   : Q;   5   p;   5   �   
A5    : ������Ր�ː��׈�0    _window   Cu   reportError�   DOMRequestHelper trying to create a DOMRequest without a valid window, failing.   Cr!   NS_ERROR_FAILURE   Services   DOMRequest   createRequest   ����   W   DOMRequestIpcHelper.prototype.createPromise�                 @       �                                 	             aPromiseInit !#  D$  $            A5        %;   �   
=   : Q;   5   pA5    5   T  R ������Ր�ː��ψ�'    _window   Cu   reportError�   DOMRequestHelper trying to create a Promise without a valid window, failing.   Cr!   NS_ERROR_FAILURE   Promise   ����   Y   DOMRequestIpcHelper.prototype.forEachRequest�                 5       �                                      @      aCallbacka$  E%  -            A5        ;   �   
A5    : �   
A�    : Q���������搐���    _requests   Object	   keys   forEach   ����   ]   DOMRequestIpcHelper.prototype.forEachRequest/<�                 -       �                                           	   aKey �$  ?%  2            A�    
T  : A5   5   r   �   T  : Q��ˈ
���͈    getRequest   _window   DOMRequest   ����   i   DOMRequestIpcHelper.prototype.forEachPromiseResolver�                 5       �                                      @      aCallbackj%  w&  9            A5        ;   �   
A5    : �   
A�    : Q���������昀 C�    _requests   Object	   keys   forEach   ����   m   DOMRequestIpcHelper.prototype.forEachPromiseResolver/<�                 A       �                                           	   aKey �%  q&  >            =    A�   
T  : qE   Q=   A�   
T  : q   �   T  : Q��ЈʐЈ��͈    resolve%   getPromiseResolver   reject