db.voos.find(
  {
    $and:
      [{ "litrosCombustivel": { $lt: 1000 } },
      { "litrosCombustivel": { $exists: 1 } }]
  },
  {
    "_id": false,
    "vooId": 1,
    "litrosCombustivel": true
  }
).limit(1);
