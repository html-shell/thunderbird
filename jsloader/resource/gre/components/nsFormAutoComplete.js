�s�               G     �   R                          N            resource://gre/components/nsFormAutoComplete.js     �L                �    �   �          
   ;   5       Q;   5      Q;   5      Q;   5   �   
=   	: Q;   5   �   
=   
: Q;   �   
A=   =   : Q;   �   
A=   =   : Q;   �   
A=   =   : Q;   Y   ;   �   
=   : ]   ;   �   
Z  ;   5   `   ;   5   `  : ]   @]   C]   C]   �]   ?]    �]   !<    ]   "@]   #�]   $�]   %@]   &�   ]   'Y   @]   (;   �   
Z  ;   5   )`   ;   5   `  : ]   �   ]   *]   +�   ]   ,�   ]   -�   ]   .�   ]   /�   ]   0�   ]   1�   	]   26   Q;   3Y   ;   �   
=   : ]   ;   �   
Z  ;   5   `   ;   5   `  : ]   B]   C]   @]   4�   ]   '�   ]   ,�   ]   -�   ]   .�   ]   06   Q;   5Y   ;   �   
Z  ;   5   6`   ;   5   `  : ]   @]   7@]   8@]   9�   ]   :�   a   ;@]   <=   =]   >�   a   ?�   a   @�   a   A�   ]   B�   ]   C�   ]   D�   ]   E�   ]   F�   ]   G�   ]   H6   Q;   I5   J5   K;   I5   J5   LE    Q;   I5   M�   N
=   OB:    =��   QZ  ;   3`   �   QA;   �   Q
V   : 6   PQ�   8��   QZ  ;   `   �   QA;   �   Q
V   : 6   PQș������ʘ�	�� H�	�� ��	���Ј��Ј��Ј�
ڈA�ڈ?�Ґ���M�Ґ���K�Ґ���L����ʐ�шȐ�Ј*ΈΈ����Ș!�������������ʐ������1��3�ʘB����E�Ј(ΐ�0ΘE�ȘH�Ϙu�ʘ}�ʘ�  ��ʘ�  ��ʘ�  �ʘ�  ��ʘ� .�И� >��� H�����ʐ�шȐ�Ј*ΈΈ����Ȑ�������� [�ʘ� f�ʘ� l�ʐ����ʘ� ��А��������� ����ʐ�Ј(ΐ�,Θ� ��Ȑ�����������ʘ� Èʘ� Ȉ��ʐ�ʘ� Јʘ� Ոʐ����ʘ� ވʐ����ʘ� �ʘ� �ʘ� �ʐ����И�  �����׈8ː����ΐ�шϐ���ΐ�шʘ� 	�    Cc   Components   classes   Ci   interfaces   Cr   results   utils   importK   resource://gre/modules/XPCOMUtils.jsmG   resource://gre/modules/Services.jsm   XPCOMUtils-   defineLazyModuleGetter   BrowserUtilsO   resource://gre/modules/BrowserUtils.jsm   DeprecatedK   resource://gre/modules/Deprecated.jsm   FormHistoryM   resource://gre/modules/FormHistory.jsm!   FormAutoComplete   prototype   IDM   {c11c21b2-71c9-4f87-a0f8-5e13f50495fd}   classID   generateQI'   nsIFormAutoComplete1   nsISupportsWeakReference   QueryInterface   _prefBranch   _debug   _enabled   _agedWeight   _bucketSize#   _maxTimeGroupings#   _timeGroupingSize   _expireDays   _boundaryWeight   _prefixWeight   _pendingQuery	   init   _self   nsIObserver   observe   observer   log%   autoCompleteSearch/   autoCompleteSearchAsync3   _autoCompleteSearchShared-   stopAutoCompleteSearch+   getAutoCompleteValues   _calculateScore+   FormAutoCompleteChild   _pendingSearch-   FormAutoCompleteResult+   nsIAutoCompleteResult   formHistory   entries   fieldName#   _checkIndexBounds   wrappedJSObject   searchString   !   errorDescription   defaultIndex   searchResult   matchCount   getValueAt   getLabelAt   getCommentAt   getStyleAt   getImageAt/   getFinalCompleteValueAt   removeValueAt   Services   appinfo   processType)   PROCESS_TYPE_CONTENT   prefs   getBoolPrefG   browser.tabs.remote.desktopbehavior   NSGetFactory)   generateNSGetFactory      t�aB   ����   !   FormAutoComplete                          �                                            Y  p               A�    
:  Q���̈ 	   init   ����   ?   FormAutoComplete.prototype.init�                         �      E                                      �    3             A;   5   �   
=   : 6    QA5    �   
=   A5   C: QA5   A6   QAA5    �   

=   : 6   	QAA5    �   

=   : 6   QAA5    �   
=   : 6   QAA5    �   
=   : 6   QAA5    �   
=   : 6   QAA5    �   
=   : X�X�6   QAA5    �   
=   : 6   Q��5�׈ɐ�ݐ�͘9�ӈɐ�ӈɐ�ӈɐ�ӈɐ�ӈɐ�ӈѐ�ӈɈ+    _prefBranch   Services   prefs   getBranch#   browser.formfill.   addObserver      observer   _self   _debug   getBoolPref   debug   _enabled   enable   _agedWeight   getIntPref   agedWeight   _bucketSize   bucketSize#   _maxTimeGroupings!   maxTimeGroupings#   _timeGroupingSize!   timeGroupingSize   _expireDays   expire_days   ����   W   FormAutoComplete.prototype.observer.observe�              �      �      �                                      subject   topic	   data	   self   �  ]  H             A5    �   QT =     َ�  QT �  QV   �   
=   V  =   : QV  x=   y   P=   y   l=   y   �=   y   �=   	y   �=   
y   �=   y   =   y  z  =V   V   5   �   
V  : 6   Q  +V   V   5   �   
V  : 6   Q  V   V   5   �   
V  : 6   Q   �V   V   5   �   
V  : 6   Q   �V   V   5   �   
V  : X�X�6   Q   �V   V   5   �   
V  : 6   Q   eV   V   5   �   
V  : 6   Q   ?V   V   5   �   
V  : 6   Q   V   �   
=   : Qș��ː�ː�Ȑ�ߘNl� ��u
�Ru
�Uu
�Xu
�[u
�^u
�au
�duʘO��؈ɐX���؈ɐX���؈ɐX���؈ɐX���؈ѐX���؈ɐX���؈ɐX���؈ɐX���՘J�,    _self   nsPref:changed   log   got change to     preference   agedWeight   debug   enable!   maxTimeGroupings!   timeGroupingSize   bucketSize   boundaryWeight   prefixWeight   _agedWeight   _prefBranch   getIntPref   _debug   getBoolPref   _enabled#   _maxTimeGroupings#   _timeGroupingSize   _bucketSize   _boundaryWeight   _prefixWeightO   Oops! Pref not handled, change ignored.    ����         prefName           �  ����   ����   =   FormAutoComplete.prototype.log�                 J       �                                              message �  �  u             A5        ;   �   =   T  =   : Q;   5   �   
=   T  : Q�������ݐ�ވB    _debug	   dump%   FormAutoComplete:    
   Services   console!   logStringMessage   ����   [   FormAutoComplete.prototype.autoCompleteSearch�               �       �      =                                      aInputName-   aUntrimmedSearchString   aField   aPreviousResult   result   listener   thread    �  �  }       	      ;    �   
=   =   : Q@�   QY   �    ]   �   QA�   
T  T T T V   : Q;   5   5   �   	
:  5   
�  Q   mV  �   
C: Qえ    E   QA5   ���ۈ   ���ڐ��
��
��ϐ��ܐ���
ֈ	͐(*����  ���И�  ��ِ�����    Deprecated   warningk   nsIFormAutoComplete::autoCompleteSearch is deprecatedg   https://bugzilla.mozilla.org/show_bug.cgi?id=697377%   onSearchCompletion3   _autoCompleteSearchShared   Components   classes;   @mozilla.org/thread-manager;1   getService   currentThread!   processNextEvent   _pendingQuery   ����   �   FormAutoComplete.prototype.autoCompleteSearch/listener.onSearchCompletion�                        �                                                r �    �             T  �   �   ��)Έ
     y   *      ����   e   FormAutoComplete.prototype.autoCompleteSearchAsync�                        �                                              aInputName-   aUntrimmedSearchString   aField   aPreviousResult   aListener     �  v  �             A�    
T  T T T T : Q���ۈg 3   _autoCompleteSearchShared   ����   i   FormAutoComplete.prototype._autoCompleteSearchShared�            O      �      �                       P      @      aInputName-   aUntrimmedSearchString   aField   aPreviousResult   aListener!   sortBytotalScore   result   searchString   �  �'  �             �    W   Q@�   QA5        D;   ;   Z   T  T R �   Q�      �   �   
�   : QT  =   E   Q�      _A�   
=   T  =   : Q;   ;   Z   T  T R �   Q�      �   �   
�   : QA�   
=   T : QT �   	
:  �   

:  �  QT E   QQT 5   �   	
:  �   ?E   2QV  �   
T 5   �   	
:  �   

:  : >  �����  Q�  Q�  QA�   
=   : QT �   Q�   5   T 6   QV  �   
�    : �  Q�   5   5   �  QZ   �  Q>�  Q    �m��   �   QV  V  7�   QV  �   
�   :    ��   xA�   
�   V  V  : QA�   
=   �   5   =   �   5   =   �   5   =   : QV  �   
�   : Q��V  #?W  QQ�V  V  �   ���4�V  �   
V   : Q�   5   V  6   Q�      �   �   
�   : Q�   \��  QA�   
=   : Q;   ;   Z   T  T R �   Q�   �  QA�   
T  V  V  : Qș�ʘ�  �����������Ո	ɐ��Ր���������ې�Ո	ɐ��Ր������Ր�ʈҘ�  �؈Аڈ!͈����� �א�ѐ�ɐ�Ӑ��ЈȐ���Ԑ�ɐ�&�  ��  ��  ю ͐�ϐ��Ј�B��ِ�ؐ蘀  ͈���֘�  ƈ0Έ����֘�  шӐ�Ԑ���ې���ѐ���Ո	ɐ��ʘ�  �ؘ�  ۈe    _enabled-   FormAutoCompleteResult   FormHistory%   onSearchCompletion#   searchbar-history   logG   autoCompleteSearch for input name "   " is deniedO   AutoCompleteSearch invoked. Search is: 	   trim   toLowerCase   searchString   length   indexOfE   Using previous autocomplete result   wrappedJSObject   split   entries	   some   _calculateScore9   Reusing autocomplete entry '	   text   ' (   frecency    /    totalScore   )	   push	   sortQ   Creating new autocomplete search result.+   getAutoCompleteValues   ����   !   sortBytotalScore                        �                                              a   b  �  <  �             T 5    T  5    ���҈#    totalScore    ����         searchTokens       entries       filteredEntries                    i                    entry            m   FormAutoComplete.prototype._autoCompleteSearchShared/<�                        �                                              tok S"  }"  �             �   5    �   
T  : >��4ڈ$    textLowerCase   indexOf    ����         processEntry             �   FormAutoComplete.prototype._autoCompleteSearchShared/processEntry�                 m       �                                             aEntries �%  !'  �             �   E   Q�   5    ��   '�   T  �   
�    : 6   Q   �   T  6   Q�      �   �   
�   : Q���"���ψΐ��ΐ����Ո%    maxLength   entries   filter%   onSearchCompletion   ����   �   FormAutoComplete.prototype._autoCompleteSearchShared/processEntry/result.entries<�                        �                                              el &&  Y&  �             T  5    �   �   5   ��2و* 	   text   length   maxLength   \s+        �  �      \  �  ����   �  �          �  �                    �  V   ����   ����   c   FormAutoComplete.prototype.stopAutoCompleteSearch�                   %       �                                            �'  1(  �             A5       A5    �   
:  QA@6    Q����ѐ�Ȉ    _pendingQuery   cancel   ����   a   FormAutoComplete.prototype.getAutoCompleteValues�               �       �      V                                @      fieldName   searchString   callback   params   results   processResults   query  �)  �/  �       	      Y   A5    ]   A5   ]   X�;   �   
:  A5   ��<�<X�]   T  ]   A5   	]   
A5   ]   A5   ]   A5   ]   �   QA�   
:  QZ   �   QY   A�    ]   A�   ]   A�   ]   �  Q;   �   
T V   V  : �   QA�   6   Q�����ː�ː�ψݐ�Ȑ�ː�ː�ː�А���̐��ʐ���
ː���
ː���
И� !�׈ɐ�̈    _agedWeight   agedWeight   _bucketSize   bucketSize	   Date   now   _expireDays   expiryDate   fieldname#   _maxTimeGroupings!   maxTimeGroupings#   _timeGroupingSize!   timeGroupingSize   _prefixWeight   prefixWeight   _boundaryWeight   boundaryWeight-   stopAutoCompleteSearch   handleResult   handleError!   handleCompletion   FormHistory-   getAutoCompleteResults   _pendingQuery   ����   �   FormAutoComplete.prototype.getAutoCompleteValues/processResults.handleResult�                        �                                              aResult �,  �,              �   �   �    
T  : Q���؈ 	   push   ����   �   FormAutoComplete.prototype.getAutoCompleteValues/processResults.handleError�                        �                                              aError �,  9-              A�    
=   T  5   : Q���ڈ<    log=   getAutocompleteValues failed:    message   ����   �   FormAutoComplete.prototype.getAutoCompleteValues/processResults.handleCompletion�                 <       �                                              aReason W-  /              �   �   A5       *A@6    QT      �   �   �   : Q��������Ȑ���Ԉ    _pendingQuery   ����   U   FormAutoComplete.prototype._calculateScore�              �       �   
   >                                     entry   aSearchString   searchTokens   boundaryCalc   �0  �3  .            >�   QT K�  Q   TmW  V   T  5    �   
V  : >W   QV   T  5    �   
=   V  : >W   Q�QLM����QN�V   A5   W   QV   A5   T  5    �   
T : >W   QT  ;   �   
T  5   ;   �   	
?V   : : 6   Q������0Yʐ�׈}��݈}Ӑ��А���ʐϐ�� 9��{���/�����Ɉ7    textLowerCase   indexOf       _boundaryWeight   _prefixWeight   totalScore	   Math   round   frecency   max    ����         token          Z          f   ����   ����   +   FormAutoCompleteChild                          �                                            5  (5  H            A�    
:  Q���̈ 	   init   ����   I   FormAutoCompleteChild.prototype.init�                   R       �   	                              
           37  �7  [            A;   5   �   
=   : 6    QA;   5   �   
=   : 6   QA�   
=   : Q���׈ɐ�׈ɐ�ш    _debug   Services   prefs   getBoolPref-   browser.formfill.debug   _enabled/   browser.formfill.enable   log	   init   ����   G   FormAutoCompleteChild.prototype.log�                 ,       �                                              message [8  �8  f            A5        ;   �   =   T  =   : Q���
����݈1    _debug	   dump/   FormAutoCompleteChild:    
   ����   e   FormAutoCompleteChild.prototype.autoCompleteSearch�                        �                                                aInputName-   aUntrimmedSearchString   aField   aPreviousResult    �8  [9  l             ��a    ����   o   FormAutoCompleteChild.prototype.autoCompleteSearchAsync�               x      �      �                          ,      @      aInputName-   aUntrimmedSearchString   aField   aPreviousResult   aListener	   rect   window!   topLevelDocshell   mm   search   searchFinished    �9  �@  p            A�    
=   : QA5      A�   
:  Q;   �   
T : �   QT 5   5   �  QV  �   
;   	5   
: �   
;   	5   : 5   �   
;   	5   : �  QV  �   
;   	5   
: �   
;   	5   : �   Q�   �   
=   Y   T  ]   T ]   V   5   ]   V   5   ]   V   5   ]   V   5   ]   : QAY   6   �   QA�    �   Q�   �   
=   �   : QA�    
=   : Q���ѐ���̐���
ψȐ��
Ґ�
Ոʐʘ� z�ϐ��ʘ� z�Ș� �
Ոʐʘ� �ɐ���֐�Ȑ�Ȑ�ΐ�ΐ�ΐ�Θ� ���� ��
ѐ�
̘� ��ڐ�ш5    log/   autoCompleteSearchAsync   _pendingSearch-   stopAutoCompleteSearch   BrowserUtils9   getElementBoundingScreenRect   ownerDocument   defaultView   QueryInterface   Ci+   nsIInterfaceRequestor   getInterface   nsIDocShell)   sameTypeRootTreeItem;   nsIContentFrameMessageManager!   sendAsyncMessageG   FormHistory:AutoCompleteSearchAsync   inputName+   untrimmedSearchString	   left   top   width   height%   addMessageListener]   FormAutoComplete:AutoCompleteSearchAsyncResultQ   autoCompleteSearchAsync message was sent   ����   �   FormAutoCompleteChild.prototype.autoCompleteSearchAsync/searchFinished�              �       �      B                                     message   result �=  $@  �            �   �   �    
=   �   �   : Q�   �   A5      A@6   Q;   @Y   T  5   5   - �
:  �  Q   $m5   W  QY   V  ]   ,  ��Q�   
:  5   	����� @@R �   Q�      �   �   

V   : Q���䐐�����
���Ȑ�����88ֈ.Έ����ˈ����Ґ��� ��Ș� ���
Ԉ% +   removeMessageListener]   FormAutoComplete:AutoCompleteSearchAsyncResult   _pendingSearch-   FormAutoCompleteResult	   data   results   value	   text	   next	   done%   onSearchCompletion    ����         res       q   8       g   C   ����   ����   m   FormAutoCompleteChild.prototype.stopAutoCompleteSearch�                          �                                            �@  EA  �            A�    
=   : QA@6   Q���ѐ�Ȉ    log-   stopAutoCompleteSearch   _pendingSearch   ����   -   FormAutoCompleteResult                 )       �                                               formHistory   entries   fieldName   searchString    �A  {B  �            AT  6    QAT 6   QAT 6   QAT 6   Q���ʐ�ʐ�ʐ�ʈ!    formHistory   entries   fieldName   searchString   ����   e   FormAutoCompleteResult.prototype._checkIndexBounds�                 ?       �                                              index �C  GD  �            T  >D   QT  A5    �      $;   �   
=   ;   5   : p�����ۈ�G    entries   length   Components   Exception'   Index out of range.   Cr-   NS_ERROR_ILLEGAL_VALUE   ����   a   FormAutoCompleteResult.prototype.wrappedJSObject�                          �                                              �D  �D  �            A����    ����   [   FormAutoCompleteResult.prototype.defaultIndex�                          �                                            dE  �E  �            A5    �   >   ��   >�����Ȑ���	    entries   length   ����   [   FormAutoCompleteResult.prototype.searchResult�                   3       �                                            �E  �F  �            A5    �   >   ;   5   5   ;   5   5   �����А�Ј/    entries   length   Ci+   nsIAutoCompleteResult   RESULT_NOMATCH   RESULT_SUCCESS   ����   W   FormAutoCompleteResult.prototype.matchCount�                          �                                            �F  �F  �            A5    �   ���̈    entries   length   ����   W   FormAutoCompleteResult.prototype.getValueAt�                         �                                              index �F  FG  �            A�    
T  : QA5   T  75   ���ϐ�Ј  #   _checkIndexBounds   entries	   text   ����   W   FormAutoCompleteResult.prototype.getLabelAt�                        �      	                                        index aG  �G  �            ;    �    T  : ���͈�    getValueAt   ����   [   FormAutoCompleteResult.prototype.getCommentAt�                        �      
                                        index �G  �G  �            A�    
T  : Q=   ���ϐ��
 #   _checkIndexBounds      ����   W   FormAutoCompleteResult.prototype.getStyleAt�                        �      
                                        index H  `H  �            A�    
T  : Q=   ���ϐ��
 #   _checkIndexBounds      ����   W   FormAutoCompleteResult.prototype.getImageAt�                        �      
                                        index }H  �H  �            A�    
T  : Q=   ���ϐ��
 #   _checkIndexBounds      ����   q   FormAutoCompleteResult.prototype.getFinalCompleteValueAt�                        �      	                                        index �H  &I  �            A�    
T  : ���ˈ�    getValueAt   ����   ]   FormAutoCompleteResult.prototype.removeValueAt�               �       �      3                                        index   removeFromDB   removedEntry  FI  �J  �            A�    
T  : QA5   �   
T  ?: - �
:  �   
:  5      Q   
5   �   QQQT    >A5   �   
Y   =   ]   	A5   
]   V   5   ]   : Q���ϐ��шԈ�����ؐ���
҈ʐ�$ː�$Θ� ��
���@ #   _checkIndexBounds   entries   splice	   next	   done   value   formHistory   update   remove   op   fieldName   fieldname	   text    ����          component        ����          component       �  2   ����   �  2   ����