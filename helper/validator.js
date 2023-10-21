// import { body } from 'express-validator';
const { body, check } = require('express-validator');

const inputValidator = [
  body('lat', 'Latitude must not empty').notEmpty(),
  body('lon', 'Latitude must not empty').notEmpty(),
  body('lat', 'Latitude must be a number').isNumeric(),
  body('lon', 'Latitude must be a number').isNumeric(),  
  body('distance', 'Distance must not empty').notEmpty(),
  body('distance', 'Distance must be a whole number').isInt(),
  body('distance', 'Distance must be 1 or 10 only').custom(value => value === 1 || value === 10),
  body('price_value', 'Price value must be a number').isInt(),
  body('price_value', 'Price value must be whole number only').custom(value => typeof value === 'number').isInt(),
  body('price_value', 'Price value must be minimum by 10').optional({ falsy: true }).isInt({ min: 10 }),
  body('price_value', 'Price value must be maximum by 30').optional({ falsy: true }).isInt({ max: 30 }),
]

module.exports = inputValidator;