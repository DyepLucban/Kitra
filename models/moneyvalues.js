'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MoneyValues extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Treasures, {
        foreignKey: 'treasure_id',
        as: 'treasure'
      })
    }
  }
  MoneyValues.init({
    amount: {
      type: DataTypes.INTEGER
    },
    treasure_id: {
      type: DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'MoneyValues',
  });
  return MoneyValues;
};