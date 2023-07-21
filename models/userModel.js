const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'please provide your name']
    },
    email:{
        type:String,
        required:[true,'please provide your email address'],
        unique:[true,'this email address already exist'],
        lowercase:true
    },
    picture:String,
    status:{
        type:String,
        default:'Hey there am using whatsapp'
    },
    password:{
        type:String,
        required:[true,'please provide your password'],
        minLength:[6,'please make sure your password is at least 6 characters long'],
        maxLength:[128,'please make sure your password is at least 128 characters long']
    },

},{timestamps:true});

userSchema.pre('save',async function(next){
    if(!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password,12);
    next();
});

module.exports =  mongoose.model('User', userSchema);
