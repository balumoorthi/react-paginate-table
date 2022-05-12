const CracoLessPlugin = require('craco-less');

const antdTheme = require('./antd.theme');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: antdTheme,
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
