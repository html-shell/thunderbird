�s�                G     �      �       	                               resource://gre/modules/FxAccountsProfileClient.jsm     M                �   �   �   �   Af    6    Q;   5      Q5      Q5      Q5   	   QQ;   �   

=   : Q;   �   

=   : Q;   �   

=   : Q;   �   

=   : Q;   �   
f   : QA�   6   QA5   Y   @]   @]   ;   ]   �   ]   �   ]   �   ]   6   QA�   6   Q;   5   �   6   Q;   5   �   6   Q��������	̈T����B�Ո0�Ո,�Ո8�Ո0�Ո#�̘+��-˘2��8��=�ʘK�ʘ�  ��ʘ�  ��А������  �̘�  ����  �՘�  ����  �Ր�� !   EXPORTED_SYMBOLS   Cc   Ci   Cu   Cr   Components   classes   interfaces   utils   results   importE   resource://gre/modules/Promise.jsm=   resource://gre/modules/Log.jsmU   resource://gre/modules/FxAccountsCommon.jsE   resource://services-common/rest.js-   importGlobalProperties/   FxAccountsProfileClient   prototype   serverURL   token   RESTRequest   _Request   _createRequest   fetchProfile#   fetchProfileImage9   FxAccountsProfileClientError   _toStringFields   toString                  /   FxAccountsProfileClient   9   FxAccountsProfileClientError                                    URL                  ����   9   this.FxAccountsProfileClient�                �       �   	   1                                     options L  �               T   D   QT  5     D   QT  5       ;   =   R p�A;   T  5    R 6    Q   '��   Qv�   Q;   =   R p�    AT  5   6   Q;   �   
=   : Q���ʈψ���ˈ�$���ψΐ̐�ˈ˘)�ϐ�Ո2    serverURL   token   Errorg   Missing 'serverURL' or 'token' configuration option   URL'   Invalid 'serverURL'   log   debugI   FxAccountsProfileClient: Initialized    ����          e         7          U      ����   ����   k   this.FxAccountsProfileClient.prototype._createRequest�                 (       �                                      @   	   path   methodt  f  K             �   H   =    �   Q;   A�    R �А�̈�|�    GET   Promise   ����   o   this.FxAccountsProfileClient.prototype._createRequest/<�               �       �      M                                @      resolve   reject   profileDataUrl   request�  `  L       	      A5    �  �   QA5   V   R �   Q�  �   
:  �  Q�   �   
=   =   A5   : Q�   �   
=   =   : Q�   �    6   	Q�  =   
H   �   �   
:  Q   E�   ;   Y   ;   ]   ;   ]   ;   ]   ;   ]   R : ���
ѐ�
ˈ
ɐ�̈	ɘQ�ᐈژT�Иq���Ր�u�ѐ�
ʐ�
ʐ�
ʐ�
ʘu�������z�    serverURL   _Request   toUpperCase   setHeader   Authorization   Bearer    token   Accept!   application/json   onComplete   GET   get9   FxAccountsProfileClientError   ERROR_NETWORK   error   ERRNO_NETWORK   errno;   ERROR_CODE_METHOD_NOT_ALLOWED	   code9   ERROR_MSG_METHOD_NOT_ALLOWED   message   ����   �   this.FxAccountsProfileClient.prototype._createRequest/</request.onComplete�              1      �      g                        #             error	   body �	    T             T     C�   ;    Y   ;   ]   ;   ]   T  �   
:  ]   R : @�   Q�;   �   
�   �   5   	5   
: W   Q   x��  Qv�  Q�   ;    Y   ;   ]   ;   ]   �   �   5   	5   ]   �   �   5   	5   
]   R : �ș�    �   �   5   	5      �   V   :    �   ;    V   R : ����
ѐ�ʐ�ʐ�ʈ	ȘV�������]���)��
��͐̐�
ѐ�ʐ�ʐ�ِ�٘a������͘j���
ʈɐ��
Ј������/ 9   FxAccountsProfileClientError   ERROR_NETWORK   error   ERRNO_NETWORK   errno   toString   message	   JSON   parse   response	   body   ERROR_PARSE   ERRNO_PARSE   status	   code   success    ����         e         M   -       {   l   ���������             ����   g   this.FxAccountsProfileClient.prototype.fetchProfile�                   ,       �                                            r  �  �             ;    �   
=   : QA�   
=   =   : ���Ր�҈�'    log   debugU   FxAccountsProfileClient: Requested profile   _createRequest   /profile   GET   ����   q   this.FxAccountsProfileClient.prototype.fetchProfileImage�                   ,       �                                            �  p  �             ;    �   
=   : QA�   
=   =   : ���Ր�҈�&    log   debugS   FxAccountsProfileClient: Requested avatar   _createRequest   /avatar   GET   ����   C   this.FxAccountsProfileClientError�                        �                                              details   $  �             T  D   QY   U  QA=   6    QAT  5   D   Q@6   QAT  5   D   Q;   6   QAT  5   D   Q;   6   QAT  5   D   Q@6   Q���Ґ��̐�֐�ڐ�ڐ�ֈ' 	   name9   FxAccountsProfileClientError	   code   errno'   ERRNO_UNKNOWN_ERROR   error   ERROR_UNKNOWN   message   ����   m   FxAccountsProfileClientError.prototype._toStringFields�                   >       �                                            �  l  �             Y   A5    ]    A5   ]   A5   ]   A5   ]   A5   ]   �����ː�ː�ː�ː�̐� 	   name	   code   errno   error   message   ����   _   FxAccountsProfileClientError.prototype.toString�                   /       �                                            �  K  �             A5    =   ;   �   
A�   
:  : =   �����(�����ˈ- 	   name   (	   JSON   stringify   _toStringFields   )