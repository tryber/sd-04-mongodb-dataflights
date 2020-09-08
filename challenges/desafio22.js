db.voos
  .find(
    {
      $and: [
        { "empresa.nome": { $in: ["DELTA AIRLINES", "AMERICAN AIRLINES"] } },
        { "aeroportoDestino.sigla": "KJFK" },
        { "aeroportoOrigem.sigla": "SBGR" },
      ],
    },
    { vooId: 1, _id: 0 }
  )
  .limit(1);


  // db.voos.findOne(
  //   {
  //     "empresa.nome": { $in: ["DELTA AIRLINES", "AMERICAN AIRLINES"] },
  //     "aeroportoOrigem.sigla": "SBGR",
  //     "aeroportoDestino.sigla": "KJFK",
  //   },
  //   { vooId: 1, _id: 0 }
  // );
