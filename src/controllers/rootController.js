const db = require("../db/queries.js")
const { body, validationResult, matchedData } = require("express-validator");

const validateMessage = [
  body("userName").trim()
    .isAlpha().isLength({min: 2, max: 25}).withMessage("Username should not be empty").trim(),
  body("textContent").trim()
    .isAlpha().isLength({min: 10, max:200}).withMessage("Message shouldn't be empty").escape(),
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
      return res.status(400).render("form",
        {
          title: "Input Error",
          errors: result.array()
        }
      )
    }

    const { userName, textContent } = matchedData(req);
    await db.addMessage(userName, textContent);
    res.redirect("/");
  }
]

async function userMessageDelete(req, res) {
  await db.deleteMessage(req.params.id);
  res.redirect("/");
}

module.exports = {
  getMessages,
  getMessage,
  getMessageForm,
  userMessagePost,
  userMessageDelete
}
