
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
  }, {});
  users.generate = (id, firstName, lastName, email) => users.create({
    id, firstName, lastName, email,
  });
  users.getAllUsers = () => users.findAll();
  users.getUserById = userId => users.findAll({
    where: {
      id: userId,
    },
  });
  users.deleteUserById = (userID) => {
    return users.destroy({
      where: {
        id: userID,
      },
    });
  };
  users.updateFirstName = (oldFirstName, newFirstName) => {
    return users.update({
      firstName: newFirstName,
    }, {
      where: {
        firstName: oldFirstName,
      },
    });
  };
  return users;
};
