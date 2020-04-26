const express = require("express");

const app = express();

app.get("/123", (req, res) => {
  return res.json("123123");
});

app.listen(3333, () => {
  console.log("Server started on port 3333");
});
