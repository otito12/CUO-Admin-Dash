const express = require("express");
const bodyParser = require("body-parser");
const router = require("./utils/routerIndex");

// instantiate express app
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// application port add env var later
const PORT = 3000;

// conenct router
app.use(router);

// listen on port
app.listen(PORT, () => console.log("listening on port 3000!"));

//export app module
module.exports = {
  app,
};
