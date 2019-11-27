const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  quantity: Number,
  company: String,
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course'
  },
  total: Number
}, { timestamps: true });

module.exports = mongoose.model('Order', OrderSchema);