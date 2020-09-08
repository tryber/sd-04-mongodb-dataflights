db.voos.find({
  "empresa.nome": { $or: ["DELTA AIRLINES", "AMERICAN AIRLINES"] }
}, { _id: 0, vooId: 1 }).limit(1);
