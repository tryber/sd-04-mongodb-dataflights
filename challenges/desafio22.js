db.voos.find({
  "empresa.nome": { $in: ["DELTA AIRLINES", "AMERICAN AIRLINES"]},
  "aeroportOrigem.sigla": "SBGR" ,
  "aeroportoDestino.sigla": "KJFK" 
},{vooId: 1, _id: 0}).limit(1);
