'use strict'
module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('task', {
    task: DataTypes.STRING,
    taskStart: DataTypes.DATE,
    taskDuration: DataTypes.RANGE,
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
