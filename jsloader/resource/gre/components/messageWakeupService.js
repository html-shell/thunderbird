ç¿s¹                     ¹      ~                                      resource://gre/components/messageWakeupService.js              	                       ;    5   ¸   
=   : Q;    5      Q;    5      Q=   	   Q;   
Y   ;    ¸   
=   : ]   ;   ¸   
Z  ;   5   `   : ]   Z   ]      a      ]      ]      ]   6   Qn   Z  ;   
`   o   QA;   ¸   
;   : 6   Q
Ê	^ÚAÐÐ
Ë#ÑÈÐ)ÎÿÿÿéÈÉÊÊ&ÊEÐ\^ÉÏÿÿÿüÒÉ,    Components   utils   importK   resource://gre/modules/XPCOMUtils.jsm   Cc   classes   Ci   interfaces/   CATEGORY_WAKEUP_REQUEST   wakeup-request)   MessageWakeupService   prototype   IDM   {f9798742-4f7b-4188-86ba-48b116412b29}   classID   XPCOMUtils   generateQI   nsIObserver   QueryInterface   messagesData   messageManager   requestWakeup   receiveMessage   observe   components   NSGetFactory)   generateNSGetFactory   ÿÿÿÿ   )   MessageWakeupService                          ¹                                              £  ©                !    ÿÿÿÿ   [   MessageWakeupService.prototype.messageManagerÁ                   9       ¹                                              a               A5        *A;   5   ¸   
;   5   : 6    QA5    ÒÊÉ    _messageManager   CcU   @mozilla.org/parentprocessmessagemanager;1   getService   Ci3   nsIMessageListenerManager   ÿÿÿÿ   Y   MessageWakeupService.prototype.requestWakeupÁ                 >       ¹                                              aMessageName	   aCid	   aIid   aMethod    }  O               A5    T  Y   T ]   T ]   T ]   8QA5   ¸   
T  A: QÎÈÈÊ#Õ;    messagesData   cid   iid   method   messageManager%   addMessageListener   ÿÿÿÿ   [   MessageWakeupService.prototype.receiveMessageÁ               ò       ¹      >                          "      @      aMessage	   data   service   ret	   selfl  	  &       
      A5       5   7   Q;   V   5   7V   5   Á
;   V   5   7: 5      Q   ¸   
   :   QV   5   	   $V   5   	¸   

:  QV   @6   	QV   ;   5   ¸   
;   5   : 6   	QA   QV   5   	¸   
    >;   5   5   : QV  Ö+ê
Î2ÑÈ4É6ÔË:ßÉÕ@Ð<B    messagesData	   name   Cc   cid   method   Ci   iid   wrappedJSObject   receiveMessage   timer   cancel)   @mozilla.org/timer;1   createInstance   nsITimer!   initWithCallback   TYPE_ONE_SHOT   ÿÿÿÿ   _   MessageWakeupService.prototype.receiveMessage/<Á                   x       ¹                                              à  <                   5    ¸   
   5         : Q      5    ¸   
   5         : Q      5      5   &QîîÛ(    messageManager%   addMessageListener	   name+   removeMessageListener   messagesData   ÿÿÿÿ      TM_observe       	              ¹      h                                      aSubject   aTopic   aData   catMan   entries   entry   value   parts   cid   iid   method   messages   6	  ¢  E             T x=    y   
z  ;   5   ¸   
;   5   : W   QV   ¸   
;   : W  Q   µmV  ¸   
:  ¸   	
;   5   
: 5   W  QV   ¸   
;   V  : W  QV  ¸   
=   : W  QV  >7   QV  ?7   QV  ×7   QV  ¸   
×: W  QV  ¸   
    A: QãV  ¸   
:  ÿÿÿ@   k uÊÑÊIÈKÐ
È(  ÅLËáÔÈÐÈÌÌÍÍÈÐVTLÕYX )   profile-after-change   Cc=   @mozilla.org/categorymanager;1   getService   Ci%   nsICategoryManager#   enumerateCategory/   CATEGORY_WAKEUP_REQUEST   getNext   QueryInterface%   nsISupportsCString	   data!   getCategoryEntry   split   ,   slice   forEach   hasMoreElements   ÿÿÿÿ      TM_observe/<Á                        ¹                                              messageName   k  T             A¸    
T           : QÞ2    requestWakeup    S   Å   