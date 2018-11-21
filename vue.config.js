const SitemapPlugin = require('sitemap-webpack-plugin').default;
const RobotsTxtPlugin = require('robotstxt-webpack-plugin').default;
const FontelloPlugin = require('fontello-webpack-plugin');
const PrerenderSpaPlugin = require('prerender-spa-plugin');
const fontelloConfig = require('./fontello.config');
const path = require('path');

const routes =  [
   '/',
    '/blog',
    '/cv',
    '/blog/case-refactoring-actions-pattern',
   '/blog/case-refactoring-sql-queries'
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

module.exports = {
  configureWebpack: {
    plugins: [
      // fontello fonts
      new FontelloPlugin({
        config: fontelloConfig,
      }),
      // generate robots.txt
      new RobotsTxtPlugin(robotsTxtConfig),
      new SitemapPlugin('https://www.trelobifteki.com', routes),
      new PrerenderSpaPlugin({
        staticDir: path.join(__dirname, 'dist'),
        renderAfterTime: 5000,
        routes,
      }),
    ]
  }
};
