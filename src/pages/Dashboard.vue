<template>
  <v-btn
    @click.native.stop="$alert('Hello')"
    color="success">
    Success
    </v-btn>
</template>

<script>
import fAlert from '@/mixins/fAlert';

export default {
  mixins: [
    fAlert,
  ],
  data() {
    return {};
  },
};

</script>
