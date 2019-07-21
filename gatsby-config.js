module.exports = {
  siteMetadata: {
    title: `AMGR.dev`,
    description: `This is the website of **Allan MacGregor**, software engineer & writer. I'm mostly interested in technology, software engineering and self-improvement; I'm best known for my work on\
     [ecommerce development](/essay/software-engineering#ecommerce) and [software engineering](/essay/software-engineering).`,
     information: `For information about my site’s philosophy, method, traffic statistics, and implementation, see the [About page](/pages/about); for information about myself, my use of other websites, and contact information.`,
     author: `@allanmacgregor`,
  },
  pathPrefix: `/amgr.dev`,
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `PT Serif`,
            variants: [`400`, `700`]
          },
          {
            family: `Playfair Display`,
            variants: [`400`, `700`]
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/content/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/content/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `essays`,
        path: `${__dirname}/src/content/essays`,
      },
    },
    {
      resolve: `gatsby-mdx`,
      options: {
        extensions: [".mdx", ".md"],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-slug`,
            options:{}
          }
        ]
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `amgr_dev`,
        short_name: `amgr`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/images/logo-transparent.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-144246655-1"
      },
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
