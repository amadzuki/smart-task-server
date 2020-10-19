'use strict'
const withInterval = require('sequelize-interval-postgres')
module.exports = (sequelize, SequelizeDataTypes) => {
  const DataTypes = withInterval(SequelizeDataTypes)

  const Task = sequelize.define('task', {
    task: DataTypes.STRING,
    taskDate: DataTypes.DATE,
    taskStart: DataTypes.TIME,
    taskDuration: DataTypes.INTERVAL,
    location: DataTypes.STRING,
    userId: DataTypes.INTEGER,
  })
  Task.associate = function (models) {
    Task.hasMany(models.subtask, {
      foreignKey: 'parentId',
      onDelete: 'CASCADE',
    })
    Task.belongsTo(models.user)
  }
  return Task
}
