'use strict'

const withInterval = require('sequelize-interval-postgres')

module.exports = (sequelize, SequelizeDataTypes) => {
  const DataTypes = withInterval(SequelizeDataTypes)

  const SubTask = sequelize.define(
    'subtasks',
    {
      subTask: DataTypes.STRING,
      subTaskStart: DataTypes.INTEGER,
      subTaskDuration: DataTypes.INTERVAL,
      parentId: DataTypes.INTEGER,
    },
    {}
  )
  SubTask.associate = function (models) {
    // associations can be defined here
    SubTask.belongsTo(models.task, {
      foreignKey: 'parentId',
      onDelete: 'CASCADE',
    })
  }
  return SubTask
}
