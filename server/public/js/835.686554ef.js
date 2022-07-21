"use strict";(self["webpackChunkclient"]=self["webpackChunkclient"]||[]).push([[835],{134:function(e,t,a){var s=a(3390);class o{getAll(){return s.Z.get("/categories")}get(e){return s.Z.get(`/categories/${e}`)}create(e){return s.Z.post("/categories",e)}update(e,t){return s.Z.put(`/categories/${e}`,t)}delete(e){return s.Z["delete"](`/categories/${e}`)}deleteAll(){return s.Z["delete"]("/categories")}findByLabel(e){return s.Z.get(`/categories?desc=${e}`)}}t["Z"]=new o},9477:function(e,t,a){a.r(t),a.d(t,{default:function(){return x}});var s=a(3625),o=a(3381),r=a(5893),c=a(5255),i=a(2667),l=a(6530),d=a(837),n=a(3749),g=a(3240),u=a(9088),h=a(7894),m=a(2515),y=a(9007),f=function(){var e=this,t=e._self._c;return t("div",[t(s.Z,{attrs:{flat:""}},[t(h.Z,{attrs:{justify:"center"}},[t(n.Z,{attrs:{persistent:"","max-width":"900px"},scopedSlots:e._u([{key:"activator",fn:function({on:a,attrs:s}){return[t(m.Z),t(o.Z,e._g(e._b({attrs:{color:"primary",dark:"",icon:""},on:{click:e.newcategory}},"v-btn",s,!1),a),[t(u.Z,[e._v("mdi-plus-circle")])],1)]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[t(r.Z,[t(c.EB,[e.editedMode?t("span",{staticClass:"text-h5"},[e._v("Edit uom")]):t("span",{staticClass:"text-h5"},[e._v("Tambah uom")])]),t(c.ZB,[t(l.Z,[t(g.Z,{ref:"form",attrs:{"lazy-validation":""}},[t(y.Z,{attrs:{rules:[e=>!!e||"Iso Code is required"],label:"Iso Code",required:""},model:{value:e.category.code,callback:function(t){e.$set(e.category,"code",t)},expression:"category.code"}}),t(y.Z,{attrs:{rules:[e=>!!e||"Description is required"],label:"Desc",required:""},model:{value:e.category.desc,callback:function(t){e.$set(e.category,"desc",t)},expression:"category.desc"}})],1)],1),t("small",[e._v("*masukan data dengan benar")])],1),t(c.h7,[t(m.Z),t(o.Z,{attrs:{color:"blue darken-1",text:""},on:{click:e.closeDialog}},[e._v(" Close ")]),t(o.Z,{attrs:{color:"blue darken-1",text:""},on:{click:function(t){return e.savecategory(e.editedMode)}}},[e._v(" Save ")])],1)],1)],1)],1)],1),t(l.Z,{staticClass:"grey lighten-5 mb-6"},[t(d.Z,{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.Categories,search:e.search,"items-per-page":10},scopedSlots:e._u([{key:"item.default",fn:function({item:a}){return[t(i.Z,{model:{value:a.default,callback:function(t){e.$set(a,"default",t)},expression:"item.default"}})]}},{key:"item.actions",fn:function({item:a}){return[t(u.Z,{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.editcategory(a.id)}}},[e._v("mdi-pencil")]),t(u.Z,{attrs:{small:""},on:{click:function(t){return e.deletecategory(a.id)}}},[e._v("mdi-delete")])]}}],null,!0)})],1)],1)},Z=[],v=a(134),p={data:()=>({dialog:!1,dialogTitle:"",btnTitle:"",submitted:!1,editedMode:void 0,search:"",headers:[{text:"Code",align:"start",value:"code",class:"primary"},{text:"Desc",value:"desc",class:"primary"},{text:"Actions",value:"actions",sortable:!1,class:"primary"}],Categories:[],category:{code:"",desc:""}}),mounted(){this.retrieveCategories()},methods:{retrieveCategories(){v.Z.getAll().then((e=>{this.Categories=e.data.categories.map(this.getDisplayCategories)})).catch((e=>{console.log(e)}))},refreshList(){this.retrieveCategories()},getDisplayCategories(e){return{id:e.id,code:e.code,desc:e.desc}},savecategory(e){var t={code:this.category.code,desc:this.category.desc};console.log(t),e?v.Z.update(e,t).then((e=>{console.log(e.data.message),this.refreshList(),this.closeDialog()})).catch((e=>{console.log(e)})):v.Z.create(t).then((e=>{console.log(e.data),this.submitted=!0,this.refreshList(),this.clearcategory(),this.closeDialog()})).catch((e=>{console.log(e)}))},editcategory(e){this.editedMode=e,v.Z.get(e).then((e=>{this.category={code:e.data.code,desc:e.data.desc},this.dialog=!0})).catch((e=>{console.log(e)}))},deletecategory(e){v.Z["delete"](e).then((()=>{this.refreshList()})).catch((e=>{console.log(e)}))},newcategory(){this.submitted=!1,this.dialog=!0,this.clearcategory()},clearcategory(){this.category={code:"",desc:""}},closeDialog(){this.dialog=!1,this.editedMode=void 0,this.clearcategory()}}},b=p,k=a(1001),C=(0,k.Z)(b,f,Z,!1,null,null,null),x=C.exports}}]);
//# sourceMappingURL=835.686554ef.js.map