<template>
   <div>
     <v-navigation-drawer
      v-model="drawer"
      @transitionend="collapseSubItems"
      app
    >
      <v-list-item>
        <v-list-item-content>
        <v-list-item-title class="text-h6">
            POS v1.0.0
        </v-list-item-title>
        <v-list-item-subtitle>
            point of sales
        </v-list-item-subtitle>
        </v-list-item-content>
    </v-list-item>
    <v-divider></v-divider>
    <v-list>
    <template v-for="(n, i) in nav">
        <v-list-item v-if="n.to" :key="`${i}-a`" :to="n.to" link>
        <v-list-item-icon>
            <v-icon>{{ n.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
            <v-list-item-title>{{ n.label }}</v-list-item-title>
        </v-list-item-content>
        </v-list-item>
        <v-list-group
        v-if="n.subItems"
        :key="`${i}-b`"
        :prepend-icon="`${n.icon} fa-em`"
        v-model="n.active"
        append-icon="fas fa-chevron-down fa-sm"
        >
        <template v-slot:activator>
            <v-list-item-content>
            <v-list-item-title>{{ n.label }}</v-list-item-title>
            </v-list-item-content>
        </template>
        <v-list-item
            v-for="(s, y) in n.subItems"
            :key="y"
            :to="s.to"
            link
            class="pl-8"
        >
            <v-list-item-icon>
            <v-icon small>{{ s.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
            <v-list-item-title>{{ s.label }}</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
        </v-list-group>
    </template>
    </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="white" flat>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>{{this.$route.name}}</v-toolbar-title>
      <v-spacer></v-spacer>
        <v-avatar size="36px">
        <img
            src="https://cdn.vuetifyjs.com/images/john.jpg"
            alt="John"
        >
        </v-avatar>
      <v-btn icon>
        <v-icon>mdi-export</v-icon>
      </v-btn>
    </v-app-bar>
   </div>
</template>

<script>
import MenuService from '../services/menuService';
  export default {
    data: () => ({ 
        drawer: null,
        nav: [],
    }),
    async created() {
        try {
            const response = await MenuService.getAllMenu();
            this.nav = response.data.menus;
        } catch (err) {
            console.log(err.message);
        }
    },
    methods: {
      collapseSubItems() {
          this.nav.map((item)=>item.active=false)
      },
    },
  }
</script>