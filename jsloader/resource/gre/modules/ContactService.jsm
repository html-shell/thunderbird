ç¿s¹                D     ¹                                       0     resource://gre/modules/ContactService.jsm     i&                                    B    Q;   5      Q;   5      Q;   5      QAf   0   Q;   ¸   	
=   
: Q;   ¸   	
=   : Q;   ¸   
A=   =   : Q;   ¸   
A=   =   : Q;   ¸   
A=   =   =   : Qn   AY      ]      ]      ]      ]      ]      ]   0   1   Q;   ¸   
:  QÊ	
Q
ÐÐÐÌ+Õ3Õ1ÒJÒQÒ@ËÊ5ÊHÊVÊ_ÊeÕ 
Ð    DEBUG   Cu   Components   utils   Cc   classes   Ci   interfaces!   EXPORTED_SYMBOLS   importK   resource://gre/modules/XPCOMUtils.jsmG   resource://gre/modules/Services.jsm   XPCOMUtils-   defineLazyModuleGetter   ContactDBI   resource://gre/modules/ContactDB.jsm!   PhoneNumberUtilsW   resource://gre/modules/PhoneNumberUtils.jsm/   defineLazyServiceGetter	   ppmmU   @mozilla.org/parentprocessmessagemanager;13   nsIMessageListenerManager   ContactService	   init   observe5   configureSubstringMatching!   assertPermission!   broadcastMessage   receiveMessage   ÿÿÿÿ      debug                        ¹                                             s    C               ;    â    =   T  =   : QÝ; 	   dumpO   -*- Fallback ContactService component:    
                     ContactService                  ÿÿÿÿ   1   this.ContactService.initÁ                   Ë       ¹      ?                                                     ;       ;   â   =   : QAf    0   QAZ   0   QA;   R  0   QA5   ¸   
   ¸   
A: : QA;   
R  0   	QA5   	¸   
:  QA¸   
:  Q;   5   ¸   
A=   B: Q;   5   ¸   
=   AB: QÓÌ&ËÉÙ*(ÿÿÿé,ÉÑ/Ì1ÜÜ?    DEBUG   debug	   Init   _messages   _children   _cursors   Map   forEach	   bind   _db   ContactDB	   init5   configureSubstringMatching   Services   obs   addObserver+   profile-before-change   prefs'   ril.lastKnownSimMcc      
      
         Contacts:Find      Contacts:GetAll   /   Contacts:GetAll:SendNow      Contacts:Clear      Contact:Save      Contact:Remove   9   Contacts:RegisterForMessages   -   child-process-shutdown   )   Contacts:GetRevision   #   Contacts:GetCount                  ÿÿÿÿ   5   this.ContactService.init/<Á                        ¹                                             msgName X    (             ;    ¸   
T  A: QÔ' 	   ppmm%   addMessageListener   ÿÿÿÿ   7   this.ContactService.observeÁ                 Ü       ¹      C                                      aSubject   aTopic   aData   ¥  +
  5             T =    H   ©A5   ¸   
    ¸   
A: : Q;   5   ¸   
A=    : Q;   5   ¸   
=   A: Qn   	@1   	QA@0   QA5   
   A5   
¸   
:  QA@0   
QA@0   QA@0   Q   .T =   HE   QT =   H   A¸   
:  QÉ  ¤Ù97ÿÿÿé:ÛÛÌÈÑÈÈÍØÌ" +   profile-before-change   _messages   forEach	   bind   Services   obs   removeObserver   prefsC   dom.phonenumber.substringmatching	   ppmm   _db   close   _children   _cursors   nsPref:changed'   ril.lastKnownSimMcc5   configureSubstringMatching   ÿÿÿÿ   ;   this.ContactService.observe/<Á                        ¹                                             msgName   Z  7             ;    ¸   
T  A: QÔ* 	   ppmm+   removeMessageListener   ÿÿÿÿ   ]   this.ContactService.configureSubstringMatchingÁ                ¥       ¹      &                                      countryNameT
  a  H             ;    ¸   
:     Q;   5   ¸   
=   V   : ;   5   5      Q  Q;   5   ¸   	
=   V   :   QV     A5   
¸   
V  : QÈÈA5   
¸   
:  QÌÈÛÓË
ÛÈÕSÑ$ !   PhoneNumberUtils   getCountryName   Services   prefs   getPrefTypeE   dom.phonenumber.substringmatching.   Ci   nsIPrefBranch   PREF_INT   getIntPref   _db/   enableSubstringMatching1   disableSubstringMatching    ÿÿÿÿ         val        H   K   ÿÿÿÿÿÿÿÿ             ÿÿÿÿ   I   this.ContactService.assertPermissionÁ                 N       ¹                                             aMessage   aPerm      V             T  5    ¸   
T :     5;   ¸   
=   T  5   =   T =   : QBCÒÚÐXZ\    target!   assertPermission   Cu   reportError#   Contacts message 	   name?    from a content process with no    privileges.   ÿÿÿÿ   !   broadcastMessage                        ¹      	                                D      aMsgName   aContent³  6  _             A5    ¸   
    : QÖb    _children   forEach   ÿÿÿÿ   %   broadcastMessage/<Á                        ¹                                             msgMgr í  0  `             T  ¸    
      : QØ, !   sendAsyncMessage   ÿÿÿÿ   E   this.ContactService.receiveMessageÁ              ®      ¹   5   H                                   aMessage   mm   msg   cursorList S  N&  e             ;       !;   â   =   T  5   : QT  5      QT  5      Q   QT  5   Æ      Q   Qx=   y   d=   y   Ç=   y  z=   	y  =   
y  &=   y  =   y  É=   y  =   y  G=   y  ´z  ¾A¸   
T  =   :     
@ÈÇZ      QA5   ¸   
   ¸   
A:    ¸   
A:   5   5   : Q  wA¸   
T  =   :     
@ÈÇA5   ¸   
  : W   QV       (Z   W   QA5   ¸   
  V   : QV   ¸   
  5   : QA5   ¸   
   ¸   
A:      5     5   : Q  ºA5   ¸   
  5   : Q    5   5   =   H   (A¸   
T  =    :     
@ÈÇ   #A¸   
T  =   !:     
@ÈÇA5   ¸   "
  5   5   #   ¸   
A:    ¸   
A: : Q  úA¸   
T  =   !:     
@ÈÇA5   ¸   $
  5   5   %   ¸   
A:    ¸   
A: : Q  A¸   
T  =   !:     
@ÈÇA5   ¸   &
   	¸   
A:    
¸   
A: : Q  CA¸   
T  =   :     
@ÈÇA5   ¸   '
      ¸   
A: : Q  úA¸   
T  =   :     
@ÈÇA5   ¸   (
      ¸   
A: : Q  ±T  5   ¸   
=   :     
@ÈÇ;       ;   â   =   ): QA5   *¸   +
  : ×ÿ   A5   *¸   
  : Q  :;       ;   â   =   ,: QA5   *¸   +
  :   QV  ×ÿ   =;       ;   â   =   -V  : QA5   *¸   .
V  ?: QA5   ¸   
  : W   QV      qV   - Á
:    Q   &m5   /W  QA5   ¸   0
V  : QãQ¸   1
:  5   2ÿÿÿËÈ A5   ¸   3
  : Q   +;       !;   â   =   4T  5   : QÈÇÜÎÎkÚh Iu
}u
  u
  u
  ±u
  ¾u
  Ìu
  Üu
  ìu
  õuÊlÐ
pÊÍÌyr
zÍ
Ïq|XÐ
ÒÈ
É
ÚÙÍÌ    
  Ô    XÛXÕ#ÐÊÐÍÏÌ  ª
Í
  ¨  °XÐ
ÍÏÌ  ·
Í
  µ  ½XÐ
ÍÌ  Ã
Ì  Ç
  Â  ËXÐ
Í  ×Ì  ×
  Ð  ÛXÐ
Í  çÌ  ç
  à  ëXÔ
ÓÒ
ÖXÓÒÈØ
ÖÒÈÓ8:ÑÕ  þËÿÿÿñÒ
ÖXÞ    DEBUG   debug   receiveMessage 	   name   target	   data   Contacts:Find   Contacts:GetAll/   Contacts:GetAll:SendNow   Contact:Save   Contact:Remove   Contacts:Clear)   Contacts:GetRevision#   Contacts:GetCount9   Contacts:RegisterForMessages-   child-process-shutdown!   assertPermission   contacts-read   _db	   find	   bind   options   findOptions   _cursors   get   set	   push   cursorId   getAll   sendNow   reason   create   contacts-create   contacts-write   saveContact   contact   removeContact   id   clear   getRevision   getCount   Register!   _children   indexOf   Unregister%   Unregister index:    splice   value   clearDispatcher	   next	   done   delete)   WRONG MESSAGE NAME:     ÿÿÿÿ         result      index              I   this.ContactService.receiveMessage/<Á                ¡       ¹   
   (                                    contacts Æ  ç  r       	      T  K   Q   "mW      ¸    
T  V   7: QãQLMÿÿÿÞQNÈ;      -;   â   =   ;   ¸   
   : : Q  ¸   
=   Y     5   ]      ]   	: QÌ0'ÊåwàÿÿÿîÖ0ÏÊÿÿÿ¶] 	   push   DEBUG   debug   result:	   JSON   stringify!   sendAsyncMessage/   Contacts:Find:Return:OK   requestID   contacts    ÿÿÿÿ          i          (          4   ÿÿÿÿ          I   this.ContactService.receiveMessage/<Á                 2       ¹                                             aErrorMsg   x  z               ¸    
=   Y     5   ]   T  ]   : Q Ö1ÏÈÿÿÿµb !   sendAsyncMessage/   Contacts:Find:Return:KO   requestID   errorMsg          I   this.ContactService.receiveMessage/<Á                Ï       ¹      :                                    aContacts $  %                 ¸    
=   Y     5   ]   T  ]   : QT  @H   ]  Q   QA5   ¸   
  :    QV   ¸   
  5   :   QV   ¸   
V  ?: QÈ   :   Qv   Q;      ;   	â   	=   
: QV   pÈ      Ö-ÏÈÿÿÿ»ÑÒÈÕÈÚÌÓÌ !   sendAsyncMessage)   Contacts:GetAll:Next   cursorId   contacts   _cursors   get   indexOf   splice   DEBUG   debug]   Child is dead, DB should stop sending contacts    ÿÿÿÿ          cursorList       index        ÿÿÿÿ          e                   >   V   ÿÿÿÿ      .   ÿÿÿÿ          I   this.ContactService.receiveMessage/<Á                 2       ¹                                             aErrorMsg D  ·                 ¸    
=   Y     5   ]   T  ]   : Q Ö3ÏÈÿÿÿ´c !   sendAsyncMessage3   Contacts:GetAll:Return:KO   cursorId   requestID   errorMsg          I   this.ContactService.receiveMessage/<Á                          ¹   
   !                                     ]  b  ª               ¸    
=   Y     5   ]     5   5   5   ]   : QA¸   
=   Y     5   5   5   ]     5   5   	]   	: QÖ0ÏÙÿÿÿ¶Ò+Ù#Ôÿÿÿ²l !   sendAsyncMessage-   Contact:Save:Return:OK   requestID   options   contact   id   contactID!   broadcastMessage   Contact:Changed   reason          I   this.ContactService.receiveMessage/<Á                 2       ¹                                             aErrorMsg   ò  ®               ¸    
=   Y     5   ]   T  ]   : Q Ö0ÏÈÿÿÿ¶a !   sendAsyncMessage-   Contact:Save:Return:KO   requestID   errorMsg          I   this.ContactService.receiveMessage/<Á                   r       ¹   
   !                                     ä  Ñ  ·               ¸    
=   Y     5   ]     5   5   ]   : QA¸   
=   Y     5   5   ]   =   ]   	: QÖ2ÏÔÿÿÿ´Ò+ÔÊÿÿÿºZ !   sendAsyncMessage1   Contact:Remove:Return:OK   requestID   options   id   contactID!   broadcastMessage   Contact:Changed   remove   reason          I   this.ContactService.receiveMessage/<Á                 2       ¹                                             aErrorMsg ð  c  »               ¸    
=   Y     5   ]   T  ]   : Q Ö2ÏÈÿÿÿ´c !   sendAsyncMessage1   Contact:Remove:Return:KO   requestID   errorMsg          I   this.ContactService.receiveMessage/<Á                   J       ¹                                           3  ê  Ã               ¸    
=   Y     5   ]   : QA¸   
=   Y   =   ]   : QÖ2ÏÿÿÿÎÒ+ÊÿÿÿÕ? !   sendAsyncMessage1   Contacts:Clear:Return:OK   requestID!   broadcastMessage   Contact:Changed   remove   reason          I   this.ContactService.receiveMessage/<Á                 2       ¹                                             aErrorMsg 	    Ç               ¸    
=   Y     5   ]   T  ]   : QÖ2ÏÈÿÿÿ´c !   sendAsyncMessage1   Contacts:Clear:Return:KO   requestID   errorMsg          I   this.ContactService.receiveMessage/<Á                 2       ¹                                             revision m     Ñ               ¸    
=   Y     5   ]   T  ]   : QÖÏÈ  Ò !   sendAsyncMessage#   Contacts:Revision   requestID   revision          I   this.ContactService.receiveMessage/<Á                 2       ¹                                             aErrorMsg )   ¸   ×               ¸    
=   Y     5   ]   T  ]   : QÖ8ÏÈÿÿÿ®i !   sendAsyncMessage=   Contacts:GetRevision:Return:KO   requestID   errorMsg          I   this.ContactService.receiveMessage/<Á                 2       ¹                                             count !  )"  á               ¸    
=   Y     5   ]   T  ]   : QÖÏÈ  â !   sendAsyncMessage   Contacts:Count   requestID   count          I   this.ContactService.receiveMessage/<Á                 2       ¹                                             aErrorMsg ="  Æ"  ç               ¸    
=   Y     5   ]   T  ]   : QÖ2ÏÈÿÿÿ´c !   sendAsyncMessage1   Contacts:Count:Return:KO   requestID   errorMsg                 id       ,  :       W   U  ÿÿÿÿÿÿÿÿè          ÿÿÿÿU         ÿÿÿÿL         ÿÿÿÿo         ÿÿÿÿÒ         ÿÿÿÿ5         ÿÿÿÿ         ÿÿÿÿÒ         ÿÿÿÿ            "  E       