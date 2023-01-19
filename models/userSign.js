const { Model, DataTypes, ENUM } = require('sequelize');

const sequelize = require('../config/connection');

class userSign extends Model {}

userSign.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    birthday: {
      type: DataTypes.DATE,
      allowNull: false,
      status: ENUM,
    }
  
    },
  
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'userSign',
  }
);

module.exports = userSign;
