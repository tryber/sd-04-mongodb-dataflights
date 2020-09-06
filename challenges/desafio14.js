db.voos.count( { "aeroportoOrigem.pais": { $ne: "BRASIL" } }, { "_id":0, "decolagens":1 } );
