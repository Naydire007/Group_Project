use users;
db.dropDatabase();

db.userInfo.insertMany([
    {
      "Username":"JClarkson",
      "Name":"Jeremy Clarkson",
      "Diet":"Omnivore",
      "Transport":"Car"
    },
    {
        "Username":"Mobsy",
        "Name":"Moby",
        "Diet":"Vegan",
        "Transport":"Bike"
    }
])