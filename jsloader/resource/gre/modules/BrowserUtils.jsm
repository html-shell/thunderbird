�s�                �      �      l                                 0     resource://gre/modules/BrowserUtils.jsm     �                �   �   �   Af    0    Q;   5      Q5      Q5      QQ;   �   
=   	: QAY   �   ]   �   ]   �   ]   �   ]   �   ]   �   ]   �   ]   �   ]   �   	]   �   
]   �   ]   0   
Q��
�������̈+�
��5�Ո1���ʘ(�ʘE�ʘI�ʘM�ʘ[�ʘp�ʘ�  ��ʘ�  ��ʘ�  ʘ�  ۈИ�  � !   EXPORTED_SYMBOLS   Ci   Cu   Cc   Components   interfaces   utils   classes   importG   resource://gre/modules/Services.jsm   BrowserUtils   dumpLn!   urlSecurityCheck   makeURI   makeFileURI   makeURIFromCPOW   getFocusSync9   getElementBoundingScreenRect-   offsetToTopLevelWindow+   onBeforeLinkTraversal%   makeNicePluginName#   linkHasNoReferrer                     BrowserUtils                  ����   1   this.BrowserUtils.dumpLn�               q      �                                        	   args 6  �               �U  QT  - �
:  �   Q   )m5    W   Q;   �   V   =   : Q�Q�   
:  5   ����� ;   �   =   : Q���8=ѐ�ؘ�ˈ����Ҙ�ӈ    value	   dump    	   next	   done   
    ����          a          =          H   ����   ����   E   this.BrowserUtils.urlSecurityCheck�              �       �      5                                 	   aURL   aPrincipal   aFlags   secMan   �  %  (       	      ;    5   W   QT ;   H   V   5   U Q�T  ;   5   r   "V   �   
T T  T : Q   V   �   
T T  T : Q   n���  Q�  Qv�  Q=   �  Q�=   	T 5   
5   W  Q   ��  Qv�  Q�    =   T  V  =   p�    ���ϐ���͘.�I����ݘ2�ݐҐ�
ʐ���ݘ8Ә:�ܐ�    Services+   scriptSecurityManager   undefined   STANDARD   Ci   nsIURI3   checkLoadURIWithPrincipal9   checkLoadURIStrWithPrincipal       from    URI	   spec   Load of     denied.    ����         e       principalStr                     e2         +   M        �          z   a   ����   �             ����   3   this.BrowserUtils.makeURI�                        �      	                                    	   aURL   aOriginCharset   aBaseURI   -  �  E             ;    5   �   
T  T T : ���ڈ�3    Services   io   newURI   ����   ;   this.BrowserUtils.makeFileURI�                        �      	                                       aFile �  �  I             ;    5   �   
T  : ���Ԉ�    Services   io   newFileURI   ����   C   this.BrowserUtils.makeURIFromCPOW�                 '       �      	                                       aCPOWURI 	  ]	  M             ;    5   �   
T  5   T  5   @: �����@    Services   io   newURI	   spec   originCharset   ����   =   this.BrowserUtils.getFocusSync�                   �      8                                       document   window   elt   XUL_NS (    [       
      T  5    5   �  QT  5    5   W   Q=   �  QV  V   5   rE   BQV  5   =   E   -QV  5   V  E   QV  �   
=   	:    qV  5   
�   
:  - �
:  �   
:  5      Q   
5   W  Q�   
:  5      Q   
5   W   QQQZ  V  `   V   `  ���Ґ�Ҙ_�
ʐԐՐԐЈ��ЈԈ������ؘg��ȈɈ #   commandDispatcher   focusedElement   focusedWindow{   http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul   XULElement   localName   browser   namespaceURI   getAttribute   remote   syncHandler5   getFocusedElementAndWindow	   next	   done   value   ����   ]   this.BrowserUtils.getElementBoundingScreenRect�               �       �      -                                       aElement	   rect   window   fullZoom <  [  p       	      T  �    
:  �   QT  5   5   �  QV  �   
;   5   : 5   �  QY   V   5   V  5   V  ]   V   5   	V  5   
V  ]   	V   5   V  ]   V   5   V  ]   W   QV   ���ʈȐ�Ҙv�Ո͐���ݐ�ݐ�Ӑ�ؘ~�� +   getBoundingClientRect   ownerDocument   defaultView   getInterface   Ci#   nsIDOMWindowUtils   fullZoom	   left   mozInnerScreenX   top   mozInnerScreenY   width   height   ����   Q   this.BrowserUtils.offsetToTopLevelWindow�              �       �   
   X                                    aTopLevelWindow   aElement   offsetX   offsetY   element   win  �     �       
      >�   Q>�  QT �  Q   ^m��  QV  5    5   5   W  QV  �   
:  �  QV   V  5   W   QV  V  5   W  Q��V  E   'QV  5    E   QV  5    5   T  ���z@�  QV  T    T  W  Q   V  5   5   W  QY   V  ]   V   ]   V  ]   	�������Ȑ(�  ����A��ؐ�
ˈȐ��x���x��  ��̐ϐט�  ������͐��Ӑ��	ɈɈʈ    ownerDocument   defaultView   frameElement+   getBoundingClientRect	   left   top   contentDocument   targetWindow   offsetX   offsetY    ����      	   rect           �          W   ����   ����   O   this.BrowserUtils.onBeforeLinkTraversal�              :      �   
   `                                    originalTarget   linkURI   linkNode   isAppTab   linkHost   docHost   longHost   shortHost    $  M  �             T  =    D   
QT     	T  �   Q�  Q�T 5   W   QT 5   5   5   W  Q   ��  Qv�  QT  �ș�    V  V      	T  V   �   V  �      Z  V   `   V  `     Z  V  `   V   `  - �
:  �   
:  5      Q   
5   �  Q�   
:  5      Q   
5   �  QQQV  =   V     	T  =   	����ψ �����������%��͐�ܐ̐���͐�����������Ɉ*Ȉ
шȈ	٘�  ����ؐ��������    	   host   ownerDocument#   documentURIObject   length	   next	   done   value	   www.   _blank    ����         e         )   )       S      ��������c             ����   I   this.BrowserUtils.makeNicePluginName�               �       �      7                          
            aName   newName -  >  �             T  =       =   �    �   
T  :    =   T  �   
�   =   : �   
�   =   : �   
�   =   : �   
:  �   QV   �������ψ����  ψԈ
ʐʘ�  ψʐ�ʘ�  ψҐ����    Shockwave Flash   Adobe Flash	   exec	   Java   replace   	   trim   ^Java\W       \(.*?\)   %   [\s\d\.\-\_\(\)]+$       \bplug-?in\b      ����   G   this.BrowserUtils.linkHasNoReferrer�               ^       �      )                                      linkNode   rel   values .  }  �             T      BT  �    
=   : �   QV       BV   �   
�    : �  QV  �   
=   : ����������ψȐ��������Ј	Ȑ�Ј�#    getAttribute   rel   split   indexOf   noreferrer   [ \t\r\n\f]    