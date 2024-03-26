module.exports = {
  rollup(config, options) {
    config.output.banner = "'use client';";
    return config;
  },
};