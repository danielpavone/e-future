const Workshop = require('../models/Workshop');

module.exports = {
  async store(req, res) {
    let workshop = await Workshop.create(req.body);
    return res.status(201).json(workshop);
  },

  async index(req, res) {
    const workshops = await Workshop.find().populate('school');
    return res.status(200).json(workshops);
  },

  async show(req, res) {
    const { id } = req.params;

    const workshop = await Workshop.findById(id);

    if(!workshop) {
      return res.status(400).json({error: 'Course Not Found'});
    }

    return res.json(workshop);
 }
}