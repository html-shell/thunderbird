�s�                �     �   <   h      #                           0     resource://gre/modules/Keyboard.jsm     �7                �   �   �   �      Af    0    Q;   5      Q;   5      Q;   5      Q;   �   
=   	: Q;   �   
=   
: Q;   �   
A=   =   =   : Q;   �   
A=   =   : Q;   �   
A=   �   : Qn   Y   �   ]   �   ]   1   QAY   @]   @]   ��]   >]   f   ]   f   ]   �   a   �   b   �   ]    �   	]   !�   
]   "�   ]   #�   ]   $�   ]   %�   ]   &�   ]   '�   ]   (�   ]   )�   ]   *�   ]   +�   ]   ,�   ]   -�   ]   .�   ]   /�   ]   0�   ]   1�   ]   2�   ]   3�   ]   4@]   5�   ]   60   Q;   75   8�   0   %Q;   75   8�    0   9Q;   75   8�   !0   :Q;   75   8�   "0   ;QA5   �   "
:  Q��	�������ʘ� ��	����̈%�	�Ј��Ј��Ј�Ո1�Ո3�Ґʘ��I�Ґ���O�ۘ���ʐ�ʘ&�И�	�4����������ʘ=�ʘF�ʘM�ʘQ�ʘW�ʘ]�ʘm�ʘ�  ��ʘ�  ��ʘ� �ʘ� '�ʘ� :�ʐ����ʐ����ʐ����ʐ����ʐ����ʐ����ʘ� X�ʘ� ^�ʐ����ʐ����ʘ� n�ʐ����ʘ� y���И� ������ �����՘� ����՘� ����՘� È��՘� ۈ��ш !   EXPORTED_SYMBOLS   Cu   Components   utils   Cc   classes   Ci   interfaces   importG   resource://gre/modules/Services.jsmK   resource://gre/modules/XPCOMUtils.jsm   XPCOMUtils/   defineLazyServiceGetter	   ppmmU   @mozilla.org/parentprocessmessagemanager;1+   nsIMessageBroadcaster-   defineLazyModuleGetter   SystemAppProxyS   resource://gre/modules/SystemAppProxy.jsm!   defineLazyGetter   appsService   Utils!   getMMFromMessage)   checkPermissionForMM   Keyboard   _formMM   _keyboardMM   _keyboardID   _nextKeyboardID%   _systemMessageName   _messageNames   formMM   sendToForm   sendToKeyboard	   init   observe)   initFormsFrameScript   receiveMessage   forwardEvent#   handleFocusChange#   setSelectedOption%   setSelectedOptions#   setSelectionRange   setValue   removeFocus-   replaceSurroundingText+   showInputMethodPicker/   switchToNextInputMethod   getText   sendKey   getContext   setComposition   endComposition   _layouts   setLayouts#   InputRegistryGlue   prototype   addInput   removeInput   returnMessage                     Keyboard                  ����    �                           �      	                                     
  Y               ;    5   �   
;   5   : ���ۈ�?    Cc5   @mozilla.org/AppsService;1   getService   Ci   nsIAppsService   ����   %   u_getMMFromMessage�              ]       �                                          msg   mm �  h               �   Q�T  5    �   
;   5   : 5   5   W   Q   %��  Qv�  QT  5    W   Q�    V   �����,��وט ̐�Ԙ$��
    target   QueryInterface   Ci'   nsIFrameLoaderOwner   frameLoader   messageManager    ����         e            0       8      ����   ����   -   u_checkPermissionForMM�              Z       �                                          mm   permName   testing  �  �  &             B�   Q�;    5   �   
=   : W   Q   ��  Qv�  Q�    V      CT  �   
T : �������ֈ
͐Ә,���0�͈�    Services   prefs   getBoolPref5   dom.mozInputMethod.testing!   assertPermission    ����         e            #       +      ����                     SetValue      RemoveFocus   #   SetSelectedOption   %   SetSelectedOptions                                    RemoveFocus   #   SetSelectionRange   -   ReplaceSurroundingText   +   ShowInputMethodPicker   /   SwitchToNextInputMethod      HideInputMethod      GetText      SendKey      GetContext      SetComposition      EndComposition      Register      Unregister                  ����   )   this.Keyboard.formMM�                   1       �                                             �  F             A5    E   Q;   �   
A5    :     A5    @��̈҈���J��    _formMM   Cu   isDeadWrapper   ����   )   this.Keyboard.formMM�                        �                                              mm �  �  M             AT  0    Q���ʈ    _formMM   ����   1   this.Keyboard.sendToForm�                1       �                                       	   name	   data  �  3	  Q             �A5    �   
T  T : Q   ��   Qv�   Q�    �����ܐӈ    formMM!   sendAsyncMessage    ����          e                         ����   ����   9   this.Keyboard.sendToKeyboard�                1       �                                       	   name	   data  P	  �	  W             �A5    �   
T  T : Q   ��   Qv�   Q�    �����ܐӈ    _keyboardMM!   sendAsyncMessage    ����          e                         ����   ����      keyboardInit�                  !      �      @                        "          �	  �  ]             ;    5   �   
A=   B: Q;    5   �   
A=   B: Q;    5   �   
A=   B: QA5   - �
:  �   Q   ,m5   W   Q;   �   	
=   
V   A: Q�Q�   
:  5   ����� A5   - �
:  �   Q   ,m5   W   Q;   �   	
=   V   A: Q�Q�   
:  5   ����� A;   R  0   Q���ܐ�ܐ�ܘb�8@ѐ�ۘb�ˈ����Ҙf�8@ѐ�ۘf�ˈ����Ҙj��Ɉ    Services   obs   addObserver/   inprocess-browser-shown)   remote-browser-shown/   oop-frameloader-crashed   _messageNames   value	   ppmm%   addMessageListener   Keyboard:	   next	   done%   _systemMessageName   System:#   inputRegistryGlue#   InputRegistryGlue    ����       	   name        ����       	   name       �   @      n   @       d   K   ����   �   K   ����   ����      keyboardObserve�               �       �      4                                       subject   topic	   data   frameLoader   mm   �  F  m             T  �    
;   5   : �   QV   5   �  QT =      :A5   V     %A�   
=   Y   =   ]   	: Q   &V   5   
    A�   
V  : Q���ԈȐ�Θq�5���u�҈.ʈ����ɘw�y�
����|�Ј    QueryInterface   Ci   nsIFrameLoader   messageManager/   oop-frameloader-crashed   formMM   sendToKeyboard)   Keyboard:FocusChange	   blur	   type1   ownerIsBrowserOrAppFrame)   initFormsFrameScript   ����   E   this.Keyboard.initFormsFrameScript�                       �      ;                                       mm i  �  �             T  �    
=   A: QT  �    
=   A: QT  �    
=   A: QT  �    
=   A: QT  �    
=   A: QT  �    
=   A: QT  �    
=   A: QT  �    
=   A: QT  �    
=   	A: QT  �    
=   
A: QT  �    
=   A: QT  �    
=   A: QT  �    
=   A: QT  �    
=   A: Q���Ԑ�Ԑ�Ԑ�Ԑ�Ԑ�Ԑ�Ԑ�Ԑ�Ԑ�Ԑ�Ԑ�Ԑ�Ԑ�Ԉ> %   addMessageListener   Forms:Input+   Forms:SelectionChange/   Forms:GetText:Result:OK5   Forms:GetText:Result:ErrorC   Forms:SetSelectionRange:Result:OKI   Forms:SetSelectionRange:Result:ErrorM   Forms:ReplaceSurroundingText:Result:OKS   Forms:ReplaceSurroundingText:Result:Error/   Forms:SendKey:Result:OK5   Forms:SendKey:Result:Error'   Forms:SequenceError5   Forms:GetContext:Result:OK=   Forms:SetComposition:Result:OK=   Forms:EndComposition:Result:OK   ����   -   keyboardReceiveMessage�              �      �   B   �                       E            msg   mm-   isKeyboardRegistration	   kbID ,  �!  �             �   QT  5    =   D   QT  5    =   �  QT  5    �   
=   : >HD   QT  5    �   
=   : >H   �  QA5    E   QV      	�ș;   �   
T  : W   QV       %;   	�   	=   
T  5    : Q�șT  5    �   
=   : >H   =      
=   �  QV   E   Q;   �   
V   V  :     6;   	�   	=   T  5    =   V  =   : Q�ș�@�  Q=   T  5   q   T  5   5   W  Q>T  5    �   
=   : HE   %Q=   T  5    IE   QA5   V  I   T  5    ��  Qx=   y  ,=   y  6=   y  ,=   y  "=   y  =   y  =   y  =   y   �=   y   �=   y   �=   y   �=   y   �=    y   �=   !y   �=   "y   �=   #y   �=   $y   �=   %y   �=   &y   �=   'y  =   (y  =   )y  =   *y  #=   +y  *=   ,y  4=   -y  >=   .y  H=   /y  R=   y  \=   y  �z  �A�   0
T  : Q  �T  5    �   1
�    =   2: �  QA�   3
V  T  : Q  lA�   4
T  : Q  XA�   5
:  Q  GA�   6
T  : Q  3A�   6
T  : Q  A�   7
T  : Q  A�   8
T  : Q   �A�   9
:  Q   �A�   :
:  Q   �A�   ;
T  : Q   �A�   <
T  : Q   �A�   =
T  : Q   �A�   >
T  : Q   �A�   ?
T  : Q   qAV   0   @QV  @I   AV  0   Q   0AA5   A0   QA5   A#?�
0   AQQA5   �ș   A@0   @QA��0   Q   ș������ԐӐԈːԈː�
͈������ψȐ���
��ܐ�����
Ԉ
ϐʐ��
ˈԈ��ؐј�  �������  ������Ґ��Ոʐ��������h� ��u
���u
�u
�u
�u
�u
�u
�u
�u
�u
�u
�u
�u
�u
��  �u
���u
�u
���u
���u
���u
���u
���u
���u
���u
���u
���u
���u
���u
���u
�� 	uʘ�  ���ϐX���������������وȐ�ӐX����ϐX����̐X���ϐX���ϐX���ϐX���ϐX���̐X���̐X���ϐX���ϐX���ϐX���ϐX���ϐX���ː����
А���
͐�
Ր���
ɐ�X���Ȑ�ɐX�� 	   name#   Keyboard:Register'   Keyboard:Unregister   indexOf   Keyboard:   System:   formMM   Utils!   getMMFromMessage	   dumpA   !! No message manager found for    input   input-manage)   checkPermissionForMM#   Keyboard message C    from a content process with no '   ' privileges.	   kbID	   data   _keyboardID   Forms:Input+   Forms:SelectionChange/   Forms:GetText:Result:OK5   Forms:GetText:Result:ErrorC   Forms:SetSelectionRange:Result:OKM   Forms:ReplaceSurroundingText:Result:OK/   Forms:SendKey:Result:OK5   Forms:SendKey:Result:Error'   Forms:SequenceError5   Forms:GetContext:Result:OK=   Forms:SetComposition:Result:OK=   Forms:EndComposition:Result:OKI   Forms:SetSelectionRange:Result:ErrorS   Forms:ReplaceSurroundingText:Result:Error   System:SetValue)   Keyboard:RemoveFocus%   System:RemoveFocus1   System:SetSelectedOption3   System:SetSelectedOptions5   Keyboard:SetSelectionRange?   Keyboard:ReplaceSurroundingTextA   Keyboard:SwitchToNextInputMethod=   Keyboard:ShowInputMethodPicker!   Keyboard:GetText!   Keyboard:SendKey'   Keyboard:GetContext/   Keyboard:SetComposition/   Keyboard:EndComposition#   handleFocusChange   replace   Keyboard   forwardEvent   setValue   removeFocus#   setSelectedOption#   setSelectionRange-   replaceSurroundingText/   switchToNextInputMethod+   showInputMethodPicker   getText   sendKey   getContext   setComposition   endComposition   _keyboardMM   _nextKeyboardID    ����      	   perm        ����      	   name       ^Forms        k   �   ���������          �����          ����V            �  �  ���������           ����   )   keyboardForwardEvent�               �       �      .                                       newEventName   msg   mm  "  =%              T 5    �   
;   5   : 5   5   �   QT  =   H   ?T 5   5   =   	I   AV   0   
Q   V   A5   
I   BA�   
T  T 5   : QC���وҐ��������А�� ���
�� #�א��    target   QueryInterface   Ci'   nsIFrameLoaderOwner   frameLoader   messageManager)   Keyboard:FocusChange	   data	   type	   blur   formMM   sendToKeyboard   ����   3   keyboardHandleFocusChange�               �       �      A                                       msg   isSent w%  f'  '      
      A�    
=   T  : �   QV       ;   �   
Y   =   ]   T  5   5   ]   T  5   5   ]   ;   	�   

T  5   5   : ]   T  5   5   ]   T  5   5   ]   : Q���Ј	Ȑ������ 0�ѐ�ʐ�Ґ�Ґ�و	Ȑ�Ґ�Ҙ� 0��� 7�    forwardEvent)   Keyboard:FocusChange   SystemAppProxy   dispatchEvent3   inputmethod-contextchange	   type	   data   inputType   value	   JSON   stringify   choices   min   max   ����   3   keyboardSetSelectedOption�                        �                                             msg �'  �'  :            A�    
=   T  5   : Q���و1    sendToForm'   Forms:Select:Choice	   data   ����   5   keyboardSetSelectedOptions�                        �                                             msg (  ^(  >            A�    
=   T  5   : Q���و1    sendToForm'   Forms:Select:Choice	   data   ����   3   keyboardSetSelectionRange�                        �                                             msg �(  �(  B            A�    
=   T  5   : Q���و5    sendToForm/   Forms:SetSelectionRange	   data   ����   !   keyboardSetValue�                        �                                             msg )  D)  F            A�    
=   T  5   : Q���و/    sendToForm#   Forms:Input:Value	   data   ����   '   keyboardRemoveFocus�                          �                                           r)  �)  J            A�    
=   Y   : Q���ֈ)    sendToForm#   Forms:Select:Blur   ����   =   keyboardReplaceSurroundingText�                        �                                             msg �)  6*  N            A�    
=   T  5   : Q���و:    sendToForm9   Forms:ReplaceSurroundingText	   data   ����   ;   keyboardShowInputMethodPicker�                           �                                           x*  �*  R            ;    �   
Y   =   ]   : Q���ѐ�ʘ� S����    SystemAppProxy   dispatchEvent'   inputmethod-showall	   type   ����   ?   keyboardSwitchToNextInputMethod�                           �                                           +  e+  X            ;    �   
Y   =   ]   : Q���ѐ�ʘ� Y����    SystemAppProxy   dispatchEvent!   inputmethod-next	   type   ����      keyboardGetText�                        �                                             msg �+  �+  ^            A�    
=   T  5   : Q���و+    sendToForm   Forms:GetText	   data   ����      keyboardSendKey�                        �                                             msg �+  -,  b            A�    
=   T  5   : Q���و1    sendToForm'   Forms:Input:SendKey	   data   ����   %   keyboardGetContext�                 <       �                                             msg Y,  �,  f            A5       A�   
=   A5    : QA�   
=   T  5   : Q����א���و.    _layouts   sendToKeyboard-   Keyboard:LayoutsChange   sendToForm!   Forms:GetContext	   data   ����   -   keyboardSetComposition�                        �                                             msg /-  q-  n            A�    
=   T  5   : Q���و2    sendToForm)   Forms:SetComposition	   data   ����   -   keyboardEndComposition�                        �                                             msg �-  �-  r            A�    
=   T  5   : Q���و2    sendToForm)   Forms:EndComposition	   data   ����   -   keyboardSetLayoutCount�                        �                                             layouts z.  �/  z            AT  0    QA�   
=   T  : Q������ʐ��Ԉ7    _layouts   sendToKeyboard-   Keyboard:LayoutsChange   ����   #   InputRegistryGlue                   E       �                                           �/  c0  �            A>0    QA;   R  0   Q;   �   
=   A: Q;   �   
=   A: Q���Ȑ��ɐ��֐�ֈ6    _messageId   _msgMap   Map	   ppmm%   addMessageListener#   InputRegistry:Add)   InputRegistry:Remove   ����   U   InputRegistryGlue.prototype.receiveMessage�               �       �      J                                       msg   mm �0  62  �            ;    �   
T  : �   Q;    �   
V   =   :     );   �   =   T  5   =   : QT  5   x=   y   =   	y   "z   5A�   

T  V   : Q   A�   
T  V   : Q   ���ψȐ��Ո��ؐ�� ���������hJ�u
�� �uʘ� ���Ӑ�X����Ӑ�X��    Utils!   getMMFromMessage)   checkPermissionForMM   input	   dump5   InputRegistryGlue message 	   nameg    from a content process with no 'input' privileges.#   InputRegistry:Add)   InputRegistry:Remove   addInput   removeInput   ����   I   InputRegistryGlue.prototype.addInput�               �       �      J                                       msg   mm   msgId   manifestURL  h2  �3  �      
      A5    #?�
0    Q�   QA5   �   
V   Y   T ]   T  5   5   ]   : Q;   �   
T  5   5   : �  Q;   	�   

Y   =   ]   V   ]   V  ]   T  5   5   ]   T  5   5   ]   : Q���ِ�֐�Ȑ�Ҙ� ���� ��وȐ��ѐ�ʐ�ɐ�ɐ�Ґ�Ҙ� ���� ��    _messageId   _msgMap   set   mm	   data   requestId   appsService/   getManifestURLByLocalId   appId   SystemAppProxy   dispatchEvent#   inputregistry-add	   type   id   manifestURL   inputId   inputManifest   ����   O   InputRegistryGlue.prototype.removeInput�               �       �      F                                       msg   mm   msgId   manifestURL  "4  5  �      
      A5    #?�
0    Q�   QA5   �   
V   Y   T ]   T  5   5   ]   : Q;   �   
T  5   5   : �  Q;   	�   

Y   =   ]   V   ]   V  ]   T  5   5   ]   : Q���ِ�֐�Ȑ�Ҙ� ���� ��وȐ��ѐ�ʐ�ɐ�ɐ�Ҙ� ����     _messageId   _msgMap   set   mm	   data   requestId   appsService/   getManifestURLByLocalId   appId   SystemAppProxy   dispatchEvent)   inputregistry-remove	   type   id   manifestURL   inputId   ����   S   InputRegistryGlue.prototype.returnMessage�               �       �      T                                       detail   mm   requestId �5  }7  �      
      A5    �   
T  5   :     A5    �   
T  5   : 5   �   Q5   �  QQA5    �   
T  5   : Q;   �   
V   :    =   	T  q    ,V   �   

=   Y   V  ]   : Q   4V   �   

=   Y   T  5   	]   	V  ]   : Q���Ո������Ոڐ�ِ�Ј�������'��Ր�ɘ� ҈ɐ����Ր�͐�ɘ� ֈ����    _msgMap   has   id   get   mm   requestId   delete   Cu   isDeadWrapper   error!   sendAsyncMessage/   InputRegistry:Result:OK5   InputRegistry:Result:Error