const Order = require('../models/Order');
const Course = require('../models/Course');

module.exports = {
  async store(req, res) {
    const { company, course, quantity } = req.body;

    const courseData = await Course.findById(course);

    if (courseData.quantity < quantity) {
      return res.status(400).json({
        message: `Course has ${courseData.quantity} left.`
      });
    }

    const createOrder = await Order.create({
      company,
      course,
      total: courseData.price * quantity
    });

    if (createOrder) {
      await courseData.update({
        quantity: courseData.quantity - quantity
      })
    }

    return res.status(201).json(createOrder);

  }
}