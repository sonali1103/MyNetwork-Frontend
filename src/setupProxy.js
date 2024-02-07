const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://mern-back-rx3h.onrender.com',
      changeOrigin: true,
    })
  );
};