const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Product = sequelize.define("Product", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
  });

  Product.associate = (models) => {
    Product.hasMany(models.CartItem, { foreignKey: "productId", onDelete: "CASCADE" });
    Product.hasMany(models.OrderItem, { foreignKey: "productId", onDelete: "CASCADE" });
  };

  return Product;
};
