'use strict'
module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('task', {
    task: DataTypes.STRING,
    taskStart: DataTypes.DATE,
    taskDuration: DataTypes.RANGE,
    userId: DataTypes.INTEGER,
  })
  return Task
}
