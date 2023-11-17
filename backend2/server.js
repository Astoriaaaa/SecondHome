const express = require("express");
const connectDB = require('./db/dbConnect')
require('dotenv').config()
const router = require('./routes/router')
const PORT = 3001;
const app = express();
const cors = require("cors")

app.use(express.json())
app.use('/', router)
  
  app.use(cors());

  app.use(cors({
    origin: 'localhost:3000', // use your actual domain name (or localhost), using * is not recommended
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Origin', 'X-Requested-With', 'Accept', 'x-client-key', 'x-client-token', 'x-client-secret', 'Authorization'],
    credentials: true
}))
  
const start = async() => {
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(PORT, () => {
            console.log(`Server listening on ${PORT}`)})
    }
    catch (err){
        console.log(err)
    }
}
start()
