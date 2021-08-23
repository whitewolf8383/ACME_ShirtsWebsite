const express = require('express');
const router = express.Router();
const products = require('../../../Products');

// Get All Products
router.get('/', (req, res) => res.json(products));

module.exports = router;