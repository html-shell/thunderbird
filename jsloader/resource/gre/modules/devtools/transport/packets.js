ç¿s¹                #  A   ¹   (   ×                        d       0     resource://gre/modules/devtools/transport/packets.js     $/                                      	                  ;   â   =   : 5        Q5      Q5      QQ;   â   =   :    Q;   5      Q5      QQ;   â   =   
:    	Q;   â   =   :    Q;   ¸   
A=   A    : Q;   ¸   
××(:    Q;      0   Q;   Y      a      b      ]   0   Q;   ;   0   Q;      0   Q;        0   Q;   ;   ¸   
;   5   : 0   Q;   ¸   
;   5   =   Y      ]      	]   : Q;   5      
0   Q;   5      0    Q;   5      0   !Q;   ¸   
;   5   =   "Y      ]   : Q;   5      0   #Q;   ;   0   Q;   $   0   Q;   $    0   Q;   $;   ¸   
;   5   : 0   Q;   $5      0   Q;   $5      0   !Q;   ¸   
;   $5   =   %Y      ]   : Q;   ¸   
;   $5   =   &Y      ]      ]   : Q;   ¸   
;   $5   =   "Y      ]   : Q;   $5      0   #Q;   ;   $0   $Q;   ';   ¸   
;   5   : 0   Q;   '5      0   Q;   '5      0   !Q;   ¸   
;   '5   =   "Y      ]   : Q;   ;   '0   'Q+Ê0	d	  ã	 	ÏèÏÉÿÿÿýÞ ÏÉÿÿÿýÏ
Éÿÿÿý!Ü&+ÐÉÿÿÿý03@ÐCEÊGÊKÊSÐWYÐdhtÐÐ'ÛÉ àÊ  Ê    Õ  °Õ  »Õ  ÈàÊ  ÊÕÐ   ã  óÐ Ð>ÛÉ Õ )Õ [àÊ ]àÊ lÊ c qàÊ sÕÐ   ÛÉ ÕÕàÊ Ð    Cc   Ci   Cu   require   chrome   DevToolsUtils=   devtools/toolkit/DevToolsUtils   dumpn   dumpv   StreamUtilsO   devtools/toolkit/transport/stream-utils   promise!   defineLazyGetter!   unicodeConverter#   PACKET_LENGTH_MAX	   Math   pow   Packet   fromHeader   prototype   length   destroy   exports   JSONPacket   HEADER_PATTERN   Object   create   defineProperty   object   get   set	   read   _readData   write	   done   toString   BulkPacket+   streamReadyForWriting   header   RawPacket   ÿÿÿÿ                     8       ¹                                           !   unicodeConverter  ò  !             ;    5   ¸   
;   5   :    QV   =   0   QV   ÑÊ"È$Ï    CcY   @mozilla.org/intl/scriptableunicodeconverter   createInstance   Ci;   nsIScriptableUnicodeConverter   charset   UTF-8   ÿÿÿÿ      Packet                        ¹                                              transport )  k  0             AT  0    QA>0   QÊÈ    _transport   _length   ÿÿÿÿ   #   Packet.fromHeaderÁ                 2       ¹                                             header   transport  n	  í	  @             ;    ¸   
T  T : D   Q;   ¸   
T  T : ÒÉÒ	)    JSONPacket   fromHeader   BulkPacket   ÿÿÿÿ   /   Packet.prototype.lengthÁ                          ¹                                           
  3
  G             A5        _length   ÿÿÿÿ   /   Packet.prototype.lengthÁ                 <       ¹                                             length B
    K             T  ;       (;   â   =   T  =   ;    : pAT  0   QÉÙMPÊ #   PACKET_LENGTH_MAX   Error   Packet length 7    exceeds the max length of    _length   ÿÿÿÿ   1   Packet.prototype.destroyÁ                   	       ¹                                            !  E  S             A@0    QÈ    _transport   ÿÿÿÿ      JSONPacket                 )       ¹                                             transport +    d             ;    ¸   
AT  l QA=   0   QAB0   QÔÌÈ    Packet	   call   _data      _done   ÿÿÿÿ   +   JSONPacket.fromHeaderÁ               _       ¹      '                                       header   transport   match   packet      t             A5    ¸   
T  :    QV       @;   â   =   : Q;   T R   QV  V   ?7#0   QV  ÐÈw{ÓÉ	ÈÍ    HEADER_PATTERN	   exec   dumpv5   Header matches JSON packet   JSONPacket   length   ÿÿÿÿ   	   .getÁ                          ¹                                                            A5        _object   ÿÿÿÿ   	   .setÁ               N       ¹                                             object	   data t  %               AT  0    Q;   ¸   
T  :    QA;   ¸   
V   : 0   QAA5   Ù   0   QÊÏÈÑÉÒ     _object	   JSON   stringify   _data!   unicodeConverter%   ConvertFromUnicode   length   ÿÿÿÿ   3   JSONPacket.prototype.readÁ                    ¹      K                                    stream!   scriptableStream	   json  O  ª         	      ;    â    =   : QA¸   
T  T : QA5       A5      Q;   ¸   
V   : W   QA;   ¸   	
V   : 0   Q     Q  Qv  Q=   
V   =   V  =   V  5   =     Q;   5      ;   ¸   
V  : Q;   â   V  : QÈÈ    A5   ¸   
A5   : QÓÒË3ÐÈÑÎÒÕÛÊÔÒË×1    dumpv'   Reading JSON packet   _readData	   done   _data!   unicodeConverter!   ConvertToUnicode   _object	   JSON   parse?   Error parsing incoming packet:     (    -    stack   )   Cu   reportError   dumpn   _transport%   _onJSONObjectReady    ÿÿÿÿ         e       msg         ?   7       x   z   ÿÿÿÿÿÿÿÿð             ÿÿÿÿ   =   JSONPacket.prototype._readDataÁ               »       ¹      3                                       stream!   scriptableStream   bytesToRead  Õ  h  ²       	      ;    5      E;    â    =   AÙ   =   A5   Ù   =   T  ¸   
:  : Q;   ¸   	
AÙ   A5   Ù   T  ¸   
:  :    QA5   T ¸   

V   : 0   QAA5   Ù   AÙ   H0   QÊÜÜ(  ´ÞÊ  ·ÈÕ{Ù/    dumpv   wantVerbose/   Reading JSON data: _l:    length    dL:    _data    sA:    available	   Math   min   readBytes   _done   ÿÿÿÿ   5   JSONPacket.prototype.writeÁ                      ¹   
   &                                       stream   written   ê  ½             ;    â    =   : QA5   ;   H   AAÙ   =   A5   0   QT  ¸   
A5   A5   Ù   :    QAA5   ¸   
V   : 0   QAA5   Ù    0   	QÓÌÚÛ
ÈÒÉÒ    dumpv'   Writing JSON packet   _outgoing   undefined   length   :   _data   write   slice   _done   ÿÿÿÿ   	   .getÁ                          ¹                                           1  J  Ë             A5        _done   ÿÿÿÿ   ;   JSONPacket.prototype.toStringÁ                          ¹      	                                     x  ®  Î             ;    ¸   
A5   @×: Õ& 	   JSON   stringify   _object   ÿÿÿÿ      BulkPacket                 3       ¹                                             transport ~  î  ã             ;    ¸   
AT  l QAB0   QA;   ¸   
:  0   QÔÈÍÉ    Packet	   call   _done!   _readyForWriting   promise   defer   ÿÿÿÿ   +   BulkPacket.fromHeaderÁ                      ¹   	   5                           
            header   transport   match   packet    ©  ó             A5    ¸   
T  :    QV       @;   â   =   : Q;   T R   QV  Y   V   ?7]   V   ×7]   V   ×7#]   0   QV  ÐÈÓÉ	ÈÉËÌÓ    HEADER_PATTERN	   exec   dumpv5   Header matches bulk packet   BulkPacket   header   actor	   type   length   ÿÿÿÿ   3   BulkPacket.prototype.readÁ                Ã       ¹      [                                D      stream   deferredI  Ú"              ;    â    =   : QA5   ¸   
:  Q;   ¸   
:     QA5   ¸   
Y   A5   ]   A5   ]   AÙ   	]   	A    ]   
   ]      ]   : Q   5   ¸   
A   A5   5   : QAA   0   QÓÑÌÉÒËËËË ÊÊ  ×Ë  &Í    dumpv[   Reading bulk packet, handing off input stream   _transport   pauseIncoming   promise   defer!   _onBulkReadReady   actor	   type   length   copyTo   stream	   done	   then   close	   read   ÿÿÿÿ   E   BulkPacket.prototype.read/<.copyToÅ               [       ¹                                             output   copying    ?!        	      ;    â    =   AÙ   : Q;   ¸   
   T  AÙ   :    Q      ¸   
V   : QV   Ú
Ú
ÈÙ    dumpv   CT length:    length   StreamUtils   copyStream   resolve   ÿÿÿÿ   7   BulkPacket.prototype.read/<Å                   -       ¹                                           ¸!  2"              ;    â    =   : QAC0   QA5   ¸   
:  QÓÈÑ!    dumpvG   onReadDone called, ending bulk mode   _done   _transport   resumeIncoming   ÿÿÿÿ   G   BulkPacket.prototype.read/this.readÅ                          ¹      	                                     ~"  ×"  &            ;    =   R pËC    Errork   Tried to read() a BulkPacket's stream multiple times.   ÿÿÿÿ   5   BulkPacket.prototype.writeÁ               z      ¹                               )      D      stream   deferred#  µ(  +            ;    â    =   : QA5   ;   H   K;    â    =   : QA=   A5   =   A5   =   AÙ   	=   
0   QA5   Ù   	   c   Q;    â    =   : Q   ¸   
A5   A5   Ù   	:    QAA5   ¸   
V   : 0   QÈÈ;    â    =   : QA5   ¸   
:  Q;   ¸   
:     QA5   ¸   
Y   A   ]      ]      ]   : Q   5   ¸   
A   A5   5   : QAA   0   QÓÌÓàÓËËÓÒË 8ÈÒÉÓÑÌÉÒË LÊÊ E Q×Ë Q XÍ    dumpv'   Writing bulk packet   _outgoingHeader   undefined=   Serializing bulk packet header   bulk    actor    	   type   length   :5   Writing bulk packet header   write   slice3   Handing off output stream   _transport   pauseOutgoing   promise   defer!   _readyForWriting   resolve   copyFrom   stream	   done	   then   close    ÿÿÿÿ          written       ÿÿÿÿ   K   BulkPacket.prototype.write/<.copyFromÅ               [       ¹                                             input   copying ^&  '  F      	      ;    â    =   AÙ   : Q;   ¸   
T     AÙ   :    Q      ¸   
V   : QV   Ú
Ú
ÈÙ    dumpv   CF length:    length   StreamUtils   copyStream   resolve   ÿÿÿÿ   9   BulkPacket.prototype.write/<Å                   -       ¹                                           '  (  Q            ;    â    =   : QAC0   QA5   ¸   
:  QÓÈÑ!    dumpvI   onWriteDone called, ending bulk mode   _done   _transport   resumeOutgoing   ÿÿÿÿ   K   BulkPacket.prototype.write/this.writeÅ                          ¹      	                                     X(  ²(  X            ;    =   R pËD    Errorm   Tried to write() a BulkPacket's stream multiple times.    {   ]   ÿÿÿÿÿÿÿÿÖ             ÿÿÿÿ   	   .getÁ                          ¹                                           )  ?)  ^            A5    5   Ì% !   _readyForWriting   promise   ÿÿÿÿ   	   .getÁ                   (       ¹                                           )  ò)  d            Y   A5    ]    A5   ]   AÙ   ]   ËËÌ    actor	   type   length   ÿÿÿÿ   	   .setÁ                 .       ¹                                             header *  o*  l            AT  5    0    QAT  5   0   QAT  Ù   0   QÏÏÏ    actor	   type   length   ÿÿÿÿ   	   .getÁ                          ¹                                           »*  Ô*  t            A5        _done   ÿÿÿÿ   ;   BulkPacket.prototype.toStringÁ                           ¹      	                                     +  D+  x            =    ;   ¸   
A5   @×: Ú%    Bulk: 	   JSON   stringify   header   ÿÿÿÿ      RawPacket                 6       ¹                                             transport	   data  ®,  +-              ;    ¸   
AT  l QAT 0   QAT Ù   0   QAB0   QÔÊÏÈ    Packet	   call   _data   length   _done   ÿÿÿÿ   1   RawPacket.prototype.readÁ                        ¹      
                                       stream -  ä-              ;    â    =   : pÏ    Error   Not implmented.   ÿÿÿÿ   3   RawPacket.prototype.writeÁ               R       ¹                                 
            stream   written 
.   .              T  ¸    
A5   A5   Ù   :    QAA5   ¸   
V   : 0   QAA5   Ù    0   QÛ
ÈÒÉÒ    write   _data   length   slice   _done   ÿÿÿÿ   	   .getÁ                          ¹                                           æ.  ÿ.              A5        _done   ^(\d+):$    ?   ^bulk ([^: ]+) ([^: ]+) (\d+):$    