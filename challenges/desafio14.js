db.voos.find({"aeroportoOrigem.pais": {$ne: "BRASIL"}}).count();
//db.voos.find().count();