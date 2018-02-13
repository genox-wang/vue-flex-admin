
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
          { header: 'Flat', file: 'v-btns/flat' },
          { header: 'Raised', file: 'v-btns/raised' },
          { header: 'Floating', file: 'v-btns/floating' },
          { header: 'Outline', file: 'v-btns/outline' },
          { header: 'Round', file: 'v-btns/round' },
          { header: 'Block', file: 'v-btns/block' },
          { header: 'Icon', file: 'v-btns/icon' },
          { header: 'Button Dropdown Variants', file: 'v-btns/button_dropdown_variants' },
          { header: 'Button toggle', file: 'v-btns/button_toggle' },
          { header: 'Loaders', file: 'v-btns/loaders' },
        ],
      },
    };
  },
  components: {
    ComponentDocView,
  },
};
</script>

