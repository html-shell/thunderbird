�s�                �  d   �   E   �      #                   ,       0     resource://gre/modules/devtools/discovery/discovery.js     �=                �    �   �   �   �   �   �   	�   �   �   �   �   �   �   �            	   �   B;   �   =   : 5        Q5      Q5      Q5      QQ;   �   =   :    Q;   �   =   
: 5      Q5   	   	QQ;   �   =   =   =   :    QX��   QX��   Q=      QX�   Q;    �   
=   Y   : 5      QQ;    �   
=   Y   : 5      QQ;   �   
A=   A�    : Q;   �   
A=   A�   : Q;   �   
A=   �   : Qn   ;   5   �   
=    : 1   Q;   !Y   �   ]   #�   ]   $�   ]   %�   ]   &0   "Q;   '=   )0   (Q;   '=   +0   *Q;   'Y   �   
]   ,�   ]   -�   ]   .�   a   /�   b   /0   "Q;   0Y   �   ]   1�   ]   2�   ]   3�   ]   4�   ]   5�   ]   6�   ]   7�   a   !�   ]   8�   ]   9�   ]   :�   ]   ;�   ]   .�   ]   <�   a   =�   ]   >�    ]   ?�   !]   @�   "]   A0   "Qn   B;   0R  1   BQ;   C;   B0   DQ��"����������&��*��������/����B�ʐ�	�N�	��  ��	��  �	�� ������"�ψ���ψɈ������ψ܈�&�ϐ��&�Ɉ�����*�Ɉ	��Ɉ��ˈ��Ɉ�/�ֈЈ6��ֈЈ4�2ܘ7��9ܘ;��=ۘ@��B�ۈ
Ɉ������G��N�W��Yʘb�ʘo�ʘu�ʘ�  ��А����  ���  ����Ј2�Ј ��ʐ��ʘ�  ��ʘ�  ̈ʘ�  ڈʐ����И�  ����� ���ʘ� �ʘ� �ʘ� (�ʘ� 2�ʘ� ?�ʘ� H�ʘ� M�ʘ� T�ʐ����ʘ� a�ʘ� j�ʘ� s�ʘ� |�ʘ� ��ʘ� ��ʘ� ��ʘ� ��ʘ� ��ʘ� �И� �����ˈɈ������Ј    Cu   CC   Cc   Ci   require   chrome   EventEmitter=   devtools/toolkit/event-emitter   setTimeout   clearTimeout   sdk/timers   UDPSocketC   @mozilla.org/network/udp-socket;1   nsIUDPSocket	   init   SCAN_PORT   UPDATE_PORT   ADDRESS   224.0.0.115   REPLY_TIMEOUT   XPCOMUtils   importK   resource://gre/modules/XPCOMUtils.jsm   ServicesG   resource://gre/modules/Services.jsm!   defineLazyGetter   converter   sysInfo   libcutils   logging   prefs   getBoolPref-   devtools.discovery.log   Transport   prototype	   send   destroy!   onPacketReceived   onStopListening   LocalDevice   SETTING3   devtools.discovery.device   UNKNOWN   unknown	   _get   _generate   observe	   name   Discovery   addService   removeService	   scan!   getRemoteDevices7   getRemoteDevicesWithService!   getRemoteService   _waitForReplies-   _startListeningForScan+   _stopListeningForScan1   _startListeningForUpdate/   _stopListeningForUpdate#   _restartListening%   _outgoingTransport   _sendStatusTo   _onRemoteScan   _onRemoteUpdate)   _purgeMissingDevices   discovery   module   exports   ����    �                 8       �                                           	   conv�  �  2             ;    5   �   
;   5   : �   QV   =   0   QV   ���ѐʘ3�Ș5�ϐ��    CcY   @mozilla.org/intl/scriptableunicodeconverter   createInstance   Ci;   nsIScriptableUnicodeConverter   charset	   utf8   ����    �                           �      	                                     �   	  9             ;    5   �   
;   5   : ���ۈ�@    Cc5   @mozilla.org/system-info;1   getService   Ci   nsIPropertyBag2   ����    �                          �      
                                     \	  �	  =             ;    �   
=   : Q;   ���Ր��    Cu   importI   resource://gre/modules/systemlibs.js   libcutils   ����      log                 $       �      	                                       msg �	  C
  C             ;       ;   �   
=   T  : Q����و!    logging   console   log   DISCOVERY:    ����      Transport                       �   	                                     	   port �
  �  N             ;    �   
A: Q�A;   T  BR 0   QA5   �   
;   : QA5   �   
A: Q   0��   Qv�   Q;   �   =   V   : Q�    ���ѐ�=��ˈɐ�֐�א̐�ߐ�    EventEmitter   decorate   socket   UDPSocket   joinMulticast   ADDRESS   asyncListen   log9   Failed to start new socket:     ����          e            A       T   $   ����   ����   1   Transport.prototype.send�              �       �      -                                    object	   port   message   rawMessage  �  0  b             ;       8;   �   =   T =   ;   �   
T  @�: : Q;   �   
T  : �   Q;   �   
V   : �  Q�A5   �   	
;   
T V  V  �   : Q   0��  Qv�  Q;   �   =   V  : Q�    ����� ������f�ψ
Ȑ�ЈȐ�'���̐�ߐ�    logging   log   Send to    :
	   JSON   stringify   converter%   convertToByteArray   socket	   send   ADDRESS   length1   Failed to send message:     ����         e         m   +       �   $   ����   ����   7   Transport.prototype.destroy�                          �                                           F  g  o             A5    �   
:  Q���ш    socket   close   ����   I   Transport.prototype.onPacketReceived�               �       �      5                                       socket   message   messageData   object	   port  �  O  u             T 5    �   Q;   �   
V   : �  QV  T 5   5   0   QT 5   5   �  QV  A5   5      ;   �   =   	: Q;   
   A;   �   =   A5   5   =   ;   �   
V  @�: : QA�   
=   V  : Q���͐�Ј	Ȑ�א�Ґ���Ӑ��~���ӈ
������Ո 	   data	   JSON   parse	   from   fromAddr   address	   port   socket   log/   Ignoring looped message   logging   Recv on    :
   stringify	   emit   message   ����   G   Transport.prototype.onStopListening�                          �                                             m  r  �              ��    ����      LocalDevice                   o       �                                           �  �  �             A;   5   0    Q=   ;   q   FA;   5   �   
;   5   : 0   Q;   	5   
�   
A=   B: QA�   
:  Q���ѐ����ۈɐ�ܐ��̈    _name   LocalDevice   UNKNOWN=   @mozilla.org/settingsService;1   Cc   _settings   getService   Ci%   nsISettingsService   Services   obs   addObserver'   mozsettings-changed	   _get   ����   5   LocalDevice.prototype._get�                   [       �      .                          
          p  �  �             A5        A�   
:  QA5    �   
:  �   
;   5   Y   A�    ]   A�   ]   : Q�������̐�����搈˘�  ��˘�  ����  ��    _settings   _generate   createLock   get   LocalDevice   SETTING   handle   handleError   ����   G   LocalDevice.prototype._get/<.handle�                 O       �                                             _	   name  �  �  �             T E   QT ;    5   I   +AT 0   Q;   �   =   A5   : QA�   
:  Q�����
ʐ�
ڐ�
����̈    LocalDevice   UNKNOWN   _name   log   Device:    _generate   ����   Q   LocalDevice.prototype._get/<.handleError�                          �                                           �  �  �             ;    �    =   : ��ӈ(    logC   Failed to get device name setting   ����   ?   LocalDevice.prototype._generate�                  �       �      @                                   �  V  �       
      ;    5   5   =      ����  Q�   Q;   �   
=   : �   Q;   �   
;   �   	
:  ;   �   

�� : : �  Q=   V  �   
�: �   
��: W  QAV   =   V  0   Q�    A;   �   
=   : 0   Q����  �ј�  ��
шȐ��
؈ӈ�����Ȑ��҈͈����Ȑ�ܐ��҈Ɉ    Services   appinfo   widgetToolkit	   gonk   libcutils   property_get#   ro.product.device	   Math   floor   random   pow   00000000   toString   slice	   name   -   sysInfo   get	   host    ����       	   name       randomID           �   ����   ����   ;   LocalDevice.prototype.observe�                 n       �   	   !                                       subject   topic	   data   �  �  �             T =    I   =   T  q   T  5   U  QT  5   ;   5   I   AT  5   0   Q;   �   =   A5   : Q����������̐�������ϐ�ڈ '   mozsettings-changed   wrappedJSObject   key   LocalDevice   SETTING   _name   value   log   Device:    ����   5   LocalDevice.prototype.name�                          �                                           �    �             A5    ����    _name   ����   5   LocalDevice.prototype.name�                 v       �   
   +                                   	   name )  �  �             A5        +AT  0   Q;   �   =   A5   : QA5    �   
:  �   
;   5   T  Y   A�    ]   A�   ]   	: Q�����ʐ�ڐ������鐈ː�˘�  �����    _settings   _name   log   Device:    createLock   set   LocalDevice   SETTING   handle   handleError   ����   G   LocalDevice.prototype.name/<.handle�                          �                                             O  W  �              ��    ����   Q   LocalDevice.prototype.name/<.handleError�                          �                                           l  �  �             ;    �    =   : ��ӈ(    logC   Failed to set device name setting   ����      Discovery                   �       �      S                                     �  8  �             ;    �   
A: QAY   0   QAY   0   QA;   R  0   QA;   0   QAY   ;   	]   	0   QAY   @]   @]   0   
QAY   ;   R  ]   0   QAA5   �   
A: 0   QAA5   �   
A: 0   QAA5   �   
A: 0   Q;   5   �   
A=   B: Q���ѐ��̐�̐��ɐ�̐����А������̐�����ΐ���ψɐ�ψɐ�ψɐ��܈@    EventEmitter   decorate   localServices   remoteServices   device   LocalDevice   replyTimeout   REPLY_TIMEOUT   _factories   Transport   _transports	   scan   update#   _expectingReplies   Set	   from   _onRemoteScan	   bind   _onRemoteUpdate)   _purgeMissingDevices   Services   obs   addObserver-   network-active-changed   ����   =   Discovery.prototype.addService�                 O       �                                 
            service	   info  D   !              ;    �    =   : Q;   �   
A5   : �   >H   A�   
:  QA5   T  T 9Q���Ӑ҈���̐��Έ#    log)   ADDING LOCAL SERVICE   Object	   keys   localServices   length-   _startListeningForScan   ����   C   Discovery.prototype.removeService�                 9       �                                             service �!  /"              A5    T  /Q;   �   
A5    : �   >H   A�   
:  Q���ː҈���̈    localServices   Object	   keys   length+   _stopListeningForScan   ����   1   Discovery.prototype.scan�                   *       �                                           �"  #  (            A�    
:  QA�   
:  QA�   
;   : Q���̐�̐��ш 1   _startListeningForUpdate   _waitForReplies   _sendStatusTo   SCAN_PORT   ����   I   Discovery.prototype.getRemoteDevices�                �       �      "                                     devices�#  `$  2            ;    R  �   QA5   K�  Q   HmW  A5   V  7K�  Q   mW  V   �   
V  : Q�QLM����QN��QLM����QN�Z   >V   - �
:  ��   m5   _�,  �   
:  5   ���� Q����
Ȑ�0Mʐ�0"ʐ�퐐����8"�    Set   remoteServices   add   value	   next	   done    ����         service                     device       �   "      "   N      @   #          Z   ����   6   /          ����   _   Discovery.prototype.getRemoteDevicesWithService�               /       �                                             service%   devicesWithService �$  a%  ?            A5    T  7D   QY   �   Q;   �   
V   : ���ڐ�Ј�     remoteServices   Object	   keys   ����   I   Discovery.prototype.getRemoteService�               $       �                                             service   device%   devicesWithService  �%  u&  H            A5    T  7D   QY   �   QV   T 7���ڐ�Ɉ"    remoteServices   ����   G   Discovery.prototype._waitForReplies�                   _       �   	                                        �&  r'  M            ;    �    A5   5   : QA5   ;   A�   
:  R 0   QA5   ;   �   A5   A5   : 0   Q���ِ�Ԉ&�����ɐ��ֈɈ9    clearTimeout#   _expectingReplies   timer	   from   Set!   getRemoteDevices   setTimeout)   _purgeMissingDevices   replyTimeout   ����   ;   Discovery.prototype.Transport�                          �                                           �'  �'  T            A5    5   ���̈!    _factories   Transport   ����   U   Discovery.prototype._startListeningForScan�                   b       �   	                                        �'  �(  X            A5    5      ;   �   =   : QA5    A5   ;   R 0   QA5    5   �   
=   A5   : Q��������Ӑ�҈ɐ��8    _transports	   scan   log   LISTEN FOR SCAN   Transport   SCAN_PORT   on   message   _onRemoteScan   ����   S   Discovery.prototype._stopListeningForScan�                   X       �                                           �(  �)  a            A5    5       A5    5   �   
=   A5   : QA5    5   �   
:  QA5    @0   Q���������ᐈ֐�͈    _transports	   scan   off   message   _onRemoteScan   destroy   ����   Y   Discovery.prototype._startListeningForUpdate�                   b       �   	                                        �)  �*  j            A5    5      ;   �   =   : QA5    A5   ;   R 0   QA5    5   �   
=   A5   : Q��������Ӑ�҈ɐ��<    _transports   update   log#   LISTEN FOR UPDATE   Transport   UPDATE_PORT   on   message   _onRemoteUpdate   ����   W   Discovery.prototype._stopListeningForUpdate�                   X       �                                           �*  �+  s            A5    5       A5    5   �   
=   A5   : QA5    5   �   
:  QA5    @0   Q���������ᐈ֐�͈    _transports   update   off   message   _onRemoteUpdate   destroy   ����   7   Discovery.prototype.observe�               �       �   
   .                                       subject   topic	   data   activeNetwork   �+  ..  |            T =    I   T  �   QV       ;   �   =   : QV   �   
;   5   : W   Q;   �   =   V   5   : QV   5   ;   5   5   H   A�   	
:  Q��������Ȑ���Ӑ����ՈȐ�ݐ�����̈ -   network-active-changed   log#   No active network   QueryInterface   Ci'   nsINetworkInterface7   Active network changed to: 	   type#   NETWORK_TYPE_WIFI#   _restartListening   ����   K   Discovery.prototype._restartListening�                   Q       �                                           N.  </  �            A5    5      A�   
:  QA�   
:  QA5    5      A�   
:  QA�   
:  Q�����̐�̐����̐�̈     _transports	   scan+   _stopListeningForScan-   _startListeningForScan   update/   _stopListeningForUpdate1   _startListeningForUpdate   ����   M   Discovery.prototype._outgoingTransport�                   ;       �                                           �/  0  �            A5    5      A5    5   A5    5      A5    5   @�����̐����̐���    _transports	   scan   update   ����   C   Discovery.prototype._sendStatusTo�               >       �                                          	   port   status �0  41  �            Y   A5    5   ]    A5   ]   �   QA5   �   
V   T  : Q�����А�А��؈+    device	   name   localServices   services%   _outgoingTransport	   send   ����   C   Discovery.prototype._onRemoteScan�                   %       �                                           P1  �1  �            ;    �    =   : QA�   
;   : Q����Ӑ�ш     log!   GOT SCAN REQUEST   _sendStatusTo   UPDATE_PORT   ����   G   Discovery.prototype._onRemoteUpdate�              �      �      �                        .            e   update   remoteDevice   remoteHost  �1  �:  �            ;    �    =   : QT 5   �   QT 5   �  QA5   5   �   
V   : QA5   K�  Q   �mW  ����  Q�  Q�  QA5   V  7�  QV  V   7  �  QV  T 5   q�  QV  E   QV      LV  V   /Q;    �    =   V  =   	V   : QA�   

V  =   V   : Q��QLM���VQN�T 5   K�  Q  �mW  �����  Q�  Q�  Q�  QA5   V  7 D   QA5   V  7V   7 �  QA5   V  7D   QY   �  QV  V   7�  Q;   �   
T 5   V  7Y   : �  QV  V  0   QV  V   V  9QA5   V  V  9QV     F;    �    =   V  =   	V   : QA�   

V  =   V   V  : QV   E   -Q;   �   
V  : ;   �   
V  :    F;    �    =   V  =   	V   : QA�   

V  =   V   V  : Q��QLM���xQNș��Ӑ��͐�͐���ڐ���0�  �ܐ�
А�
��А�
Ґ��ʈ!��ʐ�㐈蘀 ��0� �␐�
�Ґ�֐����
ې�
ΐ���
ވȐ�ΐ�ΐ�А����㐈ޘ� �
ːЈ
ӈ!��㐈였 ͈*    log#   GOT REMOTE UPDATE   device	   from#   _expectingReplies   delete   remoteServices   services   REMOVED    , DEVICE 	   emit   -device-removed   Cu   cloneInto	   host   ADDED    -device-added	   JSON   stringify   UPDATED    -device-updated    ����         service                  %   devicesWithService    '   hadServiceForDevice    )   haveServiceForDevice        ����         service                    newDevice    %   devicesWithService       oldDeviceInfo       newDeviceInfo       #  �     [   �       Q   �   ����   c   �            �  ����   ,  z        ����   Q   Discovery.prototype._purgeMissingDevices�                  �       �   
   0                                  ;  f=  �            ;    �    =   : QA5   K�   Q   �mW   ��  QA5   V   7�  QV  K�  Q   omW  A5   5   �   
V  :    LV  V  /Q;    �    =   V   =   V  : QA�   
V   =   	V  : Q�QLM����QN���QLM���VQNș��Ӑ�0�  �А�
А�0tʐ��ֈ��
ʐ�
㐈
��� �.    log/   PURGING MISSING DEVICES   remoteServices#   _expectingReplies	   from   has   REMOVED    , DEVICE 	   emit   -device-removed    ����          service                  %   devicesWithService                    remoteDevice       '   �      T   u          �   ����   -   �          J   �      