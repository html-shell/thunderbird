ç¿s¹                ·  #   ¹   *   ´       	                          0     resource://gre/modules/DataStoreChangeNotifier.jsm                                           ;   5       Q5      Q5      Q5      QQAf    0   	Q;   ¸   

=   : Q;   ¸   

=   : Q;   ¸   
A=   =   =   : Q;   ¸   
A=   =   =   : Q;   ¸   
A=   =   =   : Qn   ;   5   ¸   
=   : 1   Qn   ;   5   ¸   
=   : 1   QAY   Z   ]    f   ]   !Y   ]   "Y   ]   #   ]   $   ]   %   ]   &   ]   '   ]   (   ]   )0   Q;   ¸   $
:  QÊ	 öB	Ì4Õ3Õ1Ò<Ò:Ò@ÖÉ" ÖÉ !#ÉÊ2ÊÊ5Ê?ÊRÊ\ÊuÊ  Ð  äÐ    Cc   Ci   Cu   Cr   Components   classes   interfaces   utils   results!   EXPORTED_SYMBOLS   importK   resource://gre/modules/XPCOMUtils.jsmG   resource://gre/modules/Services.jsm   XPCOMUtils/   defineLazyServiceGetter	   ppmmU   @mozilla.org/parentprocessmessagemanager;1+   nsIMessageBroadcaster!   dataStoreServiceA   @mozilla.org/datastore-service;1'   nsIDataStoreService   systemMessengerM   @mozilla.org/system-message-internal;13   nsISystemMessagesInternal=   kSysMsgOnChangeShortTimeoutSec   Services   prefs   getIntPrefW   dom.datastore.sysMsgOnChangeShortTimeoutSec;   kSysMsgOnChangeLongTimeoutSecU   dom.datastore.sysMsgOnChangeLongTimeoutSec/   DataStoreChangeNotifier   children   messages3   sysMsgOnChangeShortTimers1   sysMsgOnChangeLongTimers	   init   observe!   broadcastMessage-   broadcastSystemMessage/   setSystemMessageTimeout   receiveMessage                  /   DataStoreChangeNotifier                  ÿÿÿÿ      debug                        ¹                                               s k  ª                                   #   DataStore:Changed   ;   DataStore:RegisterForMessages   ?   DataStore:UnregisterForMessages   -   child-process-shutdown                  ÿÿÿÿ   C   this.DataStoreChangeNotifier.initÁ                   Q       ¹   	                                       ¸    5             ;    â    =   : QA5   ¸   
    ¸   
A: : Q;   5   ¸   
A=   B: QÓ8Ù:8ÿÿÿé<Ü8    debug	   init   messages   forEach	   bind   Services   obs   addObserver   xpcom-shutdown   ÿÿÿÿ   G   this.DataStoreChangeNotifier.init/<Á                        ¹                                             msgName ô  3  8             ;    ¸   
T  A: QÔ' 	   ppmm%   addMessageListener   ÿÿÿÿ   I   this.DataStoreChangeNotifier.observeÁ                        ¹      3                                      aSubject   aTopic   aData     ;
  ?             ;    â    =   : QT x=   y   
z   RA5   ¸   
    ¸   
A: : Q;   5   ¸   
A=   : Qn   	@1   	Q   !;    â    =   
T : Q   ÓBkyuÊÙFDÿÿÿéHÛÌXL×X    debug   observe   xpcom-shutdown   messages   forEach	   bind   Services   obs   removeObserver	   ppmm-   Wrong observer topic:    ÿÿÿÿ   M   this.DataStoreChangeNotifier.observe/<Á                        ¹                                             msgName &	  p	  D             ;    ¸   
T  A: Q
Ô* 	   ppmm+   removeMessageListener   ÿÿÿÿ   !   broadcastMessage                 *       ¹                                      D      aDatak
  T  R             ;    â    =   : QA5   ¸   
    : QÓUÖY    debug   broadcast   children   forEach   ÿÿÿÿ   %   broadcastMessage/<Á                 O       ¹      
                           
            obj °
  N  U             T  5       5    E   QT  5      5      "T  5   ¸   
=      : QìÝ>    store   owner   mm!   sendAsyncMessage7   DataStore:Changed:Return:OK   ÿÿÿÿ   g   this.DataStoreChangeNotifier.broadcastSystemMessageÁ               ´       ¹   
   7                                       aStore   aOwner   storeKey   shortTimer   longTimer  y  Ï  \             ;    â    =   : QT  =   T W   QA5   V   7W  QV      V  ¸   
:  QA5   V   /QA5   V   7W  QV      V  ¸   
:  QA5   V   /Q;   ¸   
=   T  Y   T ]   	: QÓ`ÒÐÏÌfÐÏÌlÕ'Èl8    debug-   broadcastSystemMessage   |3   sysMsgOnChangeShortTimers   cancel1   sysMsgOnChangeLongTimers   systemMessenger!   broadcastMessage#   datastore-update-   owner   ÿÿÿÿ   i   this.DataStoreChangeNotifier.setSystemMessageTimeoutÁ               [      ¹      g                           (            aStore   aOwner   storeKey   shortTimer   longTimer  N    u             ;    â    =   : QT  =   T W   QA5   V   7W  QV      =;   5   ¸   
;   5   : W  QA5   V   V  9Q   V  ¸   	
:  QV  ¸   

Y   A5   ¸   
AT  T : ]   ;   Xè;   5   5   : QA5   V   7    ;   5   ¸   
;   5   : W  QA5   V   V  9QV  ¸   

Y   A5   ¸   
AT  T : ]   ;   Xè;   5   5   : QÓxÒ{Ð8ÛÈÕÏÐÔÈÉÏ    Ì
ÛÈÐÐÔÈÉÏ  <    debug/   setSystemMessageTimeout   |3   sysMsgOnChangeShortTimers   Cc)   @mozilla.org/timer;1   createInstance   Ci   nsITimer   cancel!   initWithCallback-   broadcastSystemMessage	   bind   notify=   kSysMsgOnChangeShortTimeoutSec   TYPE_ONE_SHOT1   sysMsgOnChangeLongTimers;   kSysMsgOnChangeLongTimeoutSec   ÿÿÿÿ   W   this.DataStoreChangeNotifier.receiveMessageÁ              Å      ¹   .                          z            aMessage   pos ¹  v               ;    â    =   : QT  5   =      Ï  Q  Q  Q=   T  q    	È;   5   ¸   
;   5   	:   Q;   
5   ¸   
T  5   5   @@:   QV  ¸   
V  T  5   5   T  5   5   :   QV   D   Q;   ¸   
V  :     	ÈÈT  5   x=   y   (=   y   {=   y  Å=   y  ëz  A¸   
T  5   : Q;   
5   ¸   
=   :    +A¸   
T  5   5   T  5   5   : Q  F;    â    =   : Q>  Q    ¼mA5   V  75    T  5   !E   HQA5   V  75   T  5   5   E   $QA5   V  75   T  5   5      I;    â    =   "V  : QA5   V  75   #¸   $
T  5   5   %: QÈV  #?W  QãV  A5   Ù   &ÿÿÿ7ÈA5   ¸   $
Y   T  5   !]    T  5   5   ]   T  5   5   ]   Z  T  5   5   %`   ]   #: Q  ò;    â    =   ': Q>  Q    ùmA5   V  75    T  5   !   Î;    â    =   (V  : QA5   V  75   #¸   )
T  5   5   %: W   QV   ×ÿ   %A5   V  75   #¸   *
V   ?: QA5   V  75   #Ù   &   
   ?;    â    =   +V  : QA5   ¸   *
V  ?: QV  #?W  QV  #?W  QãV  A5   Ù   &ÿÿþúÈ   Â;    â    =   ,: Q>  Q    jmA5   V  75    T  5   !   ?;    â    =   (V  : QA5   ¸   *
V  ?: QV  #?W  QV  #?W  QãV  A5   Ù   &ÿÿÿÈ   !;    â    =   -T  5   : QÓÎ×
Ê
ÑÊ  È
àÈ
ÏÚ  È
ËÐÈh Ìu
  ªu
  ½u
  ÔuÊ  £ÔÖ
æXÓ&  ¼  °  Î
  ­ßäÞØè  ­2Ì  ³  ­Ø  ·ÒÍÒÒÖ  ·XÓ&  ù  í 
  ÀÙØäÈàÕ@ØÖÌ  À2Ì  Ï  ÀØ  ÒXÓ&j^|
  ×ÙØÖÌ  ×2Ì  Û  ×Ø  ÞXÜ    debug   receiveMessage 	   name-   child-process-shutdown   principal   CcI   @mozilla.org/scriptsecuritymanager;1   getService   Ci1   nsIScriptSecurityManager   Services   io   newURI   origin/   getAppCodebasePrincipal   appId%   isInBrowserElement!   dataStoreService   checkPermission#   DataStore:Changed;   DataStore:RegisterForMessages?   DataStore:UnregisterForMessages!   broadcastMessage	   data   prefs   getBoolPref%   dom.sysmsg.enabled/   setSystemMessageTimeout   store   owner   Register!   children   mm   target9   Register on existing index:    windows	   push   innerWindowID   length   Unregister%   Unregister index:    indexOf   splice3   Unregister delete index: -   Child process shutdown   Wrong message:     ÿÿÿÿ         secMan       uri       principal        ÿÿÿÿ         i        ÿÿÿÿ         i        ÿÿÿÿ         i        &  |       ö        ¢  Î       )   Ç   ÿÿÿÿÿÿÿÿJ          ÿÿÿÿî               Ú   ÿÿÿÿÿÿÿÿL           ë    ÿÿÿÿ        ÿÿÿÿ