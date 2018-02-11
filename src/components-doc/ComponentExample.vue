<template lang="pug">
  div.component-example(:id="id")
    codepen(ref="codepen" :pen="pen")
    v-card
      v-toolbar(v-bind:color="currentColor + ' dark-1'" flat dense dark)
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
            v-icon code
          span View source
      v-expansion-panel.elevation-0.component-example__panel
        v-expansion-panel-content(v-model="panel")
          v-tabs(ref="tabs" :scrollable="false")
            v-tabs-bar(dark v-bind:class="[currentColor]" class="darken-2 pl-0")
              v-tabs-slider(v-bind:color="currentColor + ' lighten-2'")
              v-tabs-item(
                v-for="tab in tabs"
                v-bind:key="tab"
                v-bind:href="'#'+tab"
                v-show="parsed[tab]"
              ) {{ tab }}
            v-tabs-items
              v-tabs-content(
                v-for="tab in tabs"
                v-bind:key="tab"
                v-bind:id="tab"
                class="grey lighten-4"
              )
                markup(:lang="getLang(tab)" v-if="parsed[tab]").ma-0
                  div(v-html="parsed[tab]")
      v-card-text.subheading.justify
        slot(name="desc")
      v-card-text
        div(v-bind:id="'example-'+uid")
    v-divider.my-5
</template>

<script>
import Vue from 'vue';
import Codepen from './Codepen';
import Markup from './Markup';

const release = process.env.RELEASE;

export default {
  components: {
    Codepen,
    Markup,
  },
  data() {
    return {
      isBooted: false,
      tabs: ['template', 'script', 'style'],
      component: null,
      instance: null,
      uid: null,
      panel: false,
      parsed: {
        script: null,
        style: null,
        template: null,
      },
      pen: {
        script: null,
        style: null,
        template: null,
      },
      url: release ? `releases/${release}/` : '',
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
      this.getMarkup().then(() => this.$refs.tabs.slider());
    },
  },
  beforeDestroy() {
    this.instance.$destroy();
  },
  mounted() {
    // eslint-disable-next-line
    this.uid = this._uid;
    const vm = this;
    import(
      /* webpackChunkName: "examples" */
      /* webpackMode: "lazy-once" */
      `../../static/examples/${this.file}.vue`,
    ).then((comp) => {
      this.instance = new Vue(comp.default);
      this.instance.$mount(`#example-${vm.uid}`);
    });
  },
  methods: {
    getMarkup() {
      if (!this.isBooted) {
        this.isBooted = true;
        return this.request(this.file, this.boot);
      }
      return Promise.resolve();
    },
    getLang(tab) {
      if (tab === 'script') return 'js';
      if (tab === 'style') return 'css';
      return 'html';
    },
    parseTemplate(target, template) {
      const string = `(<${target}(.*)?>[\\w\\W]*<\\/${target}>)`;
      const regex = new RegExp(string, 'g');
      const parsed = regex.exec(template);
      return parsed
        ? parsed[1]
        : '';
    },
    replaceCharacters(str) {
      return str.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    },
    boot(res) {
      const template = this.parseTemplate('template', res);
      const script = this.parseTemplate('script', res);
      const style = this.parseTemplate('style', res);
      this.parsed = {
        template: this.replaceCharacters(template),
        script: this.replaceCharacters(script),
        style: this.replaceCharacters(style),
      };
      this.pen = {
        template,
        script,
        style,
      };
    },
    toggle() {
      this.active = !this.active;
    },
    request(file, cb) {
      this.loading = true;
      return this.$http.get(`/${this.url}static/examples/${file}.vue`).then(({ data }) => {
        cb(data);
        this.loading = false;
        return Promise.resolve();
      });
    },
    sendToCodepen() {
      this.getMarkup().then(() => this.$refs.codepen.submit());
    },
  },
};
</script>

<style lang="stylus">
  .component-example
    .component-example__panel
      .expansion-panel__body
        border: none
      .tabs__item, .markup
        height: 100%
      .tabs__items
        border: none
        max-height: 500px
        overflow-y: auto
      > li
        border: none
    .justify
      text-align: justify
    nav.toolbar
      z-index: 0
    [data-app]
      min-height: 300px
</style>