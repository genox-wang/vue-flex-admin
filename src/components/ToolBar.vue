<template>
  <v-toolbar
    :color="currentColor + ' dark-1'"
    dark
    fixed
    app
    id="toolbar"
  >
   <v-toolbar-side-icon @click.native.stop="navigationMiniToggle"></v-toolbar-side-icon>
    <v-toolbar-title>{{titleName}}</v-toolbar-title>
    <v-spacer></v-spacer>
    <slot></slot>
    <v-speed-dial
      direction="left"
    >
      <v-btn
        slot="activator"
        :color="currentColor + ' darken-1'"
        dark
        fab
        hover
        small
      >
        <v-icon>style</v-icon>
      </v-btn>
      <v-btn
        v-for="(color, id) in colors"
        :key="id"
        fab
        dark
        small
        :color="color"
        @click.native.stop="changeCurrentColor(color)"
      >
      </v-btn>
    </v-speed-dial>
  </v-toolbar>
</template>

<script>
import { mapState } from 'vuex';
import types from '@/store/mutationTypes';

export default {

  data() {
    return {
      colors: [
        'red',
        'pink',
        'purple',
        'blue',
        'light-blue',
        'cyan',
        'teal',
        'green',
        'deep-orange',
        'blue-grey',
        'grey',
      ],
    };
  },
  computed: {
    titleName() {
      return this.$route.name;
    },
    ...mapState([
      'currentColor',
    ]),
  },
  methods: {
    navigationMiniToggle() {
      this.$emit('nav-mini-toggle');
    },
    changeCurrentColor(color) {
      this.$store.commit(types.MUTATION_VUE_FLEX_ADMIN_COLOR, color);
    },
  },
};
</script>
