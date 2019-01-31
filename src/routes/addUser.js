const addUserHandle = require('../handlers/addUserHandle');

module.exports = {
  method: 'POST',
  path: '/user',
  handler: addUserHandle,
};
