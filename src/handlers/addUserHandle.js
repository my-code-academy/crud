const model = require('../../models');

module.exports = async (request, h) => {
  try {
    await model.users.generate(request.payload.id, request.payload.firstName,
      request.payload.lastName, request.payload.email);
  } catch (error) {
    return new Error(error);
  }
  return 'Added User';
};
