const { conn } = require('./DB_connection');
const express = require("express");
const morgan = require("morgan");
const router = require("./routes");
const server = express();
const PORT = 3001;

//middlewares
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
       'Access-Control-Allow-Headers',
       'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
       'Access-Control-Allow-Methods',
       'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
 });
 server.use(express.json())
 server.use(morgan("dev"))

 server.use("/rickandmorty", router)

server.listen(PORT, () => {
    console.log ("server rised in " + PORT)
})