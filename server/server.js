const express=require('express')
const bodyParser=require('body-parser')
const connectdatabase=require('./models/database')
const app=express()
const port=4000;
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const cookieParser = require('cookie-parser');
const router = require('./routes/approutes');
connectdatabase();
app.use(express.json())
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended:false}))
app.use("/api/v1",router)
app.listen(port,()=>{
      console.log(`Server started on port ${port}`)
})

