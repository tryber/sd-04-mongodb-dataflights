// Retorne o vooId, empresa.nome e litrosCombustivel do primeiro voo em que litrosCombustivel não seja maior do que 600 e a empresa não seja GOL ou AZUL, e o campo litrosCombustivel exista.
db.voos
  .find(
    {
      litrosCombustivel: { $ngt: 600 },
      litrosCombustivel: { $exists: 1 },
      "empresa.nome": { $nin: ["GOL", "AZUL"] },
    },
    { vooId: 1, _id: 0, litrosCombustivel: 1, "empresa.nome": 1 }
  )
  .limit(1);
