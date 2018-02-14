<template>
  <v-layout row justify-center>
    <v-btn color="primary" dark @click.native.stop="dialog = true">Open Dialog</v-btn>
    <f-dialog v-model="dialog" @ok="onOkClicked">
      <v-card
        style="height:2000px"
        color="red"
      ></v-card>
    </f-dialog>
  </v-layout>
</template>

<script>
import FDialog from '@/components/FDialog';
import fAlert from '@/mixins/fAlert';

export default {
  mixins: [fAlert],
  components: {
    FDialog,
  },
  data() {
    return {
      dialog: false,
    };
  },
  methods: {
    onOkClicked() {
      this.$alert_success('OK Clicked');
      this.dialog = false;
    },
  },
};
</script>

