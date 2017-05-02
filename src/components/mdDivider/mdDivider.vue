<template>
  <hr :class="['md-divider', themeClass]">
</template>

<style lang="scss" src="./mdDivider.scss"></style>

<script>
  import theme from '../../core/components/mdTheme/mixin';

  export default {
    name: 'md-divider',
    mixins: [theme]
  };
</script>
