ç¿s¹                ~  #   ¹   x   Ú      %                   7            resource:///modules/gloda/indexer.js     Ô                                      f        Q;   5      Q;   5      Q;   5      Q;   5   	   Q;   ¸   

=   : Q;   ¸   

=   : Q;   ¸   

=   : Q;   ¸   

=   : Q;   ¸   

=   : Q;   ¸   

=   : Q;   ¸   

=   : Q;   ¸   

=   : Q;   ¸   

=   : Q;   Y      ]      ]   6   Qn   Y   ;   ]   ;   5   ¸   
=   : ]   @]    @]   !X]   "X']   #X È]   $× ]   %×]   &@]   '@]   (B]   )× ]   *× ]   +X  ]   ,×]   -X È]   .×d]   /×]   0×]   1×
]   2X]   3XN ]   4B]   5@]   6@]   7;   8¸   9
:  ]   :B]   ;   ]   <B]   =   ]   >Z   ]   ?   ]   @B]   A   a   B   b   BB]   CB]   D   	a   E   
a   F   b   EB]   G   b   HB]   I   ]   J;   K5   L]   L;   K5   M]   M;   K5   N]   N;   K5   O]   O;   K5   P]   P>]   QZ   ]   R@]   S×]   TZ   ]   U   ]   V   ]   W   ]   X   ]   Y   ]   Z@]   [B]   \@]   ]   ]   ^Y      ]   _Z   ]   `@]   aZ   ]   b   ]   c   ]   d   ]   e   ]   f   ]   g@]   h   ]   i   ]   j   ]   k   ]   l   ]   m]   n;   o]   p   ]   qY   ]   r    ]   s   !]   t   "]   u   #]   v   $]   wo   QÊ6	xËÐÐÐÐÕ3Õ1Õ3Õ2Õ0Õ4Õ0Õ5Õ46>ÊDÊNÐSxÊÊÖÈ      µÈ  ºÈ  ÀÈ  Ê  Ó  ÚÈ  ôÈ  ÿ  	ÈÈ   % *ÌÈÊ j pÊ ¦É ÁÊ æÊÊ  " 'ÊÊ 4Ê A IÊ \ fÊ oÏÏÏÏÏ { É  É Ê ¬Ê »Ê íÊ ôÊ ü 	Ê UÊ _É dÉÊ xÊ Ê Ê Ê ¥ ­Ê ´ÊÊÊÏÊ ÆÊ ÚÊ ßÊ Ê 1Ê QÊ cÐx !   EXPORTED_SYMBOLS   Cc   Components   classes   Ci   interfaces   Cr   results   Cu   utils   importK   resource://gre/modules/XPCOMUtils.jsmG   resource://gre/modules/Services.jsmK   resource:///modules/iteratorUtils.jsmI   resource:///modules/gloda/log4moz.jsE   resource:///modules/gloda/utils.jsM   resource:///modules/gloda/datastore.jsE   resource:///modules/gloda/gloda.jsO   resource:///modules/gloda/collection.jsM   resource:///modules/gloda/connotent.js   IndexingJob   prototype)   safelyInvokeCallback   toString   GlodaIndexer   GlodaDatastore   _datastore   Log4Moz   repository   getLogger   gloda.indexer	   _log   _timer   _longTimer7   _INDEX_IDLE_ADJUSTMENT_TIME)   _INITIAL_SWEEP_DELAY)   _INDEX_KICKOFF_DELAY   _INDEX_INTERVAL   _indexTokens'   _perfIndexStopwatch'   _perfPauseStopwatch   _idleToCommit'   _cpuTargetIndexTime;   _CPU_TARGET_INDEX_TIME_ACTIVE7   _CPU_TARGET_INDEX_TIME_IDLE/   _cpuAverageTimePerToken3   _CPU_AVERAGE_TIME_DAMPING3   _CPU_MAX_TOKENS_PER_BATCH#   _CPU_IS_BUSY_TIME1   _PAUSE_LATE_IS_BUSY_TIME'   _PAUSE_REPEAT_LIMIT)   _MINIMUM_COMMIT_TIME)   _MAXIMUM_COMMIT_TIME+   _unitTestSuperVerbose)   _unitTestHookRecover)   _unitTestHookCleanup	   Date   now   _lastCommitTime   _inited   _init%   _indexerIsShutdown   _shutdown   _indexers   registerIndexer   _enabled   enabled!   _indexingDesired   _indexingActive   indexing   indexingDesired#   _suppressIndexing!   suppressIndexing-   _initialSweepPerformed+   _scheduleInitialSweep   Gloda   kWorkSync   kWorkAsync   kWorkDone   kWorkPause'   kWorkDoneWithResult#   _indexingJobCount   _indexQueue   _curIndexingJob/   _indexIdleThresholdSecs   _indexListeners   addListener   removeListener!   _notifyListeners)   _timerCallbackDriver'   _wrapCallbackDriver   _batch   _inCallback%   _savedCallbackArgs   callbackDriver	   init   activeStack   activeIterator   contextStack	   push   pushAndGo   pop   cleanup   popWithResult   _result   doneWithResult   onItemsAdded   onItemsModified   onItemsRemoved!   onQueryCompleted   _callbackHandle   undefined   _workBatchData   workBatch%   _indexerWorkerDefs   _hireJobWorker   indexJob   killActiveJob)   purgeJobsUsingFilter   observe                     GlodaIndexer      IndexingJob                  ÿÿÿÿ      IndexingJob                 R       ¹      !                                         aJobType   aID   aItems   £	  t
  6             AT  6    QAT 6   QAT @   T    	Z   6   QA>6   QA@6   QA@6   QA@6   QÊÊ×ÈÈÈÈ    jobType   id   items   offset	   goal   callback   callbackThis   ÿÿÿÿ   U   IndexingJob.prototype.safelyInvokeCallbackÁ                g      ¹                              	             argumentsF    D             	W   QA5        A5    ¸   
A5   V   O Q   6  Qv  Q;   5   ¸   
=   V  : QÈ    àJÌå    callback   apply   callbackThis   GlodaIndexer	   _log	   warnA   job callback invocation problem:    ÿÿÿÿ         ex                    0   *   ÿÿÿÿ   ÿÿÿÿ   )   IndexingJob_toString                   b       ¹                                            D  ü  N             =    A5   =   A5   =   A5      A5   Ù      
=   =   A5   	=   
A5   =   ÌÙÛá<    [job:   jobType	    id:   id    items:   items   length   no    offset:   offset    goal:	   goal   ]   ÿÿÿÿ   !   gloda_index_init                      ¹   %   §                        6              branch%   eventDrivenEnabled'   performInitialSweep[.  5  0            A5       AC6    QA5   ¸   
:  Q;   5   5      AC6   QA;   5   	¸   

;   5   : 6   QA;   5   	¸   

;   5   : 6   QA;   5   ¸   
;   5   : 6   QA;   5   ¸   

;   5   : 6   QA;   5   ¸   

;   5   : 6   Q   3  Qv  QA5   ¸   
=   V  : QÈ    ;   5   ¸   
A=   B: Q;   5   ¸   
=   :    QB  QC  QV   ¸   
=    : W  Q   0  Qv  Q;   !â   !=   "V  : QÈ    V   ¸   
=   #: W  Q     Qv  QÈ    V      AC6   $QAV  6    QÈÑÏÈÜÉÜÉÒÊ @ÉKÒÊ E!ÉÒÊ G!ÎÌâÜÖ	ÈÐÍÌßÐÍÓÈË"    _inited   _callbackHandle	   init   Services   io   offline#   _suppressIndexing   _timer   Cc)   @mozilla.org/timer;1   createInstance   Ci   nsITimer   _longTimer   _idleServiceC   @mozilla.org/widget/idleservice;1   getService   nsIIdleService'   _perfIndexStopwatch1   @mozilla.org/stopwatch;1   nsIStopwatch'   _perfPauseStopwatch	   _log   error;   problem creating stopwatch!:    obs   addObserver!   quit-application   prefs   getBranchC   mailnews.database.global.indexer.   getBoolPref   enabled	   dumpO   %%% annoying exception on pref access: +   perform_initial_sweep-   _initialSweepPerformed    ÿÿÿÿ         ex        ÿÿÿÿ         ex        ÿÿÿÿ         ex         ¿          v          ²   O         '   ÿÿÿÿ     $   ÿÿÿÿ   Ý     ÿÿÿÿ   ÿÿÿÿ   )   gloda_index_shutdown                  h      ¹      p                                   27  Q<  p      	      A5    ¸   
:  Q      Qv   QÈ    A@6    QA5   ¸   
:  Q      Qv   QÈ    A@6   QA@6   QA@6   QAZ   6   QAC6   QA5      A5   ¸   	
=   
: QAC6   QA5      |   QA5   5      QV   5      (V   5   ¸   
V   5   A5   l Q   .  Qv  QA5   ¸   
=   : QÈ    ÈA5   ¸   
:  QA;   6   QAB6   Q;   ¸   
:  QÖÓÈÖÓÈÈÈËÈÖÈË
Ð2É
èÌÞÑÌÈÐ    _timer   cancel   _longTimer'   _perfIndexStopwatch'   _perfPauseStopwatch   _indexListeners%   _indexerIsShutdown   enabled	   _log	   info   Shutting Down!   suppressIndexing   _curIndexingJob   _workerDef   cleanup	   call   indexer   error]   problem during worker cleanup during shutdown.   _callbackHandle   _workBatchData   undefined   GlodaDatastore   shutdown    ÿÿÿÿ          ex        ÿÿÿÿ          ex        ÿÿÿÿ          workerDef                    ex         Ò   6        3                           ÿÿÿÿ   J      ÿÿÿÿ   ¼   v   ÿÿÿÿ   	  "         ÿÿÿÿ   7   gloda_index_registerIndexer                ù      ¹      {                                      aIndexer ¢D  H  Á            A5    ¸   
=   T  5   : QA5   ¸   
T  : Q;   â   T  5   : K  Q   Q  m- Á
:  ¸   
:  5   	   Q   
5   
W   Q¸   
:  5   	   Q   
5   
W  QQ  Q  QV  >7  QV  ?7  QV  V  6   QV  T  6   QA5   V  V  8Q=   V  q    V  @6   Q=   V  q    V  @6   Q=   V  q    V  @6   Q=   V  q    V  @6   QÈãQLMÿÿþèQNÈ   .   Qv   QA5    ¸   
=   : QÈ    A5      GT  ¸   
:  Q   3   Qv   QA5    ¸   
=   V   : QÈ    ßÔ JÒ-Ò0 ×ÿÿÿçÉçãËËÎÍÐË
ËË
ËË
ËË
ÞÌÝÓÌâ 	   _log	   info+   Registering indexer: 	   name   _indexers	   push   Iterator   workers	   next	   done   value   indexer%   _indexerWorkerDefs   recover   cleanup   onSchedule   jobCanceled	   warn]   Helper indexer threw exception on worker enum.   _enabled   enableU   Helper indexer threw exception on enable:     ÿÿÿÿ          iWorker       workerInfo                     workerCode       workerDef        ÿÿÿÿ          ex        ÿÿÿÿ          ex         ·          4   N     ]         N   /  ÿÿÿÿ   ¸   ¸            "   ÿÿÿÿ   Ë  '   ÿÿÿÿ   ÿÿÿÿ   )   GlodaIndexer.enabledÁ                          ¹                                            üH  I  ç            A5        _enabled   ÿÿÿÿ   )   GlodaIndexer.enabledÁ                      ¹      £                        @             aEnable 'I  AO  è            A5     E   	QT    i;   5   ¸   
A=   B: QA5   ¸   
AA5   : QAC6    Q;   â   A5   	: K  Q   Q   ¡m- Á
:  ¸   

:  5      Q   
5   W   Q¸   

:  5      Q   
5   W  QQV  ¸   
:  Q   3  Qv  QA5   ¸   
=   V  : QÈ    ãQLMÿÿÿ_QNÈA5      AB6   QAC6   QA5       1A5   ¸   
A5   A5   ;   5   5   : Q  %A5    E   
QT     ;   â   A5   	: K  Q   Q   ¡m- Á
:  ¸   

:  5      Q   
5   W   Q¸   

:  5      Q   
5   W  QQV  ¸   
:  Q   3  Qv  QA5   ¸   
=   V  : QÈ    ãQLMÿÿÿ_QNÈ;   5   ¸   
A=   : QA5   ¸   
AA5   : QAB6    QÐ dÜØÈÐ+Ò0  ¦×ÿÿÿéÉç×
ÔÌ
ï ûÈÈ
ÓÕ ÉÌÐ+Ò0  ¦×ÿÿÿéÉç×
ÔÌ
ï ÛØÈ    _enabled   Services   obs   addObserver=   network:offline-status-changed   _idleService   addIdleObserver/   _indexIdleThresholdSecs   Iterator   _indexers	   next	   done   value   enable	   _log	   warnU   Helper indexer threw exception on enable: !   _indexingDesired   indexing-   _initialSweepPerformed   _longTimer!   initWithCallback+   _scheduleInitialSweep)   _INITIAL_SWEEP_DELAY   Ci   nsITimer   TYPE_ONE_SHOT   disableW   Helper indexer threw exception on disable:    removeObserver%   removeIdleObserver    ÿÿÿÿ          iIndexer       indexer                     ex        ÿÿÿÿ          iIndexer       indexer                    ex       µ  §               x   §       Ò          i   ¸   ÿÿÿÿ   ç   '          ¦  ¸   ÿÿÿÿ   $  '         ÿÿÿÿ   +   GlodaIndexer.indexingÁ                          ¹      
                                      Q  ØQ  '            A5    E   QA5    Ì È !   _indexingDesired#   _suppressIndexing   ÿÿÿÿ   9   GlodaIndexer.indexingDesiredÁ                          ¹                                            R  IR  +            A5     !   _indexingDesired   ÿÿÿÿ   +   GlodaIndexer.indexingÁ                        ¹      ,                                        aShouldIndex oS  _U  4            A5     E   	QT     |AC6    QA5   E   QA5    E   QA5       OA5   ¸   
=   : QAC6   QA5   ¸   
A5   	A5   
;   5   5   : QÐÈÌÍÖÈÓÏ :@ !   _indexingDesired   enabled   _indexingActive#   _suppressIndexing	   _log	   infoQ   +++ Indexing Queue Processing Commencing   _timer!   initWithCallback)   _timerCallbackDriver)   _INDEX_KICKOFF_DELAY   Ci   nsITimer   TYPE_ONE_SHOT   ÿÿÿÿ   ;   GlodaIndexer.suppressIndexingÁ                 z       ¹      *                                        aShouldSuppress W  yY  I            AT  6    QA5     E   QA5   E   QA5       OA5   ¸   
=   : QAC6   QA5   ¸   
A5   A5   	;   
5   5   : QÊÙÖÈÓÏ R@ #   _suppressIndexing!   _indexingDesired   _indexingActive	   _log	   infoM   +++ Indexing Queue Processing Resuming   _timer!   initWithCallback)   _timerCallbackDriver)   _INDEX_KICKOFF_DELAY   Ci   nsITimer   TYPE_ONE_SHOT   ÿÿÿÿ   A   gloda_index_scheduleInitialSweep                  ´       ¹      %                                   \  f]  f      	      ;    5      ;    C6   Q;   â   ;    5   : K   Q   im- Á
:  ¸   
:  5      Q   
5   Q¸   
:  5      Q   
5   W   QQV   ¸   
:  QãQLMÿÿÿQNÈÊÌÔ!Ì0n×ÿÿÿñÉã×Ü    GlodaIndexer-   _initialSweepPerformed   Iterator   _indexers	   next	   done   value   initialSweep    ÿÿÿÿ          indexer       B   o       8   {   ÿÿÿÿ   ÿÿÿÿ   /   gloda_index_addListener                 V       ¹                                 
             aListener êc  he              A5    ¸   
T  : ×ÿ   A5    ¸   
T  : QA5       T  ;   5   @>>?: QT  ÐÔÖ    _indexListeners   indexOf	   push   indexing   Gloda   kIndexerIdle   ÿÿÿÿ   5   gloda_index_removeListener               ;       ¹                                              aListener   index 	f  f  ¬            A5    ¸   
T  :    QV   ×ÿ   A5    ¸   
V   ?: QÐÈÖ&    _indexListeners   indexOf   splice   ÿÿÿÿ   7   gloda_index_notifyListeners                Û      ¹      £                                      status   prettyName   jobIndex   jobItemIndex   jobItemGoal   jobType£h  Äm  »               Q  Q  Q  Q  Q  QA5    E   QA5      Å  Q  QA5     Q;   5   W   QA5   V  5   75     Q=   V  q   3V  5   @   V  5   5      @W  Q   @W  QA5   	?W  QV  5   
W  QV  5   W  QV  5   W  QÈ   2;   5   W   Q@W  Q>W  Q>W  Q?W  Q@W  QV  V     V  W  QA5   Ù   ?  Q    zm  QA5   V  7  QV  V   V  V  V  V  V  : Q   -  Qv  QA5   ¸   
V  : QÈ    ÈV  #?W  QQãV  >ÿÿÿÈ
Ò  ÀÑ
ËÏ
ÚÊ.ËÞÍÎÎÔÏ ÙÉÉÒ zl  
Ð"Ù àÉÌÝ Ý	Î Ü8Î    indexing   _curIndexingJob   Gloda!   kIndexerIndexing%   _indexerWorkerDefs   jobType   indexer   _indexingFolder   prettiestName#   _indexingJobCount   offset	   goal   kIndexerIdle   _indexListeners   length	   _log   error    ÿÿÿÿ         job       indexer        ÿÿÿÿ         iListener                    listener                    ex        W          o  &       =   ¹   ÿÿÿÿ   L     ÿÿÿÿ   Y  e           !         ÿÿÿÿ   ?   gloda_index_timerCallbackDriver                          ¹                                            n  µn  í            ;    ¸   
:  QÐ    GlodaIndexer   callbackDriver   ÿÿÿÿ   =   gloda_index_wrapCallbackDriver                 %      ¹                                              arguments;o  o  ô            	W   Q;    5   ¸   
;    V   O QÞ;    GlodaIndexer   callbackDriver   apply   ÿÿÿÿ   5   gloda_index_callbackDriver                Þ     ¹      Î                        )             argumentsûr  ¯~  	            	W   QA5       A5      9AV   6   QA5   ¸   
A5   >;   5   5   : QAC6   Q  Q  QA5   	@H   AA¸   

:  6   	Q  QA5   @   A5   W  QA@6   Q   V   W  Q  QV  Ù   >   A5   	¸   
:  W  Q   NV  Ù   ?   %A5   	¸   
V  >7: W  Q   A5   	¸   
V  : W  QV  xA5   y    A5   y   .A5   y   lz   lA5   	¸   
:  QA@6   	QA5      6A5   ¸   
A5   A5   ;   5   5   : Q   AB6   Q   
   Èt   
   AB6   Qu  ËÓÏ È qÍÈÉÉ *
ÈËÍÉ
ËÍ	ÍË Ó	ÍÑ	Èl  v Av JvÊ <
Ñ
È1ÓÏ CÉÈXXÐÊ %   _indexerIsShutdown   _inCallback%   _savedCallbackArgs   _timer!   initWithCallback)   _timerCallbackDriver   Ci   nsITimer   TYPE_ONE_SHOT   _batch   workBatch   length	   next	   send   kWorkDone   kWorkPause   kWorkAsync   close   indexing   _INDEX_INTERVAL   _indexingActive    ÿÿÿÿ      	   args       result        U   u      W   i  ÿÿÿÿ   ÿÿÿÿ   ?   gloda_index_callbackhandle_init                   /       ¹                                            ù~    V            A;   5   6    QA;   6   QA;   5   6   QÑÌÑ,    wrappedCallback   GlodaIndexer'   _wrapCallbackDriver   callbackThis   callback   callbackDriver   ÿÿÿÿ   ?   gloda_index_callbackhandle_push                 3       ¹                                              aIterator   aContext  Ý  q  l            A5    ¸   
T  : QA5   ¸   
T : QAT  6   QÔÔÊ     activeStack	   push   contextStack   activeIterator   ÿÿÿÿ   I   gloda_index_callbackhandle_pushAndGo                        ¹                                              aIterator   aContext    A  x            A¸    
T  T : Q;   5   ÒË 	   push   GlodaIndexer   kWorkSync   ÿÿÿÿ   =   gloda_index_callbackhandle_pop                   l       ¹                                            ¿  È              A5    ¸   
:  QA5   ¸   
:  QA5   ¸   
:  QA5   Ù      %AA5   A5   Ù   ?76    Q   A@6    QÑÑÑË àÈ    activeIterator   close   activeStack   pop   contextStack   length   ÿÿÿÿ   E   gloda_index_callbackhandle_cleanup                 <       ¹      !                                    )   aOptionalStopAtDepth   O              T  ;    H   
>U  Q   mA¸   
:  QãA5   Ù   T  ÿÿÿâÉ(# Ì Ö    undefined   pop   activeStack   length       #      ÿÿÿÿ   Q   gloda_index_callbackhandle_popWithResult                 %       ¹                                               result                A¸    
:  QA5      QA@6   QV   Ì
ËÈ    pop   _result   ÿÿÿÿ   S   gloda_index_callbackhandle_doneWithResult                        ¹                                              aResult L  ¢  ­            AT  6    Q;   5   ÊË!    _result   Gloda'   kWorkDoneWithResult   ÿÿÿÿ   S   GlodaIndexer._callbackHandle.onItemsAddedÁ                          ¹                                              0  5  ´                 ÿÿÿÿ   Y   GlodaIndexer._callbackHandle.onItemsModifiedÁ                          ¹                                              T  Y  µ             !    ÿÿÿÿ   W   GlodaIndexer._callbackHandle.onItemsRemovedÁ                          ¹                                              w  |  ¶                  ÿÿÿÿ   [   GlodaIndexer._callbackHandle.onQueryCompletedÁ                        ¹                                              aCollection   Ö  ·            ;    ¸   
:  QÐ    GlodaIndexer   callbackDriver   ÿÿÿÿ   +   gloda_index_workBatch                 Ð      ¹   Q   ü                      ì             .generator   batchCount   haveMoreWork'   transactionToCommit   inIdle   notifyDecimator{  à»  Æ      	      É   Ê   ÐQA5        ;   ¸   
:  Q   AB6    QA5   ¸   
:  Q   QC   QC   Q   Q>   Q  #mÆ       Q   Q   QA5   ¸   
:  Q;   ¸   
:     QA>6   Q>  Q  }mA5   5   	@HE   QA¸   

:      B  Q  _  #?  QQA5   5   	¸   
A5   : xA5   y   +A5   y   1A5   y   BA5   y   Yz   pA;   6   Q   dAA5     Ë  Ð6   Q   HA5   ¸   
:  QA;   6   Q   &AA5   ¸   
:  6   Q   
     yÆ      Q   Qv   QA5   ¸   
=      : QA5   5      Q   5      ÷Æ      Q   Q  5   ¸   
  5   A5   A5   5     l    Q   LÆ      Qv   QA5   ¸   
=     5   =       : QÈÇ    A5   !   'A¸   !
     A5   A5   : Q      $A5   ¸   "
   : QÈÇÈÇÿÿý·ÈÇ   5   "   ¥   5   "¸   
   5   A5   l Q   LÆ      Qv   QA5   ¸   
=     5   =   #   : QÈÇ    A5   $   #A¸   $
C   A5   A5   : Q   .A5   $   #A¸   $
B   A5   A5   : QA5   ¸   "
:  QA5   ¸   %
=   &A5   =   '   : QA@6   QA;   6   QÈÇ    ã  A5   (ÿÿüzA5   ¸   )
:  QA5   *5   +A5   ,   B  QAA5   .6   -Q   C  QAA5   /6   -Q   'Æ      Qv   QB  QÈÇ         Ú  ?×   Q      A¸   0
:  Q>Æ      Q    mA5   1¸   
:  QA5   2  Ë  ÐQA5   1¸   )
:  QA5   15   3XèA5   4E   #QA5   15   5XèA5   6A5   7   
   (   #?   QQã   A5   8ÿÿÿkÈÇA5   >   ÝÆ      Q   Q;   ¸   
:    Xè   Q;   9¸   :
A5      :    QÆ      Q;   ;5   <¸   =
=   >:    Q   ¸   ?
  : QÈÇ   @Æ   	   Qv   QA5   ¸   %
=   @     : QÈÇ    ÈÇ  >   ïÆ   
   Q   Q   QA5   5   5Xè   Q        QA   A5   BA5   A  A5   B6   AQ;   9¸   C
   A5   A:    QA;   9¸   C
?A5   -   : 6   (QA;   9¸   D
A5   EA5   (: 6   (QA;   9¸   F
A5   (: 6   (QÈÇ;   ¸   
:  A5   G   Q  E   ;Q   A5   HD   )Q  E   Q   A5   ID   Q      Q      ;   J¸   K
:  Q;   ¸   L
A5   5   M: Q;   ¸   N
:  QA5     Ë  ÐQ;   O¸   P
B: QA;   ¸   
:  6   GQ     ;   ¸   
:  Q   B  QÈÇã   ÿÿ÷ÛA¸   0
:  Q      AC6    QA5      Ë  ÐQ   Ì Í ÆÌÕÈÑ( *Û ðÑ
ÌÉÈ(  öÓÈ
HÐ   ¾Ò k  ¢vvvvÊ ÌX×XÑÌXÎÉXXÊÚ
ÛÑÊÑ;ÛË Î #ÓÝË $ÌÒ (ÖD 3Ê   &êÓÝË 8ÌÔ <ÉÔ A J
Ñ
ÙË K

È
Ô öÓ RÑ WEÒ

Ò

ÒÓÏ iÐ
ÌÌ   |  
 p
Ñ
Ñ
Ñ zÏÍÏÎH pÐ ~ oÕ ÈØÌ	ÓØÉCÍÑ É
ÜÓ
êßÕÑÎÓ×ÉÙÉÓ ¢ÉÓË
Ì
Ð
ËÒËÒ?ÌÐ ¶ÛÐÑÑÍÉ
Õ
É ×Ì ÆÌÈÑ    _idleToCommit   GlodaDatastore#   _beginTransaction'   _perfIndexStopwatch   start	   Date   now)   _indexedMessageCount   _callbackHandle   activeIterator   _hireJobWorker	   send   _workBatchData   kWorkSync   kWorkAsync   kWorkDone'   kWorkDoneWithResult   undefined   pop   popWithResult	   _log   debug=   Exception in batch processing:   _curIndexingJob   _workerDef   recover	   call   indexer   contextStack   error   Worker '	   nameE   ' recovery function itself failed:)   _unitTestHookRecover   cleanupC   ' cleanup function itself failed:)   _unitTestHookCleanup	   warn   Problem during    , bailing:   _indexTokens	   stop   _idleService   idleTime7   _INDEX_IDLE_ADJUSTMENT_TIME'   _cpuTargetIndexTime;   _CPU_TARGET_INDEX_TIME_ACTIVE7   _CPU_TARGET_INDEX_TIME_IDLE!   _notifyListeners'   _perfPauseStopwatch   kWorkPause   cpuTimeSeconds#   _CPU_IS_BUSY_TIME   realTimeSeconds   _INDEX_INTERVAL1   _PAUSE_LATE_IS_BUSY_TIME'   _PAUSE_REPEAT_LIMIT	   Math   round   Services   telemetry!   getHistogramByIdG   THUNDERBIRD_INDEXING_RATE_MSG_PER_S   add3   Couldn't report telemetry/   _cpuAverageTimePerToken3   _CPU_AVERAGE_TIME_DAMPING   max   min3   _CPU_MAX_TOKENS_PER_BATCH	   ceil   _lastCommitTime)   _MAXIMUM_COMMIT_TIME)   _MINIMUM_COMMIT_TIME-   GlodaCollectionManager!   cacheCommitDirty   runPostCommit   wrappedCallback%   _commitTransaction   GlodaUtils-   forceGarbageCollection    ÿÿÿÿ          t0      elapsed      doCommit                    ex      workerDef                   recoverToDepth                   ex2                   ex2                    ex                    pauseCount                    delta      v                   h                   e                    totalTime      timePerToken   !   bestTimePerToken       n   *         G                 `  I       Ã            Â          *        0  ?       w     ÿÿÿÿ   Î  f         "  ë         u  :                                N  :         ¯              §          ¾  Ð            ;   	   	   X  .   	   
   £  á       
   s  /  ;  Å     ÿÿÿÿ   3   gloda_index_hireJobWorker                ­      ¹                               )              job   generator¾  ¼Ä  ß            A;   6    QA5   Ù   >   5A5   ¸   
=   : QA@6   QAB6   QA>6   	QBAA5   ¸   

:  6      QA5   	#?
6   	QQ@  QV   5   A5   q     QA5   V   5   7  QV   V  6   QV  5      &V  5   ¸   
V  5   V   l QV  5   ¸   
V  5   V   A5   l W  QÈ   1A5   ¸   
=   V   5   : QA¸   
:  A5      %A5   ¸   
=   V   5   : QA¸   
:  QV     !A5   ¸   
V  : QC   BÌÍÖÈÈÈÎÍÕÐ  Ë
ÕÎ ûÉáÝ þÎàÈàÌÕ    _workBatchData   undefined   _indexQueue   length	   _log	   infoW   --- Done indexing, disabling timer renewal.   _curIndexingJob!   _indexingDesired#   _indexingJobCount   shift   jobType%   _indexerWorkerDefs   _workerDef   onSchedule	   call   indexer   worker   _callbackHandle   error%   Unknown job type:    _hireJobWorker+   _unitTestSuperVerbose   debug'   Hired job of type: !   _notifyListeners	   push    ÿÿÿÿ         workerDef              ÿÿÿÿ   ÿÿÿÿ      glodaIndexJob                 <       ¹                                           	   aJob Å  Å              A5    ¸   
=   T  5   : QA5   ¸   
T  : QAC6   QßÔÈ 	   _log	   info9   Queue-ing job for indexing:    jobType   _indexQueue	   push   indexing   ÿÿÿÿ   5   GlodaIndexer.killActiveJobÁ                 Ó       ¹      >                                         workerDefyÉ  Ì  1      
      A5        A5    5      QA5      'A5   ¸   
=   A5    5   : QA5      7A¸   
V   5      C   B=   	A5    A5   
: QA5   
¸   
:  QV   5      (V   5   ¸   
V   5   A5    l QA@6    QÐâÑÌ ;ÑÉãÈ    _curIndexingJob   _workerDef+   _unitTestSuperVerbose	   _log   debug+   Killing job of type:    jobType)   _unitTestHookCleanup   cleanupI   no exception, this was killActiveJob   _callbackHandle	   call   indexer   ÿÿÿÿ   C   GlodaIndexer.purgeJobsUsingFilterÁ                ð       ¹      E                                     aFilterElimFunc jÎ  ÇÐ  Q      
      >   Q    Ðm  QA5    V   7  QT  V  :      QA5      %A5   ¸   
=   V  5   : QA5    ¸   
V   #?W   Q?: QA5   V  5   7  QV  5      &V  5   ¸   	
V  5   
V  l QÈÈV   #?W   QQãV   A5    Ù   ÿÿÿ#È&  Ð  Â  â2
ÐÈ
Ë
àßÕÉ
ã R7ÎÿÿÿàØ)    _indexQueue+   _unitTestSuperVerbose	   _log   debug+   Purging job of type:    jobType   splice%   _indexerWorkerDefs   jobCanceled	   call   indexer   length    ÿÿÿÿ       	   iJob                     job                    workerDef           â          î   ÿÿÿÿ      »          4            ÿÿÿÿ   +   gloda_indexer_observe                 ¹       ¹      A                                        aSubject   aTopic   aData   $Ñ  îÓ  c            T =       _A5      OAB6   Q;   ¸   
:  Q;   ¸   
:  QA;   ¸   
:  6   QA¸   	
:  Q   UT =   
   -T =      AC6   Q   AB6   Q   T =      A¸   
:  QÉZÈÐÐÍÉÑÉ(ÉÍÍÉÌ 	   idle   _idleToCommit-   GlodaCollectionManager!   cacheCommitDirty   GlodaDatastore%   _commitTransaction   _lastCommitTime	   Date   now!   _notifyListeners=   network:offline-status-changed   offline!   suppressIndexing!   quit-application   _shutdown