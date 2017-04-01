<template>
  <md-input-container
    :class="[themeClass, classes]"
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

      <input
        ref="field"
        class="md-input"

        :type="type"
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
      >
    </div>

    <md-button
      v-if="isInputPassword"
      class="md-icon-button md-toggle-password"
      @click.native="handleTogglePasswordType"
    >
      <md-icon>{{ showPassword ? 'visibility_off' : 'visibility' }}</md-icon>
    </md-button>

    <slot name="after"></slot>
  </md-input-container>
</template>

<script>
  import common from './common';

  export default {
    name: 'md-input',
    mixins: [common],
    props: {
      type: {
        type: String,
        default: 'text'
      }
    },
    data() {
      return {
        showPassword: false,
        isInputPassword: false
      };
    },
    computed: {
      classes() {
        return {
          'md-has-password': this.isInputPassword
        };
      }
    },
    methods: {
      handleTogglePasswordType() {
        if (this.field.type === 'password') {
          this.field.type = 'text';
          this.showPassword = true;
        } else {
          this.field.type = 'password';
          this.showPassword = false;
        }

        this.field.focus();
      }
    },
    mounted() {
      this.isInputPassword = this.type === 'password';

      if (this.type === 'file') {
        this.$destroy();

        throw new Error('You should use the md-file');
      }
    }
  };
</script>
