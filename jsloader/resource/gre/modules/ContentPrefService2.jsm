�s�                Y  <   �   8   �      -                               resource://gre/modules/ContentPrefService2.jsm     gp                �    �   �   �   �   �         (   )   *   +   ,n    f    o    Q;   5      Q5      Q5      Q5   	   QQ;   �   

=   : Q;   �   

=   : Q;   �   

=   : Q=      Q;   Y   �   ]   �   ]   �   ]   �   ]   �   ]   �   ]   �   ]   �   	]   �   
]   �   ]   �   ]   �   ]   �   ]   �   ]   �   ]    �   ]   !�   ]   "�   ]   #�   ]   $�   ]   %�   ]   &�   ]   '�   ]   (�   ]   )�   ]   *�   ]   +�   ]   ,�   ]   -�   ]   .�   ]   /�    ]   0�   !]   1�   "]   2�   #]   3�   $]   4�   %]   5�   &]   6�   ']   76   Q���������#�ʘ*�	�� R�	�� W�	�� \�	�� a�	�� h�	���Ј����D�Ո1�Ո9�Ո9�#�ˈ�*�.��0ʘ2�ʘi�ʘo�ʘv�ʘz�ʘ�  ��ʘ�  ��ʘ�  ��ʘ�  ǈʘ�  ҈ʘ�  ׈ʘ�  �ʘ�  �ʐ����ʘ� R�ʘ� Y�ʘ� `�ʐ����ʘ� ��ʘ� ��ʘ� ��ʘ� ��ʐ����ʘ� �ʘ� O�ʐ����ʐ����ʘ� ��ʘ� ��ʘ� ψʘ� �ʘ� �ʘ� �ʐ����ʐ����ʘ� %�ʘ� 7�ʘ� D�И� P����������������������� f������ !   EXPORTED_SYMBOLS   Ci   Cc   Cr   Cu   Components   interfaces   classes   results   utils   importG   resource://gre/modules/Services.jsmW   resource://gre/modules/ContentPrefUtils.jsmW   resource://gre/modules/ContentPrefStore.jsm   GROUP_CLAUSE�   
  SELECT id
  FROM groups
  WHERE name = :group OR
        (:includeSubdomains AND name LIKE :pattern ESCAPE '/')
'   ContentPrefService2   prototype   getByName%   getByDomainAndName+   getBySubdomainAndName   getGlobal	   _get   _commonGetStmt)   _stmtWithGroupClause1   getCachedByDomainAndName7   getCachedBySubdomainAndName   getCachedGlobal   _getCached   set   setGlobal	   _set+   removeByDomainAndName1   removeBySubdomainAndName   removeGlobal   _remove=   _settingsAndGroupsCleanupStmts   removeByDomain#   removeBySubdomain!   removeAllGlobals   _removeByDomain-   _removeAllDomainsSince+   removeAllDomainsSince!   removeAllDomains   removeByName   destroy   _stmt   _execStmts   _parseGroup   _schedule%   addObserverForName+   removeObserverForName   extractDomain   observe   _reset   QueryInterface                  '   ContentPrefService2                  ����   '   ContentPrefService2                 )       �                                              cps k  �  *             AT  6    QAT  5   6   QAT  5   6   Q���ʐ�ϐ�ψ% 	   _cps   _cache   _pbStore!   _privModeStorage   ����      CPS2_getByName�              �      �      i                        &      @   	   name   context   callback   pbPrefs   stmt1   stmt2   �  2             ;    �    �   : Q;   �   �   C: Q;   R  �   QT E   QT 5      �A5   K�  Q�  Q�  Q   �m- �
:  �   
:  5      Q   
5   W  Q�   
:  5      Q   
5   W  Q�   
:  5      Q   
5   W  QQV  �      !�   �   
V  V  V  : Q�QLM���PQN�A�   	
=   
: �   QV   5   �   6   QA�   	
=   : �  QV  5   �   6   QA�   
Z  V   `   V  `  Y   �   ]   �   ]   �   ]   : Q���Ӑ�Ԙ9��
ɐ���0�  �׈���א���
�B�͈ȘI�ԘK�͈ȘQ�ԘS�̈Ȉ͐�ʘ[�ʘc�ʘS��f�    checkNameArg!   checkCallbackArg!   ContentPrefStore%   usePrivateBrowsing   _pbStore	   next	   done   value   set   _stmt�  
      SELECT groups.name AS grp, prefs.value AS value
      FROM prefs
      JOIN settings ON settings.id = prefs.settingID
      JOIN groups ON groups.id = prefs.groupID
      WHERE settings.name = :name
       params	   namek  
      SELECT NULL AS grp, prefs.value AS value
      FROM prefs
      JOIN settings ON settings.id = prefs.settingID
      WHERE settings.name = :name AND prefs.groupID ISNULL
       _execStmts   onRow   onDone   onError    ����         sgroup       sname       val       ����      onRow�               �       �      '                                        row   grp   val X  X  T       
      T  �    
=   : �   QT  �    
=   : �  QA5   �   
V   �   V  : Q�   �   �   
V   �   :     .;   �   �   ;   V   �   V  R : Q���ψȐ�ψȐ�ސ�ڈ��
������:    getResultByName   grp   value   _cache   set   has   cbHandleResult   ContentPref   ����      onDone�                �       �      *                                     reason   ok   gotRow   w  t  [             T    ތ   �   K�  Q�  Q�   Q   �m- �
:  �    
:  5      Q   
5   W   Q�    
:  5      Q   
5   W  Q�    
:  5      Q   
5   W  QQ;   �   �   ;   V   V  V  R : Q�QLM���SQN�;   �   �   T  : Q����0�  �׈���א�������јa�ֈ% 	   next	   done   value   cbHandleResult   ContentPref%   cbHandleCompletion    ����          pbGroup       pbName       pbVal       ,   �          �   ����   ����      onError�                        �                                              nsresult �  �  c             ;    �    �   T  : Q���ֈ"    cbHandleError   l   �       X   �   ����   ����   /   CPS2_getByDomainAndName�                 +       �                                              group	   name   context   callback      �  i             ;    �    T  : QA�   
T  T BT T : Q����ѐ�و1    checkGroupArg	   _get   ����   5   CPS2_getBySubdomainAndName�                 +       �                                              group	   name   context   callback      �  o             ;    �    T  : QA�   
T  T CT T : Q��q��ѐ�و0    checkGroupArg	   _get   ����      CPS2_getGlobal�                        �                                           	   name   context   callback     o  v             A�    
@T  BT T : Q���׈0 	   _get   ����      CPS2__get�               f      �      h                        %      @      group	   name#   includeSubdomains   context   callback   pbPrefs  �  	  z       
      A�    
�   : �   Q;   �   �   : Q;   �   �   C: Q;   R  �   QT E   QT 5      �A5   �   
�   �   T : K�  Q�   Q   {m- �
:  �   
:  5      Q   
5   	W   Q�   
:  5      Q   
5   	W  QQ�   �   

V   �   V  : Q�QLM����QN�A�   
Z  A�   
�   �   T : `   Y   �   ]   �   ]   �   ]   : Q���͈ɐ�Ӑ�Ԙ�  ���
ɐ���ڈ�0�  �ט�  ����א��ꐐ���̈ᐈʘ�  ��ʘ�  ��ʘ�  ����  ��    _parseGroup   checkNameArg!   checkCallbackArg!   ContentPrefStore%   usePrivateBrowsing   _pbStore   match	   next	   done   value   set   _execStmts   _commonGetStmt   onRow   onDone   onError    ����          sgroup       val       ����      onRow�               �       �      '                                        row   grp   val 3  5  �       
      T  �    
=   : �   QT  �    
=   : �  QA5   �   
V   �   V  : Q�   �   �   
�   �   :     .;   �   �   ;   V   �   V  R : Q���ψȐ�ψȐ�ސ�ۈ��
������:    getResultByName   grp   value   _cache   set   has   cbHandleResult   ContentPref   ����      onDone�                !      �   	   3                                     reason   ok   gotRow   T  �  �             T   T     %A5    �   
�   �   ;   : Q�   �   K�  Q�  Q�   Q   �m- �
:  �   
:  5      Q   
5   W   Q�   
:  5      Q   
5   W  Q�   
:  5      Q   
5   W  QQ;   �   �   ;   V   V  V  R : Q�QLM���SQN�;   �   �   T  : Q���������0�  �׈���א�������ѐ���ֈ%    _cache   set   undefined	   next	   done   value   cbHandleResult   ContentPref%   cbHandleCompletion    ����          pbGroup       pbName       pbVal       U   �       A   �   ����   ����      onError�                        �                                              nsresult �  �  �             ;    �    �   T  : Q���ֈ"    cbHandleError   �   �       �   �   ����   ����   '   CPS2__commonGetStmt�               ]       �      .                                        group	   name#   includeSubdomains	   stmt   :  �  �             T     -A�    
T  T =   ;   �=   :    A�   
=   : �   QV   5   T 6   QV   ���(�Ә�  ��<͘�  ��Ș�  �͈Ș�  ��Ґ�� )   _stmtWithGroupClause�  
        SELECT groups.name AS grp, prefs.value AS value
        FROM prefs
        JOIN settings ON settings.id = prefs.settingID
        JOIN groups ON groups.id = prefs.groupID
        WHERE settings.name = :name AND prefs.groupID IN (   GROUP_CLAUSE   )
         _stmt  
        SELECT NULL AS grp, prefs.value AS value
        FROM prefs
        JOIN settings ON settings.id = prefs.settingID
        WHERE settings.name = :name AND prefs.groupID ISNULL
         params	   name   ����   3   CPS2__stmtWithGroupClause�               o       �                                              group#   includeSubdomains   sql	   stmt   �  n  �             A�    
T : �   QV   5   T  6   QV   5   T D   QB6   QV   5   =   V   �   
T  =   : 6   QV   �����ˈȐ�Ґ�ِ��ʐ��    _stmt   params   group#   includeSubdomains   pattern   %.'   escapeStringForLIKE   /   ����   ;   CPS2_getCachedByDomainAndName�               :       �                                              group	   name   context   prefs   �  �  �             ;    �    T  : QA�   
T  T BT : �   QV   >7D   Q@�����ѐ�҈Ȑ�Έ    checkGroupArg   _getCached   ����   A   CPS2_getCachedBySubdomainAndName�               K       �                                              group	   name   context   len   prefs      �  �             ;    �    T  : QA�   
T  T CT : �   QT    T V   �   6   QV   ������ѐ�҈Ȑ��Ґ��    checkGroupArg   _getCached   value   length   ����   )   CPS2_getCachedGlobal�               '       �                                           	   name   context   prefs  �  I  �             A�    
@T  BT : �   QV   >7D   Q@���ЈȐ�Έ    _getCached   ����      CPS2__getCached�              i      �      T                        "      @      group	   name#   includeSubdomains   context   storesToCheck   outStore   prefs r  �   �             A�    
�   : �   Q;   �   �   : QZ  A5   `   �   QT E   QT 5      V   �   
A5   : Q;   R  �   QV   �   
�    : QZ   �  Q�   K�  Q�  Q�  Q   �m- �
:  �   
:  5   	   Q   
5   
W  Q�   
:  5   	   Q   
5   
W  Q�   
:  5   	   Q   
5   
W  QQV  �   
;   V  V  V  R : Q�QLM���WQN�V  ����͈ɐ�Ӑ���ϐ���Ր���ɐ�Ԙ�  �ɐ�0�  �׈���א�݈�����ѐ���    _parseGroup   checkNameArg   _cache%   usePrivateBrowsing	   push   _pbStore!   ContentPrefStore   forEach	   next	   done   value   ContentPref   ����   #   CPS2__getCached/<�                �       �                                           store �  `   �       
      T  �    
�   �   �   : K�  Q�   Q   �m- �
:  �   
:  5      Q   
5   W   Q�   
:  5      Q   
5   W  QQ�   �   �   
V   �   V  : Q�QLM����QNș�و �0�  �׈������א��     match	   next	   done   value   set    ����          sgroup       val       0   �       !   �   ����    ����         sgroup       sname       val       �   �      �   �   ����   ����      CPS2_set�                 -       �                                              group	   name   value   context   callback     !  �!  �             ;    �    T  : QA�   
T  T T T T : Q���ѐ�ۈ1    checkGroupArg	   _set   ����      CPS2_setGlobal�                        �                                           	   name   value   context   callback    �!  "  �             A�    
@T  T T T : Q���و0 	   _set   ����      CPS2__set�                     �      �                          :      @      group	   name   value   context   callback   stmts	   stmt 2"  �,  �             A�    
�   : �   Q;   �   �   : Q;   �   �   : Q;   �   �   B: QT E   QT 5      8A5   �   
�   �   �   : QA�   
�    : QA5   �   	
�   �   : QZ   �   QA�   

=   : �  QV  5   �   6   QV   �   
V  : Q�      AA�   

=   : W  QV  5   �   6   QV   �   
V  : Q�      3A�   

=   : W  QV  5   �   6   Q   A�   

=   : W  QV  5   �   6   QV  5   �   6   QV  5   ;   �   
:  X�6   QV   �   
V  : QA�   
V   Y   �   ]   �   ]   : Q���͈ɐ�Ӑ�Ӑ�Ԑ�������ѐ������ �ې��ɐ���͈Ȑ����Ԑ�Ӑ����͈Ȑ����Ԑ�Ӑ���.��͈Ș� .�ِ���͈Ș� ?�Ԑ�Ԑ�Ո͐�Ӑ��ѐ�ʘ� L�ʘ� D��� O�    _parseGroup   checkNameArg   checkValueArg!   checkCallbackArg%   usePrivateBrowsing   _pbStore   set   _schedule   _cache   remove   _stmt�   
      INSERT OR IGNORE INTO settings (id, name)
      VALUES((SELECT id FROM settings WHERE name = :name), :name)
       params	   name	   push�   
        INSERT OR IGNORE INTO groups (id, name)
        VALUES((SELECT id FROM groups WHERE name = :group), :group)
         group�  
        INSERT OR REPLACE INTO prefs (id, groupID, settingID, value, timestamp)
        VALUES(
          (SELECT prefs.id
           FROM prefs
           JOIN groups ON groups.id = prefs.groupID
           JOIN settings ON settings.id = prefs.settingID
           WHERE groups.name = :group AND settings.name = :name),
          (SELECT id FROM groups WHERE name = :group),
          (SELECT id FROM settings WHERE name = :name),
          :value,
          :now
        )
        
        INSERT OR REPLACE INTO prefs (id, groupID, settingID, value, timestamp)
        VALUES(
          (SELECT prefs.id
           FROM prefs
           JOIN settings ON settings.id = prefs.settingID
           WHERE prefs.groupID IS NULL AND settings.name = :name),
          NULL,
          (SELECT id FROM settings WHERE name = :name),
          :value,
          :now
        )
         value   now	   Date   _execStmts   onDone   onError   ����      CPS2__set/<�                   C       �                                            W#  �#  �             ;    �    �   ;   5   5   : QA5   �   
�   �   �   : Q���␈��- %   cbHandleCompletion   Ci/   nsIContentPrefCallback2   COMPLETE_OK	   _cps   _notifyPrefSet   ����      onDone�                 g       �                                              reason   ok  �+  t,  E            T    %A5    �   
�   �   �   : Q;   �   �   T  : QT    %A5   �   
�   �   �   : Q����
���֐��
��-    _cache   setWithCast%   cbHandleCompletion	   _cps   _notifyPrefSet   ����      onError�                        �                                              nsresult �,  �,  L            ;    �    �   T  : Q���ֈ"    cbHandleError   ����   5   CPS2_removeByDomainAndName�                 +       �                                              group	   name   context   callback    -  .  R            ;    �    T  : QA�   
T  T BT T : Q�����ѐ�و4    checkGroupArg   _remove   ����   ;   CPS2_removeBySubdomainAndName�                 +       �                                              group	   name   context   callback    W.  U/  Y            ;    �    T  : QA�   
T  T CT T : Q�����ѐ�و3    checkGroupArg   _remove   ����   #   CPS2_removeGlobal�                        �                                           	   name   context   callback   �/  �/  `            A�    
@T  BT T : Q���׈3    _remove   ����      CPS2__remove�              w      �      �                        *      @      group	   name#   includeSubdomains   context   callback   stmts	   stmt   prefs�/  �7  d      
      A�    
�   : �   Q;   �   �   : Q;   �   �   B: QA5   �   
�   �   : K�  Q   $mW  A5   �   
V  �   : Q�QLM����QN�Z   �   QV   �   
A�   
�   �   �   : : QA�   
�   �   =   	;   
�=   : �  QV  5   �   6   QV   �   
V  : QV   �   
A�   
:  : W   Q;   R  �   QA�   
V   Y   �   ]   �   ]   �   ]   : Q����͈ɐ�Ӑ�Ԑ���׈�0)ʐ�琐��ɐ�������������ט� {�%͘� v�Ș� ~�Ԑ�Ӑ��ӈ�����Ȑ���ɐ��ѐ�ʘ� ��ʘ� ��ʘ� ���� ��    _parseGroup   checkNameArg!   checkCallbackArg   _cache   matchGroups   remove	   push   _commonGetStmt)   _stmtWithGroupClause�  
      DELETE FROM prefs
      WHERE settingID = (SELECT id FROM settings WHERE name = :name) AND
            CASE typeof(:group)
            WHEN 'null' THEN prefs.groupID IS NULL
            ELSE prefs.groupID IN (   GROUP_CLAUSE-   )
            END
       params	   name   concat=   _settingsAndGroupsCleanupStmts!   ContentPrefStore   _execStmts   onRow   onDone   onError    ����         sgroup       ����      onRow�               Z       �                                              row   grp |4  5  �            T  �    
=   : �   Q�   �   �   
V   �   ;   : QA5   �   
V   �   ;   : Q���ψȐ�㐈߈&    getResultByName   grp   set   undefined   _cache   ����      onDone�                �      �      D                        0             reason   ok  05  q7  �      	      T    �A5    �   
�   �   ;   : Q�   E   Q�   5      �A5   �   
�   �   �   : K�   Q   tm- �
:  �   
:  5      Q   
5   W   QQ�   �   �   
V   �   ;   : QA5   �   	
V   �   : Q�QLM����QN�;   
�   
�   T  : QT    ��   �   K�   Q   tm- �
:  �   
:  5      Q   
5   W   Q�   
:  5      Q   
5   QQA5   �   
V   �   : Q�QLM����QNș���
�����܈�0yט� ���א��㐈琐���֐��0y׈��Ӑ��+    _cache   set   undefined%   usePrivateBrowsing   _pbStore   match	   next	   done   value   remove%   cbHandleCompletion	   _cps%   _notifyPrefRemoved    ����          sgroup        ����          sgroup       !  z      o   z       e   �   ����     �   ����   ����      onError�                        �                                              nsresult �7  �7  �            ;    �    �   T  : Q���ֈ"    cbHandleError   e   *       [   6   ����   ����   y   ContentPrefService2.prototype._settingsAndGroupsCleanupStmts�                   .       �                                            D8  :  �            Z  A�    
=   : `   A�    
=   : `  �������Ԑ����՘� ��    _stmt�   
        DELETE FROM settings
        WHERE id NOT IN (SELECT DISTINCT settingID FROM prefs)
        
        DELETE FROM groups WHERE id NOT IN (
          SELECT DISTINCT groupID FROM prefs WHERE groupID NOTNULL
        )
         ����   '   CPS2_removeByDomain�                 (       �                                              group   context   callback   N:  �:  �            ;    �    T  : QA�   
T  BT T : Q���ѐ�ֈ6    checkGroupArg   _removeByDomain   ����   -   CPS2_removeBySubdomain�                 (       �                                              group   context   callback   �:  n;  �            ;    �    T  : QA�   
T  CT T : Q���ѐ�ֈ5    checkGroupArg   _removeByDomain   ����   +   CPS2_removeAllGlobals�                        �                                              context   callback  �;  �;  �            A�    
@BT  T : Q���Ԉ5    _removeByDomain   ����   )   CPS2__removeByDomain�              �      �      �                        )      @      group#   includeSubdomains   context   callback   stmts   prefs  )<  !F  �      
      A�    
T  : U  Q;   �   �   B: QA5   �   
T  T : K�  Q   mW  A5   �   
V  : Q�QLM����QN�Z   �   QT     �V   �   
A�   
T  T =   ;   �=   	: : QV   �   
A�   
T  T =   
;   �=   : : QV   �   
A�   
=   : : Q   CV   �   
A�   
=   : : QV   �   
A�   
=   : : QV   �   
A�   
=   : : Q;   R  �   QA�   
V   Y   �   ]   �   ]   �   ]   : Q����ˈ��Ԑ���ӈ�0$ʐ�␐��ɐ����  ���ޘ� ׈"͘� ҈������� وِ�+͘� و���������؈�����ɘ� ᐈ؈������� �Ӑ�� �������� �؈������� ��ɐ��ѐ�ʘ� ��ʘ� 
�ʘ� ���� �    _parseGroup!   checkCallbackArg   _cache   matchGroups   removeGroup	   push)   _stmtWithGroupClause�  
        SELECT groups.name AS grp, settings.name AS name
        FROM prefs
        JOIN settings ON settings.id = prefs.settingID
        JOIN groups ON groups.id = prefs.groupID
        WHERE prefs.groupID IN (   GROUP_CLAUSE   )
      A   DELETE FROM groups WHERE id IN (   )   _stmt�   
        DELETE FROM prefs
        WHERE groupID NOTNULL AND groupID NOT IN (SELECT id FROM groups)
      O  
        SELECT NULL AS grp, settings.name AS name
        FROM prefs
        JOIN settings ON settings.id = prefs.settingID
        WHERE prefs.groupID IS NULL
      O   DELETE FROM prefs WHERE groupID IS NULL�   
      DELETE FROM settings
      WHERE id NOT IN (SELECT DISTINCT settingID FROM prefs)
    !   ContentPrefStore   _execStmts   onRow   onDone   onError    ����         sgroup       ����      onRow�               o       �                                              row   grp	   name C  �C  �            T  �    
=   : �   QT  �    
=   : �  Q�   �   �   
V   V  ;   : QA5   �   
V   V  ;   : Q���ψȐ�ψȐ�␈ވ&    getResultByName   grp	   name   set   undefined   _cache   ����      onDone�                �      �      9                        &             reason   ok  �C  �E  �      
      T E   Q�   E   Q�   5       �A5   K�  Q�   Q   �m- �
:  �   
:  5      Q   
5   W   Q�   
:  5      Q   
5   W  QQ�   �   �   
V   V  ;   : QA5   �   
V   V  : Q�QLM���gQN�;   �   �   T  : QT    ��   �   K�  Q�   Q   wm- �
:  �   
:  5      Q   
5   W   Q�   
:  5      Q   
5   W  QQA5   	�   

V   V  : Q�QLM����QNș����0�  �׈��א�␈搐��֐��0|׈��א��, %   usePrivateBrowsing   _pbStore	   next	   done   value   set   undefined   remove%   cbHandleCompletion	   _cps%   _notifyPrefRemoved    ����          sgroup       sname        ����          sgroup       sname         }      =   �       .   �   ����     �   ����   ����      onError�                        �                                              nsresult �E  F  
            ;    �    �   T  : Q���ֈ"    cbHandleError   J   %       @   1   ����   ����   7   CPS2__removeAllDomainsSince�                     �      z                                @      since   context   callback   stmts	   stmt   prefs bF  GN        	      ;    �    �   B: QT  X�U  QA5   �   
:  QZ   �   QA�   
=   : �  QV  5   T  6   QV   �   
V  : QA�   
=   : W  QV  5   T  6   QV   �   
V  : QV   �   	
A�   

:  : W   Q;   R  �   QA�   
V   Y   �    ]   �   ]   �   ]   : Q���Ԑ��~�� �ѐ��ɐ���͈Ș� $�Ґ�Ӑ���͈Ȑ���Ґ�Ӑ���ӈ�����Ȑ���ɐ�ѐ�ʘ� 9�ʘ� I�ʘ� 2��� L� !   checkCallbackArg   _cache   removeAllGroups   _stmt�  
      SELECT groups.name AS grp, settings.name AS name
      FROM prefs
      JOIN settings ON settings.id = prefs.settingID
      JOIN groups ON groups.id = prefs.groupID
      WHERE timestamp >= :since
       params   since	   push�   
      DELETE FROM prefs WHERE groupID NOTNULL AND timestamp >= :since
       concat=   _settingsAndGroupsCleanupStmts!   ContentPrefStore   _execStmts   onRow   onDone   onError   ����      onRow�               o       �                                              row   grp	   name �J  �K  3            T  �    
=   : �   QT  �    
=   : �  Q�   �   �   
V   V  ;   : QA5   �   
V   V  ;   : Q���ψȐ�ψȐ�␈ވ&    getResultByName   grp	   name   set   undefined   _cache   ����      onDone�                �      �      ;                        &             reason   ok  �K  �M  9      
      T E   Q�   E   Q�   5       �A5   K�  Q�   Q   �m- �
:  �   
:  5      Q   
5   W   Q�   
:  5      Q   
5   W  QQ�   �   �   
V   V  ;   : Q�QLM����QN�A5   �   
:  Q;   �   �   T  : QT    ��   �   K�  Q�   Q   wm- �
:  �   
:  5      Q   
5   W   Q�   
:  5      Q   
5   W  QQA5   	�   

V   V  : Q�QLM����QNș������0�  �׈��א��
ѐ��֐��0|׈��א��, %   usePrivateBrowsing   _pbStore	   next	   done   value   set   undefined   removeAllGroups%   cbHandleCompletion	   _cps%   _notifyPrefRemoved    ����          sgroup       sname        ����          sgroup       sname         }      =   �       .   �   ����     �   ����   ����      onError�                        �                                              nsresult �M  ;N  I            ;    �    �   T  : Q���ֈ"    cbHandleError   ����   5   CPS2_removeAllDomainsSince�                        �                                              since   context   callback   �N  �N  O            A�    
T  T T : Q���Ո6 -   _removeAllDomainsSince   ����   +   CPS2_removeAllDomains�                        �                                              context   callback  O  fO  S            A�    
>T  T : Q���ӈ2 -   _removeAllDomainsSince   ����   #   CPS2_removeByName�              �      �      �                        .      @   	   name   context   callback   stmts	   stmt   prefs�O  �X  W            ;    �    �   : Q;   �   �   B: QA5   K�  Q�  Q   �m- �
:  �   
:  5      Q   
5   W  Q�   
:  5      Q   
5   W  QQV  �      A5   �   
V  �   : Q�QLM���yQN�Z   �   QA�   
=   : �  QV  5   	�   6   
QV   �   
V  : QA�   
=   : W  QV  5   	�   6   
QV   �   
V  : QV   �   
A�   
=   : : QV   �   
A�   
=   : : Q;   R  �   QA�   
V   Y   �   ]   �   ]   �   ]   : Q���Ӑ�Ԑ����0�  �׈��א���琐��ɐ����͈Ș� u�Ԑ�Ӑ���Ȑ�� y�Ȑ���Ԑ�Ӑ���Ӑ�� �����������؈������� ���ɐ��ѐ�ʘ� ��ʘ� ��ʘ� ���� ��    checkNameArg!   checkCallbackArg   _cache	   next	   done   value   remove   _stmt=  
      SELECT groups.name AS grp
      FROM prefs
      JOIN settings ON settings.id = prefs.settingID
      JOIN groups ON groups.id = prefs.groupID
      WHERE settings.name = :name
      UNION
      SELECT NULL AS grp
      WHERE EXISTS (
        SELECT prefs.id
        FROM prefs
        JOIN settings ON settings.id = prefs.settingID
        WHERE settings.name = :name AND prefs.groupID IS NULL
      )
       params	   name	   pushO   DELETE FROM settings WHERE name = :name�   DELETE FROM prefs WHERE settingID NOT IN (SELECT id FROM settings)�   
      DELETE FROM groups WHERE id NOT IN (
        SELECT DISTINCT groupID FROM prefs WHERE groupID NOTNULL
      )
    !   ContentPrefStore   _execStmts   onRow   onDone   onError    ����         group       sname       ����      onRow�               Z       �                                              row   grp �U  1V  �            T  �    
=   : �   Q�   �   �   
V   �   ;   : QA5   �   
V   �   ;   : Q���ψȐ�㐈߈&    getResultByName   grp   set   undefined   _cache   ����      onDone�                �      �      =                        *             reason   ok  PV  >X  �      
      T E   Q�   E   Q�   5       �A5   K�  Q�   Q   �m- �
:  �   
:  5      Q   
5   W   Q�   
:  5      Q   
5   W  QQV  �   H   B�   �   �   
V   �   ;   : QA5   �   
V   �   : Q�QLM���VQN�;   �   �   T  : QT    ��   �   K�   Q   tm- �
:  �   
:  5      Q   
5   W   Q�   
:  5      Q   
5   QQA5   	�   

V   �   : Q�QLM����QNș����0�  �׈��א���㐈琐���֐��0y׈��Ӑ��+ %   usePrivateBrowsing   _pbStore	   next	   done   value   set   undefined   remove%   cbHandleCompletion	   _cps%   _notifyPrefRemoved    ����          sgroup       sname        ����          sgroup       %  z      =   �       .   �   ����     �   ����   ����      onError�                        �                                              nsresult _X  �X  �            ;    �    �   T  : Q���ֈ"    cbHandleError   A   �       2   �   ����   ����      CPS2_destroy�                  A       �                                         �X  HY  �            A5       :A5    K�   Q   mW   V   �   
:  Q�QLM����QNș���0ʐ�܈    _statements   finalize    ����       	   stmt                    +   ����   ����      CPS2__stmt�                 W       �                                 
             sql [Z  1[  �            A5        AY   6    QA5    T  7    (A5    T  A5   5   �   
T  : 8QA5    T  7�����̐����ވ��ˈ    _statements	   _cps   _dbConnection)   createAsyncStatement   ����      CPS2__execStmts�                S       �      -                                @      stmts   callbacks	   self   gotRow �^  1c  �            A�   QB�   QA5    5   �   
T  T  �   Y   �    ]   �   ]   �   ]   : Q�������␈ʘ� ��ʘ� �ʘ� ҈�� �� 	   _cps   _dbConnection   executeAsync   length   handleResult!   handleCompletion   handleError   ����      handleResult�                �       �      5                                     results 0_  \`  �            ���   Q@�   Q   DmC�   �   Q�   5       (�   5    �   
�   �   V   l Q�T  �   
:  W   �����   ,��   Qv�   Q;   �   
V   : Q�    ���j���(W���� ֐�̐���㘀 ֈ̈Ҙ� �̐�
ې�	    onRow	   call   getNextRow   Cu   reportError    ����          row        ����          err            n          W          h   ����   p       ����   ����   !   handleCompletion�                �       �   
   )                                     reason �`  4b  �            ���   QT  ;    5   5   �   Q�   5   �   
�   �   V      ;    5   5      ;    5   5   V   �   �   l Q�   ,��   Qv�   Q;   �   	
V   : Q�    ���y��ؐ�
ېِϐΘ� �
ʘ� �̐�
ې�	    Ci9   mozIStorageStatementCallback   REASON_FINISHED   onDone	   call/   nsIContentPrefCallback2   COMPLETE_OK   COMPLETE_ERROR   Cu   reportError    ����          ok        ����          err            }          w   ����          ����   ����      handleError�                f       �                                           error ]b  %c  �            ��   5       .�   5    �   
�   �   ;   5   l Q   ,��   Qv�   Q;   �   
V   : Q�    ���9����̐�
ې�	    onError	   call   Cr!   NS_ERROR_FAILURE   Cu   reportError    ����          err            =       ?       ����   ����   !   CPS2__parseGroup�              c       �      "                                     groupStr   groupURI �d  �e              T      @�;    5   �   
T  @@: W   Q   ��  Qv�  QT  �ș�    A5   5   �   
V   : ���������
ֈ͐�̐�͐��ֈ�#    Services   io   newURI	   _cps   _grouper   group    ����         err            #       0      ��������@             ����      CPS2__schedule�                 8       �                                 
             fn �e  vf              ;    5   5   �   
T  �   
A: ;   5   5   : Q���� �Ϙ� ���B    Services   tm   mainThread   dispatch	   bind   Ci   nsIThread   DISPATCH_NORMAL   ����   /   CPS2_addObserverForName�                        �                                           	   name   observer  �f  �f              A5    �   
T  T : Q���׈' 	   _cps   _addObserver   ����   5   CPS2_removeObserverForName�                        �                                           	   name   observer  0g  ug              A5    �   
T  T : Q���׈* 	   _cps   _removeObserver   ����   %   CPS2_extractDomain�                        �      	                                        str �g  �g              A�    
T  : ���ˈ�    _parseGroup   ����      CPS2_observe�                �       �   
   6                                   	   subj   topic	   data   �h  j  %            T ���  Q�   Qx=    y   =   y   Ez   �T  �   
;   5   : �   
:  �   QA�   
V   : Q   ET  �   
;   5   : �   
:  �  QV  A5   5   	6   Q   ș��h�  ��u
����uʘ� '��
ԈҐ�АX���
ԈҐ�ՐX��    test:reset   test:db   QueryInterface   Ci'   xpcIJSWeakReference   get   _reset   value	   _cps   _dbConnection    ����          fn       obj           �   ����   ����      CPS2__reset�               �       �   	   0                                @      callback   cps   tables   stmts�j   l  7            A5    �   
:  QA5   �   
:  QA5   �   QV   Y   6   QV   Z   6   Qf    �  QV  �   
�   A: �  QA�   
V  Y   �   ]   : Q���ѐ�ѐ��ː�ϐ�ΐ��ʐ�шȐ�шʈ����;    _pbStore   removeAll   _cache	   _cps   _observers#   _genericObservers   map   _execStmts   onDone                     prefs      groups      settings                  ����   %   CPS2__reset/stmts<�                        �                                              t �k  �k  @            A�    
=   T  �=   : ��(͈ˈ����    _stmt   DELETE FROM       ����   )   CPS2__reset/<.onDone�                          �                                             l  l  A            �   :  ��1ʈ
    ����   '   CPS2_QueryInterface�               ~       �   
   '                                @      iid   supportedIIDsQl  m  D            Z  ;    5   `   ;    5   `  ;    5   `  �   QV   �   
�    :    A�   �   
;    5   :    A5   ;   5   	p�����ΐ�ΐ�Ӑ�Ј���ֈ����ˈ    Ci-   nsIContentPrefService2   nsIObserver   nsISupports	   some   equals+   nsIContentPrefService	   _cps   Cr+   NS_ERROR_NO_INTERFACE   ����   +   CPS2_QueryInterface/<�                        �                                              i �l  �l  J            �   �    
T  : ��(ӈ    equals   ����      checkGroupArg                 -       �                                              group �m  
n  R            T   D   QT  '=       ;   �   =   : p���ʈ
���ψ�.    string   invalidArg?   domain must be nonempty string.   ����      checkNameArg                 -       �                                           	   name !n  �n  W            T   D   QT  '=       ;   �   =   : p���ʈ	���ψ�,    string   invalidArg;   name must be nonempty string.   ����      checkValueArg                 "       �                                              value �n  �n  \            T  ;    H   ;   �   =   : p�����ψ�+    undefined   invalidArg9   value must not be undefined.   ����   !   checkCallbackArg                 V       �                                              callback   required  o  p  a            T  E   QT  ;    5   r    ;   �   =   : pT   E   	QT    ;   �   =   : p��Ɉ���ψ�����ψ�&    Ci/   nsIContentPrefCallback2   invalidArgY   callback must be an nsIContentPrefCallback2./   callback must be given.   ����      invalidArg                        �      	                                        msg  p  fp  h            ;    �   
T  ;   5   : ���و�3    Components   Exception   Cr)   NS_ERROR_INVALID_ARG