// Procura o primeiro (limit(1)) voo que litrosCombustivel exista ($exists: true)
// Retornando o campo vooId
db.voos
  .find(
    {
      litrosCombustivel: {
        $exists: 0,
      },
    },
    {
      _id: false,
      vooId: true,
    }
  )
  .limit(1);
