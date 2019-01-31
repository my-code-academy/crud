const model = require('../../models');

module.exports = async (request, h) => {
  const userDetails = await model.users.getUserById(encodeURIComponent(request.params.id));
  return userDetails;
};
