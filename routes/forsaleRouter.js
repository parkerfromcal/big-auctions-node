const express = require("express");
const forsaleRouter = express.Router();

forsaleRouter
  .route("/buy/forsale")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res) => {
    res.end("Send all for sale items");
  })
  .post((req, res) => {
    res.end(
      `Will add for sale item: ${req.body.name} with description: ${req.body.description}`
    );
  })
  .put((req, res) => {
    res.statusCode = 403;
    res.end(`Will update for sale item: ${req.body.name}`);
  })
  .delete((req, res) => {
    res.end("Delete all for sale items");
  });

forsaleRouter
  .route("/buy/forsale/:forsaleName")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res) => {
    res.end("Will send single for sale item");
  })
  .post((req, res) => {
    res.end(
      `Will add the for sale item: ${req.body.name} with description: ${req.body.description}`
    );
  })
  .put((req, res) => {
    res.statusCode = 403;
    res.end(`Will update single for sale item: ${req.body.name}`);
  })
  .delete((req, res) => {
    res.end(`Will delete for sale item: ${req.params.forsaleName}`);
  });

module.exports = forsaleRouter;
