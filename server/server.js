const express = require('express');
const app = express();

const cors = require('cors');

app.use(cors());

app.use(express.json());
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');


MongoClient.connect('mongodb://localhost:27017')
.then((client)=> {
    const db = client.db('group_project'); //name of the data base needed (temporarely name added)
    //add here the equivalent to bookingsCollection and bookingsRouter connection
})

app.post('/api/C02', (req, res) =>{
    const newData = req.body;
    if(newData.hasOwnProperty('name') && newData.hasOwnProperty('email'){
        Collection
        .insertOne(newData)
        .then((result)=>{
            res.json(result.ops[0]);
        })
        .catch((err)=>{
            console.error(err);
            res.status(500);
            res.json({status: 500, error: err});

        });

    })

    app.listen(5000, function() {
        console.log(`Grou Project running on port  ${this.address().port}`);
})