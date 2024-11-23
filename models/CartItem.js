const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const CartItem = sequelize.define("CartItem", {
    cartId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
  });

  CartItem.associate = (models) => {
    CartItem.belongsTo(models.Cart, { foreignKey: "cartId", onDelete: "CASCADE" });
    CartItem.belongsTo(models.Product, { foreignKey: "productId", onDelete: "CASCADE" });
  };

  return CartItem;
};
