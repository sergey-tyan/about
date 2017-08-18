module.exports = {
    siteMetadata: {
        title: `Gatsby Default Starter`,
    },
    pathPrefix: `/about`,
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography.js`,
            },
        },
    ],

}
