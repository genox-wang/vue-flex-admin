
<template lang="pug">
  component-doc-view(v-bind:doc="doc")
</template>

<script>
import ComponentDocView from '../components-doc/ComponentDocView';

export default {
  name: 'q-a-view',
  data() {
    return {
      doc: {
        title: 'Q-A',
        markdowns: [
          { header: 'How to use ComponentDocView?', file: 'q&a/use_component_doc_view' },
          { header: 'Why Vuetifyjs.min.css override css in .vue?', file: 'q&a/vuetifyjs_css_override_vue_css' },
        ],
      },
    };
  },
  components: {
    ComponentDocView,
  },
};
</script>

