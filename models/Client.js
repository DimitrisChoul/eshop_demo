const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Client = sequelize.define("Client", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  });

  Client.associate = (models) => {
    Client.hasOne(models.Cart, { foreignKey: "clientId", onDelete: "CASCADE" });
    Client.hasMany(models.Order, { foreignKey: "clientId", onDelete: "CASCADE" });
  };

  return Client;
};
