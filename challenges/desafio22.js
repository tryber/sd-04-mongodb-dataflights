/*
Desafio 22
Retorne o vooId do primeiro voo em que a empresa seja DELTA AIRLINES ou AMERICAN AIRLINES, a sigla do aeroporto de origem seja SBGR e a sigla do aeroporto de destino seja KJFK.
*/
db.voos.findOne(
  {
    $and: [{ "aeroportoOrigem.sigla": "SBGR" }, { "aeroportoDestino.sigla": "KJFK" }],
    $or: [{ "empresa.nome": "DELTA AIRLINES"}, { "empresa.nome": "AMERICAN AIRLINES" }]
  },
  {
    "_id": 0,
    "vooId": 1
  });
