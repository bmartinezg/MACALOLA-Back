(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7cabbe28"],{2737:function(t,a,i){"use strict";var s=i("90ad"),e=i.n(s);e.a},"2b52":function(t,a,i){"use strict";var s=i("db86"),e=i.n(s);e.a},"90ad":function(t,a,i){},a9b6:function(t,a,i){"use strict";i.r(a);var s=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("section",[i("home-carrousel"),i("home-grid")],1)},e=[],r=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("article",[i("b-carousel",{staticClass:"carousel",attrs:{interval:t.isMobile?0:4e3,controls:!t.isMobile,indicators:!t.isMobile,"img-width":"100%",background:"#ababab","img-height":"280"},on:{"sliding-start":t.onSlideStart,"sliding-end":t.onSlideEnd},model:{value:t.slide,callback:function(a){t.slide=a},expression:"slide"}},t._l(t.parseCarouser.carousel,(function(a,s){return i("b-carousel-slide",{key:s,attrs:{"img-src":a.img}},[i("div",{staticClass:"item home-full-item"},[i("div",{staticClass:"container-fluid h-100 py-5"},[i("h5",{staticClass:"text-uppercase text-white font-weight-light mb-4 letter-spacing-5"},[t._v(" "+t._s(a.subtitle))]),i("h1",{staticClass:"mb-5 display-2 font-weight-bold text-serif"},[t._v(t._s(a.title))]),i("p",[i("router-link",{staticClass:"btn btn-light",attrs:{to:{path:"/c/"+a.button}}},[t._v("Ver ahora")])],1)])])])})),1)],1)},l=[],c=i("5530"),n=i("2f62"),d={name:"HomeCarrousel",data:function(){return{slide:0,sliding:null}},computed:Object(c["a"])({},Object(n["c"])(["getGlobalConfig"]),{isMobile:function(){return window.innerWidth<=800||window.innerHeight<=600},parseCarouser:function(){return JSON.parse(this.getGlobalConfig)}}),methods:{onSlideStart:function(t){this.sliding=!0},onSlideEnd:function(t){this.sliding=!1}}},o=d,m=(i("2737"),i("2877")),p=Object(m["a"])(o,r,l,!1,null,null,null),b=p.exports,u=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"grid mt-3"},[i("section",[i("div",{staticClass:"container-fluid px-5px"},[i("div",{staticClass:"row mx-0"},[i("div",{staticClass:"col-md-6 mb-10px px-5px"},[i("div",{staticClass:"card border-0 text-white text-center"},[i("img",{staticClass:"card-img",attrs:{src:t.parseGrid[0].img,alt:"Card image"}}),i("div",{staticClass:"card-img-overlay d-flex align-items-center"},[i("div",{staticClass:"w-100 py-3"},[i("h2",{staticClass:"display-3 font-weight-bold mb-4"},[t._v(t._s(t.parseGrid[0].title))]),i("router-link",{staticClass:"btn btn-light",attrs:{to:{path:"/c/"+t.parseGrid[0].button}}},[t._v("Ver ahora")])],1)])])]),i("div",{staticClass:"col-md-6 mb-10px px-5px"},[i("div",{staticClass:"card border-0 text-white text-center"},[i("img",{staticClass:"card-img",attrs:{src:t.parseGrid[1].img,alt:"Card image"}}),i("div",{staticClass:"card-img-overlay d-flex align-items-center"},[i("div",{staticClass:"w-100 py-3"},[i("h2",{staticClass:"display-3 font-weight-bold mb-4"},[t._v(t._s(t.parseGrid[1].title))]),i("router-link",{staticClass:"btn btn-light",attrs:{to:{path:"/c/"+t.parseGrid[0].button}}},[t._v("Ver ahora")])],1)])])])]),i("div",{staticClass:"row mx-0"},[i("div",{staticClass:"col-lg-4 mb-10px px-5px"},[i("div",{staticClass:"card border-0 text-center text-white"},[i("img",{staticClass:"card-img",attrs:{src:t.parseGrid[2].img,alt:"Card image"}}),i("div",{staticClass:"card-img-overlay d-flex align-items-center"},[i("div",{staticClass:"w-100"},[i("h2",{staticClass:"display-4 mb-4"},[t._v(t._s(t.parseGrid[2].title))]),i("router-link",{staticClass:"btn btn-link text-white",attrs:{to:{path:"/p/"+t.parseGrid[0].button}}},[t._v(" Ver ahora "),i("i",{staticClass:"fa-arrow-right fa ml-2"})])],1)])])]),i("div",{staticClass:"col-lg-4 mb-10px px-5px"},[i("div",{staticClass:"card border-0 text-center text-white"},[i("img",{staticClass:"card-img",attrs:{src:t.parseGrid[3].img,alt:"Card image"}}),i("div",{staticClass:"card-img-overlay d-flex align-items-center"},[i("div",{staticClass:"w-100"},[i("h2",{staticClass:"display-4 mb-4"},[t._v(t._s(t.parseGrid[3].title))]),i("router-link",{staticClass:"btn btn-link text-white",attrs:{to:{path:"/p/"+t.parseGrid[0].button}}},[t._v(" Ver ahora "),i("i",{staticClass:"fa-arrow-right fa ml-2"})])],1)])])]),i("div",{staticClass:"col-lg-4 mb-10px px-5px"},[i("div",{staticClass:"card border-0 text-center text-white"},[i("img",{staticClass:"card-img",attrs:{src:t.parseGrid[4].img,alt:"Card image"}}),i("div",{staticClass:"card-img-overlay d-flex align-items-center"},[i("div",{staticClass:"w-100"},[i("h2",{staticClass:"display-4 mb-4"},[t._v(t._s(t.parseGrid[4].title))]),i("router-link",{staticClass:"btn btn-link text-white",attrs:{to:{path:"/p/"+t.parseGrid[0].button}}},[t._v("Ver ahora "),i("i",{staticClass:"fa-arrow-right fa ml-2"})])],1)])])])])])])])},g=[],C={name:"HomeGrid",computed:Object(c["a"])({},Object(n["c"])(["getGlobalConfig"]),{parseGrid:function(){return JSON.parse(this.getGlobalConfig.template)}})},h=C,v=(i("2b52"),Object(m["a"])(h,u,g,!1,null,"a7555950",null)),f=v.exports,x={components:{HomeCarrousel:b,HomeGrid:f}},w=x,_=Object(m["a"])(w,s,e,!1,null,"aa392dde",null);a["default"]=_.exports},db86:function(t,a,i){}}]);
//# sourceMappingURL=chunk-7cabbe28.bf0c17c9.js.map