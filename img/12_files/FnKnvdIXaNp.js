;/*FB_PKG_DELIM*/

__d("BaseMultiPageEntryPointImpl.react",["CometPlaceholder.react","CometRelay","clearTimeout","react","setTimeout"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||(h=d("react"));b=h;var j=b.useEffect,k=b.useRef;function a(a){var b=a.entryPoint,e=a.environmentProvider,f=a.fallback,g=a.loadedEntryPoint,h=a.otherProps,l=a.placeholderComponent;l=l===void 0?c("CometPlaceholder.react"):l;var m=a.preloadParams;a=a.usePlaceholder;a=a===void 0?!0:a;e=d("CometRelay").useEntryPointLoader(e,b);var n=e[0],o=e[1],p=e[2],q=(b=n)!=null?b:g,r=k(null);j(function(){r.current!=null&&(c("clearTimeout")(r.current),r.current=null);q.isDisposed&&o(m);return function(){r.current=c("setTimeout")(function(){n?p():g.dispose(),r.current=null},6e4)}},[p,q.isDisposed,g,m,o,n]);e=i.jsx(d("CometRelay").EntryPointContainer,{entryPointReference:q,props:h});return!a?e:i.jsx(l,{fallback:f,children:e})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometGroupResharesDialogPushPageContentQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="7906405729419691"}),null);
__d("CometLinkSharingContext",["react"],(function(a,b,c,d,e,f,g){"use strict";var h;a=h||d("react");b={getWrappedShareUrlID:function(a){return null},shareSheetSurface:null,wrappedShareUrl:""};c=a.createContext(b);e=c;g["default"]=e}),98);
__d("ProfilePlusSwitchProfilesUnifiedShareSheetShareToPageQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="6752145014808333"}),null);
__d("UnifiedShareSheetSharingOptionsItemButton.react",["CometColumn.react","CometColumnItem.react","CometLinkSharingContext","CometPlaceholder.react","CometPressable.react","FDSSkittleIcon.react","FDSText.react","UnifiedShareSheetHScrollTilesItemPlaceholder.react","cr:8265","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||(h=d("react")),j=h.useContext,k={button:{borderTopStartRadius:"xhk9q7s",borderTopEndRadius:"x1otrzb0",borderBottomEndRadius:"x1i1ezom",borderBottomStartRadius:"x1o6z2jb",height:"xnfxvih",marginTop:"xdj266r",marginEnd:"x11i5rnm",marginBottom:"xat24cr",marginStart:"x1mh8g0r",width:"x19v3vle",$$css:!0}};function a(a){var d=a.icon,e=a.onPress,f=a.text;a=babelHelpers.objectWithoutPropertiesLoose(a,["icon","onPress","text"]);var g=j(c("CometLinkSharingContext")),h=g.shareSheetSurface,l=g.wrappedShareUrl,m=b("cr:8265")();return i.jsx(c("CometPlaceholder.react"),{fallback:i.jsx(c("UnifiedShareSheetHScrollTilesItemPlaceholder.react"),{}),children:i.jsx(c("CometPressable.react"),babelHelpers["extends"]({onPress:function(){e(),m&&m({loggingMetrics:{off_platform_sharing:{entry_point:"AGNOSTIC_UNIFIED_SHARE_SHEET_ENTRYPOINT"}},shareSheetSurface:h,wrappedUrl:l})},xstyle:k.button},a,{children:i.jsxs(c("CometColumn.react"),{expanding:!0,paddingVertical:8,spacing:12,children:[i.jsx(c("CometColumnItem.react"),{align:"center",children:i.jsx(c("FDSSkittleIcon.react"),{color:"gray",icon:d,size:60})}),i.jsx(c("CometColumnItem.react"),{align:"center",children:i.jsx(c("FDSText.react"),{align:"center",numberOfLines:2,type:"body4",children:f})})]})}))})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("usePageEntryPointPrerenderer",["FBLogger","react","useCometEntryPointPrerendererWithQueryTimeoutPrivate"],(function(a,b,c,d,e,f,g){"use strict";var h;b=h||d("react");var i=b.useCallback,j=b.useState;function a(a,b,d){var e=j(),f=e[0],g=e[1];e=c("useCometEntryPointPrerendererWithQueryTimeoutPrivate")(a,b,d);var h=e[0];a=e[1];b=i(function(a){var b=h();g(b);if(b==null){c("FBLogger")("comet_ui").blameToPreviousFrame().mustfix("Unable to present comet page EntryPoint component, preloadParams not set");return}b!=null&&a(b)},[h]);return[b,a,f]}g["default"]=a}),98);
__d("usePushPage",["BaseMultiPageEntryPointImpl.react","BaseMultiPageViewContext","FBLogger","react","useCometRelayEntrypointContextualEnvironmentProvider","usePageEntryPointPrerenderer"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||(h=d("react"));b=h;var j=b.useCallback,k=b.useContext;function a(a,b,d){d===void 0&&(d="button");var e=c("useCometRelayEntrypointContextualEnvironmentProvider")(),f=k(c("BaseMultiPageViewContext"));d=c("usePageEntryPointPrerenderer")(a,b,d);var g=d[0];d=d[1];var h=j(function(d,h){h=h===void 0?{}:h;var j=h.fallback,k=h.pageKey;if(f==null)throw c("FBLogger")("BaseMultiPageView").blameToPreviousFrame().mustfixThrow("usePushPage can only be used inside BaseMultiPageView.");if(b==null)return;g(function(g){return f.pushPage(function(){var h;return i.jsx(c("BaseMultiPageEntryPointImpl.react"),{entryPoint:a,environmentProvider:e,fallback:(h=j)!=null?h:f.fallback,loadedEntryPoint:g,otherProps:d,placeholderComponent:f.placeholderComponent,preloadParams:b})},{pageKey:k})})},[f,e,g,a,b]);return[h,d]}g["default"]=a}),98);