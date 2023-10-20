'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [
      {
        name: 'U1',
        age: 21,
        password: '123123',
        email: 'u1@kitra.abc',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'U2',
        age: 51,
        password: '234234',
        email: 'u2@kitra.abc',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'U3',
        age: 31,
        password: '345345',
        email: 'u3@kitra.abc',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'U4',
        age: 18,
        password: '456456',
        email: 'u4@kitra.abc',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'U5',
        age: 21,
        password: '567567',
        email: 'u5@kitra.abc',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'U6',
        age: 35,
        password: '678678',
        email: 'u6@kitra.abc',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
