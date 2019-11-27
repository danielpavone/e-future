const Schedule = require('../models/Schedule');

module.exports = {
  async store(req, res) {
    const schedule = await Schedule.create(req.body);

    await schedule.populate('workshop').populate('school').execPopulate();
    return res.status(201).json(schedule);
  },

  async index(req, res) {
    const schedule = await Schedule.find();

    return res.status(200).json(schedule);
  }
}