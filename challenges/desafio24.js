db.voos.find(
    {
      $and: [
        {litrosCombustivel: {$not: {$gt: 600}}},
        {"empresa.nome": {$nin: ["GOL", "AZUL"]}},
        {litrosCombustivel: {$exists: true}}
      ]
    },
    {
      vooId: 1,
      litrosCombustivel: 1,
      "empresa.nome": 1,
      _id: 0
    }
  ).limit(1);
