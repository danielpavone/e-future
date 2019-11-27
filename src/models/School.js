const mongoose = require('mongoose');

const SchoolSchema = new mongoose.Schema({
  name: String,
  address: String,
  city: String,
  state: String,
  postalCode: String,
  phoneNumber: String
}, { timestamps: true })

module.exports = mongoose.model('School', SchoolSchema);