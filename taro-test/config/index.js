const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const is_dev = process.env.NODE_ENV !== 'production';

const config = {
  projectName: 'pcgmall',
  date: '2023-2-22',
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2
  },
  sourceRoot: 'src',
  outputRoot: `dist/${process.env.TARO_ENV}`,
  plugins: [],
  defineConstants: {
  },
  copy: {
    patterns: [
    ],
    options: {
    }
  },
  framework: 'react',
  compiler: 'webpack5',
  cache: {
    enable: true
  },
  mini: {
    webpackChain(chain, webpack) {
      chain.module
        .rule('script')
        .use('linariaLoader')
        .loader('@linaria/webpack5-loader')
        .options({
          sourceMap: process.env.NODE_ENV !== 'production',
        })
    },
    postcss: {
      pxtransform: {
        enable: true,
        config: {

        }
      },
      url: {
        enable: true,
        config: {
          limit: 1024 
        }
      },
      cssModules: {
        enable: true, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  },
  h5: {
    publicPath: '/h5',
    staticDirectory: 'static',
    webpackChain(chain, webpack) {
      chain.module
        .rule('script')
        .use('linariaLoader')
        .loader('@linaria/webpack5-loader')
        .options({
          sourceMap: process.env.NODE_ENV !== 'production',
        })
    },
  },
  rn: {
    appName: 'pcgmall',
    output: {
      ios: './ios/main.jsbundle',
      iosAssetsDest: './ios',
      android: './android/app/src/main/assets/index.android.bundle',
      androidAssetsDest: './android/app/src/main/res',
      // iosSourceMapUrl: '',
      iosSourcemapOutput: './ios/main.map',
      // iosSourcemapSourcesRoot: '',
      // androidSourceMapUrl: '',
      androidSourcemapOutput: './android/app/src/main/assets/index.android.map',
      // androidSourcemapSourcesRoot: '',
    },
  },
  alias: {
	    'tsx': path.resolve(__dirname, '..', 'src'),
	    'img': path.resolve(__dirname, "..", "src/static/images"),
	    'css': path.resolve(__dirname, "..", "src/static/css"),
	    'pkgcomm': path.resolve(__dirname, '..', 'src/pkgcommodity/page'),
	    'pkgorder': path.resolve(__dirname, '..', 'src/pkgorder/page'),
	    'pkglogis': path.resolve(__dirname, '..', 'src/pkglogistics/page'),
	    'pkgmall': path.resolve(__dirname, '..', 'src/pkgmall/page'),
	    'pkgsubj': path.resolve(__dirname, '..', 'src/pkgsubject/page')
  }
}

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  
  return merge({}, config, require('./prd'))
}
