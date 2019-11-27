const School = require('../models/School');

module.exports = {
  async store(req, res) {
    const school = await School.create(req.body);

    return res.status(201).json(school);
  },

  async index(req, res) {
    const school = await School.find();

    return res.status(200).json(school);
  },

  async show(req, res) {
    const { id } = req.params;

    const school = await School.findById(id);

    if(!school) {
      return res.status(404).json({message: `School with ${id} not found`})
    }

    return res.json(school);
  }
};