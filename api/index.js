//requires
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const colors = require("colors");

require('dotenv').config();
console.log(process.env.NODE_ENV)



//instances
const app = express();

//listener
app.listen(3001, () => {
  console.log("API server listening on port 3001");
});

//express config
app.use(morgan("tiny"));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true
  })
);
app.use(cors());

//express routes
app.use("/api", require("./routes/user.js"));
//app.use("/api", require("./routes/projects"));







module.exports = app;