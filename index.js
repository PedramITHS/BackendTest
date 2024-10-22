const express = require("express");
const cors = require("cors");

const app = express();
port = process.env.PORT || 3000;

app.use(cors());

app.get("/", (req, res) => {
  res.send({ connect: "Succesfully pulling from the backend!" });
});

app.listen(port, () => {
  console.log(`Connected to http://localhost:${port}/`);
});
