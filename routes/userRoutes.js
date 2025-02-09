const express = require("express");
const { 
    fetch ,
    create , 
    updates , 
    deleteUser } = require("../controller/userController");
const route = express.Router();

route.get("/getallusers", fetch);
route.post("/create",create );
route.put("/updates/:id" , updates);
route.delete("/delete/:id" , deleteUser);
module.exports = route;