ç¿s¹                ¬      ¹      D                                 0     resource://gre/modules/ResetProfile.jsm                                    
   Af    0    Q;   5      Q5      Q5      Q5   	   QQ=      
Q=      Q;   ¸   
=   : QAY      ]      ]   0   Q	Ì)	öBËËÕ1Ê(Ð: !   EXPORTED_SYMBOLS   Cc   Ci   Cu   Cr   Components   classes   interfaces   utils   results   MOZ_APP_NAME   thunderbird   MOZ_BUILD_APP   ../mail   importG   resource://gre/modules/Services.jsm   ResetProfile   resetSupported-   openConfirmationDialog                     ResetProfile                  ÿÿÿÿ   A   this.ResetProfile.resetSupportedÁ                »       ¹      .                                     profileService#   currentProfileDir  ø         
      ;    5   ¸   
;   5   :    Q;   5   ¸   
=   ;   5   	:   QV  ¸   

V   5   5   : E   #Q=   ;   =   ;   ;    q   ,  Qv  Q;   ¸   
V  : QÈ    BÑÊÈàÈAÙÉãÌ Û"    CcM   @mozilla.org/toolkit/profile-service;1   getService   Ci1   nsIToolkitProfileService   Services   dirsvc   get   ProfD   nsIFile   equals   selectedProfile   rootDirI   @mozilla.org/profile/migrator;1?app=   MOZ_BUILD_APP   &type=   MOZ_APP_NAME   Cu   reportError    ÿÿÿÿ         e         L   E              ÿÿÿÿ   ÿÿÿÿ   Q   this.ResetProfile.openConfirmationDialogÁ               Ì       ¹      <                                       window   params   env   appStartup y  
  (       
      Y   B]       QT  ¸   
=   @=   V   : QV   5        ;   5   ¸   
;   5   :   QV  ¸   	
=   
=   : Q;   5   ¸   
;   5   :   QV  ¸   
;   5   5   ;   5   5   : Q*Ë-ÐÉ-/Ê3ÑÊ3È5Ù7ÛÈîI    reset   openDialogQ   chrome://global/content/resetProfile.xul[   chrome,modal,centerscreen,titlebar,dialog=yes   CcE   @mozilla.org/process/environment;1   getService   Ci   nsIEnvironment   set3   MOZ_RESET_PROFILE_RESTART   1E   @mozilla.org/toolkit/app-startup;1   nsIAppStartup	   quit   eForceQuit   eRestart