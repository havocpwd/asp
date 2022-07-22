module.exports = {
    configureWebpack: {
        devServer: {
            proxy: {
                '/api' : {
                    target: 'http://localhost:8000',
                    changeOrigin: true,
                    secure: false,
                    pathRewrite: {
                        '^/api': ''
                    },
                    onProxyReq: function (proxyReq, req, res) {
                        proxyReq.setHeader("host", 'localhost:8000')
                    }
                }
            }
        }
    }
}