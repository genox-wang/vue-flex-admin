<template>
  <v-app id="app"
    :dark="isDarkTheme"
  >
    <navigation
      :mini="navMini"
      @nav-mini-toggle="navMini = !navMini"
    />
    <tool-bar
      @nav-mini-toggle="navMini = !navMini"
    >
      <v-btn icon @click.native.stop="isDarkTheme = !isDarkTheme">
        <v-icon>refresh</v-icon>
      </v-btn>
    </tool-bar>
    <v-content>
      <!-- <v-progress-linear
        v-bind:indeterminate="true"
        height="2"
        color="teal accent-4"
      >
      </v-progress-linear> -->
      <v-container>
        <!-- <transition name="fade"> -->
          <router-view></router-view>
        <!-- </transition> -->
      </v-container>
    </v-content>
    <f-alert/>
  </v-app>
</template>

<script>
import FAlert from '@/components/FAlert';
import Navigation from './components/Navigation';
import ToolBar from './components/ToolBar';


export default {
  name: 'App',
  data: () => ({
    navMini: false,
    isDarkTheme: false,
  }),
  components: {
    Navigation,
    ToolBar,
    FAlert,
  },
};
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
