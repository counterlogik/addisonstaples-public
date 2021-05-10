module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        google: {
          families: [`Roboto Mono`, `Roboto`]
        }
      }
    },
    `gatsby-plugin-layout`
  ]
}
