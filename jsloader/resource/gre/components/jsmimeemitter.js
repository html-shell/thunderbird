�s�                N  A   �   6   i                                    resource://gre/components/jsmimeemitter.js     6P         	       �    �   �   �   �   �   �   �   �       �   �   3�   4;   5       Q;   5      Q;   5      Q;   5      Q;   �   	
=   
: Q>   Q?   Q�   Q�   QXP    Q�       Q;   Y   ;   �   
=   : ]   ;   �   
Z  ;   5   `   : ]   �   ]   �   ]   �   ]   �   b   �   a   �   ]   �   ]   �   ]    �   	]   !�   
]   "�   ]   #�   ]   $�   ]   %�   ]   &�   ]   '�   ]   (�   ]   )�   ]   *�   ]   +�   ]   ,�   ]   -�   ]   .�   ]   /�   ]   0�   ]   1�   ]   26   Qn   3Z  ;   `   o   3Q;   �   5
;   3:    4Q�������������������ʘ4�	�I��� ������Ј��Ј��Ј��Ј�
Ո3��������Ȉ��Ȉ��Ɉ�4�G��I�ˈ�Kʐ�ш	ȘN�Ј'Έ����ȘP�ʘa�ʘl�ʘo�ʘr�ʘv�ʘ}�ʘ�  ��ʘ�  ƈʘ�  �ʘ�  �ʘ�  ��ʐ��ʘ� �ʘ� ,�ʘ� M�ʘ� b�ʘ� ��ʘ� ��ʘ� ��ʐ���ʘ� ��ʘ� Ɉʘ� Јʘ� Ոʘ� ݈А������Ɉψ������шɈ����    Cc   Components   classes   Ci   interfaces   Cr   results   Cu   utils   importK   resource://gre/modules/XPCOMUtils.jsm   kStateUnknown   kStateInHeaders   kStateInBody%   kStateInAttachment/   MAX_SANE_BODY_PART_SIZE   deathToNewlines%   MimeMessageEmitter   prototype   IDM   {8cddbbbc-7ced-46b0-a936-8cddd1928c24}   classID   XPCOMUtils   generateQI   nsIMimeEmitter   QueryInterface   initialize   complete   setPipe   outputListener   _stripParams   _beginPayload   startHeader   addHeaderField   addAllHeaders!   writeHTMLHeaders   endHeader%   updateCharacterSet   _placePart'   _findOrCreateParent+   _findAnotherContainer   _replacePart   startAttachment%   addAttachmentField   endAttachment#   endAllAttachments   startBody   writeBody   endBody   write   utilityWrite   components   NSGetFactory)   generateNSGetFactory   ����   %   MimeMessageEmitter                   �       �      <                                      
  �  4             AY   6    Q;   �   
=   A5    : QAY   6   Q;   �   
=   A5   : QA@6   QAA5   5   5   	6   QA@6   
QA@6   QA@6   QAY   6   QAY   6   QA;   6   QAB6   Q���̐�ې�̐�ۘ:�Ȑ�ט=�Ș?�Ȑ�Ȑ�̐�̘D�̘F�Ȉ    _mimeMsg   Cu   importI   resource:///modules/gloda/mimemsg.js   _utilsE   resource:///modules/gloda/utils.js	   _url   _partRE   GlodaUtils   PART_RE   _outputListener   _curPart   _curAttachment   _partMap+   _bogusPartTranslation   _state   kStateUnknown   _writeBody   ����   /   mime_emitter_initialize�               �       �      /                                     	   aUrl   aChannel   aFormat   options   �    P             AT  6    QAA5   5   R  6   QA5   =   6   QA=   6   QA5   A5   6   QA5   5   5   	�   QAV   E   Q=   V   q   V   5      B6   
QA5   5   5   T  5   A5   8Q���ʐ�͈ɘT�ѐ�̐�ҘY�Ր���՘]�ؐȈ 	   _url   _curPart   _mimeMsg   MimeMessage   partName      _curAttachment   _partMap'   MsgHdrToMimeMessage   OPTION_TUNNEL   _saneBodySize   saneBodySize!   RESULT_RENDEVOUZ	   spec   ����   +   mime_emitter_complete�                   1       �                                             H    a             A@6    QA@6   QA@6   QA@6   QA@6   QA@6   Q���Șd�Șf�Ȑ�Ȑ�Ȑ�Ȉ" 	   _url   _outputListener   _curPart   _curAttachment   _partMap+   _bogusPartTranslation   ����   )   mime_emitter_setPipe�                        �                                                aInputStream   aOutputStream  /  t  l              ��G    ����   W   MimeMessageEmitter.prototype.outputListener�                        �                                               aListener �  �  o             AT  6    Q���ʈ!    _outputListener   ����   W   MimeMessageEmitter.prototype.outputListener�                          �                                            �     r             A5    ����    _outputListener   ����   3   mime_emitter__stripParams�               =       �                                              aValue   indexSemi 5  �  v             T  �    
=   : �   QV   >   T  �   
>V   : U  QT  ���ψȐ��ψ	���    indexOf   ;   substring   ����   5   mime_emitter__beginPayload�               9      �      _                                        aContentType'   contentTypeNoParams �  2  }             A�    
T  : �   
:  �   QV   =   D    QV   =   D   QV   =      ,AA5   5   V   R 6   QAC6   Q   �V   =   	   *AA5   5   
R  6   QAB6   Q   fV   �   
=   :    ,AA5   5   V   R 6   QAB6   Q   'AA5   5   V   R 6   QAB6   QA5   5   Z  T  �   
;   =   : `   6   Q���ˈҐАА�'��шɐ�͐��%���͈ɐ����Ȑ�����Ј'��шɐ�͐���шɐ�Ȑ���ː��+    _stripParams   toLowerCase   text/plain   text/html   text/enriched   _curPart   _mimeMsg   MimeBody   _writeBody   message/rfc822   MimeMessage   startsWith   multipart/   MimeContainer   MimeUnknown   headers   content-type   replace   deathToNewlines      ����   1   mime_emitter_startHeader�                        �                                           #   aIsRootMailHeader   aIsHeaderOnly   aMsgID   aOutputCharset    �  T  �             A;   6    Q����̈    _state   kStateInHeaders   ����   7   mime_emitter_addHeaderField�                |      �      l                                      aField   aValue  �  �%  �             A5    ;      �T  �   
:  U  QT  =      A�   
T C: Q   �T  =      ���   QA�   
T : �   QV   A5   q   /AA5   V   76   QA=   
A5   q6   	Q   'A5   V   6   QA�   
A5   : Q�   /T  =   E   QT =      A5   C6   Q   �A5    ;      r��   QT  �   
:  �   QV   A5   5   q   (A5   5   V   7�   
T : Q   !A5   5   V   Z  T `   8Qș���  안ʈ	����Ր�{ː����ˈȐ��*��
Ґ�
ؐ����
А�
ؐ�����Ҙ�  ��ː�
ʈȐ�#��㐐�ӈ%ʘ�  �.    _state   kStateInBody   toLowerCase   content-type   _beginPayload+   x-jsemitter-part-path   _stripParams   _partMap   _curPart   _writeBody	   body   partName   _placePart+   x-jsemitter-encrypted   1   isEncrypted   kStateInHeaders   headers	   push    ����          partName        ����          lowerField        T   u   ����     l   ����   ����   5   mime_emitter_addAllHeaders�                        �                                                aAllHeaders   aHeaderSize  &  c'  �              ��P    ����   ;   mime_emitter_writeHTMLHeaders�                        �                                                aName �'  V(  �              ��C    ����   -   mime_emitter_endHeader�                        �                                                aName �(  �(  �              ��5    ����   ?   mime_emitter_updateCharacterSet�                        �                                                aCharset �(  J*  �              ��J    ����   O   MimeMessageEmitter.prototype._placePart�              }      �      \                        $             aPart   partName   storagePartName   parentName   parentPart   lastDotIndex �,  z/              T  5    �   QA5   V   T  8QA�   
V   : - �
:  �   
:  5      Q   
5   �  Q�   
:  5      Q   
5   �  Q�   
:  5      Q   
5   �  QQQV  �   
=   : �  QV  ;   I   ���  Q;   	�   	V  �   

V  ?: : ?�  QV  V  5   �      V  5   V  T  8Q   Q   mV  5   �   
@: Q�V  V  5   �   ����V  5   �   
T  : Qș��͐�ϐ��̈,Ԉ�������ؐ�ЈȐ�ː�
ۈ�����ʐ����א�(0��
֘� �ڐ��ؘ� �#    partName   _partMap'   _findOrCreateParent	   next	   done   value   lastIndexOf   .   undefined   parseInt   substring   parts   length	   push    ����         indexInParent        4  0       �   �   ����   ����   a   MimeMessageEmitter.prototype._findOrCreateParent�                    �      �                         (             aPartName   partName   parentName   parentPart �1  �5  ,            T  =    �   QV   �   
>V   �   
=   : : �  Q�  QV  A5   q   Ǝ��  Q�  QA5   V  7W  QV   �   
=   : �  Q;   �   V   �   
V  ?: : ?�  Q=   V  qE   QV  V  5   �   ?   )Z  V   `   V  `  V  `  �ș   A�   
T  : �ș�  ����  Q�  Q�  QA�   	
V  : - �
:  �   

:  5      Q   
5   Q�   

:  5      Q   
5   �  Q�   

:  5      Q   
5   �  QQQA5   5   =   R �  QV  5   �   
V  : QA5   V  V  8QZ  V   `   V  `  V  `  �șș��ΐ�܈#�����Ȑ����  �ѐ�А�
ЈȐ�
ۈ�����ʐ�$���Ȉ
ȈА��ˈ̐Ґ��
̈'Ԉ�������ؐ��
шȐ��ؐ�А��Ȉ
Ȉ̘� 8�       substring   lastIndexOf   .   _partMap   parseInt   parts   length+   _findAnotherContainer'   _findOrCreateParent	   next	   done   value   _mimeMsg   MimeContainer1   multipart/fake-container	   push    ����         lastDotIndex       indexInParent        ����         grandParentName       grandParentPart       parentPart        M   �   ���������          ����              �   ��������           ����   e   MimeMessageEmitter.prototype._findAnotherContainer�               �       �      O                                       aPartName   parentName   parentPart   childIndex!   fallbackPartName �7  �9  M            T  A5    q   A5    T  7T  =   �   Q�  Q   =mV   �   
>V   �   
=   : : W   QA5   V   7W  Q�V  E   Q=   V  q E   QV   �   ����V  5   �   �  QV      V   =      
=   V  ?�  QA5    T  Z  V  `   V   `  V  `  8�����ː��ΐ��(c���� S��܈%�����Ȑ�И� S�됐���Ӑ�合͈1ȈȈʈ +   _bogusPartTranslation      substring   lastIndexOf   .   _partMap   parts   length    3   c      ����   S   MimeMessageEmitter.prototype._replacePart�              }      �      Z                         !             aPart   partName   storagePartName   parentName   parentPart   childNamePart   childIndex �:  S>  b            T  5    �   QA5   V   T  8QA�   
V   : - �
:  �   
:  5      Q   
5   �  Q�   
:  5      Q   
5   �  Q�   
:  5      Q   
5   �  QQQV  �   
V  �   
=   : ?: �  Q;   	�   	V  : ?�  QV  V  5   
�      l��  QV  5   
V  7�  QV  5   
V  T  8QT  V  5   
6   
QT  V  5   6   QT  V  5   6   Q�   V  5   
V  T  8Q����͐�ϐ��̈,Ԉ�������ؐ��ۈ*�����Ȑ�Έʘ� o�gː�
Ӑ�Ґ��Ґ�Ґ�ؐ��҈%    partName   _partMap'   _findOrCreateParent	   next	   done   value   substring   lastIndexOf   .   parseInt   parts   length   headers   isEncrypted    ����         oldPart          a   ����   ����   9   mime_emitter_startAttachment�                    �      ^                                     aName   aContentType	   aUrl+   aIsExternalAttachment   partMatch   partName    �?  4F  �      
      A;   6    QT �   
�    =   : U QA5   �   
T : �   QV   E   QV   ?7�  QAV  6   QT =      aV     SA5   V  7T 6   	QA5   V  7T 6   
QA5   V  7T  6   QA5   V  7C6   Q   IV     @��  QA5   5   V  T  T T T R �  QA�   
V  : Qș���̘� ��Ԉ�����ЈȐ�Ր�ː��\��������Ԑ�Ԑ�Ԑ�א��ː�
А̘� ��Ȑ���ј� ��    _state%   kStateInAttachment   replace      _partRE	   exec   _curAttachment   message/rfc822   _partMap   url   isExternal	   name!   isRealAttachment   _mimeMsg+   MimeMessageAttachment   _replacePart    ����      	   part    �   ((header=filter|emitter=js|fetchCompleteMessage=(true|false)|examineEncryptedParts=(true|false)))&?       �   :   ����   ����   ?   mime_emitter_addAttachmentField�                 E       �                                              aField   aValue  tF  �H  �            T  =    E   QA5   A5   q   (A5   A5   7;   �   T : 6   Q��� ����ڈ*Ɉ %   X-Mozilla-PartSize   _curAttachment   _partMap	   size   parseInt   ����   5   mime_emitter_endAttachment�                          �                                              �H  I  �             ��8    ����   =   mime_emitter_endAllAttachments�                          �                                              YI  lI  �             ��@    ����   -   mime_emitter_startBody�               �       �      %                                        aIsBodyOnly   aMsgID   aOutCharset   subPartName   �J  �K  �            A;   6    QA5   5   =      =      A5   5   =   �   QA�   
A5   �   
=   	=   
: : QA5   V   6   QA�   
A5   : Q���̐���
�ʐ֐�߈����픈А�҈    _state   kStateInBody   _curPart   partName      1   .1   _beginPayload   get   content-type   text/plain   _placePart   ����   -   mime_emitter_writeBody�                 D       �                                           	   aBuf   aSize#   aOutAmountWritten   �L  tM  �            A5    E   $QA5    D   QA5   5   ;      A5   �   
T  : Q��̐�	͐���Ԉ    _writeBody   _saneBodySize   _curPart	   size/   MAX_SANE_BODY_PART_SIZE   appendBody   ����   )   mime_emitter_endBody�                          �                                              �M  �M  �             ��,    ����   %   mime_emitter_write�                        �      
                                      	   aBuf   aSize#   aOutAmountWritten   N  IO  �            T T 6    Q������̈     value   ����   3   mime_emitter_utilityWrite�                        �                                           	   aBuf �O  �O  �            A�    
T  T  �   Y   : Q���܈"    write   length   \n   