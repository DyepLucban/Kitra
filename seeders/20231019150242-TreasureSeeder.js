'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Treasures', [
      {
        latitude: '14.5437648051331',
        longitude: '121.019911678311',
        name: 'T1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        latitude: '14.5532076554883',
        longitude: '121.055774532421',
        name: 'T2',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        latitude: '14.5446435656183',
        longitude: '121.020365629871',
        name: 'T3',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        latitude: '14.5872615919051',
        longitude: '120.979504794655',
        name: 'T4',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        latitude: '14.5732032723718',
        longitude: '121.023090376156',
        name: 'T5',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        latitude: '14.5231131289849',
        longitude: '121.019457319516',
        name: 'T6',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        latitude: '14.6024229153284',
        longitude: '121.011513378939',
        name: 'T7',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        latitude: '14.6085746293116',
        longitude: '121.018551395794',
        name: 'T8',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        latitude: '14.4911143426092',
        longitude: '121.043748206197',
        name: 'T9',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        latitude: '14.5445595272478',
        longitude: '121.106088282234',
        name: 'T10',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        latitude: '14.5879814117365',
        longitude: '121.058208029763',
        name: 'T11',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        latitude: '14.5488649285797',
        longitude: '121.03363929755',
        name: 'T12',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        latitude: '14.5371505894201',
        longitude: '120.990430237915',
        name: 'T13',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        latitude: '14.5257966600328',
        longitude: '121.020868844103',
        name: 'T14',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        latitude: '14.5170998780454',
        longitude: '120.981002106201',
        name: 'T15',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        latitude: '14.502006871058',
        longitude: '120.991618127534',
        name: 'T16',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        latitude: '14.521124409049',
        longitude: '121.042771368704',
        name: 'T17',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        latitude: '14.4772076562187',
        longitude: '120.986792724064',
        name: 'T18',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Treasures', null, {})
  }
};
