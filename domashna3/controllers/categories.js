const Category = require('../models/category');

module.exports = {
  all: async (req, res) => {
    try {
      const categories = await Category.find();
      res.send({
        error: false,
        message: 'List of all categories from the database for you my dear',
        categories: categories
      });
    } catch (error) {
      res.send({
        error: true,
        message: error.message
      });
    }
  },
  create: async (req, res) => {
    try {
      const category = await Category.create(req.body);
      res.status(201).send({
        error: false,
        message: `Created new category`,
        category: category
      });
    } catch (error) {
      res.send({
        error: true,
        message: error.message
      });
    }
  }
}