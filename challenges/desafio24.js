db.voos
  .find(
    {
      $and: [
        { "litrosCombustivel": { $lte: 600 } },
        {"litrosCombustivel": {$exists: true}}
      ],
        "empresa.nome": { $ne: "GOL" },
        "empresa.nome": { $ne: "AZUL" },

    },
    { "_id": 0, "vooId": 1, "empresa.nome": 1, "litrosCombustivel": 1 }
  )
  .limit(1);
