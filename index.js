const dotenv = require('dotenv');
const express = require('express');
dotenv.config();

const PORT = process.env.PORT || 5050;
const router = require('./app/router');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'app/views');

app.use(express.static('integration'));

app.use(router);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`,`http://localhost:${PORT}`)
});