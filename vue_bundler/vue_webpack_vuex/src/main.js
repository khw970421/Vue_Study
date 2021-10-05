import {createApp} from 'vue'
import App from '~/App'
//전역등록
// import Btn from '~/component/Btn'
import store from '~/store'

const app = createApp(App)
app.use(store)
app.mount('#app')
