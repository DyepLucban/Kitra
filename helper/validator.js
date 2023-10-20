// import { body } from 'express-validator';
const { body } = require('express-validator');

const inputValidator = [
  body('lat', 'Latitude must not empty').not().isEmpty(),
  body('lon', 'Latitude must not empty').not().isEmpty(),
  body('distance', 'Distance must not empty').not().isEmpty(),
  body('distance', 'Distance must be 1 or 10 only').custom(value => value === 1 || value === 10),
  body('distance', 'Distance must be a number').isInt()
]

module.exports = inputValidator;