"use strict";(self["webpackChunkclient"]=self["webpackChunkclient"]||[]).push([[479],{1479:function(t,e,i){i.r(e),i.d(e,{default:function(){return C}});var s=i(2689),n=i(3381),a=i(5893),l=i(5255),o=i(7024),r=i(6530),h=i(3749),c=(i(9027),i(7358)),d=(0,c.Z)("flex"),u=i(9088),m=(0,c.Z)("layout"),p=i(7894),g=i(2515),f=i(9007),v=function(){var t=this,e=t._self._c;return e("div",[e(a.Z,{staticClass:"d-flex flex-row-reverse",attrs:{flat:"",tile:""}},[e(h.Z,{attrs:{persistent:"","max-width":"600px"},scopedSlots:t._u([{key:"activator",fn:function({on:i,attrs:s}){return[e(n.Z,t._g(t._b({attrs:{color:"primary",dark:"",icon:""}},"v-btn",s,!1),i),[e(u.Z,[t._v("mdi-plus")])],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[e(a.Z,[e(l.EB,[e("span",{staticClass:"text-h5"},[t._v("Add Menu")])]),e(l.ZB,[e(r.Z,[e(p.Z,[e(o.Z,{attrs:{cols:"12"}},[e(f.Z,{attrs:{label:"Label",required:""}})],1),e(o.Z,{attrs:{cols:"12"}},[e(f.Z,{attrs:{label:"Route",required:""}})],1),e(o.Z,{attrs:{cols:"12"}},[e(f.Z,{attrs:{label:"icon",required:""}})],1),e(o.Z,{attrs:{cols:"12"}},[e(s.Z,{attrs:{items:t.entries,label:"Parent Menu",loading:t.isLoading,"search-input":t.search,"hide-no-data":"","hide-selected":"","item-text":"label","item-value":"id",placeholder:"Start typing to Search","prepend-icon":"mdi-database-search","return-object":""},on:{"update:searchInput":function(e){t.search=e},"update:search-input":function(e){t.search=e}}})],1)],1)],1),e("small",[t._v("*indicates required field")])],1),e(l.h7,[e(g.Z),e(n.Z,{attrs:{color:"blue darken-1",text:""},on:{click:function(e){t.dialog=!1}}},[t._v(" Close ")]),e(n.Z,{attrs:{color:"blue darken-1",text:""},on:{click:function(e){t.dialog=!1}}},[t._v(" Save ")])],1)],1)],1)],1),e(r.Z,[e(m,{attrs:{wrap:""}},[e(d,{attrs:{xs12:""}},[t._v(" "+t._s(t.model)+" "),e(s.Z,{attrs:{items:t.entries,loading:t.isLoading,"search-input":t.search,"hide-no-data":"","hide-selected":"","item-text":"label","item-value":"id",label:"Menus",placeholder:"Start typing to Search","prepend-icon":"mdi-database-search","return-object":"",chips:"","deletable-chips":"",multiple:""},on:{"update:searchInput":function(e){t.search=e},"update:search-input":function(e){t.search=e}},model:{value:t.model,callback:function(e){t.model=e},expression:"model"}})],1)],1)],1)],1)},I=[],y=i(2535),S={name:"MenuView",data:()=>({dialog:!1,items:[],entries:[],isLoading:!1,model:[{route:"",label:"",icon:"",subMenu:[],id:""}],search:null}),async created(){try{const t=await y.Z.getAllMenu();this.items=t.data.menus}catch(t){console.log(t.message)}},watch:{search(t){this.entries.length>0||this.isLoading||(this.isLoading=!0,fetch("http://localhost:8000/api/menus").then((t=>t.json())).then((t=>{const{menus:e}=t;this.entries=e})).catch((t=>{console.log(t)})).finally((()=>this.isLoading=!1)))}}},x=S,b=i(1001),Z=(0,b.Z)(x,v,I,!1,null,null,null),C=Z.exports},2689:function(t,e,i){i.d(e,{Z:function(){return r}});var s=i(3156),n=i(9007),a=i(7559),l=i(8131);const o={...s.l,offsetY:!0,offsetOverflow:!0,transition:!1};var r=s.Z.extend({name:"v-autocomplete",props:{allowOverflow:{type:Boolean,default:!0},autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:(t,e,i)=>i.toLocaleLowerCase().indexOf(e.toLocaleLowerCase())>-1},hideNoData:Boolean,menuProps:{type:s.Z.options.props.menuProps.type,default:()=>o},noFilter:Boolean,searchInput:{type:String}},data(){return{lazySearch:this.searchInput}},computed:{classes(){return{...s.Z.options.computed.classes.call(this),"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1}},computedItems(){return this.filteredItems},selectedValues(){return this.selectedItems.map((t=>this.getValue(t)))},hasDisplayedItems(){return this.hideSelected?this.filteredItems.some((t=>!this.hasItem(t))):this.filteredItems.length>0},currentRange(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems(){return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((t=>{const e=(0,l.qF)(t,this.itemText),i=null!=e?String(e):"";return this.filter(t,String(this.internalSearch),i)}))},internalSearch:{get(){return this.lazySearch},set(t){this.lazySearch!==t&&(this.lazySearch=t,this.$emit("update:search-input",t))}},isAnyValueAllowed(){return!1},isDirty(){return this.searchIsDirty||this.selectedItems.length>0},isSearching(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps(){const t=s.Z.options.computed.$_menuProps.call(this);return t.contentClass=`v-autocomplete__content ${t.contentClass||""}`.trim(),{...o,...t}},searchIsDirty(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem(){return this.multiple?null:this.selectedItems.find((t=>this.valueComparator(this.getValue(t),this.getValue(this.internalValue))))},listData(){const t=s.Z.options.computed.listData.call(this);return t.props={...t.props,items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch},t}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused(t){t?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.blur(),this.updateSelf())},isMenuActive(t){!t&&this.hasSlot&&(this.lazySearch=null)},items(t,e){e&&e.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!t.length||this.activateMenu()},searchInput(t){this.lazySearch=t},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created(){this.setSearch()},destroyed(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged(t,e){if(t!==e){if(!this.autoSelectFirst){const i=e[this.$refs.menu.listIndex];i?this.setMenuIndex(t.findIndex((t=>t===i))):this.setMenuIndex(-1),this.$emit("update:list-index",this.$refs.menu.listIndex)}this.$nextTick((()=>{this.internalSearch&&(1===t.length||this.autoSelectFirst)&&(this.$refs.menu.getTiles(),this.autoSelectFirst&&t.length&&(this.setMenuIndex(0),this.$emit("update:list-index",this.$refs.menu.listIndex)))}))}},onInternalSearchChanged(){this.updateMenuDimensions()},updateMenuDimensions(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex(t){this.searchIsDirty||(this.multiple&&t===l.Do.left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&t===l.Do.right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:t!==l.Do.backspace&&t!==l.Do["delete"]||this.deleteCurrentItem())},deleteCurrentItem(){const t=this.selectedIndex,e=this.selectedItems[t];if(!this.isInteractive||this.getDisabled(e))return;const i=this.selectedItems.length-1;if(-1===this.selectedIndex&&0!==i)return void(this.selectedIndex=i);const s=this.selectedItems.length,n=t!==s-1?t:t-1,a=this.selectedItems[n];a?this.selectItem(e):this.setValue(this.multiple?[]:null),this.selectedIndex=n},clearableCallback(){this.internalSearch=null,s.Z.options.methods.clearableCallback.call(this)},genInput(){const t=n.Z.options.methods.genInput.call(this);return t.data=(0,a.ZP)(t.data,{attrs:{"aria-activedescendant":(0,l.vO)(this.$refs.menu,"activeTile.id"),autocomplete:(0,l.vO)(t.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),t},genInputSlot(){const t=s.Z.options.methods.genInputSlot.call(this);return t.data.attrs.role="combobox",t},genSelections(){return this.hasSlot||this.multiple?s.Z.options.methods.genSelections.call(this):[]},onClick(t){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(t.target)||this.activateMenu())},onInput(t){if(this.selectedIndex>-1||!t.target)return;const e=t.target,i=e.value;e.value&&this.activateMenu(),this.multiple||""!==i||this.deleteCurrentItem(),this.internalSearch=i,this.badInput=e.validity&&e.validity.badInput},onKeyDown(t){const e=t.keyCode;!t.ctrlKey&&[l.Do.home,l.Do.end].includes(e)||s.Z.options.methods.onKeyDown.call(this,t),this.changeSelectedIndex(e)},onSpaceDown(t){},onTabDown(t){s.Z.options.methods.onTabDown.call(this,t),this.updateSelf()},onUpDown(t){t.preventDefault(),this.activateMenu()},selectItem(t){s.Z.options.methods.selectItem.call(this,t),this.setSearch()},setSelectedItems(){s.Z.options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch(){this.$nextTick((()=>{this.multiple&&this.internalSearch&&this.isMenuActive||(this.internalSearch=!this.selectedItems.length||this.multiple||this.hasSlot?null:this.getText(this.selectedItem))}))},updateSelf(){(this.searchIsDirty||this.internalValue)&&(this.multiple||this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem(t){return this.selectedValues.indexOf(this.getValue(t))>-1},onCopy(t){var e,i;if(-1===this.selectedIndex)return;const s=this.selectedItems[this.selectedIndex],n=this.getText(s);null==(e=t.clipboardData)||e.setData("text/plain",n),null==(i=t.clipboardData)||i.setData("text/vnd.vuetify.autocomplete.item+plain",n),t.preventDefault()}}})},5255:function(t,e,i){i.d(e,{EB:function(){return r},ZB:function(){return o},h7:function(){return a}});var s=i(5893),n=i(8131);const a=(0,n.Ji)("v-card__actions"),l=(0,n.Ji)("v-card__subtitle"),o=(0,n.Ji)("v-card__text"),r=(0,n.Ji)("v-card__title");s.Z},3749:function(t,e,i){i.d(e,{Z:function(){return g}});var s=i(9770),n=i(7561),a=i(4665),l=i(9556),o=i(8605),r=i(2893),h=i(2389),c=i(3664),d=i(5530),u=i(8219),m=i(8131);const p=(0,d.Z)(a.Z,l.Z,o.Z,r.Z,h.Z,n.Z);var g=p.extend({name:"v-dialog",directives:{ClickOutside:c.Z},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:[String,Number],noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:[String,Number]},data(){return{activatedBy:null,animate:!1,animateTimeout:-1,stackMinZIndex:200,previousActiveElement:null}},computed:{classes(){return{[`v-dialog ${this.contentClass}`.trim()]:!0,"v-dialog--active":this.isActive,"v-dialog--persistent":this.persistent,"v-dialog--fullscreen":this.fullscreen,"v-dialog--scrollable":this.scrollable,"v-dialog--animated":this.animate}},contentClasses(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive(t){var e;t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null==(e=this.previousActiveElement)||e.focus())},fullscreen(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created(){this.$attrs.hasOwnProperty("full-width")&&(0,u.Jk)("full-width",this)},beforeMount(){this.$nextTick((()=>{this.isBooted=this.isActive,this.isActive&&this.show()}))},beforeDestroy(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick(){this.animate=!1,this.$nextTick((()=>{this.animate=!0,window.clearTimeout(this.animateTimeout),this.animateTimeout=window.setTimeout((()=>this.animate=!1),150)}))},closeConditional(t){const e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):o.Z.options.methods.hideScroll.call(this)},show(){!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((()=>{this.$nextTick((()=>{var t,e;null!=(t=this.$refs.dialog)&&t.contains(document.activeElement)||(this.previousActiveElement=document.activeElement,null==(e=this.$refs.dialog)||e.focus());this.bind()}))}))},bind(){window.addEventListener("focusin",this.onFocusin)},unbind(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown(t){if(t.keyCode===m.Do.esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;const t=this.getActivator();this.$nextTick((()=>t&&t.focus()))}this.$emit("keydown",t)},onFocusin(t){if(!t||!this.retainFocus)return;const e=t.target;if(e&&this.$refs.dialog&&![document,this.$refs.dialog].includes(e)&&!this.$refs.dialog.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((t=>t.contains(e)))){const t=this.$refs.dialog.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),e=[...t].find((t=>!t.hasAttribute("disabled")));e&&e.focus()}},genContent(){return this.showLazyContent((()=>[this.$createElement(s.Z,{props:{root:!0,light:this.light,dark:this.dark}},[this.$createElement("div",{class:this.contentClasses,attrs:{role:"dialog","aria-modal":this.hideOverlay?void 0:"true",...this.getScopeIdAttrs()},on:{keydown:this.onKeydown},style:{zIndex:this.activeZIndex},ref:"content"},[this.genTransition()])])]))},genTransition(){const t=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[t]):t},genInnerContent(){const t={class:this.classes,attrs:{tabindex:this.isActive?0:void 0},ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(t.style={...t.style,maxWidth:(0,m.kb)(this.maxWidth),width:(0,m.kb)(this.width)}),this.$createElement("div",t,this.getContentSlot())}},render(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},[this.genActivator(),this.genContent()])}})},7894:function(t,e,i){i(1884);var s=i(144),n=i(7559),a=i(8131);const l=["sm","md","lg","xl"],o=["start","end","center"];function r(t,e){return l.reduce(((i,s)=>(i[t+(0,a.jC)(s)]=e(),i)),{})}const h=t=>[...o,"baseline","stretch"].includes(t),c=r("align",(()=>({type:String,default:null,validator:h}))),d=t=>[...o,"space-between","space-around"].includes(t),u=r("justify",(()=>({type:String,default:null,validator:d}))),m=t=>[...o,"space-between","space-around","stretch"].includes(t),p=r("alignContent",(()=>({type:String,default:null,validator:m}))),g={align:Object.keys(c),justify:Object.keys(u),alignContent:Object.keys(p)},f={align:"align",justify:"justify",alignContent:"align-content"};function v(t,e,i){let s=f[t];if(null!=i){if(e){const i=e.replace(t,"");s+=`-${i}`}return s+=`-${i}`,s.toLowerCase()}}const I=new Map;e["Z"]=s.ZP.extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:h},...c,justify:{type:String,default:null,validator:d},...u,alignContent:{type:String,default:null,validator:m},...p},render(t,{props:e,data:i,children:s}){let a="";for(const n in e)a+=String(e[n]);let l=I.get(a);if(!l){let t;for(t in l=[],g)g[t].forEach((i=>{const s=e[i],n=v(t,i,s);n&&l.push(n)}));l.push({"no-gutters":e.noGutters,"row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),I.set(a,l)}return t(e.tag,(0,n.ZP)(i,{staticClass:"row",class:l}),s)}})}}]);
//# sourceMappingURL=479.6ed1c120.js.map