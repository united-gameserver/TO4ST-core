import{r as t,h as s,g as r}from"./p-89d64653.js";import{P as e,t as a}from"./p-ee768a2e.js";const o=class{constructor(s){t(this,s)}componentWillLoad(){try{this.provider=e.create(this.el,this.name,this.value)}catch(t){a(this.el,t)}}onValue(t){try{this.provider.provide(t)}catch(t){a(this.el,t)}}render(){return s("slot",null)}get el(){return r(this)}static get watchers(){return{value:["onValue"]}}};export{o as quantum_provider}