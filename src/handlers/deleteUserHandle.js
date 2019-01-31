const model = require('../../models');

module.exports = async (request, h) => {
  const deleteUserCount = await model.users.deleteUserById(encodeURIComponent(request.params.id));
  return deleteUserCount;
};
