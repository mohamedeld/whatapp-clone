const app = require("./app");
const dotenv = require('dotenv');
process.on('uncaughtException',()=>{
    console.log('uncaughtException');
    process.exit(1);
})
dotenv.config();
const PORT = process.env.PORT || 8000;

dotenv.config();
app.listen(PORT,()=>{
    console.log(`server is listening on port ${PORT}`);
})

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