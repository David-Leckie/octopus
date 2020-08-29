import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store.js'
import utilities from './global/globalUtilitiesPlugin.js'


//////////////////////////////

//Globally Register Icons (Can Also Adapt for Other Components)

const requireComponent = require.context(
  // Look for files in the current directory
  './assets/icons/',
  // Do not look in subdirectories
  false,
  // Only include "_" prefixed .vue files
  /_[\w-]+\.vue$/
)

// For each matching file name...
requireComponent.keys().forEach((fileName) => {
  // Get the component config
  const componentConfig = requireComponent(fileName)
  // Get the PascalCase version of the component name
  const componentName = fileName
    // Remove the "./_" from the beginning
    .replace(/^\.\/_/, '')
    // Remove the file extension from the end
    .replace(/\.\w+$/, '')
    // Split up kebabs
    .split('-')
    // Upper case
    .map((kebab) => kebab.charAt(0).toUpperCase() + kebab.slice(1))
    // Concatenated
    .join('')

  // Globally register the component

  Vue.component(componentName, componentConfig.default || componentConfig);
  
})


const requireComponent2 = require.context(
  './themes/thumbnails/',
  false,
  /_[\w-]+\.vue$/
)

requireComponent2.keys().forEach((fileName) => {
  const componentConfig = requireComponent2(fileName)
  const componentName = fileName
    .replace(/^\.\/_/, '')
    .replace(/\.\w+$/, '')
    //.split('-')
    //.map((kebab) => kebab.charAt(0).toUpperCase() + kebab.slice(1))
    //.join('')

  Vue.component(componentName, componentConfig.default || componentConfig);
  
})


//////////////////////////////////////////////////////

Vue.config.productionTip = false

Vue.use(utilities)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
