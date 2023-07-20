
const sendErrorForDevelopment = (response,err)=>{
    return response.status(err.statusCode).json({
        status:err.stauts,
        message:err.message,
        error:err,
        stack:err.stack
    })
}

const sendErrorForProduction = (response,err)=>{
    if(err.isOperational){
        return response.status(err.statusCode).json({
            status:err.stauts,
            message:err.message
        })
    }
    
}

module.exports = (error,request,response,next)=>{
    error.statusCode = error.statusCode || 500;
    error.status = error.status || 'error';

    if(process.env.NODE_ENV === 'development'){
        sendErrorForDevelopment(response,error);
    }else if(process.env.NODE_ENV === 'production'){
        sendErrorForProduction(response,error);
    }
}