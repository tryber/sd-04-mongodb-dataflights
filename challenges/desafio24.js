db.voos.find(
  {
    $and: [
      { litrosCombustivel: { $lt: 600 } },
      { litrosCombustivel: { $exists: true } },
      { $or: [{ "empresa.nome": "GOL" }, { "empresa.nome": "AZUL" }] },
    ],
  },
  { _id: 0, "empresa.nome": 1, litrosCombustivel: 1 }
);
