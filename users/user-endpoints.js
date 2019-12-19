module.exports = app => {
  app.get("/users", (req, res) => res.send("Show all users here"));

  app.get("/users/pjg", (req, res) => res.send("Show all PJG user here"));

  app.get("/users/:userId/books/:bookId", (req, res) => {
    const userId = req.params.userId;
    const bookId = req.params.bookId;
    res.send("Hi " + userId + ". Your book is: " + bookId);
  });
};
