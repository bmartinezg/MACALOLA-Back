(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2828267e"],{"057f":function(t,e,n){var i=n("fc6a"),a=n("241c").f,r={}.toString,o="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(t){try{return a(t)}catch(e){return o.slice()}};t.exports.f=function(t){return o&&"[object Window]"==r.call(t)?s(t):a(i(t))}},"0815":function(t,e,n){"use strict";var i=n("991e"),a=n.n(i);a.a},"1da1":function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));n("d3b7"),n("e6cf");function i(t,e,n,i,a,r,o){try{var s=t[r](o),c=s.value}catch(l){return void n(l)}s.done?e(c):Promise.resolve(c).then(i,a)}function a(t){return function(){var e=this,n=arguments;return new Promise((function(a,r){var o=t.apply(e,n);function s(t){i(o,a,r,s,c,"next",t)}function c(t){i(o,a,r,s,c,"throw",t)}s(void 0)}))}}},"4de4":function(t,e,n){"use strict";var i=n("23e7"),a=n("b727").filter,r=n("1dde"),o=n("ae40"),s=r("filter"),c=o("filter");i({target:"Array",proto:!0,forced:!s||!c},{filter:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})},5530:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));n("a4d3"),n("4de4"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("159b");function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}},"746f":function(t,e,n){var i=n("428f"),a=n("5135"),r=n("e538"),o=n("9bf2").f;t.exports=function(t){var e=i.Symbol||(i.Symbol={});a(e,t)||o(e,t,{value:r.f(t)})}},8632:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"template"},[n("article",{staticClass:"mb-5"},[n("b-row",{staticClass:"template__actions"},[n("b-button",{staticClass:"mr-3",attrs:{variant:"success",disabled:t.disabled,type:"submit"},on:{click:function(e){return e.preventDefault(),t.updateTemplate(e)}}},[t._v("Guardar")]),n("b-button",{staticClass:"mr-3",attrs:{variant:"secondary"},on:{click:function(e){t.disabled=!t.disabled}}},[t._v("Editar")])],1)],1),n("article",{staticClass:"mb-5"},[n("b-row",[n("b-col",[n("b-card",{attrs:{title:"Precio envío"}},[n("b-form-input",{attrs:{disabled:t.disabled,type:"number"},model:{value:t.config.sendPrice,callback:function(e){t.$set(t.config,"sendPrice",e)},expression:"config.sendPrice"}})],1)],1),n("b-col",[n("b-card",{attrs:{title:"Teléfono de contacto"}},[n("b-form-input",{attrs:{disabled:t.disabled},model:{value:t.config.tlfContant,callback:function(e){t.$set(t.config,"tlfContant",e)},expression:"config.tlfContant"}})],1)],1)],1)],1),n("article",{staticClass:"mb-5"},[n("b-row",[n("b-col",[n("b-card",{attrs:{title:"Email de contacto"}},[n("b-form-input",{attrs:{disabled:t.disabled},model:{value:t.config.emailOnDisplay,callback:function(e){t.$set(t.config,"emailOnDisplay",e)},expression:"config.emailOnDisplay"}})],1)],1),n("b-col",[n("b-card",{attrs:{title:"Envio gratuito a partir de"}},[n("b-form-input",{attrs:{disabled:t.disabled},model:{value:t.config.moneyBack,callback:function(e){t.$set(t.config,"moneyBack",e)},expression:"config.moneyBack"}})],1)],1)],1)],1),n("article",{staticClass:"mb-5"},[n("b-row",[n("b-col",[n("b-card",{attrs:{title:"Dirección"}},[n("b-form-group",[n("b-form-input",{staticClass:"mb-2",attrs:{disabled:t.disabled,placeholder:"Calle"},model:{value:t.config.adress.street,callback:function(e){t.$set(t.config.adress,"street",e)},expression:"config.adress.street"}}),n("b-form-input",{staticClass:"mb-2",attrs:{disabled:t.disabled,placeholder:"Número"},model:{value:t.config.adress.door,callback:function(e){t.$set(t.config.adress,"door",e)},expression:"config.adress.door"}}),n("b-form-input",{staticClass:"mb-2",attrs:{disabled:t.disabled,placeholder:"CCAA"},model:{value:t.config.adress.CA,callback:function(e){t.$set(t.config.adress,"CA",e)},expression:"config.adress.CA"}}),n("b-form-input",{staticClass:"mb-2",attrs:{disabled:t.disabled,placeholder:"Ciudad"},model:{value:t.config.adress.city,callback:function(e){t.$set(t.config.adress,"city",e)},expression:"config.adress.city"}}),n("b-form-input",{staticClass:"mb-2",attrs:{disabled:t.disabled,placeholder:"Codigo postal"},model:{value:t.config.adress.code,callback:function(e){t.$set(t.config.adress,"code",e)},expression:"config.adress.code"}}),n("b-form-input",{attrs:{disabled:t.disabled,placeholder:"País"},model:{value:t.config.adress.country,callback:function(e){t.$set(t.config.adress,"country",e)},expression:"config.adress.country"}})],1)],1)],1),n("b-col",[n("b-card",{attrs:{title:"Carrusel"}},[t._l(t.config.carousel,(function(e,i){return n("b-form-group",{key:i},[n("div",{staticClass:"carousel__actions"},[n("strong",[t._v(t._s(i+1))]),n("b-button",{attrs:{type:"text"},on:{click:function(e){return t.removeItemToCarousel(i)}}},[n("i",{staticClass:"fas fa-trash-alt"})])],1),n("b-form-input",{staticClass:"mb-1",attrs:{disabled:t.disabled,placeholder:"Titulo"},model:{value:e.title,callback:function(n){t.$set(e,"title",n)},expression:"item.title"}}),n("b-form-input",{staticClass:"mb-1",attrs:{disabled:t.disabled,placeholder:"Subtitulo"},model:{value:e.subtitle,callback:function(n){t.$set(e,"subtitle",n)},expression:"item.subtitle"}}),n("b-form-input",{staticClass:"mb-1",attrs:{disabled:t.disabled,placeholder:"Imágen"},model:{value:e.img,callback:function(n){t.$set(e,"img",n)},expression:"item.img"}}),n("b-form-input",{attrs:{disabled:t.disabled,placeholder:"Nombre Boton"},model:{value:e.button,callback:function(n){t.$set(e,"button",n)},expression:"item.button"}}),n("hr")],1)})),n("b-button",{attrs:{disabled:t.disabled,variant:"success"},on:{click:t.addItemToCarousel}},[t._v("Añadir elemento")])],2)],1)],1)],1),n("article",{staticClass:"mb-5"},[n("b-row",[n("b-col",[n("b-card",{attrs:{title:"Grid"}},t._l(t.config.template,(function(e,i){return n("b-form-group",{key:i},[n("b-form-input",{staticClass:"mb-1",attrs:{disabled:t.disabled,placeholder:"Titulo"},model:{value:e.title,callback:function(n){t.$set(e,"title",n)},expression:"item.title"}}),n("b-form-input",{staticClass:"mb-1",attrs:{disabled:t.disabled,placeholder:"Imágen"},model:{value:e.img,callback:function(n){t.$set(e,"img",n)},expression:"item.img"}}),n("b-form-input",{staticClass:"mb-1",attrs:{disabled:t.disabled,placeholder:"Button"},model:{value:e.button,callback:function(n){t.$set(e,"button",n)},expression:"item.button"}})],1)})),1)],1),n("b-col",[n("b-card",{attrs:{title:"Redes sociales"}},t._l(t.config.social,(function(e,i){return n("b-form-group",{key:i},[n("i",{class:e.icon}),n("b-form-input",{staticClass:"mb-1",attrs:{disabled:t.disabled,placeholder:"Link"},model:{value:e.link,callback:function(n){t.$set(e,"link",n)},expression:"item.link"}})],1)})),1)],1)],1)],1)])},a=[],r=(n("a434"),n("96cf"),n("1da1")),o=n("5530"),s=n("bc3a"),c=n.n(s),l=n("2f62"),u={data:function(){return{disabled:!0,config:{sendPrice:0,tlfContant:"",emailOnDisplay:"",moneyBack:0,adress:{street:"",door:"",CA:"",city:"",code:0,country:"España"},carousel:[{title:"",subtitle:"",img:"",button:""}],template:[{title:"",img:"",button:""},{title:"",img:"",button:""},{title:"",img:"",button:""},{title:"",img:"",button:""},{title:"",img:"",button:""}],social:[{title:"Facebook",icon:"fab fa-facebook",link:""},{title:"Instagram",icon:"fab fa-instagram",link:""},{title:"Pinterest",icon:"fab fa-pinterest",link:""},{title:"Youtube",icon:"fab fa-youtube",link:""}]}}},computed:Object(o["a"])({},Object(l["c"])(["getGlobalConfiguration"])),methods:{addItemToCarousel:function(){this.config.carousel.push({title:"",subtitle:"",img:"",button:""})},removeItemToCarousel:function(t){1!==this.config.carousel.length&&this.config.carousel.splice(t,1)},updateTemplate:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,n="https://www.macalola.com/set-config",e.next=4,c.a.put(n,{sendPrice:t.config.sendPrice,tlfContant:t.config.tlfContant,emailOnDisplay:t.config.emailOnDisplay,moneyBack:t.config.moneyBack,adress:JSON.stringify(t.config.adress),carousel:JSON.stringify(t.config.carousel),template:JSON.stringify(t.config.template),social:JSON.stringify(t.config.social)},{headers:{"Content-Type":"application/json",Authorization:sessionStorage.getItem("adminToken")}});case 4:t.$bvToast.toast("Hecho!",{title:"Template actualizado correctamente",variant:"success",solid:!0}),t.disabled=!0,e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),t.$bvToast.toast("Error",{title:"No se pudo actualizar el template",variant:"danger",solid:!0});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()},setConfig:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getGlobalConfiguration.data.data;case 2:n=e.sent,t.config.sendPrice=n.sendPrice,t.config.tlfContant=n.tlfContant,t.config.emailOnDisplay=n.emailOnDisplay,t.config.moneyBack=n.moneyBack,t.config.adress=n.adress,t.config.carousel=JSON.parse(n.carousel),t.config.template=JSON.parse(n.template),t.config.social=JSON.parse(n.social);case 11:case"end":return e.stop()}}),e)})))()}},created:function(){this.setConfig()}},f=u,d=(n("0815"),n("2877")),b=Object(d["a"])(f,i,a,!1,null,"43203fac",null);e["default"]=b.exports},"991e":function(t,e,n){},a4d3:function(t,e,n){"use strict";var i=n("23e7"),a=n("da84"),r=n("d066"),o=n("c430"),s=n("83ab"),c=n("4930"),l=n("fdbf"),u=n("d039"),f=n("5135"),d=n("e8b5"),b=n("861d"),m=n("825a"),p=n("7b0b"),g=n("fc6a"),v=n("c04e"),y=n("5c6c"),h=n("7c73"),O=n("df75"),k=n("241c"),w=n("057f"),C=n("7418"),P=n("06cf"),j=n("9bf2"),x=n("d1e7"),S=n("9112"),$=n("6eeb"),D=n("5692"),T=n("f772"),N=n("d012"),_=n("90e3"),E=n("b622"),J=n("e538"),B=n("746f"),A=n("d44e"),I=n("69f3"),R=n("b727").forEach,G=T("hidden"),z="Symbol",F="prototype",H=E("toPrimitive"),L=I.set,Q=I.getterFor(z),W=Object[F],Y=a.Symbol,q=r("JSON","stringify"),K=P.f,M=j.f,U=w.f,V=x.f,X=D("symbols"),Z=D("op-symbols"),tt=D("string-to-symbol-registry"),et=D("symbol-to-string-registry"),nt=D("wks"),it=a.QObject,at=!it||!it[F]||!it[F].findChild,rt=s&&u((function(){return 7!=h(M({},"a",{get:function(){return M(this,"a",{value:7}).a}})).a}))?function(t,e,n){var i=K(W,e);i&&delete W[e],M(t,e,n),i&&t!==W&&M(W,e,i)}:M,ot=function(t,e){var n=X[t]=h(Y[F]);return L(n,{type:z,tag:t,description:e}),s||(n.description=e),n},st=l?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof Y},ct=function(t,e,n){t===W&&ct(Z,e,n),m(t);var i=v(e,!0);return m(n),f(X,i)?(n.enumerable?(f(t,G)&&t[G][i]&&(t[G][i]=!1),n=h(n,{enumerable:y(0,!1)})):(f(t,G)||M(t,G,y(1,{})),t[G][i]=!0),rt(t,i,n)):M(t,i,n)},lt=function(t,e){m(t);var n=g(e),i=O(n).concat(mt(n));return R(i,(function(e){s&&!ft.call(n,e)||ct(t,e,n[e])})),t},ut=function(t,e){return void 0===e?h(t):lt(h(t),e)},ft=function(t){var e=v(t,!0),n=V.call(this,e);return!(this===W&&f(X,e)&&!f(Z,e))&&(!(n||!f(this,e)||!f(X,e)||f(this,G)&&this[G][e])||n)},dt=function(t,e){var n=g(t),i=v(e,!0);if(n!==W||!f(X,i)||f(Z,i)){var a=K(n,i);return!a||!f(X,i)||f(n,G)&&n[G][i]||(a.enumerable=!0),a}},bt=function(t){var e=U(g(t)),n=[];return R(e,(function(t){f(X,t)||f(N,t)||n.push(t)})),n},mt=function(t){var e=t===W,n=U(e?Z:g(t)),i=[];return R(n,(function(t){!f(X,t)||e&&!f(W,t)||i.push(X[t])})),i};if(c||(Y=function(){if(this instanceof Y)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=_(t),n=function(t){this===W&&n.call(Z,t),f(this,G)&&f(this[G],e)&&(this[G][e]=!1),rt(this,e,y(1,t))};return s&&at&&rt(W,e,{configurable:!0,set:n}),ot(e,t)},$(Y[F],"toString",(function(){return Q(this).tag})),$(Y,"withoutSetter",(function(t){return ot(_(t),t)})),x.f=ft,j.f=ct,P.f=dt,k.f=w.f=bt,C.f=mt,J.f=function(t){return ot(E(t),t)},s&&(M(Y[F],"description",{configurable:!0,get:function(){return Q(this).description}}),o||$(W,"propertyIsEnumerable",ft,{unsafe:!0}))),i({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:Y}),R(O(nt),(function(t){B(t)})),i({target:z,stat:!0,forced:!c},{for:function(t){var e=String(t);if(f(tt,e))return tt[e];var n=Y(e);return tt[e]=n,et[n]=e,n},keyFor:function(t){if(!st(t))throw TypeError(t+" is not a symbol");if(f(et,t))return et[t]},useSetter:function(){at=!0},useSimple:function(){at=!1}}),i({target:"Object",stat:!0,forced:!c,sham:!s},{create:ut,defineProperty:ct,defineProperties:lt,getOwnPropertyDescriptor:dt}),i({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:bt,getOwnPropertySymbols:mt}),i({target:"Object",stat:!0,forced:u((function(){C.f(1)}))},{getOwnPropertySymbols:function(t){return C.f(p(t))}}),q){var pt=!c||u((function(){var t=Y();return"[null]"!=q([t])||"{}"!=q({a:t})||"{}"!=q(Object(t))}));i({target:"JSON",stat:!0,forced:pt},{stringify:function(t,e,n){var i,a=[t],r=1;while(arguments.length>r)a.push(arguments[r++]);if(i=e,(b(e)||void 0!==t)&&!st(t))return d(e)||(e=function(t,e){if("function"==typeof i&&(e=i.call(this,t,e)),!st(e))return e}),a[1]=e,q.apply(null,a)}})}Y[F][H]||S(Y[F],H,Y[F].valueOf),A(Y,z),N[G]=!0},b64b:function(t,e,n){var i=n("23e7"),a=n("7b0b"),r=n("df75"),o=n("d039"),s=o((function(){r(1)}));i({target:"Object",stat:!0,forced:s},{keys:function(t){return r(a(t))}})},dbb4:function(t,e,n){var i=n("23e7"),a=n("83ab"),r=n("56ef"),o=n("fc6a"),s=n("06cf"),c=n("8418");i({target:"Object",stat:!0,sham:!a},{getOwnPropertyDescriptors:function(t){var e,n,i=o(t),a=s.f,l=r(i),u={},f=0;while(l.length>f)n=a(i,e=l[f++]),void 0!==n&&c(u,e,n);return u}})},e439:function(t,e,n){var i=n("23e7"),a=n("d039"),r=n("fc6a"),o=n("06cf").f,s=n("83ab"),c=a((function(){o(1)})),l=!s||c;i({target:"Object",stat:!0,forced:l,sham:!s},{getOwnPropertyDescriptor:function(t,e){return o(r(t),e)}})},e538:function(t,e,n){var i=n("b622");e.f=i}}]);
//# sourceMappingURL=chunk-2828267e.7bdedb36.js.map