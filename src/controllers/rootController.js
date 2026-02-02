const db = require("../db/queries.js")

async function getMessages(req, res) {
  const messages = await db.getAllMessages();

  res.render("index", {
    title: "Messages",
    messages: messages,
  })
}

module.exports = {
  getMessages,
}
