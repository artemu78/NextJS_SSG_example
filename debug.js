const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");

const DEFAULT_PORT = 3000;

const dev = process.env.NODE_ENV !== "production";
const port = parseInt(process.env.PORT, 10) || DEFAULT_PORT;
const modeName = dev ? "development" : "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    // Be sure to pass `true` as the second argument to `url.parse`.
    // This tells it to parse the query portion of the URL.
    const parsedUrl = parse(req.url, true);
    const { pathname, query } = parsedUrl;

    handle(req, res, parsedUrl);
    console.log(req.url);
  }).listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port} in ${modeName} mode`);
  });
});
