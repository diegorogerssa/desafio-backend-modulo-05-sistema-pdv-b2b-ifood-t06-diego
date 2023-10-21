const express = require('express');
const cors = require('cors');
const routes = require('./routes/routes');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`API CONNECTED TO THE PORT ${port}`);
});
