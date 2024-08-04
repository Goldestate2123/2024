;/*FB_PKG_DELIM*/

__d("CometComposerLinksPluginForLexicalDeferred.react",["createComposerDeferredPlugin","react","requireDeferred"],(function(a,b,c,d,e,f,g){"use strict";var h;h||d("react");a=c("createComposerDeferredPlugin")(c("requireDeferred")("CometComposerLinksPluginForLexical.react").__setRef("CometComposerLinksPluginForLexicalDeferred.react"));g["default"]=a}),98);
__d("CometEventPermalinkTab",["$InternalEnum"],(function(a,b,c,d,e,f){a=b("$InternalEnum")({ABOUT:"about",DISCUSSION:"discussion",BRACKETS:"brackets",BROADCASTS:"broadcasts",PARTICIPANTS:"participants",STANDINGS:"standings",VIDEOS:"videos",PAID_ACCESS:"paid_access"});c=a;f["default"]=c}),66);
__d("EventCometActionContextDefault",[],(function(a,b,c,d,e,f){"use strict";a={event_action_history:[]};f["default"]=a}),66);
__d("EventCometActionContext",["EventCometActionContextDefault","react"],(function(a,b,c,d,e,f,g){"use strict";var h;a=h||d("react");b=a.createContext(c("EventCometActionContextDefault"));g["default"]=b}),98);
__d("EventCometActionLoggerUtils",["CometRouteURL"],(function(a,b,c,d,e,f,g){"use strict";var h={mechanism:"unknown",surface:"unknown"},i=3;function a(a,b){var c=[].concat(a.event_action_history||[]);c.length>=i&&(c=c.slice(c.length-i+1));var d=j(a);c.push({event_tracking:d.event_tracking,extra_data:d.extra_data,mechanism:b.mechanism,surface:b.surface});return babelHelpers["extends"]({},a,{event_action_history:c})}function j(a){a=a.event_action_history;if(a==null||a[a.length-1]==null)return h;return a.length>=2?a[a.length-2]:a[a.length-1]}function b(){var a=d("CometRouteURL").useRouteURL(),b=/\/events\/\d+/;if(b.test(a))return"permalink";if(a.includes("/events/calendar"))return"bookmark_calendar";if(a.includes("/events"))return"bookmark";return a.includes("profile.php")?"timeline":"newsfeed"}g.createForNewSurface=a;g.getLastActionHistoryEntry=j;g.useExtractEventComposerSurface=b}),98);
__d("XCometEventPermalinkControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/events/{event_id}/{?child_event_id}/",Object.freeze({active_tab:"about",show_created_event_toast:!1,hide_invite_flow_filter_groups:!1}),void 0);b=a;g["default"]=b}),98);
__d("castToEnum",[],(function(a,b,c,d,e,f){"use strict";function a(a,b,c){var d=Object.keys(b);for(var e=0;e<d.length;e++)if(b[d[e]]===a)return b[d[e]];return c}f["default"]=a}),66);
__d("cometFormattedTextIneligibilityCheck",[],(function(a,b,c,d,e,f){"use strict";function a(a,b,c){var d;b===void 0&&(b=130);c===void 0&&(c=3);return((d=(d=a.match(/\n/g))==null?void 0:d.length)!=null?d:0)>=c||a.length>b}f["default"]=a}),66);
__d("mapMapToArray",[],(function(a,b,c,d,e,f){"use strict";function a(a,b){var c=[],d=0;for(var e=a,f=Array.isArray(e),g=0,e=f?e:e[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var h;if(f){if(g>=e.length)break;h=e[g++]}else{g=e.next();if(g.done)break;h=g.value}h=h;var i=h[0];h=h[1];c.push(b(h,i,d,a));d++}return c}f["default"]=a}),66);
__d("useBaseDynamicEntryPointDialog",["CometDialogContext","CometRelay","CometSuspendedDialogImpl.react","clearTimeout","react","setTimeout","tracePolicyFromResource","useCometRelayEntrypointContextualEnvironmentProvider"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||(h=d("react"));b=h;var j=b.useCallback,k=b.useContext,l=b.useEffect,m=b.useRef;function n(a){var b=a.entryPoint,e=a.environmentProvider,f=a.onClose,g=a.otherProps,h=a.preloadedEntryPoint,j=a.preloadParams;a=d("CometRelay").useEntryPointLoader(e,b);var k=a[0],n=a[1],o=a[2],p=(e=k)!=null?e:h,q=m(null);l(function(){q.current!=null&&(c("clearTimeout")(q.current),q.current=null);p.isDisposed&&n(j);return function(){q.current=c("setTimeout")(function(){k?o():h.dispose(),q.current=null},6e4)}},[o,p.isDisposed,h,j,n,k]);b=babelHelpers["extends"]({},g,{onClose:f});return i.jsx(d("CometRelay").EntryPointContainer,{entryPointReference:h,props:b})}n.displayName=n.name+" [from "+f.id+"]";function a(a,b,e){var f=c("useCometRelayEntrypointContextualEnvironmentProvider")(),g=k(c("CometDialogContext"));return j(function(h,i,j,k){var l=d("CometRelay").loadEntryPoint(f,a,h),m=n,o=function(){j&&j.apply(void 0,arguments);var a=l==null?void 0:l.dispose;a&&a()};g(c("CometSuspendedDialogImpl.react"),{dialog:m,dialogProps:{entryPoint:a,environmentProvider:f,otherProps:i,preloadedEntryPoint:l,preloadParams:h},fallback:e},{loadType:"entrypoint",preloadTrigger:b,tracePolicy:(m=k)!=null?m:c("tracePolicyFromResource")("comet.dialog",a.root)},o)},[f,a,g,e,b])}g["default"]=a}),98);
__d("useCometDynamicEntryPointDialog",["FDSDialogLoadingState.react","react","useBaseDynamicEntryPointDialog"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react"),j=function(a){return i.jsx(c("FDSDialogLoadingState.react"),{onClose:a})};function a(a,b,d){return c("useBaseDynamicEntryPointDialog")(a,b,(a=d)!=null?a:j)}g["default"]=a}),98);
__d("useFileDragEvents",["gkx","react"],(function(a,b,c,d,e,f,g){"use strict";var h;b=h||d("react");var i=b.useCallback,j=b.useEffect,k=b.useRef,l=b.useState;function a(a,b,d){b===void 0&&(b=document.documentElement);var e=k(0),f=l(!1),g=f[0],h=f[1],m=i(function(b){h(!1);if((d==null||d(b))&&a!=null){b.preventDefault();var c=b.dataTransfer;if(c!=null){c=c.files;a(c,b)!==!1&&b.stopPropagation()}else b.stopPropagation();e.current=0}},[a,d]),n=i(function(a){var b;b=(b=a.dataTransfer)==null?void 0:b.files;(d==null||d(a))&&b!=null&&(a.preventDefault(),e.current++,h(!0))},[d]),o=i(function(a){var b;b=(b=a.dataTransfer)==null?void 0:b.files;(d==null||d(a))&&b!=null&&--e.current===0&&h(!1)},[d]),p=i(function(a){var b;b=(b=a.dataTransfer)==null?void 0:b.files;var d=c("gkx")("4704");d&&a.dataTransfer!=null&&(a.dataTransfer.dropEffect="copy");b!=null&&a.preventDefault()},[]);j(function(){if(b!=null){b.addEventListener("drop",m,!0);b.addEventListener("dragenter",n,!0);b.addEventListener("dragleave",o,!0);b.addEventListener("dragover",p,!0);return function(){b.removeEventListener("drop",m,!0),b.removeEventListener("dragenter",n,!0),b.removeEventListener("dragleave",o,!0),b.removeEventListener("dragover",p,!0)}}},[n,o,p,m,b]);return g}g["default"]=a}),98);
__d("useShallowEqualMemo",["shallowEqual","useCustomEqualityMemo"],(function(a,b,c,d,e,f,g){"use strict";function a(a){return c("useCustomEqualityMemo")(a,c("shallowEqual"))}g["default"]=a}),98);