const { Router } = require("express");
const index = Router();
const controller = require("../controllers/rootController")

const messages = [
  {
    text: "Hi there",
    user: "Amando",
    added: new Date(),
    id: 1,
  },
  {
    text: "Hello world!",
    user: "Charles",
    added: new Date(),
    id: 2,
  }
]

index.get("/", (req, res) => {
  res.render("index", { title: "Mini msg board", messages: messages})
})

index.get("/test", controller.getMessages);

index.get("/new", (req, res) => {
  res.render("form", {title: "New message"});
})

index.post("/new", (req, res) => {
  const msg = req.body;
  messages.push({ text: msg.textContent, user: msg.userName, added: new Date(), id: messages.length + 1 });
  res.redirect("/");
})

index.get("/message/:id", (req, res) => {
  const message = messages.find((message) => message.id == req.params.id);
  console.log(req.params.id, messages);
  res.render("detail", {title: "Message Detail", message: message});
})

module.exports = index;
