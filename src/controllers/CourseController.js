const Course = require('../models/Course');

module.exports = {
  async store(req, res) {
    let course = await Course.create(req.body);
    return res.status(201).json(course);
  },

  async index(req, res) {
    const courses = await Course.find().populate('company');
    return res.status(200).json(courses);
  },

  async show(req, res) {
    const { id } = req.params;

    const course = await Course.findById(id);

    if(!course) {
      return res.status(400).json({error: 'Course Not Found'});
    }

    await course.populate('company').execPopulate();
    return res.json(course);
 }
}