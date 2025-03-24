const axios = require('axios');
require('dotenv').config();

const headers = {
  Authorization: process.env.CLICKUP_API_TOKEN,
  'Content-Type': 'application/json'
};

exports.makeApiCall = async (url, method = 'get', data = null) => {
  try {
    const response = await axios({ method, url, data, headers });
    return response.data;
  } catch (error) {
    console.log('API error:', error.response?.data || error.message);
  }
  return null;
};