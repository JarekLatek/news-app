const superagent = require('superagent');

const NEWS_API_URL = 'https://newsapi.org/v2';
const TOP_HEADLINES_ENDPOINT_PATH = '/top-headlines';
const API_KEY = '9a72f798cb4640b4a1c318ab8e187c96';

const EVERYTHING_ENDPOINT_PATH = '/everything';

const getMainArticles = (query) => superagent
  .get(`${NEWS_API_URL}${TOP_HEADLINES_ENDPOINT_PATH}`)
  .query({ country: 'pl', ...query, apiKey: API_KEY, pageSize: '12'});

const getFilmNews = (query) => superagent
  .get(`${NEWS_API_URL}${EVERYTHING_ENDPOINT_PATH}`)
  .query({ language: 'pl', ...query, apiKey: API_KEY, q: 'film', pageSize: '12' });

module.exports = {
  getMainArticles,
  getFilmNews
};