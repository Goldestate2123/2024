;/*FB_PKG_DELIM*/

__d("FBReelsFeedbackCommentSection_comments.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"FBReelsFeedbackCommentSection_comments",selections:[{alias:null,args:null,concreteType:"Story",kind:"LinkedField",name:"story",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"tracking",storageKey:null},{alias:null,args:null,concreteType:"Feedback",kind:"LinkedField",name:"feedback",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"CometUFICommentListRenderer_feedback"}],storageKey:null}],storageKey:null}],type:"XFBFBReelsFeedbackRenderer",abstractKey:null};e.exports=a}),null);
__d("FBReelsFeedbackCommentSection.react",["CometRelay","CometStoryRenderLocationContext.react","CometTrackingCodeContext","CometUFICommentListRenderer.react","FBReelsFeedbackCommentSection_comments.graphql","RelayUFI2CommentsKeyContext","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=i||(i=d("react"));e=i;var k=e.useContext;e.useMemo;var l=e.c;function a(a){var e,f=l(12);a=a.comments;var g;f[0]===Symbol["for"]("react.memo_cache_sentinel")?(g=h!==void 0?h:h=b("FBReelsFeedbackCommentSection_comments.graphql"),f[0]=g):g=f[0];g=d("CometRelay").useFragment(g,a);a=k(c("CometTrackingCodeContext"));g==null?void 0:(e=g.story)==null?void 0:e.tracking;e=(g==null?void 0:(e=g.story)==null?void 0:e.tracking)||"";var i;f[1]!==e?(i=[e],f[1]=e,f[2]=i):i=f[2];e=i;f[3]!==a||f[4]!==e?(i=a!=null?{click_tracking_linkshim_cb:a.click_tracking_linkshim_cb,encrypted_click_tracking:a.encrypted_click_tracking,encrypted_tracking:e}:{click_tracking_linkshim_cb:[],encrypted_click_tracking:[],encrypted_tracking:e},f[3]=a,f[4]=e,f[5]=i):i=f[5];a=i;e=a;a=g==null?void 0:(i=g.story)==null?void 0:i.feedback;if(a==null)return null;f[6]===Symbol["for"]("react.memo_cache_sentinel")?(g="xyamay9 x1n2onr6",f[6]=g):g=f[6];f[7]!==a?(i=j.jsx("div",{className:g,children:j.jsx(c("CometUFICommentListRenderer.react"),{feedLocation:"COMET_MEDIA_VIEWER",feedback:a,feedbackSource:65,focusCommentID:null,storyRenderLocation:"fb_shorts_video_deep_dive"})}),f[7]=a,f[8]=i):i=f[8];f[9]!==e||f[10]!==i?(g=j.jsx(c("RelayUFI2CommentsKeyContext").Provider,{value:"FBReelsRootWithEntrypointQuery",children:j.jsx(c("CometStoryRenderLocationContext.react").Provider,{value:"fb_shorts_video_deep_dive",children:j.jsx(c("CometTrackingCodeContext").Provider,{value:e,children:i})})}),f[9]=e,f[10]=i,f[11]=g):g=f[11];return g}g["default"]=a}),98);
__d("FBReelsFeedbackCommentSection_comments$normalization.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};return{kind:"SplitOperation",metadata:{},name:"FBReelsFeedbackCommentSection_comments$normalization",selections:[{alias:null,args:null,concreteType:"Story",kind:"LinkedField",name:"story",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"tracking",storageKey:null},{alias:null,args:null,concreteType:"Feedback",kind:"LinkedField",name:"feedback",plural:!1,selections:[a,{alias:null,args:[{kind:"Variable",name:"feedback_source_integer",variableName:"feedbackSource"}],kind:"ScalarField",name:"is_eligible_for_enhanced_comment_updates",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_synced_qa_post",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"subscription_target_id",storageKey:null},{alias:null,args:null,concreteType:"Video",kind:"LinkedField",name:"associated_video",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"broadcast_is_ama_enabled",storageKey:null},a],storageKey:null},{alias:null,args:[{kind:"Variable",name:"location",variableName:"feedLocation"},{kind:"Literal",name:"supported",value:"4AxN2k"}],concreteType:null,kind:"LinkedField",name:"comment_list_renderer",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometUFICommentListRenderer_feedback",fragmentName:"CometUFICommentListRendererForCommentsAPI_renderer",fragmentPropName:"renderer",kind:"ModuleImport"}],type:"XFBCommentListRendererForCommentsAPI",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometUFICommentListRenderer_feedback",fragmentName:"CometUFICommentListRendererForCommentsAPIPermalink_renderer",fragmentPropName:"renderer",kind:"ModuleImport"}],type:"XFBCommentListRendererForCommentsAPIPermalink",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometUFICommentListRenderer_feedback",fragmentName:"CometUFICommentListRendererForCommentsAPIMediaViewer_renderer",fragmentPropName:"renderer",kind:"ModuleImport"}],type:"XFBCommentListRendererForCommentsAPIMediaViewer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometUFICommentListRenderer_feedback",fragmentName:"CometUFICommentListRendererForCommentsAPITahoe_renderer",fragmentPropName:"renderer",kind:"ModuleImport"}],type:"XFBCommentListRendererForCommentsAPITahoe",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometUFICommentListRenderer_feedback",fragmentName:"CometUFICommentListRendererForCommentsAPITahoeWithLiveVOD_renderer",fragmentPropName:"renderer",kind:"ModuleImport"}],type:"XFBCommentListRendererForCommentsAPITahoeWithLiveVOD",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometUFICommentListRenderer_feedback",fragmentName:"CometUFICommentListRendererForCommentsAPIWorkplaceKnowledgeNote_renderer",fragmentPropName:"renderer",kind:"ModuleImport"}],type:"XFBCommentListRendererForCommentsAPIWorkplaceKnowledgeNote",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometUFICommentListRenderer_feedback",fragmentName:"CometUFICommentListRendererForCommentsAPIBizInbox_renderer",fragmentPropName:"renderer",kind:"ModuleImport"}],type:"XFBCommentListRendererForCommentsAPIBizInbox",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometUFICommentListRenderer_feedback",fragmentName:"CometUFICommentListRendererForMediaViewerReply_renderer",fragmentPropName:"renderer",kind:"ModuleImport"}],type:"XFBCommentListRendererForMediaViewerReply",abstractKey:null}],storageKey:null}],storageKey:null},a],storageKey:null}]}}();e.exports=a}),null);
__d("InstantGameEnvironmentType",["$InternalEnum"],(function(a,b,c,d,e,f){a=b("$InternalEnum")({LIVE_PRODUCER_PLUGIN:"live_producer_plugin",REELS_PLUGIN:"reels_plugin",VIDEO_PLUGIN:"video_plugin",STANDARD:"standard",COPLAY:"coplay",CANVAS_ON_COMET:"canvas_on_comet",FBIOS_IAB:"fbios_iab",MESSENGER_DISCOVERY:"messenger_discovery",UNCONNECTED:"unconnected",EMBEDDED:"embedded"});c=a;f["default"]=c}),66);
__d("InstantGameEnvironmentTypeUtils.facebook",["$InternalEnumUtils","InstantGameEnvironmentType"],(function(a,b,c,d,e,f,g){a=d("$InternalEnumUtils").createToJSEnum(c("InstantGameEnvironmentType"));b=d("$InternalEnumUtils").createFromJSEnum(c("InstantGameEnvironmentType"));g.toJSEnum=a;g.fromJSEnum=b}),98);
__d("ReelsInteractivePluginManager_video.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"ReelsInteractivePluginManager_video",selections:[{args:[{kind:"Literal",name:"envType",value:"REELS_PLUGIN"}],kind:"FragmentSpread",name:"VideoInteractivePluginManager_video"}],type:"Video",abstractKey:null};e.exports=a}),null);
__d("VideoInteractivePluginManagerSubscription_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="7953968188026925"}),null);
__d("VideoInteractivePluginManagerSubscription.graphql",["VideoInteractivePluginManagerSubscription_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a=function(){var a={defaultValue:null,kind:"LocalArgument",name:"envType"},c={defaultValue:null,kind:"LocalArgument",name:"input"},d=[{kind:"Variable",name:"data",variableName:"input"}],e={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};return{fragment:{argumentDefinitions:[a,c],kind:"Fragment",metadata:null,name:"VideoInteractivePluginManagerSubscription",selections:[{alias:null,args:d,concreteType:"InteractivePluginsUpdateSubscribeResponsePayload",kind:"LinkedField",name:"interactive_plugins_update_subscribe",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"owner",plural:!1,selections:[{alias:null,args:null,concreteType:"VideoOwnerInteractivePluginsConnection",kind:"LinkedField",name:"interactive_plugins",plural:!1,selections:[{alias:null,args:null,concreteType:"Application",kind:"LinkedField",name:"nodes",plural:!0,selections:[{kind:"RequiredField",field:e,action:"THROW",path:"interactive_plugins_update_subscribe.owner.interactive_plugins.nodes.id"},{args:[{kind:"Variable",name:"envType",variableName:"envType"}],documentName:"VideoInteractivePluginManagerSubscription",fragmentName:"InteractivePluginPlayer_app",fragmentPropName:"app",kind:"ModuleImport"}],storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}],type:"Subscription",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[c,a],kind:"Operation",name:"VideoInteractivePluginManagerSubscription",selections:[{alias:null,args:d,concreteType:"InteractivePluginsUpdateSubscribeResponsePayload",kind:"LinkedField",name:"interactive_plugins_update_subscribe",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"owner",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{alias:null,args:null,concreteType:"VideoOwnerInteractivePluginsConnection",kind:"LinkedField",name:"interactive_plugins",plural:!1,selections:[{alias:null,args:null,concreteType:"Application",kind:"LinkedField",name:"nodes",plural:!0,selections:[e,{args:[{kind:"Variable",name:"InteractivePluginPlayer_app$envType",variableName:"envType"}],documentName:"VideoInteractivePluginManagerSubscription",fragmentName:"InteractivePluginPlayer_app",fragmentPropName:"app",kind:"ModuleImport"}],storageKey:null}],storageKey:null},e],storageKey:null}],storageKey:null}]},params:{id:b("VideoInteractivePluginManagerSubscription_facebookRelayOperation"),metadata:{subscriptionName:"interactive_plugins_update_subscribe"},name:"VideoInteractivePluginManagerSubscription",operationKind:"subscription",text:null}}}();e.exports=a}),null);
__d("VideoInteractivePluginManager_video.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};return{argumentDefinitions:[{defaultValue:null,kind:"LocalArgument",name:"envType"}],kind:"Fragment",metadata:null,name:"VideoInteractivePluginManager_video",selections:[{kind:"RequiredField",field:a,action:"THROW",path:"id"},{alias:null,args:[{kind:"Variable",name:"environment",variableName:"envType"}],concreteType:"VideoInstalledPluginsConnection",kind:"LinkedField",name:"installed_plugins",plural:!1,selections:[{alias:null,args:null,concreteType:"Application",kind:"LinkedField",name:"nodes",plural:!0,selections:[{kind:"RequiredField",field:a,action:"THROW",path:"installed_plugins.nodes.id"},{args:[{kind:"Variable",name:"envType",variableName:"envType"}],documentName:"VideoInteractivePluginManager_video",fragmentName:"InteractivePluginPlayer_app",fragmentPropName:"app",kind:"ModuleImport"}],storageKey:null}],storageKey:null},{kind:"RequiredField",field:{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"owner",plural:!1,selections:[{kind:"RequiredField",field:a,action:"THROW",path:"owner.id"},{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"Page",kind:"LinkedField",name:"delegate_page",plural:!1,selections:[{kind:"RequiredField",field:a,action:"THROW",path:"owner.delegate_page.id"}],storageKey:null}],type:"User",abstractKey:null},{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null}],storageKey:null},action:"THROW",path:"owner"},{alias:null,args:null,concreteType:"GameIdName",kind:"LinkedField",name:"tagged_game",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"game_name",storageKey:null}],storageKey:null}],type:"Video",abstractKey:null}}();e.exports=a}),null);
__d("VideoInteractivePluginManager.react",["CometErrorBoundary.react","CometPlaceholder.react","CometRelay","InstantGameEnvironmentTypeUtils.facebook","InteractivePluginContext","VideoInteractivePluginManagerSubscription.graphql","VideoInteractivePluginManager_video.graphql","nullthrows","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j,k=j||(j=d("react"));e=j;var l=e.useContext,m=e.useEffect,n=e.useState,o=h!==void 0?h:h=b("VideoInteractivePluginManager_video.graphql");function a(a){var b=a.envType,e=a.shouldUseSubscription;a=a.video;var f=l(c("InteractivePluginContext")),g=f.logger,h=f.pluginContextController,i=d("CometRelay").useFragment(o,a);f=n((a=i==null?void 0:(f=i.installed_plugins)==null?void 0:f.nodes)!=null?a:[]);a=f[0];var j=f[1];f=l(c("InteractivePluginContext"));var q=f.setStreamerData,r=f.setTaggedGameName,s=(f=i==null?void 0:(f=i.owner)==null?void 0:(f=f.delegate_page)==null?void 0:f.id)!=null?f:i==null?void 0:i.owner.id;m(function(){var a;r(i==null?void 0:(a=i.tagged_game)==null?void 0:a.game_name);q({streamerID:s,streamerName:i==null?void 0:(a=i.owner)==null?void 0:a.name})},[q,r,i,s]);m(function(){var a=h.addObserver({onAddPlugin:function(a){return a.log("plugin_instance_created")},onRemovePlugin:function(a){return a.log("plugin_instance_destroyed")}}),b=a.removeObserver;return function(){return b()}},[h,i.id]);return k.jsxs(c("CometPlaceholder.react"),{fallback:null,children:[k.jsx("div",{style:{display:"none"},children:a.map(function(a){return k.jsx(c("CometErrorBoundary.react"),{children:k.jsx(d("CometRelay").MatchContainer,{match:a,props:{app:a,appID:a.id,envType:b,videoID:i.id}})},a.id)})}),e&&k.jsx(p,{onNext:function(a){j((a=a==null?void 0:(a=a.interactive_plugins_update_subscribe)==null?void 0:(a=a.owner)==null?void 0:(a=a.interactive_plugins)==null?void 0:a.nodes)!=null?a:[]);g==null?void 0:g.log("installed_plugins_subscription_payload_received")},variables:{envType:c("nullthrows")(d("InstantGameEnvironmentTypeUtils.facebook").fromJSEnum(b)),input:{owner_id:i==null?void 0:(f=i.owner)==null?void 0:f.id}}})]})}a.displayName=a.name+" [from "+f.id+"]";function p(a){var c=a.onNext;a=a.variables;d("CometRelay").useSubscription({onNext:c,subscription:i!==void 0?i:i=b("VideoInteractivePluginManagerSubscription.graphql"),variables:a});return null}p.displayName=p.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("ReelsInteractivePluginManager.react",["CometRelay","ReelsInteractivePluginManager_video.graphql","VideoInteractivePluginManager.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=i||d("react"),k=h!==void 0?h:h=b("ReelsInteractivePluginManager_video.graphql");function a(a){a=a.video;a=d("CometRelay").useFragment(k,a);return j.jsx(c("VideoInteractivePluginManager.react"),{envType:"reels_plugin",shouldUseSubscription:!1,video:a})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("ReelsInteractivePluginManager_video$normalization.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};return{kind:"SplitOperation",metadata:{},name:"ReelsInteractivePluginManager_video$normalization",selections:[a,{alias:null,args:[{kind:"Literal",name:"environment",value:"REELS_PLUGIN"}],concreteType:"VideoInstalledPluginsConnection",kind:"LinkedField",name:"installed_plugins",plural:!1,selections:[{alias:null,args:null,concreteType:"Application",kind:"LinkedField",name:"nodes",plural:!0,selections:[a,{args:[{kind:"Literal",name:"InteractivePluginPlayer_app$envType",value:"REELS_PLUGIN"}],documentName:"VideoInteractivePluginManager_video",fragmentName:"InteractivePluginPlayer_app",fragmentPropName:"app",kind:"ModuleImport"}],storageKey:null}],storageKey:'installed_plugins(environment:"REELS_PLUGIN")'},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"owner",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},a,{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"Page",kind:"LinkedField",name:"delegate_page",plural:!1,selections:[a],storageKey:null}],type:"User",abstractKey:null},{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"GameIdName",kind:"LinkedField",name:"tagged_game",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"game_name",storageKey:null}],storageKey:null}]}}();e.exports=a}),null);