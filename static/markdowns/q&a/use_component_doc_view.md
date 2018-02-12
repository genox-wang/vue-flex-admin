# How to Use ComponentDocView

> 1. Create `examples` and `markdowns` folders in `static` folder
> 2. Add `.vue` to `examples` folder and `.md` to `markdowns` folder
> 3. Code your page vue

```
<template>
  <component-doc-view :doc="doc"/>
</template>

<script>
import ComponentDocView from '../components-doc/ComponentDocView';

export default {
  name: 'example',
  data() {
    return {
      doc: {
        title: 'Example',
        examples: [
          // add Examples
          { header: 'Closable', file: 'alerts/closable'},
        ],
        markdowns: [
          // add Markdowns
          { header: 'Languages', file: 'q&a/languages'},
        ],
      },
    };
  },
  components: {
    ComponentDocView,
  },
};
</script>

```
