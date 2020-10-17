'use strict'
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    name: { type: DataTypes.STRING, unique: true },
    email: { type: DataTypes.STRING, unique: true },
    hash: DataTypes.STRING,
  })
  User.associate = function (models) {
    // associations can be defined here
    User.hasMany(models.task, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
    })
  }
  return User
}
