'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
//const mongoose = require('mongoose');
const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3001;


app.get('/',homeHandler);
app.get('*',defualtHandler);
// http://localhost:3010/
function homeHandler(req,res) {
    res.send("Hi from the home route");
}

function defualtHandler(req,res) {
    res.status(404).send("Sorry, Page not found");
}

app.listen(PORT, () => console.log(`listening on ${PORT}`));