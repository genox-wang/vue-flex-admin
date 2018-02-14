# How to deliver v-model from child to parent

> 1. add `value` field to `props`
> 2. add `updateValue(value)` function to `methods`
> 3. modify `v-model` to `:value="value" @input="updateValue(arguments[0])"`


```
<template>
  <my-component
    :value="value"
    @input="updateValue(arguments[0])"
  >
  </my-component>
</template>

<script>
export default {
  props: {
    value: false,
  },
  methods: {
    updateValue(value) {
      this.$emit('input', value);
    },
  },
};
</script>
```