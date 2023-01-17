const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const helmet = require("helmet");

const { notFound, errorHandler } = require("./middlewares");

require("dotenv").config();

const app = express();

app.use(helmet());
app.use(morgan("dev"));
app.use(bodyParser.json());

const employees = require("./routes/employees");
app.use(notFound);
app.use(errorHandler);

app.use("/api/employees", employees);
module.exports = app;
