const express=require('express')
const bodyParser=require('body-parser')
const connectdatabase=require('./models/database')
const app=express()
const cors=require('cors')
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const cookieParser = require('cookie-parser');
const router = require('./routes/approutes');
connectdatabase();

app.use(cors())
app.use(express.json())
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended:false}))
app.use("/api/v1",router)
app.listen(process.env.PORT,()=>{
      console.log(`Server is started on port ${process.env.PORT}`)
})

