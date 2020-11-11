module.exports = {
    lintOnSave:false,
    proxyTable:{
        '/api':{
            target:"URL",
            changeOrigin:true,
            pathRewrite:{
                   '^/api':""
            }
        }
    }
}