const {query,param,body} = require('express-validator');

module.exports.signInValidator = [
    body('email').notEmpty().withMessage('please enter your email').isEmail().withMessage('please enter correct email'),
    body('password').notEmpty().withMessage('please enter your password').isStrongPassword().withMessage('please enter correct password')
]