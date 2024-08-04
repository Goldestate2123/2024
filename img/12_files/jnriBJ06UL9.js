;/*FB_PKG_DELIM*/

__d("LSIssueNewTaskWithExtraOperationsAndGetTaskID",["LSIssueNewTaskAndGetTaskID","LSMailboxTaskCompletionApiOnTaskInsertion"],(function(a,b,c,d,e,f){function a(){var a=arguments,c=a[a.length-1],d=[],e=[];return c.sequence([function(f){return c.sequence([function(e){return c.storedProcedure(b("LSIssueNewTaskAndGetTaskID"),a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7],a[8],a[9],c.i64.cast([0,0])).then(function(a){return a=a,d[0]=a[0],a})},function(a){return c.storedProcedure(b("LSMailboxTaskCompletionApiOnTaskInsertion"),d[0])},function(a){return e[0]=d[0]}])},function(a){return c.resolve(e)}])}a.__sproc_name__="LSCoreIssueNewTaskWithExtraOperationsAndGetTaskIDStoredProcedure";e.exports=a}),null);
__d("LSUpdateMessageSubThreadKey",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1],c=[];return b.sequence([function(c){return b.forEach(b.db.table(12).fetch([[[a[0]]],"messageId"]),function(b){var c=b.update;b.item;return c({subthreadKey:a[1]})})},function(a){return b.resolve(c)}])}a.__sproc_name__="LSMailboxUpdateMessageSubThreadKeyStoredProcedure";e.exports=a}),null);
__d("LSUpdateOrInsertReactionV2",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1],c=[],d=[];return b.sequence([function(d){return b.db.table(226).fetch([[[a[0],a[1],a[2]]]]).next().then(function(d,e){var f=d.done;d=d.value;return f?b.db.table(12).fetch([[[a[1]]],"messageId"]).next().then(function(d,e){var c=d.done;d=d.value;return c?0:(e=d.item,b.sequence([function(c){return b.forEach(b.filter(b.db.table(226).fetch([[[a[0],a[1],a[2]]],"optimistic"]),function(c){return b.i64.eq(c.threadKey,a[0])&&c.messageId===a[1]&&b.i64.eq(c.reactionFbid,a[2])&&b.i64.lt(c.authorityLevel,a[5])}),function(a){return a["delete"]()})},function(c){return b.db.table(226).add({messageId:a[1],threadKey:a[0],reactionFbid:a[2],messageTimestamp:e.timestampMs,authorityLevel:a[5],count:a[4],viewerIsReactor:a[6],viewerReactionTimestampMs:a[7],lastUpdatedTimestampMs:a[8]})}]))}):(e=d.item,c[2]=e.lastUpdatedTimestampMs,c[1]=e.authorityLevel,b.i64.eq(a[5],b.i64.cast([0,20]))||b.i64.eq(c[1],b.i64.cast([0,80]))&&b.i64.eq(a[5],b.i64.cast([0,80]))||b.i64.eq(c[1],b.i64.cast([0,20]))&&b.i64.eq(a[5],b.i64.cast([0,80]))&&b.i64.le(b.i64.add(c[2],b.i64.cast([0,2e3])),a[8])||b.i64.eq(c[1],b.i64.cast([0,20]))&&b.i64.eq(a[5],b.i64.cast([0,60]))||b.i64.eq(c[1],b.i64.cast([0,60]))&&b.i64.eq(a[5],b.i64.cast([0,80]))&&b.i64.le(c[2],a[8])?c[3]=!0:c[3]=!1,c[3]?b.db.table(226).put({messageId:a[1],threadKey:a[0],reactionFbid:a[2],messageTimestamp:e.messageTimestamp,reactionLiteral:a[3],count:a[4],authorityLevel:a[5],viewerIsReactor:a[6],viewerReactionTimestampMs:b.i64.cast([0,0]),lastUpdatedTimestampMs:a[8]}):b.resolve())})},function(a){return b.resolve(d)}])}a.__sproc_name__="LSMailboxUpdateOrInsertReactionV2StoredProcedure";e.exports=a}),null);
__d("LSUpsertReaction",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1],c=[];return b.sequence([function(c){return b.db.table(8).put({threadKey:a[0],messageId:a[2],actorId:a[3],timestampMs:a[1],reaction:a[4],authorityLevel:a[5],reactionCreationTimestampMs:a[6]})},function(a){return b.resolve(c)}])}a.__sproc_name__="LSMailboxUpsertReactionStoredProcedure";e.exports=a}),null);
__d("MAWGetImageSpec",["MAWImageUtils","asyncToGeneratorRuntime"],(function(a,b,c,d,e,f,g){"use strict";function c(b,c){var e=a.URL.createObjectURL(b);return d("MAWImageUtils").urlToFile(e,(e=c)!=null?e:b.type).then(function(a){var b=a.height;a=a.width;return{height:b,width:a}})}function e(a){return h.apply(this,arguments)}function h(){h=b("asyncToGeneratorRuntime").asyncToGenerator(function*(b){b=a.URL.createObjectURL(b);var c=(yield d("MAWImageUtils").urlToImageSpec(b));a.URL.revokeObjectURL(b);return c});return h.apply(this,arguments)}g.getImageSpec_DEPRECATED=c;g.getImageSpec=e}),98);
__d("MWChatForwardDialogQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="6112170612169266"}),null);
__d("MWChatMessageId",["I64"],(function(a,b,c,d,e,f,g){"use strict";var h;function a(a){if(a.type==="sent")return a.value.messageId}function b(a){if(a.type==="sent")return a.value.threadId}function c(a){if(a.type==="sent")return a.value.timestamp}function e(a,b,c){return{type:"sent",value:{messageId:b,threadId:(h||(h=d("I64"))).of_string(a),timestamp:h.of_string(c)}}}function f(a){return{type:"sent",value:{messageId:a,threadId:(h||(h=d("I64"))).zero,timestamp:h.zero}}}var i={type:"sent",value:{messageId:"",threadId:(h||(h=d("I64"))).zero,timestamp:h.zero}};g.getMessageId=a;g.getThreadId=b;g.getTimestamp=c;g.makeSent=e;g.emptyForExamplesWithId=f;g.emptyForExamples=i}),98);
__d("MWXPopover.react",["cr:2457","cr:4720","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");c=i.forwardRef(a);function a(a,c){a=babelHelpers["extends"]({},a);if(b("cr:4720")!=null)return i.jsx(b("cr:4720"),babelHelpers["extends"]({},a,{ref:c}));return b("cr:2457")!=null?i.jsx(b("cr:2457"),babelHelpers["extends"]({},a,{ref:c})):null}a.displayName=a.name+" [from "+f.id+"]";e=c;g["default"]=e}),98);
__d("ResumableUploadServiceState.enum",[],(function(a,b,c,d,e,f){"use strict";a=Object.freeze({CANCEL:"upload-cancel",FAIL:"upload-fail",FILE_TOO_LARGE:"upload-too-large",NOT_STARTED:"upload-not-started",PROGRESS:"upload-progress",START:"upload-start",SUCCESS:"upload-success",TRANSPORT_FAILURE:"upload-transport-fail"});f["default"]=a}),66);
__d("WebWorker",["invariant","BlobFactory","Bootloader","EventListener","FBLogger","SubscriptionsHandler","TrustedTypesWebWorkerScriptURLPolicy","URI","WebWorkerConfig","XCometFBMultiSiteWebWorkerInitScriptControllerRouteBuilder","XHRRequest","cr:951783","emptyFunction","err","filterObject","getCrossOriginTransport","getWorkerInitScriptSPINParams","gkx","isSameOrigin","justknobx","memoize","nullthrows","performanceNow","recoverableViolation"],(function(a,b,c,d,e,f,g){var h,i,j=a.URL||a.webkitURL,k={remove:b("emptyFunction")},l=function(){"use strict";function c(a){var c=this;this.$2=!1;this.$3=null;this.$4=a;this.__worker=null;this.$5=b("emptyFunction");this.$6=b("emptyFunction");this.$7=[];this.$8=[];this.$9=!1;this.$10=new(b("SubscriptionsHandler"))();this.$1=b("cr:951783")!==null?b("cr:951783")(function(){c.$9||c.terminate()}):k;b("gkx")("20935")&&setTimeout(function(){!c.$9&&!c.isCurrentState("terminated")&&b("recoverableViolation")("WebWorker (resource: "+a.name+") allowCrossPageTransitions must be true on Comet, or you must handle cleaning up your worker.","comet_infra")},1e3);this.$11("constructed")}var d=c.prototype;d.setMessageHandler=function(a){this.$5=a||b("emptyFunction");return this};d.setErrorHandler=function(a){this.$6=a||b("emptyFunction");return this};d.postMessage=function(a,b){this.isCurrentState("constructed")&&g(0,5977);this.isCurrentState("terminated")&&g(0,5978);if(this.isCurrentState("preparing")){this.$7.push(this.postMessage.bind(this,a,b));return this}a={type:"message",message:a};b?this.getInterfaceableWorker().postMessage(a,b):this.getInterfaceableWorker().postMessage(a);return this};d.$12=function(){this.isCurrentState("terminated")||(this.$11("terminated"),this.__worker=null,this.$13(),this.$7=[],this.$8=[],this.$1&&this.$1.remove&&this.$1.remove())};d.terminate=function(){this.isCurrentState("executing")&&this.__worker!=null&&this.__worker.terminate(),this.$12()};d.execute=function(){this.isCurrentState("terminated")&&g(0,5979);if(["preparing","executing"].some(this.isCurrentState,this))return this;this.$11("preparing");c.prepareResource(this.$4,this.$14.bind(this));return this};d.setAllowCrossPageTransition=function(a){b("gkx")("20935")&&!a&&b("recoverableViolation")("allowAcrossPageTransitions must be true because we dont kill these in Comet.","comet_infra");this.$9=a;return this};d.isCurrentState=function(a){c.states.includes(a)||g(0,5980,a);return a===this.$3};d.$14=function(){this.isCurrentState("executing")&&g(0,5981);if(this.isCurrentState("terminated"))return;this.$4.useInitScript&&b("gkx")("21112")||this.$4.sameOriginURL||this.$4.source||g(0,19837,this.$4.name);if(this.$4.useInitScript&&b("gkx")("21112")){var a;a=b("nullthrows")((a=b("XCometFBMultiSiteWebWorkerInitScriptControllerRouteBuilder").buildUri({}).addQueryParams(b("getWorkerInitScriptSPINParams")()))==null?void 0:a.toString());var d=new window.URL(this.$4.url,window.location.href).href;if(d==null)throw b("err")("Can't start up worker without a resource url.");this.__worker=this.constructWorker(a,this.$4.name);this.__worker.postMessage({bundleUrl:d,doNotStartBundle:!0,isDev:!1,resource:this.$4,type:"sr-init"})}else this.$4.sameOriginURL?this.__worker=this.constructWorker(this.$4.sameOriginURL):(this.__worker=this.constructWorker(c.evalWorkerURL),this.getInterfaceableWorker().postMessage(this.$4.source));this.$15("ping",Date.now());if(this.$4.dynamicModules)try{this.$15("defineModules",this.$4.dynamicModules)}catch(a){this.terminate();this.$16("define_error",{message:a.message});throw a}this.$17();this.$11("executing");this.$7.forEach(function(a){return a()});this.$7=[];this.$8.forEach(function(a){return a()});this.$8=[]};d.$13=function(){this.$10.release()};d.$15=function(a){for(var b=arguments.length,c=new Array(b>1?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];this.getInterfaceableWorker().postMessage({type:a,args:c})};d.$16=function(a,d){var e=!(this.$4.useInitScript&&b("gkx")("21112"));c.$16(a,this.$4.name,babelHelpers["extends"]({},d,{cross_page_transition:!!this.$9,state:this.$3}),e)};c.$18=function(a){return Object.keys(b("filterObject")({object_url:a&&c.$19(),data_url:a&&c.$20(),worker:c.isSupported()},function(a){return!!a}))};d.$17=function(){this.$10.addSubscriptions(b("EventListener").listen(this.getInterfaceableWorker(),"message",this.$21.bind(this)),b("EventListener").listen(this.getInterfaceableWorker(),"error",this.$22.bind(this)))};d.$22=function(a){var b=this.$6(a);!b&&!a.defaultPrevented&&this.$16("exception",{message:a.message})};d.$21=function(b){b=b.data;switch(b.type){case"message":this.$5(b.message);break;case"pong":this.$2=!0;this.$16("executed",{dt:Math.floor(b.args[1]-b.args[0]),bytes:this.$4.source?this.$4.source.length:-1});break;case"terminate":this.terminate();break;case"haste-error":this.terminate();this.$16("haste_error",{message:b.message});break;case"console":var c=b.args.shift();["log","error","info","debug","warn"].includes(c)||g(0,5983,c);a.console[c].apply(a.console,b.args);break}};d.$11=function(a){c.states.includes(a)||g(0,5984,a),this.$16("transition",{next_state:a}),this.$3=a};c.prepareResource=function(d,e){e===void 0&&(e=b("emptyFunction"));d.sameOriginURL||d.url||d.source||g(0,5985);!c.isSupported()&&g(0,5986);if(d.sameOriginURL)e();else if(d.url&&b("isSameOrigin")(new(h||(h=b("URI")))(d.url),new(h||(h=b("URI")))(a.location.href)))d.sameOriginURL=d.url,e();else if(d.source)b("justknobx")._("819")&&b("FBLogger")("static_resources").warn("trying to instantiate blob/data Url Worker %s %s",d.name,d.url),c.$23()&&(d.sameOriginURL=c.$24(d.source)),e();else if(b("gkx")("21112")&&d.useInitScript===!0)e();else{b("justknobx")._("819")&&b("FBLogger")("static_resources").warn("trying to instantiate blob/data Url Worker %s %s",d.name,d.url);if(!d.loading){var f=(i||(i=b("performanceNow")))();d.loading=[e];c.$25(d.url,function(a){a?(d.source=a,c.$23()&&(d.sameOriginURL=c.$24(a)),c.$16("prepared",d.name,{dt:Math.floor((i||(i=b("performanceNow")))()-f),bytes:a.length},!1)):c.$16("failed",d.name,{dt:Math.floor((i||(i=b("performanceNow")))()-f),bytes:0},!1),d.loading.forEach(function(a){return a()}),d.loading=!1})}else d.loading.push(e)}return d};c.releaseResource=function(a){a.sameOriginURL.indexOf("blob:")===0&&(j.revokeObjectURL&&j.revokeObjectURL(a.sameOriginURL),a.sameOriginURL=null);return a};c.isSupported=function(){return p};c.isMessageChannelSupported=function(){return c.areTransferablesSupported()&&!!a.MessageChannel};c.areTransferablesSupported=function(){return c.isSupported()&&q()};c.$25=function(a,c){new(b("XHRRequest"))(a).setTransportBuilder(b("getCrossOriginTransport")).setMethod("GET").setResponseHandler(function(a){c(a)}).setErrorHandler(c.bind(null,null)).send()};c.$24=function(a){c.$23()||g(0,5987);if(c.$19()){var d=b("BlobFactory").getBlob([a],{type:"application/javascript"});return j.createObjectURL(d)}if(c.$20())return"data:application/javascript,"+encodeURIComponent(a)};c.$19=function(){return b("BlobFactory").isSupported()&&n()};c.$20=function(){return o()};c.$23=function(){return c.$19()||c.$20()};c.$16=function(a,d,e,f){if(!b("WebWorkerConfig").logging.enabled)return;b("Bootloader").loadModules(["BanzaiLogger"],function(g){g.log(b("WebWorkerConfig").logging.config,babelHelpers["extends"]({},e,{features_array:c.$18(f),event:a,resource:d}))},"WebWorker")};d.constructWorker=function(a,b){return m(a,b)};d.$26=function(a,b){if(this.isCurrentState("preparing")){this.$8.push(this.$26.bind(this,a,b));return}this.getInterfaceableWorker().postMessage({type:"port",message:a},b)};d.createMessageChannel=function(a,b){var c=new MessageChannel();this.$26(a,[c.port2].concat(b||[]));c.port1.start();return c.port1};d.getInterfaceableWorker=function(){return this.__worker};return c}();l.states=["constructed","preparing","executing","terminated"];l.evalWorkerURL=b("WebWorkerConfig").evalWorkerURL;function m(c,d){return new a.Worker(b("TrustedTypesWebWorkerScriptURLPolicy").createScriptURL(c),d!=null?{name:d}:{})}var n=b("memoize")(function(){var a,c;if(!j||!j.createObjectURL)return!1;try{a=j.createObjectURL(b("BlobFactory").getBlob([""],{type:"application/javascript"}));var d=m(a);d.terminate();c=!0}catch(a){c=!1}finally{j.revokeObjectURL&&j.revokeObjectURL(a)}return c}),o=b("memoize")(function(){try{var a=m("data:application/javascript,");a.terminate();a=!0}catch(b){a=!1}return a}),p=!!a.Worker,q=b("memoize")(function(){try{var a=m(l.evalWorkerURL),b=new ArrayBuffer(0);a.postMessage({buffer:b},[b]);a.terminate();b=!0}catch(a){b=!1}return b});e.exports=l}),null);
__d("WorkerBundleResource",["TrustedTypesWebWorkerScriptURLPolicy","XCometFBMultiSiteWebWorkerInitScriptControllerRouteBuilder","getWorkerInitScriptSPINParams","nullthrows"],(function(a,b,c,d,e,f,g){"use strict";function a(a,b){var d,e,f;for(var g=arguments.length,h=new Array(g>2?g-2:0),i=2;i<g;i++)h[i-2]=arguments[i];var j=(d=b==null?void 0:b.logImportScriptsErrors)!=null?d:!1,k=(e=b==null?void 0:b.name)!=null?e:a.name,l=new window.URL(a.url,window.location.href).href;if(l==null){var m=new Error("Can't start up worker without a resource url.");m.stack;throw m}var n=c("nullthrows")((f=c("XCometFBMultiSiteWebWorkerInitScriptControllerRouteBuilder").buildUri({}).addQueryParams(c("getWorkerInitScriptSPINParams")()))==null?void 0:f.toString()),o=new Worker(c("TrustedTypesWebWorkerScriptURLPolicy").createScriptURL(n),{name:k});o.postMessage({bundleUrl:l,initArgs:h,isDev:!1,resource:a,logImportScriptsErrors:j,type:"sr-init"});return o}g.createDedicatedWebWorker=a}),98);
__d("genArrayBufferFromFile",["Promise"],(function(a,b,c,d,e,f){"use strict";var g;function a(a){return"arrayBuffer"in a&&typeof a.arrayBuffer==="function"?a.arrayBuffer():new(g||(g=b("Promise")))(function(b,c){var d=new FileReader();d.onload=function(){var a=d.result;a instanceof ArrayBuffer?b(a):c()};d.onerror=function(){c(d.error)};d.readAsArrayBuffer(a)})}f["default"]=a}),66);
__d("genIsNonAnimatedWebPFile",["genArrayBufferFromFile"],(function(a,b,c,d,e,f,g){"use strict";var h=8;function a(a){return c("genArrayBufferFromFile")(a).then(function(a){a=new Uint8Array(a);var b=a.slice(12,16).reduce(function(a,b,c){return a+String.fromCharCode(b)},"");if(b==="VP8X"){b=a[20];b=b.toString(2).padStart(8,"0");if(b[6]==="1")return!i(a)}return!0})}function i(a){var b=12,c=0;while(c<2&&b+h<a.length){var d=j(a,b);d==="ANMF"&&c++;d=k(a,b+4);var e=d%2;d=h+d+e;b+=d}return c>1}function j(a,b){return a.slice(b,b+4).reduce(function(a,b,c){return a+String.fromCharCode(b)},"")}function k(a,b){return parseInt(a.slice(b,b+4).reduce(function(a,b,c){return b.toString(2).padStart(8,"0")+a},""),2)}g["default"]=a}),98);
__d("useIsMultiReactionEnabled",["LSMessagingThreadTypeUtil","LSThreadBitOffset","MWCMIsAnyCMThread","MWLSThread","ReQL","ReQLSuspense","gkx","isUnjoinedCMThread","useIsChatPreviewsEnabled","useReStore"],(function(a,b,c,d,e,f,g){"use strict";var h;function a(a){var b=(h||(h=c("useReStore")))(),e=d("MWLSThread").useThread(a,function(a){return a.parentThreadKey}),g=d("ReQLSuspense").useFirst(function(){return e?d("ReQL").fromTableAscending(b.tables.community_folders).getKeyRange(e):d("ReQL").empty()},[b,e],f.id+":29");return(a=d("MWLSThread").useThread(a,function(a){if(d("isUnjoinedCMThread").isUnjoinedCMThread(a.threadType))return d("useIsChatPreviewsEnabled").isChatPreviewsEnabled(a,g==null?void 0:g.communityType)&&c("gkx")("26368");if(!d("LSThreadBitOffset").has(156,a))return!1;if(c("MWCMIsAnyCMThread")(a.threadType))return c("gkx")("26368");if(d("LSMessagingThreadTypeUtil").isDiscoverableChannel(a.threadType))return!c("gkx")("4136")}))!=null?a:!1}g.useIsMultiReactEnabled=a}),98);
__d("useIsReadOnlyFeatureLimitedWithThreadType",["MWPFeatureLimitedData","gkx"],(function(a,b,c,d,e,f,g){"use strict";function a(a){a=d("MWPFeatureLimitedData").useReadOnlyFeatureLimitDataWithThreadType(a);if(a!=null)return c("gkx")("24070");else return!1}g["default"]=a}),98);
__d("useIsSecureMessage",["LSMessagingThreadTypeUtil","ReQL","ReQLSuspense"],(function(a,b,c,d,e,f,g){"use strict";function a(a,b,c){var e;e=(e=d("ReQLSuspense").useFirst(function(){return d("ReQL").fromTableAscending(a.tables.threads,["threadType"]).getKeyRange(b.threadKey).map(function(a){a=a.threadType;return a})},[a,b.threadKey],f.id+":36"))!=null?e:c.fallbackThreadType;if(e==null){return(c=c.fallbackIsSecure)!=null?c:!1}return d("LSMessagingThreadTypeUtil").isArmadilloSecure(e)}g["default"]=a}),98);