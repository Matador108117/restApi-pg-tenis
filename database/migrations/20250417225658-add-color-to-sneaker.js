'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Sneakers', 'color', {
      type: Sequelize.STRING,
      allowNull: false
    });
    await queryInterface.addColumn('Sneakers', 'sex', {
      type: Sequelize.STRING,
      allowNull: false
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Sneakers', 'color');
    await queryInterface.removeColumn('Sneakers','sex'); 
  }
};
