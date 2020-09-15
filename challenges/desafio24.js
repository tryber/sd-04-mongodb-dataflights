db.voos.findOne({
  $and: [
    {"litrosCombustivel": {$lte: 600}},
    {"empresa.nome": {$ne: "GOL"}} 
  ]
}, {"_id": false, "vooId": true, "empresa.nome": true, "litrosCombustivel": true});
