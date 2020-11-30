module.exports = {
    publicPath: "./",
    configureWebpack: {
        resolve: {
            alias: {
                vue$:'vue/dist/vue.esm.js'
            }
        }
    }
};