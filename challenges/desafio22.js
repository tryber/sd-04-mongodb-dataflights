db.voos.find(
  {
    $and: [
      { "empresa.nome": { $in: ["DELTA AIRLINES", "AMERICAN AIRLINES"] } },
      { "empresa.sigla": { $in: ["SBGR", "KJFK"] } },
    ]
  },
  { "_id": 0, "vooId": true }
).limit(1);