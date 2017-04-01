<template>
  <md-input-container
    :class="themeClass"
    :mdClearable="mdClearable"

    :isFocused="focused"
    :isDisabled="disabled"
    :isRequired="required"

    :inputLength="inputLength"
    :counterLength="counterLength"

    :hasValue="!!currentValue"
    :hasPlaceholder="!!placeholder"

    @clear="clearValue"
  >
    <slot name="before"></slot>

    <div class="md-field">
      <label v-if="label">{{label}}</label>

      <textarea
        ref="field"
        class="md-input"

        :value="currentValue"
        :disabled="disabled"
        :required="required"
        :autofocus="autofocus"
        :maxlength="maxlength"
        :placeholder="placeholder"

        @blur="onBlur"
        @focus="onFocus"
        @input="onInput"
        @change="onChange"
      ></textarea>
    </div>

    <slot name="after"></slot>
  </md-input-container>
</template>

<script>
  import autosize from 'autosize';
  import common from './common';

  export default {
    name: 'md-textarea',
    mixins: [common],
    watch: {
      value() {
        autosize.update(this.field);
      }
    },
    mounted() {
      if (!this.field.getAttribute('rows')) {
        this.field.setAttribute('rows', '1');
      }

      autosize(this.field);
      setTimeout(() => autosize.update(this.field), 200);
    },
    beforeDestroy() {
      autosize.destroy(this.field);
    }
  };
</script>
