;/*FB_PKG_DELIM*/

__d("LSAddParticipantIdToGroupThread",["LSComputeParticipantCapabilities"],(function(a,b,c,d,e,f){function a(){var a=arguments,c=a[a.length-1],d=[],e=[];return c.sequence([function(e){return c.sequence([function(e){return c.storedProcedure(b("LSComputeParticipantCapabilities"),a[1],a[0]).then(function(a){return a=a,d[0]=a[0],a})},function(b){return c.filter(c.db.table(14).fetch([[[a[0],a[1]]]]),function(b){return c.i64.eq(b.threadKey,a[0])&&c.i64.eq(c.i64.cast([0,0]),c.i64.cast([0,0]))&&c.i64.eq(b.contactId,a[1])&&c.i64.gt(b.authorityLevel,a[9])}).next().then(function(b){var e=b.done;b.value;return e?c.db.table(14).put({threadKey:a[0],contactId:a[1],readWatermarkTimestampMs:a[2],readActionTimestampMs:a[3],deliveredWatermarkTimestampMs:a[4],nickname:a[5],normalizedSearchTerms:a[10],isAdmin:a[6],isSuperAdmin:a[13],subscribeSource:a[7],authorityLevel:a[9],participantCapabilities:d[0],groupParticipantJoinState:a[11],isModerator:a[12],threadRoles:a[14]}):0})}])},function(a){return c.resolve(e)}])}a.__sproc_name__="LSMailboxAddParticipantIdToGroupThreadStoredProcedure";e.exports=a}),null);
__d("LSClearLoadingFlagsForThreadRange",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1],c=[],d=[];return b.sequence([function(d){return a[1]?b.forEach(b.db.table(10).fetch([[[a[0]]]]),function(a){var b=a.update;a.item;return b({isLoadingAfter:!1})}):b.sequence([function(d){return b.i64.eq(b.i64.cast([0,0]),a[0])?b.sequence([function(c){return b.forEach(b.db.table(198).fetch([[[a[2]]]]),function(a){var b=a.update;a.item;return b({isLoadingBefore:!1})})},function(a){return c[8]=b.i64.cast([0,0]),c[9]=void 0,c[10]=!1,c[11]=!1,b.forEach(b.db.table(198).fetch(),function(a){a=a.item;return c[12]=a.minLastActivityTimestampMs,c[14]=a.minThreadKey,c[13]=b.i64.lt(c[8]==null?c[12]:c[8],c[12]),c[8]=c[13]?c[12]:c[8],c[9]=c[13]?c[14]:c[9],c[10]=c[10]||a.isLoadingBefore,c[11]=c[11]||b.i64.gt(c[12],b.i64.cast([0,1]))&&b.i64.gt(c[14],b.i64.cast([-2147483648,0]))})},function(a){return a=[c[8],c[9],c[10],c[11]],c[0]=a[0],c[1]=a[1],c[2]=a[2],c[3]=a[3],a}]):b.resolve((d=[b.i64.cast([0,0]),void 0,!1,!1],c[0]=d[0],c[1]=d[1],c[2]=d[2],c[3]=d[3],d))},function(c){return b.forEach(b.db.table(220).fetch([[[a[2],a[0]]]]),function(a){var b=a.update;a.item;return b({isLoadingBefore:!1})})},function(d){return c[4]=c[0],c[5]=c[1],c[6]=c[2],c[7]=c[3],b.forEach(b.filter(b.db.table(220).fetch(),function(c){return b.i64.eq(c.parentThreadKey,a[0])}),function(a){a=a.item;return c[8]=a.minLastActivityTimestampMs,c[10]=a.minThreadKey,c[9]=b.i64.lt(c[4]==null?c[8]:c[4],c[8]),c[4]=c[9]?c[8]:c[4],c[5]=c[9]?c[10]:c[5],c[6]=c[6]||a.isLoadingBefore,c[7]=c[7]||b.i64.gt(c[8],b.i64.cast([0,1]))&&b.i64.gt(c[10],b.i64.cast([-2147483648,0]))})},function(d){return b.forEach(b.db.table(10).fetch([[[a[0]]]]),function(a){var b=a.update;a.item;return b({isLoadingBefore:c[6]})})}])},function(a){return b.resolve(d)}])}a.__sproc_name__="LSMailboxClearLoadingFlagsForThreadRangeStoredProcedure";e.exports=a}),null);
__d("LSClearPinnedMessages",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1],c=[];return b.sequence([function(c){return b.forEach(b.db.table(205).fetch([[[a[0]]]]),function(a){return a["delete"]()})},function(a){return b.resolve(c)}])}a.__sproc_name__="LSMailboxClearPinnedMessagesStoredProcedure";e.exports=a}),null);
__d("LSIssueThreadCapabilitySyncTask",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1],c=[];return b.resolve(c)}a.__sproc_name__="LSMailboxIssueThreadCapabilitySyncTaskStoredProcedure";e.exports=a}),null);
__d("LSSetHMPSStatus",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1],c=[];return b.resolve(c)}a.__sproc_name__="LSMailboxSetHMPSStatusStoredProcedure";e.exports=a}),null);
__d("LSUpsertInboxThreadsRange",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1],c=[];return b.sequence([function(c){return b.db.table(198).put({syncGroup:a[0],minLastActivityTimestampMs:a[1],hasMoreBefore:a[2],isLoadingBefore:a[3],minThreadKey:a[4]})},function(a){return b.resolve(c)}])}a.__sproc_name__="LSMailboxUpsertInboxThreadsRangeStoredProcedure";e.exports=a}),null);
__d("LSUpsertSyncGroupThreadsRange",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1],c=[];return b.sequence([function(c){return b.db.table(220).put({syncGroup:a[0],parentThreadKey:a[1],minLastActivityTimestampMs:a[2],hasMoreBefore:a[3],isLoadingBefore:a[4],minThreadKey:a[5]})},function(a){return b.resolve(c)}])}a.__sproc_name__="LSMailboxUpsertSyncGroupThreadsRangeStoredProcedure";e.exports=a}),null);
__d("LSThreadsRangesQuery",["LSClearLoadingFlagsForThreadRange","LSGetCursor","LSIssueNewTaskAndGetTaskID","LSUpsertInboxThreadsRange","LSUpsertSyncGroupThreadsRange"],(function(a,b,c,d,e,f){function a(){var a=arguments,c=a[a.length-1],d=[],e=[];return c.sequence([function(e){return c.sequence([function(e){return a[1]&&c.i64.eq(a[6],c.i64.cast([0,0]))?c.storedProcedure(b("LSClearLoadingFlagsForThreadRange"),a[0],!1,c.i64.cast([0,1])):(a[1]&&c.i64.neq(a[6],void 0)&&c.i64.neq(a[3],void 0)||a[2]&&c.i64.neq(a[5],void 0)&&c.i64.neq(a[4],void 0))&&!(a[1]&&c.i64.neq(a[6],void 0)&&c.i64.neq(a[3],void 0)&&a[2]&&c.i64.neq(a[5],void 0)&&c.i64.neq(a[4],void 0))?c.sequence([function(e){return d[16]=a[3]==null?c.i64.cast([-2147483648,0]):a[3],d[15]=a[6]==null?c.i64.cast([0,1]):a[6],d[17]=c.i64.gt(d[15],c.i64.cast([0,1]))&&c.i64.gt(d[16],c.i64.cast([-2147483648,0])),d[4]=c.i64.eq(c.i64.cast([0,1]),c.i64.cast([0,1]))||c.i64.eq(c.i64.cast([0,1]),c.i64.cast([0,95])),d[4]&&c.i64.eq(a[0],c.i64.cast([0,0]))?c.sequence([function(a){return c.storedProcedure(b("LSUpsertInboxThreadsRange"),c.i64.cast([0,1]),d[15],d[17],!0,d[16])},function(a){return d[18]=d[15],d[19]=d[16],d[20]=!0,d[21]=d[17],c.forEach(c.db.table(198).fetch(),function(a){a=a.item;return d[22]=a.minLastActivityTimestampMs,d[24]=a.minThreadKey,d[23]=c.i64.lt(d[18]==null?d[22]:d[18],d[22]),d[18]=d[23]?d[22]:d[18],d[19]=d[23]?d[24]:d[19],d[20]=d[20]||a.isLoadingBefore,d[21]=d[21]||c.i64.gt(d[22],c.i64.cast([0,1]))&&c.i64.gt(d[24],c.i64.cast([-2147483648,0]))})},function(a){return a=[d[18],d[19],d[20],d[21]],d[0]=a[0],d[1]=a[1],d[2]=a[2],d[3]=a[3],a}]):c.resolve((e=[d[15],d[16],!0,d[17]],d[0]=e[0],d[1]=e[1],d[2]=e[2],d[3]=e[3],e))},function(e){return d[4]?c.sequence([function(e){return c.storedProcedure(b("LSUpsertSyncGroupThreadsRange"),c.i64.cast([0,1]),a[0],d[15],d[17],!0,d[16])},function(b){return d[18]=d[15],d[19]=d[16],d[20]=!0,d[21]=d[17],c.forEach(c.filter(c.db.table(220).fetch(),function(b){return c.i64.eq(b.parentThreadKey,a[0])}),function(a){a=a.item;return d[22]=a.minLastActivityTimestampMs,d[24]=a.minThreadKey,d[23]=c.i64.lt(d[18]==null?d[22]:d[18],d[22]),d[18]=d[23]?d[22]:d[18],d[19]=d[23]?d[24]:d[19],d[20]=d[20]||a.isLoadingBefore,d[21]=d[21]||c.i64.gt(d[22],c.i64.cast([0,1]))&&c.i64.gt(d[24],c.i64.cast([-2147483648,0]))})},function(a){return a=[d[18],d[19],d[20],d[21]],d[5]=a[0],d[6]=a[1],d[7]=a[2],d[8]=a[3],a}]):c.resolve((e=[d[0],d[1],d[2],d[3]],d[5]=e[0],d[6]=e[1],d[7]=e[2],d[8]=e[3],e))},function(a){return c.storedProcedure(b("LSGetCursor"),c.i64.cast([0,1])).then(function(a){return a=a,d[9]=a[0],a})},function(e){return d[10]=new c.Map(),d[10].set("is_after",a[2]),d[10].set("parent_thread_key",a[0]),d[10].set("reference_thread_key",a[2]?a[4]:a[3]),d[10].set("reference_activity_timestamp",a[2]?a[5]:a[6]),d[10].set("additional_pages_to_fetch",a[7]),d[10].set("cursor",d[9]),d[10].set("messaging_tag",void 0),d[10].set("sync_group",c.i64.cast([0,1])),c.i64.gt(c.i64.cast([0,0]),c.i64.cast([0,0]))?(d[18]=c.i64.of_float(Date.now()),d[11]=c.i64.add(d[18],c.i64.cast([0,0]))):d[11]=c.i64.cast([0,0]),d[12]=c.toJSON(d[10]),c.storedProcedure(b("LSIssueNewTaskAndGetTaskID"),"trq",c.i64.cast([0,145]),d[12],void 0,void 0,c.i64.cast([0,0]),c.i64.cast([0,0]),void 0,void 0,d[11],c.i64.cast([0,0])).then(function(a){return a=a,d[13]=a[0],a})},function(b){return c.db.table(10).fetch([[[a[0]]]]).next().then(function(b,e){e=b.done;b=b.value;return e?c.db.table(10).add({parentThreadKey:a[0],minThreadKey:d[6]==null?c.i64.cast([-2147483648,0]):d[6],minLastActivityTimestampMs:d[5]==null?c.i64.cast([0,1]):d[5],maxLastActivityTimestampMs:c.i64.cast([0,1]),maxThreadKey:c.i64.cast([-2147483648,0]),isLoadingBefore:d[7],isLoadingAfter:!1,hasMoreBefore:d[8],hasMoreAfter:!1}):(b.item,c.forEach(c.db.table(10).fetch([[[a[0]]]]),function(a){var b=a.update;a.item;return b({isLoadingBefore:d[7],isLoadingAfter:!1,hasMoreBefore:d[8],hasMoreAfter:!1})}))})}]):c.resolve()},function(e){return a[1]&&c.i64.eq(a[6],c.i64.cast([0,0]))?c.storedProcedure(b("LSClearLoadingFlagsForThreadRange"),a[0],!1,c.i64.cast([0,95])):(a[1]&&c.i64.neq(a[6],void 0)&&c.i64.neq(a[3],void 0)||a[2]&&c.i64.neq(a[5],void 0)&&c.i64.neq(a[4],void 0))&&!(a[1]&&c.i64.neq(a[6],void 0)&&c.i64.neq(a[3],void 0)&&a[2]&&c.i64.neq(a[5],void 0)&&c.i64.neq(a[4],void 0))?c.sequence([function(e){return d[16]=a[3]==null?c.i64.cast([-2147483648,0]):a[3],d[15]=a[6]==null?c.i64.cast([0,1]):a[6],d[17]=c.i64.gt(d[15],c.i64.cast([0,1]))&&c.i64.gt(d[16],c.i64.cast([-2147483648,0])),d[4]=c.i64.eq(c.i64.cast([0,95]),c.i64.cast([0,1]))||c.i64.eq(c.i64.cast([0,95]),c.i64.cast([0,95])),d[4]&&c.i64.eq(a[0],c.i64.cast([0,0]))?c.sequence([function(a){return c.storedProcedure(b("LSUpsertInboxThreadsRange"),c.i64.cast([0,95]),d[15],d[17],!0,d[16])},function(a){return d[18]=d[15],d[19]=d[16],d[20]=!0,d[21]=d[17],c.forEach(c.db.table(198).fetch(),function(a){a=a.item;return d[22]=a.minLastActivityTimestampMs,d[24]=a.minThreadKey,d[23]=c.i64.lt(d[18]==null?d[22]:d[18],d[22]),d[18]=d[23]?d[22]:d[18],d[19]=d[23]?d[24]:d[19],d[20]=d[20]||a.isLoadingBefore,d[21]=d[21]||c.i64.gt(d[22],c.i64.cast([0,1]))&&c.i64.gt(d[24],c.i64.cast([-2147483648,0]))})},function(a){return a=[d[18],d[19],d[20],d[21]],d[0]=a[0],d[1]=a[1],d[2]=a[2],d[3]=a[3],a}]):c.resolve((e=[d[15],d[16],!0,d[17]],d[0]=e[0],d[1]=e[1],d[2]=e[2],d[3]=e[3],e))},function(e){return d[4]?c.sequence([function(e){return c.storedProcedure(b("LSUpsertSyncGroupThreadsRange"),c.i64.cast([0,95]),a[0],d[15],d[17],!0,d[16])},function(b){return d[18]=d[15],d[19]=d[16],d[20]=!0,d[21]=d[17],c.forEach(c.filter(c.db.table(220).fetch(),function(b){return c.i64.eq(b.parentThreadKey,a[0])}),function(a){a=a.item;return d[22]=a.minLastActivityTimestampMs,d[24]=a.minThreadKey,d[23]=c.i64.lt(d[18]==null?d[22]:d[18],d[22]),d[18]=d[23]?d[22]:d[18],d[19]=d[23]?d[24]:d[19],d[20]=d[20]||a.isLoadingBefore,d[21]=d[21]||c.i64.gt(d[22],c.i64.cast([0,1]))&&c.i64.gt(d[24],c.i64.cast([-2147483648,0]))})},function(a){return a=[d[18],d[19],d[20],d[21]],d[5]=a[0],d[6]=a[1],d[7]=a[2],d[8]=a[3],a}]):c.resolve((e=[d[0],d[1],d[2],d[3]],d[5]=e[0],d[6]=e[1],d[7]=e[2],d[8]=e[3],e))},function(a){return c.storedProcedure(b("LSGetCursor"),c.i64.cast([0,95])).then(function(a){return a=a,d[9]=a[0],a})},function(e){return d[10]=new c.Map(),d[10].set("is_after",a[2]),d[10].set("parent_thread_key",a[0]),d[10].set("reference_thread_key",a[2]?a[4]:a[3]),d[10].set("reference_activity_timestamp",a[2]?a[5]:a[6]),d[10].set("additional_pages_to_fetch",a[7]),d[10].set("cursor",d[9]),d[10].set("messaging_tag",void 0),d[10].set("sync_group",c.i64.cast([0,95])),c.i64.gt(c.i64.cast([0,0]),c.i64.cast([0,0]))?(d[18]=c.i64.of_float(Date.now()),d[11]=c.i64.add(d[18],c.i64.cast([0,0]))):d[11]=c.i64.cast([0,0]),d[12]=c.toJSON(d[10]),c.storedProcedure(b("LSIssueNewTaskAndGetTaskID"),"trq",c.i64.cast([0,145]),d[12],void 0,void 0,c.i64.cast([0,0]),c.i64.cast([0,0]),void 0,void 0,d[11],c.i64.cast([0,0])).then(function(a){return a=a,d[13]=a[0],a})},function(b){return c.db.table(10).fetch([[[a[0]]]]).next().then(function(b,e){e=b.done;b=b.value;return e?c.db.table(10).add({parentThreadKey:a[0],minThreadKey:d[6]==null?c.i64.cast([-2147483648,0]):d[6],minLastActivityTimestampMs:d[5]==null?c.i64.cast([0,1]):d[5],maxLastActivityTimestampMs:c.i64.cast([0,1]),maxThreadKey:c.i64.cast([-2147483648,0]),isLoadingBefore:d[7],isLoadingAfter:!1,hasMoreBefore:d[8],hasMoreAfter:!1}):(b.item,c.forEach(c.db.table(10).fetch([[[a[0]]]]),function(a){var b=a.update;a.item;return b({isLoadingBefore:d[7],isLoadingAfter:!1,hasMoreBefore:d[8],hasMoreAfter:!1})}))})}]):c.resolve()}])},function(a){return c.resolve(e)}])}a.__sproc_name__="LSMailboxThreadsRangesQueryStoredProcedure";e.exports=a}),null);
__d("LSTruncateMetadataThreads.nop",["Promise"],(function(a,b,c,d,e,f){"use strict";var g;a=function(a,c){return(g||(g=b("Promise"))).resolve()};f["default"]=a}),66);
__d("LSTruncateMetadataThreads",["LSTruncateMetadataThreads.nop"],(function(a,b,c,d,e,f){function a(){var a=arguments,c=a[a.length-1],d=[];return c.sequence([function(a){return c.nativeOperation(b("LSTruncateMetadataThreads.nop"))},function(a){return c.resolve(d)}])}a.__sproc_name__="LSE2EEMessagingMetadataMailboxTruncateMetadataThreadsStoredProcedure";e.exports=a}),null);
__d("LSTruncateThreadRangeTablesForSyncGroup",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1],c=[];return b.sequence([function(c){return b.sequence([function(c){return b.i64.eq(a[0],b.i64.cast([0,1]))?b.forEach(b.filter(b.db.table(10).fetch(),function(a){return b.i64.eq(b.i64.cast([0,1])==null?b.i64.cast([0,1]):b.i64.cast([0,1]),b.i64.cast([0,1]))}),function(a){return a["delete"]()}):b.i64.eq(a[0],b.i64.cast([0,95]))?b.forEach(b.filter(b.db.table(10).fetch([[[b.i64.cast([0,0])],[b.i64.cast([-1,4294967295])]]]),function(a){return b.i64.eq(b.i64.cast([0,1])==null?b.i64.cast([0,1]):b.i64.cast([0,1]),b.i64.cast([0,1]))&&(b.i64.eq(a.parentThreadKey,b.i64.cast([0,0]))||b.i64.eq(a.parentThreadKey,b.i64.cast([-1,4294967295])))}),function(a){return a["delete"]()}):b.resolve(0)},function(c){return b.i64.eq(a[0],b.i64.cast([0,1]))?b.forEach(b.filter(b.db.table(247).fetch(),function(a){return b.i64.eq(a.syncGroup==null?b.i64.cast([0,1]):a.syncGroup,b.i64.cast([0,1]))}),function(a){return a["delete"]()}):b.resolve()},function(c){return b.forEach(b.db.table(198).fetch([[[a[0]]]]),function(a){return a["delete"]()})},function(c){return b.forEach(b.db.table(220).fetch([[[a[0]]]]),function(a){return a["delete"]()})}])},function(a){return b.resolve(c)}])}a.__sproc_name__="LSMailboxTruncateThreadRangeTablesForSyncGroupStoredProcedure";e.exports=a}),null);
__d("LSTruncateTablesForSyncGroup",["LSTruncateThreadRangeTablesForSyncGroup"],(function(a,b,c,d,e,f){function a(){var a=arguments,c=a[a.length-1],d=[];return c.sequence([function(d){return c.sequence([function(b){return c.forEach(c.filter(c.db.table(9).fetch(),function(b){return(c.i64.eq(b.syncGroup,a[0])||c.i64.eq(b.syncGroup,void 0)&&c.i64.eq(c.i64.cast([0,1]),a[0]))&&![c.i64.cast([0,17]),c.i64.cast([0,18]),c.i64.cast([0,19]),c.i64.cast([0,20]),c.i64.cast([0,21]),c.i64.cast([0,22]),c.i64.cast([0,23]),c.i64.cast([0,24]),c.i64.cast([0,25]),c.i64.cast([0,26])].some(function(a){return c.i64.eq(b.threadType,a)})}),function(a){return a["delete"]()})},function(d){return c.storedProcedure(b("LSTruncateThreadRangeTablesForSyncGroup"),a[0])}])},function(a){return c.resolve(d)}])}a.__sproc_name__="LSMailboxTruncateTablesForSyncGroupStoredProcedure";e.exports=a}),null);
__d("LSUpdateThreadsRangesV2",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1],c=[],d=[];return b.sequence([function(d){return b.sequence([function(c){return b.forEach(b.db.table(10).fetch([[[a[1]]]]),function(a){return a["delete"]()})},function(d){return c[8]=b.i64.gt(a[2],b.i64.cast([0,1]))&&b.i64.gt(a[3],b.i64.cast([-2147483648,0])),a[0]==="inbox"&&b.i64.eq(a[1],b.i64.cast([0,0]))&&b.i64.eq(a[4],b.i64.cast([0,1]))?b.sequence([function(d){return c[9]=a[2],c[10]=a[3],c[11]=!1,c[12]=c[8],b.forEach(b.db.table(198).fetch(),function(a){a=a.item;return c[13]=a.minLastActivityTimestampMs,c[15]=a.minThreadKey,c[14]=b.i64.lt(c[9]==null?c[13]:c[9],c[13]),c[9]=c[14]?c[13]:c[9],c[10]=c[14]?c[15]:c[10],c[11]=c[11]||a.isLoadingBefore,c[12]=c[12]||b.i64.gt(c[13],b.i64.cast([0,1]))&&b.i64.gt(c[15],b.i64.cast([-2147483648,0]))})},function(a){return a=[c[9],c[10],c[11],c[12]],c[0]=a[0],c[1]=a[1],c[2]=a[2],c[3]=a[3],a}]):b.resolve((d=[a[2],a[3],!1,c[8]],c[0]=d[0],c[1]=d[1],c[2]=d[2],c[3]=d[3],d))},function(d){return b.i64.eq(a[4],b.i64.cast([0,1]))?b.sequence([function(d){return c[9]=c[0],c[10]=c[1],c[11]=c[2],c[12]=c[3],b.forEach(b.filter(b.db.table(220).fetch(),function(c){return b.i64.eq(c.parentThreadKey,a[1])}),function(a){a=a.item;return c[13]=a.minLastActivityTimestampMs,c[15]=a.minThreadKey,c[14]=b.i64.lt(c[9]==null?c[13]:c[9],c[13]),c[9]=c[14]?c[13]:c[9],c[10]=c[14]?c[15]:c[10],c[11]=c[11]||a.isLoadingBefore,c[12]=c[12]||b.i64.gt(c[13],b.i64.cast([0,1]))&&b.i64.gt(c[15],b.i64.cast([-2147483648,0]))})},function(a){return a=[c[9],c[10],c[11],c[12]],c[4]=a[0],c[5]=a[1],c[6]=a[2],c[7]=a[3],a}]):b.resolve((d=[c[0],c[1],c[2],c[3]],c[4]=d[0],c[5]=d[1],c[6]=d[2],c[7]=d[3],d))},function(d){return b.db.table(10).add({parentThreadKey:a[1],minThreadKey:c[5]==null?b.i64.cast([-2147483648,0]):c[5],minLastActivityTimestampMs:c[4]==null?b.i64.cast([0,1]):c[4],maxLastActivityTimestampMs:b.i64.cast([0,1]),maxThreadKey:b.i64.cast([-2147483648,0]),isLoadingBefore:c[6],isLoadingAfter:!1,hasMoreBefore:c[7],hasMoreAfter:!1})}])},function(a){return b.resolve(d)}])}a.__sproc_name__="LSMailboxUpdateThreadsRangesV2StoredProcedure";e.exports=a}),null);
__d("LSUpsertFolderSeenTimestamp",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1],c=[];return b.sequence([function(c){return b.i64.gt(a[1],b.i64.cast([0,0]))?b.db.table(35).fetch([[[a[0]]]]).next().then(function(c,d){var e=c.done;c=c.value;return e?b.db.table(35).add({parentThreadKey:a[0],lastSeenRequestTimestampMs:a[1]}):(d=c.item,b.i64.lt(d.lastSeenRequestTimestampMs,a[1])?b.forEach(b.db.table(35).fetch([[[a[0]]]]),function(b){var c=b.update;b.item;return c({lastSeenRequestTimestampMs:a[1]})}):b.resolve())}):b.resolve()},function(a){return b.resolve(c)}])}a.__sproc_name__="LSMailboxUpsertFolderSeenTimestampStoredProcedure";e.exports=a}),null);
__d("LSWriteThreadCapabilities",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1],c=[],d=[];return b.sequence([function(d){return c[0]=b.i64.of_float(Date.now()),b.forEach(b.db.table(9).fetch([[[a[0]]]]),function(b){var c=b.update;b.item;return c({capabilities:a[1],capabilities2:a[2],capabilities3:a[3],capabilities4:a[4]})})},function(a){return b.resolve(d)}])}a.__sproc_name__="LSMailboxWriteThreadCapabilitiesStoredProcedure";e.exports=a}),null);