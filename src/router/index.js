import VueRouter from 'vue-router'
 
import ChatHome from '../view/pages/chatHome/index.vue'
 
export default new VueRouter({
    routes: [
        {
            path: "/",
            redirect: "/ChatHome",
          },
        {
            path: "/ChatHome",
            name: "ChatHome",
            component: ChatHome,
        }
    ]
})