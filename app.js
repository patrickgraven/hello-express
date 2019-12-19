const express = require("express");
const userEndpoints = require("./users/user-endpoints");

const app = express();
const port = 8081;

app.get("/", (req, res) => res.send("Hello World!"));

app.get("/pjg", (req, res) => res.send("Hello PJG you!"));

userEndpoints(app);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

app.listen(port, () =>
  console.log(`Example app listening on port ${port} at ${Date.now()}!`)
);

console.log("running server: " + Date.now());
