çżsš                Ř  #   š   ^         (                   %            resource://gre/components/nsFormHistory.js     ˛r         	                              [;   5       Q;   5      Q;   5      Q;   5   ¸   
=   	: Q;   5   ¸   
=   
: Q;   ¸   
A=   =   : Q×   QŘ&\    Q;   Y   ;   ¸   
=   : ]   ;   ¸   
Z  ;   5   `   ;   5   `  ;   5   `  ;   5   `  : ]   C]   C]   Y   Y   Y   =   ]   =    ]   !=    ]   "=   #]   $=   #]   %=   #]   &=   ']   (]   )Y   =   ]   =   #]   *=   ']   (]   +]   ,Y   Y   =   )]   -f   ]   .]   /Y   =   )]   -f   ]   .]   0Y   =   )]   -f   ]   .]   1]   2]   3@]   4@]   5@]   6   a   7   ]   8   ]   9   a   :   ]   ;   	]   <   
]   =   ]   >   ]   ?   ]   @   ]   A   ]   B   a   C   a   D   ]   E   ]   F   ]   G   ]   H   ]   I   ]   J   ]   K   ]   L   ]   M   ]   N   ]   O   ]   P   ]   Q   ]   R    ]   S   !]   T   "]   U   #]   V   $]   W   %]   X   &]   Y   ']   Z6   Qn   [Z  ;   `   o   [QA;   ¸   ]
;   [: 6   \QĘ	 hĐĐĐ
ÚAÚ?ŇKČ
Ë	ĘŃČĐ*Î.Î.Î.ÎČ"&ĘĘĘĘĘĘĎ1ĘĘÔ7ĘĎ<ĘĎ@ĘŮFIĘQĘYĘeĘjĘ  ŠĘ  ŃĘ  ůĘ Ę .Ę 5Ę _ĘĘ }Ę Ę Ę ¨Ę ŔĘ ×Ę ÜĘ ÷Ę Ę Ę 1Ę ?Ę MĘ _Ę eĘ Ę ÁĘ ĐĘ Ę Ę 'Ę ;Ę ZĐ fÉĎ˙˙˙üŇÉ+    Cc   Components   classes   Ci   interfaces   Cr   results   utils   importK   resource://gre/modules/XPCOMUtils.jsmG   resource://gre/modules/Services.jsm   XPCOMUtils-   defineLazyModuleGetter   DeprecatedK   resource://gre/modules/Deprecated.jsm   DB_VERSION   DAY_IN_MS   FormHistory   prototype   IDM   {0c1bb408-71a2-403f-854a-3a0659829ded}   classID   generateQI   nsIFormHistory2   nsIObserver%   nsIMessageListener1   nsISupportsWeakReference   QueryInterface   debug   enabled'   INTEGER PRIMARY KEY   id   TEXT NOT NULL   fieldname   value   INTEGER   timesUsed   firstUsed   lastUsed	   TEXT	   guid   moz_formhistory   timeDeleted/   moz_deleted_formhistory   tables   table   columns+   moz_formhistory_index=   moz_formhistory_lastused_index5   moz_formhistory_guid_index   indices   dbSchema   dbStmts   dbFile   _uuidService   uuidService   log	   init   hasEntries   addEntry   removeEntry)   removeEntriesForName!   removeAllEntries   nameExists   entryExists1   removeEntriesByTimeframe%   moveToDeletedTable   dbConnection   DBConnection   observe   generateGUID-   sendStringNotification'   sendIntNotification!   sendNotification%   getExistingEntryID   countAllEntries   updatePrefs#   dbCreateStatement   dbOpen   dbInit   dbCreate   dbCreateTable   dbMigrate'   dbMigrateToVersion1'   dbMigrateToVersion2'   dbMigrateToVersion3'   dbMigrateToVersion47   dbAreExpectedColumnsPresent   dbColumnExists   _dbClose   dbCleanup   component   NSGetFactory)   generateNSGetFactory   ˙˙˙˙      FormHistory                   '       š                                              W               ;    ¸   
=   =   : QA¸   
:  QĚĚ    Deprecated   warning   nsIFormHistory2 is deprecated and will be removed in a future versiong   https://bugzilla.mozilla.org/show_bug.cgi?id=879118	   init                     fieldname                                    lastUsed                                 	   guid                  ˙˙˙˙   C   FormHistory.prototype.uuidServiceÁ                   9       š                                             
  Ň
  J             A5        *A;   5   ¸   
;   5   : 6    QA5    ŇĘL ÉN    _uuidService   Cc;   @mozilla.org/uuid-generator;1   getService   Ci!   nsIUUIDGenerator   ˙˙˙˙      log                 J       š                                              message ë
    Q             A5        ;   â   =   T  =   : Q;   5   ¸   
=   T  : QÝŢ=    debug	   dump   FormHistory:    
   Services   console!   logStringMessage   ˙˙˙˙   	   init                   5       š                                            ť  ]  Y             A¸    
:  QAY   6   Q;   5   ¸   
A=   C: QĚ\Ě_Ü>    updatePrefs   dbStmts   Services   obs   addObserver+   profile-before-change   ˙˙˙˙   A   FormHistory.prototype.hasEntriesÁ                          š      	                                      Ł  Ú  e             A¸    
:  >Č    countAllEntries   ˙˙˙˙      addEntry                    š      Ĺ                        (          	   name   value   now   id	   guid	   stmt  ţ  
  j             A5        A¸   
=   T  =   T : Q;   ¸   
:  Xč   QA¸   
T  T : - Á
:  ¸   
:  5      Q   
5   	  Q¸   
:  5      Q   
5   	  QQQ  QV  ×˙   ×  Q  Q=   
  QY   V   ]   V  ]     QA¸   
V  V  : W  QV  ¸   
:  QA¸   
=   T  T V  : Qt   <   R  Qv  QA¸   
=   V  : QV  pČt   
    V     V  ¸   
:  Qu Č    Q  QA¸   
:  W  Q=     QY   T  ]   T ]   	?]   V   ]   V   ]   V  ]     QA¸   
V  V  : W  QV  ¸   
:  QA¸   
=   T  T V  : Qt   <   R  Qv  QA¸   
=   V  : QV  pČt   
    V     V  ¸   
:  Qu ČnßpĚĚrÎÔ˙˙˙óÉçŘu  ŇŃwĘÉÎ}HĐČĎĺĚÖĐ×ĚČČĘČČÉÉÎHĐČĎĺĚÖĐŇ  '    enabled   log   addEntry for    =	   Date   now%   getExistingEntryID	   next	   done   valueł   UPDATE moz_formhistory SET timesUsed = timesUsed + 1, lastUsed = :lastUsed WHERE id = :id   lastUsed   id#   dbCreateStatement   execute-   sendStringNotification   modifyEntry5   addEntry (modify) failed:    reset   generateGUID5  INSERT INTO moz_formhistory (fieldname, value, timesUsed, firstUsed, lastUsed, guid) VALUES (:fieldname, :value, :timesUsed, :firstUsed, :lastUsed, :guid)   fieldname   timesUsed   firstUsed	   guid   addEntry5   addEntry (create) failed:     ˙˙˙˙         query       params                     e        ˙˙˙˙         query       params                    e        ő  ~        ő  L       ô   ~        ô   L       Ă   Ë   ˙˙˙˙   A  '            ú   ˙˙˙˙   B  '         ˙˙˙˙      removeEntry              ţ      š                              *          	   name   value   id	   guid	   stmt   query   params;   existingTransactionInProgress  4  Ň  Š             A¸    
=   T  =   T : QA¸   
T  T : - Á
:  ¸   
:  5      Q   
5      Q¸   
:  5      Q   
5     QQQA¸   
=   T  T V  : Q  Q=   	  QY   V   ]   
  Q  QA5   5   W  QV      A5   ¸   
:  QA¸   
=   Y   V  ]   ;   ¸   
:  ]   : QA¸   
V  V  : W  QV  ¸   
:  QA¸   
=   T  T V  : Qt   W   m  Qv  QV      A5   ¸   
:  QA¸    
=   V  : QV  pČt   
    V     V  ¸   
:  Qu V      A5   ¸   
:  QßÎÔ˙˙˙óÉçŘŰĘÎ  ŚĐŃŇÉĚČ  š  żĐČĎĺĚŃÖĐŃŃ&    log!   removeEntry for    =%   getExistingEntryID	   next	   done   value-   sendStringNotification%   before-removeEntryU   DELETE FROM moz_formhistory WHERE id = :id   id   dbConnection+   transactionInProgress!   beginTransaction%   moveToDeletedTable9   VALUES (:guid, :timeDeleted)	   guid	   Date   now   timeDeleted#   dbCreateStatement   execute   removeEntry'   rollbackTransaction)   removeEntry failed:    reset#   commitTransaction    ˙˙˙˙         e        Î   ÷        Î   Ş       y  B   ˙˙˙˙   ˙˙˙˙   )   removeEntriesForName              z      š                                        	   name	   stmt   query   params;   existingTransactionInProgress   Ľ   Ń             A¸    
=   T  : QA¸   
=   T  : Q   Q=     QY   T  ]     Q  QA5   5   W  QV      A5   ¸   
:  QA¸   	
=   
Y   T  ]   ;   ¸   
:  ]   : QA¸   
V  V  : W   QV   ¸   
:  QA¸   
=   T  : Qt   W   m  Qv  QV      A5   ¸   
:  QA¸    
=   V  : QV  pČt   
    V      V   ¸   
:  Qu V      A5   ¸   
:  QŐÔĘÍ  ĐŃČČĚČ  ŕ  çĐČĎŢĚŃÖĐŃŃ&    log?   removeEntriesForName with name=-   sendStringNotification7   before-removeEntriesForNameq   DELETE FROM moz_formhistory WHERE fieldname = :fieldname   fieldname   dbConnection+   transactionInProgress!   beginTransaction%   moveToDeletedTable   SELECT guid, :timeDeleted FROM moz_formhistory WHERE fieldname = :fieldname	   Date   now   timeDeleted#   dbCreateStatement   execute)   removeEntriesForName'   rollbackTransaction;   removeEntriesForName failed:    reset#   commitTransaction    ˙˙˙˙         e        R   ď        R   ˘       ő   B   ˙˙˙˙   ˙˙˙˙   !   removeAllEntries                *      š      ^                                   	   stmt   query;   existingTransactionInProgressŮ   %  ů             A¸    
=   : QA¸   
=   @: Q   Q=     Q  QA5   5   W  QV      A5   ¸   
:  QA¸   
V  : W   QV   ¸   	
:  QA¸   
=   @: Qt   W   m  Qv  QV      A5   ¸   

:  QA¸    
=   V  : QV  pČt   
    V      V   ¸   
:  Qu V      A5   ¸   
:  QŃŇĘfĐŃĚČĎÜĚŃÖĐŃŃ&    log!   removeAllEntries!   sendNotification/   before-removeAllEntries7   DELETE FROM moz_formhistory   dbConnection+   transactionInProgress!   beginTransaction#   dbCreateStatement   execute'   rollbackTransaction3   removeAllEntries failed:    reset#   commitTransaction    ˙˙˙˙         e        :   ˇ        :   j       Ľ   B   ˙˙˙˙   ˙˙˙˙      nameExists              Đ       š   
   9                                  	   name	   stmt   query   params Ť%  â'              A¸    
=   T  : Q   Q=     QY   T  ]     QA¸   
V  V  : W   QV   ¸   
:  QV   5   5   >t   Bt   <   R  Qv  QA¸    
=   V  : QV  pČt   
    V      V   ¸   	
:  Qu ŐĘÍDĐČĎáĚÖĐŃ    log)   nameExists for name=   SELECT COUNT(1) AS numEntries FROM moz_formhistory WHERE fieldname = :fieldname   fieldname#   dbCreateStatement   executeStep   row   numEntries'   nameExists failed:    reset    ˙˙˙˙         e        8   z        8   H          '   ˙˙˙˙   ˙˙˙˙      entryExists               ¨       š      "                                     	   name   value   id	   guid  (  ŕ(  .      	      A¸    
=   T  =   T : QA¸   
T  T : - Á
:  ¸   
:  5      Q   
5      Q¸   
:  5      Q   
5     QQQA¸    
=   V   : QV   ×˙ßÎÔ˙˙˙óÉçŘÖČ    log!   entryExists for    =%   getExistingEntryID	   next	   done   value!   entryExists: id=   ˙˙˙˙   1   removeEntriesByTimeframe                    š                                           beginTime   endTime	   stmt   query   params;   existingTransactionInProgress  #)  /  5            A¸    
=   T  =   T : QA¸   
=   T  T : Q   Q=     QY   T  ]   T ]     Q  QA5   5   	W  QV      A5   ¸   

:  QA¸   
=   Y   T  ]   T ]   : QA¸   
V  V  : W   QV   ¸   
:  QA¸   
=   T  T : Qt   W   m  Qv  QV      A5   ¸   
:  QA¸    
=   V  : QV  pČt   
    V      V   ¸   
:  Qu V      A5   ¸   
:  Qß×ĘČÍ  ĐŃČČČ G NĐČĎáĚŃÖĐŃŃ&    log;   removeEntriesByTimeframe for 	    to '   sendIntNotification?   before-removeEntriesByTimeframe§   DELETE FROM moz_formhistory WHERE firstUsed >= :beginTime AND firstUsed <= :endTime   beginTime   endTime   dbConnection+   transactionInProgress!   beginTransaction%   moveToDeletedTableÍ   SELECT guid, :timeDeleted FROM moz_formhistory WHERE firstUsed >= :beginTime AND firstUsed <= :endTime#   dbCreateStatement   executeStep1   removeEntriesByTimeframe'   rollbackTransactionC   removeEntriesByTimeframe failed:    reset#   commitTransaction    ˙˙˙˙         e        g   ć        g            B   ˙˙˙˙   ˙˙˙˙   %   moveToDeletedTable                        š                                                values   params  Ň/  f0  _             F    ˙˙˙˙   E   FormHistory.prototype.dbConnectionÁ                  5      š      P                        '           }0  ú3  c      	      ;    5   %   QA;   5   ¸   
=   ;   5   	: ¸   

:  6   QA5   ¸   
=   : QA¸   
=   A5   5   : Q;    5   A¸   
:  6   QA¸   
:  Q      Qv   QA¸   
=   V   : QV   5   ;   5      =A¸   
:  Q;    5   A¸   
:  6   QA¸   
:  Q   =   pČ    ;    5   5   Đ  áÓÖÝŇ%ÉŃĚÖÔ8ĚŇ%ÉŃÍĐ*    FormHistory   prototype   dbConnection   dbFile   Services   dirsvc   get   ProfD   Ci   nsIFile   clone   append%   formhistory.sqlite   log)   Opening database at 	   path   dbOpen   dbInit/   Initialization failed:    result   Cr/   NS_ERROR_FILE_CORRUPTED   dbCleanup+   Initialization failed    ˙˙˙˙          e                   Ľ   y   ˙˙˙˙   ˙˙˙˙   E   FormHistory.prototype.DBConnectionÁ                          š                                            4  =4  }            A5        dbConnection   ˙˙˙˙      observe                 [       š      *                                        subject   topic	   data   4  Ý5              T x=    y   =   y   z   (A¸   
:  Q   1A¸   
B: Q   A¸   
=   T : Q   kWu
uĘ ĚXÍXŐX	    nsPref:changed+   profile-before-change   updatePrefs   _dbClose   log?   Oops! Unexpected notification:    ˙˙˙˙   E   FormHistory.prototype.generateGUIDÁ                ç       š   	   ]                                   	   uuid   raw   bytes6  *8              A5    ¸   
:  ¸   
:     Q=     Q>  Q?  Q    m  QV   V  7=      V  #?W  QQ;   â   V   V  7V   V  ?7×:   QV  ;   ¸   
V  : W  QV  #?W  QQČV  ×W  QăV  ×˙˙˙mČ;   â   V  : ÍŇĘ&      ĎÎá	ČÔ{Ď %~  Ď ¤Î
    uuidService   generateUUID   toString      -   parseInt   String   fromCharCode	   btoa    ˙˙˙˙         i                     hexVal        ;          0   ¤   ˙˙˙˙   =   |          ˙˙˙˙   Y   FormHistory.prototype.sendStringNotificationÁ             Ä      š      U                                      changeType	   str1	   str2	   str3   wrapit   arguments   strData    T8  ;  ¨      	      	W  Q    W   Q  QV  Ů    ×   V   T : W  Q   y;   5   ¸   
;   5   : W  QV  ¸   
V   T : B: QV  ¸   
V   T : B: QV  ¸   
V   T : B: QA¸   
T  V  : QĘ ¨ °ĚČ
ÍŃĘ śČÓ˙˙˙ęÓ˙˙˙ęÓ˙˙˙ęÓ+    length   Cc)   @mozilla.org/array;1   createInstance   Ci   nsIMutableArray   appendElement!   sendNotification   ˙˙˙˙      wrapit               6       š                                              str   wrapper 8  Y9  Š            ;    5   ¸   
;   5   :    QV   T  6   QV   ŃĘ ŞČÍ    Cc=   @mozilla.org/supports-string;1   createInstance   Ci#   nsISupportsString	   data   ˙˙˙˙   S   FormHistory.prototype.sendIntNotificationÁ             Š      š      J                                      changeType	   int1	   int2   wrapit   arguments   intData   ´;  ˘>  Ŕ      	      	W  Q    W   Q  QV  Ů    ×   V   T : W  Q   ^;   5   ¸   
;   5   : W  QV  ¸   
V   T : B: QV  ¸   
V   T : B: QA¸   
T  V  : QĘ Ŕ ČĚČ
ÍŃĘ ÎČÓ˙˙˙ęÓ˙˙˙ęÓ+    length   Cc)   @mozilla.org/array;1   createInstance   Ci   nsIMutableArray   appendElement!   sendNotification   ˙˙˙˙      wrapit               6       š                                              int   wrapper ć;  ľ<  Á            ;    5   ¸   
;   5   :    QV   T  6   QV   ŃĘ ÂČÍ    Cc?   @mozilla.org/supports-PRInt64;1   createInstance   Ci%   nsISupportsPRInt64	   data   ˙˙˙˙   M   FormHistory.prototype.sendNotificationÁ                 !       š                                              changeType	   data  Ć>  3?  ×            ;    5   ¸   
T =   T  : QŕJ    Services   obs   notifyObservers/   satchel-storage-changed   ˙˙˙˙   Q   FormHistory.prototype.getExistingEntryIDÁ              ř       š      R                                  	   name   value   id	   guid	   stmt   query   params  Y?  9B  Ü            ×˙   Q@  Q  Q=      QY   T  ]   T ]     QA¸   
V  V  : W  QV  ¸   
:     +V  5   5   W   QV  5   5   W  Qt   <   R  Qv  QA¸   
=   	V  : QV  pČt   
    V     V  ¸   

:  Qu Z  V   `   V  `  	ĘČÍWĐČËÓÝĚÖĐŃČÉ Š   SELECT id, guid FROM moz_formhistory WHERE fieldname = :fieldname AND value = :value   fieldname   value#   dbCreateStatement   executeStep   row   id	   guid   log7   getExistingEntryID failed:    reset    ˙˙˙˙         e        8           8   [          '   ˙˙˙˙   ˙˙˙˙   K   FormHistory.prototype.countAllEntriesÁ                Ă       š   	   <                                      query	   stmt   numEntries\B  D  ÷            =       Q  Q  QA¸   
V   @: W  QV  ¸   
:  QV  5   5   W  Qt   <   R  Qv  QA¸   
=   V  : QV  pČt   
    V     V  ¸   
:  Qu A¸   
=   V  : QV  Ę=ÍČĎÝĚÖĐŃÖ e   SELECT COUNT(1) AS numEntries FROM moz_formhistory#   dbCreateStatement   executeStep   row   numEntries   log1   countAllEntries failed:    resetE   countAllEntries: counted entries:     ˙˙˙˙         e           s           A       Y   '   ˙˙˙˙   ˙˙˙˙   C   FormHistory.prototype.updatePrefsÁ                   A       š                                            ŚD  YE              A;   5   ¸   
=   : 6    QA;   5   ¸   
=   : 6   Q×É×É6    debug   Services   prefs   getBoolPref-   browser.formfill.debug   enabled/   browser.formfill.enable   ˙˙˙˙   O   FormHistory.prototype.dbCreateStatementÁ                     š      +                        
             query   params	   stmt  ŚF  ~H              A5    T  7   QV       AA¸   
=   T  : QA5   ¸   
T  : W   QA5    T  V   8QT    ?T K  Q   !mW  V   5   V  T V  78QăQLM˙˙˙ßQNČV   ĎŐĐČĎĚ0&Ęä    dbStmts   logE   Creating new statement for query:    dbConnection   createStatement   params    ˙˙˙˙         i       n   '       d   3   ˙˙˙˙   ˙˙˙˙   9   FormHistory.prototype.dbOpenÁ                 J       š   	                                            storage%I  úI  1            A¸    
=   : Q;   5   ¸   
;   5   :    QV   ¸   
A5   : ŃŃĘ 4ČŃ"    log   Open Database   Cc=   @mozilla.org/storage/service;1   getService   Ci%   mozIStorageService   openDatabase   dbFile   ˙˙˙˙   9   FormHistory.prototype.dbInitÁ                 y       š   	   #                                         versionłJ  cL  ?            A¸    
=   : QA5   5      QV   >E   QA5   ¸   
=   :     A¸   
:  Q   $V   ;      A¸   
V   : QŃĐĚŇŃĘĐ    log+   Initializing Database   dbConnection   schemaVersion   tableExists   moz_formhistory   dbCreate   DB_VERSION   dbMigrate   ˙˙˙˙   =   FormHistory.prototype.dbCreateÁ                  5      š      9                                   ~L  űN  M            A¸    
=   : QA5   5   K   Q   :mW     QA5   5   V   7  QA¸   
V   V  : QČăQLM˙˙˙ĆQNČA¸    
=   : QA5   5   K   Q   mW     Q  QA5   5   V   7  Q=   V   =   V  5   	=   
V  5   ¸   
=   : =     QA5   ¸   
V  : QČăQLM˙˙˙{QNČA5   ;   6   QŃÔ0?ĐŐâŃÔ0  ÖŐÚŰ"ĎăŃ-    log+   Creating DB -- tables   dbSchema   tables   dbCreateTable-   Creating DB -- indices   indices7   CREATE INDEX IF NOT EXISTS 	    ON    table   (   columns	   join   ,    )   dbConnection!   executeSimpleSQL   schemaVersion   DB_VERSION    ˙˙˙˙       	   name                     table        ˙˙˙˙       	   name                    index       statement                *   @           L   ˙˙˙˙   0   /                ˙˙˙˙      y         ˙˙˙˙   G   FormHistory.prototype.dbCreateTableÁ              Ż       š      *                        
          	   name   table	   tSQL  O  ďO  _      
      Y     Q  QT K   >mW  Z    V  `   T   V  7`  ¸    
=   : ,  ÎăQLM˙˙˙ÂQNČ¸    
=   :    QA¸   
=   T  =   V   : QA5   ¸   
T  V   : QË)Ě0CÎ˙˙˙ŕĚÜ˙˙˙úá˙˙˙˙ČŕŘ* 	   join       ,    log   Creating table     with    dbConnection   createTable    ˙˙˙˙         col          D          \   ˙˙˙˙   ˙˙˙˙   ?   FormHistory.prototype.dbMigrateÁ                v      š                              #             oldVersion P  ŃV  e      
      A¸    
=   T  : QT  ;      _A¸    
=   ;   : QA¸   
:      $;   ¸   
=   ;   5   	: pA5   
;   6   QA5   
¸   
:  QT  ?   Q    Rm  QA¸    
=   V   =   : Q=   V     QAV  Á
:  QČV   #?W   QQăV   ;   ˙˙˙§Č   D   Qv   QA¸    
=   V   : QA5   
¸   
:  QV   pČ    A5   
;   6   QA5   
¸   
:  QA¸    
=   : QŐÉ× pČŃĘ q wŃ }ŃpĘ RD^*ÜĎÍ :Î  )× ĚÖŃĚŃŃŃ$    logG   Attempting to migrate from version    DB_VERSION/   Downgrading to version 7   dbAreExpectedColumnsPresent   Components   Exception=   DB is missing expected columns   Cr/   NS_ERROR_FILE_CORRUPTED   dbConnection   schemaVersion!   beginTransaction+   Upgrading to version    ...%   dbMigrateToVersion%   Migration failed: '   rollbackTransaction#   commitTransaction/   DB migration completed.    ˙˙˙˙          v                     migrateFunction        ˙˙˙˙          e            t          ^          j   ˙˙˙˙   Ą   =            8   ˙˙˙˙   ˙˙˙˙   S   FormHistory.prototype.dbMigrateToVersion1Á                Ů       š      O                                      query	   stmt   paramsW  0]        
         Qf    ¸    
   A: Q   Q=      QY   ;   ¸   
:  ;   Xč]     QA¸   
   V  : W   QV   ¸   
:  Qt   <   R  Qv  QA¸   
=   	V  : QV  pČt   
    V      V   ¸   

:  Qu Ń    ¨ËĚ×.ŃČŮĚÖĐŃ    forEach  UPDATE moz_formhistory SET timesUsed = 1, firstUsed = :time, lastUsed = :time WHERE timesUsed isnull OR firstUsed isnull or lastUsed isnull	   Date   now   DAY_IN_MS	   time#   dbCreateStatement   execute   log7   Failed setting timestamps:    reset                     timesUsed      firstUsed      lastUsed                  ˙˙˙˙   W   FormHistory.prototype.dbMigrateToVersion1/<Á                 J       š                                              column X  gY              A¸    
T  :     :=   T  =         QA5   ¸   
      : QËÚŰ*    dbColumnExistsO   ALTER TABLE moz_formhistory ADD COLUMN     INTEGER   dbConnection!   executeSimpleSQL    ˙˙˙˙         e        W   d        W   2         '   ˙˙˙˙   ˙˙˙˙   S   FormHistory.prototype.dbMigrateToVersion2Á                 ?       š                                               queryí]  _  Á            =       QA5   ¸   
V   : Q=   W   QA5   ¸   
V   : QĘŐĘŐ* I   DROP TABLE IF EXISTS moz_dummy_table   dbConnection!   executeSimpleSQLŻ   CREATE INDEX IF NOT EXISTS moz_formhistory_lastused_index ON moz_formhistory (lastUsed)   ˙˙˙˙   S   FormHistory.prototype.dbMigrateToVersion3Á                ń      š                                             query   ids	   stmtą_  Če  Đ               QA¸    
=   :     C=   W   QA5   ¸   
V   : Q=   W   QA5   ¸   
V   : QZ     Q=   W   Q  QA¸   
V   : W  Q   #mV  ¸   
V  5   	5   
: QăV  ¸   
:  ˙˙˙Ňt   <   R  Qv  QA¸   
=   V  : QV  pČt   
    V     V  ¸   
:  Qu =   W   QV  K  Q   łmW    QY   V  ]   
A¸   
:  ]     QA¸   
V   V  : W  QV  ¸   
:  Qt   <   R  Qv  QA¸   
=   V  : QV  pČt   
    V     V  ¸   
:  Qu ČăQLM˙˙˙MQNČÍĘŐĘŐÉĘRĚČ(3Ţ áßĚÖĐŃ íĘÍ0  ¸ĐÉČÍ-ĐČŮĚÖĐß î"    dbColumnExists	   guida   ALTER TABLE moz_formhistory ADD COLUMN guid TEXT   dbConnection!   executeSimpleSQL   CREATE INDEX IF NOT EXISTS moz_formhistory_guid_index ON moz_formhistory (guid)a   SELECT id FROM moz_formhistory WHERE guid isnull#   dbCreateStatement	   push   row   id   executeStep   log)   Failed getting IDs:    resetm   UPDATE moz_formhistory SET guid = :guid WHERE id = :id   generateGUID   execute+   Failed setting GUID:     ˙˙˙˙         e        ˙˙˙˙         id                    params                    e       3  š      b  c       b  1       t           t   V          3       Ë   '   ˙˙˙˙   )  Ĺ   ˙˙˙˙   9  ¨           '         ˙˙˙˙   S   FormHistory.prototype.dbMigrateToVersion4Á                   =       š                                            îe  ´f              A5    ¸   
=   :     &A¸   
=   A5   5   5   : QŇá\    dbConnection   tableExists/   moz_deleted_formhistory   dbCreateTable   dbSchema   tables   ˙˙˙˙   c   FormHistory.prototype.dbAreExpectedColumnsPresentÁ                        š      @                                   g  j              A5    5   K   Q   ßmW     Q  QA5    5   V   7  Q=   Y     Q  QV  K   mW    V  ,  ÎăQLM˙˙˙éQNČ¸   
=   : =   V     Q  QA5   ¸   
V  :   QV  ¸   
:  QČ   "  Qv  QBČČ NČČ    ČăQLM˙˙˙!QNČA¸   	
=   
: QCÔ0  äÖŐË"Í0đ˙˙˙öĐ0ŃČŐĚßŃ    dbSchema   tables   SELECT 	   join   ,     FROM    dbConnection   createStatement   finalize   logc   verified that expected columns are present in DB.    ˙˙˙˙       	   name                     table       query                    col                 	   stmt                    e          ĺ       Ą   4      a             ń   ˙˙˙˙       Ó          J   6         ˘   .         Ö            ä             ĺ         ˙˙˙˙ę            ˙˙˙˙   I   FormHistory.prototype.dbColumnExistsÁ              e       š      !                                     columnName   query j  ęk  '            =    T  =      Q  QA5   ¸   
V   :   QV  ¸   
:  QCČČ     Qv  QBČČ    Ô4ŃČĎĘĚË	    SELECT +    FROM moz_formhistory   dbConnection   createStatement   finalize    ˙˙˙˙      	   stmt        ˙˙˙˙         e            8          2   ˙˙˙˙˙˙˙˙F             N      ˙˙˙˙˙˙˙˙\            ˙˙˙˙      FH__dbClose                    š      W                                     aBlocking)   connectionDescriptor   completed   thread ćl  äo  ;      
      A5    K  Q   mW  V  ¸   
:  QăQLM˙˙˙çQNČAY   6    Q;   ¸   
;   5   =   :    QV    D   QV   5   ;   H   B   QA5   ¸   	
   : Q   8  Qv  QC   Q;   
5   ¸   
V  : QČ    ;   5   5     Q   mV  ¸   
C: QăT  E   Q    ˙˙˙ŢĎ0ĘÜĚŰČÚŰĚŕÔ(' OĐ OËË*    dbStmts   finalize   Object1   getOwnPropertyDescriptor   FormHistory   prototype   dbConnection   value   undefined   asyncClose   Components   utils   reportError   Services   tm   currentThread!   processNextEvent    ˙˙˙˙      	   stmt       ˙˙˙˙      FH__dbClose/<Á                          š                                              Én  án  H            C   Q7     ˙˙˙˙         e        ô   '                           
   +   ˙˙˙˙   Š   ,   ˙˙˙˙   ˙˙˙˙   ?   FormHistory.prototype.dbCleanupÁ                        š      )                                         storage   backupFile´p  Nr  Z            A¸    
=   : Q;   5   ¸   
;   5   :    QA5   5   =   	  QV   ¸   

A5   V  : QA¸   
C: QA5   ¸   
B: QŃŃĘ ^ČÖŮÍŇ    log[   Cleaning up DB file - close & remove & backup   Cc=   @mozilla.org/storage/service;1   getService   Ci%   mozIStorageService   dbFile   leafName   .corrupt%   backupDatabaseFile   _dbClose   remove