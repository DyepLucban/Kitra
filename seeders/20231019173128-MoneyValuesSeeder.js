'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('MoneyValues', [
      {
        amount: 15,
        treasure_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()        
      },
      {
        amount: 10,
        treasure_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()        
      },
      {
        amount: 15,
        treasure_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()        
      },
      {
        amount: 15,
        treasure_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        amount: 10,
        treasure_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()        
      },
      {
        amount: 15,
        treasure_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        amount: 15,
        treasure_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        amount: 10,
        treasure_id: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        amount: 15,
        treasure_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        amount: 15,
        treasure_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        amount: 10,
        treasure_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        amount: 15,
        treasure_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        amount: 15,
        treasure_id: 13,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        amount: 10,
        treasure_id: 14,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        amount: 15,
        treasure_id: 15,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        amount: 15,
        treasure_id: 16,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        amount: 10,
        treasure_id: 17,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        amount: 15,
        treasure_id: 18,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        amount: 20,
        treasure_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        amount: 25,
        treasure_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        amount: 20,
        treasure_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        amount: 25,
        treasure_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        amount: 30,
        treasure_id: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        amount: 30,
        treasure_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        amount: 30,
        treasure_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('MoneyValues', null, {})
  }
};
