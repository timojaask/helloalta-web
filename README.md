# alta-web
helloalta.com website.

## Google Analytics
`gatsby-config.js` expects `GA_TRACKING_ID` environment variable to be present. Add this to your CI configuration. Google Analytics module is only enabled in production environment (``process.env.NODE_ENV === `production` ``).

## Development and release
To run locally in development mode:
```
gatsby develop
```

To build for production (usually done on CI system):
```
gatsby build
```