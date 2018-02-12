<template>
  <v-container grid-list-md text-xs-center>
    <v-card>
      <v-layout row wrap>
        <v-flex xs1 v-for="(icon, idx) in icons" :key="idx">
          <v-tooltip top>
            <v-btn
              outline
              fab
              :color="currentColor"
              v-clipboard:copy="`<v-icon>${icon}</v-icon>`"
              v-clipboard:success="onIconCopyed"
              v-clipboard:error="onIconCopyError"
              slot="activator"
            >
              <v-icon>{{ icon }}</v-icon>
            </v-btn>
            <span>{{ icon }}</span>
          </v-tooltip>
        </v-flex>
      </v-layout>
    </v-card>
  </v-container>
</template>

<script>
import { mapState } from 'vuex';

export default {
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
      this.$alertify.success('Success Copyed');
    },
    onIconCopyError(e) {
      this.$alertify.error(e);
    },
  },
  mounted() {
    this.$http.get('/static/material-icon-settings/codepoints').then((resp) => {
      this.icons = this._.split(resp.data, '\n').filter(icon => !this._.isEmpty(icon));
      // console.log(this.icons);
    }).catch((err) => {
      console.error(err);
    });
  },
};

</script>
