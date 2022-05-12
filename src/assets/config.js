const configData = process.env;

const config = {};

try {
  config.apiURL =
    configData.REACT_APP_API_BASE_URI ||
    'https://dev.heartfuleducation.org/admin-api/api/v1/';
  config.basicMailURL = '';
} catch {
  config.apiURL = 'https://dev.heartfuleducation.org/admin-api/api/v1/';
  config.basicMailURL = '';
}

export default config;
