(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["DevExample4"],{"885e":function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"demo-page-wrap"},[s("div",[s("h1",{staticStyle:{"text-align":"center"}},[e._v("Usage Example 4")]),s("b",[e._v("Selected:")]),e._v(" "+e._s(e.selected||"not chosen")+".\n    "),s("br"),s("br"),s("button",{on:{click:function(t){e.search=""}}},[e._v("\n      Set search\n    ")]),e._v('\n\n    Search: "'+e._s(e.search)+'"\n\n    '),s("cool-select",{ref:"select",attrs:{items:e.items,"search-text":e.search,placeholder:"Select name"},on:{"update:searchText":function(t){e.search=t},"update:search-text":function(t){e.search=t},select:e.onSelect,focus:e.onFocus,blur:e.onBlur,"change-displayed-items":e.onChangeDisplayedItems},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}},[e.displayedItems.length?s("div",{staticStyle:{background:"red"},attrs:{slot:"before-items-fixed"},slot:"before-items-fixed"},[e._v("\n        before-items-fixed\n      ")]):e._e(),e.displayedItems.length?s("div",{staticStyle:{background:"red"},attrs:{slot:"before-items"},slot:"before-items"},[e._v("\n        before-items\n      ")]):e._e(),e.displayedItems.length?s("div",{staticStyle:{background:"blue"},attrs:{slot:"after-items"},slot:"after-items"},[e._v("\n        after-items\n      ")]):e._e(),e.displayedItems.length?s("div",{staticStyle:{background:"blue"},attrs:{slot:"after-items-fixed"},slot:"after-items-fixed"},[e._v("\n        after-items-fixed\n      ")]):e._e()])],1)])},l=[],o=(s("cadf"),s("551c"),s("f751"),s("097d"),s("56d7")),c={components:{CoolSelect:o["a"]},data:function(){for(var e=[],t=1;t<=42;t++)e.push("Item "+t);return{search:"",selected:e[1],items:e,displayedItems:e}},methods:{onChangeDisplayedItems:function(e){this.displayedItems=e},onSelect:function(e){console.log("onSelect",e,this.selected)},onBlur:function(){console.log("blur")},onFocus:function(){console.log("focus")}}},a=c,i=s("2877"),r=Object(i["a"])(a,n,l,!1,null,null,null);t["default"]=r.exports}}]);
//# sourceMappingURL=DevExample4.67e5abde.js.map