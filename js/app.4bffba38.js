(function(){"use strict";var t={5590:function(t,o,e){var a=e(5130),r=e(6768);function s(t,o,e,a,s,n){const c=(0,r.g2)("AppHeader"),d=(0,r.g2)("router-view"),i=(0,r.g2)("AppFooter");return(0,r.uX)(),(0,r.CE)(r.FK,null,[(0,r.bF)(c),(0,r.bF)(d),(0,r.bF)(i)],64)}var n=e(4232);const c={class:"app__header"},d={class:"header"},i={class:"header__header"},l={key:0},g={key:1,class:"header__filters"},u=["onClick"];function _(t,o,e,a,s,_){const p=(0,r.g2)("RouterLink");return(0,r.uX)(),(0,r.CE)("header",c,[(0,r.Lk)("div",d,[(0,r.Lk)("h1",i,[(0,r.bF)(p,{to:"/",class:"main_page_link"},{default:(0,r.k6)((()=>o[1]||(o[1]=[(0,r.eW)("Storik")]))),_:1})]),s.categories?((0,r.uX)(),(0,r.CE)("nav",g,[(0,r.Lk)("button",{onClick:o[0]||(o[0]=(...o)=>t.fetchAllGoods&&t.fetchAllGoods(...o)),class:"filters__button"},"All"),((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(s.categories,((o,e)=>((0,r.uX)(),(0,r.CE)("button",{onClick:e=>t.fetchCategoryGoods(o),class:"filters__button",key:e},(0,n.v_)(o),9,u)))),128))])):((0,r.uX)(),(0,r.CE)("p",l,"Loading...")),(0,r.bF)(p,{to:"/cart",class:"header__cart"},{default:(0,r.k6)((()=>[o[2]||(o[2]=(0,r.Lk)("img",{src:"shopping-cart-outline-svgrepo-com.svg",alt:"cart",class:"cart__img"},null,-1)),(0,r.eW)((0,n.v_)(t.getCart.length),1)])),_:1})])])}var p=e(782),f={data(){return{categories:null}},mounted(){this.$http.get("https://fakestoreapi.com/products/categories",{timeout:6e4}).then((t=>{this.categories=t.data})),this.getCart=this.goodsFromLocalStorage},methods:{...(0,p.PY)(["fetchCategoryGoods","fetchAllGoods"])},computed:{...(0,p.L8)(["getCart"]),goodsFromLocalStorage(){return JSON.parse(localStorage.getItem("cart")||"[]")}}},h=e(1241);const v=(0,h.A)(f,[["render",_]]);var k=v;function m(t,o){return(0,r.uX)(),(0,r.CE)("div")}const L={},C=(0,h.A)(L,[["render",m]]);var b=C,S={components:{AppHeader:k,AppFooter:b}};const G=(0,h.A)(S,[["render",s]]);var y=G,O=e(1387);const E={class:"home"};function A(t,o,e,a,s,n){const c=(0,r.g2)("GoodsGrid");return(0,r.uX)(),(0,r.CE)("div",E,[(0,r.bF)(c)])}const F={class:"catalog"},X={key:0,class:"goods_grid_load loader"},x={key:1,class:"goods__grid"},w={class:"catalog__pages"};function P(t,o,e,a,s,c){const d=(0,r.g2)("GoodCard");return(0,r.uX)(),(0,r.CE)("div",F,[t.getGoods?((0,r.uX)(),(0,r.CE)("div",x,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(t.getGoods.slice(s.startSlice,s.startSlice+10),((t,o)=>((0,r.uX)(),(0,r.Wv)(d,{key:o,goodinfo:t},null,8,["goodinfo"])))),128))])):((0,r.uX)(),(0,r.CE)("p",X," Loading... ")),(0,r.Lk)("div",w,[(0,r.Lk)("button",{onClick:o[0]||(o[0]=t=>s.startSlice-=10),class:"prev__page page button"},(0,n.v_)("<<")),(0,r.Lk)("button",{onClick:o[1]||(o[1]=t=>s.startSlice+=10),class:"next__page page button"},(0,n.v_)(">>"))])])}const j={class:"good__card"},$=["src"],T={class:"card__desc"},I={class:"desc__title desc__text"},J={class:"desc__price desc__text"},N={class:"desc__rating desc__text"},W={class:"rating_stars_bar"},M={class:"card__control"};function R(t,o,e,a,s,c){const d=(0,r.g2)("RouterLink");return(0,r.uX)(),(0,r.CE)("div",j,[(0,r.Lk)("img",{src:e.goodinfo.image,alt:"good picture",class:"card__image"},null,8,$),(0,r.Lk)("div",T,[(0,r.Lk)("p",I,(0,n.v_)(e.goodinfo.title),1),(0,r.Lk)("p",J,"Price: $"+(0,n.v_)(e.goodinfo.price),1),(0,r.Lk)("p",N,[(0,r.eW)("Rating: "+(0,n.v_)(e.goodinfo.rating.rate)+" ",1),(0,r.Lk)("span",W,[(0,r.Lk)("span",{class:"rating__progress",style:(0,n.Tr)(`width: calc(${e.goodinfo.rating.rate/5*100}%)`)},null,4)])])]),(0,r.Lk)("div",M,[(0,r.Lk)("button",{class:"control__cart button",onClick:o[0]||(o[0]=t=>c.addToCart(e.goodinfo.id))},"Add to cart"),(0,r.bF)(d,{class:"control__cart a",to:"/good"+e.goodinfo.id},{default:(0,r.k6)((()=>o[1]||(o[1]=[(0,r.eW)("Learn more")]))),_:1},8,["to"])])])}var Y={data(){return{cartGoods:[]}},props:{goodinfo:Object},methods:{...(0,p.PY)(["addCart","addOldGoods"]),addToCart(t){this.addCart(t),localStorage.cart=JSON.stringify(this.getCart)}},computed:{...(0,p.L8)(["getCart"]),goodsFromLocalStorage(){return JSON.parse(localStorage.getItem("cart")||"[]")}},mounted(){this.addOldGoods(this.goodsFromLocalStorage)}};const K=(0,h.A)(Y,[["render",R]]);var H=K,D={components:{GoodCard:H},mounted(){this.fetchAllGoods(),this.addOldGoods(this.goodsFromLocalStorage)},methods:{...(0,p.PY)(["fetchAllGoods","addOldGoods"])},computed:{...(0,p.L8)(["getGoods"]),goodsFromLocalStorage(){return JSON.parse(localStorage.getItem("cart")||"[]")}},data(){return{startSlice:0}}};const U=(0,h.A)(D,[["render",P]]);var V=U,q={name:"HomeView",components:{GoodsGrid:V}};const z=(0,h.A)(q,[["render",A]]);var B=z;const Q={class:"good__view"},Z={key:0},tt={key:1,class:"good__expanded"},ot={class:"good__picture container"},et=["src"],at={class:"good__info"},rt={class:"good_main_info"},st={class:"good_info_header"},nt={class:"good_info_description"},ct={class:"good_additional_info"},dt={class:"good_info_rate good__rating"},it={class:"good_info_count good__rating"};function lt(t,o,e,a,s,c){return(0,r.uX)(),(0,r.CE)("div",Q,[s.goodinfo?((0,r.uX)(),(0,r.CE)("div",tt,[(0,r.Lk)("div",ot,[(0,r.Lk)("img",{src:s.goodinfo.image,alt:"good picture",class:"good__picture picture"},null,8,et)]),(0,r.Lk)("div",at,[(0,r.Lk)("div",rt,[(0,r.Lk)("h1",st,(0,n.v_)(s.goodinfo.title),1),(0,r.Lk)("p",nt,"Description: "+(0,n.v_)(s.goodinfo.description),1)]),(0,r.Lk)("div",ct,[(0,r.Lk)("p",dt,"Rating: "+(0,n.v_)("⭐".repeat(Math.round(s.goodinfo.rating.rate)))+" "+(0,n.v_)(s.goodinfo.rating.rate),1),(0,r.Lk)("p",it,"👤: "+(0,n.v_)(s.goodinfo.rating.count),1),(0,r.Lk)("button",{class:"good__cart button",onClick:o[0]||(o[0]=t=>c.addToCart(s.goodinfo.id))},"Add to cart")])])])):((0,r.uX)(),(0,r.CE)("p",Z," Loading... "))])}var gt={mounted(){this.axios.get(`https://fakestoreapi.com/products/${this.$route.params.id}`).then((t=>{this.goodinfo=t.data,console.log(this.goodinfo)})),this.addOldGoods(this.goodsFromLocalStorage)},data(){return{goodinfo:null}},methods:{...(0,p.PY)(["addOldGoods","addCart"]),addToCart(t){this.addCart(t),localStorage.cart=JSON.stringify(this.getCart)}},computed:{...(0,p.L8)(["getCart"]),goodsFromLocalStorage(){return JSON.parse(localStorage.getItem("cart")||"[]")}}};const ut=(0,h.A)(gt,[["render",lt]]);var _t=ut;const pt={class:"cart__view"},ft={key:0},ht={key:1,class:"cart__grid"},vt=["src"],kt={class:"card__desc"},mt={class:"desc__title desc__text"},Lt={class:"desc__price desc__text"},Ct={class:"desc__rating desc__text"},bt={class:"rating_stars_bar"},St={class:"card__control"},Gt=["onClick"],yt={class:"catalog__pages"};function Ot(t,o,e,a,s,c){const d=(0,r.g2)("RouterLink");return(0,r.uX)(),(0,r.CE)("div",pt,[o[3]||(o[3]=(0,r.Lk)("h1",{class:"cart_view_header"},"Cart",-1)),0==s.cartGoods.length?((0,r.uX)(),(0,r.CE)("p",ft," Loading... ")):((0,r.uX)(),(0,r.CE)("div",ht,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(s.cartGoods.slice(s.startSlice,s.startSlice+10),((t,e)=>((0,r.uX)(),(0,r.CE)("div",{class:"good__card",key:e},[(0,r.Lk)("img",{src:t.image,alt:"good picture",class:"card__image"},null,8,vt),(0,r.Lk)("div",kt,[(0,r.Lk)("p",mt,(0,n.v_)(t.title),1),(0,r.Lk)("p",Lt,"Price: $"+(0,n.v_)(t.price),1),(0,r.Lk)("p",Ct,[(0,r.eW)("Rating: "+(0,n.v_)(t.rating.rate)+" ",1),(0,r.Lk)("span",bt,[(0,r.Lk)("span",{class:"rating__progress",style:(0,n.Tr)(`width: calc(${t.rating.rate/5*100}%)`)},null,4)])])]),(0,r.Lk)("div",St,[(0,r.bF)(d,{class:"control__cart a",to:"/good"+t.id},{default:(0,r.k6)((()=>o[2]||(o[2]=[(0,r.eW)("Learn more")]))),_:2},1032,["to"]),(0,r.Lk)("button",{class:"control__cart good_delete button",onClick:t=>c.deleteGood(e)},"Delete",8,Gt)])])))),128))])),(0,r.Lk)("div",yt,[(0,r.Lk)("button",{onClick:o[0]||(o[0]=t=>s.startSlice-=10),class:"prev__page page button"},(0,n.v_)("<<")),(0,r.Lk)("button",{onClick:o[1]||(o[1]=t=>s.startSlice+=10),class:"next__page page button"},(0,n.v_)(">>"))])])}e(4114);var Et={data(){return{cartGoodsStorage:[],cartGoods:[],startSlice:0}},mounted(){this.cartGoodsStorage=this.goodsFromLocalStorage,this.getCartGoods(),this.addOldGoods(this.goodsFromLocalStorage)},methods:{...(0,p.PY)(["addOldGoods","deleteCart"]),async getCartGoods(){for(let t of this.cartGoodsStorage)await this.$http.get(`https://fakestoreapi.com/products/${t}`).then((t=>{this.cartGoods.push(t.data)}))},deleteGood(t){this.cartGoods.splice(t,1),this.cartGoodsStorage.splice(t,1),localStorage.setItem("cart",JSON.stringify(this.cartGoodsStorage))}},computed:{goodsFromLocalStorage(){return JSON.parse(localStorage.getItem("cart")||"[]")}}};const At=(0,h.A)(Et,[["render",Ot]]);var Ft=At;const Xt=[{path:"/",name:"home",component:B},{path:"#/good:id",name:"goodpage",component:_t},{path:"#/cart",name:"cart",component:Ft}],xt=(0,O.aE)({history:(0,O.LA)("/fake_store_prod/"),routes:Xt});var wt=xt,Pt=e(4373),jt=(0,p.y$)({state:{goods:null,cart:[]},getters:{getGoods(t){return t.goods},getCart(t){return t.cart}},mutations:{fetchAllGoods(t){Pt.A.get("https://fakestoreapi.com/products").then((o=>{t.goods=o.data}))},fetchCategoryGoods(t,o){Pt.A.get(`https://fakestoreapi.com/products/category/${o}`).then((o=>{t.goods=o.data}))},addCart(t,o){t.cart.push(o)},deleteCart(t,o){t.cart.splice(o,1)},addOldGoods(t,o){t.cart=o}},actions:{},modules:{}}),$t=e(6942);(0,a.Ef)(y).use(jt).use(wt).use($t.A,Pt.A).mount("#app")}},o={};function e(a){var r=o[a];if(void 0!==r)return r.exports;var s=o[a]={id:a,loaded:!1,exports:{}};return t[a].call(s.exports,s,s.exports,e),s.loaded=!0,s.exports}e.m=t,function(){e.amdO={}}(),function(){var t=[];e.O=function(o,a,r,s){if(!a){var n=1/0;for(l=0;l<t.length;l++){a=t[l][0],r=t[l][1],s=t[l][2];for(var c=!0,d=0;d<a.length;d++)(!1&s||n>=s)&&Object.keys(e.O).every((function(t){return e.O[t](a[d])}))?a.splice(d--,1):(c=!1,s<n&&(n=s));if(c){t.splice(l--,1);var i=r();void 0!==i&&(o=i)}}return o}s=s||0;for(var l=t.length;l>0&&t[l-1][2]>s;l--)t[l]=t[l-1];t[l]=[a,r,s]}}(),function(){e.n=function(t){var o=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(o,{a:o}),o}}(),function(){e.d=function(t,o){for(var a in o)e.o(o,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:o[a]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.hmd=function(t){return t=Object.create(t),t.children||(t.children=[]),Object.defineProperty(t,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+t.id)}}),t}}(),function(){e.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)}}(),function(){e.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={524:0};e.O.j=function(o){return 0===t[o]};var o=function(o,a){var r,s,n=a[0],c=a[1],d=a[2],i=0;if(n.some((function(o){return 0!==t[o]}))){for(r in c)e.o(c,r)&&(e.m[r]=c[r]);if(d)var l=d(e)}for(o&&o(a);i<n.length;i++)s=n[i],e.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return e.O(l)},a=self["webpackChunkfake_store"]=self["webpackChunkfake_store"]||[];a.forEach(o.bind(null,0)),a.push=o.bind(null,a.push.bind(a))}();var a=e.O(void 0,[504],(function(){return e(5590)}));a=e.O(a)})();
//# sourceMappingURL=app.4bffba38.js.map