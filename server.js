// server.js

const { createProxyMiddleware } = require("http-proxy-middleware");
const { createServer } = require("http");

const proxy = createProxyMiddleware({
  target: "https://mockapi.io/projects/6555c3a784b36e3a431e45f2/User",
  changeOrigin: true,
  pathRewrite: {
    "^/api/random.json": "/random.json", // Remove '/api' from the request path
  },
});

const server = createServer((req, res) => {
  proxy(req, res);
});

server.listen(8080, () => {
  console.log("Proxy server listening on port 3000");
});
