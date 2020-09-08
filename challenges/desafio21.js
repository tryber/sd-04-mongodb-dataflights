db.voos
  .find({ litrosCombustivel: { $gte: 1000 } }, { _id: 0, vooId: 1 })
  .limit(1);

  // db.voos.findOne({ litrosCombustivel: { $gt: 1000 } }, { vooId: 1, _id: 0 });