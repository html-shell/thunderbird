�s�                h     �      �                                 0     resource://gre/modules/ThirdPartyCookieProbe.jsm              	       �    �   �   �   �      n    ;   5   1    Qn   ;   5   1   Qn   ;   5   1   Q;   �   
=   A: Q;   �   
=   	A: QAf    0   
Q�&\    QA�   0   QA5   Y   ;   �   
Z  ;    5   `   : ]   �   ]   �   ]   �   ]   �   ]   0   Qn   �   1   Q;   Y   �   ]   �   ]   �   	a   �   
a   �   a   �   a   0   Q�����������  ��ʘ�  ��	�����Ո��Ո��Ո�ֈ9�ֈ7�̈2��ˈ�̘-��/ː�Ј'Έ����Ȑ�ʘ6�ʘB�ʘo�И�  ����  ��Ј��  �ʐ�ʐ����ʐ����ʐ���ʐ���ʐ���А�����  �����    Ci   Components   interfaces   Cu   utils   Cr   results   importK   resource://gre/modules/XPCOMUtils.jsmG   resource://gre/modules/Services.jsm!   EXPORTED_SYMBOLS)   MILLISECONDS_PER_DAY+   ThirdPartyCookieProbe   prototype   XPCOMUtils   generateQI   nsIObserver   QueryInterface	   init   dispose   observe   flush   RejectStats   addAccepted   addRejected%   countAcceptedSites%   countRejectedSites+   countAcceptedRequests+   countRejectedRequests                  +   ThirdPartyCookieProbe                  ����   5   this.ThirdPartyCookieProbe�                   '       �                                           �  �               A;   R  0    QA;   �   
:  0   Q��(��ɘ,�͈Ɉ %   _thirdPartyCookies   Map   _latestFlush	   Date   now   ����   S   this.ThirdPartyCookieProbe.prototype.init�                   U       �                                           q  Q  1             ;    5   �   
A=   B: Q;    5   �   
A=   B: Q;    5   �   
A=   B: Q���ܐ�ܐ�܈E    Services   obs   addObserver+   profile-before-change7   third-party-cookie-accepted7   third-party-cookie-rejected   ����   Y   this.ThirdPartyCookieProbe.prototype.dispose�                   R       �                                           f  :  6             ;    5   �   
A=   : Q;    5   �   
A=   : Q;    5   �   
A=   : Q���ې�ې�ۈA    Services   obs   removeObserver+   profile-before-change7   third-party-cookie-accepted7   third-party-cookie-rejected   ����   Y   this.ThirdPartyCookieProbe.prototype.observe�                �      �      o                        &            docURI   topic   referrer   �	  5  B             �����  Q�  Q�   QT =       A�   
:  QA�   
:  QT =   E   QT =      	�șT =   H   T    ;   �   T : �   Q;   �   T  �   
;   5   	: 5   
: �  QA5   �   
V  : �  QV      ,;   R  W  QA5   �   
V  V  : QT =      V  �   
V   : Q   V  �   
V   : Q�   ���   Qv�   QV   ;   5   r   <V   5   ;   5   D   QV   5   ;   5      	�ș;   5   �   
=   V   =   V   5   : Q�    ���� 7Ӑ��F�̐�̘Iϐ��L��Q�
�ڈ-Ȑ�
ވȈ����Ȑ�
шȐ�
���Ȑ�٘X���ؐ��٘]̐��ڐ���
�e���� +   profile-before-change   flush   dispose7   third-party-cookie-accepted7   third-party-cookie-rejected   ?   normalizeHost   QueryInterface   Ci   nsIURI	   host%   _thirdPartyCookies   get   RejectStats   set   addAccepted   addRejected   nsIXPCException   result   Cr7   NS_ERROR_HOST_IS_IP_ADDRESSG   NS_ERROR_INSUFFICIENT_DOMAIN_LEVELS   Services   console!   logStringMessageM   ThirdPartyCookieProbe: Uncaught error    
   stack    ����          firstParty       thirdParty    	   data        ����          ex            ;         3  ��������Y             =  �   ���������           ����   U   this.ThirdPartyCookieProbe.prototype.flush�              �      �      f                        5          	   aNow   updays   acceptedSites   rejectedSites!   acceptedRequests!   rejectedRequests   
  o             T  H   ;    �   
:  U  QT  A5   ;   �   QV   >   AT  0   Q;   5   �   
=   : �  Q;   5   �   
=   : �  Q;   5   �   
=   	: �  Q;   5   �   
=   
: �  QA5   - �
:  �  Q�  Q   �m5   - �
:  �   
:  5      Q   
5   W  Q�   
:  5      Q   
5   W  QQQV  �   
V  5   V   : QV  �   
V  5   V   : QV  �   
V  5   V   : QV  �   
V  5   V   : Q�Q�   
:  5   ���� A5   �   
:  Q�ш��Ր�t��v�ʐ�ֈȐ�ֈȐ�ֈȐ�ֈȐ�8�  �݈��ؐ�ݐ�ݐ�ݐ�ݘ{�ˈ����Ҙ�  ��ш  	   Date   now   _latestFlush)   MILLISECONDS_PER_DAY   Services   telemetry!   getHistogramByIdG   COOKIES_3RDPARTY_NUM_SITES_ACCEPTEDE   COOKIES_3RDPARTY_NUM_SITES_BLOCKEDM   COOKIES_3RDPARTY_NUM_ATTEMPTS_ACCEPTEDK   COOKIES_3RDPARTY_NUM_ATTEMPTS_BLOCKED%   _thirdPartyCookies   value	   next	   done   add%   countAcceptedSites%   countRejectedSites+   countAcceptedRequests+   countRejectedRequests   clear    ����         k    	   data       �   �       �   �   ����   ����      RejectStats�                   1       �      %                                     �  x  �             A;   R  0    QA;   R  0   QA>0   QA>0   Q�������ɐ�����ɘ�  ��Ș�  ��Ȉ    _acceptedSites   Set   _rejectedSites#   _acceptedRequests#   _rejectedRequests   ����   C   RejectStats.prototype.addAccepted�                 *       �                                             firstParty �    �             A5    �   
T  : QA5   #?�
0   QQ���Ԑ�Ո    _acceptedSites   add#   _acceptedRequests   ����   C   RejectStats.prototype.addRejected�                 *       �                                             firstParty   v  �             A5    �   
T  : QA5   #?�
0   QQ���Ԑ�Ո    _rejectedSites   add#   _rejectedRequests   ����   Q   RejectStats.prototype.countAcceptedSites�                          �                                           �  �  �             A5    5   ���̈     _acceptedSites	   size   ����   Q   RejectStats.prototype.countRejectedSites�                          �                                           �    �             A5    5   ���̈     _rejectedSites	   size   ����   W   RejectStats.prototype.countAcceptedRequests�                          �                                           !  L  �             A5    ���� #   _acceptedRequests   ����   W   RejectStats.prototype.countRejectedRequests�                          �                                           i  �  �             A5    ���� #   _rejectedRequests   ����      normalizeHost                        �      	                                    	   host �    �             ;    5   �   
T  : ���Ԉ�*    Services	   eTLD+   getBaseDomainFromHost