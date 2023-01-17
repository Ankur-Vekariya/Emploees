const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const helmet = require("helmet");

require("dotenv").config();

const app = express();
const monk = require("monk");

app.use(helmet());
app.use(morgan("dev"));
app.use(bodyParser.json());

const port = process.env.PORT || 5000
app.listen(port , () => {
    console.log(`Server started on ${port}`);
})



