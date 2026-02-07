const { Router } = require("express");
const index = Router();
const controller = require("../controllers/rootController")

index.get("/", controller.getMessages)

index.get("/new", (req, res) => {
  res.render("form", {title: "New message"});
})

index.post("/new", (req, res) => {
  const msg = req.body;
  messages.push({ text: msg.textContent, user: msg.userName, added: new Date(), id: messages.length + 1 });
  res.redirect("/");
})

index.get("/message/:id", controller.getMessage); 

module.exports = index;
