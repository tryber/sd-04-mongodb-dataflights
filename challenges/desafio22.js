db.voos
  .find(
    {
      $or: [
        { "empresa.nome": "DELTA AIRLINES" },
        { "empresa.nome": "AMERICAN AIRLINES" }
      ],
      "aeroportoDestino.sigla": "KJFK",
      "aeroportoOrigem.sigla": "SBGR",
    },
    { "_id": 0, "vooId": 1 }
  )
  .limit(1);
