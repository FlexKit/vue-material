<template>
  <md-input-container
    :class="themeClass"
    :hasValue="hasValue"
    :hasPlaceholder="!!placeholder"
    :isDisabled="!!disabled"
    :isRequired="!!required"
  >
    <slot name="before"></slot>

    <div class="md-select" :class="classes">
      <label v-if="label">{{label}}</label>

      <md-menu
        md-full-width
        :md-close-on-select="!multiple"
        @open="$emit('opened')"
        @close="$emit('closed')"
      >
        <div class="md-field md-select-value" md-menu-trigger>
          <template v-if="$scopedSlots.selection">
            <slot
              name="selection"
              v-if="multiple"
              v-for="(item, index) in validValue"
              :item="item"
              :text="selectedText[index]"
            ></slot>

            <slot v-if="!multiple" name="selection" :item="validValue" :text="selectedText"></slot>
          </template>

          <div v-else class="value">{{textValue || placeholder}}</div>
        </div>

        <md-menu-content v-if="items" :class="contentClasses">
          <template>
            <md-option
              v-for="item in items"
              :key="getValue(item)"
              :value="getValue(item)"
              :selectedText="selectedText"
              :multiple="multiple"
              :selected="checkSelected(item)"
              @selected="changeValue"
              @updateText="updateSelectedText"
            >
              <slot :item="item"></slot>
            </md-option>
          </template>
        </md-menu-content>

        <md-option-list v-else :class="contentClasses">
          <slot></slot>
        </md-option-list>
      </md-menu>
    </div>

    <slot name="after"></slot>
  </md-input-container>
</template>

<style lang="scss" src="./mdSelect.scss"></style>

<script>
  import theme from '../../core/components/mdTheme/mixin';
  import mdOptionList from './mdOptionList.vue';

  export default {
    name: 'md-select',
    model: {
      prop: 'value',
      event: 'change'
    },
    props: {
      // global
      required: Boolean,
      disabled: Boolean,

      // for container
      label: [String, Number],

      // for select
      items: [Array, Object],
      value: [String, Number, Array, Object],
      valueKey: String,
      multiple: Boolean,
      placeholder: String,
      mdMenuClass: String
    },
    mixins: [theme],
    components: {
      mdOptionList
    },
    data() {
      return {
        selectedText: ''
      };
    },
    computed: {
      validValue() {
        if (this.multiple && !Array.isArray(this.value)) {
          return [];
        }

        return this.value;
      },
      hasValue() {
        if (this.multiple) {
          return !!(this.validValue && this.validValue.length);
        }

        return !!this.validValue;
      },
      classes() {
        return {
          'md-disabled': this.disabled
        };
      },
      contentClasses() {
        return ['md-select-content', this.themeClass, this.mdMenuClass, {
          'md-multiple': this.multiple
        }];
      },
      textValue() {
        return this.multiple && this.selectedText ? this.selectedText.join(', ') : this.selectedText;
      }
    },
    methods: {
      getValue(item) {
        return this.valueKey ? item[this.valueKey] : item;
      },
      checkSelected(item) {
        const value = this.getValue(item);

        if (this.multiple) {
          return this.validValue.includes(value);
        }

        return this.validValue === value;
      },
      changeValue(value, isSelected) {
        if (this.multiple && isSelected) {
          value = this.validValue.filter((item) => item !== value);
        }

        if (this.multiple && !isSelected) {
          value = [...this.validValue, value];
        }

        this.$emit('change', value);
        this.$emit('selected', value);
      },
      updateSelectedText(value, isSelected) {
        if (this.multiple && !isSelected && this.selectedText) {
          return this.selectedText = this.selectedText.filter((item) => item !== value);
        }

        if (this.multiple && isSelected) {
          return this.selectedText = [ ...this.selectedText, value];
        }

        this.selectedText = isSelected ? value : null;
      }
    },
    mounted() {
      if (this.items && !this.$scopedSlots.default) {
        throw new Error('Missing options template inside md-select');
      }
    }
  };
</script>
