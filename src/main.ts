import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import awsConfig from "./aws-exports";
import Amplify, * as AmplifyModules from "aws-amplify";

// @ts-ignore
import {AmplifyPlugin} from "aws-amplify-vue";

Amplify.configure(awsConfig);
Vue.use(AmplifyPlugin, AmplifyModules);

Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App)
}).$mount("#app");
