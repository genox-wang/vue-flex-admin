<template>
  <v-app id="app" :dark="isDarkTheme">
    <navigation :mini="navMini" @nav-mini-toggle="navMini = !navMini" />
    <tool-bar @nav-mini-toggle="navMini = !navMini">
      <v-btn icon @click.native.stop="isDarkTheme = !isDarkTheme">
        <v-icon>{{isDarkTheme?'brightness_7':'brightness_4'}}</v-icon>
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
    <v-fab-transition>
      <v-btn
        fab
        dark
        fixed
        bottom
        right
        color="red"
        v-scroll="onScroll"
        v-show="fab"
        @click="toTop"
      >
        <v-icon>keyboard_arrow_up</v-icon>
      </v-btn>
    </v-fab-transition>
    <f-alert/>
  </v-app>
</template>

<script>
import FAlert from '@/components/FAlert';
import Navigation from './components/Navigation';
import ToolBar from './components/ToolBar';

export default {
  name: 'App',
  components: {
    Navigation,
    ToolBar,
    FAlert,
  },
  data: () => ({
    navMini: false,
    isDarkTheme: false,
    fab: false,
  }),
  mounted() {
    this.onScroll();
  },
  methods: {
    onScroll() {
      if (typeof window === 'undefined') return;
      const top = window.pageYOffset ||
          document.documentElement.offsetTop ||
          0;
      this.fab = top > 300;
    },
    toTop() {
      this.$router.push({ hash: '' });
      window.scrollTo(0, 0);
    },
  },
};

</script>

<style>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }

</style>
