const express = require("express");
const serverless = require("serverless-http");
const router = require("./routes/author");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const dbCloudUrl = "mongodb+srv://admin:12345@api-sharing.wwdxcbn.mongodb.net/magoDB";

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(dbCloudUrl)
  .then(() => {
    console.log("Connected to MongoDB Atlas");
  })
  .catch((err) => {
    console.log("Error: ", err);
  });

app.use("/.netlify/functions/api", router);
module.exports.handler = serverless(app);