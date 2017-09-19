// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

Vue.config.productionTip = false

import alienTable from './alienTable.vue';

var components = [
  alienTable
];
const install = function(Vue) {
  components.map(function(component) {
    Vue.component(component.name, component);
  });
};

export default {
  alienTable,
  install
};
