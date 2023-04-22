const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});

//Flor1233GH usuario para github
//whatsgoingonlion1233@gmail.com email GitHub
//fijate123 password
//hellow1233 es el nombre del repositorio