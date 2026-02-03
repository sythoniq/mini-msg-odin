require('dotenv').config();
const { Client } = require("pg");

const SQL = `
CREATE TABLE messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR (255),
  message VARCHAR (255),
  dateadded VARCHAR (255)
);

INSERT INTO messages (username, message, dateadded) 
VALUES 
      ("Amando", "Hit there", GETDATE()),
      ("Hello world!", "Charles", GATEDATE());
`;

async function main() {
  const client = new Client({
    connectionString: process.env.DB_CONNECTION_STRING
  })

  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
