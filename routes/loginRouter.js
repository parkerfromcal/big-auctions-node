const express = require("express");
const loginRouter = express.Router();

loginRouter
  .route("/login")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res) => {
    res.statusCode = 403;
    res.end("GET operation not supported on /login");
  })
  .post((req, res) => {
    res.end(
      `Will add for new user: ${req.body.username} with password: ${req.body.password}`
    );
  })
  .put((req, res) => {
    res.statusCode = 403;
    res.end("PUT operation not supported on /login");
  })
  .delete((req, res) => {
    res.statusCode = 403;
    res.end("DELETE operation not supported on /login");
  });

loginRouter
  .route("/login/:userId")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res) => {
    res.end("Will send single user");
  })
  .post((req, res) => {
    res.end("POST operation not supported on /login/:userId");
  })
  .put((req, res) => {
    res.statusCode = 403;
    res.end(`Will update user: ${req.body.username}`);
  })
  .delete((req, res) => {
    res.end(`Will delete user: ${req.params.userId}`);
  });

module.exports = loginRouter;
