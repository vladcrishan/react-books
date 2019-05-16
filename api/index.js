const jsonServer = require('json-server');
const routes = require('./routes.js');

const server = jsonServer.create();
const router = jsonServer.router(routes);
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
server.listen(3000, () => {
  console.log('');
  console.log('=================================================');
  console.log('API is accessible at: http://localhost:3000/');
  console.log('=================================================');
  console.log('');
});
