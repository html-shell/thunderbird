�s�                �  #   �   +   �                                      resource://gre/modules/RemoteWebProgress.jsm     �         	       �   �   �               Af    6    Q;   5      Q;   5      Q;   5      Q;   �   
=   	: Q;   
Y   ;   �   
Z  ;   5   `   : ]   �   a   �   a   6   Q;   Y   ?]   �]   �]   �]   �]   �]   � ]   �@]   X �]   X ]   X�]   �   a   �   a   �   a    �   	a   !�   
a   "�   ]   #�   ]   $6   Q;   %Y   �   a   &�   ]   #�   ]   $�   ]   '�   ]   (�   ]   )�   ]   *6   Q�������ʘ�	��	�!�	�F�	��̈5��Ј��Ј��Ј�Ո3�������ʐ�Ј(Έ����Ș�ʐ�А��!�(��*ʐ�����������������Ȑ�Ȑ�Ș7�ʐ�ʐ�ʐ�ʐ�ʘ=�ʘA�ИD��F�P��Rʐ�ʘW�ʘ\�ʘa�ʘn�ʘz�ʘ�  ��И�  ֈ !   EXPORTED_SYMBOLS   Ci   Components   interfaces   Cc   classes   Cu   utils   importK   resource://gre/modules/XPCOMUtils.jsm1   RemoteWebProgressRequest   prototype   XPCOMUtils   generateQI   nsIChannel   QueryInterface   URI   originalURI#   RemoteWebProgress)   NOTIFY_STATE_REQUEST+   NOTIFY_STATE_DOCUMENT)   NOTIFY_STATE_NETWORK'   NOTIFY_STATE_WINDOW!   NOTIFY_STATE_ALL   NOTIFY_PROGRESS   NOTIFY_STATUS   NOTIFY_SECURITY   NOTIFY_LOCATION   NOTIFY_REFRESH   NOTIFY_ALL#   isLoadingDocument   DOMWindow   DOMWindowID   isTopLevel   loadType'   addProgressListener-   removeProgressListener1   RemoteWebProgressManager'   topLevelWebProgress+   _fixSSLStatusAndState   setCurrentURI-   _callProgressListeners   receiveMessage                  1   RemoteWebProgressManager                  ����      newURI                 /       �                                           	   spec �  �               ;    5   �   
;   5   : �   
T  @@: ����ۈʐ����N    CcC   @mozilla.org/network/io-service;1   getService   Ci   nsIIOService   newURI   ����   1   RemoteWebProgressRequest                 /       �                                           	   spec   originalSpec  �                 A;   �   T  : 6    QA;   �   T : 6   Q����Έɐ�ΈɈ 	   _uri   newURI   _originalURI   ����   M   RemoteWebProgressRequest.prototype.URI�                          �                                            s  �               A5    �   
:  ��͈� 	   _uri   clone   ����   ]   RemoteWebProgressRequest.prototype.originalURI�                          �                                            �  �               A5    �   
:  ��͈�    _originalURI   clone   ����   #   RemoteWebProgress                 -       �                                               aManager   aIsTopLevel  �  �  !             AT  6    QAB6   QA@6   QAT 6   QA>6   Q���ʘ$�Ȑ�Ȑ�ʐ�Ȉ    _manager%   _isLoadingDocument   _DOMWindow   _isTopLevel   _loadType   ����   [   RemoteWebProgress.prototype.isLoadingDocument�                          �                                            k  �  7             A5    ��� %   _isLoadingDocument   ����   K   RemoteWebProgress.prototype.DOMWindow�                          �                                            �  �  8             A5    ���    _DOMWindow   ����   O   RemoteWebProgress.prototype.DOMWindowID�                          �                                              �  �  9             >���	    ����   M   RemoteWebProgress.prototype.isTopLevel�                          �                                            �    :             A5    ���    _isTopLevel   ����   I   RemoteWebProgress.prototype.loadType�                          �                                            "  ?  ;             A5    ���    _loadType   ����   _   RemoteWebProgress.prototype.addProgressListener�                        �                                              aListener b  �  =             A5    �   
T  : Q���Ԉ-    _manager'   addProgressListener   ����   e   RemoteWebProgress.prototype.removeProgressListener�                        �                                              aListener �    A             A5    �   
T  : Q���Ԉ0    _manager-   removeProgressListener   ����   1   RemoteWebProgressManager                 �       �      '                                        aBrowser 8  ^
  F             AT  6    QA;   ACR 6   QAZ   6   QA5    5   �   
=   A: QA5    5   �   
=   A: QA5    5   �   
=   A: QA5    5   �   
=   	A: QA5    5   �   
=   
A: Q���ʐ�Ɉɐ�˘K�ܐ�ܐ�ܐ�ܐ�܈P    _browser)   _topLevelWebProgress#   RemoteWebProgress%   _progressListeners   messageManager%   addMessageListener'   Content:StateChange-   Content:LocationChange-   Content:SecurityChange)   Content:StatusChange-   Content:ProgressChange   ����   m   RemoteWebProgressManager.prototype.topLevelWebProgress�                          �                                            �
  �
  S             A5    ����! )   _topLevelWebProgress   ����   m   RemoteWebProgressManager.prototype.addProgressListener�               2       �                                              aListener   listener �
  v  W             T  �    
;   5   : �   QA5   �   
V   : Q���ԈȐ�Ո'    QueryInterface   Ci-   nsIWebProgressListener%   _progressListeners	   push   ����   s   RemoteWebProgressManager.prototype.removeProgressListener�                        �                                      @      aListener�    \             AA5    �   
A�    : 6    Q����ӈɈ4 %   _progressListeners   filter   ����   �   RemoteWebProgressManager.prototype.removeProgressListener/this._progressListeners<�                        �                                               l �     ^             T  �   ��*ʈ    ����   q   RemoteWebProgressManager.prototype._fixSSLStatusAndState�              �       �   
   *                                      aStatus   aState   deserialized  +  �  a             @�   QT     c��  Q;    5   �   
;   5   5   : �  QV  �   
T  : W   QV   �   
;   5   	: Q�Z  V   `   T `  ����ː�
ѐϘd�Șg�ΈȐ�ژk��ȈȈ    CcW   @mozilla.org/network/serialization-helper;1   getService   Components   interfaces-   nsISerializationHelper#   deserializeObject   QueryInterface   Ci   nsISSLStatus    ����         helper           ]   ����   ����   a   RemoteWebProgressManager.prototype.setCurrentURI�              �       �   	   &                                  	   aURI   webNavigation   webProgress �  1  n       
      A5    5   �   QV   T  6   QA5   �  QA5   - �
:  �  Q   (m5   W  QV  �   
V  @T  : Q�Q�   
:  5   ����� ��q�А�͘t�ː�8<ѐ�טu�ˈ����Ґ�2    _browser   webNavigation   _currentURI'   topLevelWebProgress%   _progressListeners   value!   onLocationChange	   next	   done    ����         p       B   <       8   G   ����   ����   s   RemoteWebProgressManager.prototype._callProgressListeners�               �      �   
   +                                     methodName	   args  V  }  z       	      �U QA5    - �
:  �   Q   {m5   W   QV   T  7   b�V   T  7�   
V   T O Q   B��  Qv�  Q;   �   
=   T  =   V  =   : Q�    �Q�   
:  5   	���v� ���8�  �ѐ�����
ߐ̐�
�{�ˈ����Ҙ�  ��	 %   _progressListeners   value   apply   Cu   reportErrorC   RemoteWebProgress failed to call    :    
	   next	   done    ����          p                     ex          �       4             �   ����   T   6          ����   c   RemoteWebProgressManager.prototype.receiveMessage�                    �   A                           V             aMessage	   json   objects   webProgress   isTopLevel   request �  �  �             T  5    �   QT  5   �  Q@�  QV   5   E   QV   5   5   �  QV   5      lV     A5      ;   ABR W  QV  V   5   5   6   QV  V  5   	6   QV  V   5   5   6   
Q@�  QV   5      %;   V   5   V   5   R W  QV     /A5   V  5   6   QA5   V   5   6   QT  5   �����  Q�  Q�  Q�  Qx=   y   2=   y   X=   y  n=   y  0=   y  Vz  �A�   
=   V  V  V   5   V   5   : Q  c;   �   V   5   : �  QV   5    �  QA5   5   !V   5   "6   "QA5   5   !V   5   #6   #QV     �A5   5   !V  6   $QA5   V   5   &6   %QA5   ;   �   V   5   (: 6   'QA5   =   *6   )QA5   @6   +QA5   V   5   -6   ,QA5   V   5   /6   .QA�   
=   0V  V  V  V  : Q  CA�   1
V   5   V   5   2: - �
:  �   3
:  5   4   Q   
5   5�  Q�   3
:  5   4   Q   
5   5�  QQQV     0A5   5   6(QA5   5   7�   8
V  V  : QA�   
=   9V  V  V  : Q   wA�   
=   :V  V  V   5   V   5   ;: Q   GA�   
=   <V  V  V   5   =V   5   >V   5   ?V   5   @: Q   ș��͐�͐����␐�����АȈ!Ȑ���ؐ�Ӑ�ؐ��������ϐɘ�  ��Ȑ�����Ր�Ր���h� ��u
����u
��  �u
��  �u
����uʘ�  ����X����
ӈȐ�
ΐ���ڐ�ڐ���Ր�Ր�وɐ�ѐ�͐�Ր�Ր����X����
ڈԈ������ؐ������͐�ސ���ݐX�����X������X�� 	   json   objects   webProgress   isTopLevel)   _topLevelWebProgress#   RemoteWebProgress%   _isLoadingDocument#   isLoadingDocument   _DOMWindow   DOMWindow   _loadType   loadType   requestURI1   RemoteWebProgressRequest%   originalRequestURI   _browser   _contentWindow   contentWindow)   _documentContentType'   documentContentType	   name'   Content:StateChange-   Content:LocationChange-   Content:SecurityChange)   Content:StatusChange-   Content:ProgressChange-   _callProgressListeners   onStateChange   stateFlags   status   newURI   location   flags   webNavigation   canGoBack   canGoForward   _currentURI   _characterSet   charset   _documentURI   documentURI   _contentTitle      _imageDocument?   _mayEnableCharacterEncodingMenu=   mayEnableCharacterEncodingMenu#   _contentPrincipal   principal!   onLocationChange+   _fixSSLStatusAndState   state	   next	   done   value   securityUI   _securityUI   _update!   onSecurityChange   onStatusChange   message!   onProgressChange   curSelf   maxSelf   curTotal   maxTotal    ����         location       flags       status       state        *  �  ����