import{r as t,c as i,h as n,H as s}from"./p-89d64653.js";import{_ as e,c as r,a}from"./p-01c079a6.js";var o=function(t,i){return t===i||t!=t&&i!=i},c=e.Symbol,u=Object.prototype,h=u.hasOwnProperty,l=u.toString,f=c?c.toStringTag:void 0,d=Object.prototype.toString,v=c?c.toStringTag:void 0,b=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":v&&v in Object(t)?function(t){var i=h.call(t,f),n=t[f];try{t[f]=void 0;var s=!0}catch(t){}var e=l.call(t);return s&&(i?t[f]=n:delete t[f]),e}(t):function(t){return d.call(t)}(t)},p=function(t){var i=typeof t;return null!=t&&("object"==i||"function"==i)},j=function(t){if(!p(t))return!1;var i=b(t);return"[object Function]"==i||"[object GeneratorFunction]"==i||"[object AsyncFunction]"==i||"[object Proxy]"==i},m=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991},g=function(t){return null!=t&&m(t.length)&&!j(t)},y=/^(?:0|[1-9]\d*)$/,_=function(t,i){var n=typeof t;return!!(i=null==i?9007199254740991:i)&&("number"==n||"symbol"!=n&&y.test(t))&&t>-1&&t%1==0&&t<i},w=function(t){return null!=t&&"object"==typeof t},O=function(t,i){for(var n=t.length;n--;)if(o(t[n][0],i))return n;return-1},k=Array.prototype.splice;function S(t){var i=-1,n=null==t?0:t.length;for(this.clear();++i<n;){var s=t[i];this.set(s[0],s[1])}}S.prototype.clear=function(){this.__data__=[],this.size=0},S.prototype.delete=function(t){var i=this.__data__,n=O(i,t);return!(n<0||(n==i.length-1?i.pop():k.call(i,n,1),--this.size,0))},S.prototype.get=function(t){var i=this.__data__,n=O(i,t);return n<0?void 0:i[n][1]},S.prototype.has=function(t){return O(this.__data__,t)>-1},S.prototype.set=function(t,i){var n=this.__data__,s=O(n,t);return s<0?(++this.size,n.push([t,i])):n[s][1]=i,this};var C,A=S,I=e["__core-js_shared__"],M=(C=/[^.]+$/.exec(I&&I.keys&&I.keys.IE_PROTO||""))?"Symbol(src)_1."+C:"",x=Function.prototype.toString,D=function(t){if(null!=t){try{return x.call(t)}catch(t){}try{return t+""}catch(t){}}return""},E=/^\[object .+?Constructor\]$/,V=RegExp("^"+Function.prototype.toString.call(Object.prototype.hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),$=function(t){return!(!p(t)||(i=t,M&&M in i))&&(j(t)?V:E).test(D(t));var i},F=function(t,i){var n=function(t,i){return null==t?void 0:t[i]}(t,i);return $(n)?n:void 0},P=F(e,"Map"),W=F(Object,"create"),B=Object.prototype.hasOwnProperty,H=Object.prototype.hasOwnProperty;function U(t){var i=-1,n=null==t?0:t.length;for(this.clear();++i<n;){var s=t[i];this.set(s[0],s[1])}}U.prototype.clear=function(){this.__data__=W?W(null):{},this.size=0},U.prototype.delete=function(t){var i=this.has(t)&&delete this.__data__[t];return this.size-=i?1:0,i},U.prototype.get=function(t){var i=this.__data__;if(W){var n=i[t];return"__lodash_hash_undefined__"===n?void 0:n}return B.call(i,t)?i[t]:void 0},U.prototype.has=function(t){var i=this.__data__;return W?void 0!==i[t]:H.call(i,t)},U.prototype.set=function(t,i){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=W&&void 0===i?"__lodash_hash_undefined__":i,this};var L=U,z=function(t,i){var n,s,e=t.__data__;return("string"==(s=typeof(n=i))||"number"==s||"symbol"==s||"boolean"==s?"__proto__"!==n:null===n)?e["string"==typeof i?"string":"hash"]:e.map};function K(t){var i=-1,n=null==t?0:t.length;for(this.clear();++i<n;){var s=t[i];this.set(s[0],s[1])}}K.prototype.clear=function(){this.size=0,this.__data__={hash:new L,map:new(P||A),string:new L}},K.prototype.delete=function(t){var i=z(this,t).delete(t);return this.size-=i?1:0,i},K.prototype.get=function(t){return z(this,t).get(t)},K.prototype.has=function(t){return z(this,t).has(t)},K.prototype.set=function(t,i){var n=z(this,t),s=n.size;return n.set(t,i),this.size+=n.size==s?0:1,this};var N=K;function R(t){var i=this.__data__=new A(t);this.size=i.size}R.prototype.clear=function(){this.__data__=new A,this.size=0},R.prototype.delete=function(t){var i=this.__data__,n=i.delete(t);return this.size=i.size,n},R.prototype.get=function(t){return this.__data__.get(t)},R.prototype.has=function(t){return this.__data__.has(t)},R.prototype.set=function(t,i){var n=this.__data__;if(n instanceof A){var s=n.__data__;if(!P||s.length<199)return s.push([t,i]),this.size=++n.size,this;n=this.__data__=new N(s)}return n.set(t,i),this.size=n.size,this};var T=R;function G(t){var i=-1,n=null==t?0:t.length;for(this.__data__=new N;++i<n;)this.add(t[i])}G.prototype.add=G.prototype.push=function(t){return this.__data__.set(t,"__lodash_hash_undefined__"),this},G.prototype.has=function(t){return this.__data__.has(t)};var q=G,J=function(t,i){for(var n=-1,s=null==t?0:t.length;++n<s;)if(i(t[n],n,t))return!0;return!1},Q=function(t,i,n,s,e,r){var a=1&n,o=t.length,c=i.length;if(o!=c&&!(a&&c>o))return!1;var u=r.get(t),h=r.get(i);if(u&&h)return u==i&&h==t;var l=-1,f=!0,d=2&n?new q:void 0;for(r.set(t,i),r.set(i,t);++l<o;){var v=t[l],b=i[l];if(s)var p=a?s(b,v,l,i,t,r):s(v,b,l,t,i,r);if(void 0!==p){if(p)continue;f=!1;break}if(d){if(!J(i,(function(t,i){if(!d.has(i)&&(v===t||e(v,t,n,s,r)))return d.push(i)}))){f=!1;break}}else if(v!==b&&!e(v,b,n,s,r)){f=!1;break}}return r.delete(t),r.delete(i),f},X=e.Uint8Array,Y=function(t){var i=-1,n=Array(t.size);return t.forEach((function(t,s){n[++i]=[s,t]})),n},Z=function(t){var i=-1,n=Array(t.size);return t.forEach((function(t){n[++i]=t})),n},tt=c?c.prototype:void 0,it=tt?tt.valueOf:void 0,nt=Array.isArray,st=Object.prototype.propertyIsEnumerable,et=Object.getOwnPropertySymbols,rt=et?function(t){return null==t?[]:(t=Object(t),function(t,i){for(var n=-1,s=null==t?0:t.length,e=0,r=[];++n<s;){var a=t[n];i(a,n,t)&&(r[e++]=a)}return r}(et(t),(function(i){return st.call(t,i)})))}:function(){return[]},at=function(t){return w(t)&&"[object Arguments]"==b(t)},ot=Object.prototype,ct=ot.hasOwnProperty,ut=ot.propertyIsEnumerable,ht=at(function(){return arguments}())?at:function(t){return w(t)&&ct.call(t,"callee")&&!ut.call(t,"callee")},lt=function(){return!1},ft=r((function(t,i){var n=i&&!i.nodeType&&i,s=n&&t&&!t.nodeType&&t,r=s&&s.exports===n?e.Buffer:void 0;t.exports=(r?r.isBuffer:void 0)||lt})),dt={};dt["[object Float32Array]"]=dt["[object Float64Array]"]=dt["[object Int8Array]"]=dt["[object Int16Array]"]=dt["[object Int32Array]"]=dt["[object Uint8Array]"]=dt["[object Uint8ClampedArray]"]=dt["[object Uint16Array]"]=dt["[object Uint32Array]"]=!0,dt["[object Arguments]"]=dt["[object Array]"]=dt["[object ArrayBuffer]"]=dt["[object Boolean]"]=dt["[object DataView]"]=dt["[object Date]"]=dt["[object Error]"]=dt["[object Function]"]=dt["[object Map]"]=dt["[object Number]"]=dt["[object Object]"]=dt["[object RegExp]"]=dt["[object Set]"]=dt["[object String]"]=dt["[object WeakMap]"]=!1;var vt,bt=r((function(t,i){var n=i&&!i.nodeType&&i,s=n&&t&&!t.nodeType&&t,e=s&&s.exports===n&&a.process,r=function(){try{return s&&s.require&&s.require("util").types||e&&e.binding&&e.binding("util")}catch(t){}}();t.exports=r})),pt=bt&&bt.isTypedArray,jt=pt?(vt=pt,function(t){return vt(t)}):function(t){return w(t)&&m(t.length)&&!!dt[b(t)]},mt=Object.prototype.hasOwnProperty,gt=function(t,i){var n=nt(t),s=!n&&ht(t),e=!n&&!s&&ft(t),r=!n&&!s&&!e&&jt(t),a=n||s||e||r,o=a?function(t,i){for(var n=-1,s=Array(t);++n<t;)s[n]=i(n);return s}(t.length,String):[],c=o.length;for(var u in t)!i&&!mt.call(t,u)||a&&("length"==u||e&&("offset"==u||"parent"==u)||r&&("buffer"==u||"byteLength"==u||"byteOffset"==u)||_(u,c))||o.push(u);return o},yt=Object.prototype,_t=function(t,i){return function(n){return t(i(n))}}(Object.keys,Object),wt=Object.prototype.hasOwnProperty,Ot=function(t){if((i=t)!==("function"==typeof(n=i&&i.constructor)&&n.prototype||yt))return _t(t);var i,n,s=[];for(var e in Object(t))wt.call(t,e)&&"constructor"!=e&&s.push(e);return s},kt=function(t){return g(t)?gt(t):Ot(t)},St=function(t){return function(t,i,n){var s=i(t);return nt(t)?s:function(t,i){for(var n=-1,s=i.length,e=t.length;++n<s;)t[e+n]=i[n];return t}(s,n(t))}(t,kt,rt)},Ct=Object.prototype.hasOwnProperty,At=F(e,"DataView"),It=F(e,"Promise"),Mt=F(e,"Set"),xt=F(e,"WeakMap"),Dt=D(At),Et=D(P),Vt=D(It),$t=D(Mt),Ft=D(xt),Pt=b;(At&&"[object DataView]"!=Pt(new At(new ArrayBuffer(1)))||P&&"[object Map]"!=Pt(new P)||It&&"[object Promise]"!=Pt(It.resolve())||Mt&&"[object Set]"!=Pt(new Mt)||xt&&"[object WeakMap]"!=Pt(new xt))&&(Pt=function(t){var i=b(t),n="[object Object]"==i?t.constructor:void 0,s=n?D(n):"";if(s)switch(s){case Dt:return"[object DataView]";case Et:return"[object Map]";case Vt:return"[object Promise]";case $t:return"[object Set]";case Ft:return"[object WeakMap]"}return i});var Wt=Pt,Bt="[object Object]",Ht=Object.prototype.hasOwnProperty,Ut=function(t,i,n,s,e,r){var a=nt(t),c=nt(i),u=a?"[object Array]":Wt(t),h=c?"[object Array]":Wt(i),l=(u="[object Arguments]"==u?Bt:u)==Bt,f=(h="[object Arguments]"==h?Bt:h)==Bt,d=u==h;if(d&&ft(t)){if(!ft(i))return!1;a=!0,l=!1}if(d&&!l)return r||(r=new T),a||jt(t)?Q(t,i,n,s,e,r):function(t,i,n,s,e,r,a){switch(n){case"[object DataView]":if(t.byteLength!=i.byteLength||t.byteOffset!=i.byteOffset)return!1;t=t.buffer,i=i.buffer;case"[object ArrayBuffer]":return!(t.byteLength!=i.byteLength||!r(new X(t),new X(i)));case"[object Boolean]":case"[object Date]":case"[object Number]":return o(+t,+i);case"[object Error]":return t.name==i.name&&t.message==i.message;case"[object RegExp]":case"[object String]":return t==i+"";case"[object Map]":var c=Y;case"[object Set]":if(c||(c=Z),t.size!=i.size&&!(1&s))return!1;var u=a.get(t);if(u)return u==i;s|=2,a.set(t,i);var h=Q(c(t),c(i),s,e,r,a);return a.delete(t),h;case"[object Symbol]":if(it)return it.call(t)==it.call(i)}return!1}(t,i,u,n,s,e,r);if(!(1&n)){var v=l&&Ht.call(t,"__wrapped__"),b=f&&Ht.call(i,"__wrapped__");if(v||b){var p=v?t.value():t,j=b?i.value():i;return r||(r=new T),e(p,j,n,s,r)}}return!!d&&(r||(r=new T),function(t,i,n,s,e,r){var a=1&n,o=St(t),c=o.length;if(c!=St(i).length&&!a)return!1;for(var u=c;u--;){var h=o[u];if(!(a?h in i:Ct.call(i,h)))return!1}var l=r.get(t),f=r.get(i);if(l&&f)return l==i&&f==t;var d=!0;r.set(t,i),r.set(i,t);for(var v=a;++u<c;){var b=t[h=o[u]],p=i[h];if(s)var j=a?s(p,b,h,i,t,r):s(b,p,h,t,i,r);if(!(void 0===j?b===p||e(b,p,n,s,r):j)){d=!1;break}v||(v="constructor"==h)}if(d&&!v){var m=t.constructor,g=i.constructor;m==g||!("constructor"in t)||!("constructor"in i)||"function"==typeof m&&m instanceof m&&"function"==typeof g&&g instanceof g||(d=!1)}return r.delete(t),r.delete(i),d}(t,i,n,s,e,r))},Lt=function t(i,n,s,e,r){return i===n||(null==i||null==n||!w(i)&&!w(n)?i!=i&&n!=n:Ut(i,n,s,e,t,r))},zt=function(t,i){return Lt(t,i)};let Kt=(t=21)=>{let i="",n=crypto.getRandomValues(new Uint8Array(t));for(;t--;){let s=63&n[t];i+=s<36?s.toString(36):s<62?(s-26).toString(36).toUpperCase():s<63?"_":"-"}return i};const Nt=class{constructor(n){t(this,n),this.saveItem=i(this,"saveItem",7),this.removeItem=i(this,"removeItem",7),this.itemSelected=i(this,"itemSelected",7),this.searchItem=i(this,"searchItem",7),this.pagination=i(this,"pagination",7),this.afterSave=i(this,"afterSave",7),this.changedOrder=i(this,"changedOrder",7),this.content=[],this.columns=[],this.filters=[],this.currentPage=1,this.pagesCount=1,this.hasSearch=!0,this.hasPagination=!0,this.allowSelect=!1,this.name="",this.loadingInputBlock=!1,this.striped=!1,this.hasUpdate=!0,this.hasCreate=!0,this.currentInputState="none",this.currentError="",this.orderDesc=!1,this.currentOrderBy="",this.filterModalVisible=!1,this.pendingRequest=!1,this.isSearching=!1,this.currentFormTransactionId=""}async componentWillUpdate(){this.resetSelectedItem()}async componentWillLoad(){this.resetTransactionId(),this.resetSelectedItem()}resetSelectedItem(){var t;this.allowSelect&&this.content.length>0&&(this.currentSelectedItem=null!==(t=this.content.find((t=>zt(t,this.currentSelectedItem))))&&void 0!==t?t:this.content[0],this.itemSelected.emit(this.currentSelectedItem))}resetTransactionId(){this.currentFormTransactionId=Kt()}changeValueCurrentItem(t,i){const n=this.currentItem;n&&(n[t]=i,this.currentItem=n)}editItem(t){this.resetTransactionId(),this.currentItem=Object.assign({},t),this.currentInputState="edit"}createItem(){this.resetTransactionId(),this.currentItem={},this.currentInputState="create"}afterSuccessHandler(t){var i;this.resetTransactionId(),this.pendingRequest=!1,(null===(i=t.detail)||void 0===i?void 0:i.trim().length)>0?this.currentError=t.detail:this.currentInputState="none"}deleteItem(){this.currentInputState="none"}searchHandler(t){this.isSearching=t.detail.trim().length>0}paginationHandler(t){this.currentPage=t.detail}render(){return n(s,null,n("to4st-filter-modal",{isVisible:this.filterModalVisible,onClose:()=>this.filterModalVisible=!1,filters:this.filters}),n("to4st-edit-modal",{freeze:this.pendingRequest,currentError:this.currentError,currentItem:this.currentItem,currentInputState:this.currentInputState,columns:this.columns,onCloseErrorMessage:()=>this.currentError="",onClose:()=>{this.currentInputState="none",this.currentError=""},onChangeKeyValue:t=>this.changeValueCurrentItem(t.detail.key,t.detail.value),onDelete:()=>this.removeItem.emit(this.currentItem),onSave:()=>{this.pendingRequest=!0,this.currentSelectedItem=this.currentItem,this.saveItem.emit({transactionId:this.currentFormTransactionId,item:this.currentItem,isEdit:"edit"==this.currentInputState,afterSaveExecuted:this.afterSave})}}),n("div",{class:{"modal loadingModal":!0,"is-active":this.loadingInputBlock}},n("div",{class:"modal-background"}),n("div",{class:"modal-content"},n("figure",{class:"image container is-32x32"},n("img",{src:"https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/0.16.1/images/loader-large.gif",alt:"Loading ..."})))),n("article",{class:"message has-margin-top-30"},n("div",{class:"message-header"},n("p",null,this.name)),n("div",{class:"message-body"},n("div",{class:"level"},n("div",{class:"level-left"},n("div",{class:"field"},n("div",{class:{control:!0,"is-hidden":!this.hasCreate}},n("button",{class:"button is-success",onClick:()=>this.createItem()},n("i",{class:"fas fa-plus"}))))),n("div",{class:"level-right"},n("div",{class:{"field has-addons":!0,"is-hidden":!this.hasSearch||0===this.content.length&&!this.isSearching}},n("a",{class:{button:!0,"is-hidden":0===this.filters.length},onClick:()=>this.filterModalVisible=!0},n("i",{class:"fas fa-filter"})),n("p",{class:"control has-icons-right"},n("input",{type:"text",class:"input",placeholder:"Search",onKeyUp:t=>this.searchItem.emit(t.target.value.trim())}),n("span",{class:"icon is-small is-right"},n("i",{class:"fas fa-search"})))))),n("table",{class:{"table is-fullwidth is-hoverable":!0,"is-striped":this.striped,"is-hidden":this.content&&0==this.content.length&&!this.isSearching}},n("thead",null,this.columns.map((t=>!t.shouldBeVisible||t.shouldBeVisible()?n("th",{class:{"is-hidden-mobile":t.hiddenMobile&&t.hiddenMobile()}},t.name," ",t.sortable?n("a",{onClick:()=>{this.orderDesc=this.currentOrderBy!==t.name||!this.orderDesc,this.currentOrderBy=t.name,this.changedOrder.emit({orderBy:t.name,orderDesc:this.orderDesc})}},n("i",this.currentOrderBy!==t.name?{class:"fas fa-sort"}:this.orderDesc?{class:"fas fa-sort-up"}:{class:"fas fa-sort-down"})):""):"")),this.hasUpdate?n("th",null):""),n("tbody",null,this.content.map((t=>n("tr",{onClick:()=>{this.allowSelect&&(this.currentSelectedItem=t,this.itemSelected.emit(this.currentSelectedItem))},class:{"is-selected":this.allowSelect&&zt(this.currentSelectedItem,t)}},this.columns.map((i=>!i.shouldBeVisible||i.shouldBeVisible()?n("td",{class:{"is-hidden-mobile":!!i.hiddenMobile}},i.tableContent(t)):"")),this.hasUpdate?n("td",null,n("div",{class:"level"},n("div",{class:"level-left"}),n("div",{class:"level-right"},n("div",{class:"field"},n("p",{class:"control"},n("a",{class:"button is-warning",onClick:()=>this.editItem(t)},n("i",{class:"fas is-small fa-edit"}))))))):""))))),n("div",{class:"level"},n("div",{class:"level-left"},n("a",{class:"button is-info is-hidden"},n("i",{class:"fas fa-cog"}))),n("div",{class:"level-right"},n("nav",{class:{"pagination is-right":!0,"is-hidden":!this.hasPagination||this.pagesCount<=1||0==this.content.length},role:"navigation","aria-label":"pagination"},n("ul",{class:"pagination-list"},n("li",null,n("a",{class:{"pagination-link":!0,"is-hidden":this.pagesCount<3||this.currentPage<3},onClick:()=>this.pagination.emit(1)},"1")),n("li",null,n("span",{class:{"pagination-ellipsis":!0,"is-hidden":this.pagesCount<3||this.currentPage<4}},"…")),n("li",null,n("a",{class:{"pagination-link":!0,"is-hidden":this.currentPage<2},onClick:()=>this.pagination.emit(this.currentPage-1)},this.currentPage-1)),n("li",null,n("a",{class:"pagination-link is-current"},this.currentPage)),n("li",null,n("a",{class:{"pagination-link":!0,"is-hidden":this.pagesCount<this.currentPage+1},onClick:()=>this.pagination.emit(this.currentPage+1)},this.currentPage+1)),n("li",null,n("span",{class:{"pagination-ellipsis":!0,"is-hidden":this.pagesCount<this.currentPage+3}},"…")),n("li",null,n("a",{class:{"pagination-link":!0,"is-hidden":this.pagesCount<this.currentPage+2},onClick:()=>this.pagination.emit(this.pagesCount)},this.pagesCount)))))))))}};Nt.style="to4st-list td{vertical-align:middle !important}.loadingModal{z-index:1 !important}";export{Nt as T,_,g as a,w as b,b as c,zt as d,o as e,p as i,Kt as n}