const getUserHandler = require('../handlers/getUserDataHandle');

module.exports = {
  method: 'GET',
  path: '/user/{id}',
  handler: getUserHandler,
};
