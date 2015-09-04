�s�                �     �   "   �                          #            resource://gre/components/nsAbLDAPAttributeMap.js     .         	       �   �          �    ;    5   �   
=   : Q;    5   �   
=   : Q;    �   
=   :    Q;    �   
=   	:    Q;   
Y   ;   ]   �   ]   �   ]   �   ]   �   ]   �   ]   �   ]   �   ]   �   ]   �   	]   �   
]   ;   �   
Z  ;    5   5   `   : ]   6   Q;   Y   ;   ]   Y   ]   �   ]   ;   �   
Z  ;    5   5   `   : ]   6   Q;   �   !
Z  ;   
`   ;   `  :     Q����
�ʘ�	��  Ո	��  ����ڈ?�ڈA��̐��"Ɉ�����
�̐�
�)Ɉ��������ʐ�ʘ�ʘ�ʘ+�ʘ5�ʘT�ʘ]�ʘj�ʘu�ʘ�  ���ʘ�  ��ʘ�  ш̐�Ә�  шΐ��������ʐ��ʐ��ʐ��ʘ�  �̐�Ә�  �ΐ�����Ј0ɈɈ����Ɉ����    Components   utils   importG   resource://gre/modules/Services.jsmK   resource://gre/modules/XPCOMUtils.jsm3   NS_ABLDAPATTRIBUTEMAP_CID   IDM   {127b341a-bdda-4270-85e1-edff569a9b85}A   NS_ABLDAPATTRIBUTEMAPSERVICE_CIDM   {4ed7d5e1-8800-40da-9e78-c4f509d7ac5e})   nsAbLDAPAttributeMap   prototype   classID!   getAttributeList   getAttributes#   getFirstAttribute!   setAttributeList   getProperty)   getAllCardAttributes)   getAllCardProperties   setFromPrefsA   setCardPropertiesFromLDAPMessage   checkState   XPCOMUtils   generateQI   interfaces+   nsIAbLDAPAttributeMap   QueryInterface7   nsAbLDAPAttributeMapService   mAttrMaps'   getMapForPrefBranch9   nsIAbLDAPAttributeMapService   NSGetFactory)   generateNSGetFactory   ����   )   nsAbLDAPAttributeMap                          �                                             2  h               AY   6    QAY   6   Q���̐�̈    mPropertyMap   mAttrMap   ����   !   getAttributeList�                 -       �                                              aProperty �  �               T  A5    q    @A5    T  7�   
=   : ��������ֈ�'    mPropertyMap	   join   ,   ����      getAttributes�                 ?       �                                              aProperty   aCount   aAttrs   �  �               T  A5    q    ;   5   5   pA5    T  7U QT �   U QT ��"����И&�ΐ�̐��    mPropertyMap   Components   results!   NS_ERROR_FAILURE   length   ����   #   getFirstAttribute�                         �                                              aProperty �  �  +             T  A5    q    @A5    T  7>7��.�����2�͈'    mPropertyMap   ����   !   setAttributeList�               �       �      9                                       aProperty   aAttributeList+   aAllowInconsistencies   attrs	   attr   �  6	  5       	      T �    
=   : W   QT     WV   K   ?mW  V  A5   qE   QA5   V  7T     ;   5   5   p�QLM����QNT  A5   q   4A5   T  7K   mW  A5   V  &Q�QLM����QNV   K   mW  A5   V  T  8Q�QLM����QNA5   T  V   8Q���8�ψȘ<���7Dʐ���
ܘE���0ʐ�ؘL7ʐ�ۘQ�ψ%    split   ,   mAttrMap   Components   results!   NS_ERROR_FAILURE   mPropertyMap   �         �         ,   E      ����      getProperty�                        �                                              aAttribute \	  �	  T             T  A5    q    @A5    T  7��V�����Z�ˈ!    mAttrMap   ����   )   getAllCardAttributes�                 s       �      &                          	              attrs   attrArray
  �
  ]       	      Z   W   QA5    K   !mW  V   �   
V  : W   Q�QLM����QNV   �       ;   5   5   pV   �   
=   : ���ɐ��0&ʐ�ψԘc����Иg�Ј�    mPropertyMap   concat   length   Components   results!   NS_ERROR_FAILURE	   join   ,      '      ����   )   getAllCardProperties�               S       �                                             aCount   props	   prop 4  �  j       	      Z   W   QA5    K   mW  V   �   
V  : Q�QLM����QNT  V   �   6   QV   ��l�ɐ��0"ʐ�ߘq�Ґ��    mPropertyMap	   push   value   length      #      ����      setFromPrefs�             �       �   	   1                                       aPrefBranchName   childCount   children   child   branch �  �  u             ;    5   �   
T  =   : �  QY   W   QV  �   
=   V   : W  QV  K   -mW  A�   
V  V  �   
V  : C: Q�QLM����QNA�   
:  Q��w�ڈ	Șz�ʐ�ԈȘ~�72ʐ�ۈ�����А����̈    Services   prefs   getBranch   .   getChildList   !   setAttributeList   getCharPref   checkState   T   3      ����   A   setCardPropertiesFromLDAPMessage�              �      �      �                                     aMessage   aCard   cardValueWasSet   msgAttrCount   msgAttrs   toLower	   prop	   attr   values   index    #  �             �    W  QBW   QY   W  QT  �    
V  : W  QV  �   
V  : W  QA5   K  mW  A5   V  7K   �mW  V  �   
:  W  QV  �   
V  : ��   ��T  �   
V  Y   : W  QV  =   E   QV  >7   GV  >7�   
=   : W  QV  ��   !V  >V  >7�   
>V  : 8QT �   	
V  V  >7: QCW   Q   '   ��  Qv�  Q�    �QLM���QN�QLM����QNV       ;   
5   5   p���  �ʘ�  �������ʐ�ΈȐ����ψȐ����0� ʐ����0�  �ʐ��ˈȐ��ψ����  ���ӈ	Ȑ����҈Ȑ��׈���ؐ���Hʐ똀  ����А����    getAttributes   map   mPropertyMap   toLowerCase   indexOf   getValues   labeleduri       substring   setProperty   Components   results!   NS_ERROR_FAILURE   ����      toLower                        �                                              a �  �  �             T  �    
:  ��ʈ�    toLowerCase    ����         ex       U        m   �       �   �      A     ����   ����      checkState�                 �       �      9                          	              attrsSeen   attrArray	   attrG  Y  �             Z   W   QA5    K   xmW  V  K   [mW  V  �       
   BV   �   
V  : ��   ;   5   5   pV   �   
V  : Q�QLM����QN�QLM����QN����ɐ���0}ʐ��7`ʐ�����@����ψ��
А����됐����    mPropertyMap   length   indexOf   Components   results!   NS_ERROR_FAILURE	   push      ~      (   a      ����   7   nsAbLDAPAttributeMapService                          �                                              �  �  �              ��(    ����   '   getMapForPrefBranch�               i       �      (                           
             aPrefBranchName   attrMap �  Y  �             T  A5    q   A5    T  7;   R  W   QV   �   
=   : QV   �   
T  =   : QA5    T  V   8QV   �������ː�����
Ȑ�Ԑ�ؐ���ϐ����    mAttrMaps)   nsAbLDAPAttributeMap   setFromPrefs=   ldap_2.servers.default.attrmap   .attrmap