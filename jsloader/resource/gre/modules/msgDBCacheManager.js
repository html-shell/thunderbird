çżsš                (  #   š                                            resource://gre/modules/msgDBCacheManager.js     í                                      f        Q;   5      Q;   5      Q;   5      Q;   ¸   
=   	: Q;   ¸   
=   
: Q;   ¸   
=   : Qn   ;   ¸   
=   : o   QXę`   Qn   Y   B]   @]   ;   ]      ]      ]      ]      ]      ]      ]   o   QËĐĐĐŐ1Ő1Ő2ÖÉ˙˙˙ýÉ "Ę'Ę8Ę?ĘPĘ]ĘiĐ !   EXPORTED_SYMBOLS   Cc   Components   classes   Ci   interfaces   Cu   utils   importG   resource:///modules/mailServices.jsG   resource://gre/modules/Services.jsmI   resource:///modules/gloda/log4moz.js   log   Log4Moz'   getConfiguredLogger3   mailnews.database.dbcache7   DBCACHE_INTERVAL_DEFAULT_MS#   msgDBCacheManager   _initialized!   _msgDBCacheTimer5   _msgDBCacheTimerIntervalMS	   init5   _dbCacheCheckTimerCallback   observe#   stopPeriodicCheck%   startPeriodicCheck   checkCachedDBs                  #   msgDBCacheManager                  ˙˙˙˙      dbcachemgr_init                   >       š                                            Ô  3  '             A5       ;   5   ¸   
A=   B: QA¸   
:  QAC6    Q/Ü1Ě3Č    _initialized   Services   obs   addObserver1   quit-application-granted%   startPeriodicCheck   ˙˙˙˙   5   dbCache_CheckTimerCallback                          š                                            Ś  Ř  8             ;    ¸   
:  QĐ# #   msgDBCacheManager   checkCachedDBs   ˙˙˙˙      dbCache_observe                 @       š                                              aSubject   aTopic   aData   <  č  ?             T x=    y   
z   1;   5   ¸   
A=    : QA¸   
:  Q   k<DuĘŰĚX 1   quit-application-granted   Services   obs   removeObserver#   stopPeriodicCheck   ˙˙˙˙   3   dbcache_stopPeriodicCheck                   ,       š                                            s  	  P             A5       %A5    ¸   
:  QA%    QA@6    QŃUČ %   _dbCacheCheckTimer   cancel   ˙˙˙˙   5   dbcache_startPeriodicCheck                   ^       š   
   "                                      	  6  ]             A5        VA;   5   ¸   
;   5   : 6    QA5    ¸   
A5   A5   ;   5   5   	: QŇĘ` ÉcÍĎcfE %   _dbCacheCheckTimer   Cc)   @mozilla.org/timer;1   createInstance   Ci   nsITimer!   initWithCallback5   _dbCacheCheckTimerCallback5   _msgDBCacheTimerIntervalMS)   TYPE_REPEATING_SLACK   ˙˙˙˙   A   msgDBCacheManager.checkCachedDBsÁ                ď      š   )                          \              gDbService   idleLimit   maxOpenDBs   closeThreshold   cachedDBs   numOpenDBsT  č  i             ;    5   ¸   
;   5   :    Q;   5   ¸   
=   :   Q;   5   ¸   
=   	:   Q;   
¸   
:  V  Xč  QV   5     Q;   ¸   
=   V  Ů   : Q>  Q>  Q   .m  QV  ¸   
V  ;   5   :   QV  5   5       /;   ¸   
=   V  5   5   : QČ   ş;   5   ¸   
V  5   :    =;   ¸   
=   V  5   5   : QV  #?W  QQČ   `V  5   V     >;   ¸   
=   V  5   5   : QV  5   @6   Q   V  #?W  QQČV  #?W  QQăV  V  Ů   ˙˙ţÇČV   5   W  Q;   ¸   
=   V  : QV  V    Ă  Q  QZ     Q>  Q    bm  	QV  ¸   
V  ;   5   :   	QV  	5   5      V  ¸    
V  	: QČV  #?W  QQăV  V  Ů   ˙˙˙ČV  ¸   !
   : QV  Ů   V    QV  >   ü;   ¸   
=   "V  =   #: QV  - Á
:    Q   §m5   $W  Q;   5   ¸   
V  5   :    .;   ¸   
=   %V  5   5   : Q   P;   ¸   
=   &V  5   5   : QV  5   @6   QV  #?W  >   
   ăQ¸   '
:  5   (˙˙˙JČ Č
ŃĘkČnÖČÖČsĚŃÎß& .   >"
ŮČ
ĎäA~Ú
äÎAÎ9äŐĎw*Î˙˙˙ęÖ  ÎÚÉŃ  
É&bTr"ŮČÎ
Ô  ,Î˙˙˙ęÖ  Ô
ÓŕÓ8  ťŃÚä@
ä
ĐÍH  Ë˙˙˙ńÓ  "    CcO   @mozilla.org/msgDatabase/msgDBService;1   getService   Ci   nsIMsgDBService   Services   prefs   getIntPref%   mail.db.idle_limit!   mail.db.max_open	   Date   now   openDBs   log	   infoI   periodic check of cached dbs, count=   length   queryElementAt   nsIMsgDatabase   folder   databaseOpen   debugM   skipping cachedDB not open in folder: 	   name   MailServices   mailSession)   IsFolderOpenInWindow;   folder open in window, name:    lastUseTimeQ   closing expired msgDatabase for folder:    msgDatabase   open db count 	   push	   sort!   trying to close     databases   valueK   not closing db open in window, name: /   closing db for folder: 	   next	   done    ˙˙˙˙         i                     db        ˙˙˙˙         dbs       dbsToClose                    i              	      db             E   msgDBCacheManager.checkCachedDBs/<á                        š                                              a   b    ş               T  5    T 5    Ň    lastUseTime                db       .  ť       Q  r       ť   >      °   J  ˙˙˙˙   ˝                         v           2  ź  ˙˙˙˙   F  ~         S  M         $  Ć      