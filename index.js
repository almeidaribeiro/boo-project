const app = require("./src/routes");
const http = require("http");

const port = process.env["PORT"] || 3000;

const server = http.Server(app);

server.listen(port, () => {
  console.log("servidor rodando na porta 3000");
});
