ç¿s¹                µ  7   ¹   4         
                   -       0     resource://gre/modules/devtools/gcli/commands/cmd.js     ,         
                                         ;   â   =   : 5        Q5      Q5      QQ;   â   =   : 5      QQ;   ¸   	
=   
Y   : 5      QQ;   ¸   	
=   Y   : 5      Q5      QQ;   â   =   :    Q;   ¸   
A=       : Q;   ¸   
A=      : Q;   ¸   
A=   =   : Q=      Q;      0   Q;   Z  Y   =   ]      a   ;   ¸   
=    : ]   !`   Y   =   "]   ;   ¸   
=   #: ]   !   a      ]   $`  Y   =   %]   ;   ¸   
=   &: ]   !;   ¸   
=   ': ]   (Z  Y   =   )]   ;   ¸   
=   *: ]   !Y   =   +]   =   )]   ,=   -]   .]   /@]   0`   ]   1=   2]   3   a      	]   $`  0   Q	Ê!	f	Ïè	ÏÐ-Ö	Ð2ÖÜBÏÉÿÿÿýÛÛÛKË!Y[Ð_fz|ÉÊÊÑÌÊÑÈÊÎ  ÊÑÈÑÈÊÑÈ
Ê
Ê
ÏÏÊÊÔ  ¯    Cc   Ci   Cu   require   chrome   promiseE   resource://gre/modules/Promise.jsm   Promise   OS   importC   resource://gre/modules/osfile.jsm   TextEncoder   TextDecoderc   resource://gre/modules/commonjs/toolkit/loader.js	   gcli   gcli/index   loader   lazyGetter   prefBranch   supportsString   lazyImporter   NetUtilE   resource://gre/modules/NetUtil.jsm   PREF_DIR+   devtools.commands.dir   exports   mozDirLoader   items   cmd	   name   hidden   lookup   cmdDesc   description   cmd refresh   cmdRefreshDesc	   exec   cmd setdir   cmdSetdirDesc!   cmdSetdirManual2   manual   directory-   cmdSetdirDirectoryDesc	   file   filetype   yes   existing	   type   defaultValue   params   string   returnType   ÿÿÿÿ                     H       ¹                                              prefServiceT  þ               ;    5   ¸   
;   5   :    QV   ¸   
@: ¸   
;   5   : ÛÈÌØ>    CcE   @mozilla.org/preferences-service;1   getService   Ci   nsIPrefService   getBranch   QueryInterface   nsIPrefBranch2   ÿÿÿÿ                               ¹      	                                     4                 ;    5   ¸   
;   5   : ÛJ    Cc=   @mozilla.org/supports-string;1   createInstance   Ci#   nsISupportsString   ÿÿÿÿ   '   loadItemsFromMozDir                O      ¹      ^                         (             dirName   statPromiseÞ  2  !             ;    ¸   
;   ;   5   : 5   ¸   
:     Q   =      ;   ¸   	
Z   :    ¸   

=   : >     Q  Q  Q;   5   ¸   
;   5   :   QV  ¸   
=   ;   5   :   QV  5     Q   ¸   
?:    QV        QÈ;   5   ¸   
   :    QV   ¸   
      : W   QV   ¸   
A   : ÑÊ"Ø$ËÐ)Ñ×ÑÊ*È,ÚÈÎÍ
ÉÑ4ÖÈË;5ÈFÑX    prefBranch   getComplexValue   PREF_DIR   Ci#   nsISupportsString	   data	   trim      promise   resolve   indexOf   ~   CcK   @mozilla.org/file/directory_service;1   getService   nsIProperties   get	   Home   nsIFile	   path   substr   OS	   File	   stat	   then    ÿÿÿÿ         dirService       homeDirFile       homeDir       ÿÿÿÿ      onSuccess                 /       ¹                                          	   stat ÷  h  6             T  5        %;   =         =   R p
ÉÜ3    isDir   Error   '+   ' is not a directory.   ÿÿÿÿ      onFailure                 P       ¹                                             reason   D	  ;             T  ;    5   5   rE   QT  5      *;   =         =   R p   	T  pá%ÜÉ    OS	   File   Error#   becauseNoSuchFile   '#   ' does not exist.   ÿÿÿÿ   +   loadItemsFromMozDir/<Å                 c       ¹      #                          
             itemPromises   iterator   iterPromise÷	  .  F             Z      Q;    5   5       R    Q   ¸   
A    :    QV   ¸   
A   A   : ÊIÚÉÒÈPÑWPW6    OS	   File#   DirectoryIterator   forEach	   then   ÿÿÿÿ   E   loadItemsFromMozDir/</iterPromise<Å                 Q       ¹                                	            entry }
    J             T  5    ¸   
     : E   QT  5       *      ¸   
;   â   T  : : QÔ
É#ÉÞÿÿÿî* 	   name   match   isDir	   push   loadCommandFile   .*\.mozcmd$       ÿÿÿÿ   /   loadItemsFromMozDir/</<Å                   @       ¹                                	          %  ù  P                   ¸    
:  Q;   ¸   
      : ¸   
A    : ÕÖÔV	    close   promise   all	   then   ÿÿÿÿ   3   loadItemsFromMozDir/</</<Å                        ¹                                            itemsArray q  ñ  R             T  ¸    
A    Z   : ÐUSU    reduce   ÿÿÿÿ   7   loadItemsFromMozDir/</</</<Å                        ¹      	                                    	   prev	   curr  ¤  ã  S             T  ¸    
T : 
Í    concat   ÿÿÿÿ   /   loadItemsFromMozDir/</<Å                        ¹                                             reason û  (  W                   ¸    
:  QT  pÕ    close    u      ÿÿÿÿ   ÿÿÿÿ   )   exports.mozDirLoaderÁ                        ¹                                         	   name S  ¯  [             ;    â    :  ¸   
A    : ÊÔ^ '   loadItemsFromMozDir	   then   ÿÿÿÿ   -   exports.mozDirLoader/<Å                        ¹      	                                        items   «  \             Y   T  ]    	É    items   ÿÿÿÿ      loadCommandFile               =       ¹                                      D      entry   readPromise  î  f             ;    5   ¸   
   5   :    QV   ¸   
A    : W   ÛÈÑÈy    OS	   File	   read	   path	   then   ÿÿÿÿ   9   loadCommandFile/readPromise<Å             å       ¹      D                                       array   principal   decoder   source   sandbox	   data á  ê  h             ;    R    QV  ¸   
T  :   Q;   5   ¸   
;   5   : W   Q;   5   V   Y      5   	]   
R   Q;   ¸   
V  V  =      5   ?:   Q;   ¸   
V  :     -;   ¸   
=      5   =   : QV  
ÈÎ	ÈÑÊkÈnÔÏnÈqäÈsÐæx    TextDecoder   decode   Cc=   @mozilla.org/systemprincipal;1   createInstance   Ci   nsIPrincipal   Cu   Sandbox	   path   sandboxName   evalInSandbox   1.8	   name   Array   isArray   console   error   Command file 'A   ' does not have top level array.   ÿÿÿÿ   +   exports.items<.hiddenÁ                          ¹                                           %  d               ;    ¸   
;   :  Ñ&    prefBranch!   prefHasUserValue   PREF_DIR   ÿÿÿÿ   +   exports.items<.hiddenÁ                          ¹                                           î  -               ;    ¸   
;   :  Ñ&    prefBranch!   prefHasUserValue   PREF_DIR   ÿÿÿÿ   '   exports.items<.execÁ               d       ¹      #                                    	   args   context   dirName  A  1               ;    ¸   
:  Q;   ¸   
;   ;   5   : 5   ¸   
:     Q;    ¸   	
=   
Z  V   `   : Ð
ÑÊ  ×Õ)ÈÿÿÿÞ- 	   gcli	   load   prefBranch   getComplexValue   PREF_DIR   Ci#   nsISupportsString	   data	   trim   lookupFormat   cmdStatus3   ÿÿÿÿ   +   exports.items<.hiddenÁ                          ¹                                             Ü  $  £             C    ÿÿÿÿ   '   exports.items<.execÁ                 m       ¹                                          	   args   context  8  $  ¦             ;    T  5   0   Q;   ¸   
;   ;   5   ;    : Q;   ¸   	
:  Q;   ¸   

=   Z  T  5   `   : ÓäÐÕ)ÌÿÿÿÞ4    supportsString	   data   directory   prefBranch   setComplexValue   PREF_DIR   Ci#   nsISupportsString	   gcli	   load   lookupFormat   cmdStatus3