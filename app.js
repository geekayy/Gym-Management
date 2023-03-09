const bodyParser = require("body-parser");
const express = require("express")
const routes = require('./routes');
const cors = require('cors')

const port = 8000;


const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use('/', routes);

app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
})
