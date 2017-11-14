import { configure } from '@storybook/vue'

import Vue from 'vue';
import StntaxContainer from '../stories/Helpers/SyntaxContainer.vue';
function loadStories() {
  require('../stories')
}

Vue.component('syntax-container', StntaxContainer);

configure(loadStories, module);
