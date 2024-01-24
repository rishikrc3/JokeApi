const express = require("express");
const axios = require("axios");
const app = express();

app.listen(3000, () => {
  console.log("Port running on 3000");
});

app.get("/", (req, res) => {
  res.send("Hemlo");
});

app.get("/jokes", (req, res) => {
  res.send("You will get the jokes here");
});
