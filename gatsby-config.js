const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = 'https://x.campjs.org',
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV,
} = process.env;
const isNetlifyProduction = NETLIFY_ENV === 'production';
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL;

module.exports = {
  siteMetadata: {
    title: 'CampJS X',
    description:
      'CampJS is a 3-night code retreat in Lord Somers Camp, Victoria, Australia.',
    author: '@campjs',
    siteUrl,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-page-creator',
      options: {
        path: `${__dirname}/src/pages`,
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/asset/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'downloads',
        path: `${__dirname}/src/asset/downloads`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'CampJS XI',
        short_name: 'CampJS XI',
        start_url: '/',
        background_color: '#EC685A',
        theme_color: '#EC685A',
        display: 'minimal-ui',
        icon: 'src/asset/images/tent.svg', // This path is relative to the root of the site.
        screenshots: [
          {
            src: 'src/assets/images/campjsx-social-image.png',
            sizes: '1200x675',
            type: 'image/png',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-emotion',
      options: {
        // Accepts all options defined by 'babel-plugin-emotion' plugin.
      },
    },
    {
      resolve: 'gatsby-plugin-netlify',
      options: {
        headers: {
          '/google-fonts/*': [
            'Cache-Control: public,max-age=31536000,immutable',
          ],
        },
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        resolveEnv: () => NETLIFY_ENV,
        env: {
          production: {
            policy: [{ userAgent: '*' }],
          },
          'branch-deploy': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null,
          },
          'deploy-preview': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null,
          },
        },
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /src\/asset/,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-prefetch-google-fonts',
      options: {
        fonts: [
          {
            family: 'Anonymous Pro',
            variants: ['400', '700'],
          },
          {
            family: 'DM Sans',
            variants: ['400', '700'],
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        alias: {
          asset: 'src/asset',
          util: 'src/util',
          component: 'src/component',
          layout: 'src/layout',
        },
        extensions: ['js'],
      },
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {},
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
};
