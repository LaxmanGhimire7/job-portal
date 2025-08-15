require("dotenv").config();
const express = require('express');
const app = express();

const connectDb = require("./src/Db/config.js")
connectDb();

app.use(express.json())

const PORT = process.env.PORT || 9000;

app.listen(PORT,()=>{
console.log(`Server is listening on http://localhost:${PORT}`)
})