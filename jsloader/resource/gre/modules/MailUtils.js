�s�                \     �      �                                      resource:///modules/MailUtils.js     �?                �    �   �   �   �   n    f    o    Q;   5      Q;   5      Q;   5   �   
=   : Q;   5   �   
=   	: Q;   5   �   
=   
: Q;   5   �   
=   : Q;   5   �   
=   : Q;      Qn   Y   �   ]   �   ]   �   ]   �   ]   �   ]   �   ]   �   ]   �   ]   �   	]   �   
]   �
]   �   ]   o   Q��������������Ј��Ј��Ј�
ڈA�ڈ=�ڈ?�ڈ?�ڈA��ˈ�����ʘ9��ʘO�ʘu�ʘ�  ��ʘ�  ��ʘ�  ۈ�ʘ�  ��ʘ� ��ʘ� �ʘ� ;��� U��И� !   EXPORTED_SYMBOLS   Cc   Components   classes   Ci   interfaces   utils   importK   resource:///modules/iteratorUtils.jsmC   resource:///modules/MailConsts.jsG   resource:///modules/mailServices.jsG   resource://gre/modules/Services.jsmK   resource://gre/modules/PluralForm.jsm   MC   MailConsts   MailUtils   discoverFolders3   getFolderForFileInProfile   getFolderForURI   displayMessage   confirmAction   displayMessages7   openMessageInExistingWindow-   openMessageInNewWindow1   openMessagesInNewWindows3   displayMessageInFolderTabA   INTER_FOLDER_PROCESSING_DELAY_MSO   setStringPropertyOnFolderAndDescendents                     MailUtils                  ����   3   MailUtils_discoverFolders�                �       �      &                                      servers�           
      ;    5   5   �   Q;   �   V   ;   5   : K�  Q   QmW  �V  5   5   Q   7��  Qv�  Q;   5   	�   

=   V  : Q�    �QLM����QNș��Ԑ؈�0Vʘ#���Ԙ&̐�֐�'�ؘ)�    MailServices   accounts   allServers   fixIterator   Ci)   nsIMsgIncomingServer   rootFolder   subFolders   Services   console!   logStringMessageo   Discovering folders for account failed with exception:     ����         server                     ex       =   W       C          3   c   ����   X   +          ����   G   MailUtils_getFolderForFileInProfile�              x       �                              
             aFile   folders �  �	  :       	      ;    5   5   �   Q;   �   V   ;   5   : K�  Q   0mW  V  5   �   
T  :    V  � Nș�QLM����QN�@���Ԙ=؈�05ʐӈ
��ؘA��    MailServices   accounts   allFolders   fixIterator   Ci   nsIMsgFolder   filePath   equals    ����         folder       =   6       3   B   ��������g             ����   3   MailUtils_getFolderForURI�               �       �   	   1                                        aFolderURI-   aCheckFolderAttributes   folder   rdfService  �  �  O             @�   Q;    5   �   
;   5   : �  QV  �   
T  : W   QV   E   QV   ;   5   r   3T E   QV   5   D   QV   5       @   @V   ������ѐʘR�ȘT�Έ	ȘV�.�Ɉ$����Z���^��    Cc=   @mozilla.org/rdf/rdf-service;1   getService   Ci   nsIRDFService   GetResource   nsIMsgFolder   parent   isServer   ����   1   MailUtils_displayMessage�                        �                                              aMsgHdr'   aViewWrapperToClone   aTabmail   )  �  u             A�    
Z  T  `   T T : Q����̈͈����?    displayMessages   ����   /   MailUtils.confirmAction�              �       �      N                                      aNumMessages   aConfirmTitle   aConfirmMsg   aLimitingPref   openWarning      y  �             ;    5   �   
T : �   QV   ?E   QT  V      �����  Q�  Q�  Q;    5   �   
=   : �  QV  �   
T : �  Q;   �   
T  V  �   
T : : �   	
=   
T  : �  Q;    5   �   
@V  V  :     	C�ș�B���ԈȐ�א�
ѐ��  ��Ȑ��
ΈȐ�
ϐΈ��  ��ʐ�Ș�  ��Ȑ���
ڈ������    Services   prefs   getIntPref   strings   createBundle]   chrome://messenger/locale/messenger.properties#   GetStringFromName   PluralForm   get   replace   #1   prompt   confirm    ����         bundle       title       message        8   �   ���������             ����   3   MailUtils_displayMessages�              O      �   !   �                        3             aMsgHdrs'   aViewWrapperToClone   aTabmail'   openMessageBehavior   1  �"  �             ;    5   �   
=   : �   QV   ;   5   5      A�   
T  T : Q  V   ;   5   5      BT  �   	?D   QA�   

T  >7:     A�   
T  T : Q  �V   ;   5   5     ���  Q@�  QT     H;    5   �   
=   : W  QV     !V  5   �   
=   : U QT   #A�   
T  �   	=   =   =   :    	�ș;   �   T  : K�  Q�  Q   �m- �
:  �   
:  5      Q   
5   W  Q�   
:  5      Q   
5   W  QQT �   
=   Y   V  ]   T ]   V  T  �   	?]   T  �   	?]   : Q�QLM���VQN�V     V  �    
:  Q   A�   
T  T : Qș���ѐ��  ��Ȑ�����א��=���Ј!͈��א��ː�
��
���ֈȐ��
Ո���� �Ր���  ������
�͈%�0�  �׈������א��
Ԉɐ�Ȑ�Ԑ�Ϙ�  
ј�  ���
Ԑ����Ә�  ��E    Services   prefs   getIntPref1   mail.openMessageBehavior   MC'   OpenMessageBehavior   NEW_WINDOW1   openMessagesInNewWindows   EXISTING_WINDOW   length7   openMessageInExistingWindow   NEW_TAB   wm'   getMostRecentWindow   mail:3pane   document   getElementById   tabmail   confirmAction'   openTabWarningTitle5   openTabWarningConfirmation3   mailnews.open_tab_warning   Iterator	   next	   done   value   openTab   message   msgHdr%   viewWrapperToClone   background   disregardOpener   focus    ����         mail3PaneWindow                     i       msgHdr       l  �       �   �  ��������G            ]  �          ����   K   MailUtils_openMessageInExistingWindow�               A       �                                              aMsgHdr'   aViewWrapperToClone   messageWindow  4$  b%  �             ;    5   �   
=   : �   QV      V   �   
T  T : QCB����ֈȐ��Ր�����    Services   wm'   getMostRecentWindow%   mail:messageWindow   displayMessage   ����   A   MailUtils_openMessageInNewWindow�               R       �   	   #                                        aMsgHdr'   aViewWrapperToClone	   args  �&  (  �             Y   T  ]    T ]   �   QV   V   6   Q;   5   �   
@=   =   =   V   : Q�����Ȉ͐�ΐ��Ґʐɘ�  ����5    msgHdr%   viewWrapperToClone   wrappedJSObject   Services   ww   openWindowY   chrome://messenger/content/messageWindow.xul   G   all,chrome,dialog=no,status,toolbar   ����   E   MailUtils_openMessagesInNewWindows�                �       �   
   .                                     aMsgHdrs'   aViewWrapperToClone  �)  �+        	      A�    
T  �   =   =   =   :    ;   �   T  : K�   Q   mm- �
:  �   
:  5      Q   
5   Q�   
:  5      Q   
5   W   QQA�   	
V   T : Q�QLM����QNș��Ր��� �������͈ �0r׈������א���9    confirmAction   length-   openWindowWarningTitle;   openWindowWarningConfirmation9   mailnews.open_window_warning   Iterator	   next	   done   value-   openMessageInNewWindow    ����          msgHdr       G   s       =      ����   ����   G   MailUtils_displayMessageInFolderTab�              �       �      3                         
             aMsgHdr   mail3PaneWindow �,  �.        	      ;    5   �   
=   : �   QV      V   �   
T  : Q   U��  QY   T  ]   �  QV  V  6   Q;    5   �   
@=   	=   
=   V  : Qș����ֈȐ��א���
�͐�ΐ�Ґʐɘ� ��� �
    Services   wm'   getMostRecentWindow   mail:3pane9   MsgDisplayMessageInFolderTab   msgHdr   wrappedJSObject   ww   openWindow7   chrome://messenger/content/   G   all,chrome,dialog=no,status,toolbar    ����      	   args        ?   O   ����   ����   c   MailUtils_setStringPropertyOnFolderAndDescendents�              �       �      R                                @      aPropertyName   aPropertyValue   aFolder   aCallback7   folder_string_setter_worker7   folder_string_setter_driver   allFolders   worker   timer }9  �?  V      
      �    W   Q�   W  Q;    �    Z  T `   ;   5   : �   QT �   
�   : QV   :  �   Q;   5   �   
;   5   : �   Q�   �   
V  A5   	;   5   5   
: Q��� `ʘ� mʘ� Y���Έш����ɐ��Ӑ���� i��	ɐ���ۈɐ�� z�А�Ϙ� z����=    toXPCOMArray   Ci   nsIMutableArray   ListDescendants   Cc)   @mozilla.org/timer;1   createInstance   nsITimer!   initWithCallbackA   INTER_FOLDER_PROCESSING_DELAY_MS)   TYPE_REPEATING_SLACK   ����   7   folder_string_setter_worker                  �       �      $                                    .generator�;  �<  `            ɉ   �   �Q;    �    �  �  ;   5   : K�    �   Q   Am�   �   �   
�  �  : Q�   @6   Q;   �  �  �Q�QLM����QN����   ̙�� g�� `̐ވ�0Fː��ڐ��̐�ވ    fixIterator   Ci   nsIMsgFolder#   setStringProperty   msgDatabase   undefined    ����          folder      A   G       6   T   ����
   {      ����   7   folder_string_setter_driver                  b       �                              
           �=  �>  m            ��   �   �    
:  Q   K��   Qv�   Q�   �   �   
:  Q�      �   V   ;   : Q�    �����ڐ�̐���Ր��
ې� 	   next   cancel   StopIteration    ����          ex                      ?   ����