const Hapi = require('hapi');
const getUserRoute = require('./src/routes/getUserRoute');
const addUserRoute = require('./src/routes/addUser');
const deleteUserRoute = require('./src/routes/deleteUserRoute');
const updateUserRoute = require('./src/routes/updateUserRoute');

const server = Hapi.server({
  port: 8082,
  host: 'localhost',
});

const init = async () => {
  server.route(getUserRoute);
  server.route(addUserRoute);
  server.route(deleteUserRoute);
  server.route(updateUserRoute);
  server.route({
    method: 'GET',
    path: '/us',
    handler: async (request, h) => {
      return 'hi';
    },
  });
  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
};

init();

module.exports = server;
