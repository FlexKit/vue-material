import theme from '../../core/components/mdTheme/mixin';

export default {
  mixins: [theme],
  data() {
    return {
      field: null,
      focused: false,
      currentValue: null
    };
  },
  props: {
    // for container
    mdClearable: Boolean,

    // for field
    label: [String, Number],
    value: [String, Number],
    placeholder: String,
    maxlength: [Number, String],
    required: Boolean,
    disabled: Boolean,
    autofocus: Boolean
  },
  computed: {
    inputLength() {
      return this.currentValue ? this.currentValue.length : 0;
    },
    counterLength() {
      return Number(this.maxlength, 10);
    }
  },
  watch: {
    value(value) {
      this.currentValue = value;
    }
  },
  methods: {
    updateValue() {
      this.currentValue = this.field.value || this.value;
    },
    onFocus() {
      this.focused = true;
    },
    onBlur() {
      this.focused = false;
    },
    onInput() {
      this.updateValue();
      this.$emit('input', this.field.value);
    },
    onChange() {
      this.updateValue();
      this.$emit('change', this.field.value);
    },
    clearValue() {
      this.field.value = null;

      this.$nextTick(() => {
        this.onInput();
        this.onChange();
      });
    },
    focus() {
      this.field.focus();
    }
  },
  mounted() {
    this.field = this.$refs.field;
    this.focused = this.autofocus;
    this.currentValue = this.value;
  }
};
