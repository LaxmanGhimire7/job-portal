require("dotenv").config();
const express = require('express');
const app = express();

const connectDb = require("./src/Db/config.js")
connectDb();

app.use(express.json());


const authRoutes = require("./src/Routes/authRoutes.js");

app.use("/api/auth", authRoutes);


const PORT = process.env.PORT || 9000;

app.listen(PORT,()=>{
console.log(`Server is listening on http://localhost:${PORT}`)
})