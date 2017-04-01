<template>
  <div class="md-checkbox" :class="[themeClass, classes]">
    <div class="md-checkbox-container" @click.stop="toggleCheck" tabindex="0">
      <input type="checkbox" :name="name" :id="id" :disabled="disabled" :checked="checked" tabindex="-1">
      <md-ink-ripple :md-disabled="disabled" />
    </div>

    <label :for="id || name" class="md-checkbox-label" v-if="$slots.default">
      <slot></slot>
    </label>
  </div>
</template>

<style lang="scss" src="./mdCheckbox.scss"></style>

<script>
  import theme from '../../core/components/mdTheme/mixin';

  export default {
    name: 'md-checkbox',
    model: {
      prop: 'checked',
      event: 'change'
    },
    props: {
      id: String,
      name: String,
      checked: Boolean,
      disabled: Boolean
    },
    mixins: [theme],
    computed: {
      classes() {
        return {
          'md-checked': this.checked,
          'md-disabled': this.disabled
        };
      }
    },
    methods: {
      toggleCheck($event) {
        if (!this.disabled) {
          this.$emit('change', !this.checked, $event);
        }
      }
    }
  };
</script>
