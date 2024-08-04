;/*FB_PKG_DELIM*/

__d("useComposerHeaderOnClose",["fbt","CometComposerDirtyTracker","emptyFunction","react","useCometConfirmationDialog"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=(i||d("react")).c;function a(a){var b=j(7),e=a.creationSessionID,f=a.isDirty,g=a.isEmpty,i=a.onClose;a=a.triggerUnsavedChangesWarning;var k=c("useCometConfirmationDialog")();if(b[0]!==a||b[1]!==f||b[2]!==g||b[3]!==k||b[4]!==e||b[5]!==i){var l;l=a===!0?function(){f===!0&&g!==!0?k({body:h._("__JHASH__IadpR1L6YdB__JHASH__"),cancel:h._("__JHASH__DJnbvd6w38Q__JHASH__"),confirm:h._("__JHASH__ZxUcPxGzo9j__JHASH__"),title:h._("__JHASH__F-CluDWnn28__JHASH__")},function(){d("CometComposerDirtyTracker").setIsComposerDirty(e,!1),i==null?void 0:i()}):i&&i()}:(l=i)!=null?l:c("emptyFunction");b[0]=a;b[1]=f;b[2]=g;b[3]=k;b[4]=e;b[5]=i;b[6]=l}else l=b[6];return l}g["default"]=a}),226);
__d("CometComposerHeader.react",["fbt","ix","CometTrackingNodeProvider.react","FDSText.react","TetraCircleButton.react","cr:8468","fbicon","gkx","react","useComposerHeaderOnClose","withComposerViewStatePart"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j,k=(j||(j=d("react"))).c,l=j,m=c("gkx")("7121");function a(a){var e=k(24),f=a.closeButtonTestID,g=a.creationSessionID,j=a.id,n=a.isDirty,o=a.isEmpty,p=a.onBack,q=a.onClose,r=a.testid,s=a.title,t=a.triggerUnsavedChangesWarning,u=a.withBackButton;a=a.withCloseButton;f=f===void 0?"CometComposerHeader-CloseButton":f;n=n===void 0?!1:n;t=t===void 0?!1:t;u=u===void 0?!1:u;a=a===void 0?!1:a;var v;e[0]!==g||e[1]!==n||e[2]!==o||e[3]!==q||e[4]!==t?(v={creationSessionID:g,isDirty:n,isEmpty:o,onClose:q,triggerUnsavedChangesWarning:t},e[0]=g,e[1]=n,e[2]=o,e[3]=q,e[4]=t,e[5]=v):v=e[5];g=c("useComposerHeaderOnClose")(v);e[6]!==s||e[7]!==j?(n=s!=null?l.jsx("div",{className:"x6s0dn4 x1nb4dca x1q0q8m5 xso031l x9f619 x78zum5 xng8ra xl56j7k",children:l.jsx(c("FDSText.react"),{id:j,isSemanticHeading:!0,numberOfLines:1,type:"headlineEmphasized2",children:s})}):null,e[6]=s,e[7]=j,e[8]=n):n=e[8];e[9]===Symbol["for"]("react.memo_cache_sentinel")?(o="x78zum5 x92rtbv x10l6tqk x1tk7jg1",q=m===!0&&b("cr:8468")!=null?l.jsx(b("cr:8468"),{}):null,e[9]=o,e[10]=q):(o=e[9],q=e[10]);e[11]!==a||e[12]!==g||e[13]!==f?(t=l.jsxs("div",{className:o,children:[q,a?l.jsx(c("CometTrackingNodeProvider.react"),{trackingNode:141,children:l.jsx("div",{className:"xurb0ha","data-testid":void 0,children:l.jsx(c("TetraCircleButton.react"),{color:"secondary",icon:d("fbicon")._(i("478233"),20),label:h._("__JHASH__cCrSTii9yXy__JHASH__"),onPress:g,size:36,testid:void 0})})}):null]}),e[11]=a,e[12]=g,e[13]=f,e[14]=t):t=e[14];e[15]!==u||e[16]!==p?(v=u?l.jsx("div",{className:"x10l6tqk x16q8cke x1tk7jg1","data-testid":void 0,children:l.jsx(c("TetraCircleButton.react"),{color:"secondary",icon:d("fbicon")._(i("512647"),20),label:h._("__JHASH__v6nfNn2Wv-y__JHASH__"),onPress:p,size:36})}):null,e[15]=u,e[16]=p,e[17]=v):v=e[17];e[18]!==s||e[19]!==r||e[20]!==n||e[21]!==t||e[22]!==v?(j=l.jsxs("div",{"aria-label":s,"data-testid":void 0,role:"dialog",children:[n,t,v]}),e[18]=s,e[19]=r,e[20]=n,e[21]=t,e[22]=v,e[23]=j):j=e[23];return j}e=c("withComposerViewStatePart")(a,function(a){return{creationSessionID:a.creationSessionID,isDirty:a.isDirty,isEmpty:(a=a.isEmptyMetaData)==null?void 0:a.isEmpty}});g["default"]=e}),226);
__d("CometComposerOnSubmitContext",["react"],(function(a,b,c,d,e,f,g){"use strict";var h;a=h||d("react");b=a.createContext({errorMetadata:null,isSaving:!1});g["default"]=b}),98);
__d("CometComposerPrivacySelectorButton_scope.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometComposerPrivacySelectorButton_scope",selections:[{args:null,kind:"FragmentSpread",name:"CometPrivacyIcon_scope"},{args:null,kind:"FragmentSpread",name:"CometPrivacySelectorLabel_scope"},{args:null,kind:"FragmentSpread",name:"useCometPrivacySelectorDescriptionLabel_scope"}],type:"PrivacyScope",abstractKey:null};e.exports=a}),null);
__d("CometPrivacySelectorHelpers",["fbt","recoverableViolation"],(function(a,b,c,d,e,f,g,h){"use strict";function a(a){return a==null?null:h._("__JHASH__TevE6dG-7BA__JHASH__",[h._param("privacyLabel",a)])}function b(a,b){return a===!0&&b!=="NONE"}function i(a){switch(a){case null:case void 0:return null;case"SPECIFIC_FRIENDS":case"FB_STORIES_SPECIFIC_FRIENDS":return"SPECIFIC_FRIENDS";case"FRIENDS_EXCEPT":case"FB_SHORTS_FRIENDS_EXCEPT":case"SOUNDBITES_FRIENDS_EXCEPT":case"FB_STORIES_FRIENDS_EXCEPT":return"FRIENDS_EXCEPT";default:return a}}function d(a){var b=i(a);switch(b){case"SPECIFIC_FRIENDS":return h._("__JHASH__5eIB9_yETD9__JHASH__");case"FRIENDS_EXCEPT":return h._("__JHASH__OumFNOwf4eQ__JHASH__");default:c("recoverableViolation")("Unsupported saved custom type: "+((b=a)!=null?b:"null"),"comet_privacy_selector");return h._("__JHASH__JQOXnRWhFTx__JHASH__")}}g.getTagExpandedLabel=a;g.hasTagExpansion=b;g.getSavedCustomListType=i;g.getSavedCustomTypeSelectedHeading=d}),226);
__d("CometPrivacySelectorLabel_scope.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometPrivacySelectorLabel_scope",selections:[{alias:null,args:null,kind:"ScalarField",name:"label",storageKey:null},{alias:null,args:null,concreteType:"PrivacyOption",kind:"LinkedField",name:"selected_option",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"current_tag_expansion",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"show_tag_expansion_options",storageKey:null}],type:"PrivacyScope",abstractKey:null};e.exports=a}),null);
__d("CometPrivacySelectorLabel.react",["CometPrivacySelectorHelpers","CometPrivacySelectorLabel_scope.graphql","CometRelay","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=i||d("react");function a(a){a=a.scope;a=d("CometRelay").useFragment(h!==void 0?h:h=b("CometPrivacySelectorLabel_scope.graphql"),a);var c=a.label,e=a.selected_option;a=a.show_tag_expansion_options;if(c==null)return null;a=d("CometPrivacySelectorHelpers").hasTagExpansion(a,e==null?void 0:e.current_tag_expansion);return j.jsx("span",{className:"xw3qccf xeaf4i8",children:a?d("CometPrivacySelectorHelpers").getTagExpandedLabel(c):c})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometComposerPrivacySelectorButton.react",["ix","BaseFocusRing.react","CometComposerPrivacySelectorButton_scope.graphql","CometPressable.react","CometPrivacyIcon.react","CometPrivacySelectorButtonSavingOverlay.react","CometPrivacySelectorLabel.react","CometRelay","FDSText.react","TetraIcon.react","fbicon","react","stylex","useCometPrivacySelectorDescriptionLabel.react"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j,k,l=k||d("react"),m={button:{backgroundColor:"x1qhmfi1",borderTopStartRadius:"xhk9q7s",borderTopEndRadius:"x1otrzb0",borderBottomEndRadius:"x1i1ezom",borderBottomStartRadius:"x1o6z2jb",paddingStart:"xurb0ha",paddingEnd:"x1sxyh0",paddingTop:"x1iorvi4",paddingBottom:"xjkvuk6",$$css:!0},content:{alignItems:"x6s0dn4",display:"x78zum5",justifyContent:"xl56j7k",$$css:!0},invisible:{visibility:"xlshs6z",$$css:!0}};e=l.forwardRef(a);function a(a,e){var f=babelHelpers["extends"]({},a),g=f.isSaving;a=f.scope;var k=babelHelpers.objectWithoutPropertiesLoose(f,["isSaving","scope"]),n=d("CometRelay").useFragment(i!==void 0?i:i=b("CometComposerPrivacySelectorButton_scope.graphql"),a),o=c("useCometPrivacySelectorDescriptionLabel.react")(n),p=f.disabled===!0?"secondary":"primary";return l.jsx(c("BaseFocusRing.react"),{children:function(a){return l.jsx(c("CometPressable.react"),babelHelpers["extends"]({},k,{"aria-label":o,overlayDisabled:!0,ref:e,suppressFocusRing:!0,testid:void 0,children:l.jsx(c("FDSText.react"),{color:p,type:"bodyLink4",children:l.jsxs("div",{className:"x1n2onr6",children:[l.jsx(c("CometPrivacySelectorButtonSavingOverlay.react"),{isSaving:g}),l.jsx("div",{className:(j||(j=c("stylex")))(m.button,a),children:l.jsxs("div",{className:j(g&&m.invisible,m.content),children:[l.jsx(c("CometPrivacyIcon.react"),{"aria-hidden":!0,color:p,marginEnd:4,scope:n}),l.jsx(c("CometPrivacySelectorLabel.react"),{scope:n}),f.disabled!==!0&&l.jsx(c("TetraIcon.react"),{icon:d("fbicon")._(h("481880"),12),size:12})]})})]})})}))}})}a.displayName=a.name+" [from "+f.id+"]";a=e;g["default"]=a}),98);
__d("CometComposerPrivacySelectorEntryPointButton_renderer.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[{defaultValue:null,kind:"LocalArgument",name:"localPrivacyRow"},{defaultValue:null,kind:"LocalArgument",name:"renderLocation"},{defaultValue:null,kind:"LocalArgument",name:"tags"}],kind:"Fragment",metadata:null,name:"CometComposerPrivacySelectorEntryPointButton_renderer",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"source",plural:!1,selections:[{alias:null,args:null,concreteType:"PrivacyRowInput",kind:"LinkedField",name:"privacy_row_input",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"PrivacyRowInput_fragment"}],storageKey:null},{alias:"scope",args:[{kind:"Variable",name:"render_location",variableName:"renderLocation"},{kind:"Variable",name:"selected_override",variableName:"localPrivacyRow"},{kind:"Variable",name:"tags",variableName:"tags"}],concreteType:"PrivacyScope",kind:"LinkedField",name:"privacy_scope_for_location",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"CometPrivacySelectorTooltip_scope"},{args:null,kind:"FragmentSpread",name:"CometComposerPrivacySelectorButton_scope"}],storageKey:null}],storageKey:null}],type:"PrivacyScopeCometComposerButtonEntryPointRenderer",abstractKey:null};e.exports=a}),null);
__d("ComposerAudienceOverrideLogger",["requireDeferred"],(function(a,b,c,d,e,f,g){"use strict";var h=c("requireDeferred")("AudienceOverridesClientFalcoEvent").__setRef("ComposerAudienceOverrideLogger");function a(a){var b=a.creationSessionID,c=a.eventType,d=a.privacyPostParam,e=a.productType;h.onReady(function(a){return a.log(function(){return{composer_session_id:b,event_type:c,privacy_post_param:JSON.stringify(d),product_type:e}})})}function b(a){var b=a.audienceMode,c=a.creationSessionID,d=a.eventType,e=a.productType;h.onReady(function(a){return a.log(function(){return{audience_mode:b,composer_session_id:c,event_type:d,product_type:e}})})}function d(a){var b=a.creationSessionID,c=a.privacyPostParam,d=a.productType;h.onReady(function(a){return a.log(function(){return{composer_session_id:b,event_type:"client_initial_privacy_render",privacy_post_param:JSON.stringify(c),product_type:d}})})}function e(a){var b=a.creationSessionID,c=a.privacyPostParam,d=a.productType;h.onReady(function(a){return a.log(function(){return{composer_session_id:b,event_type:"client_privacy_mutation_time",privacy_post_param:JSON.stringify(c),product_type:d}})})}g.logBasicPrivacyChangeCompleted=a;g.logAdvancedPrivacyChangeCompleted=b;g.logBasicInitialPrivacyState=d;g.logPrivacyOnCreateMutation=e}),98);
__d("CometComposerPrivacySelectorEntryPointButton.react",["CometComposerPrivacySelectorButton.react","CometComposerPrivacySelectorEntryPointButton_renderer.graphql","CometPrivacySelectorTooltip.react","CometRelay","CometTrackingNodeProvider.react","ComposerAudienceOverrideLogger","PrivacyRowInput","react","unrecoverableViolation","useComposerViewStateDispatcher","withComposerViewStatePart"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=i||(i=d("react"));e=i;var k=e.useEffect,l=e.useRef;function a(a){var e,f=a.creationSessionID,g=a.isEnabled,i=a.isInitialAudienceLogged,m=i===void 0?!1:i;i=a.isSaving;var n=a.onPress,o=a.renderer;a=a.triggerRef;var p=c("useComposerViewStateDispatcher")();o=d("CometRelay").useFragment(h!==void 0?h:h=b("CometComposerPrivacySelectorEntryPointButton_renderer.graphql"),o);e=(e=o.source)==null?void 0:e.scope;if(e==null)throw c("unrecoverableViolation")("Failed to render privacy selector icon entry point. Either source or source.scope were not available.","comet_privacy_selector");var q=d("PrivacyRowInput").usePrivacyRowInput((o=o.source)==null?void 0:o.privacy_row_input),r=l(!1);k(function(){m!==!0&&r.current!==!0&&(f!=null&&d("ComposerAudienceOverrideLogger").logBasicInitialPrivacyState({creationSessionID:f,privacyPostParam:q}),r.current=!0,p({type:"set_is_initial_audience_logged"}))},[]);return j.jsx(c("CometPrivacySelectorTooltip.react"),{entryPointHasLabel:!0,isLoading:i,scope:e,children:j.jsx(c("CometTrackingNodeProvider.react"),{trackingNode:29,children:j.jsx(c("CometComposerPrivacySelectorButton.react"),{disabled:i||!g,isSaving:i,onPress:n,ref:a,scope:e})})})}a.displayName=a.name+" [from "+f.id+"]";e=c("withComposerViewStatePart")(a,function(a){return{creationSessionID:a.creationSessionID,isInitialAudienceLogged:(a=a.audienceLoggingData)==null?void 0:a.isInitialAudienceLogged}});g["default"]=e}),98);
__d("CometComposerPrivacySelectorEntryPointButton_renderer$normalization.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};return{argumentDefinitions:[{defaultValue:null,kind:"LocalArgument",name:"CometComposerPrivacySelectorEntryPointButton_renderer$localPrivacyRow"},{defaultValue:null,kind:"LocalArgument",name:"CometComposerPrivacySelectorEntryPointButton_renderer$renderLocation"},{defaultValue:null,kind:"LocalArgument",name:"CometComposerPrivacySelectorEntryPointButton_renderer$tags"}],kind:"SplitOperation",metadata:{},name:"CometComposerPrivacySelectorEntryPointButton_renderer$normalization",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"source",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{alias:null,args:null,concreteType:"PrivacyRowInput",kind:"LinkedField",name:"privacy_row_input",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"allow",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"base_state",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"deny",storageKey:null},{alias:null,args:null,concreteType:"PrivacyRowInputTargetingFields",kind:"LinkedField",name:"privacy_targeting",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"targeted_publishing_id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"targeted_publishing_fields",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"tag_expansion_state",storageKey:null}],storageKey:null},{alias:"scope",args:[{kind:"Variable",name:"render_location",variableName:"CometComposerPrivacySelectorEntryPointButton_renderer$renderLocation"},{kind:"Variable",name:"selected_override",variableName:"CometComposerPrivacySelectorEntryPointButton_renderer$localPrivacyRow"},{kind:"Variable",name:"tags",variableName:"CometComposerPrivacySelectorEntryPointButton_renderer$tags"}],concreteType:"PrivacyScope",kind:"LinkedField",name:"privacy_scope_for_location",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"can_viewer_edit",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"description",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"extended_description",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"label",storageKey:null},{alias:null,args:[{kind:"Variable",name:"scale",variableName:"scale"}],concreteType:"Image",kind:"LinkedField",name:"icon_image",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"scale",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"PrivacyOption",kind:"LinkedField",name:"selected_option",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"current_tag_expansion",storageKey:null},a],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"show_tag_expansion_options",storageKey:null}],storageKey:null},a],storageKey:null}]}}();e.exports=a}),null);
__d("CometComposerPushPageContext",["react"],(function(a,b,c,d,e,f,g){"use strict";var h;a=h||d("react");b=a.createContext(null);g["default"]=b}),98);
__d("CometComposerPushPageGlimmer.react",["CometComposerStylingConstants","CometProgressRingIndeterminate.react","react","stylex","withComposerViewStatePart"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=(i||(i=d("react"))).c,k=i,l={popover:{alignItems:"x6s0dn4",boxSizing:"x9f619",display:"x78zum5",height:"x1vd4hg5",justifyContent:"xl56j7k",width:"xlro9se",$$css:!0},pushview:{alignItems:"x6s0dn4",boxSizing:"x9f619",display:"x78zum5",justifyContent:"xl56j7k",width:"xh8yej3",$$css:!0}};function a(a){var b=j(10),e=a.composerDialogHeight,f=a.withPopover;a=a.xstyle;var g=f&&l.popover;f=!f&&l.pushview;var i;b[0]!==g||b[1]!==f||b[2]!==a?(i=(h||(h=c("stylex")))(g,f,a),b[0]=g,b[1]=f,b[2]=a,b[3]=i):i=b[3];f=((g=e)!=null?g:d("CometComposerStylingConstants").COMPOSER_ORIGINAL_HEIGHT)-d("CometComposerStylingConstants").PUSH_PAGE_HEADER_HEIGHT;b[4]!==f?(a={minHeight:f},b[4]=f,b[5]=a):a=b[5];b[6]===Symbol["for"]("react.memo_cache_sentinel")?(e=k.jsx(c("CometProgressRingIndeterminate.react"),{color:"disabled",size:24}),b[6]=e):e=b[6];b[7]!==i||b[8]!==a?(g=k.jsx("div",{className:i,style:a,children:e}),b[7]=i,b[8]=a,b[9]=g):g=b[9];return g}b=c("withComposerViewStatePart")(a,function(a){return{composerDialogHeight:(a=a.composerSizeAndStyleMetadata)==null?void 0:a.composerDialogHeight}});g["default"]=b}),98);
__d("CometComposerScheduleStrings",["fbt"],(function(a,b,c,d,e,f,g,h){"use strict";a=h._("__JHASH__UDNJV-g-EFR__JHASH__");b=h._("__JHASH__c6ITKLtvPfx__JHASH__");c=h._("__JHASH__f7fhhDJIicy__JHASH__");d=h._("__JHASH__0tLMhXMUSkx__JHASH__");g.COMPOSER_SUBMIT_CTA=a;g.COMPOSER_FOOTER_CTA=b;g.PAGE_TITLE=c;g.COMPOSER_PILL=d}),226);
__d("ComposerTabbedMinutiaePushPageGlimmmer.react",["fbt","BaseLoadingStateElement.react","CometComposerHeader.react","FDSGlimmer.react","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=(i||(i=d("react"))).c,k=i;b=k.forwardRef(a);var l={root:{height:"x1wjmhiu",$$css:!0},searchBar:{borderTopStartRadius:"x1tlxs6b",borderTopEndRadius:"x1g8br2z",borderBottomEndRadius:"x1gn5b1j",borderBottomStartRadius:"x230xth",height:"xc9qbxq",marginTop:"x1gslohp",marginEnd:"xktsk01",marginBottom:"x12nagc",marginStart:"x1d52u69",width:"xh8yej3",$$css:!0},tabText:{borderTopStartRadius:"x8u2fvd",borderTopEndRadius:"x1ht7hnu",borderBottomEndRadius:"x1quq95r",borderBottomStartRadius:"x5yzy4c",height:"xxk0z11",marginEnd:"xq8finb",marginLeft:null,marginRight:null,width:"xefyazp",$$css:!0}};function a(a,b){var d=j(8);a=a.onBack;var e;d[0]===Symbol["for"]("react.memo_cache_sentinel")?(e=h._("__JHASH__Qn-9-UwmJ2N__JHASH__"),d[0]=e):e=d[0];d[1]!==a?(e=k.jsx(c("CometComposerHeader.react"),{onBack:a,title:e,withBackButton:!0}),d[1]=a,d[2]=e):e=d[2];var f;d[3]===Symbol["for"]("react.memo_cache_sentinel")?(a=k.jsxs("div",{className:"x6s0dn4 x78zum5 xng8ra x1nhvcw1 xdj266r xktsk01 xat24cr x1d52u69",children:[k.jsx(c("FDSGlimmer.react"),{index:1,xstyle:l.tabText}),k.jsx(c("FDSGlimmer.react"),{index:2,xstyle:l.tabText})]}),f=k.jsx("div",{className:"x6s0dn4 x78zum5 xdd8jsf xl56j7k",children:k.jsx(c("FDSGlimmer.react"),{index:1,xstyle:l.searchBar})}),d[3]=a,d[4]=f):(a=d[3],f=d[4]);d[5]!==b||d[6]!==e?(a=k.jsxs(c("BaseLoadingStateElement.react"),{ref:b,xstyle:l.root,children:[e,a,f]}),d[5]=b,d[6]=e,d[7]=a):a=d[7];return a}e=b;g["default"]=e}),226);
__d("FeedComposerCometWithTagTypeaheadDataSource",["Promise"],(function(a,b,c,d,e,f){"use strict";var g;a=function(){function a(a){var b=a.compositeDataSource;a=a.matchStrategy;this.$3=!1;this.$1=b;this.$2=a}var c=a.prototype;c.bootstrap=function(){if(this.$3)return;this.$3=!0;this.$1.bootstrap()};c.fetchCache=function(a){var b=a.query;b=this.$2.findMentionableString(b);return b==null?{entries:[],params:a}:this.$1.fetchCache(a)};c.fetchNetwork=function(a){var c=a.query;c=this.$2.findMentionableString(c);return c==null?(g||(g=b("Promise"))).reject():this.$1.fetchNetwork(a)};return a}();f["default"]=a}),66);
__d("UnifiedShareSheetDialogContext",["react"],(function(a,b,c,d,e,f,g){"use strict";var h;a=h||d("react");b={isShareSheetEntrypoint:!1,setShouldHideMessengerSection:function(a){},setShouldHideShareToSection:function(a){}};c=a.createContext(b);g["default"]=c}),98);
__d("getActiveAttachmentFeatureDefinition",[],(function(a,b,c,d,e,f){"use strict";function a(a,b){return a.find(function(a){return(a.featureType==="ATTACHMENT"||a.featureType==="READ_ONLY_ATTACHMENT")&&a.attachmentType===b})}f["default"]=a}),66);
__d("getTaggerFeatureDefinitionByName",[],(function(a,b,c,d,e,f){"use strict";function a(a,b){return a.find(function(a){return a.featureType==="TAGGER"&&a.taggerType===b})}f["default"]=a}),66);
__d("getFeatureDefinition",["CometComposerAttachmentPluginTypes","CometComposerTaggerPluginTypes","getActiveAttachmentFeatureDefinition","getTaggerFeatureDefinitionByName"],(function(a,b,c,d,e,f,g){"use strict";function a(a,b){var d=a.attachments,e=Object.keys(c("CometComposerAttachmentPluginTypes")).find(function(a){return a===b});d=e!=null?c("getActiveAttachmentFeatureDefinition")((d=d)!=null?d:[],e):null;e=Object.keys(c("CometComposerTaggerPluginTypes")).find(function(a){return a===b});a=e!=null?c("getTaggerFeatureDefinitionByName")((a=a.taggers)!=null?a:[],e):null;return{attachmentData:d,taggerData:a}}g["default"]=a}),98);
__d("useCometComposerFeatureDefinitions",["CometComposerFeatureDefinitionsContext","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||d("react")).useContext;function a(){return i(c("CometComposerFeatureDefinitionsContext")).featureDefinitions}g["default"]=a}),98);
__d("useCometComposerLoggerDispatcher",["CometComposerLoggerDispatcherContext","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||d("react")).useContext;function a(){return i(c("CometComposerLoggerDispatcherContext"))}g["default"]=a}),98);
__d("useCometComposerPushPage",["CometComposerPushPageContext","JSResourceForInteraction","promiseDone","react"],(function(a,b,c,d,e,f,g){"use strict";var h;b=h||d("react");var i=b.useContext,j=b.useRef,k=b.c,l=c("JSResourceForInteraction")("missingNavigationErrorHandler").__setRef("useCometComposerPushPage");function a(){var a,b=k(2);a=(a=i(c("CometComposerPushPageContext")))==null?void 0:a.pushPageHandler;var d=j(null);if(a==null){var e;b[0]!==d?(e=function(a){c("promiseDone")(l.load().then(function(b){return b(d,a)}))},b[0]=d,b[1]=e):e=b[1];return e}return a}g["default"]=a}),98);
__d("useCometComposerPushMinutiaePage",["fbt","CometComposerTaggerPluginTypes","CometPlaceholder.react","ComposerTabbedMinutiaePushPageGlimmmer.react","JSResourceForInteraction","lazyLoadComponent","react","useCometComposerPushPage"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=(i||(i=d("react"))).c,k=i,l=c("lazyLoadComponent")(c("JSResourceForInteraction")("ComposerTabbedMinutiaePage.react").__setRef("useCometComposerPushMinutiaePage"));function a(){var a=j(2),b=c("useCometComposerPushPage")(),d;a[0]!==b?(d=function(){b(h._("__JHASH__Qn-9-UwmJ2N__JHASH__"),function(a){a=a.onReturn;return k.jsx(c("CometPlaceholder.react"),{fallback:k.jsx(c("ComposerTabbedMinutiaePushPageGlimmmer.react"),{onBack:a}),children:k.jsx(l,{initialTab:"FEELING",onClose:a})})},{hasCustomHeader:!0},c("CometComposerTaggerPluginTypes").MINUTIAE)},a[0]=b,a[1]=d):d=a[1];return d}g["default"]=a}),226);
__d("useCometComposerPushPageWithReducer",["react","useCometComposerPushPage"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||(h=d("react"));b=h;b.useMemo;var j=b.c;function a(){var a=j(2),b=c("useCometComposerPushPage")(),d;a[0]!==b?(d=function(a,c,d,e){b(a,function(a){a=a.onReturn;return i.jsx(c,{onReturn:a})},e,d)},a[0]=b,a[1]=d):d=a[1];a=d;return a}g["default"]=a}),98);
__d("useCometComposerWithTagFriendsDataSourceQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="8110672078996261"}),null);
__d("useCometComposerWithTagFriendsDataSourceQuery.graphql",["useCometComposerWithTagFriendsDataSourceQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"id"},{defaultValue:null,kind:"LocalArgument",name:"query"},{defaultValue:null,kind:"LocalArgument",name:"scale"},{defaultValue:null,kind:"LocalArgument",name:"update_with_tag_comet_for_all"}],c=[{kind:"Variable",name:"id",variableName:"id"}],d=[{kind:"Variable",name:"named",variableName:"query"}],e={alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},f={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},g={kind:"Variable",name:"scale",variableName:"scale"},h={alias:"photo",args:[{kind:"Literal",name:"height",value:40},g,{kind:"Literal",name:"width",value:40}],concreteType:"Image",kind:"LinkedField",name:"profile_picture",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:null},i={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},j={alias:null,args:null,kind:"ScalarField",name:"mentions_subtext",storageKey:null},k={alias:null,args:null,kind:"ScalarField",name:"is_verified",storageKey:null},l={alias:null,args:null,concreteType:"WorkForeignEntityInfo",kind:"LinkedField",name:"work_foreign_entity_info",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"type",storageKey:null}],storageKey:null},m=[e,j,h],n=[e,h];i={condition:"update_with_tag_comet_for_all",kind:"Condition",passingValue:!0,selections:[{alias:null,args:[{kind:"Variable",name:"context_id",variableName:"id"},{kind:"Variable",name:"query",variableName:"query"},{kind:"Literal",name:"typeahead_context",value:"mentions"}],concreteType:null,kind:"LinkedField",name:"comet_composer_typeahead_search",plural:!0,selections:[i,{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"score",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"icon_shape",storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[f,i,{kind:"InlineFragment",selections:[e,j,k,h,{kind:"InlineFragment",selections:[{kind:"InlineFragment",selections:[l],type:"User",abstractKey:null},{kind:"InlineFragment",selections:[l,{alias:null,args:null,kind:"ScalarField",name:"is_multi_company_group",storageKey:null}],type:"Group",abstractKey:null}],type:"Entity",abstractKey:"__isEntity"}],type:"User",abstractKey:null},{kind:"InlineFragment",selections:m,type:"XFBWorkroomsBaseUser",abstractKey:"__isXFBWorkroomsBaseUser"},{kind:"InlineFragment",selections:[e,j,{alias:"thumbnail_link",args:[g],kind:"ScalarField",name:"icon_uri",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"doc_title",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"doc_url",storageKey:null}],type:"KnowledgeHubDocumentData",abstractKey:null},{kind:"InlineFragment",selections:m,type:"Group",abstractKey:null},{kind:"InlineFragment",selections:m,type:"Event",abstractKey:null},{kind:"InlineFragment",selections:[e,j,k,h],type:"Page",abstractKey:null},{kind:"InlineFragment",selections:n,type:"ContextualProfile",abstractKey:"__isContextualProfile"},{kind:"InlineFragment",selections:m,type:"GroupRule",abstractKey:null},{kind:"InlineFragment",selections:m,type:"ProductItem",abstractKey:null},{kind:"InlineFragment",selections:m,type:"BatchMentions",abstractKey:null}],storageKey:null}],type:"CometComposerTypeaheadResultEntry",abstractKey:null}],storageKey:null}]};return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"useCometComposerWithTagFriendsDataSourceQuery",selections:[{condition:"update_with_tag_comet_for_all",kind:"Condition",passingValue:!1,selections:[{alias:null,args:c,concreteType:"User",kind:"LinkedField",name:"user",plural:!1,selections:[{alias:null,args:d,concreteType:"FriendsConnection",kind:"LinkedField",name:"friends",plural:!1,selections:[{alias:null,args:null,concreteType:"FriendsEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"node",plural:!1,selections:[{kind:"InlineFragment",selections:[e,f,h],type:"Profile",abstractKey:"__isProfile"}],storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}]},i],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"useCometComposerWithTagFriendsDataSourceQuery",selections:[{condition:"update_with_tag_comet_for_all",kind:"Condition",passingValue:!1,selections:[{alias:null,args:c,concreteType:"User",kind:"LinkedField",name:"user",plural:!1,selections:[{alias:null,args:d,concreteType:"FriendsConnection",kind:"LinkedField",name:"friends",plural:!1,selections:[{alias:null,args:null,concreteType:"FriendsEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"node",plural:!1,selections:[f,{kind:"InlineFragment",selections:n,type:"Profile",abstractKey:"__isProfile"}],storageKey:null}],storageKey:null}],storageKey:null},f],storageKey:null}]},i]},params:{id:b("useCometComposerWithTagFriendsDataSourceQuery_facebookRelayOperation"),metadata:{},name:"useCometComposerWithTagFriendsDataSourceQuery",operationKind:"query",text:null}}}();e.exports=a}),null);
__d("useCometComposerWithTagFriendsDataSource",["WebPixelRatio","createFeedCometMentionsDataEntry","react","useCometComposerWithTagFriendsDataSourceQuery.graphql","useCometTypeaheadGraphQLDataSource"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=(i||d("react")).c,k=h!==void 0?h:h=b("useCometComposerWithTagFriendsDataSourceQuery.graphql");function a(a){var b=j(6),e=a.actorID,f=a.limit,g=a.updateWithTagCometForAll;b[0]!==e||b[1]!==g?(a=function(a){a=a.query;return{id:e,query:a,scale:d("WebPixelRatio").get(),update_with_tag_comet_for_all:g}},b[0]=e,b[1]=g,b[2]=a):a=b[2];var h;b[3]!==f||b[4]!==a?(h={gqlQuery:k,limit:f,normalize:l,queryVariablesBuilderFunction:a},b[3]=f,b[4]=a,b[5]=h):h=b[5];return c("useCometTypeaheadGraphQLDataSource")(h)}function l(a){var b;a=[].concat((b=a==null?void 0:(b=a.user)==null?void 0:(b=b.friends)==null?void 0:b.edges)!=null?b:[],(b=a==null?void 0:a.comet_composer_typeahead_search)!=null?b:[]);return a.map(function(a){if(a==null)return null;a=a.node;return a==null?null:c("createFeedCometMentionsDataEntry")({data:{node:a},type:"WITH_TAG_SEARCH_RESULT"})}).filter(Boolean)}g["default"]=a}),98);
__d("useCometComposerWithTagSuggestionsDataSourceQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="6054813421237857"}),null);
__d("useCometComposerWithTagSuggestionsDataSourceQuery.graphql",["useCometComposerWithTagSuggestionsDataSourceQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"limit"},{defaultValue:null,kind:"LocalArgument",name:"scale"}],c=[{kind:"Variable",name:"first",variableName:"limit"}],d={alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},e={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},f={alias:"photo",args:[{kind:"Literal",name:"height",value:40},{kind:"Variable",name:"scale",variableName:"scale"},{kind:"Literal",name:"width",value:40}],concreteType:"Image",kind:"LinkedField",name:"profile_picture",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:null};return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"useCometComposerWithTagSuggestionsDataSourceQuery",selections:[{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{alias:null,args:c,concreteType:"SuggestedWithTagsConnection",kind:"LinkedField",name:"suggested_with_tags",plural:!1,selections:[{alias:null,args:null,concreteType:"SuggestedWithTagsEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"node",plural:!1,selections:[{kind:"InlineFragment",selections:[d,e,f],type:"Profile",abstractKey:"__isProfile"}],storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"useCometComposerWithTagSuggestionsDataSourceQuery",selections:[{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{alias:null,args:c,concreteType:"SuggestedWithTagsConnection",kind:"LinkedField",name:"suggested_with_tags",plural:!1,selections:[{alias:null,args:null,concreteType:"SuggestedWithTagsEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"node",plural:!1,selections:[e,{kind:"InlineFragment",selections:[d,f],type:"Profile",abstractKey:"__isProfile"}],storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}]},params:{id:b("useCometComposerWithTagSuggestionsDataSourceQuery_facebookRelayOperation"),metadata:{},name:"useCometComposerWithTagSuggestionsDataSourceQuery",operationKind:"query",text:null}}}();e.exports=a}),null);
__d("useCometComposerWithTagSuggestionsDataSource",["WebPixelRatio","createFeedCometMentionsDataEntry","react","useCometComposerWithTagSuggestionsDataSourceQuery.graphql","useCometTypeaheadGraphQLDataSource"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=(i||d("react")).c,k=h!==void 0?h:h=b("useCometComposerWithTagSuggestionsDataSourceQuery.graphql");function a(a){var b=j(5),e=a.limit;b[0]!==e?(a=function(){return{limit:e,scale:d("WebPixelRatio").get()}},b[0]=e,b[1]=a):a=b[1];var f;b[2]!==e||b[3]!==a?(f={gqlQuery:k,limit:e,normalize:l,queryVariablesBuilderFunction:a},b[2]=e,b[3]=a,b[4]=f):f=b[4];return c("useCometTypeaheadGraphQLDataSource")(f)}function l(a){a=a==null?void 0:(a=a.viewer)==null?void 0:(a=a.suggested_with_tags)==null?void 0:a.edges;return a==null?[]:a.map(function(a){if(a==null)return null;a=a.node;return a==null?null:c("createFeedCometMentionsDataEntry")({data:{node:a},type:"SUGGESTION"})}).filter(Boolean)}g["default"]=a}),98);
__d("useComposerValidationErrors",["CometComposerValidationErrorsContext","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||d("react")).useContext;function a(){return i(c("CometComposerValidationErrorsContext"))}g["default"]=a}),98);
__d("useFeedComposerCometWithTagDataSource",["cr:1872646"],(function(a,b,c,d,e,f,g){"use strict";g["default"]=b("cr:1872646")}),98);
__d("useFeedComposerCometWithTagDataSourceImpl",["Actor","BaseTypeaheadLocalStorageDataProviderStorageKey","FeedComposerCometWithTagTypeaheadDataSource","createCometWithTagStrategy","gkx","react","useCometComposerWithTagFriendsDataSource","useCometComposerWithTagSuggestionsDataSource","useCometTypeaheadCompositeDataSource","useFeedComposerCometMentionsBootloadDataSource"],(function(a,b,c,d,e,f,g){"use strict";var h;b=h||d("react");b.useMemo;var i=b.c;function a(a){var b=i(20);a=a.limit;var e=d("Actor").useActor();e=e[0];var f;b[0]===Symbol["for"]("react.memo_cache_sentinel")?(f=c("gkx")("3531"),b[0]=f):f=b[0];f=f;var g;b[1]===Symbol["for"]("react.memo_cache_sentinel")?(g=c("gkx")("4913"),b[1]=g):g=b[1];g=g;f=f||g;b[2]===Symbol["for"]("react.memo_cache_sentinel")?(g=["FRIENDS_ONLY"],b[2]=g):g=b[2];var h;b[3]!==a?(h=Math.floor(a/2),b[3]=a,b[4]=h):h=b[4];var j;b[5]===Symbol["for"]("react.memo_cache_sentinel")?(j=["USER"],b[5]=j):j=b[5];b[6]!==h?(g={firstDegreeFinderOptions:g,includeViewer:!1,limit:h,storageKey:c("gkx")("23280")?d("BaseTypeaheadLocalStorageDataProviderStorageKey").StorageKey.FeedComposerMentionsWithTagBootstrap:null,typeaheadContext:"mentions",typeaheadFirstDegreeFilters:j},b[6]=h,b[7]=g):g=b[7];j=c("useFeedComposerCometMentionsBootloadDataSource")(g);b[8]!==a?(h={limit:a},b[8]=a,b[9]=h):h=b[9];g=c("useCometComposerWithTagSuggestionsDataSource")(h);b[10]!==e||b[11]!==a?(h={actorID:e,limit:a,updateWithTagCometForAll:f},b[10]=e,b[11]=a,b[12]=h):h=b[12];f=c("useCometComposerWithTagFriendsDataSource")(h);b[13]!==j||b[14]!==a||b[15]!==f||b[16]!==g?(e={bootstrapDataSource:j,limit:a,networkDataSource:f,nullstateDataSource:g},b[13]=j,b[14]=a,b[15]=f,b[16]=g,b[17]=e):e=b[17];h=c("useCometTypeaheadCompositeDataSource")(e);b[18]!==h?(j=new(c("FeedComposerCometWithTagTypeaheadDataSource"))({compositeDataSource:h,matchStrategy:c("createCometWithTagStrategy")({minMatchLength:0})}),b[18]=h,b[19]=j):j=b[19];a=j;return a}g["default"]=a}),98);
__d("useVerifyCometComposerPushPage",["CometComposerPushPageContext","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||d("react")).useContext;function a(){return i(c("CometComposerPushPageContext"))!=null}g["default"]=a}),98);