const express = require('express');

const metadataController = require("../controllers/metadata");

const router = express.Router();

//POST /api/fileanalyse Endpoint
router.post('/api/fileanalyse', metadataController.metadataFile);


module.exports = router;



