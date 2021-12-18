module.exports = {
  siteMetadata: {
    siteUrl: "https://skillsboy.github.io/gatsby-todo-app",
    title: "Gatsby todo app",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
  ],
  pathPrefix: '/gatsby-todo-app',
};
