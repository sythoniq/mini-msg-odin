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
    await pool.query("INSERT INTO messages (username, message, dateadded) VALUES ($1, $2, now())",
    [username, message])
  } catch (err) {
    console.log("Error at db: ", err.message)
  }
}

async function deleteMessage(id) {
  try {
    await pool.query("DELETE FROM messages WHERE id = ($1)", 
    [id]);
  }catch (err) {
    console.log("DB error: ", err.message);
  }
}

module.exports = {
  getAllMessages,
  addMessage,
  deleteMessage
}
