;/*FB_PKG_DELIM*/

__d("LSClearCMSearchNullstateMetadata",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1],c=[];return b.sequence([function(a){return b.forEach(b.db.table(289).fetch(),function(a){return a["delete"]()})},function(a){return b.resolve(c)}])}a.__sproc_name__="LSCommunityMessagingSearchClearCMSearchNullstateMetadataStoredProcedure";e.exports=a}),null);
__d("LSUpdateOrInsertOhaiGatewayKeyConfigs",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1],c=[];return b.sequence([function(c){return b.db.table(313).put({keyId:a[0],publicKey:a[1],kemId:a[2],kdfId:a[3],aeadId:a[4],expirationDate:a[5],lastUpdatedTime:a[6]})},function(a){return b.resolve(c)}])}a.__sproc_name__="LSOhaiUpdateOrInsertOhaiGatewayKeyConfigsStoredProcedure";e.exports=a}),null);