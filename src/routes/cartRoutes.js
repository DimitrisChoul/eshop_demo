const express = require("express");
const cartController = require("../controllers/cartController");
const cartValidator = require("../middleware/cartValidator");
const router = express.Router();

router.post("/:clientId/products", cartValidator.validateAddProductToCart, cartController.addProductToCart);

router.delete("/:clientId/products/:productId", cartValidator.validateRemoveProductFromCart, cartController.removeProductFromCart);

router.put("/:clientId/products/:productId", cartValidator.validateUpdateProductQuantity, cartController.updateProductQuantity);

module.exports = router;
