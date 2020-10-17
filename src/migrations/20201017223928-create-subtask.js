'use strict'

const withInterval = require('sequelize-interval-postgres')

module.exports = {
  up: (queryInterface, SequelizeBase) => {
    const Sequelize = withInterval(SequelizeBase)

    return queryInterface.createTable('subtasks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      subTask: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      subTaskStart: {
        type: Sequelize.TIME,
      },
      subTaskDuration: {
        type: Sequelize.INTERVAL,
      },
      parentId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    })
  },
  down: (queryInterface) => {
    return queryInterface.dropTable('subtasks')
  },
}
