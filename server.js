const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', (req, res)=>{
	res.sendFile(path.join(__dirname, './app/public/index.html'))
})

app.get('/survey', (req, res)=>{
	res.sendFile(path.join(__dirname, './app/public/survey.html'))
})

// require('./app/routing/apiRoutes')(app);
// require('./app/routing/htmlRoutes')(app);

app.listen(PORT, ()=>{
	console.log(`Listening on PORT: ${PORT}`);
});