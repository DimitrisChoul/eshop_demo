const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const OrderItem = sequelize.define("OrderItem", {
    orderId: {
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
    priceAtPurchase: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
  });

  OrderItem.associate = (models) => {
    OrderItem.belongsTo(models.Order, { foreignKey: "orderId", onDelete: "CASCADE" });
    OrderItem.belongsTo(models.Product, { foreignKey: "productId", onDelete: "CASCADE" });
  };

  return OrderItem;
};
