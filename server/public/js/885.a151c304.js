"use strict";(self["webpackChunkclient"]=self["webpackChunkclient"]||[]).push([[885],{9500:function(e,t,s){var o=s(3390);class a{getAll(){return o.Z.get("/uom")}get(e){return o.Z.get(`/uom/${e}`)}create(e){return o.Z.post("/uom",e)}update(e,t){return o.Z.put(`/uom/${e}`,t)}delete(e){return o.Z["delete"](`/uom/${e}`)}deleteAll(){return o.Z["delete"]("/uom")}findByLabel(e){return o.Z.get(`/uom?descs=${e}`)}}t["Z"]=new a},5865:function(e,t,s){s.r(t),s.d(t,{default:function(){return y}});var o=s(3625),a=s(3381),l=s(5893),i=s(5255),c=s(2667),r=s(6530),d=s(837),n=s(3749),u=s(3240),m=s(9088),h=s(7894),g=s(2515),f=s(9007),Z=function(){var e=this,t=e._self._c;return t("div",[t(o.Z,{attrs:{flat:""}},[t(h.Z,{attrs:{justify:"center"}},[t(n.Z,{attrs:{persistent:"","max-width":"900px"},scopedSlots:e._u([{key:"activator",fn:function({on:s,attrs:o}){return[t(g.Z),t(a.Z,e._g(e._b({attrs:{color:"primary",dark:"",icon:""},on:{click:e.newuom}},"v-btn",o,!1),s),[t(m.Z,[e._v("mdi-plus-circle")])],1)]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[t(l.Z,[t(i.EB,[e.editedMode?t("span",{staticClass:"text-h5"},[e._v("Edit uom")]):t("span",{staticClass:"text-h5"},[e._v("Tambah uom")])]),t(i.ZB,[t(r.Z,[t(u.Z,{ref:"form",attrs:{"lazy-validation":""}},[t(f.Z,{attrs:{rules:[e=>!!e||"Description is required"],label:"Desc",required:""},model:{value:e.uom.desc,callback:function(t){e.$set(e.uom,"desc",t)},expression:"uom.desc"}}),t(f.Z,{attrs:{rules:[e=>!!e||"Iso Code is required"],label:"Iso Code",required:""},model:{value:e.uom.code,callback:function(t){e.$set(e.uom,"code",t)},expression:"uom.code"}})],1)],1),t("small",[e._v("*masukan data dengan benar")])],1),t(i.h7,[t(g.Z),t(a.Z,{attrs:{color:"blue darken-1",text:""},on:{click:e.closeDialog}},[e._v(" Close ")]),t(a.Z,{attrs:{color:"blue darken-1",text:""},on:{click:function(t){return e.saveuom(e.editedMode)}}},[e._v(" Save ")])],1)],1)],1)],1)],1),t(r.Z,{staticClass:"grey lighten-5 mb-6"},[t(d.Z,{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.Uoms,search:e.search,"items-per-page":10},scopedSlots:e._u([{key:"item.default",fn:function({item:s}){return[t(c.Z,{model:{value:s.default,callback:function(t){e.$set(s,"default",t)},expression:"item.default"}})]}},{key:"item.actions",fn:function({item:s}){return[t(m.Z,{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.edituom(s.id)}}},[e._v("mdi-pencil")]),t(m.Z,{attrs:{small:""},on:{click:function(t){return e.deleteuom(s.id)}}},[e._v("mdi-delete")])]}}],null,!0)})],1)],1)},v=[],p=s(9500),b={data:()=>({dialog:!1,dialogTitle:"",btnTitle:"",submitted:!1,editedMode:void 0,search:"",headers:[{text:"Desc",align:"start",value:"desc",class:"primary"},{text:"Iso Code",value:"code",class:"primary"},{text:"Actions",value:"actions",sortable:!1,class:"primary"}],Uoms:[],uom:{desc:"",code:""}}),mounted(){this.retrieveUoms()},methods:{retrieveUoms(){p.Z.getAll().then((e=>{this.Uoms=e.data.uom.map(this.getDisplayUoms)})).catch((e=>{console.log(e)}))},refreshList(){this.retrieveUoms()},getDisplayUoms(e){return{id:e.id,desc:e.desc,code:e.code}},saveuom(e){var t={desc:this.uom.desc,code:this.uom.code};console.log(t),e?p.Z.update(e,t).then((e=>{console.log(e.data.message),this.refreshList(),this.closeDialog()})).catch((e=>{console.log(e)})):p.Z.create(t).then((e=>{console.log(e.data),this.submitted=!0,this.refreshList(),this.clearuom(),this.closeDialog()})).catch((e=>{console.log(e)}))},edituom(e){this.editedMode=e,p.Z.get(e).then((e=>{this.uom={desc:e.data.desc,code:e.data.code},this.dialog=!0})).catch((e=>{console.log(e)}))},deleteuom(e){p.Z["delete"](e).then((()=>{this.refreshList()})).catch((e=>{console.log(e)}))},newuom(){this.submitted=!1,this.dialog=!0,this.clearuom()},clearuom(){this.uom={desc:"",code:""}},closeDialog(){this.dialog=!1,this.editedMode=void 0,this.clearuom()}}},k=b,x=s(1001),_=(0,x.Z)(k,Z,v,!1,null,null,null),y=_.exports}}]);
//# sourceMappingURL=885.a151c304.js.map