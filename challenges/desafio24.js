db.voos.findOne(
  {
    $and: [
      { litrosCombustivel: { $lte: 600 } },
      { empresa: { $nin: ["GOL", "AZUL"] } },
      { litrosCombustivel: { $exists: true } },
    ],
  },
  { _id: false, vooId: true, "empresa.nome": true, litrosCombustivel: true }
);
