'use strict';
module.exports = function(sequelize, DataTypes) {
  var Character = sequelize.define('Character', {
    type: DataTypes.STRING,
    physAtk: DataTypes.INTEGER,
    rngAtk: DataTypes.INTEGER,
    defense: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Character.belongsTo(models.User, { foreignKey:'userId'} );
      }
    }
  });
  return Character;
};