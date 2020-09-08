db.voos.find({"aeroportoDestino.continente": {$ne: "EUROPA", $ne: "ASIA", $ne: "OCEANIA"}}).count();
