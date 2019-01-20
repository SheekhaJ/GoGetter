const compression = require('compression');
const express = require('express');
const path = require('path');

const app = express();

const appPage = path.join(__dirname, '../../public/index.html');

app.use(compression());
app.disable('etage');

app.use(express.static(__dirname+'./../../'));

app.get('/', function(req, res){
    res.sendFile(appPage);
});

app.listen(3000, () => console.log("Don't forget to run 'npm run dev' in another console."));