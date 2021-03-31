const express = require('express');
const app = express();
const path = require('path');

const port = 3000;

const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/home.html'));
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, './views/register.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, './views/login.html'));
});

app.listen(port, () => {
    console.log('Example app listening on port '+ port);
});

//Run app, then load http://localhost:port in a browser to see the output.