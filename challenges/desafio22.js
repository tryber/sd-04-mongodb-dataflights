db.voos.find({
  "empresa.nome": { $or: ["DELTA AIRLINES", "AMERICAN AIRLINES"] }
}, { vooId: 1 }).limit(1);
