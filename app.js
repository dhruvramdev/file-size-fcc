const express = require('express');
const multer = require('multer');
const path = require('path');

var upload = multer({ dest: 'uploads/' });

const port = process.env.PORT || 3000 ;

var app = express() ;

app.use(express.static('public'))
app.use(express.static(__dirname + '/views'));

app.get( '/' , (req , res) => {
    //console.log(JSON.stringify(req.headers , undefined , 2));
    res.render("index.html");
});

app.post( '/upload' , upload.any()  , (req , res) => {
    console.log(req.files);

    res.json({
        "size" : req.files[0].size
    });

});



app.listen( port , () => {
    console.log(`Server is up on port ${port}!`);
});
