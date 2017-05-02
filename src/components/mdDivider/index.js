import mdDivider from './mdDivider.vue';
import mdDividerTheme from './mdDivider.theme';

export default function install(Vue) {
  Vue.component('md-divider', mdDivider);

  Vue.material.styles.push(mdDividerTheme);
}
