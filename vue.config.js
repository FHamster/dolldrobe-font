let proxyObj = {};

/*proxyObj['/ws'] = {
    ws: true,
    target: 'ws://localhost:8082'
};*/

proxyObj['/'] = {
    ws: false,
    target: 'http://139.9.133.60:8082',
    // target: 'http://localhost:8080',
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
