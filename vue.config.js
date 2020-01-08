const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackCdnPlugin = require('webpack-cdn-plugin');
const SitemapPlugin = require('sitemap-webpack-plugin').default;
const RobotsTxtPlugin = require('robotstxt-webpack-plugin');
const FontelloPlugin = require('fontello-webpack-plugin');
const PrerenderSpaPlugin = require('prerender-spa-plugin');
const fontelloConfig = require('./fontello.config');
const path = require('path');
const webpack = require('webpack');
const fs = require('fs');
const packageJson = fs.readFileSync('./package.json');
const version = JSON.parse(packageJson).version || -1;
const routes =  [
   '/',
    '/blog',
    '/cv',
    '/blog/case-refactoring-actions-pattern',
    '/blog/case-refactoring-sql-queries',
    '/blog/howto-write-tickets',
];

const robotsTxtConfig = {
  policy: [
      {
        userAgent: "Googlebot",
        allow: "/",
        crawlDelay: 2
      },
      {
        userAgent: "OtherBot",
        allow: "/",
        crawlDelay: 2
      },
      {
        userAgent: "*",
        allow: "/",
        crawlDelay: 10,
      }
    ],
    sitemap: "http://www.trelobifteki.com/sitemap.xml",
    host: "http://www.trelobifteki.com"
};


let plugins = [
  new HtmlWebpackPlugin(),
  new WebpackCdnPlugin({
    modules: [
      {
        name: 'vue',
        var: 'Vue',
        path: 'dist/vue.runtime.min.js',
      }, {
        name: 'vue-router',
        var: 'VueRouter',
        path: 'dist/vue-router.min.js',
      }, {
        name: 'vuex',
        var: 'Vuex',
        path: 'dist/vuex.min.js'
      }
    ],
    publicPath: '/node_modules',
  }),
  new FontelloPlugin({
    config: fontelloConfig,
  }),
  new webpack.DefinePlugin({
    'process.env': {
      PACKAGE_VERSION: '"' + version + '"'
    }
  }),
];

if (process.env.NODE_ENV === 'production') {
  plugins = [
    ...plugins,
    new RobotsTxtPlugin(robotsTxtConfig),
    new SitemapPlugin('https://www.trelobifteki.com', routes),
    new PrerenderSpaPlugin({
      staticDir: path.join(__dirname, 'dist'),
      renderAfterTime: 5000,
      routes,
    }),
  ];
}

module.exports = {
  productionSourceMap: false,
  configureWebpack: {
    plugins,
  },
  chainWebpack: config => {
    config.module
      .rule('markdown')
      .test(/.md$/)
      .use('html-loader')
      .loader('markdown-loader')
      .end();
  },
};
