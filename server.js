const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const logger = require("morgan");
const mongoose = require("mongoose");

//defining middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//use static assets in prod
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


//connect to Mongo DB
mongoose.connect("mongodb://localhost/booksdb", { useNewUrlParser: true });

//api routes
//TODO API Routes GO Here



app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});