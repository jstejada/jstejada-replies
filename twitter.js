const Twit = require('twit');

const T = new Twit({
  consumer_key: '5C3zlQZdbIafhqkgt70CkKIA6',
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  app_only_auth: true,
  timeout_ms: 30 * 1000,
});

module.exports = T;