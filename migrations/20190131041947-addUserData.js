'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{
      id: 1,
      firstName: 'qwe',
      lastName: 'rty',
      email: 'qwe.rty@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      id: 2,
      firstName: 'asd',
      lastName: 'fgh',
      email: 'asd.fgh@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date(),
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', [{
      id: 1,
    }, {
      id: 2,
    }], {});
  },
};
