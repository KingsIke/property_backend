const express = require('express');
const {
  getAllProperties,
  getPropertyById,
} = require('../controller/propertiesController');

const router = express.Router();

router.get('/properties', getAllProperties);
router.get('/properties/:id', getPropertyById);

module.exports = router;
