çżsš                á      š      e                                 0     resource://gre/modules/devtools/gcli/ui/intro.js     
                          n    ;   â   =   : 1    Qn   ;   â   =   : 5   1   Qn   ;   â   =   : 1   Q;   Z  Y   =   	]   
=   ]   =   ]   ;    ¸   
=   : ]   B]   `   0   Q;       0   Q;      0   QÔÉ˙˙˙ýÔ	Î˙˙˙ýÔÉ˙˙˙ýÉĘĘĘŃČĐ"'Đ49ĐX 	   l10n   require   ../util/l10n   Output   ../cli	   view   ./view   exports   items   setting	   item   hideIntro	   name   boolean	   type   lookup   hideIntroDesc   description   defaultValue   maybeShowIntro   createView   ˙˙˙˙   -   exports.maybeShowIntroÁ               °       š      B                                    )   commandOutputManager#   conversionContext   hideIntro   output   viewData  .  Ń  '             T 5    5   ¸   
=   : W   QV   5      ;   T R W  QV  =   0   QT  ¸   
Y   V  ]   	: QA¸   

@T C: W  QV  ¸   
Y   C]   =   ]   V  ]   : QŮČÉ-É	ČĎĎ É˙˙˙ŕ1ÍČ3ĐĘÉ˙˙˙ÍE    system   settings   get   hideIntro   value   Output	   type	   view   onOutput   output   createView   complete   isTypedData	   data   ˙˙˙˙   %   exports.createViewÁ                 }       š      0                          	      D      ignoreArgs#   conversionContext   showHideButton  ?  
  9             ;    ¸   
Y   =   ]   Y   =   ]   ]   Y   ;   5   ]      5   	]   
   5   ]   T ]       ]   ]   : ŃĘJĎĎĎĎČĎ:	W 	   view   createView  <div save="${mainDiv}">
  <p>${l10n.introTextOpening3}</p>

  <p>
    ${l10n.introTextCommands}
    <span class="gcli-out-shortcut" onclick="${onclick}"
        ondblclick="${ondblclick}"
        data-command="help">help</span>${l10n.introTextKeys2}
    <code>${l10n.introTextF1Escape}</code>.
  </p>

  <button onclick="${onGotIt}"
      if="${showHideButton}">${l10n.introTextGo}</button>
</div>	   html   intro.html   stack   options	   l10n   propertyLookup   update   onclick   updateExec   ondblclick   showHideButton   onGotIt	   data   ˙˙˙˙   C   exports.createView/<.data.onGotItÁ               N       š   	                                          ev   settings   hideIntro ˛	  z
  P                5    5   W   QV   ¸   
=   : W  QV  C0   QA5   5   =   0   QÔĐČËÖ$    system   settings   get   hideIntro   value   mainDiv   style   display	   none