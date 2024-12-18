const { Request, Response } = require('express');

const properties = require('../model/data');

// Get all properties with optional pagination
const getAllProperties = (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + +limit;

  const paginatedProperties = properties.slice(startIndex, endIndex);

  res.json({
    total: properties.length,
    page: +page,
    limit: +limit,
    data: paginatedProperties,
  });
};

// Get a single property by ID
const getPropertyById = (req, res) => {
  const { id } = req.params;
  const property = properties.find((prop) => prop.id === +id);

  if (!property) {
    return res.status(404).json({ message: 'Property not found' });
  }

  res.json(property);
};

module.exports = {
  getAllProperties,
  getPropertyById,
};
