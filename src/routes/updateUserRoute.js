const updateUserHandle = require('../handlers/updateUserHandle');

module.exports = {
  method: 'PUT',
  path: '/user',
  handler: updateUserHandle,
};
