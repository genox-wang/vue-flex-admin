<template lang="pug">
  div.view(v-bind:id="`${doc.title.toLowerCase().replace(' ', '-')}-view`")
    v-layout(row wrap)
      v-flex(xs12 sm8 md8 lg8 xl12)
    component-example(
      v-for="(example, i) in doc.examples"
      v-bind:key="`example-${i}`"
      v-bind:header="`#${i + 1} ${example.header}`"
      v-bind:new-in="example.new"
      v-bind:file="example.file"
      v-bind:id="`example-${i + 1}`"
    )
      div(slot="desc" v-html="example.desc" v-if="example.desc")
    component-markdown(
      v-for="(markdown, i) in doc.markdowns"
      v-bind:key="`markdown-${i}`"
      v-bind:header="`#${i + 1} ${markdown.header}`"
      v-bind:new-in="markdown.new"
      v-bind:file="markdown.file"
      v-bind:id="`markdown-${i + 1}`"
    )
</template>

<script>
import ComponentExample from './ComponentExample';
import ComponentMarkdown from './ComponentMarkdown';

export default {
  data() {
    return {
    };
  },

  props: {
    doc: Object,
  },

  computed: {
    currentColor() {
      return this.$store.state.currentColor;
    },
  },

  components: {
    ComponentExample,
    ComponentMarkdown,
  },

  mounted() {
  },
};
</script>
