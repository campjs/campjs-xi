/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `CampJS XI`,
    description: `CampJS is a 3 night code retreat held in the Gold Coast hinterland, Australia.`,
    keywords: 'CampJS, javascript, conference, australia',
    siteUrl: `https://xi.campjs.com`,
    menuLinks: [
      {
        name: `Home`,
        url: `/`,
      },
      {
        name: 'Schedule',
        url: 'https://cfp.campjs.org/campjs-xi/schedule/',
      },
      {
        name: `Code of Conduct`,
        url: `/code-of-conduct/`,
      },
      {
        name: `COVID-19`,
        url: `/covid-19/`,
      },
      {
        name: `About`,
        url: `/about/`,
      },
      // {
      //   name: `Tickets`,
      //   url: `/tickets`,
      // },
      // {
      //   name: `Schedule`,
      //   url: `/schedule`,
      // },
      // {
      //   name: `Call for papers`,
      //   url: `/call-for-papers`,
      // },
    ],
  },
  plugins: ["gatsby-plugin-styled-components", "gatsby-plugin-sitemap", "gatsby-plugin-mdx", "gatsby-plugin-react-helmet", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }]
};