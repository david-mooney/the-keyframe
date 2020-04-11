module.exports = {
  siteMetadata: {
    title: 'The Keyframe',
    author: {
      name: 'David Mooney',
    },
    description: 'A Blog All About Creating Web Experiences',
    siteUrl: 'https://gatsby-starter-blog-demo.netlify.com/',
    social: {},
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/blog`,
        name: 'blog',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/assets`,
        name: 'assets',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 590,
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
      resolve: 'gatsby-plugin-google-analytics',
      options: {},
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-styled-components',
      options: {},
    },
    {
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        alias: {
          '@components': 'src/components',
          '@templates': 'src/templates',
          '@pages': 'src/pages',
          '@styles': 'src/styles',
        },
        extensions: ['js', 'jsx'],
      },
    },
    {
      resolve: 'gatsby-plugin-transition-link',
    },
    // 'gatsby-plugin-offline', // fixme: PWA
  ],
};
