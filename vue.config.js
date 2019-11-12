let proxyObj = {};

/*proxyObj['/ws'] = {
    ws: true,
    target: 'ws://localhost:8082'
};*/

proxyObj['/'] = {
    ws: false,
    target: 'http://localhost:8080',
    changeOrigin: true,
  /*  pathRewrite: {
        '^/': ''
    }*/
};

module.exports = {
    devServer: {
        host: '0.0.0.0',
        port: 8082,
        proxy: proxyObj
    }
};
