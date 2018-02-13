<template>
  <v-navigation-drawer
    permanent
    fixed
    dark
    app
    :mini-variant="mini"
    id="navigation"
  >
    <v-toolbar flat class="transparent">
      <v-list class="pa-0">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="@/assets/logo.png" width="100px" />
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title
              :class="`${currentColor}--text text--accent-4`"
            >
              <strong>Vue Flex Admin</strong>
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-toolbar>
    <v-divider></v-divider>
    <v-list>
      <v-list-group v-for="item in items" :value="item.active" v-bind:key="item.title">
        <v-list-tile slot="item">
          <v-list-tile-action>
            <v-icon
              :color="currentColor + ' accent-4'"
            >
              {{ item.action }}
            </v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title :class="`${currentColor}--text text--accent-4`">
              <strong> {{ item.name }} </strong>
            </v-list-tile-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-icon
              :color="currentColor + ' accent-4'"
            >
            keyboard_arrow_down
            </v-icon>
          </v-list-tile-action>
        </v-list-tile>
        <router-link :to="{name: subItem.name}" v-for="subItem in item.items" :key="subItem.title">
          <v-list-tile
            :class="navigationMatchRoute(subItem)?currentColor + ' dark-1':''"
            ripple
          >
            <v-list-tile-content>
              <v-list-tile-title
                :class="navigationMatchRoute(subItem)?'':`${currentColor}--text text--accent-4`"
              >
                <strong> {{ subItem.name }} </strong>
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </router-link>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapState } from 'vuex';

const items = require('../configs/nav.json');


export default {
  props: {
    mini: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      items,
    };
  },
  computed: {
    ...mapState([
      'currentColor',
    ]),
  },
  methods: {
    navigationMatchRoute(item) {
      return this._.isEqual(item.name, this.$route.name);
    },
    navigationMiniToggle() {
      this.$emit('nav-mini-toggle');
    },
  },
};

</script>

<style scoped>
a {
 text-decoration:none
}
</style>
