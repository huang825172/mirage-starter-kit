module.exports = {
    publicPath: "./",
    configureWebpack: {
        resolve: {
            alias: {
                vue$: 'vue/dist/vue.esm.js'
            }
        }
    },
    devServer: {
        port: 8081,
        proxy: {
            '/api': {
                target: "http://119.29.60.125:3000",
                changeOrigin: true,
            },
        },
    }
};