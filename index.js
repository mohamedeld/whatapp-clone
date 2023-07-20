const app = require("./app");
const dotenv = require('dotenv');

dotenv.config();
const PORT = process.env.PORT || 8000;

dotenv.config();
app.listen(PORT,()=>{
    console.log(`server is listening on port ${PORT}`);
})

