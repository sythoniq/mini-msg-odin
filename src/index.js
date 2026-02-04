const dns = require("dns");
dns.setDefaultResultOrder("ipv4first");
const path = require("node:path");
const express = require("express");
const app = express();

const index = require("./routes/indexRoute");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({extended:true}));
app.use("/", index);
app.use("/new", index)
app.use("/message/:id", index);

app.listen(3000, (error) => {
  if (error) {
    throw error;
  }
  console.log("Server now running on port 3000");
})
