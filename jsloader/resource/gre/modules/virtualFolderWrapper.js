�s�                E  #   �      �                                      resource:///modules/virtualFolderWrapper.js     �(                �    �   �   �   �   �      f        Q;   5      Q;   5      Q;   5      Q;   5   	   Q;   �   

=   : Q;   �   

=   : Qn   Y   �   ]   �   ]   o   Q;   Y   �   a   �   b   �   a   �   a   �   a   �   	b   �   
a   �   b   �   a   �   b   �   a   �   ]   6   Q��	�����������ʘo�	��	�ˈ��Ј��Ј��Ј��Ј�Ո1�Ո3��ʘ+�ʘD�И��o�q���ʘw�ʘ�  ��ʘ�  ��ʘ�  ��ʘ�  ��ʘ�  ��ʘ�  Јʘ�  ׈ʘ�  ވʘ�  �ʘ�  �ʘ�  ���А���� !   EXPORTED_SYMBOLS   Cc   Components   classes   Ci   interfaces   Cr   results   Cu   utils   importG   resource:///modules/mailServices.jsK   resource:///modules/iteratorUtils.jsm'   VirtualFolderHelper-   createNewVirtualFolder#   wrapVirtualFolder)   VirtualFolderWrapper   prototype   searchFolders!   searchFolderURIs   searchTerms%   searchTermsSession   searchString   onlineSearch   dbFolderInfo-   cleanUpMessageDatabase                  '   VirtualFolderHelper                  ����   U   VirtualFolderHelper.createNewVirtualFolder�               �       �      A                                        aFolderName   aParentFolder   aSearchFolders   aSearchTerms   aOnlineSearch   msgFolder   wrappedVirt   msgDatabase     0  �	  +       	      T �    
T  : �   QV   T  6   QV   �   
;   5   5   : Q;   V   R �  QV  T 6   QV  T 6   QV  T 6   	QV   5   
�  QV  C6   QV  �   
C: QT �   
V   : Q;   5   �   
:  QV  ����͈Ȑ�͐�ޘ1�ʈȐ�͐�͐�͘6�ΐ�ː�И:�Ґ�՘=��    addSubfolder   prettyName   setFlag   Ci!   nsMsgFolderFlags   Virtual)   VirtualFolderWrapper   searchTerms   searchFolders   onlineSearch   msgDatabase   summaryValid   Close   NotifyItemAdded   MailServices   accounts%   saveVirtualFolders   ����   K   VirtualFolderHelper.wrapVirtualFolder�                        �      	                                        aMsgFolder �
  �
  D             ;    T  R ���Ɉ�% )   VirtualFolderWrapper   ����   )   VirtualFolderWrapper                        �                                               aVirtualFolder {  �  o             AT  6    Q���ʈ$    virtualFolder   ����   Y   VirtualFolderWrapper.prototype.searchFolders�                      �      L                                      rdfService#   virtualFolderUris   foldersU  0  w             ;    5   �   
;   5   : �   QA5   �   
=   : �   
=   	: �  QZ   �  Q;   
�   
V  : K�  Q   �m- �
:  �   
:  5      Q   
5   Q�   
:  5      Q   
5   W  QQV     :V  �   
V   �   
V  : �   
;   5   : : Q�QLM���hQN�V  ���ѐʘx�Șz��҈א�ɐΈ#�0�  �׈������א��ڈʐʘ������ѐ����    Cc=   @mozilla.org/rdf/rdf-service;1   getService   Ci   nsIRDFService   dbFolderInfo   getCharProperty   searchFolderUri   split   |   Iterator	   next	   done   value	   push   GetResource   QueryInterface   nsIMsgFolder    ����         folderURI       t   �       j   �   ����   ����   Y   VirtualFolderWrapper.prototype.searchFolders�                �       �   
   3                                     aFolders L  �  �       
      T  '=       #A5   �   
=   T  : Q   ���   QY   ��  Q�  Q;   �   T  ;   5   : K   mW  �  V  5   ,  ��QLM����QNȋ   QA5   �   
=   V   �   
=   	: : Qș�����ސ���
ˈӐʘ�  ��,6!��5����˝�  ��
    string   dbFolderInfo   setCharProperty   searchFolderUri   fixIterator   Ci   nsIMsgFolder   URI	   join   |    ����       	   uris                     folder       f   "       .   �   ����   9   Q          ����   _   VirtualFolderWrapper.prototype.searchFolderURIs�                          �      	                                      T  �  �             A5    �   
=   : ���҈�5    dbFolderInfo   getCharProperty   searchFolderUri   ����   U   VirtualFolderWrapper.prototype.searchTerms�                          �                                              <  �             A5    5   ���̈+ %   searchTermsSession   searchTerms   ����   c   VirtualFolderWrapper.prototype.searchTermsSession�                 V       �                                 
              filterList   tempFilter0  �  �       	      ;    5   �   
A5   : �   QV   �   
=   : �  QV   �   
V  A5   : QV  ������׈Ȑ�ЈȐ�ِ��    MailServices   filters#   getTempFilterList   virtualFolder   createFilter	   temp   parseCondition   searchString   ����   U   VirtualFolderWrapper.prototype.searchTerms�              �       �      7                                     aTerms   condition �  !  �       	      =    �   Q;   �   T  ;   5   : K�  Q   �mW  V   �      V   =   W   QV  5      =   W   Q   OV   V  5      =   	   
=   
W   QV   V  5   =   W   Q�QLM���|QN�AV   6   Q���ʐ׈�0�  �ʐ����x����ʐH����
�x���xӐ��ˈ       fixIterator   Ci!   nsIMsgSearchTerm   length       matchAll   ALL   booleanAnd   AND (	   OR (   termAsString   )   searchString    ����      	   term       2   �       (   �   ����   ����   W   VirtualFolderWrapper.prototype.searchString�                          �      	                                      �!  ."  �             A5    �   
=   : ���҈�/    dbFolderInfo   getCharProperty   searchStr   ����   W   VirtualFolderWrapper.prototype.searchString�                        �                                              aSearchString �"  @#  �             A5    �   
=   T  : Q���و>    dbFolderInfo   setCharProperty   searchStr   ����   W   VirtualFolderWrapper.prototype.onlineSearch�                          �      	                                      �#  �#  �             A5    �   
=   B: ���ӈ�<    dbFolderInfo%   getBooleanProperty   searchOnline   ����   W   VirtualFolderWrapper.prototype.onlineSearch�                        �                                              aOnlineSearch _$  �$  �             A5    �   
=   T  : Q���وD    dbFolderInfo%   setBooleanProperty   searchOnline   ����   W   VirtualFolderWrapper.prototype.dbFolderInfo�                 %       �                                               msgDatabase/&  �&  �             A5    5   �   QV   E   QV   5   ���А�Ԉ1    virtualFolder   msgDatabase   dBFolderInfo   ����   W   VirtualFolderWrapper_cleanUpMessageDatabase�                   %       �                                            ;(  �(  �             A5    5   �   
C: QA5    @6   Q���א�͈&    virtualFolder   msgDatabase   Close