import{S as e,G as a}from"./p-643c9bdf.js";const t=e=>e.gameserverConfig?Object.assign(Object.assign({},e.gameserverConfig),{gameserver:e}):void 0;class n{static get(t){return{gameservers:async(n,r,o,s,c)=>{const m=await t.client.query(((t,n,r,o,s)=>e.query({gameservers:[{options:{pageSize:n,page:t,search:r,orderDesc:o,orderBy:s||a.currentName}},{pageCount:!0,totalCount:!0,content:{id:!0,authKey:!0,currentName:!0,description:!0,lastContact:!0,gameserverConfig:{currentMatchConfig:{id:!0,configName:!0,gameMode:{name:!0},configHash:!0,matchEndLength:!0,warmUpLength:!0,friendlyFireScale:!0,mapLength:!0,roundLength:!0,preRoundLength:!0,roundEndLength:!0,roundLimit:!0,allowGhostcam:!0,playerVoteThreshold:!0,autoBalanceTeams:!0,playerVoteTeamOnly:!0,maxTeamDamage:!0,enablePlayerVote:!0,autoSwapTeams:!0,midGameBreakLength:!0,nadeRestriction:!0,globalVoicechat:!0,muteDeadToTeam:!0,ranked:!0,private:!0},currentName:!0,voteLength:!0,gamePassword:!0,reservedSlots:!0,balanceClans:!0,allowSkipMapVote:!0,tempKickBanTime:!0,autoRecordReplay:!0,playerGameControl:!0,enableMapVote:!0,serverAdmins:!0,serverDescription:!0,website:!0,contact:!0,mapNoReplay:!0,enableVoicechat:!0}}}]}))(n,r,o,s,c));return[m.gameservers.content.map((e=>(e=>Object.assign(Object.assign({},e),{lastContact:new Date(e.lastContact)}))(e))),m.gameservers.pageCount,m.gameservers.totalCount]},createUpdateGameserverConfig:async(e,a)=>{t.setTransactionId(a),await t.client.mutation({createUpdateGameserverConfig:[{gameserverConfig:e},{}]})},deleteGameserverConfig:async e=>{await t.client.mutation({deleteGameserverConfig:[{gameserverId:e},!0]})},createUpdateGameserver:async(e,a)=>{t.setTransactionId(a),await t.client.mutation({createUpdateGameserver:[{gameserver:e},{}]})},deleteGameserver:async e=>{await t.client.mutation({deleteGameserver:[{gameserverId:e},!0]})},gamemodes:async()=>{const a=(await t.client.query(e.query({gameModes:{pageCount:!0,totalCount:!0,content:{name:!0}}}))).gameModes;return[a.content,a.pageCount,a.totalCount]},matchConfigs:async(a,n,r,o)=>{const s=await t.client.query(((a,t,n,r)=>e.query({matchConfigs:[{options:{page:a,pageSize:t,configName:n,orderDesc:r}},{pageCount:!0,totalCount:!0,content:{id:!0,configName:!0,gameMode:{name:!0},configHash:!0,matchEndLength:!0,warmUpLength:!0,friendlyFireScale:!0,mapLength:!0,roundLength:!0,preRoundLength:!0,roundEndLength:!0,roundLimit:!0,allowGhostcam:!0,playerVoteThreshold:!0,autoBalanceTeams:!0,playerVoteTeamOnly:!0,maxTeamDamage:!0,enablePlayerVote:!0,autoSwapTeams:!0,midGameBreakLength:!0,nadeRestriction:!0,globalVoicechat:!0,muteDeadToTeam:!0,ranked:!0,private:!0}}]}))(a,n,r,o));return[s.matchConfigs.content,s.matchConfigs.pageCount,s.matchConfigs.totalCount]},deleteMatchConfig:async e=>{await t.client.mutation({deleteMatchConfig:[{options:{id:e}},!0]})},createUpdateMatchConfig:async(e,a)=>{t.setTransactionId(a),await t.client.mutation({createUpdateMatchConfig:[{matchConfig:e},{}]})}}}}export{n as G,t as e}