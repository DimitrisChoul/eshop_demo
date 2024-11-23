const express = require("express");

const configureMiddleware = (app) => {
  app.use(express.json());
};

module.exports = configureMiddleware;
