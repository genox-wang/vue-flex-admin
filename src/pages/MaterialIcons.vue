<template>
  <v-container grid-list-md text-xs-center>
    <v-card>
      <v-layout row wrap>
        <v-flex xs1 v-for="(icon, idx) in icons" :key="idx">
          <v-icon
            :color="currentColor"
            v-clipboard:copy="icon"
            v-clipboard:success="onIconCopyed"
            v-clipboard:error="onIconCopyError"
          >
            {{ icon }}
          </v-icon>
        </v-flex>
      </v-layout>
    </v-card>
  </v-container>
</template>

<script>
import { mapState } from 'vuex';
import fAlert from '@/mixins/fAlert';

export default {
  mixins: [fAlert],
  data() {
    return {
      icons: [],
    };
  },
  computed: {
    ...mapState([
      'currentColor',
    ]),
  },
  methods: {
    onIconCopyed() {
      this.$alert_success('Success Copyed');
    },
    onIconCopyError(e) {
      this.$alert_error(e);
    },
  },
  mounted() {
    this.$http.get('/static/material-icon-settings/codepoints').then((resp) => {
      this.icons = this._.split(resp.data, '\n')
        .filter(icon => !this._.isEmpty(icon))
        .map(icon => this._.split(icon, ' ')[0]);
      // console.log(this.icons);
    }).catch((err) => {
      console.error(err);
    });
  },
};

</script>

<style scoped>
.icon {
  cursor:pointer
}
</style>
