�s�                o     �   #   �                                      resource://gre/modules/RemoteFinder.jsm     �                �   �   �         Af    6    Q;   5      Q;   5      Q;   5      Q;   �   
=   	: Q;   
�   
A=   A�   : Q;   Y   �   ]   �   ]   �   ]   �   a   �   a   �   ]   �   	b   �   
]   �   ]   �   ]   �   ]   �   ]   �   ]   �   ]   �   ]   �   ]   6   Q;   Y   f   ]    �   ]   !�   ]   "�   ]   6   Q��	�����ʘ�	��  ��	��̈A�	�Ј��Ј��Ј�Ո3�ܘ�����ʐ�ʘ$�ʘ(�ʘA�ʘE�ʘI�ʘM�ʘR�ʘV�ʘ\�ʘb�ʘh�ʘl�ʘp�ʘ�ʘ�  ��И�  ������  ����ʐ�ʘ�  ��ʘ�  ��ʐ����И�  � !   EXPORTED_SYMBOLS   Ci   Components   interfaces   Cc   classes   Cu   utils   importK   resource://gre/modules/XPCOMUtils.jsm   XPCOMUtils!   defineLazyGetter1   GetClipboardSearchString   RemoteFinder   prototype#   addResultListener)   removeResultListener   receiveMessage   searchString+   clipboardSearchString5   setSearchStringToSelection   caseSensitive'   getInitialSelection   fastFind   findAgain   highlight   enableSelection   removeSelection   focusContent   keyPress'   requestMatchesCount)   RemoteFinderListener   MESSAGES   onFindResult)   onMatchesCountResult                     RemoteFinder   )   RemoteFinderListener                  ����    �                           �                                            @  �               ;    �   
=   Y   : 5   ���߈K    Cu   importC   resource://gre/modules/Finder.jsm1   GetClipboardSearchString   ����      RemoteFinder               �       �      &                                        browser   mm �                 AT  6    QA;   R  6   QA@6   QA5    5   �   QV   �   
=   A: QV   �   
=   A: QV   �   
=   A: QV   �   	
=   
: Q���ʐ��ɐ�Ș�А�Ր�Ր�Ր�Ԉ)    _browser   _listeners   Set   _searchString   messageManager%   addMessageListener   Finder:Result)   Finder:MatchesResult;   Finder:CurrentSelectionResult!   sendAsyncMessage#   Finder:Initialize   ����   Q   RemoteFinder.prototype.addResultListener�                        �                                              aListener F  {                A5    �   
T  : Q���Ԉ    _listeners   add   ����   W   RemoteFinder.prototype.removeResultListener�                        �                                              aListener �  �  $             A5    �   
T  : Q���Ԉ"    _listeners   delete   ����   K   RemoteFinder.prototype.receiveMessage�              .      �      c                                     aMessage   callback   params �  �  (       
      �   Q�  QT  5    x=   y   =   y   L=   y   fz   �AT  5   5   6   Q=   W   QZ  T  5   `   W  Q   c=   W   QZ  T  5   `   W  Q   ?=   	W   QZ  T  5   5   
`   T  5   5   `  W  Q   A5   - �
:  �  Q   -m5   W  QV  V   7�   
V  V  O Q�Q�   
:  5   ����� ��*�����h�  ��u
�2u
�6uʘ-��Ԑ�ʐ��ѐX���ʐ��ѐX���ʐ��ш֐X�<�8Aѐ�ܘ<�ˈ����Ґ�# 	   name   Finder:Result)   Finder:MatchesResult;   Finder:CurrentSelectionResult   _searchString	   data   searchString   onFindResult)   onMatchesCountResult%   onCurrentSelection   selection   initial   _listeners   value   apply	   next	   done    ����         l       �   A       �   L   ����   ����   G   RemoteFinder.prototype.searchString�                          �                                            �  �  A             A5    ����    _searchString   ����   Y   RemoteFinder.prototype.clipboardSearchString�                          �      	                                      	  Q  E             ;    �    A5   5   : ���Ո�4 1   GetClipboardSearchString   _browser   loadContext   ����   5   setSearchStringToSelection                   !       �                                            p  �  I             A5    5   �   
=   Y   : Q�����W    _browser   messageManager!   sendAsyncMessageC   Finder:SetSearchStringToSelection   ����   I   RemoteFinder.prototype.caseSensitive�                 )       �                                              aSensitive �  �	  M             A5    5   �   
=   Y   T  ]   : Q���א�4ȘN���Q    _browser   messageManager!   sendAsyncMessage)   Finder:CaseSensitive   caseSensitive   ����   U   RemoteFinder.prototype.getInitialSelection�                   !       �                                            �	  
  R             A5    5   �   
=   Y   : Q�����P    _browser   messageManager!   sendAsyncMessage5   Finder:GetInitialSelection   ����   ?   RemoteFinder.prototype.fastFind�                 1       �                                              aSearchString   aLinksOnly  /
  4  V             A5    5   �   
=   Y   T  ]   T ]   : Q���א�4Ȑ�4ȘW��Y�M    _browser   messageManager!   sendAsyncMessage   Finder:FastFind   searchString   linksOnly   ����   A   RemoteFinder.prototype.findAgain�                 1       �                                              aFindBackwards   aLinksOnly  M  V  \             A5    5   �   
=   Y   T  ]   T ]   : Q���א�4Ȑ�4Ș]��_�M    _browser   messageManager!   sendAsyncMessage!   Finder:FindAgain   findBackwards   linksOnly   ����   A   RemoteFinder.prototype.highlight�                 1       �                                              aHighlight   aWord  o  ]  b             A5    5   �   
=   Y   T  ]   T ]   : Q���א�4Ȑ�4Șc��e�C    _browser   messageManager!   sendAsyncMessage!   Finder:Highlight   highlight	   word   ����   M   RemoteFinder.prototype.enableSelection�                          �                                            |  �  h             A5    5   �   
=   : Q���ۈH    _browser   messageManager!   sendAsyncMessage-   Finder:EnableSelection   ����   M   RemoteFinder.prototype.removeSelection�                          �                                            �  E  l             A5    5   �   
=   : Q���ۈH    _browser   messageManager!   sendAsyncMessage-   Finder:RemoveSelection   ����   G   RemoteFinder.prototype.focusContent�                  �       �      /                                   a  �  p       	      A5    - �
:  �   Q   im5   W   Q�=   V   qE   QV   �   
:      �� �   ,��  Qv�  Q;   �   
V  : Q�    �Q�   
:  5   ����� A5   5   �   	
=   
: Q��r�8}ѐ�,�А�ˈ��
̐̐�ۘr�ˈ����Ҙ|�ۈE    _listeners   value%   shouldFocusContent   Cu   reportError	   next	   done   _browser   messageManager!   sendAsyncMessage'   Finder:FocusContent    ����          l                     ex          }       '   0          �   ��������N             X              ����   ?   RemoteFinder.prototype.keyPress�                 ;       �                                              aEvent �  �               A5    5   �   
=   Y   T  5   ]   T  5   ]   : Q���א�4͐�4͘�  �����Q    _browser   messageManager!   sendAsyncMessage   Finder:KeyPress   keyCode   shiftKey   ����   U   RemoteFinder.prototype.requestMatchesCount�                 9       �                                              aSearchString   aMatchLimit   aLinksOnly   �  R  �             A5    5   �   
=   Y   T  ]   T ]   T ]   : Q���א�4Ȑ�4Ȑ�4Ș�  ������M    _browser   messageManager!   sendAsyncMessage'   Finder:MatchesCount   searchString   matchLimit   linksOnly   ����   )   RemoteFinderListener              �       �      2                                     global   Finder s  �  �       	      ;    �   
=   Y   : 5   �   QQAV   T  5   R 6   QA5   �   
A: QAT  6   QA5   - �
:  �  Q   $m5   	W  QT  �   

V  A: Q�Q�   
:  5   ����� ���ֈϐ�Έɐ�Ґ�ʐ��88ѐ�Ә�  ��ˈ����Ґ�)    Cu   importC   resource://gre/modules/Finder.jsm   Finder   _finder   docShell#   addResultListener   _global   MESSAGES   value%   addMessageListener	   next	   done    ����         msg       r   8       h   C   ����                  )   Finder:CaseSensitive      Finder:FastFind   !   Finder:FindAgain   C   Finder:SetSearchStringToSelection   5   Finder:GetInitialSelection   !   Finder:Highlight   -   Finder:EnableSelection   -   Finder:RemoveSelection   '   Finder:FocusContent      Finder:KeyPress   '   Finder:MatchesCount                  ����   W   RemoteFinderListener.prototype.onFindResult�                        �                                              aData   U  �             A5    �   
=   T  : Q���و6    _global!   sendAsyncMessage   Finder:Result   ����   g   RemoteFinderListener.prototype.onMatchesCountResult�                        �                                              aData �  >  �             A5    �   
=   T  : Q���و=    _global!   sendAsyncMessage)   Finder:MatchesResult   ����   [   RemoteFinderListener.prototype.receiveMessage�              !      �   !   �                         .             aMessage	   data \  �  �       
      T  5    �   QT  5   x=   y   d=   y   t=   y   �=   y   �=   y  =   y  4=   y  R=   	y  ^=   
y  j=   y  zz  �A5   V   5   6   Q  ���  QA5   �   
:  �  QA5   �   
=   Y   V  ]   B]   : Q�  AȎ�  QA5   �   
:  �  QA5   �   
=   Y   V  ]   C]   : Q�   ��A5   �   
V   5   V   5   : Q   �A5   �   
V   5   V   5   : Q   �A5   �   
V   5   V   5   : Q   |A5   �   
:  Q   fA5   �   
:  Q   PA5   �   
V   : Q   6A5   �   
V   5   V   5    V   5   : Q   ���͐��h� �u
����u
��  �u
��  �u
����u
����u
����u
����u
����u
����uʘ�  ���ՐX����͈Ȑ�Ґ�(ɐ�(��  �����Y�����͈Ȑ�Ґ�(ɐ�(��  È���Y������X�����X�����X����ѐX����ѐX����ՐX�����X�� 	   data	   name)   Finder:CaseSensitiveC   Finder:SetSearchStringToSelection5   Finder:GetInitialSelection   Finder:FastFind!   Finder:FindAgain!   Finder:Highlight-   Finder:RemoveSelection'   Finder:FocusContent   Finder:KeyPress'   Finder:MatchesCount   _finder   caseSensitive5   setSearchStringToSelection   _global!   sendAsyncMessage;   Finder:CurrentSelectionResult   selection   initial-   getActiveSelectionText   fastFind   searchString   linksOnly   findAgain   findBackwards   highlight	   word   removeSelection   focusContent   keyPress'   requestMatchesCount   matchLimit    ����         selection        ����         selection        �   K   ���������             �   K   ��������+        