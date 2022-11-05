const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;



// middleware's
app.use(cors());
app.use(express.json());

app.get("/", (req, res, next) => {
    res.send("server running?")
});

app.listen(port, () => {
    console.log(`server running on port: ${port}`)
});