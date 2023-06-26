import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
/*引入全局样式*/
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import "./assets/css/style_public.css";
Vue.use(ElementUI);
createApp(App).use(store).use(router).mount("#app");
