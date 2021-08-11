const mongoose = require("mongoose");
const config = require("../config/defaultConfig");
mongoose
  // .connect(config[config.env].mongoUri, {
  .connect("mongodb://aman:amanadmin@cluster0-shard-00-00.vimcw.mongodb.net:27017,cluster0-shard-00-01.vimcw.mongodb.net:27017,cluster0-shard-00-02.vimcw.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-g3pi2e-shard-0&authSource=admin&retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connected to the database");
  })
  .catch((err) => {
    console.log("Could not connect to the database. Exiting now...", err);
    process.exit();
  });
