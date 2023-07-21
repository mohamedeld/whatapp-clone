
const catchAsync = require("../utils/catchAsync");
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const AppError = require('../utils/appError');
const bcrypt = require('bcrypt');
exports.register = catchAsync(async(request,response,next)=>{
    const newUser = await User.create({
        name:request.body.name,
        email:request.body.email,
        picture:request.body.picture,
        status:request.body.status,
        password:request.body.password
    });

    const token = jwt.sign(
        {id:newUser._id},
        process.env.JWT_SECRET_KEY
        ,{expiresIn:process.env.JWT_EXPIRES_IN});

    response.status(201).json({
        status:'success',
        data:{
            newUser,
            token
        }
    })

});


exports.login = catchAsync(async (request,response,next)=>{
    const user = await User.findOne({email:request.body.email});
    if(!user){
        return next(new AppError('incorrect email',401));
    }
    const correctPassword = await bcrypt.compare(request.body.password,user.password);
    if(!correctPasword){
        return next(new AppError('incorrect password',400))
    }
    const token = jwt.sign({id:user._id},process.env.JWT_SECRET_KEY,{expiresIn:process.env.JWT_EXPIRES_IN});

    response.status(200).json({
        status:'success',
        message:'login successfully',
        data:{
            user,
            token
        }
    })
})