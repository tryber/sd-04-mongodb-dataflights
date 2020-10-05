db.voos.find({$or: [{"aeroportoDestino.continente": {$nin: ["EUROPA","ÁSIA","OCEANIA"]}}]}).count();
