const RobotsTxtPlugin = require('robotstxt-webpack-plugin');
const PrerenderSpaPlugin = require('prerender-spa-plugin');
const SitemapPlugin = require('sitemap-webpack-plugin').default;
const { defineConfig } = require('@vue/cli-service');
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
    '/blog/data-visualization-vuejs-d3js',
    '/blog/jenkins-pipeline-for-frontend-apps',
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
  new webpack.DefinePlugin({
    'process.env': {
      PACKAGE_VERSION: '"' + version + '"'
    }
  })
];

if (process.env.NODE_ENV === 'production') {
  plugins = [
    ...plugins,
    new RobotsTxtPlugin(robotsTxtConfig),
    new SitemapPlugin({
      base: 'https://www.trelobifteki.com',
      paths: routes,
      options: {
        lastmod: true,
        changefreq: 'weekly',
      },
    }),
	  /*
    new PrerenderSpaPlugin({
      staticDir: path.join(__dirname, 'dist'),
      renderAfterTime: 5000,
      routes,
    }),
    */
  ];
}

module.exports = defineConfig({
  transpileDependencies: true,
  productionSourceMap: false,
  configureWebpack: {
    plugins,
  },
  chainWebpack: config => {
    config.module.rule('markdown')
      .test(/.md$/)
      .use([
        'html-loader',
        'markdown-loader'
      ])
      .loader('markdown-loader')
      .end();
  },
});
