const express =require('express');
const checkErrors = require('../utils/catchError');
const {createUserValidator,getUserValidator,updateUserValidator,deleteUserValidator} =require('../middlewares/validator/userValidator');
const {signInValidator} = require('../middlewares/validator/signInValidator');

const trimRequest = require('trim-request');

const authController = require('../controller/authController');

const router =express.Router();

router.route('/register').post(trimRequest.all,createUserValidator,checkErrors,authController.register);
router.route('/login').post(trimRequest.all,signInValidator,checkErrors,authController.login);
module.exports = router;

