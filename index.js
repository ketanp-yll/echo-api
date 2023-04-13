const express = require('express');

const app = express();

app.use("/api*", function(req, res){
    console.log(req.baseUrl);
	res.status(200).json(req.headers);
});


app.listen(3322); 
