;/*FB_PKG_DELIM*/

__d("CometChannelTabVideoPreviewRootQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="8079376798788859"}),null);
__d("CometFlexibleRow_DEPRECATED.react",["ExecutionEnvironment","FBLogger","react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j,k=j||(j=d("react"));b=j;var l=b.useLayoutEffect,m=b.useState,n=8,o={justifyCenter:{justifyContent:"xl56j7k",$$css:!0},justifyEnd:{justifyContent:"x13a6bvl",$$css:!0},root:{alignItems:"x1qjc9v5",display:"x78zum5",flexDirection:"x1q0g3np",flexWrap:"xozqiw3",justifyContent:"x1nhvcw1",marginEnd:"xcud41i",marginStart:"x139jcc6",position:"x1n2onr6",$$css:!0}};function a(a){var b=a.box,d=a.children,e=a.columnMaxWidth,f=a.columnMinWidth,g=a.justify;g=g===void 0?"start":g;var j=a.maxItems,p=j===void 0?Infinity:j;j=a.minItems;var q=j===void 0?1:j,r=a.onTotalItemsChanged,s=a.role;j=a.rootRef;if(!(h||(h=c("ExecutionEnvironment"))).canUseDOM)throw c("FBLogger")("comet_ssr").blameToPreviousFile().mustfixThrow("CometFlexibleRow is not compatible with Server Rendering, and will be deprecated. This will break SSR! Please use CometRow instead! See https://fburl.com/wiki/xrzohrqb");var t=k.Children.toArray(d);a=m(t.length);var u=a[0],v=a[1];l(function(){if(b!=null){var a=[],c=u,d=b.width;while(!0){if(a.includes(c))break;var g=(d-c*n)/c;if(g>e){a.push(c);c+=1;continue}if(g<f){a.push(c);c-=1;continue}break}c=Math.min(Math.max(q,c),p);c!==u&&(r&&r(c),v(c))}},[f,e,b,p,q,u,r]);return k.jsx("div",{className:(i||(i=c("stylex")))(o.root,g==="center"&&o.justifyCenter,g==="end"&&o.justifyEnd),ref:j,role:s,children:Array(u).fill().map(function(a,b){return k.jsx("div",{className:"x98rzlu x150jy0e x1e558r4",role:s,style:{maxWidth:e,minWidth:f},children:t[b]},(a=(a=t[b])==null?void 0:a.key)!=null?a:"_fakecolumn"+b)})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometVideoHomeDurationThumbnailOverlay_video.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometVideoHomeDurationThumbnailOverlay_video",selections:[{alias:null,args:null,kind:"ScalarField",name:"broadcast_status",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"has_viewer_watched_show_video",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"playable_duration",storageKey:null}],type:"Video",abstractKey:null};e.exports=a}),null);
__d("CometVideoHomeDurationThumbnailOverlay.react",["fbt","CometRelay","CometVideoHomeDurationThumbnailOverlay_video.graphql","FDSText.react","VideoBroadcastStatus","formatDurationSeconds","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j,k=(j||(j=d("react"))).c,l=j;function a(a){var e=k(5);a=a.video;var f;e[0]===Symbol["for"]("react.memo_cache_sentinel")?(f=i!==void 0?i:i=b("CometVideoHomeDurationThumbnailOverlay_video.graphql"),e[0]=f):f=e[0];f=d("CometRelay").useFragment(f,a);if(!f||f.broadcast_status===c("VideoBroadcastStatus").LIVE)return null;a=f&&!!f.has_viewer_watched_show_video;f=f.playable_duration||0;if(f===0&&!a)return null;var g;e[1]===Symbol["for"]("react.memo_cache_sentinel")?(g="x18l40ae xm3z3ea x1x8b98j x131883w x16mih1h xqo3gd x1923su1 xyqdw3p xsyo7zv xg8j3zb x16hj40l x47corl x10l6tqk xudsgdi",e[1]=g):g=e[1];e[2]!==a||e[3]!==f?(g=l.jsx("div",{className:g,children:l.jsx(c("FDSText.react"),{color:"primaryOnMedia",type:"headlineEmphasized4",children:a?h._("__JHASH__zZ9dv--mZFL__JHASH__"):c("formatDurationSeconds")(f)})}),e[2]=a,e[3]=f,e[4]=g):g=e[4];return g}g["default"]=a}),226);
__d("CometVideoHomeHuddleThumbnailWithRelay3d_video.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometVideoHomeHuddleThumbnailWithRelay3d_video",selections:[{alias:null,args:null,concreteType:"Video",kind:"LinkedField",name:"huddle_thumbnail_enabled",plural:!1,selections:[{args:null,documentName:"CometVideoHomeHuddleThumbnailWithRelay3d_video",fragmentName:"CometVideoHomeHuddleThumbnail_video",fragmentPropName:"video",kind:"ModuleImport"}],storageKey:null}],type:"Video",abstractKey:null};e.exports=a}),null);
__d("CometVideoHomeHuddleThumbnailWithRelay3d.react",["CometPlaceholder.react","CometRelay","CometVideoHomeHuddleThumbnailWithRelay3d_video.graphql","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=(i||(i=d("react"))).c,k=i;function a(a){var e=j(6),f=a.className;a=a.video;var g;e[0]===Symbol["for"]("react.memo_cache_sentinel")?(g=h!==void 0?h:h=b("CometVideoHomeHuddleThumbnailWithRelay3d_video.graphql"),e[0]=g):g=e[0];g=d("CometRelay").useFragment(g,a);a=g==null?void 0:g.huddle_thumbnail_enabled;e[1]!==f?(g={className:f},e[1]=f,e[2]=g):g=e[2];e[3]!==a||e[4]!==g?(f=k.jsx(c("CometPlaceholder.react"),{fallback:null,children:k.jsx(d("CometRelay").MatchContainer,{match:a,props:g})}),e[3]=a,e[4]=g,e[5]=f):f=e[5];return f}g["default"]=a}),98);
__d("CometVideoHomeVideoThumbnailHoverContext",["react"],(function(a,b,c,d,e,f,g){"use strict";var h;a=h||d("react");b=a.createContext(!1);g["default"]=b}),98);
__d("CometVideoHomePlayButtonThumbnailOverlay.react",["ix","CometImage.react","CometVideoHomeVideoThumbnailHoverContext","react","stylex"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j,k=j||(j=d("react"));b=j;var l=b.useContext,m=b.c,n={image:{display:"x3nfvp2",left:"x1nrll8i",start:null,end:null,position:"x10l6tqk",top:"xwa60dl",transform:"x1i3z1r0",$$css:!0},root:{opacity:"xg01cxk",transitionDelay:"x1ahifba",transitionDuration:"xu6gjpd",transitionProperty:"x19991ni",transitionTimingFunction:"x7lz9yc",$$css:!0},visible:{opacity:"x1hc1fzr",$$css:!0}};function a(a){var b=m(12),d=a.forceVisibility;a=a.size;d=d===void 0?!1:d;var e=l(c("CometVideoHomeVideoThumbnailHoverContext"));e=e||d;b[0]===Symbol["for"]("react.memo_cache_sentinel")?(d=h("101640"),b[0]=d):d=b[0];d=d;bb0:switch(a){case 24:var f;b[1]===Symbol["for"]("react.memo_cache_sentinel")?(f=h("354763"),b[1]=f):f=b[1];d=f;break bb0;case 48:b[2]===Symbol["for"]("react.memo_cache_sentinel")?(f=h("101640"),b[2]=f):f=b[2];d=f;break bb0;case 72:b[3]===Symbol["for"]("react.memo_cache_sentinel")?(f=h("352839"),b[3]=f):f=b[3];d=f}f=e&&n.visible;b[4]!==f?(e=(i||(i=c("stylex")))(n.root,f,n.image),b[4]=f,b[5]=e):e=b[5];b[6]!==d||b[7]!==a?(f=k.jsx(c("CometImage.react"),{src:d,width:a}),b[6]=d,b[7]=a,b[8]=f):f=b[8];b[9]!==e||b[10]!==f?(d=k.jsx("div",{className:e,children:f}),b[9]=e,b[10]=f,b[11]=d):d=b[11];return d}g["default"]=a}),98);
__d("CometVideoHomeVideoThumbnailImageWithPreview_video.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[{kind:"RootArgument",name:"scale"}],kind:"Fragment",metadata:null,name:"CometVideoHomeVideoThumbnailImageWithPreview_video",selections:[{alias:null,args:[{kind:"Literal",name:"height",value:354},{kind:"Variable",name:"scale",variableName:"scale"},{kind:"Literal",name:"width",value:627}],concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:null},{alias:null,args:[{kind:"Literal",name:"framework",value:"WARNING_SCREENS"},{kind:"Literal",name:"location",value:"video_home"}],concreteType:"CIXScreen",kind:"LinkedField",name:"cix_screen",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"view_model",plural:!1,selections:[{kind:"InlineFragment",selections:[{args:null,documentName:"CometVideoHomeVideoThumbnailImageWithPreview_video__cix_screen",fragmentName:"CometWarningScreenOverlay_data",fragmentPropName:"data",kind:"ModuleImport"}],type:"OverlayWarningScreenViewModel",abstractKey:null}],storageKey:null}],storageKey:'cix_screen(framework:"WARNING_SCREENS",location:"video_home")'},{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{args:null,kind:"FragmentSpread",name:"CometVideoHomeHuddleThumbnailWithRelay3d_video"}],type:"Video",abstractKey:null};e.exports=a}),null);
__d("CometVideoHomeVideoThumbnailPreviewRootQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="8444959808864729"}),null);
__d("CometVideoHomeVideoThumbnailPreviewRootQuery$Parameters",["CometVideoHomeVideoThumbnailPreviewRootQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("CometVideoHomeVideoThumbnailPreviewRootQuery_facebookRelayOperation"),metadata:{},name:"CometVideoHomeVideoThumbnailPreviewRootQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometVideoHomeVideoThumbnailPreviewRoot.entrypoint",["CometVideoHomeVideoThumbnailPreviewRootQuery$Parameters","JSResourceForInteraction"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){return{queries:{queryReference:{parameters:b("CometVideoHomeVideoThumbnailPreviewRootQuery$Parameters"),variables:{id:a.videoID}}}}},root:c("JSResourceForInteraction")("CometVideoHomeVideoThumbnailPreviewRoot.react").__setRef("CometVideoHomeVideoThumbnailPreviewRoot.entrypoint")};d=a;g["default"]=d}),98);
__d("VideoItemPreviewContext",["react"],(function(a,b,c,d,e,f,g){"use strict";var h;a=h||d("react");b=a.createContext({hidePreview:function(){},isPreviewVisible:!1,showPreview:function(){}});g["default"]=b}),98);
__d("CometVideoHomeVideoThumbnailPreviewEntryPointLoader.react",["CometPlaceholder.react","CometRelay","CometVideoHomePositionInUnitContext","CometVideoHomeSectionPositionContext","CometVideoHomeVideoThumbnailPreviewRoot.entrypoint","VideoHomeLoggingReactionVideoChannelTypeContext","VideoHomeLoggingUpstreamPlayerSourceContext","VideoHomeTypedLiteLogger","VideoItemPreviewContext","VideoPlayerLoggingSuboriginContext","react","useMinifiedProductAttribution"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||(h=d("react"));b=h;var j=b.useContext;b.useMemo;var k=b.useState,l=b.c;function a(a){var b=l(5),e=a.previewLogger;a=a.videoID;var f=d("CometRelay").useRelayEnvironment(),g;b[0]!==f?(g={getEnvironment:function(){return f}},b[0]=f,b[1]=g):g=b[1];g=g;g=g;var h=j(c("VideoItemPreviewContext"));h=h.isPreviewVisible;var m=k(!1),n=m[0];m=m[1];g=d("CometRelay").useEntryPointLoader(g,c("CometVideoHomeVideoThumbnailPreviewRoot.entrypoint"));var o=g[0];g=g[1];var p=j(c("VideoPlayerLoggingSuboriginContext")),q=j(c("CometVideoHomeSectionPositionContext")),r=j(c("CometVideoHomePositionInUnitContext")),s=j(c("VideoHomeLoggingReactionVideoChannelTypeContext")),t=j(c("VideoHomeLoggingUpstreamPlayerSourceContext")),u=c("useMinifiedProductAttribution")();h&&!n&&(m(!0),c("VideoHomeTypedLiteLogger").log(babelHelpers["extends"]({},e,{attribution_id_v2:u,event:"video_preview_load",event_target:"video",event_target_id:a,player_suborigin:p,position_in_unit:r,section_video_channel_type:s,unit_position:q,upstream_player_source:t})),g({videoID:a}));if(!o)return null;b[2]===Symbol["for"]("react.memo_cache_sentinel")?(h={},b[2]=h):h=b[2];b[3]!==o?(n=i.jsx(c("CometPlaceholder.react"),{fallback:null,children:i.jsx(d("CometRelay").EntryPointContainer,{entryPointReference:o,props:h})}),b[3]=o,b[4]=n):n=b[4];return n}g["default"]=a}),98);
__d("CometVideoHomeVideoThumbnailImageWithPreview.react",["fbt","CometImage.react","CometRelay","CometVideoHomeHuddleThumbnailWithRelay3d.react","CometVideoHomeVideoThumbnailImageWithPreview_video.graphql","CometVideoHomeVideoThumbnailPreviewEntryPointLoader.react","CometWarningScreenContext","FDSAspectRatioContainer.react","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j,k=(j||(j=d("react"))).c,l=j,m={image:{bottom:"x1ey2m1c",end:"xds687c",left:null,right:null,marginTop:"xr1yuqi",marginEnd:"xkrivgy",marginBottom:"x4ii5y1",marginStart:"x1gryazu",maxHeight:"xmz0i5r",position:"x10l6tqk",start:"x17qophe",top:"x13vifvy",$$css:!0}};function a(a){var e,f=k(30),g=a.height,j=a.previewDisabled,n=a.video;a=a.width;j=j===void 0?!0:j;var o;f[0]===Symbol["for"]("react.memo_cache_sentinel")?(o=i!==void 0?i:i=b("CometVideoHomeVideoThumbnailImageWithPreview_video.graphql"),f[0]=o):o=f[0];o=d("CometRelay").useFragment(o,n);n=o==null?void 0:(n=o.image)==null?void 0:n.uri;e=o==null?void 0:(e=o.cix_screen)==null?void 0:e.view_model;var p=o==null?void 0:o.id;if(p==null||p===""||n==null)return null;var q;f[1]===Symbol["for"]("react.memo_cache_sentinel")?(q="x1n2onr6",f[1]=q):q=f[1];a=a/g;g=e!=null;var r,s;f[2]===Symbol["for"]("react.memo_cache_sentinel")?(r="x5yr21d x10l6tqk x17qophe x13vifvy xh8yej3",s=l.jsx("div",{className:"xal61yo x5yr21d"}),f[2]=r,f[3]=s):(r=f[2],s=f[3]);var t;f[4]===Symbol["for"]("react.memo_cache_sentinel")?(t=h._("__JHASH__aOk6sift_ib__JHASH__"),f[4]=t):t=f[4];f[5]!==n?(t=l.jsx(c("CometImage.react"),{alt:t,src:n,xstyle:m.image}),f[5]=n,f[6]=t):t=f[6];var u;f[7]===Symbol["for"]("react.memo_cache_sentinel")?(u="x1ey2m1c xds687c xr1yuqi xkrivgy x4ii5y1 x1gryazu xmz0i5r x10l6tqk x17qophe x13vifvy",f[7]=u):u=f[7];f[8]!==o?(u=l.jsx(c("CometVideoHomeHuddleThumbnailWithRelay3d.react"),{className:u,video:o}),f[8]=o,f[9]=u):u=f[9];f[10]!==j||f[11]!==p?(o=!j&&l.jsx(c("CometVideoHomeVideoThumbnailPreviewEntryPointLoader.react"),{videoID:p}),f[10]=j,f[11]=p,f[12]=o):o=f[12];f[13]!==e||f[14]!==n?(j={alwaysUseSmallLayout:!0,data:e,mediaUri:n,surface:"video_home"},f[13]=e,f[14]=n,f[15]=j):j=f[15];f[16]!==e||f[17]!==j?(p=l.jsx(d("CometRelay").MatchContainer,{match:e,props:j}),f[16]=e,f[17]=j,f[18]=p):p=f[18];f[19]!==t||f[20]!==u||f[21]!==o||f[22]!==p?(n=l.jsxs("div",{className:r,children:[s,t,u,o,p]}),f[19]=t,f[20]=u,f[21]=o,f[22]=p,f[23]=n):n=f[23];f[24]!==g||f[25]!==n?(e=l.jsx(d("CometWarningScreenContext").CometWarningScreenContextProvider,{overlayExists:g,children:n}),f[24]=g,f[25]=n,f[26]=e):e=f[26];f[27]!==a||f[28]!==e?(j=l.jsx("div",{className:q,children:l.jsx(c("FDSAspectRatioContainer.react"),{aspectRatio:a,children:e})}),f[27]=a,f[28]=e,f[29]=j):j=f[29];return j}g["default"]=a}),226);
__d("VideoPlayerMoreVideosOnWatchButton.react",["fbt","ix","CometTrackingNodeProvider.react","VideoPlayerActionButton.react","XCometWatchControllerRouteBuilder","fbicon","react","requireDeferred","useCometRouterDispatcher"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j,k=(j||(j=d("react"))).c,l=j,m=c("requireDeferred")("VideoHomeTypedLiteLogger").__setRef("VideoPlayerMoreVideosOnWatchButton.react");function a(a){var b=k(9);a=a.useVerticalLayout;var e=c("useCometRouterDispatcher")(),f;b[0]!==e?(f=function(){m.onReady(function(a){a.log({click_point:"ugc_inline_end_screen",event:"click",event_target:"watch"})});var a=c("XCometWatchControllerRouteBuilder").buildURL({});e!=null&&e.go(a,{})},b[0]=e,b[1]=f):f=b[1];var g=f,j;b[2]===Symbol["for"]("react.memo_cache_sentinel")?(f=d("fbicon")._(i("607168"),16),j=h._("__JHASH__mzLWceEsfgZ__JHASH__"),b[2]=f,b[3]=j):(f=b[2],j=b[3]);var n;b[4]!==g?(n=function(){return g()},b[4]=g,b[5]=n):n=b[5];b[6]!==n||b[7]!==a?(f=l.jsx(c("CometTrackingNodeProvider.react"),{trackingNode:449,children:l.jsx(c("VideoPlayerActionButton.react"),{icon:f,label:j,onPress:n,useVerticalLayout:a})}),b[6]=n,b[7]=a,b[8]=f):f=b[8];return f}g["default"]=a}),226);
__d("VideoPlayerWatchEndScreenWithActions_video.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"VideoPlayerWatchEndScreenWithActions_video",selections:[{args:null,kind:"FragmentSpread",name:"VideoPlayerReshareButton_video"}],type:"Video",abstractKey:null};e.exports=a}),null);
__d("VideoPlayerWatchEndScreenWithActions.react",["CometColumn.react","CometColumnItem.react","CometRelay","VideoPlayerMoreVideosOnWatchButton.react","VideoPlayerReshareButton.react","VideoPlayerWatchAgainButton.react","VideoPlayerWatchEndScreenWithActions_video.graphql","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=(i||(i=d("react"))).c,k=i,l={actions:{alignItems:"x6s0dn4",$$css:!0}};function a(a){var e=j(4),f=a.isWatchEligible;a=a.video$key;var g;e[0]===Symbol["for"]("react.memo_cache_sentinel")?(g=h!==void 0?h:h=b("VideoPlayerWatchEndScreenWithActions_video.graphql"),e[0]=g):g=e[0];g=d("CometRelay").useFragment(g,a);e[1]!==f||e[2]!==g?(a=f===!1&&c("VideoPlayerMoreVideosOnWatchButton.react")?k.jsxs("div",{className:"x78zum5 xl56j7k",children:[k.jsx(c("VideoPlayerMoreVideosOnWatchButton.react"),{useVerticalLayout:!0}),k.jsx(c("VideoPlayerWatchAgainButton.react"),{useVerticalLayout:!0}),k.jsx(c("VideoPlayerReshareButton.react"),{useVerticalLayout:!0,video:g})]}):k.jsxs(c("CometColumn.react"),{xstyle:l.actions,children:[k.jsx(c("CometColumnItem.react"),{children:k.jsx(c("VideoPlayerWatchAgainButton.react"),{})}),k.jsx(c("CometColumnItem.react"),{children:k.jsx(c("VideoPlayerReshareButton.react"),{video:g})})]}),e[1]=f,e[2]=g,e[3]=a):a=e[3];return a}g["default"]=a}),98);
__d("VideoPlayerWithLiveVideoEndscreenAndChaining_video.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"VideoPlayerWithLiveVideoEndscreenAndChaining_video",selections:[{alias:null,args:[{kind:"Literal",name:"supported",value:"2X62EJ"}],concreteType:null,kind:"LinkedField",name:"comet_video_player_live_video_endscreen_content",plural:!1,selections:[{kind:"InlineFragment",selections:[{args:null,documentName:"VideoPlayerWithLiveVideoEndscreenAndChaining_video",fragmentName:"VideoPlayerWithLiveVideoEndscreenToPaidOnlineEventRenderer_renderer",fragmentPropName:"renderer",kind:"ModuleImport"}],type:"VideoPlayerWithLiveVideoEndscreenToPaidOnlineEventRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"VideoPlayerWithLiveVideoEndscreenAndChaining_video",fragmentName:"VideoPlayerWithLiveVideoEndscreenChainedVideosRenderer_renderer",fragmentPropName:"renderer",kind:"ModuleImport"}],type:"VideoPlayerWithLiveVideoEndscreenChainedVideosRenderer",abstractKey:null}],storageKey:'comet_video_player_live_video_endscreen_content(supported:"2X62EJ")'},{args:null,kind:"FragmentSpread",name:"VideoPlayerWithLiveVideoEndscreen_video"}],type:"Video",abstractKey:null};e.exports=a}),null);
__d("VideoPlayerWithLiveVideoEndscreenAndChaining.react",["CometPlaceholder.react","CometRelay","VideoPlayerHooks","VideoPlayerWithLiveVideoEndscreen.react","VideoPlayerWithLiveVideoEndscreenAndChaining_video.graphql","gkx","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j,k=(i||(i=d("react"))).c,l=i;function a(a){var e=k(11),f=a.routeTarget;a=a.video;var g=(j||(j=d("VideoPlayerHooks"))).useEnded(),i=j.useIsLive(),m;e[0]===Symbol["for"]("react.memo_cache_sentinel")?(m=h!==void 0?h:h=b("VideoPlayerWithLiveVideoEndscreenAndChaining_video.graphql"),e[0]=m):m=e[0];m=d("CometRelay").useFragment(m,a);if(!g||!i)return null;if(c("gkx")("20836")){e[1]!==m?(a=l.jsx(c("VideoPlayerWithLiveVideoEndscreen.react"),{video:m}),e[1]=m,e[2]=a):a=e[2];return a}e[3]!==f?(g={routeTarget:f},e[3]=f,e[4]=g):g=e[4];e[5]!==m.comet_video_player_live_video_endscreen_content||e[6]!==g?(i=l.jsx(c("CometPlaceholder.react"),{fallback:null,children:l.jsx(d("CometRelay").MatchContainer,{match:m.comet_video_player_live_video_endscreen_content,props:g})}),e[5]=m.comet_video_player_live_video_endscreen_content,e[6]=g,e[7]=i):i=e[7];e[8]!==m||e[9]!==i?(a=l.jsx(c("VideoPlayerWithLiveVideoEndscreen.react"),{video:m,children:i}),e[8]=m,e[9]=i,e[10]=a):a=e[10];return a}g["default"]=a}),98);