ç¿s¹                  7   ¹   9   w      	                   8       0     resource://gre/modules/devtools/gcli/commands/addon.js     ,!         
                          
               ;   â   =   : 5        Q5      Q5      QQ;   ¸   
=   Y   : 5      QQ;   â   =   	:    Q;   â   =   : 5      
QQ;    5   ¸   
;   5   : ¸   
=   : ¸   
=   :    Q       Q;   â   ;   ;   5   :    Q;   â   ;   ;   5   :    Q;   Z  Y   =   ]   =   ]   =   ]   =   ]    C]   !   ]   "   ]   #`   Y   =   ]   ;   ¸   #
=   $: ]   %`  Y   =   &]   ;   ¸   #
=   ': ]   %=   (]   )Z  Y   =   ]   Y   =   ]   f   ]   *]   =   +]   ,;   ¸   #
=   -: ]   %`   ]   .   ]   /`  Y   =   0]   =   (]   1=   2]   3   ]   /`  Y   =   4]   ;   ¸   #
=   5: ]   %Z  Y   =   ]   =   ]   ;   ¸   #
=   6: ]   %`   ]   .   ]   /`  Y   =   7]   ;   ¸   #
=   8: ]   %Z  Y   =   ]   =   ]   ;   ¸   #
=   6: ]   %`   ]   .   ]   /`  0   Q"Ê(	ÏèÖÐ8ÏÉÿÿÿýÏÐ-ÑÊÊÊÉÿÿÿýË
"ÙÉÿÿÿýÙÉÿÿÿý(24ÉÊÊÊÊÊCÎMÊÑÌQÊÑÈÊ	ÊÊÏ[ÊÑÑ^ÎmÊÊÊÎ  ÔÊÑÈÊÊÑÑÎ  èÊÑÈÊÊÑÑÔ      Cc   Ci   Cu   require   chrome   AddonManager   importO   resource://gre/modules/AddonManager.jsm	   gcli   gcli/index   promiseE   resource://gre/modules/Promise.jsm   Promise!   BRAND_SHORT_NAMEA   @mozilla.org/intl/stringbundle;1   getService-   nsIStringBundleService   createBundleS   chrome://branding/locale/brand.properties#   GetStringFromName   brandShortName   promiseify   getAllAddons!   getAddonsByTypes   exports   items	   type	   item   addon	   name   selection   parent#   stringifyProperty   cacheable   constructor   lookup   addonDesc   description   addon list   addonListDesc   addonsInfo   returnType	   data   all   defaultValue#   addonListTypeDesc   params	   exec   converter	   from	   view   to   addon enable   addonEnableDesc   addonNameDesc   addon disable!   addonDisableDesc   ÿÿÿÿ      promiseifyÁ                        ¹                                        D      scope;   functionWithLastParamCallback±  Ã               A        ÿÿÿÿ      promiseify/<Å$                      ¹                                       D   	   argsã  Á               à   Q;    A    R Ì    Promise   ÿÿÿÿ      promiseify/</<Å                 1       ¹                                      D      resolve	  »                 ¸    
A    : Q  ¸   
    O QÖÚ1 	   push   apply   ÿÿÿÿ   !   promiseify/</</<Å$                ,      ¹      
                                        results &  {               àU  Q   T  Ù    ?   T     
T  >7: QÐÖ3    length   ÿÿÿÿ   #   pendingOperations               #       ¹                                      D      addon   allOperations  L  (             f       QV   ¸    
   Z   : Ê-Ð1-	1	    reduce                     PENDING_ENABLE      PENDING_DISABLE   #   PENDING_UNINSTALL      PENDING_INSTALL      PENDING_UPGRADE                  ÿÿÿÿ   '   pendingOperations/<Á                 3       ¹                                             operations   opName  º  D  -                5    ;   T 7   T  ¸   
T :    T  ÔÍÈ #   pendingOperations   AddonManager   concat   ÿÿÿÿ   5   exports.items<.constructorÁ                 5       ¹                                             listenerï  	  ;             Y   A    ]    A   ]      Q;   ¸   
V   : Q=
ËÐAÔ(    onInstalled   onUninstalled   AddonManager!   addAddonListener   ÿÿÿÿ   _   exports.items<.constructor/listener.onInstalledÅ                        ¹                                             addon m    >             A¸    
:  Q Ì    clearCache   ÿÿÿÿ   c   exports.items<.constructor/listener.onUninstalledÅ                        ¹                                             addon ¥  Ä  ?             A¸    
:  Q"Ì    clearCache   ÿÿÿÿ   +   exports.items<.lookupÁ                          ¹                                          	  #
  C             ;    â    :  ¸   
A    : ÊÔJ	    getAllAddons	   then   ÿÿÿÿ   /   exports.items<.lookup/<Å                        ¹                                            addons ?	  
  D             T  ¸    
A    : ÐI    map   ÿÿÿÿ   3   exports.items<.lookup/</<Å               [       ¹                                            addon	   name e	  
  E             T  5    =   T  5      QV   ¸   
:  ¸   
     =   : W   QY   V   ]    T  ]   Ü
ËÜ
	ÉÉ 	   name       version	   trim   replace   _   value   \s                        dictionary      extension      locale      plugin      theme      all                  ÿÿÿÿ   '   exports.items<.execÁ               U       ¹                                      D   	   args   context   types æ  «  ^                5    =   H   @   Z     5    `      Q;   â   V   : ¸   
A    : 
ÐÏ)ÓÎÔj	 	   type   all!   getAddonsByTypes	   then   ÿÿÿÿ   +   exports.items<.exec/<Å                 4       ¹                                            addons b  £  `             T  ¸    
    : U  QY   T  ]      5   ]   Ï	i	ÈÐ    map   addons	   type   ÿÿÿÿ   ;   exports.items<.exec/</addons<Á                 C       ¹                                             addon   e  a             Y   T  5    ]    T  5   ]   T  5   ]   ;   â   T  : ]   
ÍÍÍÍÉ 	   name   version   isActive#   pendingOperations   ÿÿÿÿ   '   exports.items<.execÁ                   ¹   )   ¶                                      addonsInfo   context   lookupOperation   arrangeAddons#   isActiveForToggle   headerLookups   header!   operationLookups    ø  q                    Q   W   Q      QT  5    Ù       ET ¸   
Y   =   ]   Y   ;   ¸   
=   : ]   ]   	: Y   =   
]   =   ]   =   ]   =   ]   =   ]   =   ]     Q;   ¸   
V  T  5   7D   Q=   :   QY   =   ]   =   ]   =   ]   =   ]   =    ]   !   QT ¸   
Y   =   "]   Y   V  ]   #V   T  5    : ¸   $
   : ]    T 5   %]   &T 5   ']   (]   	:   Ë  Ê  ¤Ëq
ÎÏ
Ê
Ñ	Ísy
ÊÊÊÊÊÏ
ß  È
ÊÊÊÊÐ    ¤ÏÊ  º
É
Í×  Î
Í
Ò  ¨  Ñ	    addons   length   createView#   <p>${message}</p>	   html	   gcli   lookup   addonNoneOfType   message	   data5   addonListDictionaryHeading   dictionary3   addonListExtensionHeading   extension-   addonListLocaleHeading   locale-   addonListPluginHeading   plugin+   addonListThemeHeading   theme'   addonListAllHeading   all	   type/   addonListUnknownHeading%   addonPendingEnable   PENDING_ENABLE'   addonPendingDisable   PENDING_DISABLE+   addonPendingUninstall#   PENDING_UNINSTALL'   addonPendingInstall   PENDING_INSTALL'   addonPendingUpgrade   PENDING_UPGRADE  <table> <caption>${header}</caption> <tbody>  <tr foreach='addon in ${addons}'      class="gcli-addon-${addon.status}">    <td>${addon.name} ${addon.version}</td>    <td>${addon.pendingOperations}</td>    <td>      <span class='gcli-out-shortcut'          data-command='addon ${addon.toggleActionName} ${addon.label}'          onclick='${onclick}' ondblclick='${ondblclick}'      >${addon.toggleActionMessage}</span>    </td>  </tr> </tbody></table>   header   map   update   onclick   updateExec   ondblclick   ÿÿÿÿ      lookupOperation               9       ¹                                             opName   lookupName Ï  R                     T  7   QV      ;    ¸   
V   :    T  ÓÕÌ! 	   gcli   lookup   ÿÿÿÿ      arrangeAddons              o       ¹      0                                      addons#   compareAddonNames   enabledAddons   disabledAddons p                     W   QZ      QZ      QT  ¸    
   : Q   ¸   
V   : Q   ¸   
V   : Q   ¸   
   :   Ê  ÊÊÓ  ÔÔÑ%    forEach	   sort   concat   ÿÿÿÿ   #   compareAddonNames                 !       ¹      	                                       nameA   nameB  ¢  û               ;    ¸   
T  5   T 5   : 
Ü-    String   localeCompare	   name   ÿÿÿÿ   G   exports.items<.exec/arrangeAddons/<Á                 C       ¹                                             addon Û  |               T  5       "      ¸   
T  : Q         ¸   
T  : QÈÝØ    isActive	   push   ÿÿÿÿ   #   isActiveForToggle                 )       ¹                                             addon º  $  ¤             T  5    E   QT  5   ¸   
=   : !!ÎÔ4    isActive#   pendingOperations   indexOf   PENDING_DISABLE   ÿÿÿÿ   E   exports.items<.exec/<.data.addons<Á                 _      ¹      P                                      addon q    ¼             Y   T  5    ]    T  5    ¸   
     =   : T  5      =   T  5      
=   ]   T  5      =      
=   ]   	T  5   ]   T  5   
Ù      W=   ;   ¸   
=   : =   T  5   
¸   
   : ¸   
=   : =      
=   ]   
   T  :    =      
=   ]      T  :    ;   ¸   
=   :    ;   ¸   
=   : ]   ÍÙÈãÈ
ÙÍÍRÖÊÔÓËÊÉ
ÙÉÑÈÑÉ 	   name   replace   _   version      label   isActive   enabled   disabled   status#   pendingOperations   length    (	   gcli   lookup   addonPending   :    map	   join   ,    )   disable   enable!   toggleActionName'   addonListOutDisable%   addonListOutEnable'   toggleActionMessage   \s      ÿÿÿÿ   '   exports.items<.execÁ                      ¹   
   +                                    	   args   context	   name  ä    Þ             T  5    5   =   T  5    5   ¸   
:     QT  5    5      5T  5    B0   Q;   ¸   
=   Z  V   `   : ;   ¸   
=   	Z  V   `   : 
èÈÍÏÕ+ÈÿÿÿÜÕ2ÈÿÿÿÕ3    addon	   name       version	   trim   userDisabled	   gcli   lookupFormat   addonEnabled'   addonAlreadyEnabled   ÿÿÿÿ   '   exports.items<.execÁ               ³       ¹      2                                    	   args   context	   name    $!  ò             T  5    5   =   T  5    5   ¸   
:     QT  5    5    D   QT  5    5   ;   5   H   5T  5    C0   Q;   ¸   	
=   
Z  V   `   : ;   ¸   	
=   Z  V   `   : 
èÈ
ÔØÏÕ,ÈÿÿÿÛÕ3ÈÿÿÿÔ4    addon	   name       version	   trim   userDisabled   AddonManager+   STATE_ASK_TO_ACTIVATE	   gcli   lookupFormat   addonDisabled)   addonAlreadyDisabled