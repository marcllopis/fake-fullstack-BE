require('dotenv').config()

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const students = require('./students')
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


app.get('/', (req, res) => {
  res.send('HELLO qqqq')
})

app.get('/students', (req, res) => {
  res.json(students).sendStatus(200)
})

app.post('/students', (req, res) => {
  console.log(req.body);
  let student = {
    name: req.body.name,
    age: req.body.age
  };
  students.push(student)
  res.sendStatus(200)
})

app.listen(port, err => {
  if(err) throw new Error('Something bad happened... sorry :(')
  console.log(`Server is listening at port: ${port}`)
  }
);

