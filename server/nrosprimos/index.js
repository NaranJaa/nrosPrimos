'use strict'

const express = require('express');
const controller = require('./nrosprimos.controllers');
const router = express.Router();


router.get('/nprimos/:nroDado', controller);


module.exports = router;