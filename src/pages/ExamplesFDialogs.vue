
<template lang="pug">
  <component-doc-view :doc="doc"/>
</template>

<script>
import ComponentDocView from '../components-doc/ComponentDocView';

export default {
  data() {
    return {
      doc: {
        title: 'vbtns',
        examples: [
          { header: 'Simple', file: 'v-dialogs/simple' },
        ],
      },
    };
  },
  components: {
    ComponentDocView,
  },
};
</script>

