ç¿s¹                ¹  #   ¹      *                         '       0     resource://gre/modules/devtools/gcli/commands/commands.js     8>                                       n    ;   â   =   : 1    Qn   ;   â   =   : 1   Q;   5      0   Q;   5      0   Q;   	;   0   Q;   
5      0   Q;   ¸   
;   
5   =   Y      ]   C]   : Q;   
5      0   Q;   	;   
0   
Q;   5      	0   Q;   5      
0   Q;   5      0   Q;   5      0   Q;   5      0   Q;   5      0   Q;   5      0   Q;   	;   0   Q;   	;   0   QÊ	G	  Ç	 K	 	ÔÉÿÿÿýÔÉÿÿÿý@G     ¥Õ  ·  ¼ÕÐ  Ç  Õ àÊ    %Õ CÐ K W `Õ r zÕ  Õ Õ ¤Õ ¯ ½Õ Ü âÕ øÐ Ð4 	   util   require   ../util/util	   l10n   ../util/l10n   Command   prototype   toJson/   getParameterByShortName   exports   Parameter   isKnownAs   Object   defineProperty   hidden   get   enumerable   Commands   add   remove   getAll   getCommandSpecs!   addProxyCommands'   removeProxyCommands)   CommandOutputManager   ÿÿÿÿ      lookup                     ¹      [                          $      D   	   data   onUndefined   locales   translated            	         @   &T    ;    ¸   
T :       '=   H         '=   H   ¸   5      ;    ¸   
   5   : ;    ¸   
:  W   Q   QV   ¸   
    : Q   @      ;   ¸   
=   	;   
¸   
V   : =   ;   
¸   
   : : Q=   ;    ¸   
T : Ï#&Ì*ÌÊÖ/Ì
ÈÔ59ÑÐÊÑ9<?Ï 	   l10n   lookup   string   object   key'   getPreferredLocales	   some   console   errorW   Can't find locale in descriptions: locales=	   JSON   stringify   , description=!   (No description)   ÿÿÿÿ      lookup/<Á                        ¹                                              locale   Ü  1                T  7   Q   @ÏÈ    ÿÿÿÿ      Command                     ¹                                #      D      types   commandSpec   paramSpecs   addParam   usingGroups  Ë  G             ;    ¸   
   : ¸   
    A: QA5       ;   =   R pA5   @   AZ   0   Q;   ¸   
A5   :     ;   =   	A5   R pAB0   
QA=   Aq   A5      
;   0   QA;   â   A5   =   : 0   QA=   Aq   A5      
;   0   QA;   â   A5   : 0   QA5   W   QAZ   0   QAY   0   QAY   0   Q   ¸   
A:    QB   QV   ¸   
   A: QA5   ¸   
   A: QàJHLËPÈËSÒÒWÈÈÛÖÉÈÛÑÉ_ËËÌÌdÌkdÉrxÐ  x  Ò          Object	   keys   forEach	   name   ErrorQ   All registered commands must have a name   params   Array   isArrayG   command.params must be an array in %   hasNamedParameters   description   undefined   lookup   canonDescNone   manual   paramGroups   _shortParams	   bind   ÿÿÿÿ      Command/<Á                        ¹                                              key Í  ú  H             AT     T  79QÏ    ÿÿÿÿ   #   Command/addParam<Á                      ¹                                             param   groupName ,  5  d             T  5    D   Q;   ¸   
=   : W   QA5   ¸   
T  : QA5   ¸   
V   :     A5   V   Z   9QA5   V   7¸   
T  : QßÈÔÑÐjÙ(    groupName	   l10n   lookup+   canonDefaultGroupName   params	   push   paramGroups   hasOwnProperty   ÿÿÿÿ      Command/<Á               Ð       ¹      W                                D   	   spec   param¨  ±  x                5        ¢;        A@R W   Q  V   : QV   5       AC0   Q  E   QV   5   @   ,;   =   A5   =      5   R pV   5   @   C  Q   '   5   	¸   

    A: QC  QË  
ÒÈÎ}
ÊÈÖËØ  ËÌÖ          group   Parameter'   isPositionalAllowed%   hasNamedParameters   groupName   Errorg   Parameters can't come after param groups. Ignoring 	   name   /   params   forEach   ÿÿÿÿ      Command/</<Á               G       ¹                                             ispec   param ¸           
      ;      T  A   5   R W   Q  V   : QV   5       AC0   QÙÈÎÊ
È    Parameter   group'   isPositionalAllowed%   hasNamedParameters   ÿÿÿÿ      Command/<Á                 Q       ¹                                 	            param Ù  Á               T  5    @   FA5   T  5    7@   ;   =   T  5    R pA5   T  5    T  9QÊÑÔÓ'    short   _shortParams   ErrorC   Multiple params using short name    ÿÿÿÿ   1   Command.prototype.toJsonÁ                 Á       ¹      ;                                    	   json-  õ  ¥             Y   =    ]   A5   ]   A5   ¸   
    : ]   A5   ]   A5   @]   W   QA5   ;   	¸   

=   : I   V   A5   0   QA5   @   V   A5   0   QA5   @   V   A5   0   QV   ÊËÒÈËÒ×ÐÈÐÈÐ    command	   item	   name   params   map   returnType	   exec   isParent   description	   l10n   lookup   canonDescNone   manual   hidden   ÿÿÿÿ   K   Command.prototype.toJson/json.params<Á                        ¹                                             param   ±  ©             T  ¸    
:  .Ê    toJson   ÿÿÿÿ   S   Command.prototype.getParameterByShortNameÁ                        ¹                                             short c    ¼             A5    T  7Ë     _shortParams   ÿÿÿÿ      Parameter               x      ¹   )   é                          ]            types   paramSpec   command   groupName   typeSpec    +     Ç       	      AT D   QY   =   ]   0    QAT 0   QAA5   5   0   QAA5   5   0   QAA5   5   0   QA5   @E   Q     ¸   
A5   :     ;   =   R pAT 0   	QA5   	@   +A5   5   
@   ;   =   R p   ZA5   5   
@   HAA5   5   
CH   ;   ¸   
=   :    =   A5   5   
0   	QA5       &;   =   A5    5   =   R pA5   W   QAT  ¸   
V   : 0   QA5   @   y;   ¸   
=   T  ¸   
:  ¸   
=   : : Q;   =   A5    5   =   A5   =   ;   ¸   
V   : R pA5   5   =   HE   QA5   5   ;   I   3;   =   A5    5   =   A5   =    R pA5   ! E   AQA5   5   ;   HE   *QA5   5   "@E   QA5   5   =   I   3;   =   A5    5   =   A5   =   #R pAA5   5   ;   I   A5   5      A5   ¸   "
:  5   $0   QA;   â   A5   5   %: 0   %QA;   â   A5   5   &=   ': 0   &QAA5   ;   H0   (QAA5   	@0   !QÏÐÊÒÒÒÎÒËÊÈ&ÍËÉÍÎÑÈ××  á
ËÏÉÈÛ ÓÿÿÿàäÖ1  é
  ï×Ñä  ñ
  øäää  ú
ÒÐÍÎÖÉÛÉÓÏ2    command   unnamed	   name   paramSpec	   type   short	   test   Errore   'short' value must be a single alphanumeric digit.   groupName   optioni   Can't have a "option" property in a nested parameter	   l10n   lookup+   canonDefaultGroupName      In ;   : all params must have a name   createType   console   error   Known types:    getTypeNames	   join   ,    //   : can't find type for: 	   JSON   stringify   boolean   defaultValue   undefinedu   : boolean parameters can not have a defaultValue. Ignoring'   isPositionalAllowed   getBlank]   : Missing defaultValue for optional parameter.   value   manual   description   canonDescNone   isDataRequired   [0-9A-Za-z]       ÿÿÿÿ   ;   Parameter.prototype.isKnownAsÁ                 (       ¹                                          	   name M!  !              T  =    A5   HD   QT  =   A5   HçB    --	   name   -   short   ÿÿÿÿ   	   .getÁ                          ¹                                           7"  a"              A5    5   Ì    paramSpec   hidden   ÿÿÿÿ   5   Parameter.prototype.toJsonÁ                 '      ¹      H                                     	   jsonÝ"  ¢&  %      	      Y   A5    ]    A5   ¸   
A5   5    A5    : ]   A5   ]   W   QA5   5   ;   I   V   Y   0   QA5   5   @   V   A5   5   0   QA5   5   	@   V   A5   5   	0   	QA5   5   
@   V   A5   5   
0   
QA5   @D   QA5   5   @   &V   A5   D   QA5   5   0   QV   ËÞÈÐ /ÑÏÍÕÍÕÍÕ >Ûá 	   name	   type   getSpec   command   short   paramSpec   defaultValue   undefined   description   manual   hidden   groupName   option   ÿÿÿÿ      Commands                 I       ¹                                              types '  º(  K            AT  0    QAY   0   QAZ   0   QAY   0   QA;   ¸   
=   : 0   QÊÌËÌÒÉ.    types   _commands   _commandNames   _commandSpecs!   onCommandsChange	   util   createEvent3   commands.onCommandsChange   ÿÿÿÿ   -   Commands.prototype.addÁ               Ê       ¹   
   6                                D      commandSpec   commandæ)  -,  `            A5       5   7@   3A5       5   /QAA5   ¸   
    : 0   Q;   A5      R W   QA5       5   V   9QA5   ¸   
   5   : QA5   ¸   
:  QA5      5      9QA¸   	
:  QV   ÓÒÓÉ iÑ
ÈÖÛÑ×Ì    _commands	   name   _commandNames   filter   Command   types	   push	   sort   _commandSpecs!   onCommandsChange   ÿÿÿÿ   U   Commands.prototype.add/this._commandNames<Á                        ¹                                          	   test Û*  +  d            T     5    IÏ! 	   name   ÿÿÿÿ   3   Commands.prototype.removeÁ                ~       ¹      4                                      commandOrName	   name L-  /  z            T  '=    H   T     T  5      QA5      7    BA5      /QA5      /QAA5   ¸   
    : 0   QA¸   
:  QCÊÈÎÍÍÍÓÉÌ    string	   name   _commands   _commandSpecs   _commandNames   filter!   onCommandsChange   ÿÿÿÿ   [   Commands.prototype.remove/this._commandNames<Á                        ¹                                           	   test ®.  Ô.              T     IÊ    ÿÿÿÿ   -   Commands.prototype.getÁ                        ¹                                          	   name /  0              A5    T  7D   Q;   Ö)    _commands   undefined   ÿÿÿÿ   3   Commands.prototype.getAllÁ                   '       ¹                                          b0  Ï0              ;    ¸   
A5   : ¸   
    A: ÒÏ 	    Object	   keys   _commands   map   ÿÿÿÿ   7   Commands.prototype.getAll/<Á                        ¹                                          	   name 0  Å0              A5    T  7Ë    _commands   ÿÿÿÿ   E   Commands.prototype.getCommandSpecsÁ                  A       ¹      $                          	             commandSpecs1  2  ¤            Z      Q;    ¸   
A5   : ¸   
    ¸   
A: : Q   Êè ¬ §&ÿÿÿÜ ®    Object	   keys   _commands   forEach	   bind   ÿÿÿÿ   I   Commands.prototype.getCommandSpecs/<Á               =       ¹                                          	   name   command Ý1  _2  §            A5    T  7W   QV   5       #   ¸   
V   ¸   
:  : QÏÊ×ÿÿÿî$    _commands   noRemote	   push   toJson   ÿÿÿÿ   G   Commands.prototype.addProxyCommandsÁ                 Ò       ¹      e                                D      commandSpecs   remoter   prefix   to  5  49  ½               @   ¬A5       7@   0;   ;   ¸   
=   Z     `   : R pA¸   
Y      ]   C]   ;   ¸   
=   Z  T `   : ]   	;   ¸   
=   
Z  T `   : ]   : QT  ¸   
    ¸   
A: : QÎÛ8ÉÿÿÿØÿÿÿö ÅÍÊÕ3ÿÿÿÚÈÕ0ÿÿÿØÈ Å ÍÖ Û Íÿÿÿë Û    _commands   Error	   l10n   lookupFormat!   canonProxyExists   add	   name   isProxy   canonProxyDesc   description!   canonProxyManual   manual   forEach	   bind   ÿÿÿÿ   K   Commands.prototype.addProxyCommands/<Á                x       ¹      .                          	            commandSpec   originalName 7  %9  Í            T  5       QT  5       T      ¸   
A: 0   Q  @   "T    =   T  5    0    QT  C0   QA¸   
T  : QÎÉÏ ÐÉ ÖÝÊÏ 	   name   isParent	   exec	   bind       isProxy   add   ÿÿÿÿ   o   Commands.prototype.addProxyCommands/</commandSpec.exec<Á                        ¹                                          	   args   context  8  y8  Ð            T    0    Q  T  T : ÎÌ    commandName   ÿÿÿÿ   M   Commands.prototype.removeProxyCommandsÁ                k       ¹      ?                                D      prefix   toRemove   removedî9  ú;  â            Z      Q;    ¸   
A5   : ¸   
    ¸   
A: : QZ      Q   ¸   
   ¸   
A: : Q   Êè ä*ÿÿÿØ êÊØ õ ëÿÿÿï ÷    Object	   keys   _commandSpecs   forEach	   bind   ÿÿÿÿ   Q   Commands.prototype.removeProxyCommands/<Á                 -       ¹                                          	   name @:  :  ä            T  ¸    
   : >H      ¸   
T  : QÏÓ    indexOf	   push   ÿÿÿÿ   Q   Commands.prototype.removeProxyCommands/<Á               h       ¹      %                                    	   name   command Ñ:  Ø;  ë            A¸    
T  : W   QV   5      ,A¸   
T  : Q   ¸   
T  : Q   $;   ¸   
=   T  =   : QË
ÈÉ'ÏØÕ ò=    get   isProxy   remove	   push   console   error+   Skipping removal of 'I   ' because it is not a proxy command.   ÿÿÿÿ   )   CommandOutputManager                          ¹      
                                     ¶=  >              A;   ¸   
=   : 0    QÒÉ2    onOutput	   util   createEvent;   CommandOutputManager.onOutput