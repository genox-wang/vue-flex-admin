
<template lang="pug">
  component-doc-view(v-bind:doc="doc")
</template>

<script>
import ComponentDocView from '../components-doc/ComponentDocView';

export default {
  data() {
    return {
      doc: {
        title: 'falerts',
        examples: [
          { header: 'FAlert', file: 'f-alerts/fAlerts' },
        ],
      },
    };
  },
  components: {
    ComponentDocView,
  },
};
</script>

