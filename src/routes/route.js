const express = require('express');
const router = express.Router();
const { upload } = require('../controllers/productList');

//--To upload xlsx file
router.post('/files',upload);

module.exports = router;
