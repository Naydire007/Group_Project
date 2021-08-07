const express = require('express');
const app = express();

const cors = require('cors');

app.use(cors());

app.use(express.json());
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');


MongoClient.connect('mongodb://localhost:27017')
.then((client)=> {
    const db = client.db('users'); //name of the data base needed (temporarely name added)
    const UsersCollection = db.collection('userInfo')
    const C02Router = createRouter(UserCollection);

app.post('/api/C02', (req, res) => {
    const newData = req.body;
    if (newData.hasOwnProperty("Username") && newData.hasOwnProperty("Name")) {
        UsersCollection //collection name is needed we need the folders first
          .insertOne(newData)
          .then((result) => {
          res.json(result.ops[0]);
        })
          .catch((err) => {
            console.error(err);
            res.status(500);
            res.json({ status: 500, error: err });
        });
    } else {
      res.status(400);  // bad request
      res.send("please make sure all information has been completed");
    }
  });

  app.use('/api/userInfo', C02Router);

});

.catch(console.error)

app.listen(5000, function() {
console.log(`Group Project running on port ${this.address().port}`);
});