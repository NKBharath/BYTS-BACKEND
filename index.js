const express  = require("express");


const app = express();

app.get('/',(rep,res)=>{
    res.send("my app is listening");
})
const PORT = 3000;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})