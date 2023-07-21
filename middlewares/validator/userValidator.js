const {query,param,body} = require('express-validator');
const User = require('../../models/userModel'); 
module.exports.createUserValidator = [
    body('name').notEmpty().withMessage('please enter your name'),
    body('email').notEmpty().withMessage('please enter your email').isEmail().withMessage('please enter correct name').custom((val,{req})=>{
        return User.findOne({email:val}).then(user=>{
            if(user){
                return Promise.reject('email already exists');
            }
        })
    }),
    body('password').notEmpty().withMessage('please enter your password').isStrongPassword().withMessage('please enter a strong password which has #,1,m,M')
];

module.exports.getUserValidator = [
    param('id').notEmpty().withMessage('please enter your id').isMongoId().withMessage('id should me mongo id')
];

module.exports.updateUserValidator = [
    body('name').optional().notEmpty().withMessage('please enter your name'),
    body('email').optional().notEmpty().withMessage('please enter your email').isEmail().withMessage('please enter correct name').custom((val,{req})=>{
        return User.findOne({email:val}).then(user=>{
            if(user){
                return Promise.reject('email already exists');
            }
        })
    }),
    body('password').optional().notEmpty().withMessage('please enter your password').isStrongPassword().withMessage('please enter a strong password which has #,1,m,M')
];

module.exports.deleteUserValidator = [
    param('id').notEmpty().withMessage('please enter your id').isMongoId().withMessage('id should me mongo id')
]