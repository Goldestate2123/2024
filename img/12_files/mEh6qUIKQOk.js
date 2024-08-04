;/*FB_PKG_DELIM*/

__d("BaseBadgeAligner.react",["BaseView.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react"),j={center:{alignItems:"x6s0dn4",end:"xoo4vsp",left:null,right:null,start:"x1mb8mph",justifyContent:"x13a6bvl",$$css:!0},left:{alignItems:"x1cy8zhl",end:"xoo4vsp",left:null,right:null,start:"x17qophe",justifyContent:"x13a6bvl",$$css:!0},right:{alignItems:"xuk3077",end:"xds687c",left:null,right:null,start:"x1mb8mph",justifyContent:"x13a6bvl",$$css:!0},root:{bottom:"x1ey2m1c",display:"x78zum5",flexDirection:"xdt5ytf",pointerEvents:"x47corl",position:"x10l6tqk",top:"x13vifvy",$$css:!0},topRight:{alignItems:"xuk3077",end:"xds687c",left:null,right:null,start:"x1mb8mph",justifyContent:"x1nhvcw1",$$css:!0}};function a(a){var b=a.badgeAlign;b=b===void 0?"right":b;a=a.children;return i.jsx(c("BaseView.react"),{xstyle:[j.root,(b=j[b])!=null?b:null],children:a})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("BaseStyledBadgeContainer.react",["BaseBadgeAligner.react","BaseView.react","CometVisualCompletionAttributes","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react"),j={expanding:{display:"x1lliihq",$$css:!0},root:{display:"x1rg5ohu",$$css:!0}};function a(a){var b=a.badge,d=a.badgeAlign;d=d===void 0?"right":d;var e=a.children,f=a.expanding;f=f===void 0?!1:f;a=a.xstyle;return i.jsxs(c("BaseView.react"),babelHelpers["extends"]({},c("CometVisualCompletionAttributes").IGNORE_DYNAMIC,{xstyle:[j.root,f&&j.expanding,a],children:[e,i.jsx(c("BaseBadgeAligner.react"),{badgeAlign:d,children:b})]}))}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometDisabledContext",["react"],(function(a,b,c,d,e,f,g){"use strict";var h;a=h||d("react");b=a.createContext(!1);g["default"]=b}),98);
__d("FDSBadgeContainer.react",["BaseStyledBadgeContainer.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");function a(a){var b=a.badge,d=a.badge_DEPRECATED,e=a.badgeAlign;e=e===void 0?"right":e;var f=a.children,g=a.expanding;g=g===void 0?!1:g;a=a.xstyle;return i.jsx(c("BaseStyledBadgeContainer.react"),{badge:(b=b)!=null?b:d,badgeAlign:e,expanding:g,xstyle:a,children:f})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("FDSImageContainer.react",["BaseView.react","CometDisabledContext","FDSAspectRatioContainer.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||(h=d("react")),j=h.useContext,k={disabled:{opacity:"xti2d7y",$$css:!0},insetBorder:{bottom:"x1ey2m1c",boxShadow:"xlg9a9y",left:"xu96u03",start:null,end:null,position:"x10l6tqk",right:"x3m8u43",top:"x13vifvy",$$css:!0},root:{backgroundColor:"x1jx94hy",display:"x1lliihq",overflowX:"x6ikm8r",overflowY:"x10wlt62",$$css:!0}},l={circle:{borderTopStartRadius:"x14yjl9h",borderTopEndRadius:"xudhj91",borderBottomEndRadius:"x18nykt9",borderBottomStartRadius:"xww2gxu",$$css:!0},rounded:{borderTopStartRadius:"x1lq5wgf",borderTopEndRadius:"xgqcy7u",borderBottomEndRadius:"x30kzoy",borderBottomStartRadius:"x9jhf4c",$$css:!0},square:{$$css:!0}},m={16:{height:"xlup9mm",width:"x1kky2od",$$css:!0},20:{height:"x1qx5ct2",width:"xw4jnvo",$$css:!0},24:{height:"xxk0z11",width:"xvy4d1p",$$css:!0},28:{height:"x1fgtraw",width:"xgd8bvy",$$css:!0},32:{height:"x10w6t97",width:"x1td3qas",$$css:!0},36:{height:"xc9qbxq",width:"x14qfxbe",$$css:!0},40:{height:"x1vqgdyp",width:"x100vrsf",$$css:!0},44:{height:"xn3w4p2",width:"x187nhsf",$$css:!0},48:{height:"xsdox4t",width:"x1useyqa",$$css:!0},52:{height:"xdd8jsf",width:"xvni27",$$css:!0},56:{height:"xnnlda6",width:"x15yg21f",$$css:!0},60:{height:"xng8ra",width:"x1247r65",$$css:!0},64:{height:"x1peatla",width:"x1fu8urw",$$css:!0},68:{height:"x1gb2em4",width:"x13zx6y",$$css:!0},72:{height:"xy75621",width:"xni59qk",$$css:!0},76:{height:"x14baz6b",width:"x1d7z9mz",$$css:!0},80:{height:"xwzfr38",width:"x1dmp6jm",$$css:!0},132:{height:"x1h5wmu3",width:"x16s0kzc",$$css:!0},144:{height:"x16d3s56",width:"x1fznrkb",$$css:!0},160:{height:"x1ymw6g",width:"xq1dxzn",$$css:!0}};function a(a){var b=a.children,d=a.disabled;d=d===void 0?!1:d;var e=a.includeBorder;e=e===void 0?!0:e;var f=a.shape;f=f===void 0?"square":f;var g=a.xstyle;a=babelHelpers.objectWithoutPropertiesLoose(a,["children","disabled","includeBorder","shape","xstyle"]);var h=a.aspectRatio;h=h===void 0?null:h;a=a.size;a=a===void 0?null:a;var n=j(c("CometDisabledContext"));d=(d=d)!=null?d:n;n=e?i.jsx(c("BaseView.react"),{xstyle:[k.insetBorder,l[f]]}):null;return i.jsx(c("BaseView.react"),{xstyle:[k.root,l[f],a!=null&&m[a],g],children:i.jsx(c("BaseView.react"),{xstyle:d&&k.disabled,children:h!=null?i.jsxs(c("FDSAspectRatioContainer.react"),{aspectRatio:h,children:[b,n]}):i.jsxs(i.Fragment,{children:[b,n]})})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometProfilePhoto_EXPERIMENTAL.react",["CometImage.react","FDSBadgeContainer.react","FDSImageContainer.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react"),j={photo:{display:"x1lliihq",maxWidth:"x193iq5w",minHeight:"x1us19tq",objectFit:"xl1xv1r",$$css:!0}};function a(a){var b=a.disabled;b=b===void 0?!1:b;var d=a.shape;d=d===void 0?"square":d;var e=a.size,f=a.source,g=a.alt,h=a.badge;h=h===void 0?void 0:h;a=a.badgeAlign;a=a===void 0?"right":a;e=i.jsx(c("FDSImageContainer.react"),babelHelpers["extends"]({},e==="fill"?{aspectRatio:1}:{size:e},{disabled:b,shape:d,children:i.jsx(c("CometImage.react"),{alt:g,src:f,xstyle:j.photo})}));return h!=null?i.jsx(c("FDSBadgeContainer.react"),{badge:h,badgeAlign:a,children:e}):e}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometVideoHomeVideoContextMenuContentsQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="7882135588548948"}),null);
__d("CometVideoHomeVideoContextMenuContentsQuery$Parameters",["CometVideoHomeVideoContextMenuContentsQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("CometVideoHomeVideoContextMenuContentsQuery_facebookRelayOperation"),metadata:{},name:"CometVideoHomeVideoContextMenuContentsQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometVideoHomeVideoContextMenuContents.entrypoint",["CometVideoHomeVideoContextMenuContentsQuery$Parameters","JSResourceForInteraction"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){var c=a.storyDebugInfo,d=a.videoID;a=a.videoMenuLocation;return{queries:{menuContentsQuery:{parameters:b("CometVideoHomeVideoContextMenuContentsQuery$Parameters"),variables:{story_debug_info:c,videoID:d,videoMenuLocation:a}}}}},root:c("JSResourceForInteraction")("CometVideoHomeVideoContextMenuContents.react").__setRef("CometVideoHomeVideoContextMenuContents.entrypoint")};g["default"]=a}),98);
__d("CometVideoHomeVideoContextMenu.react",["CometEntryPointPopoverTrigger.react","CometTrackingNodeProvider.react","CometVideoHomeVideoContextMenuContents.entrypoint","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||(h=d("react"))).c,j=h;function a(a){var b=i(18),d=a.button,e=a.enableLogging,f=a.hideableToken,g=a.identifierToken,h=a.onHideVideo,k=a.onMenuVisibilityChange,l=a.onUnsaveVideo,m=a.position,n=a.storyDebugInfo,o=a.tracking,p=a.videoChannelType,q=a.videoID;a=a.videoMenuLocation;e=e===void 0?!0:e;if(q==null)return null;var r;b[0]!==n||b[1]!==q||b[2]!==a?(r={storyDebugInfo:n,videoID:q,videoMenuLocation:a},b[0]=n,b[1]=q,b[2]=a,b[3]=r):r=b[3];b[4]!==e||b[5]!==f||b[6]!==g||b[7]!==h||b[8]!==l||b[9]!==o||b[10]!==p?(n={enableLogging:e,hideableToken:f,identifierToken:g,onHideVideo:h,onUnsaveVideo:l,tracking:o,videoChannelType:p},b[4]=e,b[5]=f,b[6]=g,b[7]=h,b[8]=l,b[9]=o,b[10]=p,b[11]=n):n=b[11];a=(q=m)!=null?q:"below";b[12]!==r||b[13]!==k||b[14]!==n||b[15]!==a||b[16]!==d?(e=j.jsx(c("CometTrackingNodeProvider.react"),{trackingNode:55,children:j.jsx(c("CometEntryPointPopoverTrigger.react"),{align:"end",entryPointParams:r,onVisibilityChange:k,otherProps:n,popoverEntryPoint:c("CometVideoHomeVideoContextMenuContents.entrypoint"),position:a,children:d})}),b[12]=r,b[13]=k,b[14]=n,b[15]=a,b[16]=d,b[17]=e):e=b[17];return e}g["default"]=a}),98);
__d("CometVideoHomeThreeDotContextMenu.react",["fbt","ix","CometVideoHomeVideoContextMenu.react","TetraIcon.react","fbicon","react"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j,k=(j||(j=d("react"))).c,l=j;function a(a){var b=k(17),e,f,g,j,n,o;b[0]!==a?(e=a.color,g=a.icon,j=a.onPress,n=a.position,f=a.stopPropagation,o=babelHelpers.objectWithoutPropertiesLoose(a,["color","icon","onPress","position","stopPropagation"]),b[0]=a,b[1]=e,b[2]=f,b[3]=g,b[4]=j,b[5]=n,b[6]=o):(e=b[1],f=b[2],g=b[3],j=b[4],n=b[5],o=b[6]);var p=e===void 0?"primary":e;a=f===void 0?!1:f;b[7]!==p||b[8]!==g||b[9]!==j?(e=function(a,b){var e;return l.jsx(c("TetraIcon.react"),{"aria-label":h._("__JHASH__vsPR1PMxOLr__JHASH__"),color:p,icon:(e=g)!=null?e:d("fbicon")._(i("484390"),20),onPress:j?function(a){j(),b(a)}:b,ref:a})},b[7]=p,b[8]=g,b[9]=j,b[10]=e):e=b[10];b[11]!==e||b[12]!==n||b[13]!==o?(f=l.jsx(c("CometVideoHomeVideoContextMenu.react"),babelHelpers["extends"]({button:e,position:n},o)),b[11]=e,b[12]=n,b[13]=o,b[14]=f):f=b[14];e=f;if(a){b[15]!==e?(n=l.jsx("div",{onClick:m,children:e}),b[15]=e,b[16]=n):n=b[16];return n}return e}function m(a){a.stopPropagation()}g["default"]=a}),226);
__d("FDSFacepilePhoto.react",["BaseView.react","CometProfilePhoto_EXPERIMENTAL.react","FDSBadgeContainer.react","FDSText.react","react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=i||d("react"),k={item:{position:"x10l6tqk",$$css:!0},moreItem:{alignItems:"x6s0dn4",backgroundColor:"x1qhmfi1",borderTopStartRadius:"x14yjl9h",borderTopEndRadius:"xudhj91",borderBottomEndRadius:"x18nykt9",borderBottomStartRadius:"xww2gxu",display:"x78zum5",flexDirection:"xdt5ytf",height:"x5yr21d",justifyContent:"xl56j7k",$$css:!0},moreItemFontWeight:{fontWeight:"x1s688f",$$css:!0},moreItemInsetBorder:{borderTopStartRadius:"x1o1ewxj",borderTopEndRadius:"x3x9cwd",borderBottomEndRadius:"x1e5q0jg",borderBottomStartRadius:"x13rtm0m",bottom:"x1ey2m1c",boxShadow:"xlg9a9y",end:"xds687c",left:null,right:null,position:"x10l6tqk",start:"x17qophe",top:"x13vifvy",$$css:!0},smallBadgeFontSize:{fontSize:"x190qgfh",$$css:!0}},l=48,m={32:{height:"x10w6t97",width:"x1td3qas",$$css:!0},36:{height:"xc9qbxq",width:"x14qfxbe",$$css:!0},40:{height:"x1vqgdyp",width:"x100vrsf",$$css:!0},44:{height:"xn3w4p2",width:"x187nhsf",$$css:!0},48:{height:"xsdox4t",width:"x1useyqa",$$css:!0},56:{height:"xnnlda6",width:"x15yg21f",$$css:!0},60:{height:"xng8ra",width:"x1247r65",$$css:!0},72:{height:"xy75621",width:"xni59qk",$$css:!0},80:{height:"xwzfr38",width:"x1dmp6jm",$$css:!0},120:{height:"x1wkxgih",width:"xygnafs",$$css:!0}},n={1:{height:"x5yr21d",width:"xh8yej3",$$css:!0},2:{height:"x1auzw0x",width:"xqu606t",$$css:!0},3:{height:"xs1gewo",width:"x87lv02",$$css:!0},4:{height:"xs1gewo",width:"x87lv02",$$css:!0}},o={0:{borderTopColor:"x6zyg47",borderEndColor:"x1xm1mqw",borderBottomColor:"xpn8fn3",borderStartColor:"xtct9fg",borderTopStartRadius:"x14yjl9h",borderTopEndRadius:"xudhj91",borderBottomEndRadius:"x18nykt9",borderBottomStartRadius:"xww2gxu",borderTopStyle:"x13fuv20",borderEndStyle:"xu3j5b3",borderBottomStyle:"x1q0q8m5",borderStartStyle:"x26u7qi",borderTopWidth:"xamhcws",borderEndWidth:"xol2nv",borderBottomWidth:"xlxy82",borderStartWidth:"x19p7ews",bottom:"x1ey2m1c",boxSizing:"x1afcbsf",marginTop:"x1kgmq87",marginEnd:"xwrv7xz",marginBottom:"xmgb6t1",marginStart:"x8182xy",start:"x17qophe",left:null,right:null,zIndex:"x1vjfegm",$$css:!0},1:{end:"xds687c",left:null,right:null,top:"x13vifvy",$$css:!0}},p={0:{borderTopColor:"x6zyg47",borderEndColor:"x1xm1mqw",borderBottomColor:"xpn8fn3",borderStartColor:"xtct9fg",borderTopStartRadius:"x14yjl9h",borderTopEndRadius:"xudhj91",borderBottomEndRadius:"x18nykt9",borderBottomStartRadius:"xww2gxu",borderTopStyle:"x13fuv20",borderEndStyle:"xu3j5b3",borderBottomStyle:"x1q0q8m5",borderStartStyle:"x26u7qi",borderTopWidth:"xamhcws",borderEndWidth:"xol2nv",borderBottomWidth:"xlxy82",borderStartWidth:"x19p7ews",bottom:"x1ey2m1c",boxSizing:"x1afcbsf",end:"xds687c",left:null,right:null,marginTop:"x1kgmq87",marginEnd:"xwrv7xz",marginBottom:"xmgb6t1",marginStart:"x8182xy",zIndex:"x1vjfegm",$$css:!0},1:{start:"x17qophe",left:null,right:null,top:"x13vifvy",$$css:!0}},q={0:{left:"x1nrll8i",start:null,end:null,top:"xnfr1j",transform:"xuuh30",$$css:!0},1:{bottom:"x19ip775",start:"x1ogr5u8",left:null,right:null,$$css:!0},2:{bottom:"x19ip775",end:"xgmwauy",left:null,right:null,$$css:!0}},r={0:{start:"x1ogr5u8",left:null,right:null,top:"xnfr1j",$$css:!0},1:{bottom:"x19ip775",start:"x1ogr5u8",left:null,right:null,$$css:!0},2:{end:"xgmwauy",left:null,right:null,top:"xnfr1j",$$css:!0},3:{bottom:"x19ip775",end:"xgmwauy",left:null,right:null,$$css:!0}},s={circle:{$$css:!0},rounded:{backgroundColor:"x1jx94hy",borderTopStartRadius:"x1a2cdl4",borderTopEndRadius:"xnhgr82",borderBottomEndRadius:"x1qt0ttw",borderBottomStartRadius:"xgk8upj",$$css:!0},square:{backgroundColor:"x1jx94hy",borderTopStartRadius:"x168nmei",borderTopEndRadius:"x13lgxp2",borderBottomEndRadius:"x5pf9jr",borderBottomStartRadius:"xo71vjh",$$css:!0}};function a(a){var b=a.ariaHidden,d=a.badge,e=a.badge_DEPRECATED,f=a.badgeAlign,g=a.expanding;g=g===void 0?!1:g;var i=a.label,t=a.orientation,u=t===void 0?"ascending":t;t=a.shape;var v=t===void 0?"circle":t;t=a.size;var w=a.sources;a=a.totalItems;var x=a>w.length||w.length>4,y=Math.min(w.length+(x?1:0),4);w=w.slice(0,x?y-1:y).map(function(a,b){return j.createElement(c("CometProfilePhoto_EXPERIMENTAL.react"),babelHelpers["extends"]({},typeof a==="object"?a:{source:a},{key:b,shape:v,size:"fill"}))});if(x){x=j.jsxs(c("BaseView.react"),{xstyle:k.moreItem,children:[j.jsx(c("FDSText.react"),{color:"secondary",type:"meta4",children:j.jsxs("span",{className:(h||(h=c("stylex")))(k.moreItemFontWeight,t<=l&&k.smallBadgeFontSize),children:["+",a-y+1]})}),j.jsx(c("BaseView.react"),{xstyle:k.moreItemInsetBorder})]},"more");y===4?w.splice(-1,0,x):w.push(x)}a=j.jsx(c("BaseView.react"),{"aria-hidden":b,"aria-label":i,role:i!=null?"img":void 0,xstyle:m[t],children:w.map(function(a,b){return j.jsx(c("BaseView.react"),{xstyle:[k.item,n[y],y===4&&r[b]||y===3&&q[b]||y===2&&(u==="descending"?p[b]:o[b]),b===0?s[v]:void 0],children:a},b)})});if(d!=null){return j.jsx(c("FDSBadgeContainer.react"),{badge:(x=d)!=null?x:e,badgeAlign:f,expanding:g,children:a})}return a}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);