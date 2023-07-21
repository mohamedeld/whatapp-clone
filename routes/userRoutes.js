const express =require('express');
const checkErrors = require('../utils/catchError');
const {createUserValidator,getUserValidator,updateUserValidator,deleteUserValidator} =require('../middlewares/validator/userValidator');
const trimRequest = require('trim-request');

const authController = require('../controller/authController');

const router =express.Router();

router.route('/register').post(createUserValidator,checkErrors,authController.register);

module.exports = router;

