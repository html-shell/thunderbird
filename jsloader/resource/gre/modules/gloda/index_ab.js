ç¿s¹                Ú  #   ¹   '   ¿                          $            resource:///modules/gloda/index_ab.js     ;%                                      !f        Q;   5      Q;   5      Q;   5      Q;   5   	   Q;   ¸   

=   : Q;   ¸   

=   : Q;   ¸   

=   : Q;   ¸   

=   : Q;   ¸   

=   : Q;   ¸   

=   : Q;   ¸   

=   : Q;   ¸   

=   : Qn   Y   @]   =   ]      ]      ]      a      ]      ]      ]      ]      ]   o   Q;   ¸    
;   : Qn   !Y   =   "]   #@]      	]   $   
]   %   ]   &o   !Q{ËÐÐÐÐÕ5Õ4Õ0Õ2Õ2Õ7Õ0Õ1ÊÊÊ$Ê)Ê1ÊMÊUÊcÊnÐyÕ-{ÊÊÊ  Ê Ð{ !   EXPORTED_SYMBOLS   Cc   Components   classes   Ci   interfaces   Cr   results   Cu   utils   importO   resource:///modules/gloda/collection.jsM   resource:///modules/gloda/datastore.jsE   resource:///modules/gloda/gloda.jsI   resource:///modules/gloda/indexer.jsI   resource:///modules/gloda/log4moz.jsS   resource:///modules/gloda/noun_freetag.jsE   resource:///modules/gloda/utils.jsG   resource:///modules/mailServices.js   GlodaABIndexer	   _log   index_ab	   name   enable   disable   workers%   _worker_index_card   initialSweep   onItemAdded   onItemRemoved+   onItemPropertyChanged   GlodaIndexer   registerIndexer   GlodaABAttrs   gloda.ab_attr   providerName	   init!   defineAttributes   process                     GlodaABIndexer      GlodaABAttrs                  ÿÿÿÿ   +   GlodaABIndexer.enableÁ                   s       ¹                                            u  ò               A5    @   %A;   5   ¸   
=   : 6    Q;   5   ¸   
A;   5   	5   
;   5   	5   ;   5   	5   : QÈ×ÉÒÏÐÐ!R 	   _log   Log4Moz   repository   getLogger   gloda.index_ab   MailServices   ab-   addAddressBookListener   Ci   nsIAbListener   itemAdded   itemChanged)   directoryItemRemoved   ÿÿÿÿ   -   GlodaABIndexer.disableÁ                          ¹                                              E  $             ;    5   ¸   
A: QÖ0    MailServices   ab3   removeAddressBookListener   ÿÿÿÿ   -   GlodaABIndexer.workersÁ                   +       ¹                                              è  )             Z  Z  =    `   Y   A5   ]   `  `   É	Ô.    ab-card%   _worker_index_card   worker   ÿÿÿÿ   C   GlodaABIndexer._worker_index_cardÁ                     ¹      e                        6      @  	   aJob   aCallbackHandle   .generator	   card	  Á	  1       	      É   Ê   ÐQ   5       Q   5     VÆ       Q   Q;   ¸   
;   5   :    Q   ¸   
=   : Q   ¸   
  5   ¸   
:  : Q   ¸   	
  :    Q;   5   
  Ë  ÐQ   5   Ù      ¦Æ      Q  5   >7   Q   C6   QA5   ¸   
=   : Q  ¸   
;   ¸   
   5   Y     ]   BB  : :   Ë  ÐQA5   ¸   
=   : QÈÇÈÇ;   5      Ë  ÐQ   ÌJ1ÌÐ4ÊØ6
ÖÉÕ9Ýÿÿÿô
ÑÉÕ=ÏÑÒ@ÌBÖÌÛ2ÌDCEËÚJÕ    id   primaryEmail   Gloda   newQuery   NOUN_IDENTITY	   kind   email   value   toLowerCase   getCollection   kWorkAsync   items   length'   _hasAddressBookCard	   _log   debugA   Found identity, processing card.   pushAndGo   grokNounItem   contact	   card+   Done processing card.   GlodaIndexer   kWorkDone    ÿÿÿÿ          query   %   identityCollection                    identity       2   I  ÿÿÿÿ   ß          
   Ã   `       ÿÿÿÿ   7   GlodaABIndexer.initialSweepÁ                          ¹                                              Ü	  ä	  M                  ÿÿÿÿ   -   ab_indexer_onItemAdded               w       ¹      $                                        aParentDir   aItem   identity  Ñ
  '  U       
      T ;    5   r    A5   ¸   
=   : Q;   ¸   
;   5   =   	T 5   
¸   
:  :    QV      V   C6   QÏYÖÌÞ&ZÈ\Ë$    Ci   nsIAbCard	   _log   debug=   Received Card Add Notification-   GlodaCollectionManager7   cacheLookupOneByUniqueValue   Gloda   NOUN_IDENTITY   email@   primaryEmail   toLowerCase'   _hasAddressBookCard   ÿÿÿÿ   1   ab_indexer_onItemRemoved               w       ¹      $                                        aParentDir   aItem   identity  ó  O  c       
      T ;    5   r    A5   ¸   
=   : Q;   ¸   
;   5   =   	T 5   
¸   
:  :    QV      V   B6   QÏgÖÌÞ&hÈjË%    Ci   nsIAbCard	   _log   debugE   Received Card Removal Notification-   GlodaCollectionManager7   cacheLookupOneByUniqueValue   Gloda   NOUN_IDENTITY   email@   primaryEmail   toLowerCase'   _hasAddressBookCard   ÿÿÿÿ   A   ab_indexer_onItemPropertyChanged                u       ¹   	                            
             aItem   aProperty   aOldValue   aNewValue      ã  n             T @E   QT  ;    5   r   [  Q   QA5   ¸   
=   : QT     Q;   =   V   R   Q;   ¸   
V  : QÈÙÑÖs
È
ÏÈÕq;    Ci   nsIAbCard	   _log   debugC   Received Card Change Notification   IndexingJob   ab-card   GlodaIndexer   indexJob    ÿÿÿÿ       	   card       job            T   ÿÿÿÿ   ÿÿÿÿ   #   GlodaABAttrs.initÁ                  f       ¹                              	           k  9               A;   5   ¸   
=   : 6    QA¸   
:  Q   8   Qv   QA5    ¸   
=   V   : QV   pÈ    ×ÉÑÌÛÌ 	   _log   Log4Moz   repository   getLogger   gloda.abattrs!   defineAttributes   error   Error in init:     ÿÿÿÿ          ex         !          3   ,   ÿÿÿÿ   ÿÿÿÿ   ;   GlodaABAttrs.defineAttributesÁ                  !      ¹   9   ×                       p           X  Ò!         
      A;   ¸   
Y   A]   ;   5   ]   ;   5   ]   =   ]   	B]   
;   5   ]   =   ]   Z  ;   5   `   ]   ;   5   ]   : 6    QA;   ¸   
Y   A]   ;   5   ]   ;   5   ]   =   ]   	C]   
;   5   ]   =   ]   Z  ;   5   `   ]   ;   5   ]   C]   : 6   QA;   ¸   
Y   A]   ;   5   ]   ;   5   ]   =   ]   	C]   
;   5   ]   =   ]   Z  ;   5   `   ]   ;   5   ]   C]   : 6   QA;   ¸   
Y   A]   ;   5   ]   ;   5   ]   =   ]   	C]   
;   5   ]   =   ]   Z  ;   5   `   ]   ;   5   ]   C]   : 6   QA;   ¸   
Y   A]   ;   5   ]   ;   5   ]   =    ]   	C]   
;   5   !]   =   "]   =   #]   $=   %]   &Z  ;   5   `   ]   ;   5   ]   C]   : 6    QA;   ¸   
Y   A]   ;   5   ]   ;   5   ]   =   (]   	C]   
;   5   ]   =   (]   Z  ;   5   `   ]   ;   5   ]   C]   : 6   'QA;   ¸   
Y   A]   ;   5   ]   ;   5   ]   =   *]   	C]   
;   5   ]   =   *]   Z  ;   5   `   ]   ;   5   ]   C]   : 6   )QA;   ¸   
Y   A]   ;   5   ]   ;   5   ,]   =   -]   	C]   .=   /]   0B]   
Z  ;   5   `   ]   ;   ¸   1
=   -: ]   @]   2C]   : 6   +Q=   3A5   +q   _A5   +5   3K   Q   9mW   A5   4¸   5
=   6V   : Q;   7¸   8
V   : QãQLMÿÿÿÇQNÈÒÏÏÊÏÊÓÏ   É  ÒÏÏÊÏÊÓÏ  É  ¥ÒÏÏÊÏÊÓÏ  ¥"É  ±ÒÏÏÊÏÊÓÏ  ± É  ¿ÒÏÏÊÏÊÊÊÓÏ  ¿ É  ÍÒÏÏÊÏÊÓÏ  ÍÉ  ÙÒÏÏÊÏÊÓÏ  ÙÉ  êÒÏÏÊÊÓÑÈ  êÉ  ùÌÔ0>ÊÛá$ )   _attrIdentityContact   Gloda   defineAttribute   provider   BUILT_IN   extensionName   kAttrDerived   attributeType   identities   attributeName   singular-   kSpecialColumnChildren   special   _identities)   storageAttributeName   NOUN_CONTACT   subjectNouns   NOUN_IDENTITY   objectNoun!   _attrContactName!   kAttrFundamental	   name   kSpecialString#   specialColumnName   NOUN_STRING   canQuery-   _attrContactPopularity   popularity   kSpecialColumn   NOUN_NUMBER)   _attrContactFrecency   frecency   contact)   kSpecialColumnParent   contactID   _contactID-   idStorageAttributeName   _contact3   valueStorageAttributeName#   _attrIdentityKind	   kind%   _attrIdentityValue   value   _attrFreeTag   kAttrExplicit   freetag	   bind   freeTags   bindName   lookupNoun   parameterNoun#   parameterBindings	   _log   debug7   Telling FreeTagNoun about:    FreeTagNoun   getFreeTag    ÿÿÿÿ          freeTagName       ß  ?       Õ  K   ÿÿÿÿ   ÿÿÿÿ   )   GlodaABAttrs.processÁ                     ¹      |                       <      @     aContact   aRawReps   aIsNew   aCallbackHandle   .generator	   card	   tagsè!  7%        	      É   Ê   ÐQ   5       Q   5   ;   5      )A5   ¸   
=      : Q   Ì   5   E   Q   5      5            5   6   Q   Z   6   	Q@   Q   ¸   

=   @:    Q   <Æ       Qv   QA5   ¸   
=      : QÈÇ          ò;   â      ¸   
=   : : KÆ      Q   Q   ¨m- Á
:  ¸   
:  5      Q   
5      Q¸   
:  5      Q   
5      QQ   ¸   
:     Q      .  5   	¸   
;   ¸   
   : : QãQLMÿÿÿXQNÈÇ;   5      Ë  ÐQ   Ì  ÌÐÕÜÈåÕÏÒÎÓäÛ4ÿÿÿ÷Ù0  ­×ÿÿÿéÉèØÌ
É
âÿÿÿéÒ Õ 	   card   NOUN_ID   Gloda   NOUN_CONTACT	   _log	   warn7   Somehow got a non-contact:    displayName	   name   freeTags   getProperty   Categories   error9   Problem accessing property:    Iterator   split   ,	   next	   done   value	   trim	   push   FreeTagNoun   getFreeTag   kWorkDone    ÿÿÿÿ          ex       ÿÿÿÿ          iTagName      tagName      M  ®        °           Ö   *   ÿÿÿÿ   <  Á   ÿÿÿÿ
     