<template>
  <div>
    <v-btn @click.native.stop="$alert('This is a alert!')" color="" dark>
      Normal
    </v-btn>
    <v-btn @click.native.stop="$alert_success('This is a alert!')" color="success">
      Success
    </v-btn>
    <v-btn @click.native.stop="$alert_info('This is a alert!')" color="info">
      Info
    </v-btn>
    <v-btn @click.native.stop="$alert_error('This is a alert!')" color="error">
      Error
    </v-btn>
  </div>

</template>

<script>
import fAlert from '@/mixins/fAlert';

export default {
  mixins: [fAlert],
  data() {
    return {};
  },
};

</script>
