const express= require('express');
const { json }=  require('body-parser');
const cors= require('cors');
const massive= require('massive');
const axios= require('axios');


const controller= require('./controller');
const connectionString= require('../config.js').massive;

const port= 3001;
const app= express();


massive(connectionString)
  .then(dbInstance=> app.set('db', dbInstance))
  .catch(console.log);


//Middlewares
app.use(json());
app.use(cors());


//Endpoints
app.get('/test', controller.getUsers);
app.get('/api/currencies', (req, res, next)=> {
  axios.get('https://www.cryptocompare.com/api/data/coinlist/')
    .then(response=> res.status(200).json(response.data));
});

app.listen(port, ()=> {
  console.log(`We live baby! On port: ${port}`);
});
