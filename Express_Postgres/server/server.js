const express = require('express');
const bodyParser = require('body-parser');

const PORT = 3000;

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('*', (req, res) => res.status(200).send({
    message: 'Welcome to the beginning of nothingness.',
}));

app.listen(PORT, () => {
    console.log(`Listing to http://localhost:${PORT}`);
});