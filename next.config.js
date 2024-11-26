const runtimeCaching = require('next-pwa/cache')

const withPWA = require('next-pwa')({
  disable: process.env.NODE_ENV === 'development',
  dest: '/public',
  runtimeCaching: runtimeCaching,
})

module.exports = withPWA({})
