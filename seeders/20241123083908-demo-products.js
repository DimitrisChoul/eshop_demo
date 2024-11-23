"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert("Products", [
      {
        name: "Lenovo i5",
        description: "Gamng laptop.",
        quantity: 100,
        price: 1200.0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "SamsungA54",
        description: "Good camera.",
        quantity: 200,
        price: 350.0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "QCY Melobuds",
        description: "Noise-cancelling ear buds.",
        quantity: 150,
        price: 150.0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("Products", null, {});
  },
};
