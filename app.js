const express = require("express");
const morgan = require("morgan");
const CORS = require("./cors");
const api = require("./api/root");
const app = express();
const port = 3000;

app.use(morgan("combined"));
app.use(CORS);

app.use("/api", api);

app.get("/", (req, res) => {
  let resp = "Welcome to API Server";
  if (req.headers["user-agent"].toLocaleLowerCase().indexOf("postman") > -1) {
    resp = "Hello developer!";
  }
});
app.listen(port, () => {
  console.log(`Server started on port ${port}.`);
});
