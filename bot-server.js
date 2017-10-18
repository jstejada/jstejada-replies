const T = require('./twitter');
const TwitterBots = [
  'MagicRealismBot',
];


function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getBot() {
  return pickRandom(TwitterBots);
}

function getTweet(timeline) {
  return pickRandom(Array.from(timeline).map(tweet => tweet.text));
}

module.exports = function* botServer(next) {
  if (this.request.path !== '/hi') {
    yield next;
    return;
  }
  try {
    const result = yield T.get('statuses/user_timeline', {
      screen_name: getBot(),
      exclude_replies: true,
      include_rts: false,
    });
    this.response.body = JSON.stringify({
      reply: getTweet(result.data),
    });
  } catch (err) {
    this.throw(JSON.stringify({ err: err.message }), 500);
  }
};
