db.voos.findOne({"litrosCombustivel": { $exists: true, $gte: 1000 }},{vooId: 1, _id: 0});
