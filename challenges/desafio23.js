db.voos.find({
  litrosCombustivel: { $exists: true, $lte: 1000 }
}, { vooId: 1, litrosCombustivel: 1 }).limit(1);
