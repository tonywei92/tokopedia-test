const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

const app = express();

app.use(express.static('./'));
app.listen(3000, () => console.log('Example app listening on port 3000!'))