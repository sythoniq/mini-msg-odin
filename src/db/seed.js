require('dotenv').config();
const dns = require("dns");
dns.setDefaultResultOrder("ipv4first");
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
      ("Amando", "Hit there", GETDATE()),
      ("Hello world!", "Charles", GATEDATE());
`;

async function main() {
  const client = new Client({
    connectionString: process.env.DB_STRING,
  })

  try {
    await client.connect();
    console.log("success");
  } catch(err) {
    console.log(err);
  }
}

main();
