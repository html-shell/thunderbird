ç¿s¹                Ó  -   ¹   &   Ï       
                   #            resource:///modules/activity/glodaIndexer.js     v#                                   
         f        Q;   5      Q;   5      Q;   5      Q;   5   	   Q;   ¸   
=   =   =   :    
Q;   ¸   
=   =   =   :    Q;   ¸   
=   =   =   :    Q;   ¸   
=   : Q;   ¸   
=   : Q;   ¸   
=   : Q;   ¸   
=   : Q;   ¸   
=   : Q;   ¸   
=   : Qn   Y      a      a      a      ]       ]   @]   !   ]   "   ]   #   ]   $   	]   %o   QËÐÐÐÐÑÊÉÿÿÿýÑÊÉÿÿÿûÑÊÉÿÿÿýÕ1Õ3Õ3Õ2Õ1Õ2Ê%Ê+Ê1Ê:ÊUWÊwÊ  Ê  ®Ð !   EXPORTED_SYMBOLS   Cc   Components   classes   Ci   interfaces   Cr   results   Cu   utils   nsActProcess   Constructor?   @mozilla.org/activity-process;1%   nsIActivityProcess	   init   nsActEvent;   @mozilla.org/activity-event;1!   nsIActivityEvent   nsActWarning?   @mozilla.org/activity-warning;1%   nsIActivityWarning   importG   resource://gre/modules/Services.jsmK   resource://gre/modules/XPCOMUtils.jsmK   resource://gre/modules/PluralForm.jsmI   resource:///modules/gloda/log4moz.jsG   resource:///modules/gloda/public.jsI   resource:///modules/gloda/indexer.js)   glodaIndexerActivity   log   activityMgr   bundle   getString   currentJob   listener   onJobBegun   onJobProgress   onJobCompleted                  )   glodaIndexerActivity                  ÿÿÿÿ   1   glodaIndexerActivity.logÁ                   #       ¹                                                               A%    QA;   ¸   
=   : 6    ÒÉ4    log   Log4Moz'   getConfiguredLogger)   glodaIndexerActivity   ÿÿÿÿ   A   glodaIndexerActivity.activityMgrÁ                   -       ¹                                              I  %             A%    QA;   5   ¸   
;   5   : 6    ÒÊ'ÉC    activityMgr   Cc?   @mozilla.org/activity-manager;1   getService   Ci%   nsIActivityManager   ÿÿÿÿ   7   glodaIndexerActivity.bundleÁ                   (       ¹                                            X  è  +             A%    QA;   5   ¸   
=   : 6    Ò-ÉE    bundle   Services   strings   createBundle[   chrome://messenger/locale/activity.properties   ÿÿÿÿ   =   glodaIndexerActivity.getStringÁ                M       ¹                                           stringName    È  1             A5    ¸   
T  :    7   Qv   QA5   ¸   
=   T  : QV   pÈ    ÐÉÌÚÌ    bundle#   GetStringFromName   log   errorK   error trying to get a string called:     ÿÿÿÿ          e                      +   ÿÿÿÿ   ÿÿÿÿ   3   glodaIndexerActivity.initÁ                        ¹                                              listenerWrapperÛ  w	  :                 W   Q;    ¸   
V   : Q>Ê:>AÔ*    GlodaIndexer   addListener   ÿÿÿÿ      listenerWrapper                 %      ¹                                              argumentsé  C	  >             	W   Q;    5   ¸   
;    V   O QÞE )   glodaIndexerActivity   listener   apply   ÿÿÿÿ   ;   glodaIndexerActivity.listenerÁ                       ¹      7                                        aStatus   aFolder   aJobNumber   aItemNumber   aTotalItemNum   aJobType      d  /  W             A5    ¸   
=   T =   T  : QA5    ¸   
=   T : QA5    ¸   
=   T =   T : QT  ;   5      !A5      A¸   	
:  Q   tA5   E   QT A5   5   
   A¸   	
:  QA5       A¸   
T T T T : QT ?   A¸   
T T T : QYäÚä^ÎÑdhÛÌn
ØrÕ8    log   debug;   Gloda Indexer Folder/Status:    /'   Gloda Indexer Job: )   Gloda Indexer Item:    Gloda   kIndexerIdle   currentJob   onJobCompleted   jobNumber   onJobBegun   onJobProgress   ÿÿÿÿ   ?   glodaIndexerActivity.onJobBegunÁ               ñ       ¹      N                                        aFolder   aJobNumber   aTotalItemNum   aJobType   displayText   process    H  Ö  w             T     ,A¸    
=   : ¸   
=   T  :    A¸    
=   :    Q;   V   ;   R   QV  =   6   QV  =   
6   	QV  T  6   QV  ¸   
T  : QAY   T  ]   T ]   V  ]   ;   R  ]   T ]   T ]   6   QA5   ¸   
V  : Q'ÒÚÍÈÏ
È}ÏÏÍÒÈÈÉÈÈÎÕ&    getString   indexingFolder   replace   #1   indexing   nsActProcess   Gloda   iconClass   indexMail   contextType   account   contextObj   addSubject   currentJob   folder   jobNumber   process	   Date   startTime   totalItemNum   jobType   activityMgr   addActivity   ÿÿÿÿ   E   glodaIndexerActivity.onJobProgressÁ              y      ¹                                             aFolder   aItemNumber   aTotalItemNum   statusText   ò  Í               A5    5   ;   5   5   6   QA5    T  6   QA5    T 6   Q   QT @   NT     ,A¸   
=   	: ¸   

=   T  :    A¸   
=   : W   Q   Æ  QT >   ×d   ;   â   T T ×d:   QA¸   
T     =      
=   : W   Q;   ¸   
T V   : ¸   

=   T ?: ¸   

=   T : ¸   

=   V  : ¸   

=   T  : W   QÈA5    5   ¸   
V   T T : QàÏÏI'ÒÊÈ  ÈÍÍ
à#ÈË
Ï  ¢ÈÓÊÊ  ¤ÊÈ  ¤ÊÉ  ¤ÊÈ  ¤É  «àL    currentJob   process   state   Ci%   nsIActivityProcess!   STATE_INPROGRESS   folder   totalItemNum   getString3   indexingFolderStatusVague   replace   #1'   indexingStatusVague   parseInt3   indexingFolderStatusExact'   indexingStatusExact   PluralForm   get   #2   #3   #4   setProgress    ÿÿÿÿ         percentComplete           À   ÿÿÿÿ   ÿÿÿÿ   G   glodaIndexerActivity.onJobCompletedÁ                ¨      ¹   $   Å                        G              totalItemNumê  q#  ®             A5    5   ;   5   5   6   QA5   ¸   
A5    5   5   : QA5    5   	D   Q>   QA5    5   
=   E   QA5    5   E   QV   >    Q  Q  Q  Q  Q  Q;   ¸   
V   A¸   
=   : : ¸   
=   V   : ¸   
=   A5    5   :   Q;   R    Q;   â   V  A5    5   Xè:   Q;   ¸   
V  A¸   
=   : : ¸   
=   V  :   Q;   V  ;   V  A5    5   V  R   QV  A5    5   6   QV  A5    5   6   QV  =   6   QA5    5   ¸   
Y   :   Q;   â   V  : K  Q   mm- Á
:  ¸   
:  5       Q   
5   !Q¸   
:  5       Q   
5   !W  QQV  ¸   "
V  : QãQLMÿÿÿQNÈA5   ¸   #
V  : QÈA@6    Qàá  ¶×  ¿××é
ÐÍ'  ÄÊÉ  ÄÊÐ  ÄÈ  É

È
ÞÈ
ÐÍ&  ÌÊÉ  ÌÈ
ÊË  ÐÈ  ÕÕÕÏ
×ÈÎ#Ì0r×ÿÿÿñÉã×àÖÈ    currentJob   process   state   Ci%   nsIActivityProcess   STATE_COMPLETED   activityMgr   removeActivity   id   totalItemNum   jobType   folder   PluralForm   get   getString   indexedFolder   replace   #1   #2	   Date   parseInt   startTime'   indexedFolderStatus   nsActEvent   Gloda   contextType   contextObj   iconClass   indexMail   getSubjects   Iterator	   next	   done   value   addSubject   addActivity    ÿÿÿÿ         displayText       endTime       secondsElapsed       statusText       event       subjects                     subject         s            ÿÿÿÿ   
         