'use strict'
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'user',
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      hash: DataTypes.STRING,
    },
    { underscored: true }
  )
  User.associate = function (models) {
    // associations can be defined here
    User.hasMany(models.task, {
      foreignKey: 'userId',
      as: 'tasks',
      onDelete: 'CASCADE',
    })
  }
  return User
}
