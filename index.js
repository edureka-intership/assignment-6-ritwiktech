const express = require("express");

const bodyParser = require("body-parser");

const routes = require("./restaurant_search/routes/res_search");

const mongodb = require("./config/mongodb");

mongodb.connect();

const hostname = 'localhost'
const port = 3800;

const server = express();

server.use(bodyParser.json());

server.use("/restaurant_search",routes);

server.get("/",(req,res) =>{
    res.send("Hello from Express !!");
})
    
server.listen(port,hostname,() => {
    console.log(`Server is running on http://${hostname}:${port}/`);
})