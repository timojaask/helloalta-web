if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
  console.log('Requested .env file')
}

console.log(JSON.stringify(process.env))

console.log('TRACKING ID: ' + process.env.GA_TRACKING_ID)

module.exports = {
  siteMetadata: {
    title: `helloalta`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GA_TRACKING_ID,
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: false,
        // Setting this parameter is also optional
        respectDNT: false,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `lato`
        ]
      }
    },
  ]
}