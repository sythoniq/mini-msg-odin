require('dotenv').config();
const pg = require("pg")
const { Client } = pg;

const SQL = `
CREATE TABLE messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR (255),
  message VARCHAR (255),
  dateadded VARCHAR (255)
);

INSERT INTO messages (username, message, dateadded) 
VALUES 
      ('Amanda', 'Hi there!', now()),
      ('Charles', 'Hello World!', now());
`;

async function main() {
  const client = new Client({
    connectionString: process.env.DB_STRING,
    ssl: true
  })
  
  try {
    await client.connect();
    await client.query(SQL);
    await client.end();
  } catch (err) {
    console.log("Got us an error", err.message);
  }
}

main();
