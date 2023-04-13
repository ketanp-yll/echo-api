const express = require('express');

const app = express();

//adding express middleware to serve static pages
app.use("/api*", function(req, res){
    console.log(req.baseUrl);
	res.status(200).json(req.headers);
});


app.listen(3322); 
