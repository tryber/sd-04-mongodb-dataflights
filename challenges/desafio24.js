db.voos.findOne(
  {
    $nor: [
      { litrosCombustivel: { $gt: 600 } },
      { "empresa.nome": { $in: ["GOL", "AZUL"] } },
      { litrosCombustivel: null },
    ],
  },
  { _id: 0, vooId: 1, "empresa.nome": 1, litrosCombustivel: 1 }
);
