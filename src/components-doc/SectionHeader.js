export default {
  functional: true,

  props: {
    first: Boolean,
  },

  render(h, { data, props, children }) {
    /* eslint-disable */
    data.class = 'display-1 mb-3';
    data.style = {};

    if (props.first) {
      data.styles.marginTop = 0;
    }

    return h('h2', data, children);
  },
};
