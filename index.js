//const { Person } = require("./person");
//const person = new Person("Jean");

//require("./modules/path");
//require("./modules/fs");
//require("./modules/http");

const dotenv = require("dotenv");
const connectToDatabase = require("./src/database/connect");
dotenv.config();
connectToDatabase();

require("./modules/express");
