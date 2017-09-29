// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import alienTable from './alienTable.vue';

const aT = {
  alienTable
};

const install = function (Vue) {

  Object.keys(aT).forEach((key) => {
    Vue.component(key, aT[key]);
  });
};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

module.exports = Object.assign(aT, {install});


