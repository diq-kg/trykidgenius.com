module.exports = {
  siteMetadata: {
    title: `KidGenius`,
    author: `@trykidgenius`,
    twitter: '@trykidgenius',
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
      'attendance tracking software',
    ],
    fbAppId: '773103229471525',
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
        icon: `src/images/icon.png`,
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/content/blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1000,
              quality: 95,
              tracedSVG: true,
            },
          },
          `gatsby-transformer-sharp`,
          `gatsby-plugin-sharp`,
          ,
          {
            resolve: 'gatsby-remark-classes',
            options: {
              classMap: {
                paragraph: 'pt-2 pb-2',
                'heading[depth=3]': 'sm:text-xl font-brand-bold py-4',
                'heading[depth=2]': 'text-xl sm:text-2xl font-brand-bold py-4',
                link: 'text-brand-primary',
              },
            },
          },
        ],
      },
    },
    'gatsby-plugin-netlify-cms',
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: '772036800029961',
      },
    },
  ],
};
