db.voos.find({ 
    $and: [{
      $or: [{ "empresa.nome": "DELTA"}, { "empresa.nome": "AIRLINES"}, { "empresa.nome": "AMERICAN AIRLINES"}]},
      {"aeroportoOrigem.sigla": "SBGR"}, {"aeroportoDestino.sigla": "KJFK"},
    ]
  },
  { "_id": 0, "vooId": 1 }).limit(1);
