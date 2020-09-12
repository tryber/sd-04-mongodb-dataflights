db.voos.find({
  $and: [
    {
      $or: [
        { "empresa.nome": { $in: ["DELTA AIRLINES", "AMERICAN AIRLINES"] } }
      ]
    },
    {
      $or: [
        { "aeroportoOrigem": "SBGR" }
      ]
    },
    {
      $or: [
        { "aeroportoDestino": "KJFK" }
      ]
    }
  ]
}, { "_id": 0, "vooId": 1 }).limit(1);
