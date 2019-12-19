const express = require("express");
const userEndpoints = require("./users/user-endpoints");

const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("Hello World!"));

app.get("/pjg", (req, res) => res.send("Hello PJG you!"));

userEndpoints(app);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
