const webpack = require('webpack')

const withOffline = moduleExists('next-offline')
  ? require('next-offline')
  : {}

const customWebpackConfig = config => {
  config.plugins.push(
    new webpack.ProvidePlugin({
      Component: ['react', 'Component'],
      css: ['styled-components', 'css'],
      forwardRef: ['react', 'forwardRef'],
      Fragment: ['react', 'Fragment'],
      // TODO: Get this working. ~ RM
      // styled: 'styled-components',
      useCallback: ['react', 'useCallback'],
      useContext: ['react', 'useContext'],
      useEffect: ['react', 'useEffect'],
      useRef: ['react', 'useRef'],
      useState: ['react', 'useState']
    })
  )
  return config
}

const nextConfig = {
  target: 'serverless',
  webpack: customWebpackConfig,
  workboxOpts: {
    swDest: 'static/service-worker.js',
    runtimeCaching: [
      {
        urlPattern: /^https?.*/,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'https-calls',
          networkTimeoutSeconds: 15,
          expiration: {
            maxEntries: 150,
            maxAgeSeconds: 30 * 24 * 60 * 60, // 1 month
          },
          cacheableResponse: {
            statuses: [0, 200],
          }
        }
      }
    ]
  }
}


module.exports = moduleExists('next-offline')
  ? withOffline(nextConfig)
  : nextConfig

function moduleExists(name) {
  try {
    return require.resolve(name);
  } catch (error) {
    return false
  }
}
