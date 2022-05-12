import config from '../assets/config';
import interceptor from './interceptor';

const axios = require('axios');

const ax = axios.create({
  baseURL: config.apiURL,
});

interceptor(ax);

export default ax;
