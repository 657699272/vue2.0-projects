module.exports = {
    lintOnSave:false,
    devServer:{
        proxy:{
            '/api':{
                target:"URL",
                changeOrigin:true,
                pathRewrite:{
                       '^/api':""
                }
            }
        }
    }
    
}