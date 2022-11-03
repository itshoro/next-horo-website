const { withContentlayer } = require("next-contentlayer");

module.exports = withContentlayer({
  swcMinify: true,
  images: {
    domains: ["i.scdn.co"],
  },
  webpack: (config, { dev, isServer }) => {
    return config;
  },
});
