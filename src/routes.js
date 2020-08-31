const express = require("express");
const bodyParser = require("body-parser");
const healthCheck = require("./controllers/healthCheck");
const {
  lipsticksPathValidator,
  lipsticksValidator,
} = require("./lipsticksValidator");
const {
  getLipsticks,
  getLipsticksById,
  postLipsticks,
  deleteLipsticks,
  putLipsticks,
} = require("./controllers/lipsticks");
const { required } = require("joi");

const app = express();

app.use(bodyParser.json());

app.get("/healthcheck", healthCheck);

app.get("/lipsticks", getLipsticks);

app.get("/lipsticks/:id", getLipsticksById, lipsticksPathValidator);

app.post("/lipsticks", postLipsticks);

app.delete("/lipsticks/:id", deleteLipsticks);

app.put("/lipsticks/:id", putLipsticks);

module.exports = app;
