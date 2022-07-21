<template>
  <v-app>
    <ToggleNav/>
    <v-main>
      <router-view></router-view>
    </v-main>
    <FooterBar/>
  </v-app>
</template>

<script>
import FooterBar from './components/FooterBar.vue';
import ToggleNav from './components/ToggleNav.vue';
export default {
    Name: 'App',
    components: {
      FooterBar,
      ToggleNav
  }
}
</script>