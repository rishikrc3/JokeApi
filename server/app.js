const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();
app.use(cors());
app.listen(3000, () => {
  console.log("Port running on 3000");
});

app.get("/", (req, res) => {
  res.send("Hemlo");
});

app.get("/jokes", async (req, res) => {
  try {
    const response = await axios.get("https://v2.jokeapi.dev/joke/Any");
    const data = response.data;
    res.json(data);
  } catch (error) {
    console.error("Error, fetching error:", error);
    res.status(500).send("Internal Server Error");
  }
  // res.send("data.setup");
});
