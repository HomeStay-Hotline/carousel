const express = require('express');
const morgan = require('morgan');
const path = require('path');


const PORT = 3000 || process.env.PORT;
const app = express();
const PUB_DIR = path.resolve(__dirname, '..', 'public');

app.use(express.static(PUB_DIR))
app.use(express.json());

app.listen(PORT, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`listening on port ${PORT}`)
    }
});