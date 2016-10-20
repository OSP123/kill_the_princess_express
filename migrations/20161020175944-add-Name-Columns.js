'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return [
    queryInterface.addColumn(
        'Users',
        'firstName',
        {
          type: Sequelize.STRING,
          allowNull: true
        }
    ),
    queryInterface.addColumn(
        'Users',
        'lastName',
        {
          type: Sequelize.STRING,
          allowNull: true
        }
    )
    ]
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.removeColumn('Users', 'firstName'),
    queryInterface.removeColumn('Users', 'lastName')
  }
};
