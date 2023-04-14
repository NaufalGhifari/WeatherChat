require('dotenv').config();
const express = require('express');

const app = express();

PORT = process.env.SERVER_PORT
app.listen(PORT, () =>{
    console.log(`✅ App is running in port ${PORT}!`)
});