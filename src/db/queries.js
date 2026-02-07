const pool = require("./pool");

async function getAllMessages() {
  try {
    const { rows } = await pool.query("SELECT * FROM messages")
    return rows
  } catch (err) {
    console.log("Error", err);
  }
}

module.exports = {
  getAllMessages,
}
