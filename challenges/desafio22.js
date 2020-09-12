db.voos.findOne({
  $and: [
    { "empresa.nome": { $in: ["DELTA AIRLINES", "AMERICAN AIRLINES"] } },
    { "aeroportoOrigem": "SBGR" },
    { "aeroportoDestino": "KJFK" }
  ]
}, { "_id": 0, "vooId": 1 });
