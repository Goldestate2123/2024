;/*FB_PKG_DELIM*/

__d("CometStarsIconUtils",["ix","fbicon"],(function(a,b,c,d,e,f,g,h){"use strict";function a(){return d("fbicon")._(h("657883"),16)}function b(){return h("1937973")}g.getStarsUFIIcon=a;g.getStarsFilledIcon=b}),98);
__d("CometStarsVirtualGiftView.react",["ix","CometImage.react","FDSText.react","deferredLoadComponent","react","recoverableViolation","requireDeferred","stylex"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j,k=j||d("react"),l={giftImage:{marginTop:"xdj266r",marginEnd:"xkrivgy",marginBottom:"xat24cr",marginStart:"x1gryazu",$$css:!0},largeGift:{height:"x1b51vyi",width:"xh6lk7j",$$css:!0},largeGiftImage:{width:"x1bepr8w",$$css:!0},largeTierPillColor:{backgroundColor:"x1p0unzn",$$css:!0},mediumGift:{height:"x1b51vyi",width:"xh6lk7j",$$css:!0},mediumGiftImage:{width:"x1fywlfn",$$css:!0},root:{display:"x78zum5",flexDirection:"xdt5ytf",justifyContent:"x1qughib",paddingTop:"xz9dl7a",paddingEnd:"x4uap5",paddingBottom:"xsag5q8",paddingStart:"xkhd6sd",$$css:!0},selectedCard:{boxShadow:"x1sx4e5s",$$css:!0},smallGift:{height:"x1wkxgih",width:"xgf8fm",$$css:!0},smallGiftImage:{width:"x65xoit",$$css:!0},starsPill:{alignItems:"x6s0dn4",backgroundColor:"x1q8sqs3",borderTopStartRadius:"xyi19xy",borderTopEndRadius:"x1ccrb07",borderBottomEndRadius:"xtf3nb5",borderBottomStartRadius:"x1pc53ja",display:"x78zum5",height:"xxk0z11",justifyContent:"xaw8158",marginTop:"xdj266r",marginEnd:"xkrivgy",marginBottom:"xat24cr",marginStart:"x1gryazu",paddingTop:"xexx8yu",paddingEnd:"xn6708d",paddingBottom:"x18d9i69",paddingStart:"x1ye3gou",$$css:!0}},m=99,n=c("deferredLoadComponent")(c("requireDeferred")("ViewportAwareKeyframes.react").__setRef("CometStarsVirtualGiftView.react"));function a(a){var b=a.giftAnimatedImage,d=a.giftKeyframeAssetName,e=a.giftKeyframeAssetUrl,f=a.isSelected,g=a.starsAmount;a=a.tier;var j=null;if(e!=null&&d!=null)j=k.jsx(n,{assetName:d,height:m,projectName:"stars",source:e,width:m});else if(b!=null)j=k.jsx(c("CometImage.react"),{src:b||"",xstyle:[l.giftImage,a==="LARGE"&&l.largeGiftImage,a==="MEDIUM"&&l.mediumGiftImage,a==="SMALL"&&l.smallGiftImage]});else{c("recoverableViolation")("Not enough data to create keyframes virtual gift option","user_pay_stars");return null}return k.jsxs("div",{className:(i||(i=c("stylex")))(l.root,a==="LARGE"&&l.largeGift,a==="MEDIUM"&&l.mediumGift,a==="SMALL"&&l.smallGift,f&&l.selectedCard),children:[j,k.jsxs("div",{align:"center",className:i(l.starsPill,a==="LARGE"&&l.largeTierPillColor),justify:"evenly",children:[k.jsx("span",{className:"x3nfvp2 x1t4t16n",children:k.jsx(c("CometImage.react"),{src:a==="LARGE"?h("647916"):h("852669")})}),k.jsx(c("FDSText.react"),{color:a==="LARGE"?"white":"secondary",type:"bodyLink3",children:g})]})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometUFIComposerStarsPreviewArea.react",["fbt","ix","CometImage.react","CometRow.react","CometRowItem.react","CometStarsVirtualGiftView.react","CometUFIComposerPreviewArea.react","FDSText.react","react"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j,k=j||(j=d("react"));b=j;b.useCallback;var l=b.c;function m(a){return a.attachment&&a.attachment.__type==="Stars"?{amount:a.attachment.amount,gift:a.attachment.gift,giftType:a.attachment.giftType}:null}function a(a){var b=l(11),d=a.composerState,e=a.setComposerState;b[0]!==d?(a=m(d),b[0]=d,b[1]=a):a=b[1];d=a;b[2]!==e?(a=function(){e(function(){return{attachment:null}})},b[2]=e,b[3]=a):a=b[3];a=a;if(d==null)return null;var f;b[4]===Symbol["for"]("react.memo_cache_sentinel")?(f=h._("__JHASH__6cNa9gF51ES__JHASH__"),b[4]=f):f=b[4];var g;b[5]===Symbol["for"]("react.memo_cache_sentinel")?(g=h._("__JHASH__l1lH28gXx7k__JHASH__"),b[5]=g):g=b[5];var j;b[6]!==d?(j=d.gift!=null?k.jsx(c("CometStarsVirtualGiftView.react"),babelHelpers["extends"]({},d.gift,{isSelected:!1})):k.jsxs(c("CometRow.react"),{children:[k.jsx(c("CometRowItem.react"),{children:k.jsx(c("CometImage.react"),{src:i("647932")})}),k.jsx(c("CometRowItem.react"),{expanding:!0,children:k.jsx(c("FDSText.react"),{type:"bodyLink4",children:h._("__JHASH__F7XbXFaRoSm__JHASH__",[h._param("star quantity",d.amount)])})})]}),b[6]=d,b[7]=j):j=b[7];b[8]!==a||b[9]!==j?(d=k.jsx(c("CometUFIComposerPreviewArea.react"),{label:f,onRemove:a,removeAnnouncement:g,children:j}),b[8]=a,b[9]=j,b[10]=d):d=b[10];return d}g["default"]=a}),226);
__d("CometUFIStarsPickerCardRootForLexicalQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="26379242088333426"}),null);
__d("CometUFIStarsPickerCardRootForLexicalQuery$Parameters",["CometUFIStarsPickerCardRootForLexicalQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("CometUFIStarsPickerCardRootForLexicalQuery_facebookRelayOperation"),metadata:{},name:"CometUFIStarsPickerCardRootForLexicalQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometUFIStarsPickerCardForLexical.entrypoint",["CometUFIStarsPickerCardRootForLexicalQuery$Parameters","JSResourceForInteraction","WebPixelRatio"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){a=a.feedbackID;return{queries:{starsPickerCardQueryReference:{options:{fetchPolicy:"network-only",networkCacheConfig:{force:!0}},parameters:b("CometUFIStarsPickerCardRootForLexicalQuery$Parameters"),variables:{feedbackID:a,scale:d("WebPixelRatio").get()}}}}},root:c("JSResourceForInteraction")("CometUFIStarsPickerCardRootForLexical.react").__setRef("CometUFIStarsPickerCardForLexical.entrypoint")};g["default"]=a}),98);
__d("useCometUFIStarsCalloutRequireNux.react",["fbt","ARIA_LABEL_PLACEHOLDER_FIXME","FDSText.react","nux:112","react","useCurrentDisplayMode","useEmptyFunction"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=i||d("react"),k={tooltipNux:{maxWidth:"xkygqaa",$$css:!0}};function a(a){var d,e=c("useCurrentDisplayMode")()==="dark";d=(d=b("nux:112")==null?void 0:b("nux:112")("user_pay_stars_www_stars_nux"))!=null?d:c("useEmptyFunction");e=(d=d({align:"middle","aria-label":c("ARIA_LABEL_PLACEHOLDER_FIXME"),arrowStyle:"inset",content:j.jsx(c("FDSText.react"),{color:e?"white":"primary",type:"bodyLink3",children:h._("__JHASH__g2lZo6Mpocn__JHASH__")}),disableOutsideClick:!0,hasCloseButton:!0,position:"above",type:e?"accent":"default",xstyle:k.tooltipNux},a))!=null?d:null;return a?e:null}g["default"]=a}),226);
__d("CometUFIInsertStarsComposerActionForLexical.react",["fbt","CometStarsIconUtils","CometUFIEntryPointPopoverComposerAction.react","CometUFIStarsPickerCardForLexical.entrypoint","CometUFIStarsPopoverContext.react","FDSPopoverLoadingState.react","react","requireDeferred","useCometUFIStarsCalloutRequireNux.react","useImpressionLogger","useMergeRefs","useMinifiedProductAttribution"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=i||(i=d("react"));b=i;b.useCallback;var k=b.useContext;b.useMemo;var l=b.c,m=c("requireDeferred")("StarsViewerFunnelEventFalcoEvent").__setRef("CometUFIInsertStarsComposerActionForLexical.react"),n={popoverFallback:{minHeight:"xkiff13",minWidth:"x1ponnqm",$$css:!0}};function a(a){var b=l(32),e=a.feedbackID,f=a.pluginProps;a=a.starsTargetID;var g;b[0]!==a?(g={content_target_id:a,stars_entrypoint:"comment_attachment_icon",stars_sender_flow_type:"comet_stars_sheet"},b[0]=a,b[1]=g):g=b[1];a=g;var i=a;b[2]!==e||b[3]!==f||b[4]!==i?(g={feedbackID:e,pluginProps:f,starsViewerFunnelLoggerData:i},b[2]=e,b[3]=f,b[4]=i,b[5]=g):g=b[5];a=g;f=a;b[6]!==e?(g={feedbackID:e},b[6]=e,b[7]=g):g=b[7];a=g;e=a;g=c("useCometUFIStarsCalloutRequireNux.react")(!1);var o=c("useMinifiedProductAttribution")();b[8]!==o||b[9]!==i?(a=function(a){a.log(function(){return babelHelpers["extends"]({attribution_id_v2:o},i,{event:"stars_entrypoint_impression"})})},b[8]=o,b[9]=i,b[10]=a):a=b[10];a=c("useImpressionLogger")(m,a);g=c("useMergeRefs")(g,a);a=k(c("CometUFIStarsPopoverContext.react"));var p=a.setUFIStarsPopoverEntrypoint,q=a.setUFIStarsPopoverInitialAmount,r=a.setUFIStarsPopoverOnCompletionCallback,s=a.setUFIStarsPopoverShowPurchaseCard,t=a.setUFIStarsPopoverStarsViewerFunnelData;a=a.ufiStarsPopoverRef;var u;b[11]!==q||b[12]!==s||b[13]!==p||b[14]!==r?(u=function(a){a||(q(null),s(!1),p("comet_star_flyout"),r(null))},b[11]=q,b[12]=s,b[13]=p,b[14]=r,b[15]=u):u=b[15];u=u;var v;b[16]!==o||b[17]!==i||b[18]!==t?(v=function(){m.onReady(function(a){a.log(function(){return babelHelpers["extends"]({attribution_id_v2:o},i,{event:"stars_entrypoint_click"})})}),t(i)},b[16]=o,b[17]=i,b[18]=t,b[19]=v):v=b[19];v=v;var w;b[20]===Symbol["for"]("react.memo_cache_sentinel")?(w=d("CometStarsIconUtils").getStarsUFIIcon(),b[20]=w):w=b[20];w=w;var x;b[21]===Symbol["for"]("react.memo_cache_sentinel")?(x=j.jsx(c("FDSPopoverLoadingState.react"),{withArrow:!0,xstyle:n.popoverFallback}),b[21]=x):x=b[21];var y;b[22]===Symbol["for"]("react.memo_cache_sentinel")?(y=h._("__JHASH__Bmqq_81OkgZ__JHASH__"),b[22]=y):y=b[22];b[23]!==v||b[24]!==e||b[25]!==a||b[26]!==u||b[27]!==f?(x=j.jsx(c("CometUFIEntryPointPopoverComposerAction.react"),{additionalOnPress:v,entryPointParams:e,fallback:x,icon:w,imperativeRef:a,label:y,onVisibilityChange:u,otherProps:f,popoverEntryPoint:c("CometUFIStarsPickerCardForLexical.entrypoint")}),b[23]=v,b[24]=e,b[25]=a,b[26]=u,b[27]=f,b[28]=x):x=b[28];b[29]!==g||b[30]!==x?(w=j.jsx("div",{ref:g,children:x}),b[29]=g,b[30]=x,b[31]=w):w=b[31];return w}g["default"]=a}),226);
__d("UserPayStarsEventsEntrypoint",[],(function(a,b,c,d,e,f){a=Object.freeze({UNDEFINED:"undefined",FBB:"fbb",OVERLAY_CTA:"overlay_cta",RECENT_STAR_SENDERS_OVERLAY_CTA:"recent_star_senders_overlay_cta",CARRIER_BILLING_CTA:"carrier_billing_cta",CUSTOM_AMOUNT_BUY_CTA:"custom_amount_buy_cta",CUSTOM_AMOUNT_WALLET_CTA:"custom_amount_wallet_cta",COMPOSER:"composer",LIVE_COMPOSER:"live_composer",LIVE_COMPOSER_FORMAT:"live_composer_format",LIVE_END_SCREEN_BANNER:"live_end_screen_banner",LIVE_PRODUCER:"live_producer",STAR_SHEET_FOOTER_CTA:"star_sheet_footer_cta",STAR_SHEET_PROMO_CARD:"star_sheet_promo_card",STAR_SHEET_SALE_EVENT_CARD:"star_sheet_sale_event_card",STAR_SHEET_WALLET_HEADER_PILL:"star_sheet_wallet_pill",STAR_SHEET_BUY_HEADER_PILL:"star_sheet_buy_header_pill",STAR_POLL_BOOST_VOTE_SHEET:"star_poll_boost_vote_sheet",STAR_POLL_END_NOTIFICATION:"star_poll_end_notification",STAR_POLL_PSE_SHEET:"star_poll_pse_sheet",STAR_POLL_MEDIA_PILL:"star_poll_media_pill",STAR_POLL_PRODASH_ENGAGEMENT_ACTIVE_POLLS:"star_poll_prodash_engagement_active_polls",REELS_POLL_RESULT_SHEET:"reels_poll_result_sheet",STAR_PSE_SHEET_HEADER_PILL:"star_pse_sheet_header_pill",STARS_PURCHASE_SHEET_HEADER_PILL:"stars_purchase_sheet_header_pill",STAR_PSE_SHEET_CTA:"star_pse_sheet_cta",STAR_PSE_SHEET:"star_pse_sheet",STARS_SENDER_BOTTOMSHEET_CTA:"stars_sender_bottomsheet_cta",STARS_TOP_SENDER_BOTTOMSHEET_CTA:"stars_top_sender_bottomsheet_cta",STARS_REELS_TO_GIFT_SCREEN:"stars_reels_to_gift_screen",STARS_GIFTER_PROGRESSION_STARS_SHEET:"stars_gifter_progression_stars_sheet",STARS_GIFTER_PROGRESSION_STARS_SHEET_DISCOUNT_EDU_CARD:"stars_gifter_progression_stars_sheet_discount_edu_card",STARS_GIFTER_PROGRESSION_STARS_SHEET_WALLET_PILL:"stars_gifter_progression_stars_sheet_wallet_pill",STARS_GIFTER_PROGRESSION_REWARDS_SHEET:"stars_gifer_progression_rewards_sheet",STARS_GIFTER_PROGRESSION_PSE_SHEET:"stars_gifter_progression_pse_sheet",STARS_PROGRESS_PILL:"stars_progress_pill",STARS_VG_REWARD:"stars_vg_reward",STARS_DEFAULT_ON_AWARENESS_QP:"stars_default_on_awareness_qp",MOBILE_LIVE_ENDSCREEN_ONBOARDING_BANNER:"mobile_live_endscreen_onboarding_banner",MOBILE_LIVE_ENDSCREEN_REMINDER_BANNER:"mobile_live_endscreen_reminder_banner",ORION_TABS_STARS_LEADERBOARD:"orion_tabs_stars_leaderboard",FRONT_ROW_LEADERBOARD:"front_row_leaderboard",STARS_CREATOR_LEADERBOARD:"stars_creator_leaderboard",STAR_ONBOARDING_AYMT:"star_onboarding_aymt",STARS_COMMENT_COMPOSER:"stars_comment_composer",STARS_UFI_BANNER:"stars_ufi_banner",STARS_CUSTOM_MESSAGE_AYMT:"stars_custom_message_aymt",STAR_NEWS_FEED_CUE_CTA:"star_news_feed_cue_cta",STAR_NEWS_FEED_BUMPER:"star_news_feed_bumper",STAR_NEWS_FEED_BUMPER_GIVE_BUTTON:"star_news_feed_bumper_give_button",STAR_NEWS_FEED_BUMPER_EMPTY_SEND_BUTTON:"star_news_feed_bumper_empty_send_button",STAR_NEWS_FEED_BUMPER_PROFILE_PICTURE_BUTTON:"star_news_feed_bumper_profile_picture_button",STAR_NEWS_FEED_BUMPER_HEADER_MESSAGE:"stars_news_feed_bumper_header_message",STAR_BANNER_STREAMER_TRAY:"star_banner_streamer_tray",STAR_STREAKS_INFO_SHEET:"star_streaks_info_sheet",STAR_WARION_CUE_CTA:"star_warion_cue_cta",STARS_ORION_CUE_CTA:"stars_orion_cue_cta",STAR_WATCH_FEED_CUE_CTA:"star_watch_feed_cue_cta",STAR_QUICK_SEND_COMMENT:"star_quick_send_comment",STAR_NEW_USER_QUICK_SEND_COMMENT:"star_new_user_quick_send_comment",VIDEO_ATTACHMENT_CTA:"video_attachment_cta",VIDEO_STARS_COMMENT_ATTACHMENT:"video_stars_comment_attachment",VIRTUAL_GIFT_INFO_SHEET:"virtual_gift_info_sheet",PURCHASE_SHEET_PACK:"purchase_sheet_pack",STAR_SHEET_BUY_SEND_PACK:"star_sheet_buy_send_pack",PURCHASE_SHEET:"purchase_sheet",COMMUNITY_AWARDS_PURCHASE_SHEET:"community_awards_purchase_sheet",COMET:"comet",COMET_STAR_FLYOUT:"comet_star_flyout",COMET_OVERLAY_CTA:"comet_overlay_cta",COMET_COMMENT_ATTACHMENT:"comet_comment_attachment",TICKER:"ticker",QP:"qp",VOD_TICKER:"vod_ticker",VOD_TAIL_TICKER:"vod_tail_ticker",VOD_UFI:"vod_ufi",WATCH_UFI:"watch_ufi",NEWSFEED_UFI:"newsfeed_ufi",NEWSFEED_BLING_STRING:"newsfeed_bling_string",EDUCATION_CARD:"education_card",BADGE_LEVEL_TEXT:"badge_level_text",HUDDLE_STARS_BUTTON:"huddle_stars_button",HUDDLE_STARS_SEEDING_TOAST:"huddle_stars_seeding_toast",HUDDLE_STARS_ONBOARDING:"huddle_stars_onboarding",BATCH_LIKE:"batch_like",BADGE_INFORMATION_SHEET:"badge_information_sheet",STARS_STORE:"stars_store",STARS_FEST:"stars_fest",STARS_PARTY:"stars_party",STARS_COMMENT_CARD:"stars_comment_card",REELS_UFI:"reels_ufi",REELS_SOCIAL_CONTEXT:"reels_social_context",REELS_UFI_LONG_PRESS:"reels_ufi_long_press",LONG_PRESS_EDUCARD:"long_press_educard",REELS_STARS_BANNER:"reels_stars_banner",REELS_ONE_TAP:"reels_one_tap",COMBO_ONE_TAP:"combo_one_tap",LIVE_ONE_TAP:"live_one_tap",REELS_PROFILE:"reels_profile",REELS_COMET_COMPOSER:"reels_comet_composer",FEED_COMET_COMPOSER:"feed_comet_composer",STARS_RECOGNITION_POST_AYMT:"stars_recognition_post_aymt",STARS_RECOGNITION_POST_CTA:"stars_recognition_post_cta",STARS_PERF_RECAP_BOTTOMSHEET_RECOGNITION_OPTIONS_CTA:"stars_perf_recap_bottomsheet_recognition_options_cta",STARS_PERF_RECAP_RECOGNITION_BOTTOMSHEET:"stars_perf_recap_recognition_bottomsheet",STARS_PERF_RECAP_CREATE_POST_BOTTOMSHEET:"stars_perf_recap_create_post_bottomsheet",STARS_PERF_RECAP_BOTTOMSHEET_CREATE_POST_CTA:"stars_perf_recap_bottomsheet_create_post_cta",STARS_REELS_ONBOARDING_GATEWAY:"stars_reels_onboarding_gateway",PREMIUM_AWARDS_GIVER_SHEET:"premium_awards_giver_sheet",BLOKS_PLAYGROUND:"bloks_playground",LIVE_VIDEO_PLUGIN:"live_video_plugin",LIVE_STARS_STICKER:"live_stars_sticker",STARS_REELS_BANNER:"stars_reels_banner",STARS_BUY_AND_SEND_FLOW:"stars_buy_and_send_flow",STARS_ELIGIBLITY:"stars_eligibility",PHOTO_MEDIA_PILL:"photo_media_pill",FULLSCREEN_PHOTO_VIEWER_MEDIA_PILL:"fullscreen_photo_viewer_media_pill",VIDEO_MEDIA_PILL:"video_media_pill",REELS_MEDIA_PILL:"reels_media_pill",MULTI_PHOTO_MEDIA_PILL:"multi_photo_media_pill",REELS_CTA_BUTTON:"reels_cta_button",SNACKS_STORY_CARD_PILL:"snacks_story_card_pill",STARS_ON_REELS_OPEN_PROGRAM_UPSELL_BOTTOM_SHEET:"stars_on_reels_open_program_upsell_bottom_sheet",DEFAULT_ON_ENROLLMENT_UPSELL:"default_on_enrollment_upsell",DEFAULT_ON_LEARN_MORE:"default_on_learn_more",DEFAULT_ON_LEARN_MORE_EDUCATION_SCREEN:"default_on_learn_more_education_screen",CREATOR_SHEET:"creator_sheet",FIRST_TIME_RECEIVER_BOTTOM_SHEET:"first_time_receiver_bottom_sheet",PRODASH:"prodash",PRODASH_ACHIEVEMENTS:"prodash_achievements",PRODASH_WIDGET:"prodash_widget",PRODASH_COMMENTS_MANAGER:"prodash_comments_manager",PRODASH_STARS_HOME:"prodash_stars_home",PRODASH_STARS_GOALING:"prodash_stars_goaling",PRODASH_MONETIZATION_HOME:"prodash_monetization_home",PRODASH_NEXT_STEP_TIP:"prodash_next_step_tip",PRODASH_WORKFLOW_HOME:"prodash_workflow_home",DEFAULT_ON_RECIPIENT_ACTIVATION_NOTIFICATION:"default_on_recipient_activation_notification",DEFAULT_ON_ELIGIBILITY_REMINDER_NOTIFICATION:"default_on_eligibility_reminder_notification",DEFAULT_ON_FIRST_TIME_RECEIVER_NOTIFICATION:"default_on_first_time_receiver_notification",DEFAULT_ON_LEARN_MORE_ACTION_SCREEN:"default_on_learn_more_action_screen",DEFAULT_ON_LEARN_MORE_ELIGIBILITY_SCREEN:"default_on_learn_more_eligibility_screen",DEFAULT_ON_ENROLLMENT_FLOW:"default_on_enrollment_flow",PRODASH_STARS_ONBOARDING:"prodash_stars_onboarding",CREATOR_EVENTS_BOTTOMSHEET:"creator_events_bottomsheet",STARS_PERF_RECAP_NOTIF:"stars_perf_recap_notif",VIDEO_STAR_COMMENT_NOTIFICATION:"video_star_comment_notification",VIRTUAL_GIFT_ICON:"virtual_gift_icon",STARS_SENDER_COMMENT_BADGE:"stars_sender_comment_badge",STARS_TOP_SENDER_BADGE_ASYNC_JOB:"stars_top_sender_badge_async_job",STARS_TOP_SENDER_BADGE_OBSERVER:"stars_top_sender_badge_observer",STARS_NEW_SENDER_BADGE_OBSERVER:"stars_new_sender_badge_observer",STARS_GOALING_CARD:"stars_goaling_card",STARS_GOALING_AWARENESS_AYMT:"stars_goaling_awareness_aymt",STARS_GOALING_REENGAGEMENT_AYMT:"stars_goaling_reengagement_aymt",STARS_EVENT_UPDATE_AYMT:"stars_event_update_aymt",STARS_EVENT_END_NOTIFICATION:"stars_event_end_notificaton",AYMT:"aymt",FLEX_SCHEDULER_ASYNC_JOB:"flex_scheduler_async_job",WALLET_VALIDATION:"wallet_validation",STARS_WEEKLY_LEADERBOARD_EXISTENCE_NOTIFICATION:"stars_weekly_leaderboard_existence_notification",STARS_WEEKLY_LEADERBOARD_END_OF_WEEK_NOTIFICATION:"stars_weekly_leaderboard_end_of_week_notification",PRODASH_STARS_LEADERBOARD_BANNER:"prodash_stars_leaderboard_banner",PRODASH_STARS_LEADERBOARD_SEEDING_BANNER:"prodash_stars_leaderboard_seeding_banner",STARS_WEEKLY_CHALLENGES_SUBREQUIREMENT:"stars_weekly_challenges_subrequirement",STARS_CHALLENGES_SCREEN:"stars_challenges_screen",PRODASH_STARS_CHALLENGES_WITH_SEEDING_BANNER:"prodash_stars_challenges_with_seeding_banner",CREATOR_PERKS:"creator_perks",CREATOR_ACHIEVEMENT_SHEET_EARNING_ITEMS:"creator_achievement_sheet_earning_items",CREATOR_ACHIEVEMENT_SHEET_DESCRIPTION_CONTENT:"creator_achievement_sheet_description_content",GIFTING_EVENT_PSE_SHEET:"gifting_event_pse_sheet",GIFTING_EVENT_CREATOR_EVENT_BOTTOMSHEET:"gifting_event_creator_event_bottomsheet",GIFTING_EVENT_EDU_CARD:"gifting_event_edu_card",STARS_CREATOR_VOICE_CARD:"stars_creator_voice_card",STARS_CREATOR_VOICE_AWARENESS_NOTIFICATION:"stars_creator_voice_awareness_notification",STARS_CREATOR_AWARENESS_NOTIFICATION:"stars_creator_awareness_notification",STARS_PHOTO_TEXT_AWARENESS_NOTIFICATION:"stars_photo_text_awareness_notification",STARS_U2C_CELEBRATIONS_CREATOR_EDU_CARD:"stars_u2c_celebrations_creator_edu_card",STARS_U2C_CELEBRATIONS_SENDER_EDU_CARD:"stars_u2c_celebrations_sender_edu_card",STARS_U2C_CELEBRATIONS_BANNER_AD:"stars_u2c_celebrations_banner_ad",STARS_U2C_CELEBRATIONS_FEED_MEDIA_PILL_RENDER_CONTENT:"stars_u2c_celebrations_feed_media_pill_render_content",STARS_U2C_CELEBRATIONS_CREATOR_NOTIF:"stars_u2c_celebrations_creator_notif"});f["default"]=a}),66);
__d("WoodhengeEntrypointSurface",[],(function(a,b,c,d,e,f){a=Object.freeze({UNDEFINED:"undefined",NEWSFEED_CTA:"NEWSFEED_CTA",GROUPSMALL_CTA:"GROUPSMALL_CTA",GROUPS_TAB_CTA:"GROUPS_TAB_CTA",PAGE_GROUPS_CARD_CTA:"page_groups_card_cta",GROUP_INVITE_REMINDER_CTA:"group_invite_reminder_cta",PAGETIMELINE_CTA:"PAGETIMELINE_CTA",VIDEO_ATTACHMENT_CTA:"video_attachment_cta",OVERLAY_CTA:"overlay_cta",VOD_TICKER:"vod_ticker",VOD_TAIL_TICKER:"vod_tail_ticker",VOD_UFI:"vod_ufi",WATCH_UFI:"watch_ufi",WATCH_FEED:"watch_feed",WATCH_FEED_CHAINING:"watch_feed_chaining",NEWSFEED_BUMPER:"newsfeed_bumper",FRONT_ROW:"front_row",NEWSFEED_UFI:"newsfeed_ufi",NEWSFEED_BLING_STRING:"newsfeed_bling_string",COMMENT_COMPOSER:"comment_composer",GAMING_FEED_BUMPER:"gaming_tab_bumper",COMET_LIVE_PLAYER:"comet_live_player",POST_PAYWALL_CTA:"post_paywall_cta",REELS_UFI:"reels_ufi",REELS_VDD:"reels_vdd",REELS_UFI_LONG_PRESS:"reels_long_press",REELS_STARS_BANNER:"reels_stars_banner",REELS_POLL_SHEET:"reels_poll_sheet",REELS_ONE_TAP:"reels_one_tap",COMBO_ONE_TAP:"combo_one_tap",REELS_PILL:"reels_pill",FBPAY_HUB:"fbpay_hub",SNACKS_STORY_CARD:"snacks_story_card",BADGE_FOCUS_QP:"BADGE_FOCUS_QP",CONSIDERATION_PAGE_QP:"CONSIDERATION_PAGE_QP",NEWSFEED_QP:"NEWSFEED_QP",STAR_SENDERS_ENTRYPOINT_QP:"STAR_SENDERS_ENTRYPOINT_QP",HIGH_MPC_ENTRYPOINT_QP:"HIGH_MPC_ENTRYPOINT_QP",TOP_FANS_ENTRYPOINT_QP:"TOP_FANS_ENTRYPOINT_QP",PURCHASE_DROPOFF_USERS_QP:"PURCHASE_DROPOFF_USERS_QP",MULTIPLE_CREATORS_QP:"multiple_creators_qp",MULTIPLE_CREATORS_QP_US:"multiple_creators_qp_us",MULTIPLE_CREATORS_QP_MX:"multiple_creators_qp_mx",MULTIPLE_CREATORS_QP_GB:"multiple_creators_qp_gb",MULTIPLE_CREATORS_QP_PH:"multiple_creators_qp_ph",PAGE_UPSELLCARD:"PAGE_UPSELLCARD",POST_BANNER_CTA:"post_banner_cta",POST_BANNER_CTA_REDESIGN:"post_banner_cta_redesign",MEMBERSHIP_CARD_POST:"membership_card_post",PROFILE_FRAME_POST:"profile_frame_post",PAGE_STICKER_QP:"PAGE_STICKER_QP",PAGE_STORY:"page_story",STORY_CTA:"story_cta",PAGE_TOP_CTA_BUTTON:"page_top_cta_button",PAGE_HOME_UPSELL_CARD_TETRA:"page_home_upsell_card_tetra",PAGE_HOME_BENEFITS_CARD:"page_home_benefits_card",PAGE_HOME_SOCIAL_CONTEXT_CARD:"page_home_social_context_card",PAGE_ACTION_BAR:"page_action_bar",FEED_QP:"feed_qp",PROMISING_CREATORS_GROWTH_QP:"promising_creators_growth_qp",PROFILE_TILE:"profile_tile",SOCIALPLAYER_PLUGIN_CTA:"SOCIALPLAYER_PLUGIN_CTA",CHANNELPLAYER_PLUGIN_CTA:"CHANNELPLAYER_PLUGIN_CTA",WATCH_CUE_CTA:"watch_cue_cta",WARION_CUE_CTA:"warion_cue_cta",ORION_CUE_CTA:"orion_cue_cta",TAHOE_CUE_CTA:"tahoe_cue_cta",WATCH_HEADER_CTA:"watch_header_cta",LIVE_COMMENT_BADGE:"LIVE_COMMENT_BADGE",PAGE_POST_COMMENT_BADGE:"PAGE_POST_COMMENT_BADGE",SUPPORTER_POST_TITLE_BADGE:"SUPPORTER_POST_TITLE_BADGE",GROUP_MEMBER_BADGE:"GROUP_MEMBER_BADGE",CHAT_MODE_BOTTOM_SHEET:"CHAT_MODE_BOTTOM_SHEET",STICKER_TRAY_UPSELL:"PAGE_STICKER_TRAY_UPSELL",STICKER_TRAY:"sticker_tray",IA_PUBLISHER_BAR:"IA_PUBLISHER_BAR",IA_INLINE_CTA:"IA_INLINE_CTA",COMET_UFI:"COMET_UFI",LIVE_CUE:"LIVE_CUE",LIVE_FBB:"LIVE_FBB",FEED:"feed",TIMELINE:"timeline",PERMALINK:"PERMALINK",PHOTO_VIEWER:"PHOTO_VIEWER",PHOTO_STORY:"PHOTO_STORY",JEWEL_NOTIFICATION:"JEWEL_NOTIF",PUSH_NOTIFICATION:"PUSH_NOTIF",EXCLUSIVE_CONTENT_NOTIFICATION:"exclusive_content_notification",NEWSFEED_SUPPORTER_DIGEST_QP:"newsfeed_supporter_digest_qp",SUBSCRIPTION_CONFIRMATION_NOTIFICATION:"subscription_confirmation_notif",INITIAL_SETTINGS_SEE_EXCLUSIVE_CONTENT_CTA:"INITIAL_SETTINGS_SEE_EXCLUSIVE_CONTENT_CTA",ADS:"ADS",FANDOM_BADGES_MODULE:"fandom_badges_module",OTHER:"OTHER",PAGE_GROUP_RHC_CTA:"page_group_rhc_cta",SUPPORTER_HUB_GAB_CARD:"supporter_hub_gab_card",SUPPORTER_HUB_SETTINGS:"supporter_hub_settings",SUPPORTER_HUB_TAB_ON_PROFILE_PLUS_SURFACE:"supporter_hub_tab_on_profile_plus_surface",SUPPORTER_HUB_TAB_ON_LEGACY_PAGE_SURFACE:"supporter_hub_tab_on_legacy_page_surface",NEW_SUPPORTER_PERMISSIONS:"new_supporter_permissions",BADGE_INFORMATION_SHEET:"badge_information_sheet",STARS_GIFTER_PROGRESSION:"stars_gifter_progression",GAB_CTA:"gab_cta",NEWS_FEED_SUBSCRIBED_LABEL:"news_feed_subscribed_label",INVITE_FRIENDS_INVITATION_NOTIFICATION:"invite_friends_invitation_notification",INVITE_FRIENDS_SUPPORTED_NOTIFICATION:"invite_friends_supported_notification",VIDEO_STARS_COMMENT_ATTACHMENT:"video_stars_comment_attachment",VIRTUAL_GIFT_INFO_SHEET:"virtual_gift_info_sheet",STARS_WARION_CUE_CTA:"star_warion_cue_cta",STARS_NF_CUE_CTA:"star_news_feed_cue_cta",STARS_QUICK_SEND_COMMENT:"star_quick_send_comment",STAR_NEW_USER_QUICK_SEND_COMMENT:"star_new_user_quick_send_comment",STARS_GOAL_OVERLAY:"stars_goal_overlay",STARS_STREAMER_SEND_OVERLAY:"stars_streamer_send_overlay",STAR_STREAKS_REMINDER_OVERLAY:"stars_streak_reminder_overlay",STAR_SPECIAL_PACK_OVERLAY:"stars_special_pack_overlay",STAR_PROMO_PACK_OVERLAY:"stars_promo_pack_overlay",STAR_SEEDING_OVERLAY:"stars_seeding_overlay",STAR_BANNER_STREAMER_TRAY:"star_banner_streamer_tray",STAR_STREAKS_INFO_SHEET:"star_streaks_info_sheet",STREAMER_HUB:"streamer_hub",SUBSCRIPTIONS_BOOKMARK:"subscriptions_bookmark",RECENT_STAR_SENDERS_OVERLAY:"recent_star_senders_overlay",LUNAR_NEW_YEAR_OVERLAY_CTA:"lunar_new_year_overlay_cta",STARS_THANK_YOU_MSG_OVERLAY_CTA:"stars_thank_you_msg_overlay_cta",LPM_OVERLAY_CTA:"lpm_overlay_cta",STARS_THANK_YOU_MSG_OVERLAY:"stars_thank_you_msg_overlay",STAR_SEND_STARS_OVERLAY:"star_send_stars_overlay",STAR_SEND_STARS_OVERLAY_SELF:"star_send_stars_overlay_self",OVERLAY_CTA_EXAMPLE:"overlay_cta_example",LIVE_STARS_EXPLICIT_STREAMER_STREAK_REMINDER:"live_stars_explicit_streamer_streak_reminder",LIVE_STARS_EXPLICIT_SPECIAL_PACK_UPSELL:"live_stars_explicit_special_pack_upsell",LIVE_SEND_VIRTUAL_GIFT_UPSELL:"live_send_virtual_gift_upsell",LIVE_SEND_STARS_UPSELL:"live_send_stars_upsell",LIVE_STARS_CHURN_WELCOME_BACK_REMINDER:"live_stars_churn_welcome_back_reminder",LIVE_STARS_DESKTOP_PRICE_UPSELL:"live_stars_desktop_price_upsell",LIVE_STARS_SEND_BENEFIT_UPSELL:"live_stars_send_benefit_upsell",HUDDLE_PLAYER:"huddle_player",PAGES_COMPOSER:"pages_composer",PREMIUM_AWARDS_GIVER_SHEET:"premium_awards_giver_sheet",SUBS_GIFTING_RECIPIENT_OVERLAY:"subs_gifting_recipient_overlay",SUBS_GIFTING_PUBLIC_OVERLAY:"subs_gifting_public_overlay",SUBS_GIFTING_RECIPIENT_NOTIFICATION:"subs_gifting_recipient_notification",SUBS_GIFTING_RECIPIENT_NOTIFICATION_DEBUG_TOOL:"subs_gifting_recipient_notification_debug_tool",SUBS_GIFTING_FIRST_TIME_SENDERS_OVERLAY:"subs_gifting_first_time_senders_overlay",SUBS_GIFTING_ELEVATED_COMMENT:"subs_gifting_elevated_comment",FUBS_GIFTING_EXPIRED_NOTIFICATION_JEWEL:"fubs_gifting_expired_notification_jewel",FUBS_GIFTING_NEW_EXCLUSIVE_CONTENT_NOTIFICATION_JEWEL:"fubs_giftings_new_exclusive_content_notification_jewel",FUBS_GIFTING_CONVERSION_NOTIFICATION_JEWEL:"fubs_gifting_conversion_notification_jewel",FUBS_GIFTING_EXPIRED_NOTIFICATION_EMAIL:"fubs_gifting_expired_notification_email",FUBS_GIFTING_NEW_EXCLUSIVE_CONTENT_NOTIFICATION_EMAIL:"fubs_giftings_new_exclusive_content_notification_email",FUBS_GIFTING_CONVERSION_NOTIFICATION_EMAIL:"fubs_gifting_conversion_notification_email",FUBS_CAN_SUBSCRIBE_TO_CREATOR_NOTIFICATION:"fubs_can_subscribe_to_creator_notification",FUBS_FREE_TRIAL_INVITATION_SENT_NOTIFICATION:"fubs_free_trial_invitation_sent_notification",FUBS_FREE_TRIAL_END_NOTIFICATION:"fubs_free_trial_end_notification",FUBS_FREE_TRIAL_END_QP:"fubs_free_trial_end_qp",GAMES_APP_NOTIFICATION_LIST_ITEM:"games_app_notification_list_item",ORION_TABS_STARS_LEADERBOARD:"orion_tabs_stars_leaderboard",ORION_TABS_GIFTED_SUBS_LEADERBOARD:"orion_tabs_gifted_subs_leaderboard",ORION_OVERVIEW_SUPPORTER_BENEFITS_LEARN_MORE:"orion_overview_supporter_benefits_learn_more",ORION_OVERVIEW_SUPPORTER_BENEFITS_BECOME_SUPPORTER:"orion_overview_supporter_benefits_become_supporter",ORION_STARS_FEST:"orion_stars_fest",ORION_STARS_USER_SEEDING_REMINDER_CUE:"orion_stars_user_seeding_reminder_cue",ORION_STARS_TIERED_BADGE_CUE:"orion_stars_tiered_badge_cue",ORION_STARS_PARTY:"orion_stars_party",ORION_STARS_PARTY_UPSELL:"orion_stars_party_upsell",LOGGED_OUT_CONSIDERATION_FLOW_COMET:"logged_out_consideration_flow_comet",LOGGED_OUT_LANDING_PAGE_MTOUCH:"logged_out_landing_page_mtouch",LIVE_PRODUCER_PINNED_COMMENT:"live_producer_pinned_comment",RECOGNITION_ENTRYPOINT_BANNER:"recognition_entrypoint_banner",SUBS_ELEVATED_COMMENTS_COMPOSER:"subs_elevated_comments_composer",SUBS_ELEVATED_COMMENT_ON_LIVE:"subs_elevated_comment_on_live",BLOKS_PLAYGROUND:"bloks_playground",LIVE_SUBS_STICKER:"live_subs_sticker",LIVE_STARS_STICKER:"live_stars_sticker",LIVE_VIDEO_PLUGIN:"live_video_plugin",PSE_SHEET:"pse_sheet",COMET_PERMALINK:"comet_permalink",STORY_SUBSCRIBE_STICKER:"story_subscribe_sticker",F2S_REELS:"f2s_reels",F2S_WATCH:"f2s_watch",FUBS_ON_STARS_BOTTOMSHEET_REELS:"fubs_on_stars_bottomsheet_reels",FUBS_ON_STARS_BOTTOMSHEET_VOD:"fubs_on_stars_bottomsheet_vod",FUBS_ON_STARS_BOTTOMSHEET_PHOTO:"fubs_on_stars_bottomsheet_photo",FUBS_ON_STARS_BOTTOMSHEET_TEXT:"fubs_on_stars_bottomsheet_text",FUBS_ON_STARS_BOTTOMSHEET_LIVE:"fubs_on_stars_bottomsheet_live",FUBS_ON_STARS_BOTTOMSHEET_WAS_LIVE:"fubs_on_stars_bottomsheet_was_live",FUBS_ON_STARS_BOTTOMSHEET_GROUP_POST:"fubs_on_stars_bottomsheet_group_post",FUBS_ON_STARS_BOTTOMSHEET_OTHER_CONTENT:"fubs_on_stars_bottomsheet_other_content",FUBS_ON_STARS_BOTTOMSHEET_STORIES_CONTENT:"fubs_on_stars_bottomsheet_stories_content",FUBS_ON_STARS_BOTTOMSHEET_NULL_CONTENT:"fubs_on_stars_bottomsheet_null_content"});f["default"]=a}),66);
__d("cometUFIComposerStarsPlugin_plugin.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"cometUFIComposerStarsPlugin_plugin",selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null}],type:"CommentComposerStarsPlugin",abstractKey:null};e.exports=a}),null);
__d("cometUFIComposerStarsPlugin_pluginData.graphql",[],(function(a,b,c,d,e,f){"use strict";a={kind:"InlineDataFragment",name:"cometUFIComposerStarsPlugin_pluginData"};e.exports=a}),null);
__d("graphQLEnumAdapter",["flipObject","keyMirror"],(function(a,b,c,d,e,f,g){function a(a){return{graphQL:c("keyMirror")(a),nameToValue:a,valueToName:c("flipObject")(a)}}g["default"]=a}),98);
__d("useCometUFIStarsAttachmentMapper",["UserPayStarsEventsEntrypoint","WoodhengeEntrypointSurface","graphQLEnumAdapter","react"],(function(a,b,c,d,e,f,g){"use strict";var h;b=h||d("react");var i=b.useEffect,j=b.c;function a(a){var b=j(3),d,e;b[0]!==a?(d=function(){return a(function(a){if(a.__type==="Stars"){var b=a.entrypoint,d=a.productSource;return{stars:{amount:a.amount,entrypoint:b!=null?c("graphQLEnumAdapter")(c("UserPayStarsEventsEntrypoint")).valueToName[b]:null,gift_id:(b=a.gift)==null?void 0:b.id,gift_type_id:(b=a.giftType)==null?void 0:b.id,product_source:d!=null?c("graphQLEnumAdapter")(c("WoodhengeEntrypointSurface")).valueToName[d]:null}}}return null})},e=[a],b[0]=a,b[1]=d,b[2]=e):(d=b[1],e=b[2]);i(d,e)}g["default"]=a}),98);
__d("cometUFIComposerStarsPlugin",["CometRelay","CometUFIComposerStarsPreviewArea.react","CometUFIInsertStarsComposerActionForLexical.react","cometUFIComposerStarsPlugin_plugin.graphql","cometUFIComposerStarsPlugin_pluginData.graphql","react","useCometUFIStarsAttachmentMapper"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j,k=(j||(j=d("react"))).c,l=j;h!==void 0?h:h=b("cometUFIComposerStarsPlugin_plugin.graphql");function m(a){var b=k(4);a=a.pluginProps;var d=a.addAttachmentMapper,e=a.composerState;a=a.setComposerState;c("useCometUFIStarsAttachmentMapper")(d);b[0]===Symbol["for"]("react.memo_cache_sentinel")?(d="x1iyjqo2",b[0]=d):d=b[0];b[1]!==e||b[2]!==a?(d=l.jsx("div",{className:d,children:l.jsx(c("CometUFIComposerStarsPreviewArea.react"),{composerState:e,setComposerState:a})}),b[1]=e,b[2]=a,b[3]=d):d=b[3];return d}function n(a){a=a.pluginProps;var b=a.composerState;a=a.depth;if(a>0)return null;return!b||!b.attachment?c("CometUFIInsertStarsComposerActionForLexical.react"):null}function a(a){a=a.fragmentKey;a=d("CometRelay").readInlineData(i!==void 0?i:i=b("cometUFIComposerStarsPlugin_pluginData.graphql"),a);return a.feedback_id==null?null:{above:null,action:n,below:m,id:"stars",inside:null,props:{feedbackID:a.feedback_id,starsTargetID:(a=a.stars_target_id)!=null?a:""}}}g["default"]=a}),98);
__d("cometUFIComposerStarsPlugin_plugin$normalization.graphql",[],(function(a,b,c,d,e,f){"use strict";a={kind:"SplitOperation",metadata:{},name:"cometUFIComposerStarsPlugin_plugin$normalization",selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null}]};e.exports=a}),null);