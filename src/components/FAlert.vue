<template>
  <v-snackbar id="snackbar" :timeout="alertOpts.timeOut" bottom :color="alertOpts.color" v-model="alertOpts.isShow">
    <strong>{{ alertOpts.text }}</strong>
    <!-- <v-spacer></v-spacer>
    <v-btn
        fab
        dark
        small
        :color="alertOpts.color"
        @click.native.stop="close"
      >
        <v-icon>keyboard_arrow_down</v-icon>
    </v-btn> -->
  </v-snackbar>
</template>

<script>
export default {
  computed: {
    alertOpts() {
      return this.$store.state.alertOptions;
    },
  },
  methods: {
    close() {
      this.$store.dispatch('alertClose');
    },
  },
};

</script>
