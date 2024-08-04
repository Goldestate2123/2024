;/*FB_PKG_DELIM*/

__d("GroupsCometMentionsContext.react",["react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||(h=d("react"));b=h;c=b.createContext;b.useCallback;b.useMemo;var j=b.useState,k=b.c,l=c({groupID:"",groupInvitedList:new Set(),onInviteSent:function(a){}});function a(a){var b=k(8),c=a.children;a=a.groupID;var d;b[0]===Symbol["for"]("react.memo_cache_sentinel")?(d=new Set(),b[0]=d):d=b[0];d=j(d);var e=d[0],f=d[1];b[1]===Symbol["for"]("react.memo_cache_sentinel")?(d=function(a){f(function(b){return b.add(a)})},b[1]=d):d=b[1];d=d;b[2]!==a||b[3]!==e?(d={groupID:a,groupInvitedList:e,onInviteSent:d},b[2]=a,b[3]=e,b[4]=d):d=b[4];a=d;e=a;b[5]!==e||b[6]!==c?(d=i.jsx(l.Provider,{value:e,children:c}),b[5]=e,b[6]=c,b[7]=d):d=b[7];return d}g.GroupsCometMentionsContext=l;g.GroupsCometMentionsContextProvider=a}),98);
__d("GroupsCometMentionsCTAButton.react",["CometRelay","GroupsCometMentionsContext.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||(h=d("react"));b=h;var j=b.useContext,k=b.c;function a(a){var b=k(6),c=a.matchPointer;a=a.userID;var e=j(d("GroupsCometMentionsContext.react").GroupsCometMentionsContext);e=e.groupID;if(a==null||e==null||c==null)return null;var f;b[0]!==e||b[1]!==a?(f={delay:4e3,groupID:e,source:"invite_from_mention",userID:a},b[0]=e,b[1]=a,b[2]=f):f=b[2];b[3]!==c||b[4]!==f?(e=i.jsx(d("CometRelay").MatchContainer,{match:c,props:f}),b[3]=c,b[4]=f,b[5]=e):e=b[5];return e}g["default"]=a}),98);
__d("GroupsCometMentionsViewItemResolver.react",["FeedComposerCometMentionsViewItem.react","GroupsCometMentionsCTAButton.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||(h=d("react"))).c,j=h;function a(a){var b=i(10),d,e;b[0]!==a?(d=a.entry,e=babelHelpers.objectWithoutPropertiesLoose(a,["entry"]),b[0]=a,b[1]=d,b[2]=e):(d=b[1],e=b[2]);a=d;a=a.rawData;var f=null,g=null;a.type==="MENTION_SEARCH_RESULT"&&(f=a.canViewerInviteUserAsFriend,g=d.key);b[3]!==f||b[4]!==g?(a=f!=null?j.jsx(c("GroupsCometMentionsCTAButton.react"),{matchPointer:f,userID:g}):null,b[3]=f,b[4]=g,b[5]=a):a=b[5];b[6]!==e||b[7]!==a||b[8]!==d?(f=j.jsx(c("FeedComposerCometMentionsViewItem.react"),babelHelpers["extends"]({},e,{addOn:a,entry:d})),b[6]=e,b[7]=a,b[8]=d,b[9]=f):f=b[9];return f}g["default"]=a}),98);
__d("UserSignalsClientImpressionEventFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("1968720");b=d("FalcoLoggerInternal").create("user_signals_client_impression_event",a);e=b;g["default"]=e}),98);
__d("cometUFIGroupMentionsLexicalCreateNodeStrategy",["CometLexicalGenericEntityNode","Lexical","cometBaseMentionsLexicalCreateNodeStrategy"],(function(a,b,c,d,e,f,g){"use strict";a=c("cometBaseMentionsLexicalCreateNodeStrategy")(function(a){var b=a.rawData;if(b.resultType==="KnowledgeHubDocumentData")return d("Lexical").$createTextNode(b.docUrl||"");else{return d("CometLexicalGenericEntityNode").$createCometLexicalGenericEntityNode({id:a.key,text:(b=a.handle)!=null?b:a.label,type:"Actor"})}});b=a;g["default"]=b}),98);
__d("createGroupsCometMentionsDataEntry_composerTypeaheadResultEntry.graphql",[],(function(a,b,c,d,e,f){"use strict";a={kind:"InlineDataFragment",name:"createGroupsCometMentionsDataEntry_composerTypeaheadResultEntry"};e.exports=a}),null);
__d("createGroupsCometMentionsDataEntry_mentionsEntry.graphql",[],(function(a,b,c,d,e,f){"use strict";a={kind:"InlineDataFragment",name:"createGroupsCometMentionsDataEntry_mentionsEntry"};e.exports=a}),null);
__d("createGroupsCometMentionsDataEntry",["CometRelay","createGroupsCometMentionsDataEntry_composerTypeaheadResultEntry.graphql","createGroupsCometMentionsDataEntry_mentionsEntry.graphql","filterNulls"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=h!==void 0?h:h=b("createGroupsCometMentionsDataEntry_composerTypeaheadResultEntry.graphql"),k=i!==void 0?i:i=b("createGroupsCometMentionsDataEntry_mentionsEntry.graphql");function l(a){return d("CometRelay").readInlineData(k,a)}function m(a){return d("CometRelay").readInlineData(j,a)}function a(a){a=l(a);if((a==null?void 0:a.__typename)==="XFBMentionsSectionEntry"){var b=a.cache_id,d=a.entries,e=a.label;return b==null||e==null?null:{entries:c("filterNulls")((d||[]).map(n)),key:b,label:e,type:"section"}}else if(a.__typename==="CometComposerTypeaheadResultEntry")return n(a);return null}function n(a){var b,c;a=m(a);var d=a.node;if(d==null)return null;var e=d.__typename,f=d.doc_title,g=d.doc_url,h=d.id,i=d.name,j=d.photo;j=j==null?void 0:j.uri;var k;j==null&&(j=d.thumbnail_link,k="roundedRect");if(i==null||h==null||j==null)return null;b=((b=d.reference_type)==null?void 0:b.__typename)==="StrongEntityReference"?"regular":"weak";var l=a.score;if(l==null)return null;c=Boolean(((c=d.work_foreign_entity_info)==null?void 0:c.type)==="FOREIGN");var n=null,o=d.can_be_invited_by_viewer===!0,p=d.gender,q=Boolean(d.is_verified);a=(a=a.subtext)!=null?a:d.mentions_subtext;return{decorType:b,key:h,label:i,rawData:{canBeInvitedByViewer:o,canViewerInviteUserAsFriend:n,docTitle:f,docUrl:g,gender:p,iconShape:k,isExternal:c,isVerified:q,photoURI:j,resultType:e,score:l,subtext:a,type:"MENTION_SEARCH_RESULT"},type:"entry"}}g.getMentionsDataEntryData=l;g.getComposerTypeaheadResultEntryData=m;g.createGroupsCometMentionsDataEntryOrSectionEntry=a}),98);
__d("useGroupCometInviteOnMentionDialogPlugin",["CometLexicalGroupEntityNode","JSResourceForInteraction","Lexical","MLCInstrumentationCommands","react","useCometLazyDialog"],(function(a,b,c,d,e,f,g){"use strict";var h;b=h||d("react");var i=b.useLayoutEffect,j=b.useRef,k=b.c,l=c("JSResourceForInteraction")("GroupsCometInviteOnMentionDialog.react").__setRef("useGroupCometInviteOnMentionDialogPlugin"),m=function(a){if(a==null)return null;var b=a.getCanBeInvitedByViewer();if(b!==!0)return null;b=a.getID();var c=a.getTextContent(),d=a.getUserGender();a=a.getPhotoURI();return{gender:d,id:b,name:c,photoURI:a}};function a(a,b){var e=k(8),f;e[0]===Symbol["for"]("react.memo_cache_sentinel")?(f=new Map(),e[0]=f):f=e[0];var g=j(f);f=c("useCometLazyDialog")(l);f=f[0];var h;e[1]!==b||e[2]!==a?(h=function(){if(b==null)return;var c=a.registerCommand(d("MLCInstrumentationCommands").COMMIT_COMMAND,function(){return!1},d("Lexical").COMMAND_PRIORITY_NORMAL),e=a.registerMutationListener(d("CometLexicalGroupEntityNode").CometLexicalGroupEntityNode,function(b){var c=g.current;a.getEditorState().read(function(){for(var a=b.entries(),e=Array.isArray(a),f=0,a=e?a:a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var g;if(e){if(f>=a.length)break;g=a[f++]}else{f=a.next();if(f.done)break;g=f.value}g=g;var h=g[0];g=g[1];if(g==="created"){var i=d("Lexical").$getNodeByKey(h);i=m(i);if(i==null)continue;c.set(h,i)}else g==="destroyed"&&c["delete"](h)}})});return function(){c(),e()}},e[1]=b,e[2]=a,e[3]=h):h=e[3];var n;e[4]!==a||e[5]!==f||e[6]!==b?(n=[a,f,b],e[4]=a,e[5]=f,e[6]=b,e[7]=n):n=e[7];i(h,n)}g["default"]=a}),98);
__d("upgradedUFI2GroupMentionsComposerPluginCreatorWithTypeaheadViewForLexical",["CometMentionsForLexical.react","CometMentionsLayoutStrategy.react","GroupsCometMentionsContext.react","GroupsCometMentionsViewItemResolver.react","cometUFIGroupMentionsLexicalCreateNodeStrategy","cr:5343","gkx","react","useCometMentionsViewListStrategy","useGroupCometInviteOnMentionDialogPlugin"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");e=c("gkx")("23229");var j=c("gkx")("25978");f=["USER","EVENT","GROUP","PAGE"];var k=e?[].concat(f,["WORKROOMS_USER"]):f,l=j?[].concat(k,["KNOWLEDGE_HUB_DOCUMENT"]):k;function a(){return function(a){var e=a.config,f=e.groupID;e=e.postID;a=a.pluginProps.editor;e=b("cr:5343")({canUseSections:j,firstDegreeFiltersForBootstrap:k,firstDegreeFiltersForNetwork:l,groupID:f,postID:e,shouldBootstrapOnLayoutEffect:!1});var g=c("useCometMentionsViewListStrategy")({viewItemStrategyRenderer:c("GroupsCometMentionsViewItemResolver.react")});c("useGroupCometInviteOnMentionDialogPlugin")(a,f);return i.jsx(d("GroupsCometMentionsContext.react").GroupsCometMentionsContextProvider,{groupID:f,children:i.jsx(c("CometMentionsForLexical.react"),{createNodeStrategy:c("cometUFIGroupMentionsLexicalCreateNodeStrategy"),dataSourceResolverConfig:e,editor:a,layoutStrategyRenderer:c("CometMentionsLayoutStrategy.react"),viewStrategyRenderer:g})})}}g["default"]=a}),98);
__d("createUpgradedUFI2GroupMentionsComposerPluginForLexical",["upgradedUFI2GroupMentionsComposerPluginCreatorWithTypeaheadViewForLexical"],(function(a,b,c,d,e,f,g){"use strict";a=c("upgradedUFI2GroupMentionsComposerPluginCreatorWithTypeaheadViewForLexical")();g["default"]=a}),98);
__d("useGroupsCometTypeaheadBootloadDataSourceQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="6163124660458064"}),null);
__d("useGroupsCometTypeaheadBootloadDataSourceQuery.graphql",["useGroupsCometTypeaheadBootloadDataSourceQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a=function(){var a={defaultValue:null,kind:"LocalArgument",name:"canUseSections"},c={defaultValue:null,kind:"LocalArgument",name:"canViewerMessage"},d={defaultValue:null,kind:"LocalArgument",name:"firstDegreeFilters"},e={defaultValue:null,kind:"LocalArgument",name:"groupID"},f={defaultValue:null,kind:"LocalArgument",name:"isAdminsOnly"},g={defaultValue:null,kind:"LocalArgument",name:"isPhotoTag"},h={defaultValue:null,kind:"LocalArgument",name:"postID"},i={defaultValue:null,kind:"LocalArgument",name:"scale"},j={kind:"Variable",name:"group_id",variableName:"groupID"},k=[{kind:"Variable",name:"can_viewer_message",variableName:"canViewerMessage"},j,{kind:"Variable",name:"is_admins_only",variableName:"isAdminsOnly"},{kind:"Variable",name:"is_photo_tag",variableName:"isPhotoTag"},{kind:"Variable",name:"post_id",variableName:"postID"},{kind:"Variable",name:"types",variableName:"firstDegreeFilters"},{kind:"Variable",name:"use_sections",variableName:"canUseSections"}],l={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},m={alias:null,args:null,kind:"ScalarField",name:"score",storageKey:null},n={alias:null,args:null,kind:"ScalarField",name:"subtext",storageKey:null},o={alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},p={alias:null,args:null,kind:"ScalarField",name:"mentions_subtext",storageKey:null},q={alias:null,args:null,kind:"ScalarField",name:"is_verified",storageKey:null},r={kind:"Variable",name:"scale",variableName:"scale"},s={alias:"photo",args:[{kind:"Literal",name:"height",value:40},r,{kind:"Literal",name:"width",value:40}],concreteType:"Image",kind:"LinkedField",name:"profile_picture",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:null};j=[j];var t={alias:null,args:null,concreteType:"WorkForeignEntityInfo",kind:"LinkedField",name:"work_foreign_entity_info",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"type",storageKey:null}],storageKey:null},u=[o,p,s],v=[o,s];t={alias:null,args:null,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},l,{kind:"InlineFragment",selections:[o,{alias:null,args:null,kind:"ScalarField",name:"gender",storageKey:null},p,q,s,{alias:null,args:j,kind:"ScalarField",name:"can_be_invited_by_viewer",storageKey:null},{kind:"InlineFragment",selections:[{kind:"InlineFragment",selections:[t],type:"User",abstractKey:null},{kind:"InlineFragment",selections:[t,{alias:null,args:null,kind:"ScalarField",name:"is_multi_company_group",storageKey:null}],type:"Group",abstractKey:null}],type:"Entity",abstractKey:"__isEntity"}],type:"User",abstractKey:null},{kind:"InlineFragment",selections:u,type:"XFBWorkroomsBaseUser",abstractKey:"__isXFBWorkroomsBaseUser"},{kind:"InlineFragment",selections:u,type:"Group",abstractKey:null},{kind:"InlineFragment",selections:u,type:"Event",abstractKey:null},{kind:"InlineFragment",selections:[o,p,q,s],type:"Page",abstractKey:null},{kind:"InlineFragment",selections:v,type:"ContextualProfile",abstractKey:"__isContextualProfile"},{kind:"InlineFragment",selections:u,type:"GroupRule",abstractKey:null},{kind:"InlineFragment",selections:v,type:"GroupRulesTaggingEntry",abstractKey:null},{kind:"InlineFragment",selections:[{alias:null,args:j,concreteType:null,kind:"LinkedField",name:"reference_type",plural:!1,selections:[l],storageKey:null}],type:"ActorWithCustomizableContextualProfile",abstractKey:"__isActorWithCustomizableContextualProfile"},{kind:"InlineFragment",selections:u,type:"BatchMentions",abstractKey:null},{kind:"InlineFragment",selections:[o,p,{alias:"thumbnail_link",args:[r],kind:"ScalarField",name:"icon_uri",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"doc_title",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"doc_url",storageKey:null}],type:"KnowledgeHubDocumentData",abstractKey:null}],storageKey:null};q=[l,m,n,t];s=[{kind:"RootArgument",name:"groupID"},{kind:"RootArgument",name:"scale"}];v={alias:null,args:null,kind:"ScalarField",name:"cache_id",storageKey:null};j={alias:null,args:null,kind:"ScalarField",name:"label",storageKey:null};u={kind:"InlineFragment",selections:[m,n,t],type:"CometComposerTypeaheadResultEntry",abstractKey:null};return{fragment:{argumentDefinitions:[a,c,d,e,f,g,h,i],kind:"Fragment",metadata:null,name:"useGroupsCometTypeaheadBootloadDataSourceQuery",selections:[{alias:null,args:k,concreteType:null,kind:"LinkedField",name:"comet_group_typeahead_bootload",plural:!0,selections:[l,{kind:"InlineDataFragmentSpread",name:"createGroupsCometMentionsDataEntry_mentionsEntry",selections:[l,{kind:"InlineFragment",selections:[{kind:"InlineDataFragmentSpread",name:"createGroupsCometMentionsDataEntry_composerTypeaheadResultEntry",selections:q,args:null,argumentDefinitions:s}],type:"CometComposerTypeaheadResultEntry",abstractKey:null},{kind:"InlineFragment",selections:[v,j,{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"entries",plural:!0,selections:[{kind:"InlineDataFragmentSpread",name:"createGroupsCometMentionsDataEntry_composerTypeaheadResultEntry",selections:[{kind:"InlineFragment",selections:q,type:"CometComposerTypeaheadResultEntry",abstractKey:null}],args:null,argumentDefinitions:s}],storageKey:null}],type:"XFBMentionsSectionEntry",abstractKey:null}],args:null,argumentDefinitions:[]}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[i,e,c,f,g,h,d,a],kind:"Operation",name:"useGroupsCometTypeaheadBootloadDataSourceQuery",selections:[{alias:null,args:k,concreteType:null,kind:"LinkedField",name:"comet_group_typeahead_bootload",plural:!0,selections:[l,{kind:"TypeDiscriminator",abstractKey:"__isXFBMentionsEntry"},u,{kind:"InlineFragment",selections:[v,j,{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"entries",plural:!0,selections:[l,u],storageKey:null}],type:"XFBMentionsSectionEntry",abstractKey:null}],storageKey:null}]},params:{id:b("useGroupsCometTypeaheadBootloadDataSourceQuery_facebookRelayOperation"),metadata:{},name:"useGroupsCometTypeaheadBootloadDataSourceQuery",operationKind:"query",text:null}}}();e.exports=a}),null);
__d("useGroupsCometTypeaheadBootloadDataSource",["WebPixelRatio","createGroupsCometMentionsDataEntry","filterNulls","react","useCometTypeaheadCompositeBootstrapDataSource","useGroupsCometTypeaheadBootloadDataSourceQuery.graphql"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=(i||d("react")).c,k=h!==void 0?h:h=b("useGroupsCometTypeaheadBootloadDataSourceQuery.graphql");function l(a){return c("filterNulls")(((a=a==null?void 0:a.comet_group_typeahead_bootload)!=null?a:[]).map(d("createGroupsCometMentionsDataEntry").createGroupsCometMentionsDataEntryOrSectionEntry))}function a(a){var b=j(10),e=a.canUseSections,f=a.firstDegreeFilters,g=a.groupID,h=a.limit,i=a.matchStrategy;a=a.postID;var m;b[0]===Symbol["for"]("react.memo_cache_sentinel")?(m=d("WebPixelRatio").get(),b[0]=m):m=b[0];b[1]!==e||b[2]!==f||b[3]!==g||b[4]!==a?(m={canUseSections:e,firstDegreeFilters:f,groupID:g,postID:a,scale:m},b[1]=e,b[2]=f,b[3]=g,b[4]=a,b[5]=m):m=b[5];b[6]!==h||b[7]!==i||b[8]!==m?(e={gqlQuery:k,limit:h,matchStrategy:i,normalize:l,queryVariables:m},b[6]=h,b[7]=i,b[8]=m,b[9]=e):e=b[9];return c("useCometTypeaheadCompositeBootstrapDataSource")(e)}g["default"]=a}),98);
__d("useGroupsCometTypeaheadNetworkDataSourceQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="6493643600719877"}),null);
__d("useGroupsCometTypeaheadNetworkDataSourceQuery.graphql",["useGroupsCometTypeaheadNetworkDataSourceQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a=function(){var a={defaultValue:null,kind:"LocalArgument",name:"canUseSections"},c={defaultValue:null,kind:"LocalArgument",name:"canViewerMessage"},d={defaultValue:null,kind:"LocalArgument",name:"firstDegreeFilters"},e={defaultValue:null,kind:"LocalArgument",name:"groupID"},f={defaultValue:null,kind:"LocalArgument",name:"isPhotoTag"},g={defaultValue:null,kind:"LocalArgument",name:"postID"},h={defaultValue:null,kind:"LocalArgument",name:"query"},i={defaultValue:null,kind:"LocalArgument",name:"scale"},j={kind:"Variable",name:"group_id",variableName:"groupID"},k=[{kind:"Variable",name:"can_viewer_message",variableName:"canViewerMessage"},j,{kind:"Variable",name:"is_photo_tag",variableName:"isPhotoTag"},{kind:"Variable",name:"post_id",variableName:"postID"},{kind:"Variable",name:"query",variableName:"query"},{kind:"Variable",name:"types",variableName:"firstDegreeFilters"},{kind:"Variable",name:"use_sections",variableName:"canUseSections"}],l={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},m={alias:null,args:null,kind:"ScalarField",name:"score",storageKey:null},n={alias:null,args:null,kind:"ScalarField",name:"subtext",storageKey:null},o={alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},p={alias:null,args:null,kind:"ScalarField",name:"mentions_subtext",storageKey:null},q={alias:null,args:null,kind:"ScalarField",name:"is_verified",storageKey:null},r={kind:"Variable",name:"scale",variableName:"scale"},s={alias:"photo",args:[{kind:"Literal",name:"height",value:40},r,{kind:"Literal",name:"width",value:40}],concreteType:"Image",kind:"LinkedField",name:"profile_picture",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:null};j=[j];var t={alias:null,args:null,concreteType:"WorkForeignEntityInfo",kind:"LinkedField",name:"work_foreign_entity_info",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"type",storageKey:null}],storageKey:null},u=[o,p,s],v=[o,s];t={alias:null,args:null,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},l,{kind:"InlineFragment",selections:[o,{alias:null,args:null,kind:"ScalarField",name:"gender",storageKey:null},p,q,s,{alias:null,args:j,kind:"ScalarField",name:"can_be_invited_by_viewer",storageKey:null},{kind:"InlineFragment",selections:[{kind:"InlineFragment",selections:[t],type:"User",abstractKey:null},{kind:"InlineFragment",selections:[t,{alias:null,args:null,kind:"ScalarField",name:"is_multi_company_group",storageKey:null}],type:"Group",abstractKey:null}],type:"Entity",abstractKey:"__isEntity"}],type:"User",abstractKey:null},{kind:"InlineFragment",selections:u,type:"XFBWorkroomsBaseUser",abstractKey:"__isXFBWorkroomsBaseUser"},{kind:"InlineFragment",selections:u,type:"Group",abstractKey:null},{kind:"InlineFragment",selections:u,type:"Event",abstractKey:null},{kind:"InlineFragment",selections:[o,p,q,s],type:"Page",abstractKey:null},{kind:"InlineFragment",selections:v,type:"ContextualProfile",abstractKey:"__isContextualProfile"},{kind:"InlineFragment",selections:u,type:"GroupRule",abstractKey:null},{kind:"InlineFragment",selections:v,type:"GroupRulesTaggingEntry",abstractKey:null},{kind:"InlineFragment",selections:[{alias:null,args:j,concreteType:null,kind:"LinkedField",name:"reference_type",plural:!1,selections:[l],storageKey:null}],type:"ActorWithCustomizableContextualProfile",abstractKey:"__isActorWithCustomizableContextualProfile"},{kind:"InlineFragment",selections:u,type:"BatchMentions",abstractKey:null},{kind:"InlineFragment",selections:[o,p,{alias:"thumbnail_link",args:[r],kind:"ScalarField",name:"icon_uri",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"doc_title",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"doc_url",storageKey:null}],type:"KnowledgeHubDocumentData",abstractKey:null}],storageKey:null};q=[l,m,n,t];s=[{kind:"RootArgument",name:"groupID"},{kind:"RootArgument",name:"scale"}];v={alias:null,args:null,kind:"ScalarField",name:"cache_id",storageKey:null};j={alias:null,args:null,kind:"ScalarField",name:"label",storageKey:null};u={kind:"InlineFragment",selections:[m,n,t],type:"CometComposerTypeaheadResultEntry",abstractKey:null};return{fragment:{argumentDefinitions:[a,c,d,e,f,g,h,i],kind:"Fragment",metadata:null,name:"useGroupsCometTypeaheadNetworkDataSourceQuery",selections:[{alias:null,args:k,concreteType:null,kind:"LinkedField",name:"comet_group_typeahead_search",plural:!0,selections:[{kind:"InlineDataFragmentSpread",name:"createGroupsCometMentionsDataEntry_mentionsEntry",selections:[l,{kind:"InlineFragment",selections:[{kind:"InlineDataFragmentSpread",name:"createGroupsCometMentionsDataEntry_composerTypeaheadResultEntry",selections:q,args:null,argumentDefinitions:s}],type:"CometComposerTypeaheadResultEntry",abstractKey:null},{kind:"InlineFragment",selections:[v,j,{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"entries",plural:!0,selections:[{kind:"InlineDataFragmentSpread",name:"createGroupsCometMentionsDataEntry_composerTypeaheadResultEntry",selections:[{kind:"InlineFragment",selections:q,type:"CometComposerTypeaheadResultEntry",abstractKey:null}],args:null,argumentDefinitions:s}],storageKey:null}],type:"XFBMentionsSectionEntry",abstractKey:null}],args:null,argumentDefinitions:[]}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[h,i,e,c,f,g,d,a],kind:"Operation",name:"useGroupsCometTypeaheadNetworkDataSourceQuery",selections:[{alias:null,args:k,concreteType:null,kind:"LinkedField",name:"comet_group_typeahead_search",plural:!0,selections:[l,{kind:"TypeDiscriminator",abstractKey:"__isXFBMentionsEntry"},u,{kind:"InlineFragment",selections:[v,j,{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"entries",plural:!0,selections:[l,u],storageKey:null}],type:"XFBMentionsSectionEntry",abstractKey:null}],storageKey:null}]},params:{id:b("useGroupsCometTypeaheadNetworkDataSourceQuery_facebookRelayOperation"),metadata:{},name:"useGroupsCometTypeaheadNetworkDataSourceQuery",operationKind:"query",text:null}}}();e.exports=a}),null);
__d("useGroupsCometTypeaheadNetworkDataSource",["WebPixelRatio","createGroupsCometMentionsDataEntry","filterNulls","react","useCometTypeaheadGraphQLDataSource","useGroupsCometTypeaheadNetworkDataSourceQuery.graphql"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=(i||d("react")).c,k=h!==void 0?h:h=b("useGroupsCometTypeaheadNetworkDataSourceQuery.graphql");function l(a){return c("filterNulls")(((a=a==null?void 0:a.comet_group_typeahead_search)!=null?a:[]).map(d("createGroupsCometMentionsDataEntry").createGroupsCometMentionsDataEntryOrSectionEntry))}function a(a){var b=j(8),e=a.canUseSections,f=a.firstDegreeFilters,g=a.groupID,h=a.limit,i=a.postID;b[0]!==e||b[1]!==f||b[2]!==g||b[3]!==i?(a=function(a){a=a.query;return{canUseSections:e,firstDegreeFilters:f,groupID:g,postID:i,query:a,scale:d("WebPixelRatio").get()}},b[0]=e,b[1]=f,b[2]=g,b[3]=i,b[4]=a):a=b[4];var m;b[5]!==h||b[6]!==a?(m={gqlQuery:k,limit:h,normalize:l,queryVariablesBuilderFunction:a},b[5]=h,b[6]=a,b[7]=m):m=b[7];return c("useCometTypeaheadGraphQLDataSource")(m)}g["default"]=a}),98);
__d("useBaseGroupsMentionsDataSourceResolverConfig",["MentionsCommonWordsBlocklist","createCometAtSignComposerMentionsMatchStrategy","createCometMentionsNameMatchStrategy","gkx","react","useCometMentionsDataSourceResolverConfig","useCometTypeaheadCompositeDataSource","useGroupsCometTypeaheadBootloadDataSource","useGroupsCometTypeaheadNetworkDataSource"],(function(a,b,c,d,e,f,g){"use strict";var h;b=h||d("react");b.useMemo;var i=b.c,j=["USER","WORKROOMS_USER"],k=["USER","WORKROOMS_USER","EVENT","GROUP","PAGE"],l=10,m=5;function a(a){var b=i(64),d=a.firstDegreeFiltersForBootstrap,e=a.firstDegreeFiltersForNetwork,f=a.groupID,g=a.postID,h=a.shouldBootstrapOnLayoutEffect,n=a.matchStrategy,o=a.nullstateDataSource,p=a.canUseSections,q=a.payloadDecorators;a=a.limit;e=e===void 0?k:e;var r;b[0]!==a?(r=a!=null?a:Math.floor(m/2),b[0]=a,b[1]=r):r=b[1];var s;b[2]!==p||b[3]!==d||b[4]!==f||b[5]!==r||b[6]!==n||b[7]!==g?(s={canUseSections:p,firstDegreeFilters:d,groupID:f,limit:r,matchStrategy:n,postID:g},b[2]=p,b[3]=d,b[4]=f,b[5]=r,b[6]=n,b[7]=g,b[8]=s):s=b[8];d=c("useGroupsCometTypeaheadBootloadDataSource")(s);b[9]!==g||b[10]!==f?(r=g!=null?{groupID:f,postID:g,type:"groups_post_mentions_intentful_datasource_cache_key"}:{groupID:f,type:"groups_mentions_intentful_datasource_cache_key"},b[9]=g,b[10]=f,b[11]=r):r=b[11];s=a!=null?a:l;var t=a!=null?a:l,u;b[12]!==p||b[13]!==e||b[14]!==f||b[15]!==t||b[16]!==g?(u={canUseSections:p,firstDegreeFilters:e,groupID:f,limit:t,postID:g},b[12]=p,b[13]=e,b[14]=f,b[15]=t,b[16]=g,b[17]=u):u=b[17];p=c("useGroupsCometTypeaheadNetworkDataSource")(u);b[18]!==d||b[19]!==r||b[20]!==s||b[21]!==p||b[22]!==o||b[23]!==q?(e={bootstrapDataSource:d,cacheKey_SEARCH_ONLY:r,limit:s,networkDataSource:p,nullstateDataSource:o,payloadDecorators:q},b[18]=d,b[19]=r,b[20]=s,b[21]=p,b[22]=o,b[23]=q,b[24]=e):e=b[24];t=c("useCometTypeaheadCompositeDataSource")(e);b[25]!==a?(u=a!=null?a:Math.floor(m/2),b[25]=a,b[26]=u):u=b[26];b[27]!==f||b[28]!==u||b[29]!==n||b[30]!==g?(d={firstDegreeFilters:j,groupID:f,limit:u,matchStrategy:n,postID:g},b[27]=f,b[28]=u,b[29]=n,b[30]=g,b[31]=d):d=b[31];r=c("useGroupsCometTypeaheadBootloadDataSource")(d);b[32]!==g||b[33]!==f?(s=g!=null?{groupID:f,postID:g,type:"groups_post_mentions_intentful_datasource_cache_key"}:{groupID:f,type:"groups_mentions_intentful_datasource_cache_key"},b[32]=g,b[33]=f,b[34]=s):s=b[34];p=a!=null?a:m;e=a!=null?a:m;b[35]!==f||b[36]!==e||b[37]!==g?(u={firstDegreeFilters:j,groupID:f,limit:e,postID:g},b[35]=f,b[36]=e,b[37]=g,b[38]=u):u=b[38];n=c("useGroupsCometTypeaheadNetworkDataSource")(u);b[39]!==r||b[40]!==s||b[41]!==p||b[42]!==n||b[43]!==q?(d={bootstrapDataSource:r,cacheKey_SEARCH_ONLY:s,limit:p,networkDataSource:n,payloadDecorators:q},b[39]=r,b[40]=s,b[41]=p,b[42]=n,b[43]=q,b[44]=d):d=b[44];f=c("useCometTypeaheadCompositeDataSource")(d);e=a!=null?a:m;b[45]!==r||b[46]!==e?(g={bootstrapDataSource:r,limit:e},b[45]=r,b[46]=e,b[47]=g):g=b[47];u=c("useCometTypeaheadCompositeDataSource")(g);var v;bb0:{s=o!=null?0:1;b[48]!==s?(p=c("createCometAtSignComposerMentionsMatchStrategy")({minMatchLength:s}),b[48]=s,b[49]=p):p=b[49];b[50]!==t||b[51]!==p?(n={dataSource:t,matchStrategy:p},b[50]=t,b[51]=p,b[52]=n):n=b[52];if(b[53]!==n||b[54]!==f||b[55]!==u){q=[n];if(c("gkx")("23231")){v=q;break bb0}b[58]===Symbol["for"]("react.memo_cache_sentinel")?(d=c("createCometMentionsNameMatchStrategy")({commonWordsBlocklist:c("MentionsCommonWordsBlocklist").wordList,minMatchLength:3,nameCase:"capitalized"}),b[58]=d):d=b[58];b[59]!==f?(a={dataSource:f,matchStrategy:d},b[59]=f,b[60]=a):a=b[60];q.push(a);b[61]===Symbol["for"]("react.memo_cache_sentinel")?(r=c("createCometMentionsNameMatchStrategy")({commonWordsBlocklist:c("MentionsCommonWordsBlocklist").wordList,minMatchLength:4,nameCase:"lower-case"}),b[61]=r):r=b[61];b[62]!==u?(e={dataSource:u,matchStrategy:r},b[62]=u,b[63]=e):e=b[63];q.push(e);b[53]=n;b[54]=f;b[55]=u;b[56]=q;b[57]=v}else q=b[56],v=b[57];v=q}g=v;return c("useCometMentionsDataSourceResolverConfig")(g,h)}g["default"]=a}),98);
__d("useGroupsCometComposerMentionsDataSourceResolverConfig",["react","useBaseGroupsMentionsDataSourceResolverConfig"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||d("react")).c;function a(a){var b=i(7),d=a.canUseSections,e=a.firstDegreeFiltersForBootstrap,f=a.firstDegreeFiltersForNetwork,g=a.groupID,h=a.postID;a=a.shouldBootstrapOnLayoutEffect;var j;b[0]!==d||b[1]!==e||b[2]!==f||b[3]!==g||b[4]!==h||b[5]!==a?(j={canUseSections:d,firstDegreeFiltersForBootstrap:e,firstDegreeFiltersForNetwork:f,groupID:g,postID:h,shouldBootstrapOnLayoutEffect:a},b[0]=d,b[1]=e,b[2]=f,b[3]=g,b[4]=h,b[5]=a,b[6]=j):j=b[6];return c("useBaseGroupsMentionsDataSourceResolverConfig")(j)}g["default"]=a}),98);