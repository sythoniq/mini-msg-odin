const db = require("../db/queries.js")

async function getMessages(req, res) {
  const messages = await db.getAllMessages();

  res.render("index", {
    title: "Messages",
    messages: messages,
  })
}

async function getMessage(req, res) {
  const messages = await db.getAllMessages();
  const message = messages.find((msg) => msg.id == req.params.id);
  res.render("detail", {title: "Details", message: message});
}

module.exports = {
  getMessages,
  getMessage
}
