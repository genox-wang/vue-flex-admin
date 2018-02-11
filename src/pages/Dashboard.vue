<template lang="pug">
  component-view(v-bind:doc="doc")
</template>

<script>
import ComponentView from '../components-doc/ComponentView';

export default {
  name: 'alerts-view',
  data() {
    return {
      doc: {
        title: 'Alert',
        examples: [
          { header: 'Contextual', file: 'alerts/closable', desc: '' },
          { header: 'Contextual', file: 'alerts/closable', desc: '' },
          { header: 'Contextual', file: 'alerts/closable', desc: '' },
        ],
      },
    };
  },
  components: {
    ComponentView,
  },
};
</script>

