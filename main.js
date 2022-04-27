import Vue from 'vue';
import App from './App';
// 弹出框
import DialogBox from './components/DialogBox/DialogBox';


Vue.config.productionTip = false

// 全局组件
Vue.component('DialogBox', DialogBox);
//mescroll
import MescrollBody from "@/components/mescroll-uni/mescroll-body.vue"
import MescrollUni from "@/components/mescroll-uni/mescroll-uni.vue"
Vue.component('mescroll-body', MescrollBody)
Vue.component('mescroll-uni', MescrollUni)

// uView
import uView from '@/uni_modules/uview-ui'
Vue.use(uView);

App.mpType = 'app'

const app = new Vue({
    ...App
})

// 引入请求封装，将app参数传递到配置中
require('@/config/request.js')(app)

app.$mount()
