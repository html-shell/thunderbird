ç¿s¹                     ¹   ,   Ã                                 0     resource://gre/modules/DownloadUIHelper.jsm     "                                  Af    0    Q;   5      Q;   5      Q;   5      Q;   5   	   Q;   ¸   

=   : Q;   ¸   
A=   =   : Q;   ¸   
A=   =   : Q;   ¸   
A=   =   : Q=      QY   C]   C]   C]   C]   C]   C]      QAY      ]   0   Q;   ¸   
;   =       : QA   0   !QA5   !Y   =   #]   $=   %]   &=   ']   (@]   )   ]   *   ]   +0   "Q"%ÌÐÐÐÐÕ3ÒGÒHÒI"Ë"%Ì%!4CÐGNßamÌrtËxÊÊÊ  Ê  ¿Ð  í !   EXPORTED_SYMBOLS   Cc   Components   classes   Ci   interfaces   Cu   utils   Cr   results   importK   resource://gre/modules/XPCOMUtils.jsm   XPCOMUtils-   defineLazyModuleGetter   OSC   resource://gre/modules/osfile.jsm   PromiseE   resource://gre/modules/Promise.jsm   ServicesG   resource://gre/modules/Services.jsm!   kStringBundleUrlm   chrome://mozapps/locale/downloads/downloads.properties7   kStringsRequiringFormatting;   fileExecutableSecurityWarning;   cancelDownloadsOKTextMultipleG   quitCancelDownloadsAlertMsgMultipleM   quitCancelDownloadsAlertMsgMacMultipleM   offlineCancelDownloadsAlertMsgMultiplew   leavePrivateBrowsingWindowsCancelDownloadsAlertMsgMultiple2!   DownloadUIHelper   getPrompter!   defineLazyGetter   strings!   DownloadPrompter   prototype   prompt-on-quit   ON_QUIT#   prompt-on-offline   ON_OFFLINEA   prompt-on-leave-private-browsing3   ON_LEAVE_PRIVATE_BROWSING   _prompter/   confirmLaunchExecutable-   confirmCancelDownloads                  !   DownloadUIHelper                  ÿÿÿÿ   C   this.DownloadUIHelper.getPrompterÁ                        ¹      
                                       aParent C	  	  C             ;    T  D   Q@R Ð& !   DownloadPrompter   ÿÿÿÿ                    á       ¹      @                                     strings   sb   enumerator
  _  N       
      Y      Q;    5   ¸   
;   :    Q   ¸   
:    Q   mÆ       Q  QV  ¸   
:  ¸   
;   5   :   QV  5   	   Q   ;   
q   V         9Q   V      V  5   9QÈÇãV  ¸   
:  ÿÿÿlV   ÊÖÉÌÈ(  'ÓË	ÜÏËÕ\ÖR	Õ`    Services   strings   createBundle!   kStringBundleUrl)   getSimpleEnumeration   getNext   QueryInterface   Ci%   nsIPropertyElement   key7   kStringsRequiringFormatting   value   hasMoreElements    ÿÿÿÿ         string       stringName             '   strings[stringName]Á                 9      ¹                                              arguments  	  V       	      	W   Q  ¸    
   ;   ¸   
V   >: V   Ù   : XÑÑ'ÉXZ9 )   formatStringFromName   Array   slice   length    B          J   {   ÿÿÿÿ   ÿÿÿÿ   +   this.DownloadPrompterÁ                        ¹                                             aParent Ä    m             A;   5   ¸   
T  : 0    QpÕÉ$    _prompter   Services   ww   getNewPrompter   ÿÿÿÿ   o   this.DownloadPrompter.prototype.confirmLaunchExecutableÁ              z      ¹                              #            aPath'   kPrefAlertOnEXEOpen H  §               =       Q  Q  Q  Q  QA5       ;   ¸   
C: È;   5   ¸   
V   :     ;   ¸   
C: È     Qv  QÈ    ;   5   ¸   	
T  :   Q;   
5     QY   B]     QA5   ¸   
V  5   V  ¸   
V  V  : V  5   V  :   QV     (;   5   ¸   
V   V  5    : Q;   ¸   
V  : ÈÈ   .  Qv  Q;   ¸   
V  : ÈÈ    
Ê AÙ
Í2Õ
ÍËÓ
ÔÈ
Ï
Ë
ÍÉÓÉ  £È  ©Õ0ÊÿÿÿÐÐÌÌÐÍ O   browser.download.manager.alertOnEXEOpen   _prompter   Promise   resolve   Services   prefs   getBoolPref   OS	   Path   basename!   DownloadUIHelper   strings   value   confirmCheckE   fileExecutableSecurityWarningTitle;   fileExecutableSecurityWarningI   fileExecutableSecurityWarningDontAsk   setBoolPref   reject    ÿÿÿÿ         leafName       s       checkState       shouldLaunch                     ex        ÿÿÿÿ         ex            E       C   6          <  ÿÿÿÿÿÿÿÿA          ÿÿÿÿs             z          ÿÿÿÿI            Q  "   ÿÿÿÿÿÿÿÿq           ÿÿÿÿ   1   DP_confirmCancelDownload               û      ¹      ¦                           '            aDownloadsCount   aPromptType   s   buttonFlags   okButton   title   message   cancelButton   rv    "  ¿             A5     D   QT  >   B;   5      Q;   5   5   ;   5   5   ;   5   5   ;   5   5     QT  ?   V   ¸   
T  :    V   5   	  Q  Q  Q  QT xA5   
y    A5   y   dA5   y   ¨z   òV   5   W  QT  ?   V   ¸   
T  :    V   5   W  QV   5   W  Q   £V   5   W  QT  ?   V   ¸   
T  :    V   5   W  QV   5   W  Q   TV   5   W  QT  ?   V   ¸   
T  :    V   5   W  QV   5   W  Q   A5    ¸   
V  V  V  V  V  @@Y   :   QV  ?ÒÏßåÓ!ÈÎ	k v  Ùv  àvÊ  ÐÎÎÈÎÎXÎÎÈÎÎXÎÎÈÎÎXÝË  éÈ    _prompter!   DownloadUIHelper   strings   Ci   nsIPrompt-   BUTTON_TITLE_IS_STRING   BUTTON_POS_0   BUTTON_POS_1;   cancelDownloadsOKTextMultiple+   cancelDownloadsOKText   ON_QUIT   ON_OFFLINE3   ON_LEAVE_PRIVATE_BROWSING;   quitCancelDownloadsAlertTitleG   quitCancelDownloadsAlertMsgMultiple7   quitCancelDownloadsAlertMsg#   dontQuitButtonWinA   offlineCancelDownloadsAlertTitleM   offlineCancelDownloadsAlertMsgMultiple=   offlineCancelDownloadsAlertMsg'   dontGoOfflineButton[   leavePrivateBrowsingCancelDownloadsAlertTitlew   leavePrivateBrowsingWindowsCancelDownloadsAlertMsgMultiple2g   leavePrivateBrowsingWindowsCancelDownloadsAlertMsg2?   dontLeavePrivateBrowsingButton2   confirmEx