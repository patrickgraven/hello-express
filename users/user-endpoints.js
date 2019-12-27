module.exports = (app, knex) => {
  app.get("/user/:userId", async (req, res) => {
    const userId = req.params.userId;
    const user = await knex("user").where("user_id", userId);

    res.json({
      user
    });
  });

  app.get("/users", (req, res) => {
    const message = "Show all users";

    res.send(message);
  });

  app.get("/paul", (req, res) => {
    const message = "Hi Paul";

    res.send(message);
  });
};
