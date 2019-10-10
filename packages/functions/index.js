const path = require('path');
const functions = require('firebase-functions');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({
  dev,
  conf: {
    distDir: `${path.relative(process.cwd(), __dirname)}/next`
  },
});
const handle = app.getRequestHandler();

exports.next = functions.https.onRequest((req, res) => {
  return app.prepare().then(() => handle(req, res));
});