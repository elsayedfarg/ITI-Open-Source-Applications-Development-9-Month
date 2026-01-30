const jsonServer = require("json-server");
const auth = require("json-server-auth");

const server = jsonServer.create();
const dbRouter = jsonServer.router("./database.json");
const middlewares = jsonServer.defaults();

server.db = dbRouter.db; // activating auth

server.use(middlewares);

server.use(auth); // adding routes like /login /register
server.use(dbRouter); // use the created routes

const PORT = 5000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
