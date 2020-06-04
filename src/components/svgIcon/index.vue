<!--  -->
<template>
  <svg class='svg-icon' aria-hidden="true">
    <use :xlink:href='iconName'></use>
  </svg>
</template>

<script>
export default {
  props: {
    iconClass: {
      type: String
    }
  },
  data() {
    return {};
  },

  components: {},

  computed: {
    iconName() {
      return `#icon-${this.iconClass}`;
    }
  },

  methods: {}
};
</script>
<style lang='less' scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>