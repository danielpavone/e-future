const Company = require('../models/Company');

module.exports = {
  async store(req, res) {
    const { email } = req.body;

    const companyExist = await Company.findOne({email});

    if (companyExist) {
      return res.status(400).json({error: 'Company already exists'})
    }

    let company = await Company.create(req.body);
    
    return res.status(201).json(company);
  },

  async index(req, res) {
    const companies = await Company.find();

    return res.status(200).json(companies);
  },
}