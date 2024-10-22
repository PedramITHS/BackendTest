const express = require("express");

const app = express();
port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send({ Hello: "World" });
  res.send({ From: "Backend" });
});

app.listen(port, () => {
  console.log(`Connected to http://localhost:${port}/`);
});
