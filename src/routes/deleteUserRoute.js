const deleteUserHandler = require('../handlers/deleteUserHandle');

module.exports = {
  method: 'DELETE',
  path: '/user/{id}',
  handler: deleteUserHandler,
};
