çżsš                j  (   š   3         *                   
            resource://gre/modules/InlineSpellChecker.jsm     ŕL                                  	   "   Af    6    Q;   Q;   Q?   Q;   5      Q;   5      Q;   5   
   	QA   6   Q;   Y      ]      ]      ]      ]      a      a      a      	b      
a      ]      ]      ]      ]      ]      ]      ]      ]      ]      ]      ]      ]       ]   !6   Qn   "Y   ?]   #×]   $×]   %×]   &×]   '× ]   (×@]   )   ]   *   ]   +   ]   ,o   "Q;   -Y      a      a   .   a      a   /    ]   0   !a   1   "a   2   #]      $]      %]      &]      ']      (]   !   )]   6   Q Ę 	Ě/ĐĐĐĚĘĘ"Ę0ĘFĘ_ĘhĘrĘyĘ  Ę  Ę  ŻĘ  ˇĘ  ĘĘ Ę CĘ LĘ ZĘ iĘ rĘ Ę Ę Đ ĘĘ ÉĘ ĎĐ  ĘĘĘĘĘĘ  ĘĘĘ (Ę -ĘĘ =Ę DĘ KĐ !   EXPORTED_SYMBOLS   gLanguageBundle   gRegionBundle)   MAX_UNDO_STACK_DEPTH   Cc   Components   classes   Ci   interfaces   Cu   utils%   InlineSpellChecker   prototype	   init   initFromRemote   uninit   initFromEvent   canSpellCheck1   initialSpellCheckPending   enabled   overMisspelling)   addSuggestionsToMenu1   clearSuggestionsFromMenu%   sortDictionaryList/   addDictionaryListToMenu1   getDictionaryDisplayName7   clearDictionaryListFromMenu!   selectDictionary%   replaceMisspelling   toggleEnabled   addToDictionary'   undoAddToDictionary   canUndo   ignoreWord!   SpellCheckHelper   EDITABLE   INPUT   TEXTAREA   TEXTINPUT   KEYWORD   CONTENTEDITABLE   NUMERIC+   isTargetAKeywordField!   getComputedStyle   isEditable%   RemoteSpellChecker#   spellCheckPending'   enableRealTimeSpell!   GetSuggestedWord#   currentDictionary   dictionaryList                  %   InlineSpellChecker   !   SpellCheckHelper                  ˙˙˙˙   %   InlineSpellChecker                        š                                              aEditor                  A¸    
T  : QAZ   6   QĎË 	   init   mAddedWordStack   ˙˙˙˙   C   InlineSpellChecker.prototype.initÁ                P       š                                           aEditor ő                 A¸    
:  QAT  6   QAA5   ¸   
C: 6   Q       Qv   QA@6   QČ    ĚĘĎÎĚĎ    uninit   mEditor'   mInlineSpellChecker+   getInlineSpellChecker    ˙˙˙˙          e                   5      ˙˙˙˙   ˙˙˙˙   W   InlineSpellChecker.prototype.initFromRemoteÁ                 i       š   
   '                           	             aSpellInfo 6  |  "             A5       ;   =   R pA¸   
:  QT      AA;   T  R 6    6   QAT  5   6   QAT  5   	6   QËĚ(Ë*ÎĎĎ+    mRemote   Error!   Unexpected state   uninit'   mInlineSpellChecker%   RemoteSpellChecker!   mOverMisspelling   overMisspelling   mMisspelling   misspelling   ˙˙˙˙   G   InlineSpellChecker.prototype.uninitÁ                          š      ;                                      Ż  a  0             A5       A5    ¸   
:  QA@6    QA@6   QA@6   QAB6   QA=   6   QA@6   QAZ   6   QAZ   6   	QA@6   
QAZ   6   QAZ   6   QA@6   QŃČ7ČČČĚČËËČËËČ    mRemote   uninit   mEditor'   mInlineSpellChecker!   mOverMisspelling   mMisspelling      mMenu#   mSpellSuggestions!   mSuggestionItems   mDictionaryMenu!   mDictionaryNames!   mDictionaryItems   mWordNode   ˙˙˙˙   U   InlineSpellChecker.prototype.initFromEventÁ               ˇ       š      L                                        rangeParent   rangeOffset   selcon   spellsel   range  ă  
  F       	      AB6    QT   D   QA5       A5   5   W   QV   ¸   
V   5   : W  QV  5   >   A5   ¸   
T  T : W  QV      AV  ¸   	
:  6   QAC6    QAT  6   
QAT 6   QČJĘMĐÔČËRĐRČTWĚÉČĘĘ !   mOverMisspelling'   mInlineSpellChecker   mEditor'   selectionController   getSelection)   SELECTION_SPELLCHECK   rangeCount#   getMisspelledWord   mMisspelling   toString   mWordNode   mWordOffset   ˙˙˙˙   U   InlineSpellChecker.prototype.canSpellCheckÁ                   !       š                                            B  #  _             A5       A5    5   A5   @cĚÉ(    mRemote   canSpellCheck'   mInlineSpellChecker   ˙˙˙˙   k   InlineSpellChecker.prototype.initialSpellCheckPendingÁ                   D       š                                            D  4  h             A5       A5    5   A5   E   #QA5   5    E   QA5   5     ĚlĚŇÎ:    mRemote#   spellCheckPending'   mInlineSpellChecker   spellChecker   ˙˙˙˙   I   InlineSpellChecker.prototype.enabledÁ                   0       š                                            }  /  r             A5       A5    5   A5   E   QA5   5   ĚĚĚ:    mRemote'   enableRealTimeSpell'   mInlineSpellChecker   ˙˙˙˙   I   InlineSpellChecker.prototype.enabledÁ                 D       š                                              isEnabled >     y             A5       A5    ¸   
T  : Q   $A5      A5   ¸   
T  : QŮÔ2    mRemote3   setSpellcheckUserOverride'   mInlineSpellChecker   mEditor   ˙˙˙˙   Y   InlineSpellChecker.prototype.overMisspellingÁ                          š                                            W                 A5     !   mOverMisspelling   ˙˙˙˙   c   InlineSpellChecker.prototype.addSuggestionsToMenuÁ              ×      š      °                        #          	   menu   insertBefore   maxNumber   spellchecker   i   suggestion	   item   callback   B                 A5     E   QA5    D   QA5       >A5    D   QA5   5   W   QA5     E   QV   ¸   
A5   :     >     Qv  Q>ČČ    AT  6   QAZ   6   QAZ   6   Q>W  Q  mV   ¸   	
:  W  QV  Ů   
    
   ňA5   ¸   
V  : QT  5   ¸   
=   : W  QA5   ¸   
V  : QV  ¸   
=   V  : QV  ¸   
=   V  : Q   W  QV  ¸   
=   V  AV  : C: QV  ¸   
=   =   : QT  ¸   
V  T : QV  #?W  QQăV  T ˙˙ţđA5   Ů   
ÍÍÜ*
ÍŃĚËĘËË	%   ý   
ËČ
ĘHŐ
ÔČŐŘŘ
ĘÚ!˙˙˙ßŮŐ  #Î  ¨  Ď  ŞĚ%    mRemote'   mInlineSpellChecker!   mOverMisspelling   spellChecker!   CheckCurrentWord   mMisspelling   mMenu#   mSpellSuggestions!   mSuggestionItems!   GetSuggestedWord   length	   push   ownerDocument   createElement   menuitem   setAttribute   label   value!   addEventListener   command   class!   spell-suggestion   insertBefore    ˙˙˙˙         e       ˙˙˙˙   u   InlineSpellChecker.prototype.addSuggestionsToMenu/callbackÁ                        š                                        @      me   vale  §  Ľ                 )4    ˙˙˙˙   y   InlineSpellChecker.prototype.addSuggestionsToMenu/callback/<Á                        š                                              evt   Ľ  Ľ                ¸    
   : Q@Ő %   replaceMisspelling    ľ          E   .       t      ˙˙˙˙˙˙˙˙             ˙˙˙˙   k   InlineSpellChecker.prototype.clearSuggestionsFromMenuÁ                 Y       š      4                                        i  Ş  Ż             >W   Q   0mA5    ¸   
A5   V   7: QV   #?W   QQăV   A5   Ů   ˙˙˙ĂAZ   6   Q	%0"B  ąÜ  ą6Î  ˛  ą×Ë    mMenu   removeChild!   mSuggestionItems   length       B      ˙˙˙˙   _   InlineSpellChecker.prototype.sortDictionaryListÁ                      š      P                         	          	   list   sortedList   i Ë  G  ˇ       
      Z   W   Q>W  Q   MmV   ¸    
Y   T  V  7]   A¸   
T  V  7: ]   : QV  #?W  QQăV  T  Ů   ˙˙˙ŠV   ¸   
    : QV   É	%M?\  šĐÍĐ	Č  ş  š%Î  ť  šÔÔ  Ĺ 	   push   id1   getDictionaryDisplayName   label   length	   sort   ˙˙˙˙   c   InlineSpellChecker.prototype.sortDictionaryList/<Á                 4       š                                              a   b  Ź  )  ˝             T  5    T 5       ×˙T  5    T 5       ?>ŃŃ	    label       \      ˙˙˙˙   i   InlineSpellChecker.prototype.addDictionaryListToMenuÁ      
   
     ¨      š      Ű                        9      @   	   menu   insertBefore	   list   curlang   spellchecker   o1   o2   listcount   sortedList   i	   item   callback â     Ę             A   6    QAZ   6   QAZ   6   QA5       >V   Q=   W  QA5      *A5   5   W   QA5   5   W  Q   A5      A5   5   	W  QY   W  QY   W  QV  ¸   

V  V  : QV  5   W   QV  5   W  QV  ¸   
:  W  Q     
Qv  
QČ    A¸   
V   : W  Q>W  Q  qmA5   ¸   
V  V  75   : Q   5   ¸   
=   : W  QV  ¸   
=   =   V  V  75   : QV  ¸   
=   V  V  75   : QV  ¸   
=   =   : QA5   ¸   
V  : QV  V  V  75      #V  ¸   
=   =   : Q   ?   W  	QV  ¸   
=   V  	AV  V  V  75   : C: QT    !   ¸   
V  T : Q      ¸   
V  : QV  #?W  QQăV  V  Ů   ˙˙ţV   Ů   ĚËËĘ%ĐŐ
Đ
Ę	Ę×Î
ÎË
ÍÓĚČ	% q c   ćß
ÖČčâŮŐÓŢĘ  űËÝ  űÜÔ  ć+Î   ćŐ Ę    mDictionaryMenu!   mDictionaryNames!   mDictionaryItems   enabled      mRemote   dictionaryList#   currentDictionary'   mInlineSpellChecker   spellChecker#   GetDictionaryList   value)   GetCurrentDictionary%   sortDictionaryList	   push   id   ownerDocument   createElement   menuitem   setAttribute/   spell-check-dictionary-   label	   type   radio   checked	   true!   addEventListener   command   insertBefore   appendChild   length    ˙˙˙˙   
      e       ˙˙˙˙   {   InlineSpellChecker.prototype.addDictionaryListToMenu/callbackÁ                        š                                        @      me   val   dictName    đ                 
  ů    ˙˙˙˙      InlineSpellChecker.prototype.addDictionaryListToMenu/callback/<Á               s       š      %                                        evt	   view+   spellcheckChangeEvent Î    ń                ¸    
   : Q  5   5   W   QV   5   =   Y   Y      ]   ]   R W  Q  5   ¸   
V  : QŐÔĘĘ)
Ď  ö(ČŮ8 !   selectDictionary   ownerDocument   defaultView   CustomEvent%   spellcheck-changed   dictionary   detail   dispatchEvent             Ň          ë      ˙˙˙˙   ˙˙˙˙   k   InlineSpellChecker.prototype.getDictionaryDisplayNameÁ              Ü      š      Ô                       9             dictionaryName   languageTag   languageSubtag   scriptSubtag   regionSubtag   variantSubtags   bundleService   displayName 	!  Ű)                Q       QT  ¸    
V  : - Á
:  ¸   
:  5      Q   
5   W   Q¸   
:  5      Q   
5   W  Q¸   
:  5      Q   
5   W  Q¸   
:  5      Q   
5   W  Q¸   
:  5      Q   
5   W  QQQČ     Qv  QT  ČČ    ;       n;   5   5   ¸   
;   5   	5   
: W  Qn   V  ¸   
=   : o   Qn   V  ¸   
=   : o   Q=   W  QV  ;   ¸   
V  ¸   
:  : W  Q   0  Qv  QV  V  ¸   
:  W  QČ    V     {V  =   W  QV  ;   ¸   
V  ¸   
:  : W  Q   0  Qv  QV  V  ¸   
:  W  QČ    V  =   W  QV     "V  =   W  QV  V  W  QV     HV  =   V  ¸   
?: ¸   
    : ¸   
=   : =   W  QV    ń
Ę
ÎLÔ˙˙˙´ÉççççŢĚÍ
ÖĎ ČĐ ÉĐ ÉĘ(Ű1˙˙˙Ţ{ËĚĎ{ÍÉx(Ű/˙˙˙ŕ{ËĚĎ{ÍÉxÉxČxŐčx    match	   next	   done   value   gLanguageBundle   Components   classesA   @mozilla.org/intl/stringbundle;1   getService   interfaces-   nsIStringBundleService   createBundle_   chrome://global/locale/languageNames.properties   gRegionBundle[   chrome://global/locale/regionNames.properties   #   GetStringFromName   toLowerCase    (   toUpperCase   )    /    substr   split	   join    ˙˙˙˙      !   languageTagMatch        ˙˙˙˙         e        ˙˙˙˙         e        ˙˙˙˙         e      ^([a-z]{2,3}|[a-z]{4}|[a-z]{5,8})(?:[-_]([a-z]{4}))?(?:[-_]([A-Z]{2}|[0-9]{3}))?((?:[-_](?:[a-z0-9]{5,8}|[0-9][a-z0-9]{3}))*)(?:[-_][a-wy-z0-9](?:[-_][a-z0-9]{2,8})+)*(?:[-_]x(?:[-_][a-z0-9]{1,8})+)?$   	   [-_]         ţ  ,          ,           ő          ď   ˙˙˙˙   ÷      ˙˙˙˙˙˙˙˙           ť  $   ˙˙˙˙   +  $   ˙˙˙˙   ˙˙˙˙   q   InlineSpellChecker.prototype.clearDictionaryListFromMenuÁ                 Y       š      4                                        i^*  +  C            >W   Q   0mA5    ¸   
A5   V   7: QV   #?W   QQăV   A5   Ů   ˙˙˙ĂAZ   6   Q	%0"B EÜ E6Î F E×Ë    mDictionaryMenu   removeChild!   mDictionaryItems   length       B      ˙˙˙˙   [   InlineSpellChecker.prototype.selectDictionaryÁ                      š      "                                        index   spellchecker V+  î,  L            A5       A5    ¸   
T  : QA5    D    QT  >D   QT  A5   Ů      A5   5   W   QV   ¸   
A5   T  7: QA5   ¸   
@: QÔçĐŮŇ/    mRemote!   selectDictionary'   mInlineSpellChecker!   mDictionaryNames   length   spellChecker)   SetCurrentDictionary   spellCheckRange   ˙˙˙˙   _   InlineSpellChecker.prototype.replaceMisspellingÁ                        š   	   ,                                        index D-  Ů.  Z            A5       A5    ¸   
T  : QA5    D   QA5       T  >D   QT  A5   Ů      A5   ¸   
A5   A5   A5   T  7: QÔÍÚŮĘ dH    mRemote%   replaceMisspelling'   mInlineSpellChecker!   mOverMisspelling#   mSpellSuggestions   length   replaceWord   mWordNode   mWordOffset   ˙˙˙˙   U   InlineSpellChecker.prototype.toggleEnabledÁ                   ?       š                                 	           +/  Ő/  i            A5       A5    ¸   
:  Q   "A5   ¸   
A5   5    : QÖÍ'Ě˙˙˙ŮV    mRemote   toggleEnabled   mEditor3   setSpellcheckUserOverride'   mInlineSpellChecker'   enableRealTimeSpell   ˙˙˙˙   Y   InlineSpellChecker.prototype.addToDictionaryÁ                   w       š   
                                         C0  ł1  r            A5    Ů   ;      A5    ¸   
:  QA5    ¸   
A5   : QA5      A5   ¸   
:  Q   A5   ¸   	
A5   : QŃŃ×Ö×@    mAddedWordStack   length)   MAX_UNDO_STACK_DEPTH   shift	   push   mMisspelling   mRemote   addToDictionary'   mInlineSpellChecker'   addWordToDictionary   ˙˙˙˙   a   InlineSpellChecker.prototype.undoAddToDictionaryÁ                 b       š                                            	   word"2  "3              A5    Ů   >   TA5    ¸   
:  W   QA5      A5   ¸   
V   : Q   A5   ¸   
V   : QÍ
ÍČÚŐ8    mAddedWordStack   length   pop   mRemote'   undoAddToDictionary'   mInlineSpellChecker1   removeWordFromDictionary   ˙˙˙˙   I   InlineSpellChecker.prototype.canUndoÁ                          š      	                                      83  Ą3              A5    Ů   >Î)    mAddedWordStack   length   ˙˙˙˙   O   InlineSpellChecker.prototype.ignoreWordÁ                   9       š                                            š3  A4              A5       A5    ¸   
:  Q   A5   ¸   
A5   : QÖ×7    mRemote   ignoreWord'   mInlineSpellChecker   mMisspelling   ˙˙˙˙   +   isTargetAKeywordField                      š      *                                        aNode   window	   form   method  Ř6  ]:  °            T  T 5    r    BT  5   W   QV    D   QT  5   =      BV   5   ¸   
:  W  QV  =   D   :QV  =   D   *QV   5   =   	E   QV   5   =   
ÍÍŮĐ	Č ÄŕĺU !   HTMLInputElement	   form	   type   password   method   toUpperCase   GET      enctype   text/plain'   multipart/form-data   ˙˙˙˙   !   getComputedStyle                 .       š                                              aElem   aProp  ł:  I;  É            T  5    5   ¸   
T  =   : ¸   
T : ÔČ ĘĘ ĘE    ownerDocument   defaultView!   getComputedStyle   !   getPropertyValue   ˙˙˙˙      isEditable              7      š      ş                        ,             element   window   flags   win   isEditable   editingSession  X;  ÓA  Ď            >W   QT  T 5    r   ŕV   A5   W   QT  ¸   
B: D   QT  5   =      ¤V   A5   W   QT  5   =      V   A5   W   QT  5    E   (QT  5   =   D   QT  5   =   	   V   A5   
W   QA¸   
T  T :    V   A5   W   Q   KT  T 5   r   :V   A5   A5   W   QT  5       V   A5   
W   QV   A5   
    íT  5   5   W  QV     ŇBW  QV  ¸   
;   5   : ¸   
;   5   : ¸   
;   5   : ¸   
;   5   : W  QV  ¸   
V  : E   QA¸   
T  =   : =      CW  Q     Qv  QČ    V     V   A5   W   QV   Ě  ŰĘxË
×ĘxÎ
ĘxĎâ
ĘxÎ
ĘxËĚŃx
ÉĘxĚ
Ň  ŐĘĘ ďĘĘ ďĘĘ ďČĎÉĐÉËÓ
Ęx !   HTMLInputElement   INPUT   mozIsTextField	   type   number   TEXTINPUT   NUMERIC   readOnly	   text   search   EDITABLE+   isTargetAKeywordField   KEYWORD'   HTMLTextAreaElement   TEXTAREA   ownerDocument   defaultView   QueryInterface   Ci+   nsIInterfaceRequestor   getInterface!   nsIWebNavigation#   nsIEditingSession!   windowIsEditable!   getComputedStyle!   -moz-user-modify   read-write   CONTENTEDITABLE    ˙˙˙˙         ex         k              ˙˙˙˙   ˙˙˙˙   %   RemoteSpellChecker                        š                                               aSpellInfo ôA  HB              AT  6    QA@6   QĘČ!    _spellInfo)   _suggestionGenerator   ˙˙˙˙   U   RemoteSpellChecker.prototype.canSpellCheckÁ                          š                                            ~B  ŞB              A5    5   Ě%    _spellInfo   canSpellCheck   ˙˙˙˙   ]   RemoteSpellChecker.prototype.spellCheckPendingÁ                          š                                            ĂB  úB              A5    5   Ě0    _spellInfo1   initialSpellCheckPending   ˙˙˙˙   Y   RemoteSpellChecker.prototype.overMisspellingÁ                          š                                            C  ?C              A5    5   Ě'    _spellInfo   overMisspelling   ˙˙˙˙   a   RemoteSpellChecker.prototype.enableRealTimeSpellÁ                          š                                            ZC  C              A5    5   Ě+    _spellInfo'   enableRealTimeSpell   ˙˙˙˙   !   GetSuggestedWord                 ^       š      /                                     	   nextĄC  E              A5        A    A5   : 6    QA5    ¸   
:     QV   5      A@6    Q=   V   5    +É ÍČÉČĘ )   _suggestionGenerator   _spellInfo	   next	   done      value   ˙˙˙˙   W   GetSuggestedWord/this._suggestionGenerator<Á                       š      #                             @     spellInfo   .generator   .genrvalřC  RD              É   Ę   ĐQ   5    - Á
:  Ć       Q   2m5      QY      ]   B]     Ë  ĐQăQ¸   
:  5   ˙˙˙żČÇ Y   ]   C]      Ě Ěß8FŇ
ŕ Ë˙˙˙ňÓ !   spellSuggestions   value	   done	   next    ˙˙˙˙          i      0   F       %   R   ˙˙˙˙
   [      ˙˙˙˙   ]   RemoteSpellChecker.prototype.currentDictionaryÁ                          š                                            &E  UE               A5    5   Ě(    _spellInfo#   currentDictionary   ˙˙˙˙   W   RemoteSpellChecker.prototype.dictionaryListÁ                          š                                            kE   E  !            A5    5   ¸   
:  Ň'    _spellInfo   dictionaryList   slice   ˙˙˙˙   !   selectDictionary                 )       š                                              index ľE  MF  #            A5    5   ¸   
=   Y   T  ]   : Q×.Č $7    _spellInfo   target!   sendAsyncMessageG   InlineSpellChecker:selectDictionary   index   ˙˙˙˙   %   replaceMisspelling                 )       š                                              index dF  ţF  (            A5    5   ¸   
=   Y   T  ]   : Q×.Č )7    _spellInfo   target!   sendAsyncMessageK   InlineSpellChecker:replaceMisspelling   index   ˙˙˙˙      toggleEnabled                   !       š                                            G  gG  -            A5    5   ¸   
=   Y   : QŕP    _spellInfo   target!   sendAsyncMessageA   InlineSpellChecker:toggleEnabled   ˙˙˙˙      addToDictionary                 c       š                                               dictionaryzG  :J  .            ;    5   ¸   
;   5   :    QV   ¸   
A5   5   =   : QA5   5   	¸   

=   Y   : Q 7ŃĘ 7ČßŕJ    Cc]   @mozilla.org/spellchecker/personaldictionary;1   getService   Ci-   mozIPersonalDictionary   addWord   _spellInfo   misspelling      target!   sendAsyncMessage5   InlineSpellChecker:recheck   ˙˙˙˙   '   undoAddToDictionary               [       š                                           	   word   dictionary QJ  [K  =            ;    5   ¸   
;   5   :    QV   ¸   
T  =   : QA5   5   ¸   	
=   
Y   : QŃĘ >Č×ŕJ    Cc]   @mozilla.org/spellchecker/personaldictionary;1   getService   Ci-   mozIPersonalDictionary   removeWord      _spellInfo   target!   sendAsyncMessage5   InlineSpellChecker:recheck   ˙˙˙˙      ignoreWord                 ^       š                                               dictionaryiK  L  D            ;    5   ¸   
;   5   :    QV   ¸   
A5   5   : QA5   5   ¸   	
=   
Y   : QŃĘ EČÚŕJ    Cc]   @mozilla.org/spellchecker/personaldictionary;1   getService   Ci-   mozIPersonalDictionary   ignoreWord   _spellInfo   misspelling   target!   sendAsyncMessage5   InlineSpellChecker:recheck   ˙˙˙˙      uninit                   !       š                                            L  ÜL  K            A5    5   ¸   
=   Y   : QŕI    _spellInfo   target!   sendAsyncMessage3   InlineSpellChecker:uninit