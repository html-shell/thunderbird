çżsš                     š   >   P      &                               resource:///modules/xmpp-session.jsm     hK                                f        Q;   5      Q5      Q5      QQ;   ¸   
=   	: Q;   ¸   
=   
: Q;   ¸   
=   : Q;   ¸   
=   : Q;   ¸   
A=      : Q;   ¸   
A=      : Q;   â   =      : Q;   Y   ;   Â×<]   X,]      ]   >]   >]      ]      a      a      	a      
a   @]    B]   !   ]   "   ]   #   ]   $   ]   %   ]   &   ]   '   ]   (   ]   )   ]   *   ]   +   ]   ,   ]   -   ]   .   ]   /   ]   0   ]   1Y      ]   2   ]   3   ]   4   ]   5   ]   6    ]   7   !]   8   "]   9   #]   :   $]   ;]   <   %]   =6   QĘ	Ëę5	Ő2Ő,Ő.Ő4ŰŰŘE;=Ę?ČĘGĘ[ĘĘĘĘ`dĘqĘvĘ  Ę  Ę  Ę   Ę  §Ę  ¸Ę  ÄĘ  ÔĘĘĘĘĘ  çĘ  ňĘ Ę Ę ZĘ zĘ Ę Ę Ę ţĘ Ď Đ !   EXPORTED_SYMBOLS   Cc   Ci   Cu   Components   classes   interfaces   utils   importI   resource:///modules/imXPCOMUtils.jsm=   resource:///modules/socket.jsmA   resource:///modules/xmpp-xml.jsmM   resource:///modules/xmpp-authmechs.jsm   XPCOMUtils!   defineLazyGetter   _!   _defaultResource!   __defineGetter__'   XMPPDefaultResource   XMPPSession   prototype   Socket   connectTimeout!   readWriteTimeout   sendPing!   _lastReceiveTime   _lastSendTime   checkPingTimer   DEBUG   LOG	   WARN   ERROR   _security   _encrypted   disconnect   onError	   send   sendStanza   execHandler   startStream   startSession   startLegacyAuth   onConnection   onDataReceived%   onConnectionClosed!   onBadCertificate#   onConnectionReset)   onConnectionTimedOut   _networkError   onXMLError   initStream   startTLS   startAuth   authDialog   authResult   startBind   bindResult   legacyAuth   sessionStarted!   accountListening   stanzaListeners   onXmppStanza                     XMPPSession   '   XMPPDefaultResource                  ˙˙˙˙    Ą                          š                                            B  y               ;    â    =   : Ó2    l10nHelperI   chrome://chat/locale/xmpp.properties   ˙˙˙˙    Ą                          š                                            ó  A               ;    â    =   : =   : ÜI    l10nHelperS   chrome://branding/locale/brand.properties   brandShortName   ˙˙˙˙    Ą                          š                                            u                 ;    3 !   _defaultResource   ˙˙˙˙      XMPPSession                Ě      š                               '             aHost   aPort   aSecurity	   aJID   aPassword   aAccount         r         	      AT  6    QAT 6   QAT 6   QA5   =      Af    6   Q   MA5   =      <AZ  T XgD   QT Xť   =      
=   `   6   QT 5       DT ¸   	
;   
5   5   ;   â   =   : : QT ¸   
:  QAT 6   QAT 5   6   QAT 6   QAT 6   QAT 5   D   Q;   6   QA;   R  6   QA5   ¸   
:  QA¸   
A5    A5   A5   : Q   o   Qv   Q;   ¸   
V   : QA5   ¸   	
;   
5   5   ;   â   =   : : QA5   ¸   
:  QČ    ĘĘĘĚŃĚÔ
Ţ"ÉŮĎ!#%Î(ĘĎĘĘ-ÚÉ0ŃăĚÔ7ÜĎ&79Ř    _host   _port'   _connectionSecurity   old_ssl   _security	   none   ssl   starttls	   node'   reportDisconnecting   Ci   prplIAccount-   ERROR_INVALID_USERNAME   _A   connection.error.invalidUsername%   reportDisconnected	   _jid   _domain   domain   _password   _account   _resource   resource'   XMPPDefaultResource   _handlers   Map!   reportConnecting   connect   Cu   reportError'   ERROR_NETWORK_ERRORM   connection.error.failedToCreateASocket                     ssl                   ˙˙˙˙          e         >  #      b  c   ˙˙˙˙   ˙˙˙˙   =   XMPPSession.prototype.sendPingÁ                   M       š                                            	  ź	  B             A¸    
;   ¸   
=   @@;   ¸   
=   ;   5   5   : : A5   A: QŰŕCECE6    sendStanza   Stanza   iq   get	   node	   ping   NS+   cancelDisconnectTimer   ˙˙˙˙      checkPingTimer                      š      +                                      %   aJustSentSomething   now ů	    I             T  H   
BU  QA5    A5   5      ;   ¸   
:     QT     AV   6   Q   AV   6   Q;   ¸   
A5   A5   : V   A5   	   A¸   

:  QĘKŇĚČĐQËVŘĚĚ    onXmppStanza   stanzaListeners!   accountListening	   Date   now   _lastSendTime!   _lastReceiveTime	   Math   min   kTimeBeforePing   resetPingTimer   ˙˙˙˙   7   XMPPSession.prototype.DEBUGá                          š                                            ˘  ¸  [             A5    5   Ě    _account   DEBUG   ˙˙˙˙   3   XMPPSession.prototype.LOGá                          š                                            Ă  ×  \             A5    5   Ě    _account   LOG   ˙˙˙˙   5   XMPPSession.prototype.WARNá                          š                                            ă  ř  ]             A5    5   Ě    _account	   WARN   ˙˙˙˙   7   XMPPSession.prototype.ERRORá                          š                                                ^             A5    5   Ě    _account   ERROR   ˙˙˙˙   A   XMPPSession.prototype.disconnectÁ                   u       š                                              Ş  d             A5    A5   5      A¸   
=   : QA%    Q;   5   ¸   
Al QA5      A5   ¸   	
:  QA%   QA¸   

:  QŇŃÖŃmĚ    onXmppStanza   stanzaListeners!   accountListening	   send!   </stream:stream>   Socket   disconnect	   call   _parser   destroy+   cancelDisconnectTimer   ˙˙˙˙   ;   XMPPSession.prototype.onErrorÁ                        š                                              aError   aException  ĺ  .  q             A5    ¸   
T  T : Q×*    _account   onError   ˙˙˙˙   5   XMPPSession.prototype.sendÁ                        š                                           	   aMsg k    v             A¸    
T  : QĎ    sendString   ˙˙˙˙   A   XMPPSession.prototype.sendStanzaÁ                 Ś       š      1                                        aStanza   aCallback   aThis   â  /               T  5    ¸   
=   :     #T  5    A5   ¸   
:  6   QT    3A5   ¸   
T  5    5   T ¸   
T : : QA¸   
T  ¸   	
:  : QA¸   

C: QT  5    5   ÔŐÉç*˙˙˙ÖŇ
˙˙˙öÍÎ    attributes   hasOwnProperty   id   _account   generateId   _handlers   set	   bind	   send   getXML   checkPingTimer   ˙˙˙˙   C   XMPPSession.prototype.execHandlerÁ               c       š      &                                        aId   aStanza   handler   isHandled    Ź               A5    ¸   
T  :    QV       BV   T :   QV  ;   H   CW  QA5    ¸   
T  : QV  Đ
ČČČĘÔ    _handlers   get   undefined   delete   ˙˙˙˙   C   XMPPSession.prototype.startStreamÁ                   L       š                                 	           ä  ü               A5       A5    ¸   
:  QA;   AR 6    QA¸   
=   A5   =   : QŃČÉÔ  h    _parser   destroy   XMPPParser	   sendQ   <?xml version="1.0"?><stream:stream to="   _domain­   " xmlns="jabber:client" xmlns:stream="http://etherx.jabber.org/streams" version="1.0">   ˙˙˙˙   E   XMPPSession.prototype.startSessionÁ                   X       š   
                                           Ř                A¸    
;   ¸   
=   @@;   ¸   
=   ;   5   5   : : : QAA5   5   	6   QŰŕ  Ą˙˙˙đŇ8    sendStanza   Stanza   iq   set	   node   session   NS   onXmppStanza   stanzaListeners   sessionStarted   ˙˙˙˙   K   XMPPSession.prototype.startLegacyAuthÁ                 Ő       š      H                                         s   K  §             A5     E   QA5   =      4A¸   
;   5   5   ;   â   =   : : QAA5   
5   6   	Q;   ¸   
=   @A5   ;   ¸   
=   ;   5   5   @;   ¸   
=   @@A5   5   : : :    QA¸   
V   : QŮ×Ď  ŠŇŘáÓË  ą"  °  ŻČĐ    _encrypted'   _connectionSecurity   require_tls   onError   Ci   prplIAccount-   ERROR_ENCRYPTION_ERROR   _K   connection.error.startTLSNotSupported   onXmppStanza   stanzaListeners   legacyAuth   Stanza   iq   get   _domain	   node   query   NS	   auth   username	   _jid   sendStanza   ˙˙˙˙   E   XMPPSession.prototype.onConnectionÁ                   ~       š      &                                      ˘  Ű  ¸             A5    ¸   
=   : ×˙   $AA5   5   6   QAC6   Q   AA5   5   6   QA5   ¸   	
;   
â   
=   : : QA¸   
:  QŇŇÍŇÜ˙˙˙áĚ    _security   indexOf   ssl   onXmppStanza   stanzaListeners   startAuth   _encrypted   initStream   _account!   reportConnecting   _;   connection.initializingStream   startStream   ˙˙˙˙   I   XMPPSession.prototype.onDataReceivedÁ              ť       š      3                                     aData   istream -  č  Ä       
      A¸    
:  Q;   5   ¸   
;   5   :    QV   ¸   
T  T  Ů   : QAT  6   QA5   	¸   

V   >T  Ů   : Q   A  Qv  Q;   ¸   
V  : QA¸   
=   V  : QČ    A%   QĚŃĘ  ĆČÚĘăĚÔÜ    checkPingTimer   CcK   @mozilla.org/io/string-input-stream;1   createInstance   Ci)   nsIStringInputStream   setData   length#   _lastReceivedData   _parser   onDataAvailable   Cu   reportError   onXMLError!   parser-exception    ˙˙˙˙         e         T   #       x   5   ˙˙˙˙   ˙˙˙˙   Q   XMPPSession.prototype.onConnectionClosedÁ                          š                                            H    Ô             A¸    
;   â   =   : : Q×˙˙˙íA    _networkError   _O   connection.error.serverClosedConnection   ˙˙˙˙   M   XMPPSession.prototype.onBadCertificateÁ               -       š                                              aIsSslError!   aNSSErrorMessage   error  ´  K  ×             A5    ¸   
AT  :    QA¸   
V   T : QŃČÓ&    _account)   handleBadCertificate   onError   ˙˙˙˙   O   XMPPSession.prototype.onConnectionResetÁ                          š                                            j  ­  Ű             A¸    
;   â   =   : : Q×˙˙˙í6    _networkError   _9   connection.error.resetByPeer   ˙˙˙˙   U   XMPPSession.prototype.onConnectionTimedOutÁ                          š                                            Ď    Ţ             A¸    
;   â   =   : : Q×˙˙˙í3    _networkError   _3   connection.error.timedOut   ˙˙˙˙   G   XMPPSession.prototype._networkErrorÁ                        š                                              aMessage *  {  á             A¸    
;   5   5   T  : QŢ<    onError   Ci   prplIAccount'   ERROR_NETWORK_ERROR   ˙˙˙˙   A   XMPPSession.prototype.onXMLErrorÁ                        š   
                              
             aError   aException  Ç  :   ç             T  =       0A¸   
T  =   T =   A5   : Q   +A¸   
T  =   T =   A5   : QT  =   E   QT  =       #A¸   
;   â   =   	: : QÉ+ëćŘ×˙˙˙íA %   parsing-characters	   WARN   :    
#   _lastReceivedData   ERROR   parse-warning   _networkError   _O   connection.error.receivedUnexpectedData   ˙˙˙˙   a   XMPPSession.prototype.stanzaListeners.initStreamÁ               ş      š   "                             2             aStanza   starttls đ   Š%  ó       
      T  5    =      EA¸   
=   T  5    =   : QA¸   
;   â   =   : : QT  ¸   
f    :    QV   E   QA5   	¸   

=   : ×˙   kA5   ¸   
;   â   =   : : QA¸   
;   ¸   
=   ;   5   5   : : QAA5   5   6   QV   E   QV   5   ¸   
   :    4A¸   
;   5   5   ;   â   =   : : QV    E   QA5   =      4A¸   
;   5   5   ;   â   =    : : QAA5   5   !6   QA¸   
T  : QÎŕ×˙˙˙í
ĎČÜÜ˙˙˙áč˙˙˙đŇĘŐ
×Ď 
××Ď ŇĎ    localName   features   ERROR%   Unexpected stanza +   , expected 'features'   _networkError   _E   connection.error.incorrectResponse   getElement   _security   indexOf   starttls   _account!   reportConnectingC   connection.initializingEncryption   sendStanza   Stanza	   node   NS   tls   onXmppStanza   stanzaListeners   startTLS   children	   some   onError   Ci   prplIAccount-   ERROR_ENCRYPTION_ERRORC   connection.error.startTLSRequired'   _connectionSecurity   require_tlsK   connection.error.startTLSNotSupported   startAuth                     starttls                  ˙˙˙˙   e   XMPPSession.prototype.stanzaListeners.initStream/<á                        š                                              c |#  #              T  5    =   .Ď    localName   required   ˙˙˙˙   ]   XMPPSession.prototype.stanzaListeners.startTLSÁ                 f       š      &                                        aStanza Á%  ä&              T  5    =      %A¸   
;   â   =   : : QA¸   
:  QAC6   QA¸   
:  QAA5   	5   
6   QÎ×˙˙˙íĚČĚŇ3    localName   proceed   _networkError   _C   connection.error.failedToStartTLS   startTLS   _encrypted   startStream   onXmppStanza   stanzaListeners   startAuth   ˙˙˙˙   _   XMPPSession.prototype.stanzaListeners.startAuthÁ              Ő      š   +   ć                        ?             aStanza   mechs   authMechanisms   selectedMech   canUsePlain   authMec ý&  ´0              T  5    =      EA¸   
=   T  5    =   : QA¸   
;   â   =   : : QT  ¸   
f    :    QV       ~  QT  ¸   
f   :   QV  E   QV  5   	;   
5   5      A¸   
:  Q   #A¸   
;   â   =   : : QČČA5   5   D   Q;     Q=     QB  QV   ¸   
=   : W   QV   K  Q   lmW    QV  5     QV  =   E   QA5       CW  Q   +V  ¸   
V  :    V  W  QČ   ČăQLM˙˙˙QNČV   E   
QV     TA5   =      =   W  Q   4A¸   
;   5   5   ;   â   =   : : QV      4A¸   
;   5   5   ;   â   =    : : QV  V  7A5   !5   "A5   #A5   $R   QA@6   #QA5   ¸   %
;   â   =   &: : QAA5   (5   )¸   *
AV  : 6   'QA¸   '
@: QÎŕ×˙˙˙í
ĎČ
ËĎČă
Ń
×˙˙˙í 1
Ű
Ę
ĐČÍ0qĐÎĐ <
ËĎ
ÉIÓ
ĎĚ
Ď
×Ď G


×Ď M
Ő QČČÜ˙˙˙áŘÉÍ    localName   features   ERROR%   Unexpected stanza +   , expected 'features'   _networkError   _E   connection.error.incorrectResponse   getElement   uri   Stanza   NS   auth_feature   startLegacyAuth5   connection.error.noAuthMec   _account   authMechanisms%   XMPPAuthMechanisms      getChildren   mechanism   innerText   PLAIN   _encrypted   hasOwnProperty'   _connectionSecurity9   allow_unencrypted_plain_auth   onError   Ci   prplIAccount?   ERROR_AUTHENTICATION_IMPOSSIBLEU   connection.error.notSendingPasswordInClearI   connection.error.noCompatibleAuthMec	   _jid	   node   _password   _domain!   reportConnecting3   connection.authenticating   onXmppStanza   stanzaListeners   authDialog	   bind                     mechanisms                   ˙˙˙˙      	   auth                      	   auth                   ˙˙˙˙         m                 	   mech       B  r      u   x   ˙˙˙˙˙˙˙˙ë             8  ~   ˙˙˙˙   H  a         Ł           ˙˙˙˙   a   XMPPSession.prototype.stanzaListeners.authDialogÁ                    š      u                        #             aAuthMec   aStanza   result  Î0  ę4  Z      	      T E   QT 5    =      m  Q=     QT ¸   
f   :    =   W  QA¸   
;   5   5   ;   	â   	=   
V  : : QČČT E   QT 5    =      !A5   5   ¸   
AT l Q   QT  ¸   
T : W   Q   Y  Qv  QA¸   
V  : QA¸   
;   5   5   ;   	â   	=   : : QČČ    V   5      $A¸   
V   5   ¸   
:  : QV   5      AA5   5   6   Q×ËĘĎ
Ę×Ô _ f×Ú
Í	ÍĚĐ×Ď pËÉŘ
˙˙˙öÉŇ4    localName   failure+   authenticationFailure   getElement   notAuthorized   onError   Ci   prplIAccount7   ERROR_AUTHENTICATION_FAILED   _#   connection.error.   success   stanzaListeners   authResult	   call	   next   ERRORM   connection.error.authenticationFailure	   send   getXML	   done   onXmppStanza    ˙˙˙˙         errorMsg                         not-authorized                   ˙˙˙˙         e         Ă             g   ˙˙˙˙˙˙˙˙             Ţ   M   ˙˙˙˙˙˙˙˙)           ˙˙˙˙   a   XMPPSession.prototype.stanzaListeners.authResultÁ                 a       š      #                                        aStanza 5  +6  z            T  5    =      4A¸   
;   5   5   ;   â   =   : : QA¸   
:  QAA5   
5   6   	QÎ×Ď |ĚŇ3    localName   success   onError   Ci   prplIAccount7   ERROR_AUTHENTICATION_FAILED   _=   connection.error.notAuthorized   startStream   onXmppStanza   stanzaListeners   startBind   ˙˙˙˙   _   XMPPSession.prototype.stanzaListeners.startBindÁ                 á       š      S                                       aStanza D6  ´8              T  ¸    
f    :     6A¸   
=   : QA¸   
;   â   =   : : QA5   ¸   
;   â   =   : : QA¸   	
;   
¸   
=   @@;   
¸   
=   ;   
5   5   @;   
¸   
=   @@A5   : : : : QAA5   5   6   Q
ĎŃ×˙˙˙íÜ˙˙˙áŰáÓ ,   ˙˙˙đŇ4    getElement   ERRORG   Unexpected lack of the bind feature   _networkError   _E   connection.error.incorrectResponse   _account!   reportConnecting5   connection.gettingResource   sendStanza   Stanza   iq   set	   node	   bind   NS   resource   _resource   onXmppStanza   stanzaListeners   bindResult                  	   bind                  ˙˙˙˙   a   XMPPSession.prototype.stanzaListeners.bindResultÁ                      š      0                                       aStanza   jid Î8  :              T  ¸    
f    :    QV       %A¸   
;   â   =   : : QV   5   W   QA¸   
=   V   : QAA5   ¸   	
V   : 6   QA¸   

:  Q
ĎČ
×˙˙˙íÎÖŇÉĚ    getElement   _networkError   _K   connection.error.failedToGetAResource   innerText   DEBUG   jid = 	   _jid   _account   _parseJID   startSession                  	   bind      jid                  ˙˙˙˙   a   XMPPSession.prototype.stanzaListeners.legacyAuthÁ                    š   =                          {             aStanza   query   values   children   s (:  H              T  5    5   =      ř  Q  QT  ¸   
f   :   QV      'A¸   
;   â   =   : : QČ;   â   V  5    5   ×
:   QV  X   ;A¸   	
;   
5   5   ;   â   =   : : QČ   CV  X   6A¸   	
;   
5   5   ;   â   =   : : QČČT  5    5   =      %A¸   
;   â   =   : : QT  5   Ů   >   A@6   QA¸   
:  QT  ¸   
f   :    QY     QV   5   K  Q   "mW  V  V  5   V  5   8QăQLM˙˙˙ŢQNČ=   V  q D   Q=   V  q    %A¸   
;   â   =   : : QZ  ;   ¸   
=   @@A5   5   : `   ;   ¸   
=   @@A5   : `    Q=   V  qE   QA5       
Q  	Q  Q  Q  Q  Q  QA5   A5     Q;   5   ¸    
;   
5   !:   QV  ¸   "
V  5   #: Q;   5   $¸    
;   
5   %:   QV  =   '6   &QV  ¸   (
V  :   QV  ¸   )
V  V  Ů   : QV  ¸   *
B:   Q     	QY     Q  QV  K   -mW  V  	V  ¸   +
  V  : : ,  ÎăQLM˙˙˙ÓQNČ¸   ,
=   -:   
QV  ¸   .
;   ¸   
=   @@V  
: : QČ   Ŕ=   /V  q   A5   0 E   QA5   1=   2   4A¸   	
;   
5   5   3;   â   =   4: : QV  ¸   .
;   ¸   
=   /@@A5   : : Q   4A¸   	
;   
5   5   3;   â   =   5: : Q;   ¸   6
=   7@A5   8;   ¸   
=   9;   5   :5   ;@V  : :   QA¸   <
V  : QÓŃĎČ
×˙˙˙í
ÚČČ6
×Ď ¨

ÉČ
×Ď Ž

 źÓ×˙˙˙íĎČĚ
ĎČ
ĘŇ0'Ęĺ
ŃË×˙˙˙í
ĺĺÖ ďŇŰ
ČŘŃĘ ßČĎĎČÜĚČĘË/Í02â˙˙˙ç˙˙˙ôá˙˙˙˙Čâ˙˙˙ňĘĘ}ÍĚ
×Ď î

ä˙˙˙ňÉ×Ď ő
Řĺ úČĐ    attributes	   type   error   getElement   _networkError   _E   connection.error.incorrectResponse   parseInt	   code   onError   Ci   prplIAccount7   ERROR_AUTHENTICATION_FAILED=   connection.error.notAuthorizedM   connection.error.authenticationFailure   result   children   length   _password   startSession   qName   innerText   username   resource   Stanza	   node	   _jid   _resource   digest   _streamId   Cc9   @mozilla.org/security/hash;1   createInstance   nsICryptoHash	   init	   SHA1Y   @mozilla.org/intl/scriptableunicodeconverter;   nsIScriptableUnicodeConverter   charset   UTF-8%   convertToByteArray   update   finish   charCodeAt	   join   	   push   password   _encrypted'   _connectionSecurity9   allow_unencrypted_plain_auth?   ERROR_AUTHENTICATION_IMPOSSIBLEU   connection.error.notSendingPasswordInClearI   connection.error.noCompatibleAuthMec   iq   set   _domain   query   NS	   auth   sendStanza    ˙˙˙˙         error    	   code                         error                                    query                   ˙˙˙˙         c        ˙˙˙˙         hashBase       ch       converter    	   data    	   hash       toHexString       digest             y   XMPPSession.prototype.stanzaListeners.legacyAuth/toHexStringá                 #       š                                              charCode ŕD  E  ć            =    T  ¸   
×: ¸   
×ţ: ŃÍ˙˙˙ú&    0   toString   slice                i         3      Ľ  (          ń   ˙˙˙˙˙˙˙˙f          ˙˙˙˙Ć          ˙˙˙˙	              4   ˙˙˙˙       ˙˙˙˙   y  L         ˙˙˙˙   i   XMPPSession.prototype.stanzaListeners.sessionStartedÁ                 0       š                                              aStanza ŽH  AI  ţ            A¸    
:  QA5   ¸   
:  QAA5   5   6   QĚŃŇ:    resetPingTimer   _account   onConnection   onXmppStanza   stanzaListeners!   accountListening   ˙˙˙˙   m   XMPPSession.prototype.stanzaListeners.accountListeningÁ               Ę       š      /                                        aStanza   id	   name aI  K              T  5    5      QV   E   QA¸   
V   T  :    A5   ¸   
T  : QT  5     QV  =      A5   ¸   
T  : Q   PV  =      A5   ¸   	
T  : Q   (V  =   
   A5   ¸   
T  : Q
ŇŮÔ
ÍĘŮĘŮĘÔ"    attributes   id   execHandler   _account   onXmppStanza   qName   presence!   onPresenceStanza   message   onMessageStanza   iq   onIQStanza   ˙˙˙˙   E   XMPPSession.prototype.onXmppStanzaÁ                        š                                              aStanza *K  dK              A¸    
=   : QŃ&    ERROR-   should not be reached
