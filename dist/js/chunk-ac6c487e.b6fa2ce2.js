(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ac6c487e"],{2819:function(t,e,n){},"6bd1":function(t,e,n){},9062:function(t,e,n){!function(e,n){t.exports=n()}("undefined"!=typeof self&&self,function(){return function(t){var e={};function n(a){if(e[a])return e[a].exports;var i=e[a]={i:a,l:!1,exports:{}};return t[a].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(a,i,function(e){return t[e]}.bind(null,i));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a="undefined"!=typeof window?window.HTMLElement:Object,i={mounted:function(){document.addEventListener("focusin",this.focusIn)},methods:{focusIn:function(t){if(this.isActive&&t.target!==this.$el&&!this.$el.contains(t.target)){var e=this.container?this.container:this.isFullPage?null:this.$el.parentElement;(this.isFullPage||e&&e.contains(t.target))&&(t.preventDefault(),this.$el.focus())}}},beforeDestroy:function(){document.removeEventListener("focusin",this.focusIn)}};function r(t,e,n,a,i,r,o,s){var u,l="function"==typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=n,l._compiled=!0),a&&(l.functional=!0),r&&(l._scopeId="data-v-"+r),o?(u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},l._ssrRegister=u):i&&(u=s?function(){i.call(this,this.$root.$options.shadowRoot)}:i),u)if(l.functional){l._injectStyles=u;var c=l.render;l.render=function(t,e){return u.call(e),c(t,e)}}else{var d=l.beforeCreate;l.beforeCreate=d?[].concat(d,u):[u]}return{exports:t,options:l}}var o=r({name:"spinner",props:{color:{type:String,default:"#000"},height:{type:Number,default:64},width:{type:Number,default:64}}},function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg",width:this.width,height:this.height,stroke:this.color}},[e("g",{attrs:{fill:"none","fill-rule":"evenodd"}},[e("g",{attrs:{transform:"translate(1 1)","stroke-width":"2"}},[e("circle",{attrs:{"stroke-opacity":".25",cx:"18",cy:"18",r:"18"}}),e("path",{attrs:{d:"M36 18c0-9.94-8.06-18-18-18"}},[e("animateTransform",{attrs:{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.8s",repeatCount:"indefinite"}})],1)])])])},[],!1,null,null,null).exports,s=r({name:"dots",props:{color:{type:String,default:"#000"},height:{type:Number,default:240},width:{type:Number,default:60}}},function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{viewBox:"0 0 120 30",xmlns:"http://www.w3.org/2000/svg",fill:this.color,width:this.width,height:this.height}},[e("circle",{attrs:{cx:"15",cy:"15",r:"15"}},[e("animate",{attrs:{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"}})]),e("circle",{attrs:{cx:"60",cy:"15",r:"9","fill-opacity":"0.3"}},[e("animate",{attrs:{attributeName:"r",from:"9",to:"9",begin:"0s",dur:"0.8s",values:"9;15;9",calcMode:"linear",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"fill-opacity",from:"0.5",to:"0.5",begin:"0s",dur:"0.8s",values:".5;1;.5",calcMode:"linear",repeatCount:"indefinite"}})]),e("circle",{attrs:{cx:"105",cy:"15",r:"15"}},[e("animate",{attrs:{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"}})])])},[],!1,null,null,null).exports,u=r({name:"bars",props:{color:{type:String,default:"#000"},height:{type:Number,default:40},width:{type:Number,default:40}}},function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 30 30",height:this.height,width:this.width,fill:this.color}},[e("rect",{attrs:{x:"0",y:"13",width:"4",height:"5"}},[e("animate",{attrs:{attributeName:"height",attributeType:"XML",values:"5;21;5",begin:"0s",dur:"0.6s",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"y",attributeType:"XML",values:"13; 5; 13",begin:"0s",dur:"0.6s",repeatCount:"indefinite"}})]),e("rect",{attrs:{x:"10",y:"13",width:"4",height:"5"}},[e("animate",{attrs:{attributeName:"height",attributeType:"XML",values:"5;21;5",begin:"0.15s",dur:"0.6s",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"y",attributeType:"XML",values:"13; 5; 13",begin:"0.15s",dur:"0.6s",repeatCount:"indefinite"}})]),e("rect",{attrs:{x:"20",y:"13",width:"4",height:"5"}},[e("animate",{attrs:{attributeName:"height",attributeType:"XML",values:"5;21;5",begin:"0.3s",dur:"0.6s",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"y",attributeType:"XML",values:"13; 5; 13",begin:"0.3s",dur:"0.6s",repeatCount:"indefinite"}})])])},[],!1,null,null,null).exports,l=r({name:"vue-loading",mixins:[i],props:{active:Boolean,programmatic:Boolean,container:[Object,Function,a],isFullPage:{type:Boolean,default:!0},transition:{type:String,default:"fade"},canCancel:Boolean,onCancel:{type:Function,default:function(){}},color:String,backgroundColor:String,opacity:Number,width:Number,height:Number,zIndex:Number,loader:{type:String,default:"spinner"}},data:function(){return{isActive:this.active}},components:{Spinner:o,Dots:s,Bars:u},beforeMount:function(){this.programmatic&&(this.container?(this.isFullPage=!1,this.container.appendChild(this.$el)):document.body.appendChild(this.$el))},mounted:function(){this.programmatic&&(this.isActive=!0),document.addEventListener("keyup",this.keyPress)},methods:{cancel:function(){this.canCancel&&this.isActive&&(this.hide(),this.onCancel.apply(null,arguments))},hide:function(){var t=this;this.$emit("hide"),this.$emit("update:active",!1),this.programmatic&&(this.isActive=!1,setTimeout(function(){var e;t.$destroy(),void 0!==(e=t.$el).remove?e.remove():e.parentNode.removeChild(e)},150))},keyPress:function(t){27===t.keyCode&&this.cancel()}},watch:{active:function(t){this.isActive=t}},beforeDestroy:function(){document.removeEventListener("keyup",this.keyPress)}},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:t.transition}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.isActive,expression:"isActive"}],staticClass:"vld-overlay is-active",class:{"is-full-page":t.isFullPage},style:{zIndex:this.zIndex},attrs:{tabindex:"0","aria-busy":t.isActive,"aria-label":"Loading"}},[n("div",{staticClass:"vld-background",style:{background:this.backgroundColor,opacity:this.opacity},on:{click:function(e){return e.preventDefault(),t.cancel(e)}}}),n("div",{staticClass:"vld-icon"},[t._t("before"),t._t("default",[n(t.loader,{tag:"component",attrs:{color:t.color,width:t.width,height:t.height}})]),t._t("after")],2)])])},[],!1,null,null,null).exports,c=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return{show:function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n,r=Object.assign({},e,a,{programmatic:!0}),o=new(t.extend(l))({el:document.createElement("div"),propsData:r}),s=Object.assign({},n,i);return Object.keys(s).map(function(t){o.$slots[t]=s[t]}),o}}};n(0),l.install=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=c(t,e,n);t.$loading=a,t.prototype.$loading=a},e.default=l}]).default})},af89:function(t,e,n){"use strict";var a=n("2819"),i=n.n(a);i.a},bdf3:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{id:"how-to-play"}},[n("loading",{attrs:{active:t.isLoading,"can-cancel":!0},on:{"update:active":function(e){t.isLoading=e}}}),n("div",{},[n("div",{staticClass:"result-card p-5"},[n("div",{staticClass:"d-flex justify-content-between align-items-center border-boda pb-3"},[n("h3",[t._v("Current Balance")]),n("div",{staticClass:"text-center"},[n("h4",{staticClass:"ml-5"},[t._v(t._s(t.userBalance.currency)),n("span",[t._v(t._s(t.userBalance.amount))]),n("br")]),n("h6",{staticClass:"ml-4"},[t._v("Current Balance")])])]),n("div",{staticClass:"mt-5"},[n("p",{staticClass:"p2"},[t._v("Enter Amount")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.amount,expression:"amount"}],staticClass:"form-control p-4",attrs:{type:"text",name:"amount"},domProps:{value:t.amount},on:{input:function(e){e.target.composing||(t.amount=e.target.value)}}}),n("p",{staticClass:"p2 mt-3"},[t._v("Account Number")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.account_number,expression:"account_number"}],staticClass:"form-control p-4",attrs:{type:"text",name:"amount"},domProps:{value:t.account_number},on:{input:function(e){e.target.composing||(t.account_number=e.target.value)}}}),n("div",{staticClass:"mt-3 amount"},[n("p",{staticClass:"p2"},[t._v("Pick Your Bank")]),n("select",{directives:[{name:"model",rawName:"v-model",value:t.bank,expression:"bank"}],staticClass:"selectpicker form-control",attrs:{title:"Pick a number",name:"paymentMethod"},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.bank=e.target.multiple?n:n[0]}}},[n("option",{attrs:{disabled:"",value:""}},[t._v("Select Payment Option")]),n("option",{attrs:{value:"044"}},[t._v("Access Bank")]),n("option",{attrs:{value:"023"}},[t._v("Citibank Nigeria")]),n("option",{attrs:{value:"063"}},[t._v("Diamond Bank")]),n("option",{attrs:{value:"050"}},[t._v("Ecobank Nigeria")]),n("option",{attrs:{value:"084"}},[t._v("Enterprise Bank")]),n("option",{attrs:{value:"070"}},[t._v("Fidelity Bank")]),n("option",{attrs:{value:"011"}},[t._v("First Bank of Nigeria")]),n("option",{attrs:{value:"058"}},[t._v("Guaranty Trust Bank")]),n("option",{attrs:{value:"030"}},[t._v("Heritage Bank")]),n("option",{attrs:{value:"082"}},[t._v("Keystone Bank")]),n("option",{attrs:{value:"014"}},[t._v("MainStreet Bank")]),n("option",{attrs:{value:"076"}},[t._v("Skye Bank")]),n("option",{attrs:{value:"221"}},[t._v("Stanbic IBTC Bank")]),n("option",{attrs:{value:"068"}},[t._v("Standard Chartered Bank")]),n("option",{attrs:{value:"232"}},[t._v("Sterling Bank")]),n("option",{attrs:{value:"032"}},[t._v("Union Bank of Nigeria")]),n("option",{attrs:{value:"033"}},[t._v("United Bank For Africa")]),n("option",{attrs:{value:"215"}},[t._v("Unity Bank")]),n("option",{attrs:{value:"035"}},[t._v("Wema Bank")]),n("option",{attrs:{value:"057"}},[t._v("Zenith Bank")])])]),n("br")]),n("span",{staticClass:"max-span  mt-4"},[t._v("*Minimum Widthrawal is N5,000.00")]),n("br"),n("button",{staticClass:"btn play mt-5 py-2 px-5",on:{click:function(e){return e.preventDefault(),t.sendPost()}}},[t._v("Widthdraw")])])])],1)},i=[],r=n("cebc"),o=(n("6b54"),n("96cf"),n("3b8d")),s=n("2f62"),u=n("bc3a"),l=n.n(u),c=n("9062"),d=n.n(c),p=(n("e40d"),{components:{Loading:d.a},data:function(){return{isLoading:!1,bank:"",account_number:"",amount:""}},methods:{sendPost:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(){var e,n=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,this.showModal=!1,this.isLoading=!0,e=Math.random().toString(36).substring(7),t.next=6,l.a.post("https://middlewarez.herokuapp.com/api/v1/payment/withdraw",{username:this.userDetails.username,account_number:this.account_number,amount:this.amount,reference:e,bank_code:this.bank,fullname:this.userDetails.firstName+""+this.userDetails.lastName,firstname:this.userDetails.firstName});case 6:setTimeout(function(){n.isLoading=!1},1e3),this.$swal({type:"success",title:"Withdrawal Initiated",showConfirmButton:!1,timer:3e3}),this.$router.push("/dashboard"),t.next=16;break;case 11:return t.prev=11,t.t0=t["catch"](0),this.isLoading=!1,this.$swal({type:"error",title:"Withdrawal Failed",showConfirmButton:!1,timer:3e3}),t.abrupt("return");case 16:case"end":return t.stop()}},t,this,[[0,11]])}));function e(){return t.apply(this,arguments)}return e}()},computed:Object(r["a"])({},Object(s["e"])(["userBalance","userDetails"]))}),m=p,f=(n("af89"),n("c94f"),n("2877")),v=Object(f["a"])(m,a,i,!1,null,"6843d556",null);e["default"]=v.exports},c94f:function(t,e,n){"use strict";var a=n("6bd1"),i=n.n(a);i.a},e40d:function(t,e,n){}}]);
//# sourceMappingURL=chunk-ac6c487e.b6fa2ce2.js.map