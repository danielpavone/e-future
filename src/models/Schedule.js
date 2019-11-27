const mongoose = require('mongoose');

const ScheduleSchema = new mongoose.Schema({
  workshop: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Workshop'
  },
  school: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'School'
  },
  date: Date
}, {timestamps: true});

module.exports = mongoose.model('Schedule', ScheduleSchema);