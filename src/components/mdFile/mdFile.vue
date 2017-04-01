<template>
  <md-input-container
    :class="['md-has-file', themeClass]"
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

    <div class="md-file" @click="openPicker">
      <md-input
        readonly
        v-model="filename"
        :required="required"
        :placeholder="placeholder"
        :disabled="disabled"
        ref="textInput">
      </md-input>

      <md-icon>attach_file</md-icon>

      <input
        type="file"
        :id="id"
        :name="name"
        :disabled="disabled"
        :multiple="multiple"
        :accept="accept"
        @change="onFileSelected"
        ref="fileInput">
    </div>

    <slot name="after"></slot>
  </md-input-container>
</template>

<style lang="scss" src="./mdFile.scss"></style>

<script>
  import theme from '../../core/components/mdTheme/mixin';

  export default {
    name: 'md-file',
    mixins: [theme],
    props: {
      value: String,
      id: String,
      name: String,
      disabled: Boolean,
      required: Boolean,
      placeholder: String,
      accept: String,
      multiple: Boolean
    },
    data() {
      return {
        filename: this.value
      };
    },
    watch: {
      value() {
        this.filename = this.value;
      }
    },
    methods: {
      getMultipleName(files) {
        let names = [];

        [...files].forEach((file) => {
          names.push(file.name);
        });

        return names.join(', ');
      },
      openPicker() {
        if (!this.disabled) {
          this.$refs.fileInput.click();
          this.$refs.textInput.$el.focus();
        }
      },
      onFileSelected($event) {
        const files = $event.target.files || $event.dataTransfer.files;

        if (files) {
          if (files.length > 1) {
            this.filename = this.getMultipleName(files);
          } else if (files.length === 1) {
            this.filename = files[0].name;
          } else {
            this.filename = null;
          }
        } else {
          this.filename = $event.target.value.split('\\').pop();
        }

        this.$emit('selected', files || $event.target.value);
        this.$emit('input', this.filename);
      }
    }
  };
</script>
