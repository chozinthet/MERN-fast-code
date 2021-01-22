const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const num = require('./routes/api/num');
const app = express();

/* Mongo DB */
mongoose.connect('mongodb://localhost:27017/mydb', {useNewUrlParser: true, useUnifiedTopology: true});

// BodyParser parse json data
app.use(bodyParser.json({ type: 'application/*+json' }))

app.get('/', (req, res) => {
  res.send('Use other routes');
});
/* Use Routes (routes >> api) */
app.use('/api/num', num);

app.listen(9000, () => {
  console.log(`Server is working on port 9000`)
})