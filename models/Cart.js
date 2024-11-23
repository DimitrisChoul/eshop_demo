const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Cart = sequelize.define("Cart", {
    clientId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  Cart.associate = (models) => {
    Cart.belongsTo(models.Client, { foreignKey: "clientId", onDelete: "CASCADE" });
    Cart.hasMany(models.CartItem, { foreignKey: "cartId", onDelete: "CASCADE" });
  };

  return Cart;
};
