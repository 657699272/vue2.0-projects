import Vue from 'vue'
import App from './App.vue'
import './@shenbinghui/vue-ui-components-shenbinghui-test/'
// require('./vue-ui-components-shenbinghui-test.common.js')
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
require('../mock/index.js') //引入mock

Vue.use(ElementUI)
Vue.config.productionTip = false


new Vue({
  render: h => h(App),
}).$mount('#app')
