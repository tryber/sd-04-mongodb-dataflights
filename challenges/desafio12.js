db.voos.find({"aeroportoDestino.pais": {$eq: "BRASIL", $eq: "ARGENTINA", $eq: "CHILE"}}).count();
