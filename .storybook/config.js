import { configure } from '@storybook/vue'

import Vue from 'vue';
import StntaxContainer from '../stories/Helpers/SyntaxContainer.vue';
function loadStories() {
  require('../stories')
}
window.beautify_html = require('js-beautify').html;
Vue.component('syntax-container', StntaxContainer);

configure(loadStories, module);
