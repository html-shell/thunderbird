ç¿s¹                5  P   ¹   R   	      '                               resource://gre/modules/PopupNotifications.jsm     F                                                                Af    6    Qn   ;   5   o   Qn   ;   5   o   Qn   ;   5   o   Q;   ¸   
=   	: Q;   ¸   
=   
: Q=      Q=      Q=      Q=      Q=      Q=      Q=      Q=      Q=      Qn   ;   R  o   Qn   ;   R  o   Q;   Y   @]   !@]   "@]   #@]   $@]   %@]   &@]   '@]   (@]   )   ]   *   a   +   ]   ,6    QA   6   -Q;   -Y   @]   .@]   /@]   0@]   1   b   2   a   2   	]   3   
]   4   a   5   ]   6   ]   *   ]   7@]   8@]   9   a   :   ]   ;   ]   <   ]   =   ]   >   ]   ?   ]   @   ]   A   ]   B   ]   C   ]   D   ]   E   ]   F   ]   G   ]   H   ]   I   ]   J    ]   K   !]   L   "]   M   #]   N   $]   O   %]   P   &]   Q6    QÊ	/	Ì/ÕÕÕ	Õ1Õ0ËËËËËËËËËËÉÿÿÿýËÉÿÿÿý(/9;Ê=JÊNÊ`ÐcvÌ  ÊÊ  Ê  ­Ê Ê PÊ ZÊ Ê Ê ¯ µÊÊ ÏÊ ÚÊ êÊ 	Ê UÊ Ê àÊ þÊ Ê Ê Ê Ê *Ê 2Ê RÊ ^Ê Ê Ê ¦Ê ¿Ê ïÊ Ð !   EXPORTED_SYMBOLS   Cc   Components   classes   Ci   interfaces   Cu   utils   importG   resource://gre/modules/Services.jsmE   resource://gre/modules/Promise.jsm9   NOTIFICATION_EVENT_DISMISSED   dismissed5   NOTIFICATION_EVENT_REMOVED   removed5   NOTIFICATION_EVENT_SHOWING   showing1   NOTIFICATION_EVENT_SHOWN   shown7   NOTIFICATION_EVENT_SWAPPING   swapping   ICON_SELECTOR3   .notification-anchor-icon-   ICON_ATTRIBUTE_SHOWING+   ICON_ANCHOR_ATTRIBUTE/   popupnotificationanchor'   PREF_SECURITY_DELAYE   security.notification_enable_delay+   popupNotificationsMap   WeakMap)   gNotificationParents   Notification   prototype   id   message   anchorID   mainAction!   secondaryActions   browser   owner   options   timeShown   remove   anchorElement   reshow%   PopupNotifications   window   panel   tabbrowser   _iconBox   iconBox   getNotification	   show   isPanelOpen   locationChange   handleEvent!   _ignoreDismissal+   _currentAnchorElement+   _currentNotifications   _remove   _dismiss   _hidePanel   _clearPanel   _refreshPanel   _showPanel   _update%   _updateAnchorIcons   _showIcons   _hideIcons7   _getNotificationsForBrowser7   _setNotificationsForBrowser7   _getAnchorsForNotifications!   _isActiveBrowser#   _onIconBoxCommand)   _reshowNotifications3   _swapBrowserNotifications   _fireCallback   _onPopupHiddenI   _dismissOrRemoveCurrentNotifications!   _onButtonCommand   _onMenuCommand   _notify                  %   PopupNotifications                  ÿÿÿÿ   )   getAnchorFromBrowser               Á       ¹   	   /                                        aBrowser   aAnchorID   attrPrefix   anchor  è  ô               T    !T ¸    
=   =   :    
=      QT  ¸   
V   ;   : D   ;QT  V   ;   7D   'QT  ¸   
;   : D   QT  ;   7  QV     5V  ;   5   r   
V  T  5   ¸   
V  : @ÙÒÔ	ÉÔÏÉÎÏ%Ó'    replace#   notification-icon      getAttribute+   ICON_ANCHOR_ATTRIBUTE   Ci!   nsIDOMXULElement   ownerDocument   getElementById   ÿÿÿÿ      Notification                 f       ¹      $                                         id   message   anchorID   mainAction!   secondaryActions   browser   owner   options        v  Æ  /             AT  6    QAT 6   QAT 6   QAT 6   QAT D   
QZ   6   QAT 6   QAT 6   QAT D   QY   6   QÊÊÊÊÔÊÊÕ    id   message   anchorID   mainAction!   secondaryActions   browser   owner   options   ÿÿÿÿ   '   Notification_remove                          ¹                                            	  (	  J             A5    ¸   
A: QÒ    owner   remove   ÿÿÿÿ   I   Notification.prototype.anchorElementÁ                 ¤       ¹      5                                         iconBox   anchorElement>	  #  N       	      A5    5      Q;   â   A5   A5   :   QV       
V  V   E   QA5      $V   ¸   
=   A5   : W  QV      'V   ¸   
=   : D   
QV   W  QV  ÐQÖÈUÑ×ÈYÐÉÉ]    owner   iconBox)   getAnchorFromBrowser   browser   anchorID   querySelector   #5   #default-notification-icon   ÿÿÿÿ   ;   Notification.prototype.reshowÁ                          ¹                                            8    `             A5    ¸   
A5   A5   : QÝB    owner)   _reshowNotifications   anchorElement   browser   ÿÿÿÿ   %   PopupNotifications                       ¹      E                                        tabbrowser   panel   iconBox   Ò    v             T  ;    5   r    =   pT E   QT ;    5   r    =   pT ;    5   r    =   pAT  5   5   6   QAT 6   QAT  6   	QAT 6   
QA;   5   ¸   
;   : 6   QA5   ¸   
=   AC: QA5   ¸   
=   AC: QA5   	5      "A5   	5   ¸   
=   AC: QÏÉÏÏ~ÔÊÊÊ×ÉØØËÝG    Ci!   nsIDOMXULElement%   Invalid tabbrowser   Invalid iconBox   Invalid panel   window   ownerDocument   defaultView   panel   tabbrowser   iconBox   buttonDelay   Services   prefs   getIntPref'   PREF_SECURITY_DELAY!   addEventListener   popuphidden   activate   tabContainer   TabSelect   ÿÿÿÿ   I   PopupNotifications.prototype.iconBoxÁ                 x       ¹                                              iconBox                  A5       5A5    ¸   
=   AB: QA5    ¸   
=   AB: QAT  6    QT     /T  ¸   
=   AB: QT  ¸   
=   AB: QØØÊÕÕ2    _iconBox'   removeEventListener   click   keypress!   addEventListener   ÿÿÿÿ   I   PopupNotifications.prototype.iconBoxÁ                          ¹                                            ­  Ï               A5        _iconBox   ÿÿÿÿ   E   PopupNotifications_getNotification               F       ¹                                      @      id   browser   n   notifications ½    ­             @   QA¸    
T D   QA5   5   :    QV   ¸   
    : Q   ÜÈÔ	 7   _getNotificationsForBrowser   tabbrowser   selectedBrowser	   some   ÿÿÿÿ   I   PopupNotifications_getNotification/<á                 #       ¹                                              x d  }  °             T  5       E   QT        #â    id   ÿÿÿÿ   /   PopupNotifications_show             d      ¹      Ó                          0             browser   id   message   anchorID   mainAction!   secondaryActions   options   isInvalidAction   notification)   existingNotification   notifications   isActiveBrowser   fm   isActiveWindow       .  Ä6                  W   QT      =    pT     =   pT E   QV   T :    =   pT E   QT ¸   
V   :    =   pT E   NQT 5   E   @QT  D   6QT Ù    D   'QT ¸   
T : ¸   
A   :     =   p;   	T T T T T T  AT R   QT E   QT 5   
   V  C6   
QA¸   
T T  :   QV     A¸   
V  : QA¸   
T  :   QV  ¸   
V  : QA¸   
T  :   Q;   5   ¸   
;   5   :   QV  5   A5     QV     V     5A¸   
V  ;   Z  V  5   `   R C: Q   ^V  5   
    A5   ¸   
:  QA¸   
V  A¸   
V  V  5   : : QA¸   
=   : Q   A¸   
=   : QV  Ê Ñ××	ÊÏ	ÍÔÒÊ &ÈÑËÎÈÐËÈÓËÈÛÈÕ  0Ö%Íÿÿÿ÷ÿÿÿäÉÊ
ÑÔÍ @/ÿÿÿÙÖÑ Q   PopupNotifications_show: invalid browserG   PopupNotifications_show: invalid IDW   PopupNotifications_show: invalid mainAction	   somec   PopupNotifications_show: invalid secondaryActions   hideNotNow   length   concat   PopupNotifications_show: 'Not Now' item hidden without replacement   Notification   dismissed   getNotification   _remove7   _getNotificationsForBrowser	   push!   _isActiveBrowser   Cc9   @mozilla.org/focus-manager;1   getService   Ci   nsIFocusManager   activeWindow   window   _update   Set   anchorElement   getAttention%   _updateAnchorIcons7   _getAnchorsForNotifications   _notify   backgroundShow   ÿÿÿÿ      isInvalidAction                 :       ¹                                              a .  õ.              T   D   4QT  5    Å=    D   QT  5    D   QT  5    ÊÖ%ÏÊ    callback   function   label   accessKey   ÿÿÿÿ   3   PopupNotifications_show/<å                 
       ¹                                              action 
1  "1  #            T  5    =É    dismiss   ÿÿÿÿ   Q   PopupNotifications.prototype.isPanelOpenÁ                 ,       ¹                                               panelState.7  7  P            A5    5      QV   =   D   QV   =   ÐÛ7    panel   state   showing	   open   ÿÿÿÿ   C   PopupNotifications_locationChange                      ¹      J                                       aBrowser   notifications u8  µ>  Z      
      T      =    pA¸   
T  :    QV   ¸   
    A: W   QA¸   
T  V   : QA¸   
T  :    4A¸   
V   A¸   
V   ;   â   T  : : : QËÈÐ { `È }ÓËØÍ "ÿÿÿä) e   PopupNotifications_locationChange: invalid browser7   _getNotificationsForBrowser   filter7   _setNotificationsForBrowser!   _isActiveBrowser   _update7   _getAnchorsForNotifications)   getAnchorFromBrowser   ÿÿÿÿ   a   PopupNotifications_locationChange/notifications<Á                 õ       ¹   	   <                                        notification O9  =  `            T  5    5   E   QA5      I=   T  5    qE   QT  5    5      !T  5    5   #?
6   QQC=   T  5    qE   QT  5    5      #T  5    5   #?
6   QQC=   T  5    qE   #Q;   ¸   
:  T  5    5      CA¸   
T  ;   : QBÓÔÍ
Ü mÔÍÜÔÌ
ÑÔ    options'   persistWhileVisible   isPanelOpen   persistence   timeout	   Date   now   _fireCallback5   NOTIFICATION_EVENT_REMOVED   ÿÿÿÿ   3   PopupNotifications_remove                W       ¹                               
             notification U?  <@              A¸    
T  : QA¸   
T  5   :    4   QA¸   
T  5   :    QA¸   
V   : QÈÏÐË
ÐÈÑ 6    _remove!   _isActiveBrowser   browser7   _getNotificationsForBrowser   _update    ÿÿÿÿ          notifications        (   .   ÿÿÿÿ   ÿÿÿÿ   Q   PopupNotifications.prototype.handleEventÁ                       ¹   
   M                                      aEvent W@  B              T  5    Æ       Qx=   y   2=   y   <=   y   2=   y   K=   y   Az   PA¸   
T  : Q   <A   QA5   ¸   
   >: Q   A¸   	
T  : Q   ÈÇÔh  u
u
u
 ¤u
uÊ ÏXÒ  XÏX 	   type   popuphidden   activate   TabSelect   click   keypress   _onPopupHidden   window   setTimeout#   _onIconBoxCommand    ÿÿÿÿ       	   self             U   PopupNotifications.prototype.handleEvent/<Á                          ¹                                            ÙA  B                  ¸    
:  Q
Ð    _update          ÿÿÿÿ   ÿÿÿÿ   e   PopupNotifications.prototype._currentNotificationsÁ                   1       ¹                                            ×C  TD  µ            A5    5       A¸   
A5    5   :    	Z   ËØ)ÍG    tabbrowser   selectedBrowser7   _getNotificationsForBrowser   ÿÿÿÿ   ?   PopupNotifications_removeHelper             ¡       ¹   
   4                                        notification   index   notifications D  ÓF  ¹            A¸    
T  5   :   QV      V  ¸   
T  : W   QV   ×ÿ   A¸   
T  5   :    T  5   ¸   
;   : QV  ¸   
V   ?: QA¸   
T  ;   	: QÐÈÎÈÐØÔÔ= 7   _getNotificationsForBrowser   browser   indexOf!   _isActiveBrowser   anchorElement   removeAttribute-   ICON_ATTRIBUTE_SHOWING   splice   _fireCallback5   NOTIFICATION_EVENT_REMOVED   ÿÿÿÿ   5   PopupNotifications_dismiss                 U       ¹                                               browserFG  ûG  Ï            A5    5   E   QA5    5   5   5      QA5    ¸   
:  QV      V   ¸   
:  QÑÚÑÏ    panel   firstChild   notification   browser   hidePopup   focus   ÿÿÿÿ   /   PopupNotifications_hide                 x       ¹   	   '                                         deferred[H  I  Ú            A5    5   =      ;   ¸   
:  A5      A5   5   ;   ¸   
:     QAV   6   QA5    ¸   
:  QV   5   ÑÌÌÌÈËÑÊ    panel   state   closed   Promise   resolve!   _ignoreDismissal   promise   defer   hidePopup   ÿÿÿÿ   Q   PopupNotifications.prototype._clearPanelÁ                ô       ¹      ]                                   #   popupnotificationêI  N  ê      	         Q   ×m  QA5    ¸   
V   : Q;   ¸   
V   :   QV       QV   @6   QV   5     Q   Km  QV  5     QV  5   =      V   ¸   
V  : QV  W  QÈãV  ÿÿÿ´V   C6   	QV  ¸   

V   : QÈÈãA5    5   W   ÿÿÿ(  è7Õ
ÐÈËË øÎ(QÎÏÓ
Ê ùË ËÕ ìÖ0    panel   removeChild)   gNotificationParents   get   notification   lastChild   previousSibling   nodeName1   popupnotificationcontent   hidden   appendChild    ÿÿÿÿ         originalParent                     contentNode                    previousSibling           è       l   Q          Ð   ÿÿÿÿ   I             n   D         ÿÿÿÿ   ?   PopupNotifications_refreshPanel                ,       ¹      "                                    '   notificationsToShow   XUL_NS ÚN  _[  	            A¸    
:  Q=      QT  ¸   
    A: QÌ
ËÏ R  R    _clearPanel{   http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul   forEach   ÿÿÿÿ   C   PopupNotifications_refreshPanel/<Á                    ¹   ,   Å                         }      @      n   doc'   popupnotificationID#   popupnotificationO  S[        	      A5    5      Q   5   =      Q   ¸   
V   :    Q      );   ¸   
      5   : Q   )   ¸   
    =   	:    Q   ¸   

=      5   : Q   ¸   

=   V   : Q   ¸   

=      5   : Q   ¸   

=   =   : Q   ¸   

=   =   : Q   5          ¸   

=      5   5   : Q   ¸   

=      5   5   : Q   ¸   

=   =   : Q   ¸   

=   =   : Q   ¸   

=   =   : Q   n   ¸   
=   : Q   ¸   
=   : Q   ¸   
=   : Q   ¸   
=   : Q   ¸   
=   : Q   5   5      )   ¸   

=      5   5   : Q   5   5       .   ¸   

=   !   5   5    : Q      ¸   
=   !: Q      6   "Q   5   #   ¥   5   #¸   $
    A: Q   5   5   %   $   ¸   

=   &=   : Q   W   5   #Ù   '   C  Q   ¸   
    =   (:   Q   ¸   )
V  : QÈA5   *¸   )
   : Q   B6   +Q
Ñ
Õ
ÐÉ$äÛÉßÙßÚÚÊ  ääÚÚßÕÕÕÕÕÏäÏ)éÕÐÊÖ B : DÏ
ßÏËÛÈ
ÕÖÌ!    window   document   id   -notification   getElementById)   gNotificationParents   set   parentNode   createElementNS#   popupnotification   setAttribute   label   message   popupid%   closebuttoncommand=   PopupNotifications._dismiss();   noautofocus	   true   mainAction   buttonlabel   buttonaccesskey   accessKey   buttoncommandW   PopupNotifications._onButtonCommand(event);   menucommandS   PopupNotifications._onMenuCommand(event);!   closeitemcommandm   PopupNotifications._dismiss();event.stopPropagation();   removeAttribute   options   popupIconURL	   icon   learnMoreURL   learnmoreurl   notification!   secondaryActions   forEach   hideNotNow   hidenotnow   length   menuseparator   appendChild   panel   hidden   ÿÿÿÿ   G   PopupNotifications_refreshPanel/</<Á                      ¹   	                                           a	   item X  1Y  :               ¸    
    =   :    QV   ¸   
=   T  5   : QV   ¸   
=   T  5   : QV      6   QV   T  6   Q   ¸   
V   : QÛÈ
Ü
Ü
Ï
Í
Ô$    createElementNS   menuitem   setAttribute   label   accesskey   accessKey   notification   action   appendChild    ÿÿÿÿ      %   closeItemSeparator       ;  =   ÿÿÿÿ   ÿÿÿÿ   9   PopupNotifications_showPanel               ¡       ¹   
   D                                @   '   notificationsToShow   anchorElement   promise[  jc  U            A5    B6   Q   ¸   
A    :    Q   Ù       A¸   
   : QA5   E   QA5            ¸   
   A: QA¸   
:  ¸   	
A   :    QÍÒÉ ^ËÑØÑ d mÈ
Øÿÿÿý    panel   hidden   filter   length   _refreshPanel   isPanelOpen+   _currentAnchorElement   forEach   _hidePanel	   then   ÿÿÿÿ   c   PopupNotifications_showPanel/notificationsToShow<Å               2       ¹                                              n   dismiss \  ª\  X            A¸    
T  ;   :    QV      T  C6   QV    
Ð
ÈÊ	    _fireCallback5   NOTIFICATION_EVENT_SHOWING   dismissed   ÿÿÿÿ   =   PopupNotifications_showPanel/<Á                        ¹                                              n ]  Ë]  d            A¸    
T  ;   : QÔ0    _fireCallback1   NOTIFICATION_EVENT_SHOWN   ÿÿÿÿ   K   PopupNotifications_showPanel/promise<Å                î       ¹      V                                       selectedTabé^  dc  m      
      A5    5      Q      K  Q   5     QV  5   >E   QV  5   >   V      QÈ   V      QA   6   QA5   ¸   
=   A5   5   	¸   

=   : : Q   ¸   
   A: QA5   ¸   
   =   : Q   ¸   
   A: Q
ÐFËÏÜ
ÐÊÌé#ÿÿÿÝÑ ÛÑ     tabbrowser   selectedTab   boxObject   height   width+   _currentAnchorElement   panel   setAttribute   popupid   firstChild   getAttribute   forEach   openPopup)   bottomcenter topleft    ÿÿÿÿ         bo       ÿÿÿÿ   O   PopupNotifications_showPanel/promise</<Á                        ¹                                              n b  b              T  A5   5   ¸   
:  6    QÕÉ    timeShown   window   performance   now   ÿÿÿÿ   O   PopupNotifications_showPanel/promise</<Á                        ¹                                              n c  Vc              A¸    
T  ;   : QÔ0    _fireCallback1   NOTIFICATION_EVENT_SHOWN       @   ÿÿÿÿ   ÿÿÿÿ   3   PopupNotifications_update              ü      ¹      ô                        D      @      notifications   anchors   dismissShowing#   haveNotifications   useIconBox'   notificationsToShow  Gf  ½o                 H   ;    R     QT H   
BU Q   ;   5   r   !;    Z     `   R    QT      A5   U  QT  Ù   >   Q   5    E   
QV      A¸   
T  :    QA5       QV  E   Q   5      l   - Á
:    Q   6m5   W  QV  5   	A5      
   BW  Q   ãQ¸   

:  5   ÿÿÿ»È V     A¸   
:  QZ     QV      T  ¸   
   : W  QV     &A¸   
T  : QA5   B6   Q   (   5      A¸   
T     : QV  ¸   
   : W  QV  Ù   >   e   - Á
:    Q   *m5   W  QA¸   
V  V  : Q   ãQ¸   

:  5   ÿÿÿÇÈ    µA¸   
=   : QT     A¸   
:  QV       V     A5   C6   Q   j   5      [   - Á
:    Q   %m5   W  QV  ¸   
;   : QãQ¸   

:  5   ÿÿÿÌÈ ËGÎÊÐÊÉÿÿÿ÷ÉÊÏÕË
ÉÍÔÔ8JÑÐ@H ¢ËÿÿÿíÒ ªÌÉÏÈ!ÏÒÊÔÐÈ ÃË`Ô8>ÑÔH Ä Ëÿÿÿæ×Ñ Ð
Ì

ÒÊÔ89ÑÔ Ù$ËÿÿÿæÒB    Set   Ci!   nsIDOMXULElement+   _currentNotifications   length	   size7   _getAnchorsForNotifications   iconBox   value   parentNode	   next	   done   _hideIcons   filter   _showIcons   hidden%   _updateAnchorIcons   _showPanel   _notify!   updateNotShowing   _dismiss   removeAttribute-   ICON_ATTRIBUTE_SHOWING    ÿÿÿÿ         anchor       ÿÿÿÿ   ]   PopupNotifications_update/notificationsToShow<Á                        ¹                                              n Èi  
j  ²            T  5     E   QT  5   5    ÏÏ    dismissed   options   neverShow   ÿÿÿÿ   ]   PopupNotifications_update/notificationsToShow<Á                        ¹      	                                        n ^k  k  ¾               ¸    
T  5   : Ô    has   anchorElement    ÿÿÿÿ         anchorElement        ÿÿÿÿ         anchorElement       ¾  9        >      ê   J       à   U   ÿÿÿÿ   ú  I   ÿÿÿÿ   ´  D   ÿÿÿÿ   ÿÿÿÿ   I   PopupNotifications_updateAnchorIcons                W      ¹      k                                    notifications   anchorElements  p  u  à            T - Á
:     Q  'm5    W   QV   ¸   
;   =   : QV   5   ¸   
=   :    å  QV   5   ¸   
     =   	:   Q=   
V  W  QT  Ù   >     QT  >7  QT  - Á
:    Q   2m5    W  QV  5   V      V  W  Q   ãQ¸   
:  5   ÿÿÿ¿È V  5   =   V  W  QÈV   V  6   QÈãQ¸   
:  5   ÿÿþÊÈ Ò8 ;ÑÙ èÕ
ËÚÈÏÊËÊÒ8FÑÎÉH ïËÿÿÿòÒ ÷
ÚÏ âËÿÿÿæÒ èI    value   setAttribute-   ICON_ATTRIBUTE_SHOWING	   true   classList   contains1   notification-anchor-icon   className   replace   5   default-notification-icon    length   anchorElement	   next	   done   anchorID        ÿÿÿÿ          anchorElement                     className                    notification                    n    ;   ([-\w]+-notification-icon\s?)         ;     Æ   F          F  ÿÿÿÿ   Z   ß                       ¼   Q         ÿÿÿÿ   9   PopupNotifications_showIcons                x       ¹                               
          +   aCurrentNotifications Su  =v  þ      	      T  - Á
:     Q   Hm5    W   Q  QV   5     QV     V  ¸   
;   =   : QÈãQ¸   
:  5   ÿÿÿ©È Ò8\×
ÎÚ ÿËÿÿÿçÒ1    value   anchorElement   setAttribute-   ICON_ATTRIBUTE_SHOWING	   true	   next	   done    ÿÿÿÿ          notification                     anchorElm          \          g   ÿÿÿÿ   $   6          ÿÿÿÿ   9   PopupNotifications_hideIcons                p       ¹      "                                      iconssv  w        	      A5    ¸   
;   :    QV   - Á
:    Q   %m5   W  QV  ¸   
;   : QãQ¸   
:  5   ÿÿÿÌÈ ÒÈÓ89ÑÔ 	ËÿÿÿïÒ3    iconBox!   querySelectorAll   ICON_SELECTOR   value   removeAttribute-   ICON_ATTRIBUTE_SHOWING	   next	   done    ÿÿÿÿ      	   icon       2   9       (   D   ÿÿÿÿ   ÿÿÿÿ   G   PopupNotifications_getNotifications               G       ¹                                              browser   notifications w  Ôx              ;    ¸   
T  :    QV       %Z   W   Q;    ¸   
T  V   : QV   ÏÈÉ× +   popupNotificationsMap   get   set   ÿÿÿÿ   G   PopupNotifications_setNotifications                        ¹      
                                        browser   notifications  !y  y              ;    ¸   
T  T : QT Ö +   popupNotificationsMap   set   ÿÿÿÿ   [   PopupNotifications_getAnchorsForNotifications              ¤       ¹      3                                     notifications   defaultAnchor   anchors  èy  {        
      ;    R     QT  - Á
:    Q   7m5   W  QV  5      V   ¸   
V  5   : QãQ¸   
:  5   ÿÿÿºÈ T E   QV   5       V   ¸   
T : QV   
ÈÒ8KÑÉØ !ËÿÿÿçÒÉÊÒ    Set   value   anchorElement   add	   next	   done	   size    ÿÿÿÿ         notification       %   K          V   ÿÿÿÿ   ÿÿÿÿ   [   PopupNotifications.prototype._isActiveBrowserÁ                 5       ¹                                              browser 1{  5|  *            T  5       T  5    5      A5   5   5   T  ÈÒÕ:    docShell   isActive   window   gBrowser   selectedBrowser   ÿÿÿÿ   G   PopupNotifications_onIconBoxCommand               "      ¹      Q                                       event	   type   anchor y|    2            T  5       QV   =   E   QT  5   >   V   =   E   =QT  5   ;   5   5   D   QT  5   ;   5   5   	    A5   
Ù   >   T  5     Q   mV  5   W  QãV  E   QV  5   A5   ÿÿÿÕV      A5   5   =   E   QV  A5      A¸   
:  QA¸   
V  : QÍÚÐÞÙÍÍ(0Ï Bá KâÌÐ" 	   type   click   button   keypress   charCode   Ci   nsIDOMKeyEvent   DOM_VK_SPACE   keyCode   DOM_VK_RETURN+   _currentNotifications   length   target   parentNode   iconBox   panel   state   closed+   _currentAnchorElementI   _dismissOrRemoveCurrentNotifications)   _reshowNotifications    ¢   0      ÿÿÿÿ   M   PopupNotifications_reshowNotifications               N       ¹                                	      @      anchor   browser   notifications a  Û  R            A¸    
T D   QA5   5   :    QV   ¸   
    : QA¸   
V      : QÜÈÔ [Õ$ 7   _getNotificationsForBrowser   tabbrowser   selectedBrowser   forEach   _update   ÿÿÿÿ   Q   PopupNotifications_reshowNotifications/<Á                        ¹      
                                        n @    U            T  5          T  B6   QÎÊ    anchorElement   dismissed   ÿÿÿÿ   W   PopupNotifications_swapBrowserNoficications               B      ¹      ]                          $      @      ourBrowser   otherBrowser!   ourNotifications   other%   otherNotifications/  f  ^            A¸    
   :    Q   5   5   5      Q       ,V   Ù   >   ;   ¸   
=   : Q   ¸    
   :   QV   Ù   ?E   QV  Ù   ?   V  ¸   
A    : W  QV   ¸   
A   : W   QA¸   	
   V   : Q   ¸   	
   V  : QV  Ù   >   A¸   

V  : QV   Ù   >      ¸   

V   : QÍÈÚËÕÑÈÜÑÈ yÑÈ ÕÙËÐËÔ  7   _getNotificationsForBrowser   ownerDocument   defaultView%   PopupNotifications   length   Cu   reportError   unable to swap notifications: otherBrowser doesn't support notifications   filter7   _setNotificationsForBrowser   _update   ÿÿÿÿ      PopupNotifications_swapBrowserNoficications/otherNotifications<Å                 W       ¹                                 	             n 	    o            A¸    
T  ;      :    T     6   QT  A6   QC      ¸    
T  ;   : QBÕ
ÎÊÝ    _fireCallback7   NOTIFICATION_EVENT_SWAPPING   browser   owner5   NOTIFICATION_EVENT_REMOVED   ÿÿÿÿ   {   PopupNotifications_swapBrowserNoficications/ourNotifications<Å                 W       ¹                                 	             n 7  6  y            A¸    
T  ;      :    (T     6   QT        6   QCA¸    
T  ;   : QBÕ
ÎÓÔ    _fireCallback7   NOTIFICATION_EVENT_SWAPPING   browser   owner5   NOTIFICATION_EVENT_REMOVED   ÿÿÿÿ   ?   PopupNotifications_fireCallback               ±      ¹   	   "                                     n   event	   args   ¢  w              àU QT  5    5      kT  5    5   ¸   
Z  T  `   T `  ×T - Á
:     m5   _ã,  ¸   
:  5   ÿÿÿã Q)   ,   Qv   Q;   ¸   
V   : QÈ    ;   yÍØ$ÉÏ8"ôÌÛ    options   eventCallback	   call   value	   next	   done   Cu   reportError   undefined    ÿÿÿÿ          error            }      O   "              ÿÿÿÿ   ÿÿÿÿ   A   PopupNotifications_onPopupHidden                 k       ¹      $                                        event µ  ï              T  5    A5   D   QA5      +A5      A5   ¸   
:  QA@6   QA¸   
:  QA¸   
:  QA¸   
:  QÛÑÈÌÌÌ    target   panel!   _ignoreDismissal   resolveI   _dismissOrRemoveCurrentNotifications   _clearPanel   _update   ÿÿÿÿ      PopupNotifications.prototype._dismissOrRemoveCurrentNotificationsÁ                 n       ¹      .                                        browser   notifications"  ´  ¦            A5    5   E   QA5    5   5   5      QV       A¸   
V   :    Q;   ¸   
A5    5       A: QÑÚÌÉÜ ¼ ® ¼    panel   firstChild   notification   browser7   _getNotificationsForBrowser   Array   forEach   childNodes   ÿÿÿÿ      PopupNotifications.prototype._dismissOrRemoveCurrentNotifications/<Á               x       ¹      $                                        nEl   notificationObj j  ¨  ®            T  5       Q      ¸   
V   : ×ÿ   V   5   5      A¸   
V   : Q   %V   C6   QA¸   
V   ;   : Q
ÍÕ
ÎÕËÕB    notification   indexOf   options#   removeOnDismissal   _remove   dismissed   _fireCallback9   NOTIFICATION_EVENT_DISMISSED   ÿÿÿÿ   E   PopupNotifications_onButtonCommand              ®      ¹                              &             event   target   notificationEl   parent   notification   timeSinceShown ö  Á  ¿            T  5       Q  QV     Q   mV  W  QãV  E   !QV   5   ¸   
V  : W  ÿÿÿÏV      =   pV  5       =   pV  5     QA5   5   ¸   
:  V  5   	  QV  5   
    ;V  V  6   
Q;   5   ¸   
=   : ¸   
V  : QV  A5      ,;   5   ¸   
=   V  =   : QV  5   5   ¸   
l  Q   ,  Qv  Q;   ¸   
V  : QÈ    V  5   5      A¸   
:  QA¸   
V  : QA¸   
:  Q ÄÍÉ(6Ê ÇàÌÊÎÒÒÊÎà ÖËÖË ÛÞÌÛÎÌÐÌ    originalTarget   ownerDocument!   getBindingParent   PopupNotifications_onButtonCommand: couldn't find notification element   notification}   PopupNotifications_onButtonCommand: couldn't find notification   window   performance   now   timeShown9   timeMainActionFirstTriggered   Services   telemetry!   getHistogramByIdU   POPUP_NOTIFICATION_MAINACTION_TRIGGERED_MS   add   buttonDelay   console!   logStringMessage«   PopupNotifications_onButtonCommand: Button click happened before the security delay:    ms   mainAction   callback	   call   Cu   reportError   dismiss   _dismiss   _remove   _update    ÿÿÿÿ         error         +         !   6       J      ÿÿÿÿ   ÿÿÿÿ   A   PopupNotifications_onMenuCommand              É       ¹      :                                     event   target ÿ  ¹  ï            T  5       QV   5    D   QV   5       =   pT  ¸   
:  QV   5   5   ¸   
l  Q   ,  Qv  Q;   ¸   
V  : QÈ    V   5   5   	   A¸   

:  QA¸   
V   5   : QA¸   
:  QÍÐÊÎÞÌÛÎÌÕÌ    originalTarget   action   notificationq   menucommand target has no associated action/notification   stopPropagation   callback	   call   Cu   reportError   dismiss   _dismiss   _remove   _update    ÿÿÿÿ         error         A          `       ÿÿÿÿ   ÿÿÿÿ   3   PopupNotifications_notify                 %       ¹                                              topic é  A              ;    5   ¸   
@=   T  =   : QäF    Services   obs   notifyObservers'   PopupNotifications-   