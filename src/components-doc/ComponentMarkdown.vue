<template lang="pug">
  div.component-example(:id="id")
    v-card
      v-toolbar(
        v-bind:color="currentColor + ' dark-1'"
        flat
        dense
        dark
      )
        v-btn(dark icon :to="{ hash: id }")
          v-icon link
        span.title.white--text.layout.align-end {{ header }}
          span(v-if="newIn").ml-2.body-2.red--text.text--lighten-2 (New in {{ newIn }}+)
        v-spacer
        v-tooltip(bottom)
          v-btn(
            dark
            icon
            v-on:click.stop="panel = !panel"
            slot="activator"
          )
            v-icon {{ panel?'keyboard_arrow_up':'keyboard_arrow_down' }}
          span View Content
      v-expansion-panel.elevation-0.component-example__panel
        v-expansion-panel-content(v-model="panel")
         div(
           v-highlightjs=""
           v-html="markdown"
        ).markdown-body
    v-divider.my-3

</template>

<script>
import MarkdownIt from 'markdown-it';

export default {
  data() {
    return {
      isBooted: false,
      markdown: '',
      panel: false,
      url: '',
    };
  },
  props: {
    file: String,
    header: String,
    newIn: String,
    id: String,
  },
  computed: {
    currentColor() {
      return this.$store.state.currentColor;
    },
  },
  watch: {
    panel() {
      this.getMarkdown();
    },
  },
  mounted() {
  },
  methods: {
    getMarkdown() {
      if (!this.isBooted) {
        this.isBooted = true;
        return this.request(this.file);
      }
      return Promise.resolve();
    },
    toggle() {
      this.active = !this.active;
    },
    request(file) {
      this.loading = true;
      return this.$http.get(`/${this.url}static/markdowns/${file}.md`).then(({ data }) => {
        const md = new MarkdownIt();
        this.markdown = md.render(data);
        this.loading = false;
        return Promise.resolve();
      });
    },
  },
};
</script>

<style lang="stylus">
@import "../../node_modules/github-markdown-css/github-markdown.css";
@import "../../node_modules/highlight.js/styles/github-gist.css";
// @import "../../node_modules/highlight.js/styles/atom-one-light.css";
// @import "../../node_modules/highlight.js/styles/tomorrow.css";
// @import "../../node_modules/highlight.js/styles/solarized-light.css";

code
  box-shadow: none;
  font-weight: 500;
  &:before
    display: none

.component-example
  .component-example__panel
    div
      border: none
      max-height: 500px
      overflow-y: auto

.markdown-body {
  box-sizing: border-box;
  min-width: 200px;
  max-width: 980px;
  margin: 0 auto;
  padding: 45px;
}

@media (max-width: 767px) {
  .markdown-body {
    padding: 15px;
  }
}
</style>
