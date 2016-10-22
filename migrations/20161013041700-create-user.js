'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING
      },
      password_hash: {
        type: Sequelize.STRING
      },
      username: {
        type: Sequelize.STRING
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    // return queryInterface.dropTable('Users');
    queryInterface.sequelize.query(
      'SET FOREIGN_KEY_CHECKS = 0;', {raw: true}
    ).then(function(results){
      queryInterface.sequelize.query(
        'DROP TABLE IF EXISTS Characters'
      )
    })
    .then(function(){
      return queryInterface.dropTable('Users');
    })
  }
};