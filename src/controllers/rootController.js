const db = require("../db/queries.js")
const { body, validationResult } = require("express-validator");

const validateMessage = [
  body("user-name").notEmpty().escape(),
  body("text-content").notEmpty().escape(),
]

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

async function getMessageForm(req, res) {
  res.render("form", {title: "New message"})
}

const userMessagePost = [
  validateMessage,
  async (req, res) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.status(400).render("form", {
        title: "New message",
        errors: result.array(),
      })
    }
    try {
      const {userName, textContent} = matchedData(req);
      await db.addMessage(userName, textContent);
      res.redirect('/');
    } catch (err) {
      console.log("Error", err.message);
    }
  }
]

module.exports = {
  getMessages,
  getMessage,
  getMessageForm,
  userMessagePost
}
