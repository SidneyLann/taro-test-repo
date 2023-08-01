module.exports = {
  env: {
    NODE_ENV: '"development"'
  },
  defineConstants: {
  },
  mini: {
    debugReact:true,
  },
  h5: {
    devServer: {
        proxy: {
            '/api/': {
                target: "https://www.pc8g.com",
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                  '^/api/': ''
                },
            }
        }
    }
  },
  rn: {
  }
}
