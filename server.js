require('dotenv').config();
const Koa = require('koa');
const cors = require('koa-cors');
const botServer = require('./bot-server');

const app = new Koa();
const port = process.env.PORT || 8081;
const corsOptions = {
  methods: ['GET'],
};

app.use(cors(corsOptions));
app.use(botServer);

app.listen(port, () => console.log('Listening on', port));
