var fallback = require('express-history-api-fallback');
var express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000

const app = express();
var root = path.resolve(__dirname);

app.use(express.static(__dirname));
app.use(fallback('index.html', { root: root }));

app.listen(PORT, () => console.log('The server listening on port ' + PORT +'!'));