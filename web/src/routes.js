import Home from "@/components/Home";
import About from "@/components/About";
import NotFound from "@/components/NotFound";

// 应用路由表
export default [
    {path: '/', component: Home, meta: {title: '主页'}},
    {path: '/about', component: About, meta: {title: '关于'}},
    // 处理404情况
    {path: '*', component: NotFound, meta: {title: '404'}},
]