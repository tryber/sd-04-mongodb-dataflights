db.voos.findOne({ $and: [
  {"empresa.nome": { $in: ["DELTA AIRLINES", "AMERICAN AIRLINES"]}},
  {"aeroportOrigem.sigla": { $eq: "SBGR" }},
  {"aeroportoDestino.sigla": { $eq: "KJFK" }}
]},{vooId: 1, _id: 0})