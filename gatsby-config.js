require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  trailingSlash: 'never',
  siteMetadata: {
    title: 'The Keyframe',
    author: {
      name: 'David Mooney',
      summary: null,
    },
    description: "David Mooney's web development blog",
    siteUrl: 'https://thekeyframe.dev/',
    social: {
      twitter: null,
    },
  },
  plugins: [
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/articles`,
        name: 'blog',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1080,
              backgroundColor: 'transparent',
              linkImagesToOriginal: false,
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem',
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) =>
              allMarkdownRemark.nodes.map(node => ({
                ...node.frontmatter,
                description: node.excerpt,
                date: node.frontmatter.date,
                url: site.siteMetadata.siteUrl + node.fields.slug,
                guid: site.siteMetadata.siteUrl + node.fields.slug,
                custom_elements: [{ 'content:encoded': node.html }],
              })),
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  nodes {
                    excerpt
                    html
                    fields {
                      slug
                    }
                    frontmatter {
                      title
                      date
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: 'The Keyframe RSS Feed',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'The Keyframe Blog',
        short_name: 'The Keyframe',
        description: 'The web development blog of David Mooney',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: `#1f2028`,
        display: 'minimal-ui',
        icon: 'src/images/favicon.png',
        icon_options: {
          purpose: `any maskable`,
        },
      },
    },
    // 'gatsby-plugin-offline',
    'gatsby-plugin-preact',
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        queries: require('./src/utilities/algoliaQueries'),
      },
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        output: '/sitemap/',
        query: `
        {
          site {
            siteMetadata {
              siteUrl
            }
          }
          allSitePage {
            nodes {
              path
            }
          }
        }`,
        resolveSiteUrl: ({
          site: {
            siteMetadata: { siteUrl },
          },
        }) => siteUrl,
        resolvePages: ({ allSitePage }) => {
          const ignorePages = [
            '/404',
            '/404.html',
            '/dev-404-page',
            '/offline-plugin-app-shell-fallback',
          ];

          return allSitePage.nodes.filter(page => !ignorePages.includes(page.path));
        },
        serialize: ({ path }) => {
          const priorities = {
            '/': 1.0,
            '/about': 0.5,
            '/privacy': 0.7,
            '/subscribe': 0.6,
          };

          return {
            url: path,
            lastmod: new Date(Date.now()),
            priority: priorities[path] || 0.9,
            changefreq: 'daily',
          };
        },
      },
    },
  ],
};
