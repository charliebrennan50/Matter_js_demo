const express = require("express");
var app = express();

const PORT = process.env.PORT || 8000;

app.use(express.static('public'));

app.get('/', (req, res) =>
    res.sendFile(`${__dirname}/index.html`)
)

var server = app.listen(PORT, () =>
    console.log(`Listening on port ${PORT}`)
);