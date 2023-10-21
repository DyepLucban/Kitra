// import { body } from 'express-validator';
const { body, check } = require('express-validator');

const inputValidator = [
  body('lat', 'Latitude must not empty').not().isEmpty(),
  body('lon', 'Latitude must not empty').not().isEmpty(),
  body('lat', 'Latitude must be a number').isNumeric(),
  body('lon', 'Latitude must be a number').isNumeric(),  
  body('distance', 'Distance must not empty').not().isEmpty(),
  body('distance', 'Distance must be 1 or 10 only').custom(value => value === 1 || value === 10),
  body('distance', 'Distance must be a number').isInt(),
  body('price_value', 'Price value must be whole number only').optional({ checkFalsy: true }).isInt(),
  body('price_value', 'Price value must be minimum by 10').optional({ checkFalsy: true }).isInt({ min: 10 }),
  body('price_value', 'Price value must be maximum by 30').optional({ checkFalsy: true }).isInt({ max: 30 }),
]

module.exports = inputValidator;