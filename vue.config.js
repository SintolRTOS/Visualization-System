module.exports = {
    lintOnSave: process.env.NODE_ENV !== 'production',
    productionSourceMap: false,
    chainWebpack: (config) => {
        config.externals({
            'vue': 'Vue',
            'vue-router': 'VueRouter',
            'vuex': 'Vuex',
            'axios': 'axios',
            'element-ui': 'ELEMENT',
        })
    },
    transpileDependencies: ['avue-plugin-transfer'],
    //配置转发代理
    devServer: {
        overlay: {
            warnings: true,
            errors: true
        },
        // proxy: {
        //     '/api': {
        //         target: 'http://127.0.0.1:3000',
        //         ws: true,
        //         pathRewrite: {
        //             '^/api': '/api'
        //         }
        //     },
        // }
    }
}