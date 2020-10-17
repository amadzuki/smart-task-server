'use strict'
// The coloum "taskDuration" is better with DateType INTERVAL, but sequelize haven't implemented it yet. Thus come another package as follows
const withInterval = require('sequelize-interval-postgres')
module.exports = {
  up: (queryInterface, SequelizeBase) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
      */
    const Sequelize = withInterval(SequelizeBase)
    return Promise.all([
      queryInterface.removeColumn('tasks', 'taskDuration'),
      queryInterface.addColumn('tasks', 'taskDuration', {
        type: Sequelize.INTERVAL,
      }),
    ])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
    */
    return Promise.all([
      queryInterface.removeColumn('tasks', 'taskDuration'),
      queryInterface.addColumn('tasks', 'taskDuration', {
        type: Sequelize.RANGE(Sequelize.DATE),
      }),
    ])
  },
}
