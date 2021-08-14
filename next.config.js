const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase, { defaultConfig }) => {
  console.log(phase, "phase");
  // console.log(defaultConfig, "defaultConfig");
  defaultConfig.webpack = (config, { webpack, buildId, isServer }) => {
    console.log(buildId, "buildId");
    return config;
  };

  return defaultConfig;
};
