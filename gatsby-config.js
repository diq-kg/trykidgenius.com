module.exports = {
  siteMetadata: {
    title: `KidGenius`,
    author: `@daycareiq`,
    description: `KidGenius is the easy way to manage a daycare.`,
    url: 'https://www.trykidgenius.com',
    keywords: [
      'daycare',
      'dayhome',
      'pre-school',
      'after-shcool',
      'childcare',
      'early childhood',
      'daycare management software',
      'childcare software',
      'attendance tracking software'
    ],
    fbAppId: '773103229471525'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `KidGenius.com`,
        short_name: `kg.com`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#4dc0b5`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`
      }
    },
    `gatsby-plugin-postcss`,
    {
      resolve: 'gatsby-plugin-purgecss',
      options: {
        tailwind: true,
        purgeOnly: ['src/css/style.css', 'src/css/global.css']
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-162185683-1'
      }
    }
  ]
};
