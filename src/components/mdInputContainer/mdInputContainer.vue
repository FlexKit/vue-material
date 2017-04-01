<template>
  <div :class="['md-input-container', classes]">
    <slot></slot>

    <span
      v-if="counterLength > 0"
      class="md-count"
    >
      {{ inputLength }} / {{ counterLength }}
    </span>

    <md-button
      v-if="mdClearable && hasValue"
      class="md-icon-button md-clear-input md-dense"
      @click.native="$emit('clear')"
    >
      <md-icon>clear</md-icon>
    </md-button>
  </div>
</template>

<style lang="scss" src="./mdInputContainer.scss"></style>

<script>
  export default {
    name: 'md-input-container',
    props: {
      mdClearable: Boolean,

      hasFile: Boolean,
      hasValue: Boolean,
      hasPlaceholder: Boolean,

      isFocused: Boolean,
      isDisabled: Boolean,
      isRequired: Boolean,

      inputLength: Number,
      counterLength: Number
    },
    computed: {
      classes() {
        return {
          'md-clearable': this.mdClearable,
          'md-has-value': this.hasValue,
          'md-input-placeholder': this.hasPlaceholder,
          'md-input-disabled': this.isDisabled,
          'md-input-required': this.isRequired,
          'md-input-focused': this.isFocused
        };
      }
    }
  };
</script>
