'use strict'
require('dotenv').config();
const PORT=process.env.Port||3000;
const server=require("./src/server");
server.start(PORT);