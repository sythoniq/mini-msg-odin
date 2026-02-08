const pool = require("./pool");

async function getAllMessages() {
  try {
    const { rows } = await pool.query("SELECT * FROM messages")
    return rows
  } catch (err) {
    console.log("Error", err);
  }
}

async function addMessage(username, message) {
  try {
    console.log("starting...")
    await pool.query("INSERT INTO messages (username, message, dateadded) VALUES ($1, $2, now())",
    [username, message])
    console.log("done");
  } catch (err) {
    console.log("Error at db: ", err.message)
  }
}

module.exports = {
  getAllMessages,
}
