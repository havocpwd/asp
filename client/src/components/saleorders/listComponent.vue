<template>
    <div>
    <v-container>
    <v-data-table
        :headers="headers"
        :options="tableOptions"
        :footer-props="{'items-per-page-options':[15, 30, 50, 100, -1]}"
        :items="orders"
        :search="search"
        :items-per-page="15"
        class="elevation-1"
        :loading ="loading"
        loading-text="Loading... Please wait"
        :single-expand="singleExpand"
        :expanded.sync="expanded"
        show-expand
        dense
    >
    <template v-slot:[`item.actions`]="{ item }">
    <v-icon small class="mr-2" @click="editproduct(item.id)">mdi-printer</v-icon>
    <v-icon small class="mr-2" @click="editOrder(item)">mdi-pencil</v-icon>
    </template>
    <template v-slot:top>
      <v-toolbar flat>
        <v-menu
              ref="menu"
              v-model="menu"
              :close-on-content-click="false"
              transition="scale-transition"
              offset-y
              min-width="auto"
          >
          <template v-slot:activator="{ on, attrs }">
          <v-text-field
              v-model="dateRangeText"
              label="Periode"
              prepend-icon="mdi-calendar"
              readonly
              v-bind="attrs"
              v-on="on"
              rounded
          ></v-text-field>
          </template>
          <v-date-picker
              v-model="dates"
              range
          >
          <v-spacer></v-spacer>
          <v-btn
              text
              color="primary"
              @click="menu = false"
            >
              Cancel
            </v-btn>
            <v-btn
              text
              color="primary"
              @click="$refs.menu.save(dates)"
            >
              OK
            </v-btn>
          </v-date-picker>
          </v-menu>
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
         <v-btn
          color="primary"
          dark
          icon
          @click="addOrder"
          >
          <v-icon>mdi-plus-circle</v-icon>
          </v-btn>
          <v-btn
          color="primary"
          dark
          icon
          >
          <v-icon>mdi-printer</v-icon>
          </v-btn>
      </v-toolbar>
    </template>
    <template v-slot:expanded-item="{ headers,item }">
      <td :colspan="headers.length">
       <table>
        <tr>
          <th>Keyname</th>
          <th>Description</th>
          <th>Qty</th>
          <th>Harga</th>
          <th>Total</th>
        </tr>
        <tr v-for="n in item.orderDetail" :key="n.id">
          <td>{{n.products.keyname}}</td>
          <td>{{n.products.desc}}</td>
          <td>{{n.qtyOrdered}}</td>
          <td>{{n.unitPrice}}</td>
          <td>{{n.total}}</td>
        </tr>
      </table>
      </td>
    </template>
    </v-data-table>
    </v-container>
    </div>
</template>

<script>
import orderService from '@/services/orderService';

export default {
    data: () => ({
        expanded: [],
        singleExpand: false,
        loading: false,
        search:'',
        menu: false,
        dates: ['2019-09-10', '2019-09-20'],
        tableOptions: {
            itemsPerPage: 30
        },
        headers: [
          { text: 'No',value: 'index',class: "primary"},
          { text: 'Order No',align: 'start', value: 'orderNo',class: "primary"},
          { text: 'Date Issued', value: 'dateIssued',class: "primary"},
          { text: 'Customer', value: 'partner',class: "primary" },
          { text: 'deliverTo', value: 'deliverTo',class: "primary" },
          { text: 'Note', value: 'note',class: "primary" },
          { text: 'Total', value: 'total',class: "primary" },
          { text: 'Status', value: 'docStatus',class: "primary" },
          { text: "Actions", value: "actions", sortable: false ,class: "primary"},
        ],
        orders: [],
    }),
    computed: {
      dateRangeText () {
        return this.dates.join(' ~ ')
      },
    },
    mounted() {
      this.getPeriodeDate();
      this.retrieveorders();
    },
    methods:{
        getPeriodeDate(){
            const today = new Date(Date.now())
            const tomorrow = new Date(today)
            tomorrow.setDate(tomorrow.getDate() + 30);
            this.dates = [today.toISOString().substring(0, 10),tomorrow.toISOString().substring(0, 10)]
        },
        retrieveorders() {
        this.loading = true;
        orderService.getAll()
          .then((response) => {
            this.orders = response.data.orders.map(this.getDisplay);
            this.loading = false;
          })
          .catch((e) => {
            console.log(e);
          });
        },
        getDisplay(order,index){
        return {
          index: index + 1,
          id: order.id,
          orderNo: order.orderNo,
          dateIssued: this.$moment(order.dateIssued,'YYYY-MM-DD').format('LL'),
          partner: order.partners.first_name + " " + order.partners.last_name,
          deliverTo: order.deliverTo,
          deliveryFee: order.deliveryFee,
          discount: order.discount,
          note: order.note,
          payment:order.payments.desc,
          docStatus: order.docStatus,
          total: new Intl.NumberFormat('id', { style: 'currency', currency: 'IDR' }).format(order.total),
          orderDetail: order.orderdetails
          }
        },
        editOrder(item){
          this.$router.push({
            name: "EditOrder",
            params: { id: item.id },
          });
        },
        addOrder(){
          this.$router.push({path:'/so/new'})
        }
    }
}
</script>