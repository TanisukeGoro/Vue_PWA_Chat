import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'


Vue.config.productionTip = false
    // import Chat from 'vue-beautiful-chat'
    // Vue.use(Chat)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')