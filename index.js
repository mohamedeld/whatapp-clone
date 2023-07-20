const app = require("./app");
const mongoose = require("mongoose");

const dotenv = require('dotenv');
process.on('uncaughtException',()=>{
    console.log('uncaughtException');
    process.exit(1);
})
dotenv.config();
const PORT = process.env.PORT || 8000;

dotenv.config();
mongoose.connect(process.env.DATABASE_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    family:4
}).then(()=> {
    console.log('connected to database successfully');
    app.listen(PORT,()=>{
        console.log(`server is listening on port ${PORT}`);
    })
}).catch(err=> console.error(err))


process.on('unhandledRejection',(error)=>{
    console.log(`unhandledRejection ${unhandledRejection}`);
    if(app.close()){
        console.error('shutting down server...');
        process.exit(1);
    }
});

process.on('SIGTERM',(error)=>{
    console.log(`server closed ${error}`);
    process.exit(1);
});