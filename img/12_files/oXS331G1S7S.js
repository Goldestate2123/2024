;/*FB_PKG_DELIM*/

__d("CometPhotoViewerImageSuspense",["Promise","PromiseAnnotate","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j,k=j||d("react"),l=document.body,m=typeof jest==="undefined"&&document!==void 0&&typeof document.createElement==="function";function n(a){return new(h||(h=b("Promise")))(function(b){if(!m||l==null)return b();var c=document.createElement("img");c.onload=c.onerror=b;c.src=a})}var o=new Map(),p=2e3,q={get:function(a){var b=o.get(a);if(b!=null){o["delete"](a);o.set(a,b);return b}},set:function(a,b){o["delete"](a);o.set(a,b);if(o.size>p){a=o.keys().next();a.done||o["delete"](a.value)}}};function r(a){if(a==null)return;var b=q.get(a);if(b!=null)if(b.pending===!0)throw b.promise;else return;else{b=n(a);(i||(i=d("PromiseAnnotate"))).setDisplayName(b,"SuspenseImage");var c={pending:!0,promise:b};b.then(function(){c.pending===!0&&(c.pending=!1)});q.set(a,c);throw b}}a=k.forwardRef(function(a,b){r(a.src);return k.jsx("img",babelHelpers["extends"]({},a,{ref:b}))});g["default"]=a}),98);
__d("CometPhotoViewerInnerWrapper.react",["CometRouteRenderType","react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=(i||(i=d("react"))).c,k=i,l={backgroundContainer:{alignItems:"x6s0dn4",display:"x78zum5",justifyContent:"xl56j7k",minHeight:"x1xoerdy",$$css:!0},backgroundContainerDialog:{height:"x1dr59a3",$$css:!0},backgroundContainerDialogWithFooter:{height:"x4uq5q4",$$css:!0},backgroundContainerTabs:{height:"xtp0wl1",$$css:!0},backgroundContainerTabsWithFooter:{height:"xossbfl",$$css:!0},image:{height:"xt7dq6l",maxWidth:"x193iq5w",width:"x14atkfc",$$css:!0},maxImageHeightDialog:{maxHeight:"x1bwycvy",$$css:!0},maxImageHeightDialogWithFooter:{maxHeight:"x4ju7c5",$$css:!0},maxImageHeightTabs:{maxHeight:"x85a59c",$$css:!0},maxImageHeightTabsWithFooter:{maxHeight:"x1wlxzsl",$$css:!0},passthroughImage:{backgroundPosition:"x1lvsgvq",backgroundRepeat:"xiy17q3",backgroundSize:"x1tbiz1a",height:"x5yr21d",width:"xh8yej3",$$css:!0},placeholderContainer:{width:"xh8yej3",$$css:!0}};function m(a,b){var e=j(6);a=a===void 0?!1:a;b=b===void 0?!1:b;var f=d("CometRouteRenderType").useIsPushView(),g=!a&&f&&l.backgroundContainerDialog,i=!a&&!f&&l.backgroundContainerTabs,k=a&&f&&l.backgroundContainerDialogWithFooter;a=a&&!f&&l.backgroundContainerTabsWithFooter;f=b&&l.placeholderContainer;e[0]!==g||e[1]!==i||e[2]!==k||e[3]!==a||e[4]!==f?(b=(h||(h=c("stylex")))(l.backgroundContainer,g,i,k,a,f),e[0]=g,e[1]=i,e[2]=k,e[3]=a,e[4]=f,e[5]=b):b=e[5];return b}function n(a,b){var e=j(7),f=d("CometRouteRenderType").useIsPushView(),g=!a&&f&&l.maxImageHeightDialog,i=!a&&!f&&l.maxImageHeightTabs,k=a&&f&&l.maxImageHeightDialogWithFooter;a=a&&!f&&l.maxImageHeightTabsWithFooter;f=b&&l.passthroughImage;b=!b&&l.image;var m;e[0]!==g||e[1]!==i||e[2]!==k||e[3]!==a||e[4]!==f||e[5]!==b?(m=(h||(h=c("stylex")))(g,i,k,a,f,b),e[0]=g,e[1]=i,e[2]=k,e[3]=a,e[4]=f,e[5]=b,e[6]=m):m=e[6];return m}function o(a,b){var c=j(7),e=d("CometRouteRenderType").useIsPushView(),f=!a&&e&&l.maxImageHeightDialog,g=!a&&!e&&l.maxImageHeightTabs,h=a&&e&&l.maxImageHeightDialogWithFooter;a=a&&!e&&l.maxImageHeightTabsWithFooter;e=b&&l.passthroughImage;b=!b&&l.image;var i;c[0]!==f||c[1]!==g||c[2]!==h||c[3]!==a||c[4]!==e||c[5]!==b?(i=[f,g,h,a,e,b],c[0]=f,c[1]=g,c[2]=h,c[3]=a,c[4]=e,c[5]=b,c[6]=i):i=c[6];return i}e=k.forwardRef(a);function a(a,b){var c=j(10),d=a.height,e=a.imageUri,f=a.showPlaceholderImage,g=a.width;a=a.withFooter;f=f===void 0?!0:f;a=a===void 0?!1:a;a=n(a,!0);var h=m(!1,!0);b=(b=b)!=null?b:null;var i;c[0]!==e||c[1]!==f||c[2]!==d||c[3]!==g||c[4]!==a?(i=e!=null&&f&&k.jsx("div",{className:"x6s0dn4 x78zum5 xl56j7k xmz0i5r x1n2onr6 x5yr21d xh8yej3",children:k.jsx("div",{className:a,style:d!=null&&g!=null?{backgroundImage:"url("+e+")",maxHeight:d,maxWidth:g}:{backgroundImage:"url("+e+")"}},e)}),c[0]=e,c[1]=f,c[2]=d,c[3]=g,c[4]=a,c[5]=i):i=c[5];c[6]!==h||c[7]!==b||c[8]!==i?(e=k.jsx("div",{className:h,ref:b,children:i}),c[6]=h,c[7]=b,c[8]=i,c[9]=e):e=c[9];return e}f=k.forwardRef(b);function b(a,b){var c=j(9),d=a.imageComponent,e=a.imageComponentWithXStyle;a=a.withFooter;a=a===void 0?!1:a;var f=n(a,!1);a=o(a,!1);var g;c[0]===Symbol["for"]("react.memo_cache_sentinel")?(g="x6s0dn4 x78zum5 xl56j7k xmz0i5r x1n2onr6",c[0]=g):g=c[0];var h;c[1]!==d||c[2]!==f||c[3]!==e||c[4]!==a?(h=d!=null?d(f):e!=null?e(a):null,c[1]=d,c[2]=f,c[3]=e,c[4]=a,c[5]=h):h=c[5];c[6]!==b||c[7]!==h?(d=k.jsx("div",{className:g,ref:b,children:h}),c[6]=b,c[7]=h,c[8]=d):d=c[8];return d}a=f;b=e;g.useCometPhotoViewerContainerStyles=m;g.CometPhotoViewerImageWrapper=a;g.CometPhotoViewerPlaceholderWrapper=b}),98);
__d("MWChatDeleteMessageEventEmitter",["BaseEventEmitter"],(function(a,b,c,d,e,f,g){"use strict";var h="deleteMessage",i=new(c("BaseEventEmitter"))();function a(a){i.emit(h,a)}function b(a){var b=i.addListener(h,a);return function(){return b.remove()}}g.emit=a;g.subscribe=b}),98);
__d("MWChatMediaData",[],(function(a,b,c,d,e,f){"use strict";var g=function(a){return a==null||a.__typename!=="MessageVideo"||a.sdUrl==null||a.image_thumb==null||a.image_thumb.uri==null||a.image_thumb.width==null||a.image_thumb.height==null||a.original_dimensions==null||a.original_dimensions.x==null||a.original_dimensions.y==null?null:{hdUrl:a.hdUrl,imageThumb:{height:a.image_thumb.height,uri:a.image_thumb.uri,width:a.image_thumb.width},legacyAttachmentID:a.legacy_attachment_id,originalDimensions:{x:a.original_dimensions.x,y:a.original_dimensions.y},sdUrl:a.sdUrl}},h=function(a){return a==null||a.__typename!=="MessageImage"||a.image==null||a.image.uri==null||a.image.width==null||a.image.height==null||a.image_thumb==null||a.image_thumb.uri==null||a.image_thumb.width==null||a.image_thumb.height==null?null:{blurredImageUri:a.blurred_image_uri,image:{downloadableUri:a.image.downloadable_uri,height:a.image.height,uri:a.image.uri,width:a.image.width},imageThumb:{height:a.image_thumb.height,uri:a.image_thumb.uri,width:a.image_thumb.width},legacyAttachmentID:a.legacy_attachment_id}},i=function(a){return a==null||a.__typename!=="MessageAnimatedImage"||a.image==null||a.image.uri==null||a.image.width==null||a.image.height==null||a.image_thumb==null||a.image_thumb.uri==null||a.image_thumb.width==null||a.image_thumb.height==null?null:{blurredImageUri:null,image:{downloadableUri:a.image.downloadable_uri,height:a.image.height,uri:a.image.uri,width:a.image.width},imageThumb:{height:a.image_thumb.height,uri:a.image_thumb.uri,width:a.image_thumb.width},legacyAttachmentID:a.legacy_attachment_id}};a=function(a){return a.reduce(function(a,b){if(b==null||b.node==null||b.node.id==null||b.node.message_id==null||b.node.blob_attachments==null||b.cursor==null)return a;var c=b.node,d=c.blob_attachments,e=c.id,f=c.message_id,j=c.timestamp_precise,k=b.cursor;c=d.map(function(a){if(a.__typename==="MessageImage"){var b=h(a);return b==null?null:{__typename:"MessageImage",attachment:b,cursor:k,messageID:f,nodeID:e,timestamp:j}}else if(a.__typename==="MessageVideo"){b=g(a);return b==null?null:{__typename:"MessageVideo",attachment:b,cursor:k,messageID:f,nodeID:e,timestamp:j}}else if(a.__typename==="MessageAnimatedImage"){b=i(a);return b==null?null:{__typename:"MessageAnimatedImage",attachment:b,cursor:k,messageID:f,nodeID:e,timestamp:j}}else return null}).filter(Boolean);return a.concat(c)},[]).filter(Boolean)};f.normalizeMessages=a}),66);
__d("MWChatMediaReducer",[],(function(a,b,c,d,e,f){"use strict";a={curIdx:0,hasNextPage:!1,hasPrevPage:!1,initialCursor:null,isFetchingNextPage:!1,isFetchingPrevPage:!1,mediaList:[]};b=function(a,b){switch(b.type){case"initialize":return babelHelpers["extends"]({},a,{curIdx:b.curIdx,initialCursor:b.initialCursor,mediaList:b.mediaList});case"startFetchingNextPage":return babelHelpers["extends"]({},a,{isFetchingNextPage:!0});case"startFetchingPrevPage":return babelHelpers["extends"]({},a,{isFetchingPrevPage:!0});case"prevPageReceived":return babelHelpers["extends"]({},a,{curIdx:a.curIdx+b.medias.length,hasPrevPage:b.hasPrevPage,isFetchingPrevPage:!1,mediaList:b.medias.concat(a.mediaList)});case"nextPageReceived":return babelHelpers["extends"]({},a,{hasNextPage:b.hasNextPage,isFetchingNextPage:!1,mediaList:a.mediaList.concat(b.medias)});case"messageDeleted":return babelHelpers["extends"]({},a,{curIdx:Math.min(Math.max(b.curIdx,0),a.mediaList.length-1),mediaList:b.mediaList});case"viewMediaAtIndex":return babelHelpers["extends"]({},a,{curIdx:Math.min(Math.max(b.curIdx,0),a.mediaList.length-1)});default:return a}};f.initialState=a;f.reducer=b}),66);
__d("MWChatMediaRootQuery.graphql",["MWChatMediaRootQuery_facebookRelayOperation","relay-runtime"],(function(a,b,c,d,e,f){"use strict";a=function(){var a={defaultValue:null,kind:"LocalArgument",name:"after"},c={defaultValue:null,kind:"LocalArgument",name:"before"},d={defaultValue:null,kind:"LocalArgument",name:"first"},e={defaultValue:null,kind:"LocalArgument",name:"last"},f={defaultValue:null,kind:"LocalArgument",name:"messageID"},g={defaultValue:null,kind:"LocalArgument",name:"scale"},h={defaultValue:null,kind:"LocalArgument",name:"threadID"},i=[{kind:"Variable",name:"id",variableName:"threadID"}],j={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},k={alias:null,args:null,kind:"ScalarField",name:"folder",storageKey:null},l=[{kind:"Variable",name:"after",variableName:"after"},{kind:"Literal",name:"ascending",value:!0},{kind:"Variable",name:"before",variableName:"before"},{kind:"Variable",name:"first",variableName:"first"},{kind:"Variable",name:"last",variableName:"last"},{kind:"Variable",name:"message_id",variableName:"messageID"},{kind:"Literal",name:"message_shared_media_type",value:"PHOTO_VIDEO_AND_GIF"}],m={alias:null,args:null,kind:"ScalarField",name:"message_id",storageKey:null},n={alias:null,args:null,kind:"ScalarField",name:"timestamp_precise",storageKey:null},o={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},p={alias:null,args:null,kind:"ScalarField",name:"legacy_attachment_id",storageKey:null},q={alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null},r={alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null},s={alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null},t=[q,r,s,{alias:null,args:null,kind:"ScalarField",name:"downloadable_uri",storageKey:null}];q={alias:"image_thumb",args:[{kind:"Literal",name:"height",value:250},{kind:"Literal",name:"width",value:250}],concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:[q,r,s],storageKey:"image(height:250,width:250)"};r={kind:"InlineFragment",selections:[p,{alias:null,args:null,kind:"ScalarField",name:"blurred_image_uri",storageKey:null},{alias:null,args:[{kind:"Literal",name:"height",value:2048},{kind:"Variable",name:"scale",variableName:"scale"},{kind:"Literal",name:"width",value:2048}],concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:t,storageKey:null},q],type:"MessageImage",abstractKey:null};s={kind:"InlineFragment",selections:[p,{alias:"sdUrl",args:[{kind:"Literal",name:"quality",value:"SD"}],kind:"ScalarField",name:"playable_url",storageKey:'playable_url(quality:"SD")'},{alias:"hdUrl",args:[{kind:"Literal",name:"quality",value:"HD"}],kind:"ScalarField",name:"playable_url",storageKey:'playable_url(quality:"HD")'},q,{alias:null,args:null,concreteType:"Vect2",kind:"LinkedField",name:"original_dimensions",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"x",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"y",storageKey:null}],storageKey:null}],type:"MessageVideo",abstractKey:null};p={kind:"InlineFragment",selections:[p,{alias:null,args:null,concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:t,storageKey:null},q,{alias:null,args:null,kind:"ScalarField",name:"animated_image_caption",storageKey:null}],type:"MessageAnimatedImage",abstractKey:null};t={alias:null,args:null,kind:"ScalarField",name:"cursor",storageKey:null};q={alias:null,args:null,concreteType:"PageInfo",kind:"LinkedField",name:"page_info",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"has_next_page",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"has_previous_page",storageKey:null}],storageKey:null};return{fragment:{argumentDefinitions:[a,c,d,e,f,g,h],kind:"Fragment",metadata:null,name:"MWChatMediaRootQuery",selections:[{alias:null,args:i,concreteType:"MessageThread",kind:"LinkedField",name:"message_thread",plural:!1,selections:[j,k,{alias:null,args:l,concreteType:"MessagesWithAttachmentsOfThreadConnection",kind:"LinkedField",name:"messages_with_attachments",plural:!1,selections:[{alias:null,args:null,concreteType:"MessagesWithAttachmentsOfThreadEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[{kind:"InlineFragment",selections:[m,j,n,{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"blob_attachments",plural:!0,selections:[o,r,s,p],storageKey:null}],type:"UserMessage",abstractKey:null}],storageKey:null},t],storageKey:null},q],storageKey:null}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[h,f,a,d,c,e,g],kind:"Operation",name:"MWChatMediaRootQuery",selections:[{alias:null,args:i,concreteType:"MessageThread",kind:"LinkedField",name:"message_thread",plural:!1,selections:[j,k,{alias:null,args:l,concreteType:"MessagesWithAttachmentsOfThreadConnection",kind:"LinkedField",name:"messages_with_attachments",plural:!1,selections:[{alias:null,args:null,concreteType:"MessagesWithAttachmentsOfThreadEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[o,j,{kind:"InlineFragment",selections:[m,n,{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"blob_attachments",plural:!0,selections:[o,r,s,p,{kind:"InlineFragment",selections:[j],type:"Node",abstractKey:"__isNode"}],storageKey:null}],type:"UserMessage",abstractKey:null}],storageKey:null},t],storageKey:null},q],storageKey:null}],storageKey:null}]},params:{id:b("MWChatMediaRootQuery_facebookRelayOperation"),metadata:{},name:"MWChatMediaRootQuery",operationKind:"query",text:null}}}();b("relay-runtime").PreloadableQueryRegistry.set(a.params.id,a);e.exports=a}),null);
__d("MWChatMediaUtil",["ExecutionEnvironment"],(function(a,b,c,d,e,f,g){"use strict";var h;a=function(a){if(!(h||(h=c("ExecutionEnvironment"))).canUseDOM)return;a.forEach(function(a){if(typeof a==="string"){var b=new Image();b.src=a}})};g.prefetchImages=a}),98);
__d("MWChatMediaViewerImage.react",["fbt","CometHero.react","CometPageletWithDiv.react","CometPhotoViewerImageSuspense","CometPhotoViewerInnerWrapper.react","MWXPressable.react","react","useMWMediaViewerOpenQPLLogger","useSinglePartialViewImpression"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=i||(i=d("react"));b=i;var k=b.useCallback,l=b.useState,m=h._("__JHASH__SUN00vbyQRp__JHASH__");function a(a){var b=a.blurredImageURI,e=a.imageURI,f=a.origHeight,g=a.origSrc;a=a.origWidth;var i=l(!1),n=i[0],o=i[1];i=d("useMWMediaViewerOpenQPLLogger").useMWMediaViewerOpenQPLLogger();var p=i.endSuccess;i=k(function(){p()},[p]);i=c("useSinglePartialViewImpression")({onImpressionStart:i});var q=d("CometPhotoViewerInnerWrapper.react").useCometPhotoViewerContainerStyles(!0);return j.jsx("div",{"data-testid":void 0,ref:i,children:j.jsxs(d("CometPageletWithDiv.react").Placeholder,{className:q,fallback:g!=null?j.jsx(d("CometPhotoViewerInnerWrapper.react").CometPhotoViewerPlaceholderWrapper,{height:f,imageUri:g,showPlaceholderImage:g!=null&&a!=null&&f!=null,width:a,withFooter:!0}):null,name:"MessengerMediaViewerPhoto",pageletType:"media",children:[j.jsx(c("CometHero.react"),{description:"MWChatMediaViewerImage"}),b==null||n?j.jsx(d("CometPhotoViewerInnerWrapper.react").CometPhotoViewerImageWrapper,{imageComponent:function(a){return j.jsx(c("CometPhotoViewerImageSuspense"),{alt:m,className:a,src:e},e)},withFooter:!0}):j.jsx(c("MWXPressable.react"),{display:"inline",label:h._("__JHASH__jjpvSNJ1g5C__JHASH__"),onPress:function(){return o(!0)},children:j.jsx(d("CometPhotoViewerInnerWrapper.react").CometPhotoViewerImageWrapper,{imageComponent:function(a){return j.jsx(c("CometPhotoViewerImageSuspense"),{alt:m,className:a,src:b},b)},withFooter:!0})})]},e)})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),226);
__d("MWChatMediaViewerStage.react",["fbt","CometBlurredBackgroundImage.react","CometKeys","CometMediaViewerFilmstrip.react","CurrentEnvironment","MWChatMediaViewerNavigationTapTarget.react","MWXLink.react","MessengerBlurpleLogoSvg.react","UNTRANSLATED_STRING_FIXME","XMessengerDotComCometRootControllerRouteBuilder","deferredLoadComponent","gkx","react","requireDeferred","stylex","useCometRouterDispatcher","useDebouncedComet","useIsReadOnlyFeatureLimitedWithThreadType","useLayerKeyCommands","useLayoutEffect_SAFE_FOR_SSR"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j,k=j||(j=d("react"));b=j;var l=b.useMemo,m=b.useRef,n=b.useState,o=c("deferredLoadComponent")(c("requireDeferred")("MWChatMediaViewerControls.react").__setRef("MWChatMediaViewerStage.react")),p={headerContainer:{alignItems:"x6s0dn4",display:"x78zum5",end:"xbruw4w",height:"x1s65kcs",position:"x10l6tqk",zIndex:"x1vjfegm",$$css:!0},messengerDotComHeaderContainerHeight:{end:"xds687c",height:"xnnlda6",$$css:!0},workplaceHeaderContainer:{end:"xlr8s2x",height:"xng8ra",zIndex:"xhtitgo",$$css:!0},workroomsHeaderContainer:{end:"xlr8s2x",height:"xng8ra",zIndex:"xhtitgo",$$css:!0}},q=2e3,r=c("gkx")("22681");function a(a){var b=a.activeIndex,d=a.attachmentID,e=a.backgroundSrc,f=a.children,g=a.disableNextButton,j=a.disablePrevButton,s=a.downloadLink,t=a.hideNextButton,u=a.hidePrevButton,v=a.isForwardEnabledForThread,w=a.messageID,x=a.setActiveIndex,y=a.showMessengerLink,z=c("CurrentEnvironment").messengerdotcom,A=c("gkx")("20836"),B=c("gkx")("22805"),C=c("useIsReadOnlyFeatureLimitedWithThreadType")(null);C=c("gkx")("24093")&&!C&&v;var D=h._("__JHASH__LwpPfoJWBJ-__JHASH__"),E=h._("__JHASH__37s-bUHecpV__JHASH__"),F=m(!0);v=n(!1);var G=v[0],H=v[1],I=m(null),J=c("useCometRouterDispatcher")();v=function(){return K.isPending()?L():K()};var K=c("useDebouncedComet")(function(){H(!1),L()},{leading:!0,wait:q}),L=c("useDebouncedComet")(function(){H(!0),F.current=!1},{leading:!1,wait:q});c("useLayoutEffect_SAFE_FOR_SSR")(function(){L(),I.current&&F.current&&I.current.focus()});var M=function(){J!=null&&J.popPushView()},N=l(function(){var b=[];!u&&!j&&b.push({command:{key:c("CometKeys").LEFT},description:D,handler:function(){return x(a.activeIndex-1)}});!t&&!g&&b.push({command:{key:c("CometKeys").RIGHT},description:E,handler:function(){return x(a.activeIndex+1)}});return b},[g,j,t,u,E,D,a.activeIndex,x]),O=k.jsx(c("MWChatMediaViewerNavigationTapTarget.react"),{direction:"previous",invisible:u||G,label:D,onClick:function(){return x(b-1)},testid:void 0,trackingNode:143});G=k.jsx(c("MWChatMediaViewerNavigationTapTarget.react"),{direction:"next",invisible:t||G,label:E,onClick:function(){return x(b+1)},testid:void 0,trackingNode:142});c("useLayerKeyCommands")(N);return k.jsxs("div",{className:"x6s0dn4 xal61yo x78zum5 xdt5ytf x1iyjqo2 x5yr21d x17upfok x1n2onr6 x87ps6o x1uvtmcs","data-testid":void 0,onMouseMove:v,ref:I,tabIndex:"0",children:[y&&k.jsx("div",{className:"x10l6tqk x16q8cke xomnu4r x1n327nk",children:k.jsx(c("MWXLink.react"),{"aria-label":c("UNTRANSLATED_STRING_FIXME")("Messenger"),href:c("XMessengerDotComCometRootControllerRouteBuilder").buildURL({}),children:k.jsx(c("MessengerBlurpleLogoSvg.react"),{height:"40",width:"40"})})}),k.jsx("div",{className:"x1f90px3 x1ffmiix x10l6tqk xh8yej3 x1vjfegm"}),k.jsx("div",{className:"x1ey2m1c xds687c xuzhngd x10l6tqk x17qophe x13vifvy",children:e!=null?k.jsx(c("CometBlurredBackgroundImage.react"),{src:e}):null}),k.jsxs("div",{className:"x9f619 x78zum5 x1iyjqo2 x5yr21d xl56j7k x6ikm8r x10wlt62 x1n2onr6 xh8yej3 xvj1nn1 x1nd34w2",children:[d!=null&&w!=null?k.jsx("div",{className:(i||(i=c("stylex")))(p.headerContainer,z&&p.messengerDotComHeaderContainerHeight,A&&p.workplaceHeaderContainer,B&&p.workroomsHeaderContainer),children:k.jsx(o,{attachmentID:d,canForward:C,downloadLink:s,messageID:w})}):null,k.jsxs("div",{className:"x6s0dn4 x1ey2m1c x78zum5 xds687c x1qughib x10l6tqk x17qophe x13vifvy x1ja2u2z",children:[!r&&k.jsx("div",{"aria-hidden":!0,className:"x1ey2m1c x9f619 xds687c x10l6tqk x17qophe x13vifvy","data-testid":void 0,onClick:M}),O,G]}),f]}),k.jsx("div",{className:"x193iq5w x6ikm8r x10wlt62",children:k.jsx(c("CometMediaViewerFilmstrip.react"),{activeIndex:b,images:a.thumbnails.map(function(a){return babelHelpers["extends"]({},a,{mediaType:"image"})}),onSetImage:x})})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),226);
__d("MWChatMediaViewerVideo.react",["CometRouteRenderType","MWChatVideoPlayer.react","MWVideoPlayerControllerContext.react","react","stylex","useMWMediaViewerOpenQPLLogger","useRoutePassthroughProps","useSinglePartialViewImpression"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=i||(i=d("react"));b=i;var k=b.useCallback,l=b.useContext,m=b.useEffect,n=b.useMemo,o=b.useRef,p={videoContainer:{alignItems:"x6s0dn4",display:"x78zum5",flexGrow:"x1iyjqo2",justifyContent:"xl56j7k",minHeight:"x1xoerdy",width:"xh8yej3",$$css:!0},videoContainerDialog:{height:"x4uq5q4",$$css:!0},videoContainerTabs:{height:"x1ch8t6n",$$css:!0}};function q(a){var b=a.fbid,e=a.hdSrc,f=a.originalHeight,g=a.originalWidth;a=a.sdSrc;var i=d("CometRouteRenderType").useIsPushView(),n=c("useRoutePassthroughProps")(),q=(n==null?void 0:n.startTimestamp)!=null?Number(n.startTimestamp):void 0;n=(n==null?void 0:n.volumeSetting)!=null?Number(n.volumeSetting):void 0;var r=o(!1),s=l(c("MWVideoPlayerControllerContext.react")),t=s.ref.current;m(function(){t!==null&&!r.current&&(t.setMuted(!1,"product_initiated"),r.current=!0)},[t,r]);s=d("useMWMediaViewerOpenQPLLogger").useMWMediaViewerOpenQPLLogger();var u=s.endSuccess;s=k(function(){u()},[u]);s=c("useSinglePartialViewImpression")({onImpressionStart:s});return j.jsx("div",{className:(h||(h=c("stylex")))(p.videoContainer,i&&p.videoContainerDialog,!i&&p.videoContainerTabs),ref:s,children:j.jsx(c("MWChatVideoPlayer.react"),{controls:"default",fbid:b,hdSrc:e,initialForceHD:!0,isMediaViewer:!0,mediaRenderQpl:null,originalHeight:f,originalWidth:g,sdSrc:a,shouldForcePauseOnClick:!1,startTimestamp:q,volumeSetting:n})})}q.displayName=q.name+" [from "+f.id+"]";function a(a){var b=o(null),d=n(function(){return{ref:b}},[b]);return j.jsx(c("MWVideoPlayerControllerContext.react").Provider,{value:d,children:j.jsx(q,babelHelpers["extends"]({},a))})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("MWChatMediaRoot.react",["fbt","CometContentNotAvailable.react","CometErrorBoundary.react","CometErrorRoot.react","CometRelay","CometRouteParams","CometRouterPushViewStackContext","I64","LSMessagingThreadTypeUtil","MWChatDeleteMessageEventEmitter","MWChatMediaData","MWChatMediaReducer","MWChatMediaRootQuery.graphql","MWChatMediaUtil","MWChatMediaViewerImage.react","MWChatMediaViewerStage.react","MWChatMediaViewerVideo.react","MWChatMessageId","MWLSThread","Promise","WebPixelRatio","gkx","promiseDone","react","useIsMountedRef"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j,k,l,m=l||(l=d("react"));e=l;var n=e.useCallback,o=e.useContext,p=e.useEffect,q=e.useReducer,r=e.useState,s=20,t=i!==void 0?i:i=b("MWChatMediaRootQuery.graphql");function u(a){var e,f=a.props;a=a.queries;var g=d("CometRelay").useRelayEnvironment(),i=d("CometRouteParams").useRouteParams();f.manualRouteParams!=null&&(i=f.manualRouteParams);var l=o(c("CometRouterPushViewStackContext"))||[];l=l.length===0&&f.routeProps.showMessengerLink;f=r(null);var u=f[0],v=f[1];f=q(d("MWChatMediaReducer").reducer,d("MWChatMediaReducer").initialState);var w=f[0],x=w.curIdx,y=w.hasNextPage,z=w.hasPrevPage,A=w.initialCursor,B=w.isFetchingNextPage,C=w.isFetchingPrevPage,D=w.mediaList,E=f[1],F=c("useIsMountedRef")(),G=d("CometRelay").usePreloadedQuery(t,a.messengerMediaRootQueryReference);if(u!==null)throw u;p(function(){var a;a=G==null?void 0:(a=G.message_thread)==null?void 0:(a=a.messages_with_attachments)==null?void 0:(a=a.edges[0])==null?void 0:a.cursor;if(a!=null&&A===null){var b;b=G==null?void 0:(b=G.message_thread)==null?void 0:(b=b.messages_with_attachments)==null?void 0:b.edges;if(b!=null){b=d("MWChatMediaData").normalizeMessages(b);var c=0;i.attachment_id!=null&&(c=b.findIndex(function(a){return a.attachment.legacyAttachmentID===i.attachment_id}));E({curIdx:c,initialCursor:a,mediaList:b,type:"initialize"})}}},[A,G,i.attachment_id]);var H=G==null?void 0:(w=G.message_thread)==null?void 0:w.id;a=G==null?void 0:(f=G.message_thread)==null?void 0:f.folder;p(function(){return d("MWChatDeleteMessageEventEmitter").subscribe(function(a){var b=x,c=D.filter(function(c,d){c=c.messageID===a;c&&(d<=x&&x>0&&b--);return!c});c.length!==D.length&&(H!=null&&g.commitUpdate(function(a){return(a=a.get(H))==null?void 0:a.invalidateRecord()}));E({curIdx:b,mediaList:c,type:"messageDeleted"})})},[g,H,x,D]);var I=n(function(a){E({type:"startFetchingPrevPage"});if(typeof i.thread_id!=="string")return(j||(j=b("Promise"))).resolve();var c=i;c=c.thread_id;return d("CometRelay").fetchQuery(g,t,{before:a,last:s,scale:d("WebPixelRatio").get(),threadID:c}).toPromise().then(function(a){var b;if(!F.current)return;a=a==null?void 0:(a=a.message_thread)==null?void 0:a.messages_with_attachments;b=d("MWChatMediaData").normalizeMessages((b=a==null?void 0:a.edges)!=null?b:[]);if(b.length>0){E({hasPrevPage:(a=a==null?void 0:(a=a.page_info)==null?void 0:a.has_previous_page)!=null?a:!1,medias:b,type:"prevPageReceived"})}})["catch"](function(a){if(!F.current)return;v(a)})},[g,F,i]),J=n(function(a){E({type:"startFetchingNextPage"});if(typeof i.thread_id!=="string")return(j||(j=b("Promise"))).resolve();var c=i;c=c.thread_id;return d("CometRelay").fetchQuery(g,t,{after:a,first:s,scale:d("WebPixelRatio").get(),threadID:c}).toPromise().then(function(a){var b;if(!F.current)return;a=a==null?void 0:(a=a.message_thread)==null?void 0:a.messages_with_attachments;b=d("MWChatMediaData").normalizeMessages((b=a==null?void 0:a.edges)!=null?b:[]);if(b.length>0){E({hasNextPage:(a=a==null?void 0:(a=a.page_info)==null?void 0:a.has_next_page)!=null?a:!1,medias:b,type:"nextPageReceived"})}})["catch"](function(a){if(!F.current)return;v(a)})},[g,F,i]);p(function(){A!=null&&(c("promiseDone")(J(A)),c("promiseDone")(I(A)))},[g,J,I,A,i.thread_id]);var K=(w=(u=D[0])==null?void 0:u.cursor)!=null?w:null,L=(u=(f=D[D.length-1])==null?void 0:f.cursor)!=null?u:null;p(function(){x<=s/2&&z&&!C&&K!=null?c("promiseDone")(I(K)):x>=D.length-s/2&&y&&!B&&L!=null&&c("promiseDone")(J(L))},[x,I,J,y,z,K,L,D.length,B,C]);w=D[x-1];f=D[x+1];var M=null,N=null;w!=null&&w.__typename==="MessageImage"&&(M=w.attachment.image.uri);f!=null&&f.__typename==="MessageImage"&&(N=f.attachment.image.uri);p(function(){d("MWChatMediaUtil").prefetchImages([M,N])},[M,N]);u=D[x];w=typeof i.thread_id==="string"?(k||(k=d("I64"))).of_string(i.thread_id):null;f=d("MWLSThread").useThread(w,function(a){return d("LSMessagingThreadTypeUtil").isDiscoverablePublicBroadcastChannel(a.threadType)});if(c("gkx")("2183")&&((w=G==null?void 0:(w=G.message_thread)==null?void 0:(w=w.messages_with_attachments)==null?void 0:(w=w.edges)==null?void 0:w.length)!=null?w:0)<1)return m.jsx(c("CometContentNotAvailable.react"),{});if(A==null)return null;if(u==null)return m.jsx(c("CometContentNotAvailable.react"),{});w=D.map(function(a){var b=a.attachment.imageThumb,c=b.height,d=b.uri;b=b.width;return{alt:h._("__JHASH__SUN00vbyQRp__JHASH__"),height:c,key:(c=a.attachment.legacyAttachmentID)!=null?c:d,uri:d,width:b}}).filter(Boolean);return m.jsx(c("MWChatMediaViewerStage.react"),{activeIndex:x,attachmentID:u.attachment.legacyAttachmentID,backgroundSrc:u.__typename!=="MessageAnimatedImage"?u.attachment.imageThumb.uri:void 0,disableNextButton:B&&D[x+1]==null,disablePrevButton:C&&D[x-1]==null,downloadLink:u.__typename==="MessageVideo"?(e=u.attachment.hdUrl)!=null?e:u.attachment.sdUrl:u.attachment.image.downloadableUri,hideNextButton:!y&&D[x+1]==null,hidePrevButton:!z&&D[x-1]==null,isForwardEnabledForThread:a!=="COMMUNITY"&&a!=="E2EE_CUTOVER"&&!f,messageID:typeof i.thread_id==="string"&&u.timestamp!=null?d("MWChatMessageId").makeSent(i.thread_id,u.messageID,u.timestamp):null,setActiveIndex:function(a){return E({curIdx:a,type:"viewMediaAtIndex"})},showMessengerLink:l,thumbnails:w,children:u.__typename==="MessageVideo"?m.jsx(c("MWChatMediaViewerVideo.react"),{fbid:u.nodeID,hdSrc:u.attachment.hdUrl!=null?u.attachment.hdUrl:void 0,originalHeight:u.attachment.originalDimensions.x,originalWidth:u.attachment.originalDimensions.y,sdSrc:u.attachment.sdUrl}):u.__typename==="MessageImage"?m.jsx(c("MWChatMediaViewerImage.react"),{blurredImageURI:u.attachment.blurredImageUri,imageURI:u.attachment.image.uri}):u.__typename==="MessageAnimatedImage"?m.jsx(c("MWChatMediaViewerImage.react"),{blurredImageURI:null,imageURI:u.attachment.image.uri,origHeight:u.attachment.image.height,origWidth:u.attachment.image.width}):null})}u.displayName=u.name+" [from "+f.id+"]";function a(a){a=m.jsx(u,babelHelpers["extends"]({},a));return m.jsx(c("CometErrorBoundary.react"),{fallback:function(){return m.jsx(c("CometErrorRoot.react"),{})},children:a})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),226);