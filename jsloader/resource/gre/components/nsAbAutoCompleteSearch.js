ç¿s¹                y  -   ¹   7   \                         /            resource://gre/components/nsAbAutoCompleteSearch.js     bK         	             	                   4   5;    5   ¸   
=   : Q;    5   ¸   
=   : Q;    5   ¸   
=   : Q;    5   5      Q;    5   5   	   	Q;   
Y   @]   @]   ;   5   ]   ×ÿ]   @]      a      ]      ]      ]      ]      ]      ]      ]      	]      
]   ;   ¸   
Z  ;   `   ;   	`  : ]   6   Q;   Y   ;    ¸    
=   !: ]   ">]   #;   $5   %]   &;   $5   ']   (;   )f   R ]   *   ]   +   ]   ,   ]   -   ]   .   ]   /   ]   0   ]   1   ]   2;   ¸   
Z  ;    5   5   3`   : ]   6   Qn   4Z  ;   `   o   4Q;   ¸   6
;   4:    5Q	Ê	L	 À	 Ð	 ý	 Ú?Ú?ÚA	ÕÕÊÏÊ"Ê&Ê*Ê.Ê2Ê6Ê:Ê?ÊCÊIÐ'ÉÉÿÿÿäÎL$NÊPÑ	ÈUÏÏËÈdÊ  Ê  ´Ê  ÞÊ  üÊ Ê AÊ ±Ê ¶Ð'ÓÿÿÿéÎ À Ð ò ý ÉÏÿÿÿüÑÉÿÿÿý    Components   utils   importG   resource://gre/modules/Services.jsmG   resource:///modules/mailServices.jsK   resource://gre/modules/XPCOMUtils.jsm   ACR   interfaces+   nsIAutoCompleteResult/   nsIAbAutoCompleteResult-   nsAbAutoCompleteResult   prototype   _searchResults   searchString   RESULT_NOMATCH   searchResult   defaultIndex!   errorDescription   matchCount   getValueAt   getLabelAt   getCommentAt   getStyleAt   getImageAt/   getFinalCompleteValueAt   removeValueAt   getCardAt   getEmailToUse   XPCOMUtils   generateQI   QueryInterface-   nsAbAutoCompleteSearch   IDI   2f946df9-114c-41fe-8899-81f10daf4f0c   classID   _commentColumn   MailServices   headerParser   _parser   ab   _abManager   Set#   applicableHeaders'   _getPopularityIndex   _getScore   _searchCards   _checkEntry   _checkDuplicate   _addToResult   startSearch   stopSearch+   nsIAutoCompleteSearch   components   NSGetFactory)   generateNSGetFactory   ÿÿÿÿ   -   nsAbAutoCompleteResult                 &       ¹                                              aSearchString 9  <               AZ   6    QAT  6   QA;   R  6   QËÊÉ
    _searchResults   searchString!   _collectedValues   Map   ÿÿÿÿ   W   nsAbAutoCompleteResult.prototype.matchCountÁ                          ¹                                              @               A5    Ù   Ì"    _searchResults   length   ÿÿÿÿ      getValueAt                        ¹                                              aIndex d     "             A5    T  75   Ð)    _searchResults   value   ÿÿÿÿ      getLabelAt                        ¹      	                                        aIndex Ä  ö  &             A¸    
T  : Ë    getValueAt   ÿÿÿÿ      getCommentAt                        ¹                                              aIndex   \  *             A5    T  75   Ð+    _searchResults   comment   ÿÿÿÿ      getStyleAt                        ¹                                               aIndex   ¨  .             =        local-abook   ÿÿÿÿ      getImageAt                        ¹                                               aIndex Ì  é  2             =    
       ÿÿÿÿ   q   nsAbAutoCompleteResult.prototype.getFinalCompleteValueAtÁ                        ¹      	                                        aIndex   A  6             A¸    
T  : Ë    getValueAt   ÿÿÿÿ      removeValueAt                        ¹                                                aRowIndex   aRemoveFromDB  k    :              C    ÿÿÿÿ      getCardAt                        ¹                                              aIndex Ë    ?             A5    T  75   Ð(    _searchResults	   card   ÿÿÿÿ      getEmailToUse                        ¹                                              aIndex 0  q  C             A5    T  75   Ð.    _searchResults   emailToUse   ÿÿÿÿ   -   nsAbAutoCompleteSearch                          ¹                                              ð  õ  L              #                      addr_to      addr_cc      addr_bcc      addr_reply                  ÿÿÿÿ   '   _getPopularityIndex              ê       ¹      C                                     aDirectory   aCard   popularityValue   popularityIndex  x  Ø  d             T ¸    
=   =   :    Q;   â   V   :   Q;   â   V  :    ¡;   â   V   ×: W  Q;   â   V  :    >W  QT  5       _T ¸   
=   V  : QT  ¸   
T : Q   1  Qv  Q;   5   	¸   

V  : QÈ    V  ÔÈÎÈjÎÐÈnÎ
r
É×
ÖwÌ
à|    getProperty   PopularityIndex   0   parseInt   isNaN   readOnly   setProperty   modifyCard   Components   utils   reportError    ÿÿÿÿ         ex         ¢          ¹   %   ÿÿÿÿ   ÿÿÿÿ   U   nsAbAutoCompleteSearch.prototype._getScoreÁ                     ¹   
   ^                                       aCard   aAddress   aSearchString	   BEST	   nick   atIdx   idx   prevCh   å           
      ×d   QT  ¸    
=   =   : ¸   
:    QT ¸   
:  U QV  T    V   ?V  ¸   
T : >   
V   T ¸   
=   :   QV  ×ÿ   T ¸   
>V  : U QT ¸   
T :   QV  >   
V   V  ×ÿ   >T ¸   
V  ?:   Q     ¸   	
V  :    
V   >
ÔÒÊÈÎÏÈÏÍÈ  £Ð	ÈÐ	    getProperty   NickName   #   toLocaleLowerCase   indexOf   lastIndexOf   @   substr   charAt	   test   [ :."'(\-_<&]       ÿÿÿÿ   [   nsAbAutoCompleteSearch.prototype._searchCardsÁ                  ¹      m                                     searchQuery   directory   result   commentColumn	   card   childCards   "  Y  ´               QA5    ¸   
T 5   T  : 5   W  Q   E  Qv  Q;   5   ¸   
=   T  =   V  : QÈÈ    A5   	?   T 5   
   
=   W   Q   çmV  ¸   
:  W  QV  ;   5   5   r   ºV  5      *A¸   
V   T V  =   CT : Q     QV  5     QV     $A¸   
V   T V  V  CT : QV  ¸   
=   =   : W  QV     $A¸   
V   T V  V  BT : QÈãV  ¸   
:  ÿÿÿ'ÙÒÌéËÈÜ(  ÷  Á
ËÈÔÉ%
åÎß
ÕÈà  ÁÕ  Ç    _abManager   getDirectory   URI   childCards   Components   utils   reportErrorC   Error running addressbook query '   ':    _commentColumn   dirName      getNext   interfaces   nsIAbCard   isMailList   _addToResult   primaryEmail   getProperty   SecondEmail   hasMoreElements    ÿÿÿÿ         e        ÿÿÿÿ         email           ÷           +       3   9   ÿÿÿÿÿÿÿÿj             ü      ÿÿÿÿ   ÿÿÿÿ      _checkEntry               ¼       ¹      5                                        aCard   aEmailToUse   aSearchWords'   cumulativeFieldText     s   Þ             T  5    =   T  5   =   T  5   =   T =   T  ¸   
=   =   :    QT  5      ,V   =   T  ¸   
=   =   : W   QV   ¸   	
:  W   QT ¸   

;   5   5   V   :   ãÎÏÏÊÔÉÈÝ|ËÈÙ  ì3    displayName       firstName   lastName   getProperty   NickName      isMailList   Notes#   toLocaleLowerCase   every   String   prototype   contains   ÿÿÿÿ   a   nsAbAutoCompleteSearch.prototype._checkDuplicateÁ               j       ¹      ,                           	             directory	   card   lcEmailAddress   currentResults   existingResult   popIndex    ï"  §%  ü             T 5    ¸   
T :    QV       BA¸   
T  T :   QV  V   5      T 5    ¸   
T : QBCÒÈÎÈÎÖ !   _collectedValues   get'   _getPopularityIndex   popularity   delete   ÿÿÿÿ   [   nsAbAutoCompleteSearch.prototype._addToResultÁ               (      ¹      p                                        commentColumn   directory	   card   emailToUse   isPrimaryEmail   result	   mbox   emailAddress   lcEmailAddress      (  I,              A5    ¸   
T 5   T 5      /T ¸   
=   =   : D   QT 5      T :    QV   5       V   ¸   
:    QV  ¸   	
:    QA¸   

T T V  T :    T 5   ¸   
V  Y   V  ]   T  ]   T ]   T ]   T ]   A¸   
T T : ]   A¸   
T V  T 5   : ]   : QÕÈ*ÙÖ ÈÊËÈËÈÕØÉÈÈÈÈÎÈ×È , 4    _parser#   makeMailboxObject   displayName   isMailList   getProperty   Notes      email   toString#   toLocaleLowerCase   _checkDuplicate!   _collectedValues   set   value   comment	   card   isPrimaryEmail   emailToUse'   _getPopularityIndex   popularity   _getScore   searchString   score   ÿÿÿÿ      startSearch            j      ¹   ?   ]                       a             aSearchString   aSearchParam   aPreviousResult   aListener   result   params   fullString   searchWords    ¡-  @  A            ;    ¸   
T :   Q;   T  R W   QV  5   E    QA5   ¸   
V  5   :     .V   ;   5   6   QT ¸   	
AV   : QT  E   QT  ¸   

:  ¸   
:    QV   D   QT  ¸   
=   :    .V   ;   5   6   QT ¸   	
AV   : Q;   â   V  :   QA;   5   ¸   
=   : 6   Q     Qv  QÈ    T ;   rE   4QT  ¸   
T 5   : E   QT 5   ;   5     T>  Q   .m  Q  QT ¸   
V  :   QT ¸   
V  :   QA¸   
V  V  V  :    ÌV   5   ¸   
Y   T ¸   
V  : ]   T ¸   
V  : ]    V  ]   !V  5   "V  ]   #V  ]   $;   %â   %V  ¸   &
=   '=   (: : ]   )A¸   *
V  T ¸   
V  : ¸   
:  V  : ]   +: QÈV  #?W  QãV  T 5   ,ÿÿþÈÈ  F  Q  Q  Q  Q=   -  Q;   â   V  :   Q;   .â   .V  V  :   QA5   /5   0  Q   nm  QV  ¸   1
:    QV  ;   25   35   4rE   QV  ¸   5
V  5   6:    A¸   7
V  V  V   : QÈãV  ¸   8
:  ÿÿÿV   Z   >V   5   9¸   :
:  - Á
:     m5   _ã,  ¸   ;
:  5   <ÿÿÿã Q6   QÈV   5   ¸   =
   : QV   5   ,   $V   ;   5   6   QV   >6   >QT ¸   	
AV   : QÏ	ÈÉ	ÈÏÖÔÓÓÒ RÚÔÓ [ÎÈ!×ÎÓÏÒÉÓ O& . " =,ÍÎÈÎÈÔ
ÕÎÈÎ	ÈÉÓÉßÿÿÿ÷ÈÌÎÍ sÈ l
 g6ÌÿÿÿàÚ {Ø 
Ê 
ÎÈ
ÒÈ
Ð (~'ËÈÚÔ
Ù Õ ÉÐÏ8"ô Ù ©ÉÔËÓ' 	   JSON   parse-   nsAbAutoCompleteResult	   type#   applicableHeaders   has   searchResult   ACR   RESULT_IGNORED   onSearchResult	   trim#   toLocaleLowerCase   contains   ,   getSearchTokens   _commentColumn   Services   prefs   getIntPref?   mail.autoComplete.commentColumn/   nsIAbAutoCompleteResult   startsWith   searchString   RESULT_SUCCESS   getCardAt   getEmailToUse   _checkEntry   _searchResults	   push   getValueAt   value   getCommentAt   comment	   card   primaryEmail   isPrimaryEmail   emailToUse   parseInt   getProperty   PopularityIndex   0   popularity   _getScore   score   matchCount  (or(DisplayName,c,@V)(FirstName,c,@V)(LastName,c,@V)(NickName,c,@V)(PrimaryEmail,c,@V)(SecondEmail,c,@V)(and(IsMailList,=,TRUE)(Notes,c,@V)))!   generateQueryURI   _abManager   directories   getNext   Components   interfaces   nsIAbDirectory%   useForAutocomplete   idKey   _searchCards   hasMoreElements!   _collectedValues   values	   next	   done	   sort   defaultIndex    ÿÿÿÿ         e        ÿÿÿÿ         i                 	   card       email        ÿÿÿÿ         modelQuery       searchWords       searchQuery       allABs                    dir       ÿÿÿÿ      startSearch/<Á                 |       ¹                                              a   b  é=  s?              T 5    T  5    D   iQT 5   T  5   D   RQT  5   T 5   E   QT  5      ×ÿ   >D    QT  5   ¸   
T 5   : ××ßÓ×    score   popularity	   card   isPrimaryEmail   value   localeCompare   á  "       6  ~         =         %       ,     ÿÿÿÿ     I  ÿÿÿÿ             Ó  =  ÿÿÿÿ   8  g         ÿÿÿÿ      stopSearch                          ¹                                              =@  E@  ±             %    ÿÿÿÿ   #   encodeABTermValue                 :       ¹      
                                       aString B  aB  À            ;    â    T  : ¸   
     =   : ¸   
    =   : ÍìH %   encodeURIComponent   replace   %28   %29   \(      \)      ÿÿÿÿ      getSearchTokens              w      ¹   
                                       aSearchString   searchString   quotedTerms   startIndex   searchWords PD  GH  Ð            T  ¸    
:     QV   =      
Z   Z     Q  Q   Îm  Q  QV   ¸   
=   V  ?:   QV  ×ÿ   V   Ù   W  QV  ¸   
V   ¸   
V  ?V  : : QV   ¸   
>V  :   QV  V   Ù      #V  V   ¸   
V  ?: W  QV  ¸    
:  W   QÈãV   ¸   
=   : W  ×ÿÿÿÿZ     QV   Ù   >   0V  ¸   
V   ¸   	
     : : W  Q   V  W  QV  ÊÈÊÉ Ü(  ê9ÍÖÈÎàÿÿÿïÐÈÎÕ	{ËÉ Ý
ÒÏ êÉË+Û!ÿÿÿíÍÉ 	   trim      indexOf   "   length	   push   substring   substr   concat   split    ÿÿÿÿ         endIndex       query       \s+        :   ê       =   Æ   ÿÿÿÿ   ÿÿÿÿ   !   generateQueryURI                \       ¹      !                                @      aModelQuery   aSearchWords   queryURI 4I  èJ  ý            T  D   QT Ù    >   =   =      QT ¸   
A    : Q=      =      Q   ÔËÔ×    length      forEach   ?(and   )   ÿÿÿÿ   %   generateQueryURI/<å                 ;       ¹                                             searchWord J  \J                       ¸    
     ;   â   T  : :       è'ÿÿÿå{Ì9    replace#   encodeABTermValue   @V   