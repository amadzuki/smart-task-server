'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */
    return Promise.all([
      queryInterface.changeColumn('tasks', 'taskStart', Sequelize.TIME),
      queryInterface.addColumn('tasks', 'taskDate', {
        type: Sequelize.DATEONLY,
        defaultValue: Sequelize.NOW,
        allowNull: false,
      }),
    ])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
    */
    return Promise.all([
      queryInterface.removeColumn('tasks', 'taskStart'),
      queryInterface.addColumn('tasks', 'taskStart', { type: Sequelize.TIME }),
      queryInterface.removeColumn('tasks', 'taskDate'),
    ])
  },
}
