çżsš                Ć  (   š   $   Á       	                   #            resource:///modules/activity/pop3Download.js                                              f        Q;   5      Q;   5      Q;   5      Q;   ¸   	
=   
=   =   :    Q;   ¸   	
=   =   =   :    Q;   ¸   	
=   =   =   :    Q;   5   ¸   
=   : Q;   5   ¸   
=   : Q;   5   ¸   
=   : Q;   5   ¸   
=   : Q;   5   ¸   
=   : Qn   Y   Y   ]   Y   ]      a      a      a      ]       ]   !   ]   "   ]   #   ]   o   QËĐĐĐŃĘÉ˙˙˙ýŃĘÉ˙˙˙ýŃĘÉ˙˙˙ýÚ?Ú?ÚAÚAÚ@Ę!Ę#Ę(Ę.Ę4Ę=ĘVĘZĘ  Đ !   EXPORTED_SYMBOLS   Cc   Components   classes   Ci   interfaces   Cr   results   nsActProcess   Constructor?   @mozilla.org/activity-process;1%   nsIActivityProcess	   init   nsActEvent;   @mozilla.org/activity-event;1!   nsIActivityEvent   nsActWarning?   @mozilla.org/activity-warning;1%   nsIActivityWarning   utils   importG   resource://gre/modules/Services.jsmG   resource:///modules/mailServices.jsK   resource://gre/modules/XPCOMUtils.jsmK   resource://gre/modules/PluralForm.jsmI   resource:///modules/gloda/log4moz.js%   pop3DownloadModule9   _mostRecentActivityForFolder-   _prevActivityForFolder   log   activityMgr   bundle   getString#   onDownloadStarted%   onDownloadProgress'   onDownloadCompleted                  %   pop3DownloadModule                  ˙˙˙˙   -   pop3DownloadModule.logÁ                   #       š                                            '    #             A%    QA;   ¸   
=   : 6    ŇÉ3    log   Log4Moz'   getConfiguredLogger'   pop3DownloadsModule   ˙˙˙˙   =   pop3DownloadModule.activityMgrÁ                   -       š                                            ˘  O  (             A%    QA;   5   ¸   
;   5   : 6    ŇĘ*ÉC    activityMgr   Cc?   @mozilla.org/activity-manager;1   getService   Ci%   nsIActivityManager   ˙˙˙˙   3   pop3DownloadModule.bundleÁ                   (       š                                            ^  î  .             A%    QA;   5   ¸   
=   : 6    Ň0ÉE    bundle   Services   strings   createBundle[   chrome://messenger/locale/activity.properties   ˙˙˙˙   9   pop3DownloadModule.getStringÁ                M       š                                           stringName   Í  4             A5    ¸   
T  :    7   Qv   QA5   ¸   
=   T  : QV   pČ    ĐÉĚÚĚ    bundle#   GetStringFromName   log   errorK   error trying to get a string called:     ˙˙˙˙          e                      +   ˙˙˙˙   ˙˙˙˙   I   pop3DownloadModule.onDownloadStartedÁ               ő       š      J                                        aFolder   displayText   statusText   event   downloadItem î    =             A5    ¸   
=   : QA5   ¸   
=   Z  T  5   `   ?:    QA5   T  5   A5   	T  5   78QT  5   
5     Q;   V   T  V  ;   ¸   
:  ;   ¸   
:  R   QV  =   6   QY     QV  A5   ¸   
V  : 6   QA5   	T  5   V  8QÖ@Í0Í@ČDÎŃŇIĘĚĚIČOĎQĘŐÉÔ>    log	   info)   in onDownloadStarted   bundle)   formatStringFromName3   pop3EventStartDisplayText   prettiestName-   _prevActivityForFolder   URI9   _mostRecentActivityForFolder   server   prettyName   nsActEvent	   Date   now   iconClass   syncMail   eventID   activityMgr   addActivity   ˙˙˙˙   K   pop3DownloadModule.onDownloadProgressÁ                        š                                              aFolder%   aNumMsgsDownloaded   aTotalMsgs   ą    V             A5    ¸   
=   : QÖ'    log	   info+   in onDownloadProgress   ˙˙˙˙   M   pop3DownloadModule.onDownloadCompletedÁ              ż      š      z                         /             aFolder%   aNumMsgsDownloaded   displayText   statusText   event   downloadItem  /  (  Z             A5    ¸   
=   : QA5   ¸   
A5   T  5   75   : Q   QT >   L;   ¸   	
T A¸   

=   : : W   QV   ¸   
=   T : W   Q   A¸   

=   : W   QT  5   5     Q;   V   T  V  ;   ¸   
:  ;   ¸   
:  R   QV  =   6   QY   T ]     QA5   T  5   V  8QV  A5   ¸   
V  : 6   QT     w  QA5   T  5   7  QV  ;   E   QV  5       =A5   ¸   
V  5   :    A5   ¸   
V  5   : QČÖ]ĺ_GÜ1˙˙˙ÝČÓÍfÍČhŇkĘĚĚkČqĎsÍÔŐÉËz
ÔĐ#ĘÖ
Űv    log	   info-   in onDownloadCompleted   activityMgr   removeActivity9   _mostRecentActivityForFolder   URI   eventID   PluralForm   get   getString'   pop3EventStatusText   replace   #13   pop3EventStatusTextNoMsgs   server   prettyName   nsActEvent	   Date   now   iconClass   syncMail#   numMsgsDownloaded   addActivity-   _prevActivityForFolder   undefined!   containsActivity    ˙˙˙˙         prevItem        M  q   ˙˙˙˙   ˙˙˙˙   /   pop3DownloadModule.initÁ                          š                                            :                 ;    5   ¸   
A: QÖ$    MailServices	   pop3   addListener