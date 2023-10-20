const express = require('express');
const app = express();
const port = 4000;
const routes = require('./routes');

app.use(express.json());
app.use('/v1', routes);
app.listen(port, () => console.log(`Express app is running at port ${port}`));