const { parse } = require('url');
const next = require('next');
const greenLock = require('greenlock-express');

const hostname = 'localhost';
const dev = false;
const app = next({ dev });
const handle = app.getRequestHandler();

const ccGeen = '\x1b[32m';
const ccDefault = '\x1b[0m';

const serverHandler = async (req, res) => {
  try {
    const parsedUrl = parse(req.url, true);
    await handle(req, res, parsedUrl);
  } catch (error) {
    console.error('Error occurred handling', req.url, error);
    res.statusCode = 500;
    res.end('internal server error');
  }
};

const prepareHandler = () => {
  const gl = greenLock.init({ packageRoot: __dirname, configDir: './greenlock.d', maintainerEmail: 'adrcrv@gmail.com', cluster: false });
  gl.serve(serverHandler);
};

console.log(`${ccGeen}ready ${ccDefault}- started server on 0.0.0.0, url: http://${hostname}`);
app.prepare().then(prepareHandler);
