�s�                )     �      �                                      resource://gre/modules/InsecurePasswordUtils.jsm     �                �   �   �   �   �   Af    6    Q;   5      Q;   5      Q;   5      Q;   �   
=   	: Q;   �   
=   
: Q;   �   
A=   =   : Q;   �   
A=   Y   �   ]   C]   C]   : Q=      Qn   ;   5   ;   R o   QAY   �   ]   �   ]   �   ]   �   ]   6   Q�������������̈4��Ј��Ј��Ј�Ո1�Ո3�Ґ���P�א�ʘ��������ˈ��ՈɈ�������ʘN�ʘj�ʘ�И�  �� !   EXPORTED_SYMBOLS   Ci   Components   interfaces   Cu   utils   Cc   classes   importG   resource://gre/modules/Services.jsmK   resource://gre/modules/XPCOMUtils.jsm   XPCOMUtils-   defineLazyModuleGetter   devtoolsU   resource://gre/modules/devtools/Loader.jsm   Object   defineProperty   WebConsoleUtils   get   configurable   enumerable   STRINGS_URIg   chrome://global/locale/security/security.properties	   l10n+   InsecurePasswordUtils-   _sendWebConsoleMessage'   _checkIfURIisSecureA   _checkForInsecureNestedDocuments3   checkForInsecurePasswords                  +   InsecurePasswordUtils                  ����   	   .get�                          �      
                                      �  �               ;    �   
=   : 5   ���шɈ<    devtools   requireC   devtools/toolkit/webconsole/utils   Utils   ����   c   this.InsecurePasswordUtils._sendWebConsoleMessage�               �       �      5                                        messageTag   domDoc   windowId   category	   flag   message   consoleMsg  �  v               ;    �   
T 5   : �   Q=   �  Q;   5   5   �  Q;   �   
T  : �  Q;   	5   
�   
;   5   : �  QV  �   
V  =   >>>V  V  V   : Q;   5   �   
V  : Q��%�	ԈȐ�ʐ�Ԑ�ψ
Ȑ�ѐʘ)�Ș,�ːؘ,��/�و(    WebConsoleUtils!   getInnerWindowId   defaultView/   Insecure Password Field   Ci   nsIScriptError   warningFlag	   l10n   getStr   Cc5   @mozilla.org/scripterror;1   createInstance!   initWithWindowID      Services   console   logMessage   ����   ]   this.InsecurePasswordUtils._checkIfURIisSecure�               �       �      .                                        uri   isSafe   netutil   ph j  U  N       
      B�   Q;    5   �   
;   5   : �  Q;   5   �  QV  �   
T  V  5   : D   `QV  �   
T  V  5   : D   @QV  �   
T  V  5   	: D    QV  �   
T  V  5   
:    CW   QV   �����ۈ
Ȑ�ϘS׈ɐ׈ɐ׈ɐ׈�X��[��    Cc7   @mozilla.org/network/util;1   getService   Ci   nsINetUtil%   nsIProtocolHandler!   URIChainHasFlags+   URI_IS_LOCAL_RESOURCE1   URI_DOES_NOT_RETURN_DATA;   URI_INHERITS_SECURITY_CONTEXTE   URI_SAFE_TO_LOAD_IN_SECURE_CONTEXT   ����   w   this.InsecurePasswordUtils._checkForInsecureNestedDocuments�               `       �      !                                        domDoc   uri �  �  j             T  5    �   QT  5   T  5   5      BA�   
V   :     CA�   
T  5   5   5   : ���͐��n��p�̈�r��u�ڈ�J #   documentURIObject   defaultView   parent'   _checkIfURIisSecureA   _checkForInsecureNestedDocuments   document   ����   i   this.InsecurePasswordUtils.checkForInsecurePasswords�             �       �      3                                       aForm   domDoc   pageURI   isSafePage �  �               T  5    W   QV   5   5   5   5   �  QA�   
V  : �  QV      A�   
=   V   : QA�   
V   :    A�   
=   	V   : QT  5   
�   
�    :    A�   
=   V   : Q���͐�ݐ�̈Ȑ����՘�  �̈��Ր��Ԉ��ՈJ    ownerDocument   defaultView   top   document#   documentURIObject'   _checkIfURIisSecure-   _sendWebConsoleMessage=   InsecurePasswordsPresentOnPageA   _checkForInsecureNestedDocumentsA   InsecurePasswordsPresentOnIframe   action   matchE   InsecureFormActionPasswordsPresent   ^http:\/\/    