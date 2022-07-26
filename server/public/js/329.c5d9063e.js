"use strict";(self["webpackChunkclient"]=self["webpackChunkclient"]||[]).push([[329],{134:function(t,e,i){var s=i(3390);class r{getAll(){return s.Z.get("/categories")}get(t){return s.Z.get(`/categories/${t}`)}create(t){return s.Z.post("/categories",t)}update(t,e){return s.Z.put(`/categories/${t}`,e)}delete(t){return s.Z["delete"](`/categories/${t}`)}deleteAll(){return s.Z["delete"]("/categories")}findByLabel(t){return s.Z.get(`/categories?desc=${t}`)}}e["Z"]=new r},4918:function(t,e,i){var s=i(3390);class r{getAll(){return s.Z.get("/products")}get(t){return s.Z.get(`/products/${t}`)}create(t){return s.Z.post("/products",t)}update(t,e){return s.Z.put(`/products/${t}`,e)}delete(t){return s.Z["delete"](`/products/${t}`)}deleteAll(){return s.Z["delete"]("/products")}findByLabel(t){return s.Z.get(`/products?desc=${t}`)}}e["Z"]=new r},9500:function(t,e,i){var s=i(3390);class r{getAll(){return s.Z.get("/uom")}get(t){return s.Z.get(`/uom/${t}`)}create(t){return s.Z.post("/uom",t)}update(t,e){return s.Z.put(`/uom/${t}`,e)}delete(t){return s.Z["delete"](`/uom/${t}`)}deleteAll(){return s.Z["delete"]("/uom")}findByLabel(t){return s.Z.get(`/uom?descs=${t}`)}}e["Z"]=new r},4753:function(t,e,i){i.r(e),i.d(e,{default:function(){return x}});var s=i(3625),r=i(3381),a=i(5893),n=i(5255),o=i(6530),l=i(837),c=i(3749),d=i(3240),u=i(9088),h=i(7894),p=i(3156),m=i(2515),g=i(9007),v=function(){var t=this,e=t._self._c;return e("div",[e(s.Z,{attrs:{flat:""}},[e(h.Z,{attrs:{justify:"center"}},[e(c.Z,{attrs:{persistent:"","max-width":"900px"},scopedSlots:t._u([{key:"activator",fn:function({on:i,attrs:s}){return[e(m.Z),e(r.Z,t._g(t._b({attrs:{color:"primary",dark:"",icon:""},on:{click:t.newproduct}},"v-btn",s,!1),i),[e(u.Z,[t._v("mdi-plus-circle")])],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[e(a.Z,[e(n.EB,[t.editedMode?e("span",{staticClass:"text-h5"},[t._v("Edit Product")]):e("span",{staticClass:"text-h5"},[t._v("Tambah Product")])]),e(n.ZB,[e(o.Z,[e(d.Z,{ref:"form",attrs:{"lazy-validation":""}},[e(g.Z,{attrs:{rules:[t=>!!t||"Description is required"],label:"Keyname",required:"",outlined:""},model:{value:t.product.keyname,callback:function(e){t.$set(t.product,"keyname",e)},expression:"product.keyname"}}),e(g.Z,{attrs:{rules:[t=>!!t||"Description is required"],label:"Desc",required:"",outlined:""},model:{value:t.product.desc,callback:function(e){t.$set(t.product,"desc",e)},expression:"product.desc"}}),e(p.Z,{attrs:{items:t.uoms,"item-text":"code","item-value":"id",rules:[t=>!!t||"Uom is required"],label:"Uom",required:"",outlined:""},model:{value:t.product.uomId,callback:function(e){t.$set(t.product,"uomId",e)},expression:"product.uomId"}}),e(p.Z,{attrs:{items:t.categories,"item-text":"desc","item-value":"id",rules:[t=>!!t||"Category is required"],label:"Category",required:"",outlined:""},model:{value:t.product.categoryId,callback:function(e){t.$set(t.product,"categoryId",e)},expression:"product.categoryId"}}),e(g.Z,{attrs:{label:"Purchase Price",outlined:""},model:{value:t.product.purchase_price,callback:function(e){t.$set(t.product,"purchase_price",e)},expression:"product.purchase_price"}}),e(g.Z,{attrs:{label:"Sales Price",outlined:""},model:{value:t.product.sales_price,callback:function(e){t.$set(t.product,"sales_price",e)},expression:"product.sales_price"}})],1)],1),e("small",[t._v("*masukan data dengan benar")])],1),e(n.h7,[e(m.Z),e(r.Z,{attrs:{color:"blue darken-1",text:""},on:{click:t.closeDialog}},[t._v(" Close ")]),e(r.Z,{attrs:{color:"blue darken-1",text:""},on:{click:function(e){return t.saveproduct(t.editedMode)}}},[t._v(" Save ")])],1)],1)],1)],1)],1),e(o.Z,{staticClass:"grey lighten-5 mb-6"},[e(l.Z,{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.products,search:t.search,"items-per-page":10},scopedSlots:t._u([{key:"item.actions",fn:function({item:i}){return[e(u.Z,{staticClass:"mr-2",attrs:{small:""},on:{click:function(e){return t.editproduct(i.id)}}},[t._v("mdi-pencil")]),e(u.Z,{attrs:{small:""},on:{click:function(e){return t.deleteproduct(i.id)}}},[t._v("mdi-delete")])]}}],null,!0)})],1)],1)},f=[],y=i(4918),Z=i(9500),_=i(134),b={data:()=>({dialog:!1,dialogTitle:"",btnTitle:"",submitted:!1,editedMode:void 0,search:"",headers:[{text:"Keyname",value:"keyname",class:"primary"},{text:"Desc",align:"start",value:"desc",class:"primary"},{text:"Uom",value:"uoms",class:"primary"},{text:"Category",value:"categories",class:"primary"},{text:"Purchase Price",value:"purchase_price",class:"primary"},{text:"Sales Price",value:"sales_price",class:"primary"},{text:"Actions",value:"actions",sortable:!1,class:"primary"}],products:[],uoms:[],categories:[],product:{keyname:"",desc:"",uomId:"",categoryId:"",purchase_price:"",sales_price:""}}),mounted(){this.refreshList()},methods:{retrieveproducts(){y.Z.getAll().then((t=>{this.products=t.data.products.map(this.getDisplayproducts)})).catch((t=>{console.log(t)}))},retrieveuoms(){Z.Z.getAll().then((t=>{this.uoms=t.data.uom}))},retrievecategories(){_.Z.getAll().then((t=>{this.categories=t.data.categories}))},refreshList(){this.retrieveproducts(),this.retrieveuoms(),this.retrievecategories()},getDisplayproducts(t){return{id:t.id,keyname:t.keyname,desc:t.desc,uoms:t.uoms.code,categories:t.categories.desc,purchase_price:new Intl.NumberFormat("id",{style:"currency",currency:"IDR"}).format(t.purchase_price),sales_price:new Intl.NumberFormat("id",{style:"currency",currency:"IDR"}).format(t.sales_price)}},saveproduct(t){var e={keyname:this.product.keyname,desc:this.product.desc,uomId:this.product.uomId,categoryId:this.product.categoryId,purchase_price:this.product.purchase_price,sales_price:this.product.sales_price};t?y.Z.update(t,e).then((t=>{console.log(t.data.message),this.refreshList(),this.closeDialog()})).catch((t=>{console.log(t)})):y.Z.create(e).then((()=>{this.submitted=!0,this.refreshList(),this.clearproduct(),this.closeDialog()})).catch((t=>{console.log(t)}))},editproduct(t){this.editedMode=t,y.Z.get(t).then((t=>{this.product={keyname:t.data.keyname,desc:t.data.desc,uomId:t.data.uoms,categoryId:t.data.categories,purchase_price:t.data.purchase_price,sales_price:t.data.sales_price},console.log(this.product),this.dialog=!0})).catch((t=>{console.log(t)}))},deleteproduct(t){y.Z["delete"](t).then((()=>{this.refreshList()})).catch((t=>{console.log(t)}))},newproduct(){this.submitted=!1,this.dialog=!0,this.product={keyname:Math.floor((new Date).valueOf()*Math.random())}},clearproduct(){this.product={keyname:"",desc:"",uomId:"",categoryId:"",purchase_price:"",sales_price:""}},closeDialog(){this.dialog=!1,this.editedMode=void 0,this.clearproduct()}}},k=b,w=i(1001),$=(0,w.Z)(k,v,f,!1,null,null,null),x=$.exports},5255:function(t,e,i){i.d(e,{EB:function(){return l},ZB:function(){return o},h7:function(){return a}});var s=i(5893),r=i(8131);const a=(0,r.Ji)("v-card__actions"),n=(0,r.Ji)("v-card__subtitle"),o=(0,r.Ji)("v-card__text"),l=(0,r.Ji)("v-card__title");s.Z},3749:function(t,e,i){i.d(e,{Z:function(){return g}});var s=i(9770),r=i(7561),a=i(4665),n=i(9556),o=i(8605),l=i(2893),c=i(2389),d=i(3664),u=i(5530),h=i(8219),p=i(8131);const m=(0,u.Z)(a.Z,n.Z,o.Z,l.Z,c.Z,r.Z);var g=m.extend({name:"v-dialog",directives:{ClickOutside:d.Z},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:[String,Number],noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:[String,Number]},data(){return{activatedBy:null,animate:!1,animateTimeout:-1,stackMinZIndex:200,previousActiveElement:null}},computed:{classes(){return{[`v-dialog ${this.contentClass}`.trim()]:!0,"v-dialog--active":this.isActive,"v-dialog--persistent":this.persistent,"v-dialog--fullscreen":this.fullscreen,"v-dialog--scrollable":this.scrollable,"v-dialog--animated":this.animate}},contentClasses(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive(t){var e;t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null==(e=this.previousActiveElement)||e.focus())},fullscreen(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created(){this.$attrs.hasOwnProperty("full-width")&&(0,h.Jk)("full-width",this)},beforeMount(){this.$nextTick((()=>{this.isBooted=this.isActive,this.isActive&&this.show()}))},beforeDestroy(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick(){this.animate=!1,this.$nextTick((()=>{this.animate=!0,window.clearTimeout(this.animateTimeout),this.animateTimeout=window.setTimeout((()=>this.animate=!1),150)}))},closeConditional(t){const e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):o.Z.options.methods.hideScroll.call(this)},show(){!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((()=>{this.$nextTick((()=>{var t,e;null!=(t=this.$refs.dialog)&&t.contains(document.activeElement)||(this.previousActiveElement=document.activeElement,null==(e=this.$refs.dialog)||e.focus());this.bind()}))}))},bind(){window.addEventListener("focusin",this.onFocusin)},unbind(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown(t){if(t.keyCode===p.Do.esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;const t=this.getActivator();this.$nextTick((()=>t&&t.focus()))}this.$emit("keydown",t)},onFocusin(t){if(!t||!this.retainFocus)return;const e=t.target;if(e&&this.$refs.dialog&&![document,this.$refs.dialog].includes(e)&&!this.$refs.dialog.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((t=>t.contains(e)))){const t=this.$refs.dialog.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),e=[...t].find((t=>!t.hasAttribute("disabled")));e&&e.focus()}},genContent(){return this.showLazyContent((()=>[this.$createElement(s.Z,{props:{root:!0,light:this.light,dark:this.dark}},[this.$createElement("div",{class:this.contentClasses,attrs:{role:"dialog","aria-modal":this.hideOverlay?void 0:"true",...this.getScopeIdAttrs()},on:{keydown:this.onKeydown},style:{zIndex:this.activeZIndex},ref:"content"},[this.genTransition()])])]))},genTransition(){const t=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[t]):t},genInnerContent(){const t={class:this.classes,attrs:{tabindex:this.isActive?0:void 0},ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(t.style={...t.style,maxWidth:(0,p.kb)(this.maxWidth),width:(0,p.kb)(this.width)}),this.$createElement("div",t,this.getContentSlot())}},render(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},[this.genActivator(),this.genContent()])}})},3240:function(t,e,i){var s=i(5530),r=i(6141),a=i(950);e["Z"]=(0,s.Z)(r.Z,(0,a.J)("form")).extend({name:"v-form",provide(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:()=>({inputs:[],watchers:[],errorBag:{}}),watch:{errorBag:{handler(t){const e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput(t){const e=t=>t.$watch("hasError",(e=>{this.$set(this.errorBag,t._uid,e)}),{immediate:!0}),i={_uid:t._uid,valid:()=>{},shouldValidate:()=>{}};return this.lazyValidation?i.shouldValidate=t.$watch("shouldValidate",(s=>{s&&(this.errorBag.hasOwnProperty(t._uid)||(i.valid=e(t)))})):i.valid=e(t),i},validate(){return 0===this.inputs.filter((t=>!t.validate(!0))).length},reset(){this.inputs.forEach((t=>t.reset())),this.resetErrorBag()},resetErrorBag(){this.lazyValidation&&setTimeout((()=>{this.errorBag={}}),0)},resetValidation(){this.inputs.forEach((t=>t.resetValidation())),this.resetErrorBag()},register(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister(t){const e=this.inputs.find((e=>e._uid===t._uid));if(!e)return;const i=this.watchers.find((t=>t._uid===e._uid));i&&(i.valid(),i.shouldValidate()),this.watchers=this.watchers.filter((t=>t._uid!==e._uid)),this.inputs=this.inputs.filter((t=>t._uid!==e._uid)),this.$delete(this.errorBag,e._uid)}},render(t){return t("form",{staticClass:"v-form",attrs:{novalidate:!0,...this.attrs$},on:{submit:t=>this.$emit("submit",t)}},this.$slots.default)}})},7894:function(t,e,i){i(1884);var s=i(144),r=i(7559),a=i(8131);const n=["sm","md","lg","xl"],o=["start","end","center"];function l(t,e){return n.reduce(((i,s)=>(i[t+(0,a.jC)(s)]=e(),i)),{})}const c=t=>[...o,"baseline","stretch"].includes(t),d=l("align",(()=>({type:String,default:null,validator:c}))),u=t=>[...o,"space-between","space-around"].includes(t),h=l("justify",(()=>({type:String,default:null,validator:u}))),p=t=>[...o,"space-between","space-around","stretch"].includes(t),m=l("alignContent",(()=>({type:String,default:null,validator:p}))),g={align:Object.keys(d),justify:Object.keys(h),alignContent:Object.keys(m)},v={align:"align",justify:"justify",alignContent:"align-content"};function f(t,e,i){let s=v[t];if(null!=i){if(e){const i=e.replace(t,"");s+=`-${i}`}return s+=`-${i}`,s.toLowerCase()}}const y=new Map;e["Z"]=s.ZP.extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:c},...d,justify:{type:String,default:null,validator:u},...h,alignContent:{type:String,default:null,validator:p},...m},render(t,{props:e,data:i,children:s}){let a="";for(const r in e)a+=String(e[r]);let n=y.get(a);if(!n){let t;for(t in n=[],g)g[t].forEach((i=>{const s=e[i],r=f(t,i,s);r&&n.push(r)}));n.push({"no-gutters":e.noGutters,"row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),y.set(a,n)}return t(e.tag,(0,r.ZP)(i,{staticClass:"row",class:n}),s)}})}}]);
//# sourceMappingURL=329.c5d9063e.js.map