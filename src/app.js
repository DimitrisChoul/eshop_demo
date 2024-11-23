const express = require("express");
const appMiddleware = require("./middleware/appMiddleware");
const cartRoutes = require("./routes/cartRoutes");
const checkoutRoutes = require("./routes/checkoutRoutes");
const orderRoutes = require("./routes/orderRoutes");
const handle404 = require("./middleware/handle404");
const handleErrors = require("./middleware/handleErrors");

const app = express();

appMiddleware(app);

app.use("/cart", cartRoutes);
app.use("/checkout", checkoutRoutes);
app.use("/order", orderRoutes);

app.use(handle404);

app.use(handleErrors);

module.exports = app;
