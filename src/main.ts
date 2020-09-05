import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { AppConfig } from './config/app'

import { loadAtdComponent } from '@/plugins/antd'

/** 导入第三方插件 */
import '@/plugins'

/** 将全局静态配置注入到应用中,可以通过 this.a读取,比 provide 和 inject 手动注入更方便  */
const app: ReturnType<typeof createApp> = createApp(App)
app.config.globalProperties = AppConfig

/** 手动注册 antd-vue 组件 */
loadAtdComponent(app)

app.use(store).use(router).mount('#app')
