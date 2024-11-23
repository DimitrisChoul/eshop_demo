const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Order = sequelize.define("Order", {
    clientId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("pending", "shipped", "delivered"),
      allowNull: false,
      defaultValue: "pending",
    },
  });

  Order.associate = (models) => {
    Order.belongsTo(models.Client, { foreignKey: "clientId", onDelete: "CASCADE" });
    Order.hasMany(models.OrderItem, { foreignKey: "orderId", onDelete: "CASCADE" });
  };

  return Order;
};
