/*
    File Name - books.js
    Author - Khushboo Sakervala
    Student ID - 300984318
    Web App Name - Midterm Favorite books
*/

let mongoose = require("mongoose");

// create a model class
let gamesSchema = mongoose.Schema(
  {
    Title: String,
    Description: String,
    Price: Number,
    Author: String,
    Genre: String
  },
  {
    collection: "books"
  }
);

module.exports = mongoose.model("books", gamesSchema);
