db.voos.find({litrosCombustivel: {$exists: 1}}, {vooId: 1}).sort({litrosCombustivel: 1}).limit(1);
