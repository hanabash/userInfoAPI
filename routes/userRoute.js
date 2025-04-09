const express = require('express');
const router = express.Router();
const {getUserByIdIfOver21} = require('../controllers/userController.js');

router.get('/:id', getUserByIdIfOver21);

module.exports = router;