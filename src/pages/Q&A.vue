
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
          { header: 'Bug TodoList', file: 'q&a/bug_todolist' },
          { header: 'How to use ComponentDocView?', file: 'q&a/use_component_doc_view' },
          { header: 'How to add nav and route?', file: 'q&a/add_nav_and_route' },
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

