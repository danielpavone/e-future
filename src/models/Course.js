const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  quantity: Number,
  type: String,
  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Company'
  }
}, { timestamps: true });

module.exports = mongoose.model('Course', CourseSchema);