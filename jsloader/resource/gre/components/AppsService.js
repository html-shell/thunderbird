�s�               �     �   (   �                        $       0     resource://gre/components/AppsService.js     �         
           �    �   �   �      ;   5       Q;   5      Q;   5      Q;   �   
=   : Q;   �   
=   	: Q;   �   
=   
: Q�;   5   �   
=   :    ;   �   
=   : Q   ��   Qv�   Q�    ;   �   
=   :    Q;   Y   �   ]   �   ]   �   ]   �   ]   �   ]   �   ]   �   	]   �   
]   �   ]   �   ]   �   ]   �   ]    ;   ]   !;   "�   #
Z  ;   5   $`   : ]   %0   QA;   "�   '
Z  ;   `   : 0   &Q���	��������ʘ�	�����	���Ј��Ј��Ј�Ո3�Ո1�Ո0��4�ֈ��ژӈ��шɈ������"��$ʘ&�ʘ+�ʘ0�ʘ5�ʘ?�ʘD�ʘI�ʘN�ʘS�ʘX�ʘ]�ʘb�ʘ�  ��ʐ�Ј(Έ����ΐ���ш5Ɉ����ɐ    Cc   Components   classes   Ci   interfaces   Cu   utils   importK   resource://gre/modules/XPCOMUtils.jsmG   resource://gre/modules/Services.jsmE   resource://gre/modules/Promise.jsm   Services   prefs   getBoolPref=   dom.apps.customization.enabled[   resource://gre/modules/UserCustomizations.jsm!   APPS_SERVICE_CID   IDM   {05072afa-92fe-45bf-ae22-39b69c117058}   AppsService   prototype/   getManifestCSPByLocalId-   getDefaultCSPByLocalId'   getAppByManifestURL   getManifestFor5   getAppLocalIdByManifestURL-   getAppLocalIdByStoreId   getAppByLocalId/   getManifestURLByLocalId'   getCoreAppsBasePath%   getWebAppsBasePath   getAppInfo   getRedirect   classID   XPCOMUtils   generateQI   nsIAppsService   QueryInterface   NSGetFactory)   generateNSGetFactory   ����      debug                        �                                               s �                   ��     ����          e       ����      AppsService                   �       �      "                                       �               ;    �    =   : QA;   5   �   
;   5   : 5   ;   5   5   	0   Q;    �    =   
A5   : Q;   �   
A5      =      
=   : Q����Ӑ�܈Ȑ֐�ڐ��
ϐ� ���K    debug/   AppsService Constructor   inParent   Cc7   @mozilla.org/xre/app-info;1   getService   Ci   nsIXULRuntime   processType)   PROCESS_TYPE_DEFAULT   inParent:    Cu   importE   resource://gre/modules/Webapps.jsmW   resource://gre/modules/AppsServiceChild.jsm   ����      getCSPByLocalId�                 1       �                                             localId �  t  &             ;    �    =   T  =   : Q;   �   
T  : ���ݐ�ψ�8    debug3   GetManifestCSPByLocalId(     )-   DOMApplicationRegistry/   getManifestCSPByLocalId   ����      getCSPByLocalId�                 1       �                                             localId �  3  +             ;    �    =   T  =   : Q;   �   
T  : ���ݐ�ψ�7    debug1   GetDefaultCSPByLocalId(     )-   DOMApplicationRegistry-   getDefaultCSPByLocalId   ����   '   getAppByManifestURL�                 1       �                                             aManifestURL i  �  0             ;    �    =   T  =   : Q;   �   
T  : ���ݐ�ψ�9    debug+   GetAppByManifestURL(     )-   DOMApplicationRegistry'   getAppByManifestURL   ����      getManifestFor�                 _       �   
                                          aManifestURL (  F  5             ;    �    =   T  =   : QA5      ;   �   
T  :    #;   �   
;   =   	R : ���ݐ��ψɐ��̐ˈ�:���K    debug   getManifestFor(   )   inParent-   DOMApplicationRegistry   getManifestFor   Promise   reject   Errori   Calling getManifestFor() from child is not supported   ����   5   getAppLocalIdByManifestURL�                 1       �                                             aManifestURL �  +	  ?             ;    �    =   T  =   : Q;   �   
T  : ���ݐ�ψ�@    debug9   getAppLocalIdByManifestURL(     )-   DOMApplicationRegistry5   getAppLocalIdByManifestURL   ����   -   getAppLocalIdByStoreId�                 1       �                                             aStoreId g	  �	  D             ;    �    =   T  =   : Q;   �   
T  : ���ݐ�ψ�8    debug1   getAppLocalIdByStoreId(     )-   DOMApplicationRegistry-   getAppLocalIdByStoreId   ����      getAppByLocalId�                 1       �                                             aLocalId "
  �
  I             ;    �    =   T  =   : Q;   �   
T  : ���ݐ�ψ�1    debug#   getAppByLocalId(     )-   DOMApplicationRegistry   getAppByLocalId   ����   /   getManifestURLByLocalId�                 1       �                                             aLocalId �
  n  N             ;    �    =   T  =   : Q;   �   
T  : ���ݐ�ψ�9    debug3   getManifestURLByLocalId(     )-   DOMApplicationRegistry/   getManifestURLByLocalId   ����   '   getCoreAppsBasePath�                   $       �                                           �  	  S             ;    �    =   : Q;   �   
:  ���Ӑ�̈�-    debug+   getCoreAppsBasePath()-   DOMApplicationRegistry'   getCoreAppsBasePath   ����   %   getWebAppsBasePath�                   $       �                                           =  �  X             ;    �    =   : Q;   �   
:  ���Ӑ�̈�,    debug)   getWebAppsBasePath()-   DOMApplicationRegistry%   getWebAppsBasePath   ����      getAppInfo�                 '       �                                             aAppId �  #  ]             ;    �    =   : Q;   �   
T  : ���Ӑ�ψ�*    debug   getAppInfo()-   DOMApplicationRegistry   getAppInfo   ����      getRedirect�              �      �      |                        #            aLocalId	   aURI   app  I    b             ;    �    =   T  =   T 5   : QT  ;   5   5   D   QT  ;   5   5      @;   �   	
T  : �   QV   E   QV   5   
  X��  QT 5   �  Q>�  Q   m��  QV   5   
V  7�  QV  �   
V  5   :    ؎��  Q�  QV   5   V  5   �  Q���  QV  �   
=   : W  QV  ��   V  �   
=   : W  QV  ��   !V  V  �   
V  : W  Q;    �    =   V  =   V  : Q;   5   �   
V  @@: ����ș��V  #?W  QQ�V  V   5   
�   ������@����ِ����i�ψȐ�ː�
͐�&� � � 2�&��ӐԈјq�ؘt���
ЈȐ��ЈȘz��ӈ{�}�
㐈
׈˘l�0Έ����ܘ�  ���    debug!   getRedirect for     	   spec   Ci1   nsIScriptSecurityManager   NO_APP_ID   UNKNOWN_APP_ID-   DOMApplicationRegistry   getAppByLocalId   redirects   startsWith	   from   origin   to   indexOf   ?   #   substring=   App specific redirection from 	    to    Services   io   newURI   length    ����      	   spec                     i                    redirect                    to       index        �   2      �   R  ����   �   >         �           �   �         �           �            �        �����             p   8      �      ����