const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/user-routes');
const blog_routes = require('./routes/blog-routes');
const bodyParser = require('body-parser');
const cors = require('cors');
const app=express()  
require("dotenv").config();


const port = process.env.PORT || 5000;

app.use(cors());
mongoose.connect(process.env.mongo_url).then(()=>
    console.log("database connected")
)  
app.use(bodyParser.json());
app.use(routes)  
app.use(blog_routes)
// EEy7ALskA6Mh0zcN 

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
       