;/*FB_PKG_DELIM*/

__d("GeoPrivateMakeComponent",["cr:1641505","emptyFunction","react"],(function(a,b,c,d,e,f,g){"use strict";var h;h||d("react");c("emptyFunction")(b("cr:1641505"));function a(a,b){b.displayName==null&&(b.displayName=a);return b}g.makeGeoComponent=a}),98);
__d("webFlexItem",[],(function(a,b,c,d,e,f,g){"use strict";var h={reset:{minHeight:"x2lwn1j",minWidth:"xeuugli",$$css:!0}},i={center:{alignSelf:"xamitd3",$$css:!0},end:{alignSelf:"xpvyfi4",$$css:!0},start:{alignSelf:"xqcrz7y",$$css:!0},stretch:{alignSelf:"xkh2ocl",$$css:!0},baseline:{alignSelf:"xoi2r2e",$$css:!0}},j={0:{flexBasis:"x1r8uery",$$css:!0},auto:{flexBasis:"xdl72j9",$$css:!0},content:{flexBasis:"xcklp1c",$$css:!0}},k={0:{flexGrow:"x1c4vz4f",$$css:!0},1:{flexGrow:"x1iyjqo2",$$css:!0},2:{flexGrow:"xgyuaek",$$css:!0},3:{flexGrow:"x1ikap7u",$$css:!0},4:{flexGrow:"xrnhffl",$$css:!0}},l={0:{order:"x1g77sc7",$$css:!0},1:{order:"x9ek82g",$$css:!0},2:{order:"x14yy4lh",$$css:!0},3:{order:"xo1ph6p",$$css:!0},4:{order:"x182iqb8",$$css:!0},5:{order:"x1h3rv7z",$$css:!0}},m={0:{flexShrink:"x2lah0s",$$css:!0},1:{flexShrink:"xs83m0k",$$css:!0},2:{flexShrink:"x5wqa0o",$$css:!0},3:{flexShrink:"xo4cfa7",$$css:!0},4:{flexShrink:"x1bcm92b",$$css:!0}};function a(a){var b=a.alignSelf,c=a.basis,d=a.grow,e=a.order;a=a.shrink;return[h.reset,b!=null&&i[b],c!=null&&j[c],d!=null&&k[d],e!=null&&l[e],a!=null&&m[a]]}g["default"]=a}),98);
__d("webFlexbox",[],(function(a,b,c,d,e,f,g){"use strict";var h={center:{alignContent:"xc26acl",$$css:!0},end:{alignContent:"xnwe2h8",$$css:!0},"space-around":{alignContent:"x1jpljmv",$$css:!0},"space-between":{alignContent:"xcdzlcm",$$css:!0},start:{alignContent:"x8gbvx8",$$css:!0},stretch:{alignContent:"xqjyukv",$$css:!0}},i={baseline:{alignItems:"x1pha0wt",$$css:!0},center:{alignItems:"x6s0dn4",$$css:!0},end:{alignItems:"xuk3077",$$css:!0},start:{alignItems:"x1cy8zhl",$$css:!0},stretch:{alignItems:"x1qjc9v5",$$css:!0}},j={column:{flexDirection:"xdt5ytf",$$css:!0},"column-reverse":{flexDirection:"x3ieub6",$$css:!0},row:{flexDirection:"x1q0g3np",$$css:!0},"row-reverse":{flexDirection:"x15zctf7",$$css:!0}},k={flex:{display:"x78zum5",$$css:!0},"inline-flex":{display:"x3nfvp2",$$css:!0}},l={0:{columnGap:"x1o1pmfc",$$css:!0},4:{columnGap:"x17zd0t2",$$css:!0},8:{columnGap:"xfex06f",$$css:!0},12:{columnGap:"xtqikln",$$css:!0},16:{columnGap:"x40hh3e",$$css:!0},20:{columnGap:"x18hwk67",$$css:!0},24:{columnGap:"x1qgv0r9",$$css:!0}},m={0:{rowGap:"xxs79tx",$$css:!0},4:{rowGap:"x1r0jzty",$$css:!0},8:{rowGap:"x3pnbk8",$$css:!0},12:{rowGap:"xp1r0qw",$$css:!0},16:{rowGap:"xgpatz3",$$css:!0},20:{rowGap:"x1kb72lq",$$css:!0},24:{rowGap:"x1na6gtj",$$css:!0}},n={center:{justifyContent:"xl56j7k",$$css:!0},end:{justifyContent:"x13a6bvl",$$css:!0},"space-around":{justifyContent:"x1l1ennw",$$css:!0},"space-between":{justifyContent:"x1qughib",$$css:!0},"space-evenly":{justifyContent:"xaw8158",$$css:!0},start:{justifyContent:"x1nhvcw1",$$css:!0}},o={nowrap:{flexWrap:"xozqiw3",$$css:!0},wrap:{flexWrap:"x1a02dak",$$css:!0},"wrap-reverse":{flexWrap:"x8hhl5t",$$css:!0}};function a(a){var b=a.alignContent,c=a.alignItems,d=a.display;d=d===void 0?"flex":d;var e=a.direction,f=a.justifyContent,g=a.gap,p=a.columnGap,q=a.rowGap;a=a.wrap;p=(p=p)!=null?p:g;q=(q=q)!=null?q:g;return[b!=null&&h[b],c!=null&&i[c],k[d],e!=null&&j[e],f!=null&&n[f],p!=null&&l[p],q!=null&&m[q],a!=null&&o[a]]}g["default"]=a}),98);
__d("GeoFlexbox.react",["GeoPrivateMakeComponent","react","stylex","webFlexItem","webFlexbox"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=i||d("react");function a(a){var b=a.accessibilityRole,d=a.alignContent,e=a.alignItems,f=a.alignSelf,g=a.basis,i=a.children,k=a.columnGap,l=a.containerRef,m=a["data-testid"];m=a.direction;var n=a.display;n=n===void 0?"flex":n;var o=a.element;o=o===void 0?"div":o;var p=a.gap,q=a.grow,r=a.justifyContent,s=a.order,t=a.rowGap,u=a.shrink,v=a.style,w=a.wrap;a=a.xstyle;d=(h||(h=c("stylex")))(c("webFlexbox")({alignContent:d,alignItems:e,direction:m,display:n,gap:p,justifyContent:r,wrap:w,rowGap:t,columnGap:k}),c("webFlexItem")({alignSelf:f,basis:g,grow:q,order:s,shrink:u}),a);return j.jsx(o,{className:d,"data-testid":void 0,ref:l,role:b,style:v,children:i})}a.displayName=a.name+" [from "+f.id+"]";b=d("GeoPrivateMakeComponent").makeGeoComponent("GeoFlexbox",a);g["default"]=b}),98);
__d("MWPFetchMessagesThreadLocks",["FBLogger","I64"],(function(a,b,c,d,e,f,g){"use strict";var h;function a(a,b){var e=(h||(h=d("I64"))).to_string(b);return{lock:{after:function(){var b=f();b.after===!0&&c("FBLogger")("messenger_web_product").mustfix("Locking threadLockStatus twice");b.after=!0;a.set(e,b)},before:function(){var b=f();b.before===!0&&c("FBLogger")("messenger_web_product").mustfix("Locking threadLockStatus twice");b.before=!0;a.set(e,b)}},release:{after:function(){var b=f();b.after=!1;a.set(e,b)},before:function(){var b=f();b.before=!1;a.set(e,b)}},state:f()};function f(){var b=a.get(e);b==null&&(b={after:!1,before:!1},a.set(e,b));return b}}g.localThreadStatus=a}),98);
__d("MWPFetchMessagesPageV2",["FBLogger","LSFactory","LSIntEnum","LSIssueMessagesRangeQueryStoredProcedure","LSMailboxMessagesRangeQueryDirection","LSMessagingThreadTypeUtil","MWPFetchMessagesThreadLocks","asyncToGeneratorRuntime","nullthrows","qex"],(function(a,b,c,d,e,f,g){"use strict";var h;function a(a,b,c,d,e,f,g,h){return i.apply(this,arguments)}function i(){i=b("asyncToGeneratorRuntime").asyncToGenerator(function*(a,b,e,f,g,h,i,j){var k,m;k=(yield (k=a.tables.messages_ranges_v2__generated).get.apply(k,f));if(k==null)return;m=h&&(yield (m=a.tables.messages_ranges_v2__generated).get.apply(m,h));if(m==null&&h!=null)return;h=d("LSMessagingThreadTypeUtil").isArmadilloSecure(g);var o=i!=null?d("LSMessagingThreadTypeUtil").isArmadilloSecure(i):!1;if(e==="before")if(k.hasMoreBefore)if(h)return l(a,b,e,k,j,g);else return n(a,f,k.threadKey,e);else if(m!=null)if(o)return l(a,b,e,m,j,g);else return n(a,[m.threadKey,m.minTimestampMs,m.minMessageId],m.threadKey,e);else return;else{e;if(k.hasMoreAfter)if(h)throw c("FBLogger")("messenger_web_product").mustfix("Not possible to fetch more after for secure messages");else return n(a,f,k.threadKey,e);else if(m!=null){o=d("LSMessagingThreadTypeUtil").isArmadilloSecure(c("nullthrows")(i));if(o)throw c("FBLogger")("messenger_web_product").mustfix("Not possible to fetch more after for secure messages");else return n(a,[m.threadKey,m.minTimestampMs,m.minMessageId],m.threadKey,e)}else return}});return i.apply(this,arguments)}var j=new Map(),k=new Map();function l(a,b,c,d,e,f){return m.apply(this,arguments)}function m(){m=b("asyncToGeneratorRuntime").asyncToGenerator(function*(a,b,e,f,g,h){if(c("qex")._("1016")!==!0){var i=d("MWPFetchMessagesThreadLocks").localThreadStatus(j,f.threadKey);if(i.state[e])return;try{i.lock[e]();var k=(yield a.tables.messages.index("messageId").get(f.minMessageId));return yield g.fetchSecureMessagesProtocol(a,f.threadKey,h,k==null?void 0:k.primarySortKey,f,e,b,"user")}finally{i.release[e]()}}});return m.apply(this,arguments)}function n(a,b,c,d){return o.apply(this,arguments)}function o(){o=b("asyncToGeneratorRuntime").asyncToGenerator(function*(a,e,g,i){g=d("MWPFetchMessagesThreadLocks").localThreadStatus(k,g);if(g.state[i])return;try{g.lock[i]();return yield a.runInTransaction(function(){var a=b("asyncToGeneratorRuntime").asyncToGenerator(function*(a){var b;b=(yield (b=a.messages_ranges_v2__generated).get.apply(b,e));if(!b)return;if(b.isLoadingBefore&&i==="before")return;if(b.isLoadingAfter&&i==="after")return;return c("LSIssueMessagesRangeQueryStoredProcedure")(c("LSFactory")(a),{direction:(h||(h=d("LSIntEnum"))).ofNumber(i==="before"?c("LSMailboxMessagesRangeQueryDirection").BEFORE:c("LSMailboxMessagesRangeQueryDirection").AFTER),referenceTimestampMs:b.minTimestampMs,threadKey:b.threadKey})});return function(b){return a.apply(this,arguments)}}(),"readwrite","ui",void 0,f.id+":206")}finally{g.release[i]()}});return o.apply(this,arguments)}g["default"]=a}),98);
__d("MAWPreloadSecureMessages",["I64","LSIntEnum","MAWSecureLocalDBDataSource","MWPFetchMessagesPageV2","Promise","ReQL","asyncToGeneratorRuntime"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j,k=new(c("MAWSecureLocalDBDataSource"))();function a(a,b,c,d){return l.apply(this,arguments)}function l(){l=b("asyncToGeneratorRuntime").asyncToGenerator(function*(a,e,f,g){var l=(yield d("ReQL").firstAsync(d("ReQL").fromTableDescending(a.tables.messages_ranges_v2__generated).getKeyRange(e)));e=l!=null?[e,l==null?void 0:l.minTimestampMs,l==null?void 0:l.minMessageId]:null;l=g!=null?yield d("ReQL").firstAsync(d("ReQL").fromTableDescending(a.tables.messages_ranges_v2__generated).getKeyRange(g)):null;g=l!=null?[l==null?void 0:l.threadKey,l==null?void 0:l.minTimestampMs,l==null?void 0:l.minMessageId]:null;l=(i||(i=d("I64"))).equal(f,(j||(j=d("LSIntEnum"))).ofNumber(15))?(j||(j=d("LSIntEnum"))).ofNumber(1):(j||(j=d("LSIntEnum"))).ofNumber(2);return e!=null?c("MWPFetchMessagesPageV2")(a,15,"before",e,f,g,l,k):(h||(h=b("Promise"))).resolve()});return l.apply(this,arguments)}g.preloadSecureMessages=a}),98);
__d("MWCommunityMessagingNUXQuickPromotionQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="6236665646364985"}),null);
__d("MWCommunityMessagingNUXQuickPromotionQuery$Parameters",["MWCommunityMessagingNUXQuickPromotionQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("MWCommunityMessagingNUXQuickPromotionQuery_facebookRelayOperation"),metadata:{},name:"MWCommunityMessagingNUXQuickPromotionQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("MWCommunityMessagingNUXQuickPromotionContainer.entrypoint",["JSResourceForInteraction","MWCommunityMessagingNUXQuickPromotionQuery$Parameters"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){return{extraProps:{folderId:a.folderId,isFolderRoute:a.isFolderRoute},queries:{queryRef:{parameters:c("MWCommunityMessagingNUXQuickPromotionQuery$Parameters"),variables:{isFolderRoute:a.isFolderRoute}}}}},root:c("JSResourceForInteraction")("MWCommunityMessagingNUXQuickPromotion.react").__setRef("MWCommunityMessagingNUXQuickPromotionContainer.entrypoint")};g["default"]=a}),98);
__d("MWCommunityMessagingNUXDialog.react",["MWCommunityMessagingNUXQuickPromotionContainer.entrypoint","react","react-relay/relay-hooks/LazyLoadEntryPointContainer_DEPRECATED.react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");function a(a){var d=a.folderId;a=a.isFolderRoute;return i.jsx(c("react-relay/relay-hooks/LazyLoadEntryPointContainer_DEPRECATED.react"),{entryPoint:b("MWCommunityMessagingNUXQuickPromotionContainer.entrypoint"),entryPointParams:{folderId:d,isFolderRoute:a||!1},props:{}})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("XCometCommunityThreadsControllerRouteBuilder",["jsExtraRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsExtraRouteBuilder")("/messages/c/{folder_id}/t/{thread_key}/",Object.freeze({}),["/messages/c/{folder_id}/"],void 0);b=a;g["default"]=b}),98);
__d("XMessengerDotComCometCommunityThreadsControllerRouteBuilder",["jsExtraRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsExtraRouteBuilder")("/c/{folder_id}/t/{thread_key}/",Object.freeze({}),["/c/{folder_id}/"],void 0);b=a;g["default"]=b}),98);
__d("MWInboxCommunityThreadsRouteBuilder",["CurrentEnvironment","XCometCommunityThreadsControllerRouteBuilder","XMessengerDotComCometCommunityThreadsControllerRouteBuilder"],(function(a,b,c,d,e,f,g){"use strict";a=c("CurrentEnvironment").facebookdotcom?{buildUriForMessage:function(a){var b=a.folder_id;a=a.thread_key;return c("XCometCommunityThreadsControllerRouteBuilder").buildUri({folder_id:b,thread_key:a})},buildURL:function(a){var b=a.folder_id;a=a.thread_key;return c("XCometCommunityThreadsControllerRouteBuilder").buildURL({folder_id:b,thread_key:a})},buildURLWithoutThread:function(a){a=a.folder_id;return c("XCometCommunityThreadsControllerRouteBuilder").buildExtraURL("/messages/c/{folder_id}/",{folder_id:a})}}:{buildUriForMessage:function(a){var b=a.folder_id;a=a.thread_key;return c("XMessengerDotComCometCommunityThreadsControllerRouteBuilder").buildUri({folder_id:b,thread_key:a})},buildURL:function(a){var b=a.folder_id;a=a.thread_key;return c("XMessengerDotComCometCommunityThreadsControllerRouteBuilder").buildURL({folder_id:b,thread_key:a})},buildURLWithoutThread:function(a){a=a.folder_id;return c("XMessengerDotComCometCommunityThreadsControllerRouteBuilder").buildExtraURL("/c/{folder_id}/",{folder_id:a})}};b=a.buildURL;d=a.buildURLWithoutThread;g.buildURL=b;g.buildURLWithoutThread=d}),98);
__d("MWPQuickReplies.react",["FBLogger","I64","LSFactory","LSIntEnum","LSMailboxType","LSMessageReplySourceType","LSMessageReplySourceTypeV2","LSOptimisticSendMessageV2StoredProcedure","LSShape","LSThreadAttributionTypeUtil","MWChatBusinessQuickReplyList.react","MWPActor.react","MessagePowerUp","Promise","ReQL","ReQLSuspense","promiseDone","react","useLSMessagingSource","useReStore","withCometPlaceholder"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j,k,l,m=l||d("react");function n(a){var e=a.lastMessageId,g=a.quickReplyType,l=a.threadKey,n=c("useLSMessagingSource")(),o=(i||(i=c("useReStore")))(),p=d("MWPActor.react").useActor();a=d("ReQLSuspense").useArray(function(){return d("ReQL").fromTableAscending(o.tables.quick_reply_ctas).getKeyRange(l,e).map(function(a){var b=a.type_,d=b==="quick_reply_text"||b==="quick_reply_ad"?"text":b==="quick_reply_phone"?"user_phone_number":b==="quick_reply_email"?"user_email":"";d===""&&c("FBLogger")("messenger_web_messaging").mustfix("Unexpected quick-reply type: %s, title: %s",b,a.title);return{content_type:d,data:void 0,image_url:a.imageUrl,payload:a.platformToken,title:a.title}}).filter(function(a){return a.content_type!==""})},[o,e,l],f.id+":51");if(a.length>0)return m.jsx(c("MWChatBusinessQuickReplyList.react"),{arrayQR:a,id:(j||(j=d("I64"))).to_string(p),onSend:function(a){var e=d("LSThreadAttributionTypeUtil").getSource(l,n);c("promiseDone")(o.runInTransaction(function(f){var g;g=(g=a.payload)!=null?g:void 0;return c("LSOptimisticSendMessageV2StoredProcedure")(c("LSFactory")(f),{extraSendMessageParams:d("LSShape").ofRecord({calculate_denormalizations:!0,mark_read:!0,platform_token:g,power_up_style:(k||(k=d("LSIntEnum"))).ofNumber(c("MessagePowerUp").NONE),reply_source_type:k.ofNumber(c("LSMessageReplySourceType").NONE),reply_source_type_v2:k.ofNumber(c("LSMessageReplySourceTypeV2").NONE),snippet_has_emoji:!1,source:e}),mailboxType:k.ofNumber(c("LSMailboxType").MESSENGER),senderId:p,text:a.title,threadKey:l,threadType:k.ofNumber(1)}).then(function(a){return(h||(h=b("Promise"))).resolve(a)})},"readwrite",void 0,void 0,f.id+":98"))},quickReplyType:g});else return null}n.displayName=n.name+" [from "+f.id+"]";function a(a){var b=a.threadKey,e=(i||(i=c("useReStore")))();a=d("ReQLSuspense").useArray(function(){return d("ReQL").fromTableDescending(e.tables.messages).getKeyRange(b).take(2)},[e,b],f.id+":139");if(a.length===0)return null;var g=a[0];g.isAdminMessage&&a.length===2&&(g=a[1]);return m.jsx(n,{lastMessageId:g.messageId,quickReplyType:g.quickReplyType,threadKey:b})}a.displayName=a.name+" [from "+f.id+"]";e=d("withCometPlaceholder").withCometPlaceholder(a);g["default"]=e}),98);
__d("MWXIconPlusCircle",["MWXSvgIcon","SVGIcon","cr:9253","gkx"],(function(a,b,c,d,e,f,g){"use strict";a=d("MWXSvgIcon").mwxSvgIcon(d("SVGIcon").svgIcon(b("cr:9253")),c("gkx")("23219"));g["default"]=a}),98);
__d("MWXIconRollCall",["MWXSvgIcon","SVGIcon","cr:9283","gkx"],(function(a,b,c,d,e,f,g){"use strict";a=d("MWXSvgIcon").mwxSvgIcon(d("SVGIcon").svgIcon(b("cr:9283")),c("gkx")("23219"));g["default"]=a}),98);
__d("MicrophoneFilled12.svg.react",["react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");function a(a){return i.jsxs("svg",babelHelpers["extends"]({viewBox:"0 0 12 13",width:"1em",height:"1em",fill:"currentColor"},a,{children:[a.title!=null&&i.jsx("title",{children:a.title}),a.children!=null&&i.jsx("defs",{children:a.children}),i.jsx("g",{fillRule:"evenodd",transform:"translate(-450 -1073)",children:i.jsxs("g",{transform:"translate(353.5 156)",children:[i.jsx("path",{fillRule:"nonzero",d:"M102 926.75 102 929 103 929 103 926.75z"}),i.jsx("path",{fillRule:"nonzero",d:"M100.5 929.5h4a.5.5 0 0 0 0-1h-4a.5.5 0 0 0 0 1z"}),i.jsx("path",{d:"M102.5 925a1.5 1.5 0 0 1-1.5-1.5v-4a1.5 1.5 0 1 1 3 0v4a1.5 1.5 0 0 1-1.5 1.5"}),i.jsx("path",{fillRule:"nonzero",d:"M102.5 925.5a2 2 0 0 1-2-2v-4a2 2 0 1 1 4 0v4a2 2 0 0 1-2 2zm0-1a1 1 0 0 0 1-1v-4a1 1 0 1 0-2 0v4a1 1 0 0 0 1 1z"}),i.jsx("path",{fillRule:"nonzero",d:"M105.5 923v.5a3 3 0 1 1-6 0v-.5a.5.5 0 0 0-1 0v.5a4 4 0 1 0 8 0v-.5a.5.5 0 0 0-1 0z"})]})})]}))}a.displayName=a.name+" [from "+f.id+"]";a._isSVG=!0;b=a;g["default"]=b}),98);
__d("PlusCircleFilled12.svg.react",["react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");function a(a){return i.jsxs("svg",babelHelpers["extends"]({viewBox:"0 0 12 13",width:"1em",height:"1em",fill:"currentColor"},a,{children:[a.title!=null&&i.jsx("title",{children:a.title}),a.children!=null&&i.jsx("defs",{children:a.children}),i.jsx("g",{fillRule:"evenodd",transform:"translate(-450 -1073)",children:i.jsx("path",{d:"M459 1080.25h-2.25v2.25c0 .412-.337.75-.75.75a.752.752 0 0 1-.75-.75v-2.25H453a.752.752 0 0 1-.75-.75c0-.412.337-.75.75-.75h2.25v-2.25c0-.412.337-.75.75-.75s.75.338.75.75v2.25H459c.413 0 .75.338.75.75s-.337.75-.75.75m-3-6.75c-3.308 0-6 2.691-6 6s2.692 6 6 6 6-2.691 6-6-2.692-6-6-6"})})]}))}a.displayName=a.name+" [from "+f.id+"]";a._isSVG=!0;b=a;g["default"]=b}),98);
__d("ScreenDualPlusFilled24.svg.react",["react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");function a(a){return i.jsxs("svg",babelHelpers["extends"]({viewBox:"0 0 24 24",width:"1em",height:"1em",fill:"currentColor"},a,{children:[a.title!=null&&i.jsx("title",{children:a.title}),a.children!=null&&i.jsx("defs",{children:a.children}),i.jsxs("g",{stroke:"none",strokeWidth:1,fillRule:"evenodd",children:[i.jsx("path",{d:"M95.5 8a1.001 1.001 0 0 0 0-2 1.001 1.001 0 0 0 0 2",transform:"translate(-444 -156) translate(354.5 156)"}),i.jsx("path",{d:"M108.5 15.75h-2.25V18a.75.75 0 0 1-1.5 0v-2.25h-2.25a.75.75 0 0 1 0-1.5h2.25V12a.75.75 0 0 1 1.5 0v2.25h2.25a.75.75 0 0 1 0 1.5zm-15.75.75a.75.75 0 0 1-.75-.75V2.25a.75.75 0 0 1 .75-.75h9.5a.75.75 0 0 1 .75.75V6h-2.25c-1.24 0-2.25 1.01-2.25 2.25v3.117a2.261 2.261 0 0 1-.75.133h-.001c-1.058 0-2.002-.777-2.302-1.528a.75.75 0 0 0-1.394.556C94.546 11.758 95.972 13 97.75 13h.002c.257 0 .507-.03.749-.08v3.58h-5.75zM110.25 6h-5.75V2.25c0-1.24-1.01-2.25-2.25-2.25h-9.5c-1.24 0-2.25 1.01-2.25 2.25v13.5c0 1.24 1.01 2.25 2.25 2.25h5.75v3.75c0 1.24 1.01 2.25 2.25 2.25h9.5c1.24 0 2.25-1.01 2.25-2.25V8.25c0-1.24-1.01-2.25-2.25-2.25z",transform:"translate(-444 -156) translate(354.5 156)"})]})]}))}a.displayName=a.name+" [from "+f.id+"]";a._isSVG=!0;b=a;g["default"]=b}),98);
__d("XGroupsC4GThreadViewControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/groups/{idorvanity}/chats/{thread_id}/",Object.freeze({}),void 0);b=a;g["default"]=b}),98);
__d("differenceSets",[],(function(a,b,c,d,e,f){"use strict";function a(a){var b=new Set();for(var c=arguments.length,d=new Array(c>1?c-1:0),e=1;e<c;e++)d[e-1]=arguments[e];FIRST:for(var f=a,g=Array.isArray(f),h=0,f=g?f:f[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var i;if(g){if(h>=f.length)break;i=f[h++]}else{h=f.next();if(h.done)break;i=h.value}var j=i;for(var k=0;k<d.length;k++){var l=d[k];if(l.has(j))continue FIRST}b.add(j)}return b}f["default"]=a}),66);
__d("isFalsey",[],(function(a,b,c,d,e,f){"use strict";function a(a){return a==null||!Boolean(a)}f["default"]=a}),66);
__d("mapSet",[],(function(a,b,c,d,e,f){"use strict";function a(a,b){var c=new Set();for(var a=a,d=Array.isArray(a),e=0,a=d?a:a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var f;if(d){if(e>=a.length)break;f=a[e++]}else{e=a.next();if(e.done)break;f=e.value}f=f;c.add(b(f))}return c}f["default"]=a}),66);
__d("useForceUpdate",["react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||d("react")).useReducer;function a(){var a=i(function(a){return a+1},0);a[0];a=a[1];return a}g["default"]=a}),98);
__d("useStyleXTransition",["differenceSets","mapMapToArray","mapSet","nullthrows","react","setImmediate","sortBy","useForceUpdate","useIsMountedRef","useStable"],(function(a,b,c,d,e,f,g){"use strict";var h;b=h||d("react");var i=b.useCallback,j=b.useEffect,k=b.useLayoutEffect,l=b.useRef;e=window;var m=e.clearTimeout,n=e.requestAnimationFrame,o=e.setTimeout;function p(){var a=c("useStable")(function(){return new Map()});j(function(){return function(){return Array.from(a.values()).forEach(m)}},[]);return a}function q(){var a=c("useForceUpdate")(),b=c("useIsMountedRef")();return c("useStable")(function(){return function(){b.current&&a()}})}function a(a,b,d,e){var f=q(),g=p(),h=c("useStable")(function(){return new Map()}),j=l(!0),r=d.enter,s=d.leave,t=d.base,u=d.duration,v=u===void 0?100:u,w=d.durationIn,x=d.durationOut,y=d.onEnter,z=d.onLeave,A=d.onEnterComplete,B=d.onLeaveComplete,C=i(function(a,b,c){return{item:b,key:a,order:c,xstyle:[t,j.current&&r],style:{transitionDuration:((b=w)!=null?b:v)+"ms"}}},[t,r,w,v]),D=new Map(a.map(function(a,c){return[b(a),{item:a,order:c}]})),E=c("differenceSets")(new Set(D.keys()),new Set(h.keys())),F=c("differenceSets")(new Set(h.keys()),new Set(D.keys())),G=new Map();u=Array.from(c("mapSet")(F,function(a){a=c("nullthrows")(h.get(a));a=a.order;return a})).sort(function(a,b){return a-b});u.forEach(function(b,c){b=b-c;while(b<a.length){c=(c=G.get(b))!=null?c:0;G.set(b,c+1);b+=1}});d=c("sortBy")([].concat(c("mapMapToArray")(h,function(a){var b=a.key;b=D.get(b);if(b){return babelHelpers["extends"]({},a,{item:b.item,order:b.order+((b=G.get(b.order))!=null?b:0)})}return a}),Array.from(c("mapSet")(E,function(a){var b=c("nullthrows")(D.get(a)),d=b.item;b=b.order;return C(a,d,b)}))),function(a){return a.order});k(function(){if(e===!0)return;a.forEach(function(a,d){var e,i=b(a),j=(e=h.get(i))!=null?e:C(i,a,d);E.has(i)&&n(function(){var b;j.xstyle=[t,r];m(g.get(i));g.set(i,o(function(){A&&A(a)},(b=w)!=null?b:v));c("setImmediate")(function(){j.xstyle=[t,r],y&&y(a),f()})});j.item=a;j.order=d+((e=G.get(d))!=null?e:0);h.set(i,j)});Array.from(F.values()).forEach(function(a){var b=h.get(a);if(b==null)return;var d=b.item;if(b.status!=="leaving"){var e;b.status="leaving";b.style={transitionDuration:((e=x)!=null?e:v)+"ms"};n(function(){var e;b.xstyle=[t,s];m(g.get(a));g.set(a,o(function(){h["delete"](a),B&&B(d),f()},(e=x)!=null?e:v));c("setImmediate")(function(){z&&z(d),f()})})}});j.current=!1});return d}g["default"]=a}),98);