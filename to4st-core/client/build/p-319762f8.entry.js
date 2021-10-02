import{r as e,h as t,H as a}from"./p-89d64653.js";import"./p-18a1d9b0.js";import{S as s,a as l}from"./p-643c9bdf.js";import{e as n}from"./p-503dd610.js";import"./p-01c079a6.js";import"./p-ee768a2e.js";const i=class{constructor(a){e(this,a),this.players=[],this.currentPage=1,this.currentPageCount=1,this.currentSearch="",this.orderDesc=!0,this.currentOrderBy="",this.hasValidNames=!1,this.apiClient={},this.columns=[{name:"SteamId64",hiddenMobile:()=>this.hasValidNames,tableContent:e=>t("p",null,t("a",{target:"_blank",href:`http://steamcommunity.com/profiles/${e.steamId64}`},e.steamId64)),input:(e,a,s)=>{var l;return t("input",{type:"text",placeholder:"SteamId64",disabled:!s,value:null!==(l=null==e?void 0:e.steamId64)&&void 0!==l?l:"",class:"input",onChange:e=>a.emit({key:"steamId64",value:e.target.value.trim()})})}},{name:"Name",tableContent:e=>{var a;return t("p",null,t("a",{target:"_blank",href:`http://steamcommunity.com/profiles/${e.steamId64}`},null===(a=e.steamUser)||void 0===a?void 0:a.name))},shouldBeVisible:()=>this.hasValidNames},{name:"Visible Role",tableContent:e=>t("p",null,e.visibleRole),input:(e,a)=>{var s;return t("input",{type:"text",placeholder:"Visible Role",value:null!==(s=null==e?void 0:e.visibleRole)&&void 0!==s?s:"",class:"input",onChange:e=>a.emit({key:"visibleRole",value:e.target.value.trim()})})}},{name:"Root Admin",tableContent:e=>t("p",null,this.getSymbol(e.rootAdmin)),input:(e,a)=>t("to4st-switch",{value:null==e?void 0:e.rootAdmin,onToggle:e=>a.emit({key:"rootAdmin",value:e.detail})})},{name:"Kick",tableContent:e=>t("p",null,this.getSymbol(e.kick)),input:(e,a)=>t("to4st-switch",{value:null==e?void 0:e.kick,onToggle:e=>a.emit({key:"kick",value:e.detail})})},{name:"Ban",tableContent:e=>t("p",null,this.getSymbol(e.ban)),input:(e,a)=>t("to4st-switch",{value:null==e?void 0:e.ban,onToggle:e=>a.emit({key:"ban",value:e.detail})})},{name:"Temp KickBan",tableContent:e=>t("p",null,this.getSymbol(e.tempKickBan)),input:(e,a)=>t("to4st-switch",{value:null==e?void 0:e.tempKickBan,onToggle:e=>a.emit({key:"tempKickBan",value:e.detail})})},{name:"Mute",tableContent:e=>t("p",null,this.getSymbol(e.mute)),input:(e,a)=>t("to4st-switch",{value:null==e?void 0:e.mute,onToggle:e=>a.emit({key:"mute",value:e.detail})})},{name:"Make Teams",tableContent:e=>t("p",null,this.getSymbol(e.makeTeams)),input:(e,a)=>t("to4st-switch",{value:null==e?void 0:e.makeTeams,onToggle:e=>a.emit({key:"makeTeams",value:e.detail})})},{name:"Reserved Slots",tableContent:e=>t("p",null,this.getSymbol(e.reservedSlots)),input:(e,a)=>t("to4st-switch",{value:null==e?void 0:e.reservedSlots,onToggle:e=>a.emit({key:"reservedSlots",value:e.detail})})},{name:"Broadcast Message",tableContent:e=>t("p",null,this.getSymbol(e.broadcastMessage)),input:(e,a)=>t("to4st-switch",{value:null==e?void 0:e.broadcastMessage,onToggle:e=>a.emit({key:"broadcastMessage",value:e.detail})})},{name:"Game Control",tableContent:e=>t("p",null,this.getSymbol(e.gameControl)),input:(e,a)=>t("to4st-switch",{value:null==e?void 0:e.gameControl,onToggle:e=>a.emit({key:"gameControl",value:e.detail})})}]}getSymbol(e){return t("i",e?{class:"fas fa-check"}:{class:"fas fa-times"})}async componentWillLoad(){await this.updateContent()}async updateContent(){try{const l=(await this.apiClient.client.query((e=this.currentPage,t=this.orderDesc,a=this.currentSearch,s.query({registeredPlayers:[{options:{pageSize:25,page:e,orderDesc:t,search:a}},{pageCount:!0,content:{steamId64:!0,steamUser:{name:!0,avatarMediumUrl:!0},visibleRole:!0,rootAdmin:!0,kick:!0,ban:!0,tempKickBan:!0,mute:!0,makeTeams:!0,reservedSlots:!0,broadcastMessage:!0,gameControl:!0}}]})))).registeredPlayers;this.players=l.content,this.currentPageCount=l.pageCount,this.hasValidNames=this.players.some((e=>{var t;return null===(t=e.steamUser)||void 0===t?void 0:t.name}))}catch(e){console.error(e)}var e,t,a}async searchPlayer(e){this.currentSearch=e,await this.updateContent()}async savePlayer(e,t,a){try{await this.apiClient.client.mutation({createUpdateRegisteredPlayer:[{registeredPlayer:{steamId64:e.steamId64,rootAdmin:e.rootAdmin,visibleRole:e.visibleRole,kick:e.kick,ban:e.ban,tempKickBan:e.tempKickBan,mute:e.mute,makeTeams:e.makeTeams,reservedSlots:e.reservedSlots,broadcastMessage:e.broadcastMessage,gameControl:e.gameControl}},{}]}),a.emit(),await this.updateContent()}catch(e){a.emit(n(e)),console.error(e)}}async goToPage(e){this.currentPage=e,await this.updateContent()}async removePlayer(e){try{await this.apiClient.client.mutation({deleteRegisteredPlayer:[{steamId64:e.steamId64},!0]}),await this.updateContent()}catch(e){console.error(e)}}render(){return t(a,null,t("to4st-list",{name:"Registered Players",columns:this.columns,content:this.players,pagesCount:this.currentPageCount,currentPage:this.currentPage,onPagination:e=>this.goToPage(e.detail),onSaveItem:e=>this.savePlayer(e.detail.item,e.detail.isEdit,e.detail.afterSaveExecuted),onSearchItem:e=>this.searchPlayer(e.detail),onRemoveItem:e=>this.removePlayer(e.detail)}))}};(function(e,t,a,s){var l,n=arguments.length,i=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,a):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,a,s);else for(var o=e.length-1;o>=0;o--)(l=e[o])&&(i=(n<3?l(i):n>3?l(t,a,i):l(t,a))||i);n>3&&i&&Object.defineProperty(t,a,i)})([l.Context("api")],i.prototype,"apiClient",void 0),i.style="";export{i as to4st_registered_players_list}