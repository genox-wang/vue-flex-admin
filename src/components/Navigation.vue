<template>
  <v-navigation-drawer
    permanent
    fixed
    dark
    app
    :mini-variant.sync="mini"
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
              :class="`${currentColor}--text text--accent-3`"
            >
              Vue Flex Admin
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
              :color="currentColor + ' accent-3'"
            >
              {{ item.action }}
            </v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title :class="`${currentColor}--text text--accent-3`">
              {{ item.title }}
            </v-list-tile-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-icon
              :color="currentColor + ' accent-3'"
            >
            keyboard_arrow_down
            </v-icon>
          </v-list-tile-action>
        </v-list-tile>
        <v-list-tile v-for="subItem in item.items"
          :class="navigationMatchRoute(subItem)?currentColor + ' dark-1':''"
          ripple
          :key="subItem.title"
          @click="navigationClicked(subItem)"
        >
          <v-list-tile-content>
            <v-list-tile-title
              :class="navigationMatchRoute(subItem)?'':`${currentColor}--text text--accent-3`"
            >
              {{ subItem.title }}
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapState } from 'vuex';
import navItems from '../configs/navItems';

export default {
  props: {
    mini: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      items: navItems.items,
    };
  },
  computed: {
    ...mapState([
      'currentColor',
    ]),
  },
  methods: {
    navigationClicked(item) {
      this.$router.push({ name: item.route });
      console.log(item.route);
    },
    navigationMatchRoute(item) {
      return this._.isEqual(item.route, this.$route.name);
    },
    navigationMiniToggle() {
      this.$emit('nav-mini-toggle');
    },
  },
};

</script>
