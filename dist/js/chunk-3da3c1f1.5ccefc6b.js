(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3da3c1f1"],{"20d3":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{attrs:{id:"dashboard-result"}},[s("div",{staticClass:"container"},[t._m(0),s("div",{staticClass:"d-flex justify-content-between mx-0"},t._l(t.details,function(t,e){return s("game-card",{key:e,staticClass:"game-card",attrs:{detail:t}})}),1)])])},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"py-5"},[s("h1",{staticClass:"mb-4"},[t._v("Result")]),s("div",{staticClass:"d-flex justify-content-between mb-2"},[s("div",{staticClass:"card result-card p-5"},[s("div",{staticClass:"d-flex justify-content-between align-items-center border-bottom"},[s("p",[t._v("You have selected to view "),s("span",[t._v("Naira")]),t._v(" result")]),s("button",{staticClass:"btn"},[t._v("Cancel")])]),s("div",{staticClass:"d-flex justify-content-between align-items-center border-bottom direct-bet"},[s("p",{staticClass:"p1 pb-3 pt-4"},[t._v("1-5 Direct Bet")]),s("p",{staticClass:"p2"},[t._v("Draw ID 1930")])]),s("div",{staticClass:"d-flex justify-content-between align-items-center border-bottom direct-bet"},[s("div",{staticClass:"pt-4 pb-5"},[s("h6",[t._v("Winning Numbers")]),s("div",{staticClass:"card pl-2"},[s("img",{attrs:{src:"/img/trys.png"}})])]),s("p",{staticClass:"p3"},[t._v("Play Number"),s("span",{staticClass:"px-3 ml-2"},[t._v("5")])])]),s("div",{staticClass:"d-flex justify-content-between align-items-center border-bottom direct-bet"},[s("p",{staticClass:"p1 pb-3 pt-4"},[t._v("+ 2 - 4 Perm\n\t\t\t\t\t\t\t")]),s("p",{staticClass:"p2"},[t._v("Draw ID 1930")])]),s("div",{staticClass:"border-bottom direct-bet d-flex"},[s("div",{staticClass:"pt-4 pb-5"},[s("h6",[t._v("Winning Numbers")]),s("div",{staticClass:"card pl-2"},[s("img",{attrs:{src:"/img/trys.png"}})])])]),s("div",{staticClass:"d-flex justify-content-between align-items-center border-bottom direct-bet"},[s("p",{staticClass:"p1 pb-3 pt-4"},[t._v("Banker\n\t\t\t\t\t\t\t")]),s("p",{staticClass:"p2"},[t._v("Draw ID 1930")])]),s("div",{staticClass:"border-bottom direct-bet d-flex"},[s("div",{staticClass:"pt-4 pb-5"},[s("h6",[t._v("Winning Numbers")]),s("div",{staticClass:"card pl-2"},[s("img",{attrs:{src:"/img/trys.png"}})])])]),s("div",{staticClass:"d-flex justify-content-between align-items-center border-bottom direct-bet"},[s("p",{staticClass:"p1 pb-3 pt-4"},[t._v("1A11\n\t\t\t\t\t\t\t")]),s("p",{staticClass:"p2"},[t._v("Draw ID 1930")])]),s("div",{staticClass:"direct-bet d-flex"},[s("div",{staticClass:"pt-4 pb-5"},[s("h6",[t._v("Winning Numbers")]),s("div",{staticClass:"card pl-2"},[s("img",{attrs:{src:"/img/trys.png"}})])])])])])])}],n=s("23ab"),r={components:{GameCard:n["a"]},data:function(){return{details:[{title:"Naija Gold",money:"300, 000",last_draw:"05 Mar 2019",time:"04:04:04"},{title:"Success",money:"450, 347",last_draw:"05 Mar 2019",time:"01:07:11"},{title:"Kano",money:"875, 123",last_draw:"2hrs ago",time:"09:14:44"}]}}},c=r,l=(s("7d48"),s("2877")),d=Object(l["a"])(c,a,i,!1,null,"e1f2299e",null);e["default"]=d.exports},"23ab":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{attrs:{id:"game-card"}},[s("div",{staticClass:"col"},[s("div",{staticClass:"main-con"},[s("div",{staticClass:"card px-md-4 px-sm-3 pt-4 pb-2 mt-3 inner-card"},[s("div",{staticClass:"mb-3 d-flex align-items-start"},[s("img",{staticClass:"mr-md-5 mr-sm-3",attrs:{src:"/img/1.png"}}),s("p",{staticClass:"success-text"},[t._v(t._s(t.detail.name))])]),s("div",{staticClass:"row border-top"}),s("div",{staticClass:"row mt-2"}),s("div",{staticClass:"row justify-content-center align-items-center"},[s("p",{staticClass:"time",attrs:{id:t.detail.id}},[t._v("Closed")])]),t.detail.available?t._e():s("div",{staticClass:"row pl-3 mt-2 border-bottom justify-content-center align-items-center"},[s("p",{staticClass:"time-count mr-4"},[t._v("DAYS")]),s("br"),s("p",{staticClass:"time-count mr-4"},[t._v("HOURS")]),s("p",{staticClass:"time-count"},[t._v("MINS")])]),s("router-link",{staticClass:"px-md-3 mb-3 btn button d-flex justify-content-center mt-3",attrs:{to:"/result"}},[t._v("VIEW RESULT")])],1)])])])},i=[],n=s("c1df"),r=s.n(n),c={props:{detail:Object},mounted:function(){this.prepareCountDown()},methods:{getLastDraw:function(t){var e="Winna"==this.detail.name||"Cash"==this.detail.name||"Millions"==this.detail.name?7:1,s=r()(t).subtract(e,"days").format("YYYY-MM-DD HH:MM");return s},prepareCountDown:function(){var t=this;if(t.detail.available)document.getElementById(t.detail.id).innerText="Closed";else var e=t.detail.date,s=new Date(e).getTime(),a=setInterval(function(){var e=(new Date).getTime(),i=s-e,n=Math.floor(i/864e5),r=Math.floor(i%864e5/36e5),c=Math.floor(i%36e5/6e4);document.getElementById(t.detail.id).innerText=n+"d "+r+"h "+c+"m",i<0&&(clearInterval(a),document.getElementById(t.detail.id).innerHTML="EXPIRED")},1e3)}}},l=c,d=(s("ec16"),s("2877")),o=Object(d["a"])(l,a,i,!1,null,"3b539032",null);e["a"]=o.exports},6337:function(t,e,s){},"7d48":function(t,e,s){"use strict";var a=s("b2ff"),i=s.n(a);i.a},b2ff:function(t,e,s){},ec16:function(t,e,s){"use strict";var a=s("6337"),i=s.n(a);i.a}}]);
//# sourceMappingURL=chunk-3da3c1f1.5ccefc6b.js.map