const express = require("express");

const app = express();

app.get("/", (req, res) => {
  return res.send("hello 123")
});


app.listen('3000', () => {
  console.log("Server start at: 3000")
});;