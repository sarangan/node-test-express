const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 3000;

const app = express();

const logger = (req, res, next) =>{
  console.log("getting res");
  next();
}

app.use(logger);

app.get('/', (req, res) =>{
  //res.send("Hello express");
  res.status(200).json({title: "man", age: 12});
});

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/api/users', require('./api/users'));

app.use(express.static(path.join(__dirname, "templates")));

app.listen(PORT, ()=>{
  console.log(`server is running! at ${PORT}`);
});
