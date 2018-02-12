export default {
  methods: {
    $alert_info(msg) {
      this.$store.dispatch('alert', {
        text: msg,
        color: 'info',
      });
    },
    $alert_success(msg) {
      this.$store.dispatch('alert', {
        text: msg,
        color: 'success',
      });
    },
    $alert_error(msg) {
      this.$store.dispatch('alert', {
        text: msg,
        color: 'error',
      });
    },
    $alert(msg) {
      this.$store.dispatch('alert', {
        text: msg,
      });
    },
  },
}
;
