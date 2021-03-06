�s�                �  -   �   4                                   0     resource://gre/modules/addons/AddonRepository_SQLiteMigrator.jsm     �J                �    �   �   �   �   �   �   �   �   ;   5       Q;   5      Q;   5      Q;   �   
=   : Q;   �   
=   	: Q;   �   
=   
: Q=      Q=      Q�   Qf       Q;   �   
=   : Q=      Qn   ;   5   �   
;   : 1   QAf   0   QAY   �   ]   �   ]   �   ]   �   ]   Y   ]   �   ]   Y   =    ]   !=   "]   #=   $]   %=   &]   '=   (]   )]   *�   ]   +�   ]   ,�   	]   -�   
]   .�   ]   /�   ]   0�   ]   1�   ]   2�   ]   30   Q������������������!������Ј��Ј��Ј�Ո1�Ո5�Ո2��ˈ��ˈ��Ȉ��ˈ�Ո,��ˈ	�!�ۈ	Ɉ�����#̈;�&�4�ʘL�ʘ�  ��ʘ�  ��ʘ� J�ʘ� U�ʘ� d���ʘ� m�ʐ���ʐ����ʘ� y�Ϙ� ��ʘ� ��ʘ� ��ʘ� ��ʘ� ψʘ� ݈ʘ� �ʘ� �ʘ� ��И�     Cc   Components   classes   Ci   interfaces   Cu   utils   importG   resource://gre/modules/Services.jsmO   resource://gre/modules/AddonManager.jsmI   resource://gre/modules/FileUtils.jsm   KEY_PROFILEDIR   ProfD   FILE_DATABASE   addons.sqlite   LAST_DB_SCHEMA   PROP_SINGLE=   resource://gre/modules/Log.jsm   LOGGER_ID;   addons.repository.sqlmigrator   logger   Log   repository   getLogger!   EXPORTED_SYMBOLS=   AddonRepository_SQLiteMigrator   migrate   _openConnection!   _closeConnection'   _retrieveStoredData)   asyncStatementsCache#   getAsyncStatement�  SELECT internal_id, id, type, name, version, creator, creatorURL, description, fullDescription, developerComments, eula, homepageURL, supportURL, contributionURL, contributionAmount, averageRating, reviewCount, reviewURL, totalDownloads, weeklyDownloads, dailyUsers, sourceURI, repositoryStatus, size, updateDate FROM addon   getAllAddons�   SELECT addon_internal_id, name, url FROM developer ORDER BY addon_internal_id, num!   getAllDevelopers)  SELECT addon_internal_id, url, width, height, thumbnailURL, thumbnailWidth, thumbnailHeight, caption FROM screenshot ORDER BY addon_internal_id, num#   getAllScreenshots/  SELECT addon_internal_id, type, minVersion, maxVersion, appID, appMinVersion, appMaxVersion FROM compatibility_override ORDER BY addon_internal_id, num+   getAllCompatOverrides�   SELECT addon_internal_id, size, url FROM icon ORDER BY addon_internal_id, size   getAllIcons   queries-   _makeAddonFromAsyncRow5   _makeDeveloperFromAsyncRow7   _makeScreenshotFromAsyncRow?   _makeCompatOverrideFromAsyncRow+   _makeIconFromAsyncRow   logSQLError!   asyncErrorLogger   _createTriggers   _createIndices                     id   	   type   	   name      version      creator      description      fullDescription   #   developerComments   	   eula      homepageURL      supportURL      contributionURL   %   contributionAmount      averageRating      reviewCount      reviewURL      totalDownloads      weeklyDownloads      dailyUsers      sourceURI   !   repositoryStatus   	   size      updateDate                                 =   AddonRepository_SQLiteMigrator                  ����   W   this.AddonRepository_SQLiteMigrator.migrate�                 c       �      #                                D      aCallback�  �	  4             A�    
:      !A�   
:  Q�   Z   : QB;   �   
=   ;   =   : QA�   
A�    : QC���Ȉ��̐�ΐ��;��=�ҘD��    _openConnection!   _closeConnection   logger   debugS   Importing addon repository from previous    FILE_DATABASE    storage.'   _retrieveStoredData   ����   [   this.AddonRepository_SQLiteMigrator.migrate/<�              �       �   	   4                                    results   resultArray �  �	  =             A�    
:  QY   ��  Q�  Q;   �   T  : - �
:     nm5   - �
:  �   
:  5      Q   
5   Q�   
:  5      Q   
5   W  QQQ�  V  ,  ��Q�   
:  5   ���� ȋ   Q;   �   
V   �   =   : Q�   V   : Q���̐�
ˈӈ�8�  �݈�������ˈ����א�ߐ�Έ !   _closeConnection   Iterator   value	   next	   done   logger   debug   length#    addons imported.    ����         addon       ;   �          �   ����   ����   #   AD_openConnection�                d      �   &   �                        E             dbfile�
  �  L       	      A.    Q;   �   
;   Z  ;   `   C: �   QV   �   
:      B�A;   5   �   
V   : 0    Q   ��  Qv�  QB�ș�    A5    �   	
=   
: Q�A5    �   
:  QA5    5   x>y   (?y   $�y   ��y   �;   y  z  B;   �   
=   : QA5    �   	
=   : QA5    �   	
=   : QA5    �   	
=   : QA5    �   	
=   : Q;   �   
=   : QA5    �   
=   =   : Q;   �   
=   : QA5    �   
=   =   : QA�   
:  QA�   
:  QA5    ;   0   Q   BA5    �   
:  Q   t��  Qv�  Q;   �   
=    ;   =   !V  : QA�   "
A5    5   #A5    5   $: QA5    �   %
:  QB�ș�    C����O�Ո,ʈ����Ȑ�ˈ���S� ��ֈΐ̐�˘Y�֘\�� W��ј_�h� )�q�cq�ir�ur
�uʘ`��
�c��
Ր�
֐�
֐�
֐�
֐��
Ր�
Ґ�k�
�u��
Ր�
Ґ�w�
�|�
̐�
̐�
ѐ�X���
���֐̐�合␈ѐ�ː����    connection   FileUtils   getFile   KEY_PROFILEDIR   FILE_DATABASE   exists   Services   storage)   openUnsharedDatabase!   executeSimpleSQL?   PRAGMA locking_mode = EXCLUSIVE!   beginTransaction   schemaVersion   LAST_DB_SCHEMA   logger   debugM   Upgrading database schema to version 2_   ALTER TABLE screenshot ADD COLUMN width INTEGERa   ALTER TABLE screenshot ADD COLUMN height INTEGERq   ALTER TABLE screenshot ADD COLUMN thumbnailWidth INTEGERs   ALTER TABLE screenshot ADD COLUMN thumbnailHeight INTEGERM   Upgrading database schema to version 3   createTable-   compatibility_override[  addon_internal_id INTEGER, num INTEGER, type TEXT, minVersion TEXT, maxVersion TEXT, appID TEXT, appMinVersion TEXT, appMaxVersion TEXT, PRIMARY KEY (addon_internal_id, num)M   Upgrading database schema to version 4	   icon�   addon_internal_id INTEGER, size INTEGER, url TEXT, PRIMARY KEY (addon_internal_id, size)   _createIndices   _createTriggers#   commitTransaction   error   Failed to open =   . Data import will not happen.   logSQLError   lastError   lastErrorString'   rollbackTransaction    ����         e        ����         e         �   [       E   $       j      ��������x             �  h   ��������Y           ����   i   this.AddonRepository_SQLiteMigrator._closeConnection�                  e       �                                          �  �             A5    K�   Q   mW   V   �   
:  Q�QLM����QN�AY   0    QA5      A5   �   
:  QA.   Q���0ʐ�ܐ�̐���ѐ��� )   asyncStatementsCache   finalize   connection   asyncClose    ����       	   stmt                 
   +   ����   ����   +   AD_retrieveStoredData�              R       �       L                                D      aCallback   getAllAddons!   getAllDevelopers#   getAllScreenshots+   getAllCompatOverrides   getAllIcons	   self   addons�  �-  �             �    W   Q�   �   Q�   �   Q�   �   Q�   �   QA�   QY   �   QV   :  Q���  �ʘ�  �˘�  �˘� ˘� !˘�  �����ː����  ���  ᘀ �� !�� F�Ɉ    ����      getAllAddons                   R       �      $                                    n  s  �             �   �   �    
=   : �   
Y   �    ]   �   �   5   ]   �   ]   : Q���合ʘ�  ��Ԑ��ʘ�  ����  ��	 #   getAsyncStatement   getAllAddons   executeAsync   handleResult!   asyncErrorLogger   handleError!   handleCompletion   ����   3   getAllAddons_handleResult�              l       �      #                                    aResults   row �  �  �       	      @�   Q   Mm��  QV   �    
=   : �  Q�   �   V  �   �   �   
V   : 9Q��T  �   
:  W   ��������(`�0��ЈȐ����  ��̈̈    getResultByName   internal_id-   _makeAddonFromAsyncRow   getNextRow    ����         internal_id           `          F   ����   ����   ;   getAllAddons_handleCompletion�                 I       �                                 
            aReason K  c  �             T  ;    5   5      +;   �   
=   : Q�   Y   : Q�   :  Q�����Ր�ϐ�����
ʈ    Ci9   mozIStorageStatementCallback   REASON_FINISHED   logger   error   Error retrieving add-ons from database. Returning empty results   ����   !   getAllDevelopers                   R       �      $                                    �    �             �   �   �    
=   : �   
Y   �    ]   �   �   5   ]   �   ]   : Q���合ʘ�  ҈Ԑ��ʘ�  ����  ݈	 #   getAsyncStatement!   getAllDevelopers   executeAsync   handleResult!   asyncErrorLogger   handleError!   handleCompletion   ����   ;   getAllDevelopers_handleResult�              �       �   	   G                                    aResults   row E  s  �       
      @�   Q   �m���  Q�  QV   �    
=   : �  QV  �   �   q     ;   �   
=   : Q������   �   V  7�  QV  5       V  Z   0   QV  5   �   
�   �   �   
V   : : Q��T  �   
:  W   ���:����(�  ˍ0͐�ЈȐ����ՐA����Ԑ����ΐ�������Ꝁ  È̈̈    getResultByName#   addon_internal_id   logger	   warnk   Found a developer not linked to an add-on in database   developers	   push5   _makeDeveloperFromAsyncRow   getNextRow    ����      #   addon_internal_id       addon           �          �   ��������[             ����   C   getAllDevelopers_handleCompletion�                 I       �                                 
            aReason �    �             T  ;    5   5      +;   �   
=   : Q�   Y   : Q�   :  Q�����Ր�ϐ�����
ʈ    Ci9   mozIStorageStatementCallback   REASON_FINISHED   logger   error�   Error retrieving developers from database. Returning empty results   ����   #   getAllScreenshots                   R       �      $                                    f  �#  �             �   �   �    
=   : �   
Y   �    ]   �   �   5   ]   �   ]   : Q���合ʘ�  �Ԑ��ʘ�  ���  ��	 #   getAsyncStatement#   getAllScreenshots   executeAsync   handleResult!   asyncErrorLogger   handleError!   handleCompletion   ����   =   getAllScreenshots_handleResult�              �       �   	   F                                    aResults   row �  "  �       
      @�   Q   �m���  Q�  QV   �    
=   : �  QV  �   �   q     ;   �   
=   : Q������   �   V  7�  QV  5       V  Z   0   QV  5   �   
�   �   �   
V   : : Q��T  �   
:  W   ���:����(�  ˍ0͐�ЈȐ����ՐA����Ԑ����ΐ������靀  �̈̈    getResultByName#   addon_internal_id   logger	   warnm   Found a screenshot not linked to an add-on in database   screenshots	   push7   _makeScreenshotFromAsyncRow   getNextRow    ����      #   addon_internal_id       addon           �          �   ��������[             ����   E   getAllScreenshots_handleCompletion�                 I       �                                 
            aReason �"  �#  �             T  ;    5   5      +;   �   
=   : Q�   Y   : Q�   :  Q�����Ր�ϐ�����
ʈ    Ci9   mozIStorageStatementCallback   REASON_FINISHED   logger   error�   Error retrieving screenshots from database. Returning empty results   ����   +   getAllCompatOverrides                   R       �      $                                    �#  (              �   �   �    
=   : �   
Y   �    ]   �   �   5   ]   �   ]   : Q���合ʘ� �Ԑ��ʘ� ��� �	 #   getAsyncStatement+   getAllCompatOverrides   executeAsync   handleResult!   asyncErrorLogger   handleError!   handleCompletion   ����   E   getAllCompatOverrides_handleResult�              �       �   	   F                                    aResults   row p$  �&        
      @�   Q   �m���  Q�  QV   �    
=   : �  QV  �   �   q     ;   �   
=   : Q������   �   V  7�  QV  5       V  Z   0   QV  5   �   
�   �   �   
V   : : Q��T  �   
:  W   ���:����(�  ˍ0͐�ЈȐ����ՐA����Ԑ����ΐ��"����ޝ� �̈̈    getResultByName#   addon_internal_id   logger	   warn�   Found a compatibility override not linked to an add-on in database-   compatibilityOverrides	   push?   _makeCompatOverrideFromAsyncRow   getNextRow    ����      #   addon_internal_id       addon           �          �   ��������[             ����   M   getAllCompatOverrides_handleCompletion�                 I       �                                 
            aReason L'  o(              T  ;    5   5      +;   �   
=   : Q�   Y   : Q�   :  Q�����Ր�ϐ�����
ʈ    Ci9   mozIStorageStatementCallback   REASON_FINISHED   logger   error�   Error retrieving compatibility overrides from database. Returning empty results   ����      getAllIcons                   R       �      $                                    �(  c-  !            �   �   �    
=   : �   
Y   �    ]   �   �   5   ]   �   ]   : Q���合ʘ� 4�Ԑ��ʘ� "��� B�	 #   getAsyncStatement   getAllIcons   executeAsync   handleResult!   asyncErrorLogger   handleError!   handleCompletion   ����   1   getAllIcons_handleResult�              �       �      C                                    aResults   row )  M+  #      
      @�   Q   �m�����  Q�  Q�  Q�  QV   �    
=   : �  QV  �   �   q     ;   �   
=   : Q������   �   V  7�  Q�   �   �   
V   : 5   �  Q5   �  QQV  5   V  V  9QV  �    V  V  0   	Q��T  �   

:  W   �������(�  �0ِ�ЈȐ����ՐA����Ԑ�Ոڐ�Ӑ��Ϙ� %�̈̈    getResultByName#   addon_internal_id   logger	   warnc   Found an icon not linked to an add-on in database+   _makeIconFromAsyncRow	   size   url   icons   iconURL   getNextRow    ����      #   addon_internal_id       addon    	   size       url           �          �   ��������g             ����   9   getAllIcons_handleCompletion�              �       �      $                                    aReason   returnedAddons �+  S-  6      	      T  ;    5   5      +;   �   
=   : Q�   Y   : QY   �   Q�   �   K�  Q   mW  V   V  5   V  9Q�QLM����QNȈ   V   : Q�����Ր�ϐ�����ʐ�0"ʐ����
Έ    Ci9   mozIStorageStatementCallback   REASON_FINISHED   logger   error{   Error retrieving icons from database. Returning empty results   id    ����         addon       `   #       V   /   ����   ����   )   AD_getAsyncStatement�              �       �      /                                 	   aKey   sql X/  11  U      	      T  A5    q   A5    T  7A5   T  7�   Q�A5    T  A5   �   
V   : 9   z��  Qv�  Q;   �   
=   T  =   V   =   : Q;   	�   

=   T  =   V   =   V  V  5   : p�    �����ː��ϐ� ��ڈ)ʐ̐�ꐈ�ɘ� ^�ː�� )   asyncStatementsCache   queries   connection)   createAsyncStatement   logger   error3   Error creating statement     (   )   Components   Exception   ):    result    ����         e         *   $       O   n   ����   ����   3   AD__makeAddonFromAsyncRow�              w       �      -                        	         	   aRow   addon .7  {8  �            Y   Y   ]    �   Q;   - �
:  �  Q   ,m5   W  QV   V  T  �   
V  : 9Q�Q�   
:  5   ����� V   ��� ���
ϐ��8@ѐ�ֈ�� ��ˈ����Ґ�����    icons   PROP_SINGLE   value   getResultByName	   next	   done    ����      	   prop       -   @       #   K   ����   ����   ;   AD__makeDeveloperFromAsyncRow�               F       �                                          	   aRow	   name   url `9  �9  �            T  �    
=   : �   QT  �    
=   : �  Q;   5   V   V  R ���ψȐ�ψȐ�ӈ�/    getResultByName	   name   url'   AddonManagerPrivate   AddonAuthor   ����   =   AD__makeScreenshotFromAsyncRow�               �       �   
   B                                    	   aRow   url   width   height   thumbnailURL   thumbnailWidth   thumbnailHeight   caption �:  %=  �            T  �    
=   : �   QT  �    
=   : �  QT  �    
=   : �  QT  �    
=   : �  QT  �    
=   : �  QT  �    
=   : �  QT  �    
=   : �  Q;   5   	V   V  V  V  V  V  V  R ���ψȐ�ψȐ�ψ	Ȑ�ψȐ�ψȐ�ψȐ�ψ
Ȑ�ې̘� ����]    getResultByName   url   width   height   thumbnailURL   thumbnailWidth   thumbnailHeight   caption'   AddonManagerPrivate   AddonScreenshot   ����   C   AD_makeCompatOverrideFromAsyncRow�               �       �   	   B                                    	   aRow	   type   minVersion   maxVersion   appID   appMinVersion   appMaxVersion +>  ;A  �            T  �    
=   : �   QT  �    
=   : �  QT  �    
=   : �  QT  �    
=   : �  QT  �    
=   : �  QT  �    
=   : �  Q;   5   V   V  V  V  V  V  R ���ψȐ�ψȐ�ψȐ�ψȐ�ψȐ�ψȐ�ϐ������ ���� ňM    getResultByName	   type   minVersion   maxVersion   appID   appMinVersion   appMaxVersion'   AddonManagerPrivate5   AddonCompatibilityOverride   ����   /   AD_makeIconFromAsyncRow�               G       �                                          	   aRow	   size   url -B  �B  �            T  �    
=   : �   QT  �    
=   : �  QY   V   ]   V  ]   ���ψȐ�ψȐ��	Ɉʈ    getResultByName	   size   url   ����      AD_logSQLError�                 $       �                                             aError   aErrorString  �C  D  �            ;    �   
=   T  =   T : Q����:    logger   error   SQL error    :    ����   '   AD_asyncErrorLogger�                 .       �                                             aError �D  )E  �            ;    �   
=   T  5   =   T  5   : Q����I    logger   error!   Async SQL error    result   :    message   ����   %   AD__createTriggers�                   -       �                                           �E  �G  �            A5    �   
=   : QA5    �   
=   : Q���֐�֘� ��    connection!   executeSimpleSQLG   DROP TRIGGER IF EXISTS delete_addon�  CREATE TRIGGER delete_addon AFTER DELETE ON addon BEGIN DELETE FROM developer WHERE addon_internal_id=old.internal_id; DELETE FROM screenshot WHERE addon_internal_id=old.internal_id; DELETE FROM compatibility_override WHERE addon_internal_id=old.internal_id; DELETE FROM icon WHERE addon_internal_id=old.internal_id; END   ����   #   AD__createIndices�                   Y       �                                           H  �J  �            A5    �   
=   : QA5    �   
=   : QA5    �   
=   : QA5    �   
=   : Q���֐��֐��֐��֐�D    connection!   executeSimpleSQL�   CREATE INDEX IF NOT EXISTS developer_idx ON developer (addon_internal_id)�   CREATE INDEX IF NOT EXISTS screenshot_idx ON screenshot (addon_internal_id)�   CREATE INDEX IF NOT EXISTS compatibility_override_idx ON compatibility_override (addon_internal_id)   CREATE INDEX IF NOT EXISTS icon_idx ON icon (addon_internal_id)