const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const cookieParser = require('cookie-parser');
const compression = require('compression');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const app =express();

app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}

app.use(helmet());
app.use(mongoSanitize());
app.use(cookieParser());
app.use(compression());
app.use(fileUpload({
    useTempFiles:true
}));
app.use(cors({
    origin:'http://localhost:3000'
}))

module.exports = app;