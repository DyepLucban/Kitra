const express = require('express');
const router = express.Router();
const { Treasures, MoneyValues, sequelize } = require('./models');
const { validationResult } = require('express-validator')
const inputValidator = require('./helper/validator');
const geolib = require('geolib');

// For status
router.get('/status', (req, res) => {
  res.send('status ok')
})

// Treasure route
router.get('/browse-treasure', async (req, res) => {
  try {
    const treasureRecord = await Treasures.findAll({ include: 'money_values' });
    res.send(treasureRecord);
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: 'Internal Server Error' })
  }
})

router.post('/find-treasure', inputValidator, async (req, res) => {
  const { lat, lon, distance, price_value } = req.body

  // validate input
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    try {
      let isPriceValueAvailable = false;
      let filteredRecord;
      const treasureRecord = await Treasures.findAll({ include: 'money_values' });
      
      if (price_value) {
        isPriceValueAvailable = true;
        filteredRecord = treasureRecord.filter((el) => el.money_values.find((obj) => obj.amount >= price_value))
      } else {
        filteredRecord = treasureRecord;
      }

      const treasuresWithinDistance = filteredRecord.filter(val => {
        const treasureLat = val.latitude;
        const treasuleLon = val.longitude;
        const treasureCoordinates = { latitude: treasureLat, longitude: treasuleLon }
        const dist = geolib.getPreciseDistance({ lat, lon }, treasureCoordinates);
        const distInKm = dist / 1000;

        return distInKm <= distance;
      })

      const treasuresWithLowestAmount = treasuresWithinDistance.map((treasure) => {
        const lowestMoneyValue = treasure.money_values.reduce((min, current) => {
          return current.amount < min.amount ? current : min;
        });
      
        return {
          id: treasure.id,
          latitude: treasure.latitude,
          longitude: treasure.longitude,
          name: treasure.name,
          createdAt: treasure.createdAt,
          updatedAt: treasure.updatedAt,
          money_values: {
            id: lowestMoneyValue.id,
            amount: lowestMoneyValue.amount,
            treasure_id: lowestMoneyValue.treasure_id,
            createdAt: lowestMoneyValue.createdAt,
            updatedAt: lowestMoneyValue.updatedAt,
          },
        };
      });

      (isPriceValueAvailable) ? res.json(treasuresWithLowestAmount) : res.json(treasuresWithinDistance);
    } catch (err) {
      console.log(err)
      res.status(500).json({ message: 'Internal Server Error' })
    }    

  } else {
    res.status(422).send({ errors: errors.array() })
  }
});

module.exports = router;