<template lang="pug">
  v-card(class="section-def" :color="currentColor + ' dark-1'" flat)
    v-card-text(class="pa-3")
      v-card(class="section-def__card")
        v-card-text
          dl
            slot(name="title")
            slot(name="desc")
        slot
</template>

<script>
export default {
  computed: {
    currentColor() {
      return this.$store.state.currentColor;
    },
  },
};
</script>

<style lang="stylus">
  .section-def
    margin-bottom: 50px
    dt
      font-weight: 900
      margin-bottom: 16px
    &__card
      top: 24px
      margin-top: -24px
</style>
