(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cffba016","chunk-2d0c4ffa"],{"3ce9":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("router-view")},i=[],r=e("2877"),l={},c=Object(r["a"])(l,s,i,!1,null,null,null);a["default"]=c.exports},"4a9d":function(t,a,e){"use strict";var s=e("2b0e"),i=new s["default"];a["a"]=i},b340:function(t,a,e){"use strict";var s=e("d0b2"),i=e.n(s);i.a},b5a7:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("Nav"),e("transition",{attrs:{name:"fade",mode:"out-in"}},[e("router-view")],1),e("Footer")],1)},i=[],r=e("3ce9"),l=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("b-navbar",{staticClass:"bg-white",attrs:{toggleable:"lg",type:"light",sticky:!0,variant:"info"}},[e("b-navbar-brand",[e("router-link",{attrs:{to:{name:"home"}}},[e("img",{staticClass:"ml-4",attrs:{src:"https://res.cloudinary.com/macalola/image/upload/v1588232928/logo/logo_o2hsci.png",alt:""}})])],1),e("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),e("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[e("b-navbar-nav",{staticClass:"mx-auto",attrs:{center:""}},[e("b-nav-item",{attrs:{to:{name:"home"}}},[t._v("HOME")]),e("b-nav-item",{attrs:{to:{path:"/c/ofertas"}},on:{click:t.handleCategory}},[t._v("OFERTAS")]),e("b-nav-item-dropdown",{attrs:{text:"PRODUCTOS",right:""}},t._l(t.categories,(function(a,s){return e("b-dropdown-item",{key:s,attrs:{to:{path:"/c/"+a.name.toLowerCase()}},on:{click:t.handleCategory}},[t._v(t._s(a.name))])})),1),e("b-nav-item",{attrs:{to:{name:"contact"}}},[t._v("CONTACTANOS")]),e("b-nav-item",{attrs:{href:"#"}},[t._v("F.A.Q.")])],1),e("b-navbar-nav",{},[e("div",{staticClass:"user-actions"},[e("div",{staticClass:"nav-item"},[e("span",{staticStyle:{"font-size":"1.5em",color:"#727272"}},[e("router-link",{attrs:{to:{name:"cart"}}},[e("i",{staticClass:"fas fa-user mr-4"})])],1)]),e("div",{staticClass:"nav-item "},[e("span",{staticStyle:{"font-size":"1.5em",color:"#727272"}},[e("router-link",{attrs:{to:{name:"cart"}}},[e("i",{staticClass:"fas fa-shopping-cart mr-4"})])],1)])])])],1)],1)],1)},c=[],n=e("5530"),o=e("2f62"),m=e("4a9d"),u={name:"Nav",computed:Object(n["a"])({},Object(o["c"])(["categories","getTotalItems"])),data:function(){return{showCart:!1}},methods:Object(n["a"])({},Object(o["b"])(["getCategories"]),{handleCategory:function(){m["a"].$emit("refresh")}}),created:function(){this.getCategories()}},d=u,v=(e("b340"),e("2877")),f=Object(v["a"])(d,l,c,!1,null,"d4817f58",null),p=f.exports,C=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("footer",{staticClass:"main-footer"},[e("div",{staticClass:"bg-gray-100 text-dark-700 py-6"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-4 service-column"},[t._m(0),e("div",{staticClass:"service-text"},[e("h6",{staticClass:"text-uppercase"},[t._v("Envío gratis")]),e("p",{staticClass:"text-muted font-weight-light text-sm mb-0"},[t._v("a partir de "+t._s(t.getGlobalConfig.sendPrice)+" €")])])]),e("div",{staticClass:"col-lg-4 service-column"},[t._m(1),e("div",{staticClass:"service-text"},[e("h6",{staticClass:"text-uppercase"},[t._v("Garantía de devolución")]),e("p",{staticClass:"text-muted font-weight-light text-sm mb-0"},[t._v("Hasta "+t._s(t.getGlobalConfig.moneyBack)+" para devolver los productos")])])]),e("div",{staticClass:"col-lg-4 service-column"},[t._m(2),e("div",{staticClass:"service-text"},[e("h6",{staticClass:"text-uppercase"},[t._v(t._s(t.getGlobalConfig.emailOnDisplay))]),e("p",{staticClass:"text-muted font-weight-light text-sm mb-0"},[t._v("24/7 Atención al cliente")])])])])])]),e("div",{staticClass:"py-6 bg-gray-300 text-muted"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[t._m(3),t._m(4),t._m(5),e("div",{staticClass:"col-lg-4"},[e("h6",{staticClass:"text-uppercase text-dark mb-3"},[t._v("Daily Offers & Discounts")]),e("p",{staticClass:"mb-3"},[t._v(" Lorem ipsum dolor sit amet, consectetur adipisicing elit. At itaque temporibus.")]),e("form",{attrs:{action:"#",id:"newsletter-form"}},[e("div",{staticClass:"input-group mb-3"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control bg-transparent border-secondary border-right-0",attrs:{pattern:"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$",type:"email",placeholder:"Correo electrónico","aria-label":"Your Email Address"},domProps:{value:t.email},on:{input:function(a){a.target.composing||(t.email=a.target.value)}}}),e("div",{staticClass:"input-group-append"},[e("button",{staticClass:"btn btn-outline-secondary border-left-0",on:{click:function(a){return a.preventDefault(),t.addToSubsList(a)}}},[e("b-overlay",{attrs:{show:t.show,rounded:"sm"}},[e("i",{staticClass:"fa fa-paper-plane text-lg text-dark"})])],1)])])])])])])]),e("div",{staticClass:"py-4 font-weight-light bg-gray-800 text-gray-300"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row align-items-center"},[e("div",{staticClass:"col-md-6 text-center text-md-left"},[e("p",{staticClass:"mb-md-0"},[t._v("© Macalola "+t._s(t.year)+". Todos los derechos reservados")])])])])])])])},b=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("span",{staticClass:"mr-3",staticStyle:{"font-size":"2em",color:"#727272"}},[e("i",{staticClass:"fas fa-shipping-fast"})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("span",{staticClass:"mr-3",staticStyle:{"font-size":"1.9em",color:"#727272"}},[e("i",{staticClass:"fas fa-money-check-alt"})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("span",{staticClass:"mr-3",staticStyle:{"font-size":"2.2em",color:"#727272"}},[e("i",{staticClass:"fas fa-concierge-bell"})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"col-lg-4 mb-5 mb-lg-0"},[e("div",{staticClass:"font-weight-bold text-uppercase text-lg text-dark mb-3"},[t._v("Macalola"),e("span",{staticClass:"text-primary"},[t._v(".")])]),e("ul",{staticClass:"list-inline"},[e("li",{staticClass:"list-inline-item"},[e("a",{staticClass:"text-muted text-hover-primary",attrs:{href:"#",target:"_blank",title:"twitter"}},[e("i",{staticClass:"fab fa-twitter"})])]),e("li",{staticClass:"list-inline-item"},[e("a",{staticClass:"text-muted text-hover-primary",attrs:{href:"#",target:"_blank",title:"facebook"}},[e("i",{staticClass:"fab fa-facebook"})])]),e("li",{staticClass:"list-inline-item"},[e("a",{staticClass:"text-muted text-hover-primary",attrs:{href:"#",target:"_blank",title:"instagram"}},[e("i",{staticClass:"fab fa-instagram"})])]),e("li",{staticClass:"list-inline-item"},[e("a",{staticClass:"text-muted text-hover-primary",attrs:{href:"#",target:"_blank",title:"pinterest"}},[e("i",{staticClass:"fab fa-pinterest"})])]),e("li",{staticClass:"list-inline-item"},[e("a",{staticClass:"text-muted text-hover-primary",attrs:{href:"#",target:"_blank",title:"vimeo"}},[e("i",{staticClass:"fab fa-vimeo"})])])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"col-lg-2 col-md-6 mb-5 mb-lg-0"},[e("h6",{staticClass:"text-uppercase text-dark mb-3"},[t._v("Shop")]),e("ul",{staticClass:"list-unstyled"},[e("li",[e("a",{staticClass:"text-muted",attrs:{href:"#"}},[t._v("For Women")])]),e("li",[e("a",{staticClass:"text-muted",attrs:{href:"#"}},[t._v("For Men")])]),e("li",[e("a",{staticClass:"text-muted",attrs:{href:"#"}},[t._v("Stores")])]),e("li",[e("a",{staticClass:"text-muted",attrs:{href:"#"}},[t._v("Our Blog")])]),e("li",[e("a",{staticClass:"text-muted",attrs:{href:"#"}},[t._v("Shop")])])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"col-lg-2 col-md-6 mb-5 mb-lg-0"},[e("h6",{staticClass:"text-uppercase text-dark mb-3"},[t._v("Company")]),e("ul",{staticClass:"list-unstyled"},[e("li",[e("a",{staticClass:"text-muted",attrs:{href:"#"}},[t._v("Login ")])]),e("li",[e("a",{staticClass:"text-muted",attrs:{href:"#"}},[t._v("Register ")])]),e("li",[e("a",{staticClass:"text-muted",attrs:{href:"#"}},[t._v("Wishlist ")])]),e("li",[e("a",{staticClass:"text-muted",attrs:{href:"#"}},[t._v("Our Products ")])]),e("li",[e("a",{staticClass:"text-muted",attrs:{href:"#"}},[t._v("Checkouts ")])])])])}],h=(e("96cf"),e("1da1")),g=e("bc3a"),_=e.n(g),x={name:"Footer",data:function(){return{email:"",show:!1}},computed:Object(n["a"])({},Object(o["c"])(["getGlobalConfig"]),{year:function(){return(new Date).getFullYear()}}),methods:{addToSubsList:function(){var t=this;return Object(h["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,t.show=!0,a.next=4,_.a.post("".concat("https://www.macalola.com","/suscription"),{email:t.email});case 4:t.$bvToast.toast("Desde ahora recibiras en tu email nuestras ofertas y promociones",{title:"Hecho!",variant:"success",solid:!0}),a.next=10;break;case 7:a.prev=7,a.t0=a["catch"](0),t.$bvToast.toast("No se puedo añadir a la lista de suscripción",{title:"Error",variant:"danger",solid:!0});case 10:return a.prev=10,t.show=!1,t.email="",a.finish(10);case 14:case"end":return a.stop()}}),a,null,[[0,7,10,14]])})))()}}},w=x,y=Object(v["a"])(w,C,b,!1,null,"e47da29c",null),k=y.exports,O={components:{RouterView:r["default"],Nav:p,Footer:k}},E=O,$=Object(v["a"])(E,s,i,!1,null,null,null);a["default"]=$.exports},d0b2:function(t,a,e){}}]);
//# sourceMappingURL=chunk-cffba016.b83609e7.js.map