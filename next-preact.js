module.exports = (next = {}) =>
  Object.assign({}, next, {
    webpack(config, options) {
      const { dev, isServer } = options;

      // Replace React with Preact in client production bundle.
      if (!dev && !isServer) {
        Object.assign(config.resolve.alias, {
          react: "preact/compat",
          "react-dom": "preact/compat",
        });
      }

      if (typeof next.webpack === "function") {
        return next.webpack(config, options);
      }

      return config;
    },
  });
