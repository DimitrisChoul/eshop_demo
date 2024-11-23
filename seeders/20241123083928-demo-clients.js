"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert("Clients", [
      {
        name: "Dim Choul",
        email: "chouliarasdth@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Alex Nikolias",
        email: "alex.nikolias@test.com",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("Clients", null, {});
  },
};
