çżsš                ó  -   š   1   ô                                 0     resource://gre/modules/SearchSuggestionController.jsm     08                                           Af    0    Q;   5      Q5      Q5      QQ;   ¸   
=   	: Q;   ¸   
=   
: Q;   ¸   
=   : Q;   ¸   
A=   =   : Q=      Q=      QX Č   QXô   Q=      Qn   ;   5   ¸   
;   : 1   Q;   5   ¸   
;      B: QA   0   QA5   Y   ×]   ×
]    ;   ]   !;   ]   "@]   #@]   $@]   %@]   &@]   '   ]   (   ]   )   ]   *   ]   +   ]   ,   ]   -   	]   .   
]   /0   QA5      0   0Q	Ě7	ę7Ő3Ő1Ő0ŰXËËÉÉËŰÉ˙˙˙ýŰ
,Ě.0Ë5<AĘFĘMSX]bpĘ  ŞĘ  śĘ  éĘ Ę -Ę @Ę wĐ  Ń !   EXPORTED_SYMBOLS   Cc   Ci   Cu   Components   classes   interfaces   utils   importK   resource://gre/modules/XPCOMUtils.jsmG   resource://gre/modules/Services.jsmE   resource://gre/modules/Promise.jsm   XPCOMUtils-   defineLazyModuleGetter   NS_ASSERT?   resource://gre/modules/debug.js?   SEARCH_RESPONSE_SUGGESTION_JSON=   application/x-suggestions+json5   DEFAULT_FORM_HISTORY_PARAM#   searchbar-history   HTTP_OK   REMOTE_TIMEOUT)   BROWSER_SUGGEST_PREF=   browser.search.suggest.enabled3   gRemoteSuggestionsEnabled   Services   prefs   getBoolPref   addObserver5   SearchSuggestionController   prototype   maxLocalResults!   maxRemoteResults   remoteTimeout!   formHistoryParam%   _formHistoryResult%   _remoteResultTimer+   _deferredRemoteResult   _callback   _request   fetch	   stop#   _fetchFormHistory   _fetchRemote   _onRemoteLoaded!   _onRemoteTimeout/   _dedupeAndReturnResults   _reset/   engineOffersSuggestions                  5   SearchSuggestionController                  ˙˙˙˙                     %       š      
                                       aSubject   aTopic   aData   ž  +               n    ;   5   ¸   
;   : 1    QŰÉ1 3   gRemoteSuggestionsEnabled   Services   prefs   getBoolPref)   BROWSER_SUGGEST_PREF   ˙˙˙˙   5   SearchSuggestionController                        š      	                                         callback   I  ,             T  H   
@U  QAT  0    QĘĘ    _callback   ˙˙˙˙   _   this.SearchSuggestionController.prototype.fetchÁ            ˝      š                               .            searchTerm   privateMode   engine   handleRejection   promises   Ć  Ł  p       
          W   QA¸    
:  Q;   5   5       ;   =   R pT '=   H   ;   =   R pT ;   5   	r    ;   =   
R pA5    E   QA5       ;   =   R pA5   >D   QA5   >   ;   =   R pZ     QAT  0   QT  E   /Q;   E   $QA5   E   QT ¸   
;   :    :AA¸   
T  T T : 0   QV  ¸   
A5   5   : QA5      7  QA¸   
T  :   QV  ¸   
V  5   : QČ;   ¸   
V  : ¸   
A5   ¸   
A: V   :   ĘpuĚwĐËzĘË}ĎËÍËÖËÉĘŕĎŇÉÚË
ËČŮ   ĐŘ˙˙˙ĺU 	   stop   Services   search   isInitialized   Errore   Search not initialized yet (how did you get here?)   undefined   The privateMode argument is required to avoid unintentional privacy leaks   Ci   nsISearchEngine+   Invalid search engine   maxLocalResults!   maxRemoteResultsc   Zero results expected, what are you trying to do?   remoteResultY   Number of requested results must be positive   _searchString3   gRemoteSuggestionsEnabled)   supportsResponseType?   SEARCH_RESPONSE_SUGGESTION_JSON+   _deferredRemoteResult   _fetchRemote	   push   promise#   _fetchFormHistory   Promise   all	   then/   _dedupeAndReturnResults	   bind   ˙˙˙˙      handleRejection                 ,       š                                             reason [  >               T  =       @;   ¸   
=   T  : Q@ÉŮ )   HTTP request aborted   Cu   reportErrorM   SearchSuggestionController rejection:     ˙˙˙˙      +   deferredHistoryResult       X  1   ˙˙˙˙   ˙˙˙˙   ]   this.SearchSuggestionController.prototype.stopÁ                   O       š                                 
          ę  ň  Ş             A5       A5    ¸   
:  Q   &A5       ;   ¸   
=   : QA¸   
:  QÖŐĚ    _request   abort!   maxRemoteResults   Cu   reportErrorŤ   SearchSuggestionController: Cannot stop fetching if remote results were not requested   _reset   ˙˙˙˙   w   this.SearchSuggestionController.prototype._fetchFormHistoryÁ                      š      8                                      searchTerm'   deferredFormHistory!   acSearchObserver   formHistory (  É!  ś       
      ;    ¸   
:     QY   A    ]      Q;   5   ¸   
;   5   :   QV  ¸   
T  A5   	D   Q;   
A5   V   : Q   ĚÉĐ  ŢŃĘ  ŢČß  ŕ    Promise   defer   onSearchResult   Cci   @mozilla.org/autocomplete/search;1?name=form-history   createInstance   Ci+   nsIAutoCompleteSearch   startSearch!   formHistoryParam5   DEFAULT_FORM_HISTORY_PARAM%   _formHistoryResult   ˙˙˙˙   ˇ   this.SearchSuggestionController.prototype._fetchFormHistory/acSearchObserver.onSearchResultĹ                ş      š      ˛                        /            search   result  Ä  I   ť       
      AT 0    QA5      lA;   5   ¸   
;   5   : 0   QA5   ¸   
A5   	¸   

A: A5   D   Q;   ;   5   5   : QT 5      Qx;   5   5   y   F;   5   5   y   2;   5   5   y   ×;   5   5   y   Ăz   ÝT 5   A5   I   #      ¸   
=   : QČZ      Q>  Q    2mV   ¸   
T ¸   
V  : : QV  #?W  QăV  T 5   ˙˙˙ÄČ      ¸   
Y   V   ]   T ]   : Q   $      ¸   
=   : Q   ČĘ
ŇĘ  ż$É
Ű)ŃĎ  Á
  ĆÎh .ĎpĎp  ÖĎpĎpĘ  ÇĎÚÉ&2&A  ÎŮ˙˙˙ń  Î3Ě  Ď  ÎŐÖÉČ  ŃXÚX	 %   _formHistoryResult   _request%   _remoteResultTimer   Cc)   @mozilla.org/timer;1   createInstance   Ci   nsITimer!   initWithCallback!   _onRemoteTimeout	   bind   remoteTimeout   REMOTE_TIMEOUT   TYPE_ONE_SHOT   searchResult+   nsIAutoCompleteResult   RESULT_SUCCESS   RESULT_NOMATCH   RESULT_FAILURE   RESULT_IGNORED   searchString   _searchString   resolve   Unexpected response, this._searchString does not match form history response	   push   getValueAt   matchCount   result#   formHistoryResultm   Form History returned RESULT_FAILURE or RESULT_IGNORED    ˙˙˙˙          fhEntries                     i        '  A          4  ˙˙˙˙˙˙˙˙              M          ˙˙˙˙   m   this.SearchSuggestionController.prototype._fetchRemoteÁ               `      š      ]                          -            searchTerm   engine   privateMode!   deferredResponse   submission   method   0"  Ő&  é       
      ;    ¸   
:     QA;   5   ¸   
;   5   : 0   QT ¸   
T  ;   	:    QV   5   
   =      
=     QA5   ¸   
V  V   5   5   C: QA5   5   ;   5   r   A5   5   ¸   
T : QA5   C0   QA5   ¸   
=   A5   ¸   
A   : : QA5   ¸   
=   A    : QA5   ¸   
=   A   : QA5   ¸   
V   5   
: Q   ĚÉŇĘ  ëÉÍ  íČÉ
ŮäÖŮÍĺ'˙˙˙ŮÜÜÚ    Promise   defer   _request   CcO   @mozilla.org/xmlextras/xmlhttprequest;1   createInstance   Ci#   nsIXMLHttpRequest   getSubmission?   SEARCH_RESPONSE_SUGGESTION_JSON   postData	   POST   GET	   open   uri	   spec   channel3   nsIPrivateBrowsingChannel   setPrivate)   mozBackgroundRequest!   addEventListener	   load   _onRemoteLoaded	   bind   error   abort	   send   ˙˙˙˙   q   this.SearchSuggestionController.prototype._fetchRemote/<ĺ                        š                                             evt X%  %  ÷                   ¸    
=   : 5Ú&    resolve   HTTP error   ˙˙˙˙   q   this.SearchSuggestionController.prototype._fetchRemote/<ĺ                        š                                             evt K&  &  ú                   ¸    
=   : 5Ú/    reject)   HTTP request aborted   ˙˙˙˙   s   this.SearchSuggestionController.prototype._onRemoteLoadedÁ              _      š      g                                 !   deferredResponse   status   serverResults   results '  Ë+        
      A5        T  ¸   
=   : Q   Q  QA5    5   W   Q   4  Qv  QT  ¸   
=   V  : QČČ    V   ;   D   QA5    5   =      T  ¸   
=   V   : Q;   	¸   

A5    5   : W  Q   4  Qv  QT  ¸   
=   V  : QČČ    A5   V  >7I   T  ¸   
=   : QV  ?7D   
QZ     QT  ¸   
Y   V  ]   : QÓŐĚŘËáŘ ×ÍĚŘËÍÓŐĎÉ˙˙˙ĺ.    _request   resolvec   Got HTTP response after the request was cancelled   status+   Unknown HTTP status:    HTTP_OK   responseText   O   Non-200 status or empty HTTP response: 	   JSON   parseC   Failed to parse suggestion JSON:    _searchString   Unexpected response, this._searchString does not match remote response   result    ˙˙˙˙         e        ˙˙˙˙         ex         ł   $        .          D   (   ˙˙˙˙˙˙˙˙j             Ř   (   ˙˙˙˙˙˙˙˙ţ            ˙˙˙˙   u   this.SearchSuggestionController.prototype._onRemoteTimeoutÁ                   :       š                                           S,  .  -            A@0    QA@0   QA5      #A5   ¸   
=   : QA@0   QČČÖČ"    _request%   _remoteResultTimer+   _deferredRemoteResult   resolve   HTTP Timeout   ˙˙˙˙      this.SearchSuggestionController.prototype._dedupeAndReturnResultsÁ              ^      š      ą                        .            suggestResults   results ˛.  Ě5  @            A5    @H   @Y   A5    ]   Z   ]   Z   ]   @]      QT  - Á
:    Q    m5   W  QV  '=   H   $;   ¸   
=   	V  : Q   eV  5      :V   V  5   0   QV   V  5   
D   
QZ   0   Q   "V   V  5   
D   
QZ   0   QăQ¸   
:  5   ˙˙˙QČ V   5   Ů      )V   V   5   ¸   
>A5   : 0   QV   5   Ů   E   QV   5   Ů      >  Q    sm  Q  QV   5   V  7  QV   5   ¸   
V  :   QV  ×˙   V   5   ¸   
V  ?: QČV  #?W  QăV  V   5   Ů   ˙˙˙}ČV   V   5   ¸   
>A5   V   5   Ů   : 0   QA5      A¸   
V   : QA¸   
:  QV   ČËÉÉËŇ8  ´Ń
ËßÉ5ÓâÝ OË˙˙˙íŇ [ÎŰÉ aâ&sg  &ÍÓÔČ
Ú b0Ě˙˙˙ćŰ lćÉĐĚ    _searchString	   term   remote   local#   formHistoryResult   value   string   Cu   reportError9   SearchSuggestionController:    result	   next	   done   length   slice   maxLocalResults   indexOf   splice!   maxRemoteResults   _callback   _reset    ˙˙˙˙         result        ˙˙˙˙         i                 	   term       dupIndex        u        S   ´       I   ż   ˙˙˙˙   j     ˙˙˙˙   x  _         ˙˙˙˙   a   this.SearchSuggestionController.prototype._resetÁ                   =       š                                           á5  Ŕ6  w            A@0    QA5      A5   ¸   
:  QA@0   QA@0   QA@0   QČŃČČČ    _request%   _remoteResultTimer   cancel+   _deferredRemoteResult   _searchString   ˙˙˙˙   o   this.SearchSuggestionController.engineOffersSuggestionsÁ                        š      	                                       engine Ü7  .8              T  ¸    
;   : Ď= )   supportsResponseType?   SEARCH_RESPONSE_SUGGESTION_JSON