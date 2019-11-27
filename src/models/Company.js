const mongoose = require('mongoose');

const CompanySchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    required: true,
    unique: true
  },
  description: String,
  employees: Number
}, { timestamps: true });

module.exports = mongoose.model('Company', CompanySchema);