(self["webpackChunkclient"]=self["webpackChunkclient"]||[]).push([[315],{1364:function(e,t){t.createInvoice=async(e,t,s,i)=>{function r(e){return"Rp. "+e.toFixed().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")}let a=r(s),n=r(i),o={orderNo:e.orderNo,dateIssued:new Date(e.dateIssued).toISOString().slice(0,10),partners:e.partners,custName:e.custName,deliverTo:e.deliverTo,deliveryFee:r(e.deliveryFee),discount:r(e.discount),note:e.note,payments:e.payments,paymentDesc:e.paymentDesc,docStatus:e.docStatus,total:e.total},l=[];function d(e){var t=["keyname","shortDesc","qtyOrdered","sales_price","subTotal"],s=[];return s.push([{fillColor:"#3A4D8F",text:"No Produk",style:"tableHeader"},{fillColor:"#3A4D8F",text:"Nama Barang",style:"tableHeader"},{fillColor:"#3A4D8F",text:"QTY",style:"tableHeader"},{fillColor:"#3A4D8F",text:"Harga",style:"tableHeader"},{fillColor:"#3A4D8F",text:"Sub Total",style:"tableHeader"}]),e.forEach((function(e){var i=[];t.forEach((function(t){i.push({text:e[t].toString(),style:"contentleft"})})),s.push(i)})),s.push([{colSpan:4,text:"Sub Total :",style:"subheader"},"","","",{text:a,style:"subheader"}]),"Rp. 0"!=o.deliveryFee&&s.push([{colSpan:4,text:"Ongkir :",style:"subheader"},"","","",{text:o.deliveryFee,style:"subheader"}]),"Rp. 0"!=o.discount&&s.push([{colSpan:4,text:"Diskon :",style:"subheader"},"","","",{text:o.discount,style:"subheader"}]),s.push([{colSpan:4,text:"Grand Total :",style:"subheader"},"","","",{text:n,style:"subheader"}]),s}t.forEach((function(e){var t={};t.desc=e.desc,t.keyname=e.keyname,t.qtyOrdered=e.qtyOrdered,t.sales_price=r(e.sales_price),t.shortDesc=e.shortDesc,t.subTotal=r(e.subTotal),l.push(t)}));let c={content:[{columns:[{text:"Invoice",style:"header"},{text:"Order No : "+o.orderNo,style:"subheader"}]},{style:"tableExample",table:{headerRows:1,widths:["*","auto"],body:[[{text:"Pelanggan : "+o.custName,style:"contentleft"},{text:"Dikirim ke : "+o.deliverTo,style:"contentleft"}],[{text:"Tanggal : "+o.dateIssued,style:"contentleft"},{text:"Pembayaran : "+o.paymentDesc,style:"contentleft"}],[{text:"Note : "+o.note,style:"contentleft"},""]]},layout:"noBorders"},{text:"Detail Barang \n\n",style:"contentup"},{style:"tableExample",table:{headerRows:1,widths:["auto","*","auto","auto","*"],body:d(l)},layout:{hLineWidth:function(e,t){return 0===e||t.table.body.length,1},vLineWidth:function(e,t){return 0===e||t.table.widths.length,1},hLineColor:function(e,t){return"grey"},vLineColor:function(e,t){return"grey"},fillColor:function(e,t,s){return e%2===0?"#CCCCCC":null}}},{text:"* Harap melakukan konfirmasi jika sudah melakukan pembayaran, terima kasih.",style:"small"}],styles:{header:{fontSize:12,bold:!0,color:"#3A4D8F",margin:[0,0,0,30]},subheader:{fontSize:10,alignment:"right",margin:[0,0,0,1]},contentleft:{fontSize:10,margin:[0,2,0,2]},contentup:{fontSize:10,bold:!0,margin:[0,30,0,0]},superMargin:{margin:[20,0,40,0],fontSize:15},small:{fontSize:8,margin:[0,40,40,20],italics:!0},tableExample:{margin:[0,0,0,0]},tableHeader:{bold:!0,fontSize:10,color:"white"}}};return c}},3245:function(e,t,s){"use strict";var i=s(3390);class r{getAll(){return i.Z.get("/customers")}get(e){return i.Z.get(`/customers/${e}`)}create(e){return i.Z.post("/customers",e)}update(e,t){return i.Z.put(`/customers/${e}`,t)}delete(e){return i.Z["delete"](`/customers/${e}`)}deleteAll(){return i.Z["delete"]("/customers")}findByName(e){return i.Z.get(`/customers?name=${e}`)}}t["Z"]=new r},8270:function(e,t,s){"use strict";var i=s(3390);class r{getAll(){return i.Z.get("/orders")}get(e){return i.Z.get(`/orders/${e}`)}create(e){return i.Z.post("/orders",e)}update(e,t){return i.Z.put(`/orders/${e}`,t)}delete(e){return i.Z["delete"](`/orders/${e}`)}deleteAll(){return i.Z["delete"]("/orders")}findByLabel(e){return i.Z.get(`/orders?orderno=${e}`)}filterByDate(e,t){return i.Z.get(`orders?start=${e}&end=${t}`)}}t["Z"]=new r},9754:function(e,t,s){"use strict";var i=s(3390);class r{getAll(){return i.Z.get("/payments")}get(e){return i.Z.get(`/payments/${e}`)}create(e){return i.Z.post("/payments",e)}update(e,t){return i.Z.put(`/payments/${e}`,t)}delete(e){return i.Z["delete"](`/payments/${e}`)}deleteAll(){return i.Z["delete"]("/payments")}findByLabel(e){return i.Z.get(`/payments?descs=${e}`)}}t["Z"]=new r},4918:function(e,t,s){"use strict";var i=s(3390);class r{getAll(){return i.Z.get("/products")}get(e){return i.Z.get(`/products/${e}`)}create(e){return i.Z.post("/products",e)}update(e,t){return i.Z.put(`/products/${e}`,t)}delete(e){return i.Z["delete"](`/products/${e}`)}deleteAll(){return i.Z["delete"]("/products")}findByLabel(e){return i.Z.get(`/products?desc=${e}`)}}t["Z"]=new r},4235:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return V}});var i=s(2689),r=s(3381),a=s(5893),n=s(5255),o=s(7024),l=s(6530),d=s(837),c=s(7294),u=s(3749),h=s(3240),m=s(9088),p=s(3328),f=s(3156),v=s(2515),g=s(9007),y=s(5530);const x=(0,y.Z)(g.Z);var b=x.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:e=>!isNaN(parseFloat(e))},rows:{type:[Number,String],default:5,validator:e=>!isNaN(parseInt(e,10))}},computed:{classes(){return{"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle,...g.Z.options.computed.classes.call(this)}},noResizeHandle(){return this.noResize||this.autoGrow}},watch:{autoGrow(e){this.$nextTick((()=>{var t;e?this.calculateInputHeight():null==(t=this.$refs.input)||t.style.removeProperty("height")}))},lazyValue(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted(){setTimeout((()=>{this.autoGrow&&this.calculateInputHeight()}),0)},methods:{calculateInputHeight(){const e=this.$refs.input;if(!e)return;e.style.height="0";const t=e.scrollHeight,s=parseInt(this.rows,10)*parseFloat(this.rowHeight);e.style.height=Math.max(s,t)+"px"},genInput(){const e=g.Z.options.methods.genInput.call(this);return e.tag="textarea",delete e.data.attrs.type,e.data.attrs.rows=this.rows,e},onInput(e){g.Z.options.methods.onInput.call(this,e),this.autoGrow&&this.calculateInputHeight()},onKeyDown(e){this.isFocused&&13===e.keyCode&&e.stopPropagation(),this.$emit("keydown",e)}}}),I=s(2732),Z=function(){var e=this,t=e._self._c;return t("div",[t(l.Z,{staticClass:"overflow-y-auto",attrs:{id:"scroll-target"}},[t(I.Z,{attrs:{flat:""}},[t(v.Z),e.id?t(r.Z,{attrs:{color:"primary",dark:"",icon:""},on:{click:e.EditOrder}},[t(m.Z,[e._v("mdi-pencil")])],1):t(r.Z,{attrs:{color:"primary",dark:"",icon:""},on:{click:e.NewOrder}},[t(m.Z,[e._v("mdi-plus-circle")])],1),t(r.Z,{attrs:{color:"primary",dark:"",icon:""},on:{click:e.generateInvoice}},[t(m.Z,[e._v("mdi-printer")])],1)],1),t(h.Z,{ref:"form",attrs:{"lazy-validation":"",disabled:e.isDisabled},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[t(a.Z,{staticClass:"d-flex",attrs:{flat:"",tile:""}},[t(o.Z,{staticClass:"flex-grow-1 flex-shrink-0",staticStyle:{"min-width":"50px","max-width":"50%"},attrs:{cols:"1"}},[t(a.Z,{staticClass:"pa-2",attrs:{flat:"",tile:""}},[t(g.Z,{attrs:{"prepend-icon":"mdi-file-document-outline",label:"Order No",required:"",dense:"",disabled:""},model:{value:e.order.orderNo,callback:function(t){e.$set(e.order,"orderNo",t)},expression:"order.orderNo"}}),t(i.Z,{attrs:{"prepend-icon":"mdi-account-clock",label:"Customer",items:e.customers,"item-text":e.getNameCustomers,"item-value":"id",dense:""},model:{value:e.order.partners,callback:function(t){e.$set(e.order,"partners",t)},expression:"order.partners"}}),t(p.Z,{ref:"menu",attrs:{"close-on-content-click":!1,"return-value":e.order.dateIssued,transition:"scale-transition","offset-y":"","min-width":"auto"},on:{"update:returnValue":function(t){return e.$set(e.order,"dateIssued",t)},"update:return-value":function(t){return e.$set(e.order,"dateIssued",t)}},scopedSlots:e._u([{key:"activator",fn:function({on:s,attrs:i}){return[t(g.Z,e._g(e._b({attrs:{label:"Date Issued","prepend-icon":"mdi-calendar",readonly:"",dense:""},model:{value:e.order.dateIssued,callback:function(t){e.$set(e.order,"dateIssued",t)},expression:"order.dateIssued"}},"v-text-field",i,!1),s))]}}]),model:{value:e.menu,callback:function(t){e.menu=t},expression:"menu"}},[t(c.Z,{attrs:{"no-title":"",scrollable:""},model:{value:e.order.dateIssued,callback:function(t){e.$set(e.order,"dateIssued",t)},expression:"order.dateIssued"}},[t(v.Z),t(r.Z,{attrs:{text:"",color:"primary"},on:{click:function(t){e.menu=!1}}},[e._v(" Cancel ")]),t(r.Z,{attrs:{text:"",color:"primary"},on:{click:function(t){return e.$refs.menu.save(e.order.dateIssued)}}},[e._v(" OK ")])],1)],1)],1)],1),t(o.Z,{staticClass:"flex-grow-1 flex-shrink-0",staticStyle:{"min-width":"50px","max-width":"50%"},attrs:{cols:"1"}},[t(a.Z,{staticClass:"pa-2",attrs:{flat:"",tile:""}},[t(b,{staticClass:"mx-2",attrs:{rows:"1","prepend-icon":"mdi-comment",color:"teal",dense:""},scopedSlots:e._u([{key:"label",fn:function(){return[t("div",[e._v(" Note "),t("small",[e._v("(optional)")])])]},proxy:!0}]),model:{value:e.order.note,callback:function(t){e.$set(e.order,"note",t)},expression:"order.note"}})],1)],1),t(o.Z,{staticClass:"flex-grow-1 flex-shrink-0",staticStyle:{"min-width":"50px","max-width":"50%"},attrs:{cols:"1"}},[t(a.Z,{staticClass:"pa-2",attrs:{flat:"",tile:""}},[t(b,{staticClass:"mx-2",attrs:{rows:"1","prepend-icon":"mdi-truck-outline",color:"teal",dense:""},scopedSlots:e._u([{key:"label",fn:function(){return[t("div",[e._v(" Delivery To ")])]},proxy:!0}]),model:{value:e.order.deliverTo,callback:function(t){e.$set(e.order,"deliverTo",t)},expression:"order.deliverTo"}}),t(f.Z,{attrs:{"prepend-icon":"mdi-cash-clock",items:e.payments,label:"Pembayaran","item-text":"desc","item-value":"id"},model:{value:e.order.payments,callback:function(t){e.$set(e.order,"payments",t)},expression:"order.payments"}})],1)],1)],1),t(a.Z,{staticClass:"d-flex",attrs:{flat:"",tile:""}},[t(o.Z,{staticClass:"flex-grow-1 flex-shrink-0",staticStyle:{"min-width":"50px","max-width":"100%"},attrs:{cols:"1"}},[t(n.EB,[e._v(" Detail Barang "),t(v.Z),t(r.Z,{staticClass:"ma-2",attrs:{disabled:e.btnTambahBarang,color:"primary",dark:""},on:{click:function(t){e.dialog=!0}}},[e._v("Tambah Barang")])],1),t(u.Z,{attrs:{transition:"dialog-top-transition","max-width":"900",scrollable:""},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[[t(a.Z,[t(n.EB,[e._v(" Daftar Barang "),t(v.Z),t(g.Z,{attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),t(d.Z,{attrs:{headers:e.productheaders,items:e.products,search:e.search,"items-per-page":15,"show-select":"","item-key":"id"},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}}),t(n.h7,{staticClass:"justify-end"},[t(r.Z,{attrs:{text:""},on:{click:e.closeDaftarBarang}},[e._v("Close")]),t(r.Z,{attrs:{text:""},on:{click:function(t){return e.addDetailOrder(e.selected)}}},[e._v("Tambah")])],1)],1)]],2),t(d.Z,{attrs:{headers:e.headers,items:e.orderDetail,"item-class":e.setRowStyle,"disable-pagination":!0,"disable-items-per-page":!0,"hide-default-footer":!0,dense:""},scopedSlots:e._u([{key:"item.shortDesc",fn:function({item:s}){return[t(g.Z,{attrs:{flat:"",dense:""},model:{value:s.shortDesc,callback:function(t){e.$set(s,"shortDesc",t)},expression:"item.shortDesc"}})]}},{key:"item.qtyOrdered",fn:function({item:s}){return[t(g.Z,{attrs:{flat:"",dense:""},model:{value:s.qtyOrdered,callback:function(t){e.$set(s,"qtyOrdered",t)},expression:"item.qtyOrdered"}})]}},{key:"item.sales_price",fn:function({item:s}){return[t(g.Z,{attrs:{flat:"",dense:""},model:{value:s.sales_price,callback:function(t){e.$set(s,"sales_price",t)},expression:"item.sales_price"}})]}},{key:"item.subtotal",fn:function({item:e}){return[t(g.Z,{attrs:{flat:"",dense:"",value:e.sales_price*e.qtyOrdered,disabled:""}})]}},{key:"item.actions",fn:function({item:s}){return[e.editMode?t(m.Z,{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.editOrderDetail(s.OrderDetailId,s)}}},[e._v("mdi-check")]):e._e(),e.editMode?t(m.Z,{attrs:{small:""},on:{click:function(t){return e.deleteOrderDetail(s.OrderDetailId,s)}}},[e._v("mdi-delete")]):e._e()]}}],null,!0)})],1)],1),t(a.Z,{staticClass:"d-flex align-end flex-column",attrs:{flat:"",tile:""}},[t(a.Z,{staticClass:"pa-2",attrs:{flat:"",tile:""}},[t(g.Z,{attrs:{label:"Sub Total",flat:"",dense:"",value:e.subtotalDetail}}),t(g.Z,{attrs:{label:"Diskon",flat:"",dense:""},model:{value:e.order.discount,callback:function(t){e.$set(e.order,"discount",t)},expression:"order.discount"}}),t(g.Z,{attrs:{label:"Biaya Pengiriman",flat:"",dense:""},model:{value:e.order.deliveryFee,callback:function(t){e.$set(e.order,"deliveryFee",t)},expression:"order.deliveryFee"}}),t(g.Z,{attrs:{label:"Grand Total",flat:"",dense:""},model:{value:e.grandTotal,callback:function(t){e.grandTotal=t},expression:"grandTotal"}})],1)],1),t(a.Z,{staticClass:"d-flex justify-center mb-6",attrs:{flat:"",tile:""}},[t(a.Z,{attrs:{flat:"",tile:""}},[t(r.Z,{staticClass:"ma-2",attrs:{color:"secondary"},on:{click:e.cancelOrder}},[e._v(" Cancel ")]),t(r.Z,{staticClass:"ma-2",attrs:{disabled:e.btnSave,color:"primary"},on:{click:function(t){return e.saveOrder(e.id)}}},[e._v(" Save ")])],1)],1)],1)],1)],1)},k=[],S=s(3245),w=s(9754),D=s(4918),$=s(8270),C=s(3390);class _{get(e){return C.Z.get(`/orderdetail/${e}`)}create(e){return C.Z.post("/orderdetail",e)}update(e,t){return C.Z.put(`/orderdetail/${e}`,t)}delete(e){return C.Z["delete"](`/orderdetail/${e}`)}}var O=new _,T=s(6727),B=s.n(T),A=s(7920),F=s(1364);B().vfs=A.I.vfs;var N={props:["id"],data:()=>({editMode:!1,loader:null,loading:!1,isDisabled:!0,btnTambahBarang:!0,btnSave:!0,search:"",dialog:!1,valid:!0,menu:!1,customers:[],payments:[],headers:[{text:"Keyname",align:"left",sortable:!1,value:"keyname"},{text:"Desc",value:"shortDesc",sortable:!1},{text:"Qty",value:"qtyOrdered",sortable:!1},{text:"Price",value:"sales_price",sortable:!1},{text:"Sub Total",value:"subtotal",sortable:!1},{text:"Actions",value:"actions",sortable:!1}],productheaders:[{text:"Keyname",align:"left",sortable:!1,value:"keyname"},{text:"Desc",value:"desc",sortable:!1},{text:"Uom",value:"uoms",sortable:!1},{text:"Kategori",value:"categories",sortable:!1},{text:"Harga",value:"sales_price",sortable:!1},{text:"Stock",value:"stock",sortable:!1}],order:{orderType:"",orderNo:"",dateIssued:"",partners:{},deliverTo:"",deliveryFee:0,discount:0,note:"",payments:{},docStatus:""},orderDetail:[],selected:[],products:[]}),computed:{subtotalDetail(){var e=0;return e=this.orderDetail.reduce(((e,t)=>e+t.qtyOrdered*t.sales_price),0),e},grandTotal:function(){var e=0,t=0,s=0;return this.order.discount&&(t=this.order.discount),this.order.deliveryFee&&(s=parseFloat(this.order.deliveryFee)),e=this.subtotalDetail-t+s,e}},mounted(){this.refreshlist()},methods:{onScroll(e){this.offsetTop=e.target.scrollTop},retrievedOrder(e){$.Z.get(e).then((e=>{this.order={orderNo:e.data.order.orderNo,dateIssued:new Date(e.data.order.dateIssued).toISOString().slice(0,10),partners:e.data.order.partners._id,custName:this.getNameCustomers(e.data.order.partners),deliverTo:e.data.order.deliverTo,deliveryFee:e.data.order.deliveryFee,discount:e.data.order.discount,note:e.data.order.note,payments:e.data.order.payments._id,paymentDesc:e.data.order.payments.desc,docStatus:e.data.order.docStatus,total:e.data.order.total},this.orderDetail=e.data.order.orderdetails.map(this.getDisplayOrderdetail)}))},retrieveCustomers(){S.Z.getAll().then((e=>{this.customers=e.data.partners}))},retrievePeyments(){w.Z.getAll().then((e=>{this.payments=e.data.payments}))},retrieveProducts(){D.Z.getAll().then((e=>{this.products=e.data.products.map(this.getDisplayproducts)}))},getDisplayOrderdetail(e){return{OrderDetailId:e._id,productId:e.products._id,keyname:e.products.keyname,shortDesc:e.shortDesc,desc:e.products.desc,qtyOrdered:e.qtyOrdered,cogs:e.cogs,sales_price:e.unitPrice,subTotal:e.qtyOrdered*e.unitPrice}},getDisplayproducts(e){return{id:e.id,keyname:e.keyname,desc:e.desc,uoms:e.uoms.code,categories:e.categories.desc,purchase_price:e.purchase_price,sales_price:e.sales_price,qtyOrdered:e.qtyOrdered}},getNameCustomers(e){return`${e.first_name} ${e.last_name}`},NewOrder(){this.editMode=!0,this.isDisabled=!1,this.btnTambahBarang=!1,this.btnSave=!1,this.order={discount:0,deliveryFee:0,orderNo:Math.floor((new Date).valueOf()*Math.random()),dateIssued:(new Date).toISOString().substring(0,10)}},EditOrder(){this.editMode=!0,this.isDisabled=!1,this.btnTambahBarang=!1,this.btnSave=!1},editOrderDetail(e,t){var s=this.id,i={};i={orderId:s,productId:t.productId,keyname:t.keyname,shortDesc:t.shortDesc,cogs:t.cogs,sales_price:t.sales_price,qtyOrdered:t.qtyOrdered},void 0==e?O.create(i).then((e=>{console.log(e.data.message),this.refreshlist()})).catch((e=>{console.log(e)})):O.update(e,t).then((e=>{console.log(e.data.message),this.refreshlist()})).catch((e=>{console.log(e)}))},delArray(e,t){e.splice(e.indexOf(t),1)},async deleteOrderDetail(e,t){const s=this.orderDetail;void 0==e?this.delArray(s,t):await O["delete"](e).then((e=>{console.log(e.data.message),this.delArray(s,t)})).catch((e=>{console.log(e)}))},async saveOrder(e){var t={orderNo:this.order.orderNo,dateIssued:this.order.dateIssued,partners:this.order.partners,deliverTo:this.order.deliverTo,deliveryFee:this.order.deliveryFee,discount:this.order.discount,note:this.order.note,payments:this.order.payments,docStatus:"Draft",total:this.grandTotal,orderdetails:this.orderDetail};e?(console.log("processing update..."),await $.Z.update(e,t).then((e=>{console.log(e.data.message)})).catch((e=>{console.log(e)})),this.$router.go()):($.Z.create(t).then((()=>{this.refreshlist()})).catch((e=>{console.log(e)})),this.$router.push({path:"/so"}))},cancelOrder(){this.$router.go()},closeDaftarBarang(){this.dialog=!1,this.selected=[]},addDetailOrder(e){for(var t=0;t<e.length;t++)1==e[t]&&e.push(5),this.orderDetail.push({productId:e[t].id,keyname:e[t].keyname,shortDesc:e[t].desc,cogs:e[t].purchase_price,sales_price:e[t].sales_price})},refreshlist(){this.id&&this.retrievedOrder(this.id),this.retrieveCustomers(),this.retrievePeyments(),this.retrieveProducts()},setRowStyle(){return"style-1"},async generateInvoice(){const e=await F.createInvoice(this.order,this.orderDetail,this.subtotalDetail,this.grandTotal),t=await B().createPdf(e);t.download(this.order.custName.split(" ").join("_")+"_SO"+this.order.orderNo+".pdf"),t.open()}}},E=N,z=s(1001),M=(0,z.Z)(E,Z,k,!1,null,null,null),V=M.exports},2689:function(e,t,s){"use strict";s.d(t,{Z:function(){return l}});var i=s(3156),r=s(9007),a=s(7559),n=s(8131);const o={...i.l,offsetY:!0,offsetOverflow:!0,transition:!1};var l=i.Z.extend({name:"v-autocomplete",props:{allowOverflow:{type:Boolean,default:!0},autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:(e,t,s)=>s.toLocaleLowerCase().indexOf(t.toLocaleLowerCase())>-1},hideNoData:Boolean,menuProps:{type:i.Z.options.props.menuProps.type,default:()=>o},noFilter:Boolean,searchInput:{type:String}},data(){return{lazySearch:this.searchInput}},computed:{classes(){return{...i.Z.options.computed.classes.call(this),"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1}},computedItems(){return this.filteredItems},selectedValues(){return this.selectedItems.map((e=>this.getValue(e)))},hasDisplayedItems(){return this.hideSelected?this.filteredItems.some((e=>!this.hasItem(e))):this.filteredItems.length>0},currentRange(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems(){return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((e=>{const t=(0,n.qF)(e,this.itemText),s=null!=t?String(t):"";return this.filter(e,String(this.internalSearch),s)}))},internalSearch:{get(){return this.lazySearch},set(e){this.lazySearch!==e&&(this.lazySearch=e,this.$emit("update:search-input",e))}},isAnyValueAllowed(){return!1},isDirty(){return this.searchIsDirty||this.selectedItems.length>0},isSearching(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps(){const e=i.Z.options.computed.$_menuProps.call(this);return e.contentClass=`v-autocomplete__content ${e.contentClass||""}`.trim(),{...o,...e}},searchIsDirty(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem(){return this.multiple?null:this.selectedItems.find((e=>this.valueComparator(this.getValue(e),this.getValue(this.internalValue))))},listData(){const e=i.Z.options.computed.listData.call(this);return e.props={...e.props,items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch},e}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused(e){e?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.blur(),this.updateSelf())},isMenuActive(e){!e&&this.hasSlot&&(this.lazySearch=null)},items(e,t){t&&t.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!e.length||this.activateMenu()},searchInput(e){this.lazySearch=e},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created(){this.setSearch()},destroyed(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged(e,t){if(e!==t){if(!this.autoSelectFirst){const s=t[this.$refs.menu.listIndex];s?this.setMenuIndex(e.findIndex((e=>e===s))):this.setMenuIndex(-1),this.$emit("update:list-index",this.$refs.menu.listIndex)}this.$nextTick((()=>{this.internalSearch&&(1===e.length||this.autoSelectFirst)&&(this.$refs.menu.getTiles(),this.autoSelectFirst&&e.length&&(this.setMenuIndex(0),this.$emit("update:list-index",this.$refs.menu.listIndex)))}))}},onInternalSearchChanged(){this.updateMenuDimensions()},updateMenuDimensions(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex(e){this.searchIsDirty||(this.multiple&&e===n.Do.left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&e===n.Do.right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:e!==n.Do.backspace&&e!==n.Do["delete"]||this.deleteCurrentItem())},deleteCurrentItem(){const e=this.selectedIndex,t=this.selectedItems[e];if(!this.isInteractive||this.getDisabled(t))return;const s=this.selectedItems.length-1;if(-1===this.selectedIndex&&0!==s)return void(this.selectedIndex=s);const i=this.selectedItems.length,r=e!==i-1?e:e-1,a=this.selectedItems[r];a?this.selectItem(t):this.setValue(this.multiple?[]:null),this.selectedIndex=r},clearableCallback(){this.internalSearch=null,i.Z.options.methods.clearableCallback.call(this)},genInput(){const e=r.Z.options.methods.genInput.call(this);return e.data=(0,a.ZP)(e.data,{attrs:{"aria-activedescendant":(0,n.vO)(this.$refs.menu,"activeTile.id"),autocomplete:(0,n.vO)(e.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),e},genInputSlot(){const e=i.Z.options.methods.genInputSlot.call(this);return e.data.attrs.role="combobox",e},genSelections(){return this.hasSlot||this.multiple?i.Z.options.methods.genSelections.call(this):[]},onClick(e){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(e.target)||this.activateMenu())},onInput(e){if(this.selectedIndex>-1||!e.target)return;const t=e.target,s=t.value;t.value&&this.activateMenu(),this.multiple||""!==s||this.deleteCurrentItem(),this.internalSearch=s,this.badInput=t.validity&&t.validity.badInput},onKeyDown(e){const t=e.keyCode;!e.ctrlKey&&[n.Do.home,n.Do.end].includes(t)||i.Z.options.methods.onKeyDown.call(this,e),this.changeSelectedIndex(t)},onSpaceDown(e){},onTabDown(e){i.Z.options.methods.onTabDown.call(this,e),this.updateSelf()},onUpDown(e){e.preventDefault(),this.activateMenu()},selectItem(e){i.Z.options.methods.selectItem.call(this,e),this.setSearch()},setSelectedItems(){i.Z.options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch(){this.$nextTick((()=>{this.multiple&&this.internalSearch&&this.isMenuActive||(this.internalSearch=!this.selectedItems.length||this.multiple||this.hasSlot?null:this.getText(this.selectedItem))}))},updateSelf(){(this.searchIsDirty||this.internalValue)&&(this.multiple||this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem(e){return this.selectedValues.indexOf(this.getValue(e))>-1},onCopy(e){var t,s;if(-1===this.selectedIndex)return;const i=this.selectedItems[this.selectedIndex],r=this.getText(i);null==(t=e.clipboardData)||t.setData("text/plain",r),null==(s=e.clipboardData)||s.setData("text/vnd.vuetify.autocomplete.item+plain",r),e.preventDefault()}}})},5255:function(e,t,s){"use strict";s.d(t,{EB:function(){return l},ZB:function(){return o},h7:function(){return a}});var i=s(5893),r=s(8131);const a=(0,r.Ji)("v-card__actions"),n=(0,r.Ji)("v-card__subtitle"),o=(0,r.Ji)("v-card__text"),l=(0,r.Ji)("v-card__title");i.Z},3749:function(e,t,s){"use strict";s.d(t,{Z:function(){return f}});var i=s(9770),r=s(7561),a=s(4665),n=s(9556),o=s(8605),l=s(2893),d=s(2389),c=s(3664),u=s(5530),h=s(8219),m=s(8131);const p=(0,u.Z)(a.Z,n.Z,o.Z,l.Z,d.Z,r.Z);var f=p.extend({name:"v-dialog",directives:{ClickOutside:c.Z},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:[String,Number],noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:[String,Number]},data(){return{activatedBy:null,animate:!1,animateTimeout:-1,stackMinZIndex:200,previousActiveElement:null}},computed:{classes(){return{[`v-dialog ${this.contentClass}`.trim()]:!0,"v-dialog--active":this.isActive,"v-dialog--persistent":this.persistent,"v-dialog--fullscreen":this.fullscreen,"v-dialog--scrollable":this.scrollable,"v-dialog--animated":this.animate}},contentClasses(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive(e){var t;e?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null==(t=this.previousActiveElement)||t.focus())},fullscreen(e){this.isActive&&(e?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created(){this.$attrs.hasOwnProperty("full-width")&&(0,h.Jk)("full-width",this)},beforeMount(){this.$nextTick((()=>{this.isBooted=this.isActive,this.isActive&&this.show()}))},beforeDestroy(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick(){this.animate=!1,this.$nextTick((()=>{this.animate=!0,window.clearTimeout(this.animateTimeout),this.animateTimeout=window.setTimeout((()=>this.animate=!1),150)}))},closeConditional(e){const t=e.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(t)||this.overlay&&t&&!this.overlay.$el.contains(t))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):o.Z.options.methods.hideScroll.call(this)},show(){!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((()=>{this.$nextTick((()=>{var e,t;null!=(e=this.$refs.dialog)&&e.contains(document.activeElement)||(this.previousActiveElement=document.activeElement,null==(t=this.$refs.dialog)||t.focus());this.bind()}))}))},bind(){window.addEventListener("focusin",this.onFocusin)},unbind(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside(e){this.$emit("click:outside",e),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown(e){if(e.keyCode===m.Do.esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;const e=this.getActivator();this.$nextTick((()=>e&&e.focus()))}this.$emit("keydown",e)},onFocusin(e){if(!e||!this.retainFocus)return;const t=e.target;if(t&&this.$refs.dialog&&![document,this.$refs.dialog].includes(t)&&!this.$refs.dialog.contains(t)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((e=>e.contains(t)))){const e=this.$refs.dialog.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),t=[...e].find((e=>!e.hasAttribute("disabled")));t&&t.focus()}},genContent(){return this.showLazyContent((()=>[this.$createElement(i.Z,{props:{root:!0,light:this.light,dark:this.dark}},[this.$createElement("div",{class:this.contentClasses,attrs:{role:"dialog","aria-modal":this.hideOverlay?void 0:"true",...this.getScopeIdAttrs()},on:{keydown:this.onKeydown},style:{zIndex:this.activeZIndex},ref:"content"},[this.genTransition()])])]))},genTransition(){const e=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[e]):e},genInnerContent(){const e={class:this.classes,attrs:{tabindex:this.isActive?0:void 0},ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(e.style={...e.style,maxWidth:(0,m.kb)(this.maxWidth),width:(0,m.kb)(this.width)}),this.$createElement("div",e,this.getContentSlot())}},render(e){return e("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},[this.genActivator(),this.genContent()])}})},3240:function(e,t,s){"use strict";var i=s(5530),r=s(6141),a=s(950);t["Z"]=(0,i.Z)(r.Z,(0,a.J)("form")).extend({name:"v-form",provide(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:()=>({inputs:[],watchers:[],errorBag:{}}),watch:{errorBag:{handler(e){const t=Object.values(e).includes(!0);this.$emit("input",!t)},deep:!0,immediate:!0}},methods:{watchInput(e){const t=e=>e.$watch("hasError",(t=>{this.$set(this.errorBag,e._uid,t)}),{immediate:!0}),s={_uid:e._uid,valid:()=>{},shouldValidate:()=>{}};return this.lazyValidation?s.shouldValidate=e.$watch("shouldValidate",(i=>{i&&(this.errorBag.hasOwnProperty(e._uid)||(s.valid=t(e)))})):s.valid=t(e),s},validate(){return 0===this.inputs.filter((e=>!e.validate(!0))).length},reset(){this.inputs.forEach((e=>e.reset())),this.resetErrorBag()},resetErrorBag(){this.lazyValidation&&setTimeout((()=>{this.errorBag={}}),0)},resetValidation(){this.inputs.forEach((e=>e.resetValidation())),this.resetErrorBag()},register(e){this.inputs.push(e),this.watchers.push(this.watchInput(e))},unregister(e){const t=this.inputs.find((t=>t._uid===e._uid));if(!t)return;const s=this.watchers.find((e=>e._uid===t._uid));s&&(s.valid(),s.shouldValidate()),this.watchers=this.watchers.filter((e=>e._uid!==t._uid)),this.inputs=this.inputs.filter((e=>e._uid!==t._uid)),this.$delete(this.errorBag,t._uid)}},render(e){return e("form",{staticClass:"v-form",attrs:{novalidate:!0,...this.attrs$},on:{submit:e=>this.$emit("submit",e)}},this.$slots.default)}})}}]);
//# sourceMappingURL=315.95b776e0.js.map