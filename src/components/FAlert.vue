<template>
  <v-snackbar id="snackbar"
      :timeout="alertOpts.timeOut"
      bottom
      :color="alertOpts.color"
      v-model="alertOpts.isShow"
    >
      {{ alertOpts.text }}
    </v-snackbar>
</template>

<script>

export default {
  computed: {
    alertOpts() {
      console.log(this.$store.state.alertOptions);
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
