const { Router } = require("express");
const index = Router();
const controller = require("../controllers/rootController")

index.get("/", controller.getMessages)

index.get("/new", controller.getMessageForm);

index.post("/new", controller.userMessagePost);

index.get("/message/:id", controller.getMessage); 

module.exports = index;
