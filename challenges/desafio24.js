db.voos.findOne({
  $and: [
    { "empresa.nome": { $nin: ["GOL", "AZUL"] } },
    { "litrosCombustivel": { $lte: 1000 } },
    { "litrosCombustivel": { $exists: true } }
  ]
}, {
  "_id": 0, "vooId": 1, "empresa.nome": 1, "litrosCombustivel": 1
});
