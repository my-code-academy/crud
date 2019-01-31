const model = require('../../models');

module.exports = async (request, h) => {
  try {
    await model.users.updateFirstName(request.payload.oldFirstName, request.payload.newFirstName);
  } catch (error) {
    return new Error(error);
  }
  return 'updated User first name';
};
