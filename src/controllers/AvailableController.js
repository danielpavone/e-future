const Schedule = require('../models/Schedule');

module.exports = {
  async index(req, res) {
    const { id } = req.params;
    
    const schedule = await Schedule.find({
      school: id,
      date: {
        $gte: new Date()
      }
    }).populate('school').populate('workshop');

    return res.json(schedule);
  }
};