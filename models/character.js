'use strict';
module.exports = function(sequelize, DataTypes) {
  var Character = sequelize.define('Character', {
    type: DataTypes.STRING,
    physAtk: DataTypes.INTEGER,
    rngAtk: DataTypes.INTEGER,
    defense: DataTypes.INTEGER
    // userId: {
    //   type: Sequelize.INTEGER,
    //   references: 'users', // <<< Note, its table's name, not object name
    //   referencesKey: 'id' // <<< Note, its a column name
    // }
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