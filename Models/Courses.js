const mongoose = require("mongoose");
const { Schema } = mongoose;

const coursesSchema = new Schema({
  imageUrl: String,
  title: String,
  shortDescription: String,
  authorName: String,
  companyName: String,
  category: String,
  price: Number,
});

const Courses = mongoose.model("Courses", coursesSchema);

module.exports = Courses;
