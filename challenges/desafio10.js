db.voos.find({"ano": 2017, "empresa.nome": "AZUL"}, { vooId: true, "empresa.nome": true, "aeroportoOrigem.nome": true, "aeroportoDestino.nome": true, mes: true, ano: true, _id:false  }).limit(10);
