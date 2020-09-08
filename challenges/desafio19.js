db.voos
  .find(
    { $or: [{ "litrosCombustivel": { $exists: true } }] },
    { "_id": 0, vooId: 1 }
  )
  .limit(1);
