const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  console.log(`Get Request to /api/`);

  res.json({ message: 'It is Working' });
});

module.exports = router;
