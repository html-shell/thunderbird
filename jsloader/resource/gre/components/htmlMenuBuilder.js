�s�                2     �      �                                      resource://gre/components/htmlMenuBuilder.js     �         	       �   �   �       ;    5   �   
=   : Q;    5      Q;    5      Qn   ?o   Q;   	Y   ;    �   
=   : ]   ;   �   
Z  ;   5   `   : ]   @]   @]   Y   ]   Z   ]   �   ]   �   ]   �   ]   �   ]   �   ]   �   ]   �   ]   6   
QA;   �   
Z  ;   	`   : 6   Q��	�����ʘ�	��ڈA�	�Ј��Ј��̈�����!���шȐ�Ј'Έ����Ș&�����ʐ�ɘ+�ʘ/�ʘC�ʘe�ʘm�ʘx�ʘ|�И�  ����ш5Ɉ����Ɉ3    Components   utils   importK   resource://gre/modules/XPCOMUtils.jsm   Cc   classes   Ci   interfaces   gGeneratedId   HTMLMenuBuilder   prototype   IDM   {51c65f5d-0de5-4edc-9058-60e50cef77f8}   classID   XPCOMUtils   generateQI   nsIMenuBuilder   QueryInterface   currentNode	   root   items   nestedStack   toJSONString   openContainer   addItemFor   addSeparator!   undoAddSeparator   closeContainer   click   NSGetFactory)   generateNSGetFactory   ����      HTMLMenuBuilder                   (       �                                             A  �               A@6    QA@6   QAY   6   QAZ   6   Q���Ȑ�Ȑ�̐�ˈ    currentNode	   root   items   nestedStack   ����   M   HTMLMenuBuilder.prototype.toJSONString�                          �      	                                      {  �  +             ;    �   
A5   : ���҈� 	   JSON   stringify	   root   ����   O   HTMLMenuBuilder.prototype.openContainer�                �       �      8                         
             aLabel �  Q  /             A5        6AY   =   ]   Z   ]   6   QAA5   6    Q   m��   QA5    �   QAY   =   ]   T  ]   Z   ]   6    QV   5   �   
A5    : QA5   �   
V   : Qș��1����ʐ�Ϙ5�Ҙ7��
ː���ʐ�Ȑ�Ϙ>�ڐ�֘7�
    currentNode	   root	   menu	   type   children   label	   push   nestedStack    ����          parent        >   g   ����   ����   I   HTMLMenuBuilder.prototype.addItemFor�                      �      M                                        aElement   aCanLoadIcon	   item   elementType	   icon  j  �	  C       	      =    A5   q    Y   =   ]   T  5   ]   �   QT  5   �  QV  =   D   QV  =      (V   C6   QT  5      V   C6   QT  5   �  QV  �   	>E   	QT    V   V  6   QT  5   
   V   C6   
QV   n   ;   #?�
o   Q6   QA5   5    �   
V   : QA5   V   5   T  8Q�������H���ʐ�ҘM�͐���˘Q���˘V�͐���Θ[���˘_�ᐈژb�Ԉ    children   currentNode   menuitem	   type   label   checkbox   radio   checked	   icon   length   disabled   id   gGeneratedId	   push   items   ����   M   HTMLMenuBuilder.prototype.addSeparator�                   :       �                                            
  �
  e             =    A5   q    A5   5    �   
Y   =   ]   : Q�������j�׈!ʈ���ߌ5    children   currentNode	   push   separator	   type   ����   U   HTMLMenuBuilder.prototype.undoAddSeparator�                 c       �                                 	              children�
  �  m             =    A5   q    A5   5    �   QV   �   E   !QV   V   �   ?75   =      V   �   
:  Q�������r�А���ψ    children   currentNode   length	   type   separator   pop   ����   Q   HTMLMenuBuilder.prototype.closeContainer�                   3       �                                            �    x             AA5   �      A5   �   
:     A5   6    Q����҈-Ԉ#    currentNode   nestedStack   length   pop	   root   ����   ?   HTMLMenuBuilder.prototype.click�               (       �                                              id	   item '  z  |             A5    T  7�   QV      V   �   
:  Q���ϐ��ψ    items   click