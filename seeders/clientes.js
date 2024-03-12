'use strict';
const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Crie e insira o primeiro usuário
    await queryInterface.bulkInsert('clientes', [{
      nome: 'Marcela Beh',
      email: 'marcela',
      cpf: '00000000000',
      telefone: '984888601',
    }]);

    // Crie e insira o segundo usuário
    await queryInterface.bulkInsert('clientes', [{
      nome: 'Lucas Pontes',
      email: 'lucas',
      cpf: '00000000000',
      telefone: '984886610',
    }]);

    // Crie e insira o terceiro usuário
    await queryInterface.bulkInsert('clientes', [{
      nome: 'Aurelio Muzzi',
      email: 'aurelio',
      cpf: '00000000000',
      telefone: '984886610',
    }]);
  },

  async down(queryInterface, Sequelize) {
    // Exclua todos os usuários do banco de dados
    return queryInterface.bulkDelete('clientes', null, {});
  },
};
