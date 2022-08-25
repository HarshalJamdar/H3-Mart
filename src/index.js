const express = require('express');
const multer = require('multer');
const route = require('./routes/route');
const app = express();

//To parse multi-part form data
app.use( multer().any());

app.use("/", route);

app.listen(process.env.PORT || 3000, function(){
    console.log("Express app running on port " + (process.env.PORT || 3000));
});