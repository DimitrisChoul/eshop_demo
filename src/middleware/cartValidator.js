// src/middleware/cartValidator.js
const { body, param, validationResult } = require('express-validator');

const validateAddProductToCart = [
  param('clientId').isInt().withMessage('Client ID must be a number'),
  body('productId').isInt().withMessage('Product ID must be a number'),
  body('quantity').isInt({ min: 1 }).withMessage('Quantity must be a positive integer'),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

const validateRemoveProductFromCart = [
  param('clientId').isInt().withMessage('Client ID must be a number'),
  param('productId').isInt().withMessage('Product ID must be a number'),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

const validateUpdateProductQuantity = [
  param('clientId').isInt().withMessage('Client ID must be a number'),
  param('productId').isInt().withMessage('Product ID must be a number'),
  body('quantity').isInt({ min: 1 }).withMessage('Quantity must be a positive integer'),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = {
  validateAddProductToCart,
  validateRemoveProductFromCart,
  validateUpdateProductQuantity,
};
