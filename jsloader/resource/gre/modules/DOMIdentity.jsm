�s�                �  <   �   P         .                   *       0     resource://gre/modules/DOMIdentity.jsm     �?                �    �   �   �   �   �                  
   ;   5       Q5      Q5      Q5      QQ;   �   	
=   
: Q;   �   	
=   : Q=      Q=      QAf    0   Q;   �   
A=   =   : Q;   �   
A=   =   : Q;   �   
A=   =   : Q;   �   
A=   =   : Q;   �   
A=   =   : Q;   �   
A=   =   =   : Q;   �   
A=    =   !=   ": Q;   #Y   �   a   %�   a   &;   ']   (�   ]   )�   ]   *�   	]   +0   $Q;   ,Y   �   a   %�   a   &;   ']   (�   ]   -�   ]   +0   $Q;   .Y   ;   ']   (�   ]   /�   ]   0�   ]   1�   ]   2�   ]   +0   $QAY   ;   4R  ]   5;   4R  ]   6@]   7�   a   �   ]   8�   ]   9�   ]   :�   ]   ;�   ]   <�   ]   =�   ]   >�   ]   ?f   ]   @�   ]   A�    ]   B�   !]   C�   "]   D�   #]   E�   $]   F�   %]   G�   &]   H�   ']   I�   (]   J�   )]   K�   *]   L�   +]   M�   ,]   N�   -]   O0   3Q�������������ʘ1�	�5�	�9�	�J�	�j�	��  ��	������
�� �Ո1�Ո3��ˈ��ˈ�̈(�Ґ���W�Ҙ���Y�Ґ���Y�"Ґ�"��W�%͐��%�'�R�)Ґ��)�+�@�-Ґ��-�/�;�1�3��5�7��9�H���J�N��Pʐ�ʐ�ʘT�ʘV�ʘ^�ʘe�Иh��j�n��pʐ�ʐ�ʘt�ʘv�ʘ}�А�������  ����ʐ�ʐ��ʘ�  ��ʘ�  ��ʘ�  ��ʘ�  ��И�  ������  Ȉ�Ȑ��Ș�  Έ��ʘ�  ڈʘ�  �ʘ�  ��ʐ����ʘ� 
�ʘ� �ʘ� &�ʘ� _�ʘ� i�ʘ� s�ʘ� y�ʘ� ��ʘ� ��ʘ� ��ʘ� ��ʘ� ��ʘ� ��ʘ� ��ʘ� ƈʐ����ʐ����ʐ����ʘ� ؈ʐ����А���    Cc   Ci   Cu   Cr   Components   classes   interfaces   utils   results   importG   resource://gre/modules/Services.jsmK   resource://gre/modules/XPCOMUtils.jsm!   PREF_FXA_ENABLED7   identity.fxaccounts.enabled   FXA_PERMISSION!   firefox-accounts!   EXPORTED_SYMBOLS   XPCOMUtils-   defineLazyModuleGetter   objectCopyc   resource://gre/modules/identity/IdentityUtils.jsm   IdentityServiceg   resource://gre/modules/identity/MinimalIdentity.jsm   FirefoxAccountsg   resource://gre/modules/identity/FirefoxAccounts.jsm#   makeMessageObject   LoggerY   resource://gre/modules/identity/LogUtils.jsm/   defineLazyServiceGetter	   ppmmU   @mozilla.org/parentprocessmessagemanager;13   nsIMessageListenerManager#   permissionManagerA   @mozilla.org/permissionmanager;1)   nsIPermissionManager-   IDPProvisioningContext   prototype   id   origin#   _sendAsyncMessage!   sendAsyncMessage7   doBeginProvisioningCallback)   doGenKeyPairCallback   doError1   IDPAuthenticationContext;   doBeginAuthenticationCallback   RPWatchContext   doLogin   doLogout   doReady   doCancel   DOMIdentity   Map!   _serviceContexts   _mmContexts)   _mockIdentityService   newContext   getService   getContextForMM   hasContextForMM%   deleteContextForMM   hasPermission   receiveMessage   observe   messages   _init'   _subscribeListeners+   _unsubscribeListeners   _watch   _unwatch   _request   _logout+   _childProcessShutdown%   _beginProvisioning   _genKeyPair)   _registerCertificate)   _provisioningFailure)   _beginAuthentication/   _completeAuthentication-   _authenticationFailure                     DOMIdentity                  ����      log                2      �                                             aMessageArgs   \  1             �U  Q;    5   �   
;    f    �   
T  : O Q���������?    Logger   log   apply   concat                     DOMIdentity                  ����      IDDOMMessage                        �                                             aOptions s  �  5             ;    �    T  A: Q���҈    objectCopy   ����   #   _sendAsyncMessage                �       �                                          identifier   message  �  �
  9             A5       }�A5    �   
T  T : Q   `��   Qv�   QV   5   ;   5      ;   �   =   : Q�ș;   �   =   V   : Q�    ������ܐ̘A���Ӑ��E�ߐ�    _mm!   sendAsyncMessage   result   Cr1   NS_ERROR_NOT_INITIALIZED   log}   Cannot sendAsyncMessage because the recipient frame has closed3   ERROR: sendAsyncMessage:     ����          err                   )   T   ��������c             ����   -   IDPProvisioningContext                        �                                              aID   aOrigin   aTargetMM     b  J             AT  0    QAT 0   QAT 0   Q���ʐ�ʐ�ʈ    _id   _origin   _mm   ����   G   IDPProvisioningContext.prototype.id�                          �                                           �  �  Q             A5    ���    _id   ����   O   IDPProvisioningContext.prototype.origin�                          �                                           �  �  R             A5    ���    _origin   ����   '   IDPPC_doBeginProvCB�               N       �      "                                       aID   aCertDuration   message      V             ;    Y   A5   ]   R �   QV   T  0   QV   T 0   QA�   
=   V   : Q���ˈˈ����Ȑ�͐�͐�͐�Z���#    IDDOMMessage   id   identity   certDuration!   sendAsyncMessageU   Identity:IDP:CallBeginProvisioningCallback   ����   5   IDPPC_doGenKeyPairCallback�               T       �                                             aPublicKey   message \  1  ^             ;    �    =   : Q;   Y   A5   ]   R �   QV   T  0   QA�   
=   V   : Q���Ӑ�ˈˈ����Ȑ�͐�ՈF    log)   doGenKeyPairCallback   IDDOMMessage   id   publicKey!   sendAsyncMessageG   Identity:IDP:CallGenKeyPairCallback   ����   Q   IDPProvisioningContext.prototype.doError�                        �                                             msg G  y  e             ;    �    =   T  : Q���׈"    log)   Provisioning ERROR:    ����   1   IDPAuthenticationContext                        �                                              aID   aOrigin   aTargetMM   �     j             AT  0    QAT 0   QAT 0   Q���ʐ�ʐ�ʈ    _id   _origin   _mm   ����   K   IDPAuthenticationContext.prototype.id�                          �                                           1  <  q             A5    ���    _id   ����   S   IDPAuthenticationContext.prototype.origin�                          �                                           J  Y  r             A5    ���    _origin   ����   '   IDPAC_doBeginAuthCB�               A       �                                             aIdentity   message �  �  v             ;    Y   A5   ]   R �   QV   T  0   QA�   
=   V   : Q���ˈˈ����Ȑ�͐�͐�y���#    IDDOMMessage   id   identity!   sendAsyncMessageY   Identity:IDP:CallBeginAuthenticationCallback   ����      IDPAC_doError�                        �                                             msg �  �  }             ;    �    =   T  : Q���׈$    log-   Authentication ERROR:    ����      RPWatchContext                 l       �   	   +                                       aOptions   aTargetMM   aPrincipal   	  �  �             ;    �    T  A: QA5   E   QA5       ;   =   R pAT 0   QAT  5   0   QAT  5   0   QAT 0   Q���Ґ������ˈ����ʐ���ϐ���ϐ��ʈ    objectCopy   id   origin   Error_   id and origin are required for RP watch context   principal   loggedInUser   _internal   _mm   ����   -   RPWatchContext_onlogin�               k       �      "                                       aAssertion)   aMaybeInternalParams   message  I  x  �             ;    �    =   A5   : Q;   Y   A5   ]   T  ]   R �   QT    V   T 0   QA�   
=   V   : Q���ڐ�ˈˈȈ����Ȑ��͐��Ո<    log   doLogin:    id   IDDOMMessage   assertion   _internalParams!   sendAsyncMessage3   Identity:RP:Watch:OnLogin   ����   /   RPWatchContext_onlogout�                 N       �                                              message�  E  �             ;    �    =   A5   : Q;   Y   A5   ]   R �   QA�   
=   V   : Q���ڐ�ˈˈ����Ȑ�Ո=    log   doLogout:    id   IDDOMMessage!   sendAsyncMessage5   Identity:RP:Watch:OnLogout   ����   -   RPWatchContext_onready�                 N       �                                              messager    �             ;    �    =   A5   : Q;   Y   A5   ]   R �   QA�   
=   V   : Q���ڐ�ˈˈ����Ȑ�Ո<    log   doReady:    id   IDDOMMessage!   sendAsyncMessage3   Identity:RP:Watch:OnReady   ����   /   RPWatchContext_oncancel�                 N       �                                              message=  �  �             ;    �    =   A5   : Q;   Y   A5   ]   R �   QA�   
=   V   : Q���ڐ�ˈˈ����Ȑ�Ո=    log   doCancel:    id   IDDOMMessage!   sendAsyncMessage5   Identity:RP:Watch:OnCancel   ����   -   RPWatchContext_onerror�               o       �   
   "                                       aMessage   message   �  �       	      ;    �    =   A5   =   ;   �   
T  : : Q;   Y   A5   ]   T  ]   R �   QA�   
=   	V   : Q����#����ݔ�ˈˈȈ����Ȑ�Ո<    log   doError:    id   : 	   JSON   stringify   IDDOMMessage   message!   sendAsyncMessage3   Identity:RP:Watch:OnError   ����   A   this.DOMIdentity.IdentityService�                   ,       �                                           B  �  �             A5       ;   �   =   : QA5    ;   ����Ӑ����� )   _mockIdentityService   log?   Using a mocked identity service   IdentityService   ����   7   this.DOMIdentity.newContext�               V       �                                 
            message   targetMM   principal   context   J  *  �             ;    T  T T R �   QA5   �   
T  5   V   : QA5   �   
T T  5   : QV   ���ψ
Ȑ�ݐ�ܐ��    RPWatchContext!   _serviceContexts   set   id   _mmContexts   ����   7   this.DOMIdentity.getService�               �       �      3                                       message   context F  �   �             A5    �   
T  5   :     #;   �   =   T  5   : Q@A5    �   
T  5   : �   QV   5   =      k;   5   	�   

;   : ;   5   5   HE   Q;   5   	�   
;   :    ;   ;   �   =   : QA5   ���Ո��ܐ�����Ո
Ȑ��ֈ
ِֈ�����Ӑ��� !   _serviceContexts   has   id   log_   ERROR: getService called before newContext for    get   wantIssuer!   firefox-accounts   Services   prefs   getPrefType!   PREF_FXA_ENABLED   Ci   nsIPrefBranch   PREF_BOOL   getBoolPref   FirefoxAccounts�   WARNING: Firefox Accounts is not enabled; Defaulting to BrowserID   IdentityService   ����   A   this.DOMIdentity.getContextForMM�                 %       �                                             targetMM �   J!  �             A5    �   
A5   �   
T  : : ���݈!�����: !   _serviceContexts   get   _mmContexts   ����   A   this.DOMIdentity.hasContextForMM�                        �      	                                       targetMM h!  �!              A5    �   
T  : ���Ј�    _mmContexts   has   ����   G   this.DOMIdentity.deleteContextForMM�                 9       �                                 	            targetMM X"  �"  
            A5    �   
A5   �   
T  : : QA5   �   
T  : Q���݈����㔈Ԉ" !   _serviceContexts   delete   _mmContexts   get   ����   =   this.DOMIdentity.hasPermission�                      �      Q                                      aMessage �"  l&              T  5    E   QT  5    5   =      ������  Q�  Q�  Q�   QT  5       	B�ș;   5   �   
;   5   : �   Q;   	5   
�   
T  5   5   @@: �  QV   �   
V  T  5   5   T  5   5   : �  Q;   �   
V  ;   : �  QV  ;   5   5   E   QV  ;   5   5   �ș�C�����ݐ�
������
ѐʘ� �Ȑ��
��Ȑ�
ϐژ� �Ȑ���
�А�� �Ȑ��ڐؐ��� 	   json   wantIssuer!   firefox-accounts   principal   CcI   @mozilla.org/scriptsecuritymanager;1   getService   Ci1   nsIScriptSecurityManager   Services   io   newURI   origin/   getAppCodebasePrincipal   appId%   isInBrowserElement#   permissionManager7   testPermissionFromPrincipal   FXA_PERMISSION)   nsIPermissionManager   UNKNOWN_ACTION   DENY_ACTION    ����          secMan       uri       principal       permission        *   �   ��������O          ����            ����   5   DOMIdentity_receiveMessage�               �      �      �                                        aMessage   msg   targetMM �&  T-  &      
      T  5    �   QT  5   �  QA�   
T  :     ;   =   R pT  5   x=   y   x=   y   �=   y   �=   	y   �=   
y   �=   y   �=   y   �=   y   �=   y   �=   y   �=   y   �=   y  	z  A�   
V   V  T  5   : Q   �A�   
V   V  : Q   �A�   
V   : Q   �A�   
V   : Q   �A�   
V   V  : Q   �A�   
V   : Q   �A�   
V   : Q   rA�   
V   : Q   ]A�   
V   V  : Q   DA�   
V   : Q   /A�   
V   : Q   A�   
V  : Q   ���͐����͐��ˈ��ˈ����h� ���u
���u
���u
���u
����u
���u
���u
���u
���u
���u
���u
���uʘ� 3��ܐX���ԐX���АX���АX����ԐX���АX���АX���АX���ԐX���АX���АX������АX�� 	   json   target   hasPermission   Error#   PERMISSION_DENIED	   name#   Identity:RP:Watch'   Identity:RP:Unwatch'   Identity:RP:Request%   Identity:RP:Logout=   Identity:IDP:BeginProvisioning/   Identity:IDP:GenKeyPairA   Identity:IDP:RegisterCertificateA   Identity:IDP:ProvisioningFailureA   Identity:IDP:BeginAuthenticationG   Identity:IDP:CompleteAuthenticationE   Identity:IDP:AuthenticationFailure-   child-process-shutdown   _watch   principal   _unwatch   _request   _logout%   _beginProvisioning   _genKeyPair)   _registerCertificate)   _provisioningFailure)   _beginAuthentication/   _completeAuthentication-   _authenticationFailure+   _childProcessShutdown   ����   '   DOMIdentity_observe�                 V       �                                 
            aSubject   aTopic   aData   �-  �.  _            T x=    y   
z   GA�   
:  Q;   5   �   
A=    : Q;   5   �   
A: Q   ��kR�uʐ�̐�ې�֐X��    xpcom-shutdown+   _unsubscribeListeners   Services   obs   removeObserver   ww-   unregisterNotification                  #   Identity:RP:Watch   '   Identity:RP:Request   %   Identity:RP:Logout   =   Identity:IDP:BeginProvisioning   A   Identity:IDP:ProvisioningFailure   A   Identity:IDP:RegisterCertificate   /   Identity:IDP:GenKeyPair   A   Identity:IDP:BeginAuthentication   G   Identity:IDP:CompleteAuthentication   E   Identity:IDP:AuthenticationFailure   '   Identity:RP:Unwatch   -   child-process-shutdown                  ����   #   DOMIdentity__init�                   ?       �                                 
          �0  #1  s            ;    5   �   
A: Q;    5   �   
A=   B: QA�   
:  Q���֐�ܐ�̈    Services   ww)   registerNotification   obs   addObserver   xpcom-shutdown'   _subscribeListeners   ����   ?   DOMIdentity__subscribeListeners�                  f       �      #                                  e1  �1  y            ;        A5   - �
:  �   Q   &m5   W   Q;    �   
V   A: Q�Q�   
:  5   ����� ��������8:ѐ�՘� }�ˈ����Ґ�- 	   ppmm   messages   value%   addMessageListener	   next	   done    ����          message       '   :          E   ����   ����   C   DOMIdentity__unsubscribeListeners�                  e       �                               
          52  �2  �            A5    - �
:  �   Q   &m5   W   Q;   �   
V   A: Q�Q�   
:  5   ����� n   @1   Q���8:ѐ�՘� ��ˈ����Ґ���̈    messages   value	   ppmm+   removeMessageListener	   next	   done    ����          message          :          E   ����   ����   %   DOMIdentity__watch�               b       �                                 
            message   targetMM   principal   context   �2  �3  �            ;    �    =   T  5   =   T : QA�   
T  T T : �   QA�   
T  : 5   �   
V   : Q���搈ш
Ȑ��+    log)   DOMIdentity__watch:    id    -    newContext   getService   RP   watch   ����   '   DOMIdentity_unwatch�               �       �      %                                       message   targetMM   service  �3  6  �            ;    �    =   T  5   : QA�   
T  : �   QV   E   QV   5      5V   5   �   
T  5   T : QA�   
T : Q;    �    =   T  5   : Q���ܘ� ��ˈ
Ȑ���ߐ�ϐ����܈;    log-   DOMIDentity__unwatch:    id   getService   RP   unwatch%   deleteContextForMMM   Can't find a service to unwatch() for    ����   )   DOMIdentity__request�               `       �                                 	            message   service =6  +7  �            A�    
T  : �   QV   E   QV   5      &V   5   �   
T  5   T  : Q;   �   =   : Q���ˈ
Ȑ���ߐ����ӈJ    getService   RP   request   id   log�   No context in which to call request(); Did you call watch() first?   ����   '   DOMIdentity__logout�               h       �                                 
            message   service U7  Q8  �            A�    
T  : �   QV   E   QV   5      .V   5   �   
T  5   T  5   T  : Q;   �   =   : Q���ˈ
Ȑ���琈���ӈI    getService   RP   logout   id   origin   log�   No context in which to call logout(); Did you call watch() first?   ����   C   DOMIdentity__childProcessShutdown�               �       �      A                                       targetMM   service   options �8  Z:  �            A�    
T  :     A�   
T  : �   QV   E   QV   5      V   5   �   
T  : QA�   
T  : Q;   �   Y   T  ]   @]   @]   : �  Q;   	5   
�   
Y   V  ]   =   @: Q���ˈ������ˈ
Ȑ���א���ϐ��ψȈ�
�����Ȑ�ֈψ����b    hasContextForMM   getContextForMM   RP)   childProcessShutdown%   deleteContextForMM#   makeMessageObject   messageManager   id   origin   Services   obs   notifyObservers   wrappedJSObject?   identity-child-process-shutdown   ����   =   DOMIdentity__beginProvisioning�               D       �                                 	            message   targetMM   context  �:  q;  �            ;    T  5   T  5   T R �   QA�   
T  : 5   �   
V   : Q���֐�� ��Ȑ���8 -   IDPProvisioningContext   id   origin   getService   IDP#   beginProvisioning   ����   /   DOMIdentity__genKeyPair�                 '       �                                             message �;  �;  �            A�    
T  : 5   �   
T  5   : Q����4    getService   IDP   genKeyPair   id   ����   A   DOMIdentity__registerCertificate�                 /       �                                             message /<  �<  �            A�    
T  : 5   �   
T  5   T  5   : Q����K    getService   IDP'   registerCertificate   id	   cert   ����   A   DOMIdentity__provisioningFailure�                 /       �                                             message �<  8=  �            A�    
T  : 5   �   
T  5   T  5   : Q����R    getService   IDP1   raiseProvisioningFailure   id   reason   ����   A   DOMIdentity__beginAuthentication�               D       �                                 	            message   targetMM   context  |=  Y>  �            ;    T  5   T  5   T R �   QA�   
T  : 5   �   
V   : Q���֐�� ӈȐ���: 1   IDPAuthenticationContext   id   origin   getService   IDP'   beginAuthentication   ����   G   DOMIdentity__completeAuthentication�                 '       �                                             message �>  �>  �            A�    
T  : 5   �   
T  5   : Q����@    getService   IDP-   completeAuthentication   id   ����   E   DOMIdentity__authenticationFailure�                 '       �                                             message ??  �?  �            A�    
T  : 5   �   
T  5   : Q����>    getService   IDP)   cancelAuthentication   id