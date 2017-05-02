<template>
  <li class="md-list-item" :class="classes">
    <div class="md-list-item-container">
      <slot></slot>
    </div>
  </li>
</template>

<script>
  export default {
    name: 'md-list-item',
    props: {
      disabled: Boolean
    },
    computed: {
      classes() {
        return {
          'md-disabled': this.disabled
        };
      }
    }
  };
</script>
