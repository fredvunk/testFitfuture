const express = require("express");
const cors = require('cors');
// const authCheck = require('./middleware/token');
// const serveStatic = require ('serve-static');
const cookieParser = require('cookie-parser');
const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

app.use(cors({
    origin: 'http://localhost:8080',
    credentials: true
}));

app.use('/', require('./routes'));

/*app.use(serveStatic(path.join(__dirname,"../dist")));
app.get('/', function(req,res) {
    res.sendFile('index.html', { root: path.join(__dirname, '../dist') });
});*/

app.listen('3300', () => {
    console.log('Server on port 3300');
});