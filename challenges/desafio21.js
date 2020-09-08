db.voos.find({"litrosCombustivel": {$gte: 1000}}, {"vooId": 1}).sort({"litrosCombustivel": 1}).limit(1);
