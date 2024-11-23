const app = require("./app");
const { sequelize } = require("../models");

const PORT = 3000;

sequelize.sync({ force: true }).then(() =>
  app.listen(PORT, () => {
    console.log(`App running on port ${PORT}.`);
  })
);
