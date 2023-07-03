'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.addColumn('Processos','cozimento',{
                allowNull: false,
                type: Sequelize.BOOLEAN
            }
        );
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.removeColumn('Processos', 'cozimento');
    }
};