const express = require('express');

const app = express();

var options = {
	
	index: 'homepage.html'
	
};

app.listen(5005, () => console.log("whoopi goldberg"));
app.use(express.static('cashews', options))