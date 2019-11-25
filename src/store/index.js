import Vue from 'vue';
import Vuex from 'vuex';
import base from './base';

// const files = require.context('../views/', true, /^\.\/(\w*\/)store\/+index\.js$/);
const files = require.context('../views/', true, /^\.\/(\w*\/)+store\.js$/);
const modules = {};
console.log(files);
files.keys().forEach(file => {
  // modules[file.replace(/(^\.\/)|(\/index\.js$)/g, '')] = files(file).default;
  const moduleName = file.replace(/(^\.\/)|(\/store\.js$)/g, '');
  modules[moduleName] = files(file).default || files(file);
});
console.log(modules);

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    ...modules,
    base,
  },
});
