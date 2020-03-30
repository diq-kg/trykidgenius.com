module.exports = {
  siteMetadata: {
    title: `KidGenius`,
    author: `@daycareiq`,
    description: `KidGenius is the easy way to manage a daycare.`,
    keywords: [
      'daycare',
      'dayhome',
      'pre-school',
      'after-shcool',
      'childcare',
      'early childhood',
      'daycare management software',
      'childcare software',
      'attendance tracking software',
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-tailwind`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#4dc0b5`,
        display: `minimal-ui`,
        icon: `src/images/tailwind-icon.png`,
      },
    },
    `gatsby-plugin-postcss`,
    {
      resolve: 'gatsby-plugin-purgecss',
      options: {
        tailwind: true,
        purgeOnly: ['src/css/style.css', 'src/css/global.css'],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-162185683-1',
      },
    },
  ],
};
