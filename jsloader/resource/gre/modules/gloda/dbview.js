�s�                �     �   )   �                                      resource://gre/modules/gloda/dbview.js     ~                �    �   �   �   �      f        Q;   5      Q;   5      Q;   5      Q;   5   	   Q;   �   

=   : Q;   �   

=   : Q;   �   

=   : Q;   �   

=   : Q;   Y   Z  Z  ;   5   5   `   ;   5   5   `  `   ]   �   ]   �   ]   �   ]   �   ]   Y   Y   C]   ]   Y   C]   ]   Y   C]   ]   Y   C]   ]   Y   C]   ]   Y   C]   ]    ]   !�   ]   "�   ]   #�   ]   $�   	]   %�   
]   &�   ]   '�   ]   (6   Q��
���������ʘ"�	��
�ˈ��Ј��Ј��Ј��Ј�Ո1�Ո2�Ո1�Ո5�"�:��ʐ���ӈܘC�ʘP�ʘY�ʘe�ʘs�����˘w���˘z���˘}���ː����ː����И�  ��ʘ�  ��ʘ�  ��ʘ�  ��ʐ����ʐ��ʐ��И�  �� !   EXPORTED_SYMBOLS   Cc   Components   classes   Ci   interfaces   Cr   results   Cu   utils   importG   resource://gre/modules/Services.jsmI   resource:///modules/gloda/log4moz.jsG   resource:///modules/gloda/public.jsO   resource:///modules/gloda/msg_search.js%   GlodaSyntheticView   prototype#   nsMsgViewSortType   byDate%   nsMsgViewSortOrder   descending   defaultSort   search   abortSearch   reportResults+   getMsgHdrForMessageID   visible   threadCol   flaggedCol   subjectCol   senderCol   dateCol   locationCol+   DEFAULT_COLUMN_STATES'   getPersistedSetting'   setPersistedSetting#   getDefaultSetting   onItemsAdded   onItemsModified   onItemsRemoved!   onQueryCompleted                  %   GlodaSyntheticView                  ����   %   GlodaSyntheticView                 �       �      T                                        aArgs �  �  "             =    T  q   EAT  5    6    QAA5    �   
A: 6   QAB6   QA=   6   Q   �=   T  q   5A@6    QAT  5   6   QAC6   QA=   6   Q   g=   T  q   JAT  5   �   
A: 6   QAA5   5    6    QAB6   QA=   6   Q   ;   =   	R pAZ   6   
Q���@��ϐ�ψɐ�Ȑ�ј)�0��Ȑ�ϐ�Ȑ�ј/�E��шɐ�Ґ�Ȑ�ј5��ˈ�9�ˈ    query   collection   getCollection   completed   viewType   global   conversation+   getMessagesCollection   ErrorM   You need to pass a query or collection   customColumns   ����   G   GlodaSyntheticView.prototype.search�                 V       �                                 
             aSearchListener'   aCompletionCallback  �  ^
  C             AT  6    QAT 6   QA5    �   
:  QA5      *A�   
A5   5   : QA�   
:  Q���ʐ�ʘG�ѐ��טK�̐��    searchListener%   completionCallback   onNewSearch   completed   reportResults   collection   items   abortSearch   ����   Q   GlodaSyntheticView.prototype.abortSearch�                   N       �                                 	           x
  U  P             A5        A5    �   
;   5   : QA5      A�   
:  QA@6    QA@6   Q����ې��̐�Ȑ�Ȉ    searchListener   onSearchDone   Cr   NS_OK%   completionCallback   ����   U   GlodaSyntheticView.prototype.reportResults�                �       �      &                                     aItems q  $  Y             ;    �    T  : K�   Q   �m- �
:  �   
:  5      Q   
5   Q�   
:  5      Q   
5   W   QQ��  QV   5   �  QV     #A5   �   
V  V  5   : Q��QLM���jQNș�͈�0�  �׈������ݐ�
ΐ���Z�1    Iterator	   next	   done   value   folderMessage   searchListener   onSearchHit   folder    ����       	   item                     hdr          �          �   ����   t   ;          ����   e   GlodaSyntheticView.prototype.getMsgHdrForMessageID�                �       �      ,                                     aMessageId �  �  e       
      ;    �    A5   5   : K�   Q   �m- �
:  �   
:  5      Q   
5   Q�   
:  5      Q   
5   W   QQV   5   T     /��  QV   5   �  QV     V  �� Nș��QLM���jQN�@��Ո�0�  �׈������א�ː�ΐ��
ژm��    Iterator   collection   items	   next	   done   value   headerMessageID   folderMessage    ����       	   item                     hdr       &   �          �   ����   �   )           �         �����            ����   a   GlodaSyntheticView.prototype.getPersistedSetting�                e       �   	   &                        
             aSetting m  [  �       
      �;    �   
;   5   �   
=   A5   =   T  : :    )��   Qv�   QA�   
T  : �ș�    ���;��ݐ֘�  �������ɐ���̐�ˈ͐� 	   JSON   parse   Services   prefs   getCharPref?   mailnews.database.global.views.   viewType   .#   getDefaultSetting    ����          e            ?       A      ��������\             ����   a   GlodaSyntheticView.prototype.setPersistedSetting�                 >       �                                              aSetting   aValue  |  "  �             ;    5   �   
=   A5   =   T  ;   �   
T : : Q���ѐ֐ψ��  ������    Services   prefs   setCharPref?   mailnews.database.global.views.   viewType   .	   JSON   stringify   ����   ]   GlodaSyntheticView.prototype.getDefaultSetting�                 !       �                                              aSetting A  �  �             T  =       A5      ;   �����̐���    columns+   DEFAULT_COLUMN_STATES   undefined   ����   S   GlodaSyntheticView.prototype.onItemsAdded�                        �      	                                        aItems   aCollection  �  L  �             A5       A�   
T  : Q����ψ    searchListener   reportResults   ����   Y   GlodaSyntheticView.prototype.onItemsModified�                        �                                                aItems   aCollection  i  �  �              ��2    ����   W   GlodaSyntheticView.prototype.onItemsRemoved�                        �                                                aItems   aCollection  �  �  �              ��1    ����   [   GlodaSyntheticView.prototype.onQueryCompleted�                 ;       �                                              aCollection �  y  �             AC6    QA5   �   
;   5   : QA5      A�   
:  Q���Ȑ�ې��̈    completed   searchListener   onSearchDone   Cr   NS_OK%   completionCallback