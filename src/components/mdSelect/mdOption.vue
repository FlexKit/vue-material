<template>
  <md-menu-item
    :class="['md-option', classes]"
    :disabled="disabled"
    @click.native="$emit('selected', value, selected, $el.innerText, $event)"
    tabindex="-1"
  >
    <md-checkbox class="md-primary" v-if="multiple" :checked="selected">
      <slot></slot>
    </md-checkbox>

    <slot v-else></slot>
  </md-menu-item>
</template>

<script>
  export default {
    name: 'md-option',
    props: {
      value: {
        type: [String, Boolean, Number, Object],
        required: true
      },
      multiple: Boolean,
      selected: Boolean,
      disabled: Boolean
    },
    computed: {
      classes() {
        return {
          'md-selected': this.selected,
          'md-checked': this.multiple && this.selected
        };
      }
    },
    watch: {
      selected(isSelected) {
        this.updateSelectedText(this.$el.innerText, isSelected);
      }
    },
    methods: {
      normalizeText(value) {
        return value.trim().replace(/\n|\t/g, ' ').replace(/\s+/g, ' ');
      },
      updateSelectedText(value, isSelected) {
        const selectedText = this.normalizeText(value);

        this.$emit('updateText', selectedText, isSelected);
      }
    },
    mounted() {
      if (this.selected) {
        this.updateSelectedText(this.$el.innerText, this.selected);
      }
    }
  };
</script>
