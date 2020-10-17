'use strict'
module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('task', {
    task: DataTypes.STRING,
    taskStart: DataTypes.DATE,
    taskDuration: DataTypes.RANGE,
    userId: DataTypes.INTEGER,
  })
  Task.associate = function (models) {
    // associations can be defined here
    Task.belongsTo(models.user, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
    })
    Task.hasMany(models.subtask)
  }
  return Task
}
