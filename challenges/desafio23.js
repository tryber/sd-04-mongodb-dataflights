// Retorne o vooId e litrosCombustivel do primeiro voo em que o campo litrosCombustivel não seja maior do que 1000 e o campo litrosCombustivel exista.

db.voos.find(
  {
    litrosCombustivel: {
      $exists: true, $lte: 1000
    },
  },
  {
    vooId:1, litrosCombustivel:1, _id: 0
  }
  ).limit(1);
