ç¿s¹                è     ¹   &   à                                  0     resource://gre/modules/devtools/gcli/commands/preflist.js              	                       n    ;   â   =   : 1    Qn   ;   â   =   : 5   1   Qn   Y   =   ]   =   ]   =   	]   
    ]   1   Qn   Y   =   ]   =   ]   ;    ¸   
=   : ]   ;    ¸   
=   : ]   Z  Y   =   ]   =   ]   @]   ;    ¸   
=   : ]   ;    ¸   
=   : ]   `   ]   =   ]      ]   1   Q;   5      0   Q;   5   ;    5    0    Q;   5      0   !Q;   5      0   "Q;   5      0   #Q;   $Z  ;   `   ;   `  0   %QgÊ  	ÔÉÿÿÿýÔ
ÎÿÿÿýÊÊÊÊÐgÊÊÊÑÈÑÈÊÊÑÈÑÑuÊÐg    Õ  Ú.  Õ  ´Õ  ¾ÕÉÉÏ 	   l10n   require   ../util/l10n   Promise   ../util/promise   prefsData   converter	   item	   from	   view   to	   exec   prefList   command   pref list	   name   lookup   prefListDesc   description   prefListManual   manual   search   string	   type   defaultValue%   prefListSearchDesc)   prefListSearchManual   params   returnType   PrefList   prototype   onLoad   propertyLookup   updateTable   onFilterChange   onSetClick   exports   items   ÿÿÿÿ      prefsData.execÁ               b       ¹      0                                       prefsData#   conversionContext   prefList  Z  :               ;    T  T R W   QY   =   ]   V   ]   Y   C]   C]   =   ]   ]   =   	]   
=   ]   ÌÈÊ7ÉÏ=Ê_Ë    PrefListá  <div ignore="${onLoad(__element)}">
  <!-- This is broken, and unimportant. Comment out for now
  <div class="gcli-pref-list-filter">
    ${l10n.prefOutputFilter}:
    <input onKeyUp="${onFilterChange}" value="${search}"/>
  </div>
  -->
  <table class="gcli-pref-list-table">
    <colgroup>
      <col class="gcli-pref-list-name"/>
      <col class="gcli-pref-list-value"/>
    </colgroup>
    <tr>
      <th>${l10n.prefOutputName}</th>
      <th>${l10n.prefOutputValue}</th>
    </tr>
  </table>
  <div class="gcli-pref-list-scroller">
    <table class="gcli-pref-list-table" save="${table}">
    </table>
  </div>
</div>
	   html	   data%   blankNullUndefined   allowEval   prefsData->view   stack   optionsm  .gcli-pref-list-scroller {
  max-height: 200px;
  overflow-y: auto;
  overflow-x: hidden;
  display: inline-block;
}

.gcli-pref-list-table {
  width: 500px;
  table-layout: fixed;
}

.gcli-pref-list-table tr > th {
  text-align: left;
}

.gcli-pref-list-table tr > td {
  text-overflow: elipsis;
  word-wrap: break-word;
}

.gcli-pref-list-name {
  width: 70%;
}

.gcli-pref-list-command {
  display: none;
}

.gcli-pref-list-row:hover .gcli-pref-list-command {
  /* 'pref list' is a bit broken and unimportant. Band-aid follows */
  /* display: inline-block; */
}
   css   gcli-pref-list   cssId   ÿÿÿÿ      prefList.execÁ                        ¹                                      D   	   args   contextâ  J  v             ;        R Ë      Promise   ÿÿÿÿ      prefList.exec/<Á                 !       ¹                                      D      resolve   reject   D  w             ;    â        ¸   
A: ×
: QyÖyy    setTimeout	   bind   ÿÿÿÿ   #   prefList.exec/</<Á                 P       ¹                                              prefsData  -  y             Y     5    5   ¸   
  5   : ]     5   ]   W   Q   V   : Q
à
È
Ô~Î    system   settings   getAll   search   ÿÿÿÿ      PrefList                 )       ¹                                             prefsData#   conversionContext    -               AT  5    0    QAT  5   0   QAT 0   QÏÏÊ+    search   settings#   conversionContext   ÿÿÿÿ   3   PrefList.prototype.onLoadÁ               .       ¹                                             element   table º  -               T  ¸    
=   : W   QA¸   
V   : Q=   ÏÈÐ
    querySelector+   .gcli-pref-list-table   updateTable      ÿÿÿÿ   =   PrefList.prototype.updateTableÁ               X       ¹   
   +                                       table	   view ô  ©               A5    ¸   
Y   =   ]   Y   C]   =   ]   ]   A]   : W   QV   ¸   	
T  C: QÒÊ  ¯Ï   È  ³Ó #   conversionContext   createView·  <table>
  <colgroup>
    <col class="gcli-pref-list-name"/>
    <col class="gcli-pref-list-value"/>
  </colgroup>
  <tr class="gcli-pref-list-row" foreach="setting in ${settings}">
    <td>${setting.name}</td>
    <td onclick="${onSetClick}" data-command="pref set ${setting.name} ">
      ${setting.value}
      [Edit]
    </td>
  </tr>
</table>
	   html%   blankNullUndefined   prefsData#inner   stack   options	   data   appendTo   ÿÿÿÿ   C   PrefList.prototype.onFilterChangeÁ               m       ¹                                             ev	   root   table Ø  »  ¶             T  5    5   A5   I   XAT  5    5   0   QT  5    5   5   W   QV   ¸   
=   : W  QA¸   
V  : QÔÔ×ÐÈÐ    target   value   search   parentNode   querySelector+   .gcli-pref-list-table   updateTable   ÿÿÿÿ   ;   PrefList.prototype.onSetClickÁ               2       ¹                                             ev   typed æ  S  À             T  5    ¸   
=   : W   QA5   ¸   
V   : QÔÈÕ%    currentTarget   getAttribute   data-command#   conversionContext   update