import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import pageNotFound from '../views/PageNotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Beranda',
    component: HomeView
  },
  {
    path: '/about',
    name: 'Tentang',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/inventory',
    name: 'Persediaan',
    component: () => import('../views/DataView.vue')
  },
  {
    path: '/menu',
    name: 'Menu',
    component: () => import('../views/MenuView.vue')
  },
  {
    path: '/customers',
    component: () => import('../components/customers/indexComponent.vue'),
    children: [
      {
        path: '',
        name:'Pelanggan',
        component: () => import('../components/customers/listComponent.vue')
      },
      {
        path: 'history',
        name:'Riwayat Pelanggan',
        component: () => import('../components/customers/historyComponent.vue')
      },
    ]
  },
  {
    path: '/suppliers',
    component: () => import('../components/suppliers/indexComponent.vue'),
    children: [
      {
        path: '',
        name:'Supplier',
        component: () => import('../components/suppliers/listComponent.vue')
      },
      {
        path: 'history',
        name:'Riwayat Supplier',
        component: () => import('../components/suppliers/historyComponent.vue')
      }
    ]
  },
  {
    path: '/payments',
    name: 'Payment',
    component: () => import('../views/PaymentView.vue')
  },
  {
    path: '/currencies',
    name: 'Mata Uang',
    component: () => import('../views/CurrencyView.vue')
  },
  {
    path: '/uom',
    name: 'Unit Of Measure',
    component: () => import('../views/UomView.vue')
  },
  {
    path: '/category',
    name: 'Category',
    component: () => import('../views/CategoryView.vue')
  },
  {
    path: '/products',
    name: 'Products',
    component: () => import('../views/ProductView.vue')
  },
  {
    path: '/so',
    component: () => import('../components/saleorders/indexComponent.vue'),
    children: [
      {
        path: '',
        name:'Sales Orders',
        component: () => import('../components/saleorders/listComponent.vue')
      },
      {
        path: 'new',
        name:'New Order',
        component: () => import('../components/saleorders/newComponent.vue')
      },
      {
        path: ':id',
        name:'EditOrder',
        props: true,
        component: () => import('../components/saleorders/newComponent.vue')
      }
    ]
  },
  {
    path: '/:catchAll(.*)*',
    name: "pageNotFound",
    component: pageNotFound,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
