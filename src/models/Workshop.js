const mongoose = require('mongoose');

const WorkshopSchema = new mongoose.Schema({
  name: String,
  description: String,
  type: String
}, { timestamps: true });

module.exports = mongoose.model('Workshop', WorkshopSchema);