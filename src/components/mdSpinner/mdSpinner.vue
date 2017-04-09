<template>
  <transition name="md-spinner" appear>
    <div class="md-spinner" :class="[themeClass, classes]" :style="styles">
      <slot></slot>

      <svg v-if="mdProgressVisible" class="md-spinner-draw" viewBox="25 25 50 50">
        <circle
          class="md-spinner-path" cx="50" cy="50" :r="radius"
          :stroke-width="mdStroke"
          :stroke-dasharray="dashProgress"
        />
      </svg>
    </div>
  </transition>
</template>

<style lang="scss" src="./mdSpinner.scss"></style>

<script>
  import theme from '../../core/components/mdTheme/mixin';

  export default {
    name: 'md-spinner',
    props: {
      mdSize: {
        type: Number,
        default: 50
      },
      mdStroke: {
        type: Number,
        default: 3.5
      },
      mdIndeterminate: Boolean,
      mdProgress: {
        type: Number,
        default: 0
      },
      mdProgressVisible: {
        type: Boolean,
        default: true
      }
    },
    mixins: [theme],
    computed: {
      radius() {
        return 25 - this.mdStroke / 2;
      },
      classes() {
        return {
          'md-indeterminate': this.mdIndeterminate
        };
      },
      styles() {
        const newSize = this.mdSize + 'px';

        return {
          width: newSize,
          height: newSize,
          padding: this.mdSize / 50 * this.mdStroke + 'px'
        };
      },
      contentStyles() {
        const newSize = this.mdSize - this.mdStroke * 2 + 'px';

        return {
          width: newSize,
          height: newSize
        };
      },
      dashProgress() {
        let progress = this.mdProgress * 150 / 100;

        if (this.mdIndeterminate) {
          return false;
        }

        if (progress >= 150) {
          progress = 151;
        }

        return `${progress}, 200`;
      }
    }
  };
</script>
