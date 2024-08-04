;/*FB_PKG_DELIM*/

__d("CometFeedStoryActorCommunityAttributionImageSizeUtils",[],(function(a,b,c,d,e,f,g){"use strict";a=40;b=24;c=32;d={profileBackgroundSize:{height:"xi0exxh",width:"xlzg99y",$$css:!0},ringBackgroundSize:{height:"x1aekv1k",width:"xq14iec",$$css:!0},rootSize:{height:"x1vqgdyp",minWidth:"x1fns5xo",$$css:!0}};e=a;f=b;a=c;g.sizeStyles=d;g.GROUP_IMAGE_SIZE=e;g.ACTOR_IMAGE_SIZE=f;g.PROFILE_PHOTO_SIZE_WITH_RING=a}),98);
__d("CometFeedStoryActorCommunityAttributionRender.react",["CometFeedStoryActorCommunityAttributionImageSizeUtils","react","react-strict-dom"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react"),j={profileBackground:{backgroundColor:"x2bj2ny",$$css:!0},profileBase:{borderTopStartRadius:"x14yjl9h",borderTopEndRadius:"xudhj91",borderBottomEndRadius:"x18nykt9",borderBottomStartRadius:"xww2gxu",position:"x10l6tqk",$$css:!0},profileBorderWithoutRing:{borderTopColor:"x1aoij9j",borderEndColor:"xxpsvdv",borderBottomColor:"x2e7n7m",borderStartColor:"x9387xi",borderTopStyle:"x13fuv20",borderEndStyle:"xu3j5b3",borderBottomStyle:"x1q0q8m5",borderStartStyle:"x26u7qi",borderTopWidth:"x178xt8z",borderEndWidth:"xm81vs4",borderBottomWidth:"xso031l",borderStartWidth:"xy80clv",$$css:!0},profileOffsetWithoutRing:{bottom:"x1ey2m1c",end:"xds687c",left:null,right:null,$$css:!0},profileOffsetWithRing:{bottom:"x1t1qrwb",end:"x15jmxi0",left:null,right:null,$$css:!0},ringBackground:{backgroundColor:"x2bj2ny",$$css:!0},root:{position:"x1n2onr6",$$css:!0}};function a(a){var b=a.background,c=a.foreground;a=a.hasStoryRing;a=a===void 0?!1:a;var e=a?j.profileOffsetWithRing:j.profileOffsetWithoutRing,f=a?j.ringBackground:j.profileBackground,g=a?d("CometFeedStoryActorCommunityAttributionImageSizeUtils").sizeStyles.ringBackgroundSize:d("CometFeedStoryActorCommunityAttributionImageSizeUtils").sizeStyles.profileBackgroundSize;a=a?null:j.profileBorderWithoutRing;return i.jsxs(d("react-strict-dom").html.div,{"aria-hidden":!0,style:[j.root,d("CometFeedStoryActorCommunityAttributionImageSizeUtils").sizeStyles.rootSize],children:[b,c?i.jsxs(i.Fragment,{children:[i.jsx(d("react-strict-dom").html.div,{style:[j.profileBase,e,f,g]}),i.jsx(d("react-strict-dom").html.div,{style:[j.profileBase,e,a],children:c})]}):null]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometFeedStoryActorCommunityAttributionStrategy_actorPhoto.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={kind:"Variable",name:"scale",variableName:"scale"};return{argumentDefinitions:[{kind:"RootArgument",name:"scale"}],kind:"Fragment",metadata:null,name:"CometFeedStoryActorCommunityAttributionStrategy_actorPhoto",selections:[{args:null,kind:"FragmentSpread",name:"useCometFeedStoryMatchDebugger_iCometStorySection"},{kind:"RequiredField",field:{alias:null,args:null,concreteType:"Story",kind:"LinkedField",name:"story",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"CometFeedStoryActorLink_story"},{kind:"RequiredField",field:{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"actors",plural:!0,selections:[{args:[{kind:"Literal",name:"height",value:24},a,{kind:"Literal",name:"width",value:24}],kind:"FragmentSpread",name:"FDSProfilePhotoForActor_actor"},{args:null,kind:"FragmentSpread",name:"useActorStoryStatus_actor"}],storageKey:null},action:"THROW",path:"story.actors"},{kind:"RequiredField",field:{alias:null,args:null,kind:"ScalarField",name:"post_id",storageKey:null},action:"THROW",path:"story.post_id"},{kind:"RequiredField",field:{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"to",plural:!1,selections:[{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:[{kind:"Literal",name:"height",value:40},a,{kind:"Literal",name:"width",value:40}],concreteType:"Image",kind:"LinkedField",name:"profile_picture",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:null}],type:"Group",abstractKey:null}],storageKey:null},action:"THROW",path:"story.to"}],storageKey:null},action:"THROW",path:"story"}],type:"CometFeedStoryActorCommunityAttributionStrategy",abstractKey:null}}();e.exports=a}),null);
__d("CometFeedStoryActorCommunityAttributionStrategy.react",["ActorHovercard.react","CometFeedStoryActorCommunityAttributionImageSizeUtils","CometFeedStoryActorCommunityAttributionRender.react","CometFeedStoryActorCommunityAttributionStrategy_actorPhoto.graphql","CometFeedStoryActorLink.react","CometRelay","FDSProfilePhotoForActor.react","TetraProfilePhoto.react","XCometGroupDiscussionControllerRouteBuilder","react","requireDeferred","unrecoverableViolation","useActorStoryStatus","useCometFeedStoryMatchDebugger"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=i||d("react"),k=c("requireDeferred")("CometGroupsPathingFunnelLogger").__setRef("CometFeedStoryActorCommunityAttributionStrategy.react");function a(a){var e;a=a.actorPhoto;a=d("CometRelay").useFragment(h!==void 0?h:h=b("CometFeedStoryActorCommunityAttributionStrategy_actorPhoto.graphql"),a);c("useCometFeedStoryMatchDebugger")(a);a=a.story;var f=a.actors[0],g=a.to.id,i=a.to.name,l=(e=a.to.profile_picture)==null?void 0:e.uri;e=c("useActorStoryStatus")(f);e=e.status!=="none";if(g==null||i==null||l==null)throw c("unrecoverableViolation")("group fields cannot be nullish in CometFeedStoryActorCommunityAttributionStrategy","groups_comet");var m=c("XCometGroupDiscussionControllerRouteBuilder").buildURL({hoisted_section_header_type:"recently_seen",idorvanity:g,multi_permalinks:a.post_id}),n=e?d("CometFeedStoryActorCommunityAttributionImageSizeUtils").PROFILE_PHOTO_SIZE_WITH_RING:d("CometFeedStoryActorCommunityAttributionImageSizeUtils").ACTOR_IMAGE_SIZE,o=j.jsx(c("ActorHovercard.react"),{actorID:g,children:function(a){return j.jsx(c("TetraProfilePhoto.react"),{"aria-label":i,linkProps:{passthroughProps:{ref:"feed_story"},url:m},onPress:function(){k.onReady(function(a){return a.start("NEWSFEED_POST_SQUIRCLE",g)})},ref:a,shape:"roundedRect",size:36,source:{uri:l}})}});a=j.jsx(c("CometFeedStoryActorLink.react"),{"aria-hidden":!0,story:a,children:j.jsx(c("FDSProfilePhotoForActor.react"),{actor:f,noLink:!0,shape:"circle",size:n})});return j.jsx(c("CometFeedStoryActorCommunityAttributionRender.react"),{background:o,foreground:a,hasStoryRing:e})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometFeedStoryActorCommunityAttributionStrategy_actorPhoto$normalization.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},b={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},c={alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},d={kind:"Variable",name:"scale",variableName:"scale"},e={alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null},f={alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null},g={alias:null,args:null,concreteType:"WorkForeignEntityInfo",kind:"LinkedField",name:"work_foreign_entity_info",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"type",storageKey:null}],storageKey:null},h={alias:null,args:null,concreteType:"Story",kind:"LinkedField",name:"first_story_to_show",plural:!1,selections:[b,{alias:null,args:null,concreteType:"StoryCardSeenState",kind:"LinkedField",name:"story_card_seen_state",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"is_seen_by_viewer",storageKey:null}],storageKey:null}],storageKey:null};return{kind:"SplitOperation",metadata:{},name:"CometFeedStoryActorCommunityAttributionStrategy_actorPhoto$normalization",selections:[{alias:null,args:null,concreteType:"Story",kind:"LinkedField",name:"story",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"actors",plural:!0,selections:[a,{kind:"TypeDiscriminator",abstractKey:"__isActor"},b,c,{alias:null,args:[{kind:"Literal",name:"height",value:24},d,{kind:"Literal",name:"width",value:24}],concreteType:"Image",kind:"LinkedField",name:"profile_picture",plural:!1,selections:[e,{alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"scale",storageKey:null}],storageKey:null},{kind:"InlineFragment",selections:[f,{alias:"profile_url",args:null,kind:"ScalarField",name:"url",storageKey:null},f,{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"category_type",storageKey:null}],type:"Page",abstractKey:null},{kind:"InlineFragment",selections:[g,{alias:null,args:null,concreteType:"WorkUserInfo",kind:"LinkedField",name:"work_info",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"is_active_account",storageKey:null}],storageKey:null}],type:"User",abstractKey:null},{kind:"InlineFragment",selections:[g,{alias:null,args:null,kind:"ScalarField",name:"is_multi_company_group",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"work_official_status",storageKey:null}],type:"Group",abstractKey:null}],type:"Entity",abstractKey:"__isEntity"},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"answer_agent_group_id",storageKey:null},{alias:null,args:[{kind:"Literal",name:"first",value:1}],concreteType:"DirectInboxBroadcastBucketConnection",kind:"LinkedField",name:"story_bucket",plural:!1,selections:[{alias:null,args:null,concreteType:"DirectMessageThreadBucket",kind:"LinkedField",name:"nodes",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"should_show_close_friend_badge",storageKey:null},b,h],storageKey:null}],storageKey:"story_bucket(first:1)"},{kind:"ClientExtension",selections:[{alias:null,args:null,kind:"ScalarField",name:"availability",storageKey:null}]}],type:"User",abstractKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"pages_story_bucket_v2",plural:!1,selections:[a,b,h],storageKey:null}],type:"Page",abstractKey:null}],storageKey:null},{alias:null,args:[{kind:"Variable",name:"location",variableName:"renderLocation"}],concreteType:"CometStorySections",kind:"LinkedField",name:"comet_sections",plural:!1,selections:[{alias:null,args:[{kind:"Literal",name:"supported",value:"2rhVpW"}],concreteType:null,kind:"LinkedField",name:"action_link",plural:!1,selections:[a,{kind:"InlineFragment",selections:[{args:null,documentName:"CometFeedStoryActorLink_story",fragmentName:"CometFeedStoryTitleGroupSellerActor_actionLink",fragmentPropName:"actionLink",kind:"ModuleImport"}],type:"GroupSellerProfileActionLink",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometFeedStoryActorLink_story",fragmentName:"CometFeedStoryTitleGroupMemberActor_groupMemberProfileActionLink",fragmentPropName:"groupMemberProfileActionLink",kind:"ModuleImport"}],type:"GroupMemberProfileActionLink",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometFeedStoryActorLink_story",fragmentName:"CometFeedStoryTitleGroupAnonProfileActor_actionLink",fragmentPropName:"actionLink",kind:"ModuleImport"}],type:"GroupMemberAnonProfileActionLink",abstractKey:null}],storageKey:'action_link(supported:"2rhVpW")'}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"post_id",storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"to",plural:!1,selections:[a,b,{kind:"InlineFragment",selections:[c,{alias:null,args:[{kind:"Literal",name:"height",value:40},d,{kind:"Literal",name:"width",value:40}],concreteType:"Image",kind:"LinkedField",name:"profile_picture",plural:!1,selections:[e],storageKey:null}],type:"Group",abstractKey:null}],storageKey:null},b],storageKey:null},{kind:"InlineFragment",selections:[a,{alias:null,args:null,kind:"ScalarField",name:"is_prod_eligible",storageKey:null}],type:"ICometStorySection",abstractKey:"__isICometStorySection"}]}}();e.exports=a}),null);
__d("CometFeedStoryCommunityAttributionGroupPostByStrategy_strategy.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometFeedStoryCommunityAttributionGroupPostByStrategy_strategy",selections:[{args:null,kind:"FragmentSpread",name:"useCometFeedStoryMatchDebugger_iCometStorySection"},{kind:"RequiredField",field:{alias:null,args:null,concreteType:"Story",kind:"LinkedField",name:"story",plural:!1,selections:[{kind:"RequiredField",field:{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"actors",plural:!0,selections:[{args:null,kind:"FragmentSpread",name:"GroupsCometSellerProfileLink_actor"},{kind:"RequiredField",field:a,action:"THROW",path:"story.actors.id"},{kind:"RequiredField",field:{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},action:"THROW",path:"story.actors.name"},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null}],type:"Entity",abstractKey:"__isEntity"}],storageKey:null},action:"THROW",path:"story.actors"},{kind:"RequiredField",field:{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"to",plural:!1,selections:[{kind:"RequiredField",field:a,action:"THROW",path:"story.to.id"}],storageKey:null},action:"THROW",path:"story.to"}],storageKey:null},action:"THROW",path:"story"},{alias:null,args:null,concreteType:"GroupMembership",kind:"LinkedField",name:"author_group_membership",plural:!1,selections:[{alias:null,args:null,concreteType:"Group",kind:"LinkedField",name:"associated_group",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"GroupsCometMemberProfileLink_group"}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"has_member_feed",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"has_commerce_attachment",storageKey:null}],type:"CometStoryCommunityAttributionGroupPostByStrategy",abstractKey:null}}();e.exports=a}),null);
__d("CometFeedStoryCommunityAttributionGroupPostByStrategy.react",["CometFeedStoryCommunityAttributionGroupPostByStrategy_strategy.graphql","CometRelay","FDSText.react","GroupsCometMemberProfileLink.react","QE2Logger","cr:7118","react","useCometFeedStoryMatchDebugger"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=i||d("react");function a(a){var e;a=a.strategy;a=d("CometRelay").useFragment(h!==void 0?h:h=b("CometFeedStoryCommunityAttributionGroupPostByStrategy_strategy.graphql"),a);c("useCometFeedStoryMatchDebugger")(a);var f=a.story.actors[0],g=a.story.to.id,i=(e=a.has_commerce_attachment)!=null?e:!1;return i&&b("cr:7118")!=null?j.jsx(b("cr:7118"),{groupID:g,member:f,onClick:function(){d("QE2Logger").logExposureForUser("commerce_profile_experiments")},children:j.jsx(c("FDSText.react"),{type:"meta2",children:f.name})}):j.jsx("span",{children:j.jsx(c("GroupsCometMemberProfileLink.react"),{group$key:(e=a.author_group_membership)==null?void 0:e.associated_group,groupID:g,hasMemberProfile:((e=a.author_group_membership)==null?void 0:e.has_member_feed)===!0,memberID:f.id,onClick:function(){i&&d("QE2Logger").logExposureForUser("commerce_profile_experiments")},profileUrl:f.url,children:j.jsx(c("FDSText.react"),{type:"meta2",children:f.name})})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometFeedStoryCommunityAttributionGroupPostByStrategy_strategy$normalization.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},b={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};return{kind:"SplitOperation",metadata:{},name:"CometFeedStoryCommunityAttributionGroupPostByStrategy_strategy$normalization",selections:[{kind:"InlineFragment",selections:[a,{alias:null,args:null,kind:"ScalarField",name:"is_prod_eligible",storageKey:null}],type:"ICometStorySection",abstractKey:"__isICometStorySection"},{alias:null,args:null,concreteType:"Story",kind:"LinkedField",name:"story",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"actors",plural:!0,selections:[a,{kind:"TypeDiscriminator",abstractKey:"__isActor"},b,{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"uri_token",storageKey:null}],type:"Page",abstractKey:null},{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null}],type:"Entity",abstractKey:"__isEntity"}],storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"to",plural:!1,selections:[a,b],storageKey:null},b],storageKey:null},{alias:null,args:null,concreteType:"GroupMembership",kind:"LinkedField",name:"author_group_membership",plural:!1,selections:[{alias:null,args:null,concreteType:"Group",kind:"LinkedField",name:"associated_group",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"answer_agent_id",storageKey:null},b],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"has_member_feed",storageKey:null},b],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"has_commerce_attachment",storageKey:null}]}}();e.exports=a}),null);
__d("CometFeedStoryCommunityAttributionTitleStrategy_contextTitle.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometFeedStoryCommunityAttributionTitleStrategy_contextTitle",selections:[{args:null,kind:"FragmentSpread",name:"useCometFeedStoryMatchDebugger_iCometStorySection"},{kind:"RequiredField",field:{alias:null,args:null,concreteType:"Story",kind:"LinkedField",name:"story",plural:!1,selections:[{kind:"RequiredField",field:{alias:null,args:null,kind:"ScalarField",name:"post_id",storageKey:null},action:"THROW",path:"story.post_id"},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"recommendation_context",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null}],storageKey:null},{kind:"RequiredField",field:{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"to",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"CometFeedStoryTitleEntity_actor"},{kind:"RequiredField",field:{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},action:"THROW",path:"story.to.id"},{kind:"RequiredField",field:{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},action:"THROW",path:"story.to.name"},{kind:"InlineFragment",selections:[{alias:null,args:[{kind:"Literal",name:"group_connection_cta",value:"JOIN_COMMUNITY_ATTRIBUTION_HEADER"},{kind:"Literal",name:"group_member_action_source",value:"NEWSFEED"}],kind:"ScalarField",name:"should_denudge_group_join_ctas",storageKey:'should_denudge_group_join_ctas(group_connection_cta:"JOIN_COMMUNITY_ATTRIBUTION_HEADER",group_member_action_source:"NEWSFEED")'},{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"override_community_attribution_name",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"CometTextWithEntitiesRelay_textWithEntities"}],storageKey:null}],type:"Group",abstractKey:null}],storageKey:null},action:"THROW",path:"story.to"}],storageKey:null},action:"THROW",path:"story"},{alias:null,args:null,concreteType:"Group",kind:"LinkedField",name:"if_viewer_can_join_group",plural:!1,selections:[{args:null,documentName:"CometFeedStoryCommunityAttributionTitleStrategy_contextTitle",fragmentName:"CometFeedStoryCommunityAttributionTitleJoinButton_group",fragmentPropName:"group",kind:"ModuleImport"}],storageKey:null}],type:"CometFeedStoryCommunityAttributionTitleStrategy",abstractKey:null};e.exports=a}),null);
__d("CometFeedStoryCommunityAttributionTitleStrategy.react",["CometFeedStoryCommunityAttributionTitleStrategy_contextTitle.graphql","CometFeedStoryTitleEntity.react","CometImageEntityRenderer","CometLinkedEntityRenderer","CometRelay","CometTextWithEntitiesRelay.react","CometTrackingNodeProvider.react","CometTrackingNodeRenderer","FDSText.react","Locale","WorkCometMulticompanyEntityRenderer","WorkCometOfficialEntityRenderer","XCometGroupDiscussionControllerRouteBuilder","react","requireDeferred","useCometFeedStoryMatchDebugger"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=i||d("react"),k=c("requireDeferred")("CometGroupsPathingFunnelLogger").__setRef("CometFeedStoryCommunityAttributionTitleStrategy.react"),l={"*":[c("CometTrackingNodeRenderer")],Group:[c("WorkCometOfficialEntityRenderer"),c("WorkCometMulticompanyEntityRenderer")]},m={"*":[c("CometLinkedEntityRenderer"),c("CometImageEntityRenderer")()]},n=h!==void 0?h:h=b("CometFeedStoryCommunityAttributionTitleStrategy_contextTitle.graphql");function a(a){var b;a=a.contextTitle;a=d("CometRelay").useFragment(n,a);c("useCometFeedStoryMatchDebugger")(a);var e=a.story,f=e.to;b=((b=f.should_denudge_group_join_ctas)!=null?b:!1)&&!e.recommendation_context;e=c("XCometGroupDiscussionControllerRouteBuilder").buildURL({hoisted_section_header_type:"recently_seen",idorvanity:f.id,multi_permalinks:e.post_id});return j.jsx("div",{className:"x6prxxf xk50ysn xvq8zen",dir:d("Locale").isRTL()?"rtl":"ltr",children:j.jsx(c("CometTrackingNodeProvider.react"),{trackingNode:304,children:f.override_community_attribution_name!=null?j.jsx(c("FDSText.react"),{type:"body3",children:j.jsx(c("CometTextWithEntitiesRelay.react"),{renderers:m,textWithEntities:f.override_community_attribution_name})}):j.jsxs(j.Fragment,{children:[j.jsx(c("CometFeedStoryTitleEntity.react"),{actor:f,onClick:function(){k.onReady(function(a){return a.start("NEWSFEED_POST_GROUP_NAME",f.id)})},renderers:l,url:e,children:f.name}),b?null:j.jsx(d("CometRelay").MatchContainer,{match:a.if_viewer_can_join_group,props:{group$key:a.if_viewer_can_join_group}})]})})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometFeedStoryCommunityAttributionTitleStrategy_contextTitle$normalization.graphql",["CometTextWithEntitiesRelay_textWithEntities$normalization.graphql"],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},c={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},d={alias:null,args:null,concreteType:"WorkForeignEntityInfo",kind:"LinkedField",name:"work_foreign_entity_info",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"type",storageKey:null}],storageKey:null};return{kind:"SplitOperation",metadata:{},name:"CometFeedStoryCommunityAttributionTitleStrategy_contextTitle$normalization",selections:[{alias:null,args:null,concreteType:"Story",kind:"LinkedField",name:"story",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"post_id",storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"recommendation_context",plural:!1,selections:[a],storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"to",plural:!1,selections:[a,c,{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{kind:"InlineFragment",selections:[{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"category_type",storageKey:null}],type:"Page",abstractKey:null},{kind:"InlineFragment",selections:[d,{alias:null,args:null,concreteType:"WorkUserInfo",kind:"LinkedField",name:"work_info",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"is_active_account",storageKey:null}],storageKey:null}],type:"User",abstractKey:null},{kind:"InlineFragment",selections:[d,{alias:null,args:null,kind:"ScalarField",name:"is_multi_company_group",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"work_official_status",storageKey:null}],type:"Group",abstractKey:null}],type:"Entity",abstractKey:"__isEntity"}],type:"Actor",abstractKey:"__isActor"},{kind:"InlineFragment",selections:[{alias:null,args:[{kind:"Literal",name:"group_connection_cta",value:"JOIN_COMMUNITY_ATTRIBUTION_HEADER"},{kind:"Literal",name:"group_member_action_source",value:"NEWSFEED"}],kind:"ScalarField",name:"should_denudge_group_join_ctas",storageKey:'should_denudge_group_join_ctas(group_connection_cta:"JOIN_COMMUNITY_ATTRIBUTION_HEADER",group_member_action_source:"NEWSFEED")'},{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"override_community_attribution_name",plural:!1,selections:[{args:null,fragment:b("CometTextWithEntitiesRelay_textWithEntities$normalization.graphql"),kind:"FragmentSpread"}],storageKey:null}],type:"Group",abstractKey:null}],storageKey:null},c],storageKey:null},{alias:null,args:null,concreteType:"Group",kind:"LinkedField",name:"if_viewer_can_join_group",plural:!1,selections:[{args:null,documentName:"CometFeedStoryCommunityAttributionTitleStrategy_contextTitle",fragmentName:"CometFeedStoryCommunityAttributionTitleJoinButton_group",fragmentPropName:"group",kind:"ModuleImport"},c],storageKey:null},{kind:"InlineFragment",selections:[a,{alias:null,args:null,kind:"ScalarField",name:"is_prod_eligible",storageKey:null}],type:"ICometStorySection",abstractKey:"__isICometStorySection"}]}}();e.exports=a}),null);
__d("CometSaveAddToCollectionDialogQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="4975193105909709"}),null);
__d("CometSaveAddToCollectionDialogQuery$Parameters",["CometSaveAddToCollectionDialogQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("CometSaveAddToCollectionDialogQuery_facebookRelayOperation"),metadata:{},name:"CometSaveAddToCollectionDialogQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometSaveAddToCollectionDialog.entrypoint",["CometSaveAddToCollectionDialogQuery$Parameters","JSResourceForInteraction","WebPixelRatio"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){a=a.collectionItemID;var b=1;(a==null||a==="")&&(b=0);return{queries:{dialogViewerQueryRef:{parameters:c("CometSaveAddToCollectionDialogQuery$Parameters"),variables:{allSavesLimit:b,collectionItemID:a,scale:d("WebPixelRatio").get()}}}}},root:c("JSResourceForInteraction")("CometSaveAddToCollectionDialog.react").__setRef("CometSaveAddToCollectionDialog.entrypoint")};g["default"]=a}),98);
__d("CometSaveCollectionConstants",[],(function(a,b,c,d,e,f){"use strict";a=36;b=48;c=5;d=["CONTRIBUTOR"];e="CONTRIBUTOR";var g=40,h="2581223601936986",i=16;f.COLLECTION_AVATAR_SIZE_MEDIUM=a;f.COLLECTION_AVATAR_SIZE_LARGE=b;f.COLLECTION_FACEPILE_CONTRIBUTORS_LIMIT=c;f.COLLECTION_FACEPILE_CONTRIBUTORS_ROLES=d;f.COLLECTION_CONTRIBUTOR_ROLE_DEFAULT=e;f.COLLECTION_NAME_MAX_LENGTH=g;f.MANUAL_COLLECTION_TEMPLATE_ID=h;f.PRIVACY_ICON_SIZE=i}),66);
__d("CometSaveCollectionInitial.react",["fbt","FDSText.react","react","stylex"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j,k=j||d("react"),l={imageSize36:{height:"xc9qbxq",width:"x14qfxbe",$$css:!0},imageSize48:{height:"xsdox4t",width:"x1useyqa",$$css:!0},initialRoot:{alignItems:"x6s0dn4",backgroundColor:"xwnonoy",borderTopStartRadius:"x1lq5wgf",borderTopEndRadius:"xgqcy7u",borderBottomEndRadius:"x30kzoy",borderBottomStartRadius:"x9jhf4c",boxShadow:"xlg9a9y",display:"x78zum5",justifyContent:"xl56j7k",position:"x1n2onr6",$$css:!0}};function a(a){var b=a.name;a=a.size;a=a===void 0?36:a;var d="headlineEmphasized4";switch(a){case 36:d="headlineEmphasized2";break;case 48:d="headlineEmphasized1";break}return k.jsx("div",{className:(i||(i=c("stylex")))(a===36&&l.imageSize36,a===48&&l.imageSize48,l.initialRoot),children:b!=null&&b.length>0&&k.jsx(c("FDSText.react"),{color:"primaryOnMedia",type:d,children:h._("__JHASH__-GqwRJxuBGC__JHASH__",[h._param("Collection first character",String.fromCodePoint(b.codePointAt(0)))])})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),226);
__d("useAddToCollectionFlow",["CometSaveAddToCollectionDialog.entrypoint","react","useCometEntryPointDialog"],(function(a,b,c,d,e,f,g){"use strict";var h;b=h||d("react");var i=b.useCallback,j=b.useRef;function a(a){var b=j(null);a=c("useCometEntryPointDialog")(c("CometSaveAddToCollectionDialog.entrypoint"),{collectionItemID:a});var d=a[0];a=i(function(a,b){d(a,b)},[d]);return[a,b]}g["default"]=a}),98);
__d("useCollectionThumbnailImage_collection.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[{kind:"RootArgument",name:"scale"}],kind:"Fragment",metadata:null,name:"useCollectionThumbnailImage_collection",selections:[{alias:null,args:[{kind:"Literal",name:"height",value:48},{kind:"Variable",name:"scale",variableName:"scale"},{kind:"Literal",name:"width",value:48}],concreteType:"Image",kind:"LinkedField",name:"collection_thumbnail_image",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:null}],type:"ContentCollection",abstractKey:"__isContentCollection"};e.exports=a}),null);
__d("useCollectionThumbnailImage",["CometRelay","useCollectionThumbnailImage_collection.graphql"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h!==void 0?h:h=b("useCollectionThumbnailImage_collection.graphql");function a(a){a=(a=d("CometRelay").useFragment(i,a))==null?void 0:a.collection_thumbnail_image;return a?{uri:a.uri}:null}g["default"]=a}),98);