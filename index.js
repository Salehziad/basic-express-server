'use strict'
require('dotenv').config();
const PORT=process.env.Port;
const server=require("./src/server");
server.start(PORT);