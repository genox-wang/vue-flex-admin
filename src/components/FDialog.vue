<template>
    <v-dialog
      :value="value"
      @input="updateValue(arguments[0])"
      full-width transition="dialog-right-transition" :overlay=false>
      <v-card>
        <v-toolbar dark :color="currentColor">
          <v-toolbar-title>Settings</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn fab small dark color="error" @click.native="updateValue(false)">
            <v-icon>close</v-icon>
          </v-btn>
          <v-btn fab small dark color="success" @click.native="onOkClicked">
            <v-icon>save</v-icon>
          </v-btn>
        </v-toolbar>
        <v-container style="max-width:2000px; max-height:500px; overflow-y:auto; padding-bottom:20px">
          <slot></slot>
        </v-container>
      </v-card>
    </v-dialog>
</template>

<script>
export default {
  props: {
    value: false,
  },
  computed: {
    currentColor() {
      return this.$store.state.currentColor;
    },
  },
  methods: {
    updateValue(value) {
      this.$emit('input', value);
    },
    onOkClicked() {
      this.$emit('ok');
    },
  },
};
</script>

<style lang="stylus">
.dialog-right-transition
  &-enter, &-leave-to
    transform: translateX(100%)
</style>
