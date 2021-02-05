const path = require('path');
const express = require('express');
const { bodyParser } = require('../index');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser());

app.post("/doLogin", (req, res) => {
  res.end(req.body);
})

const port = 6090;
app.listen(port, err => {
  if(err) throw err;
  console.log(`app start at ${port}`);
});
