db.voos.find({ "aeroportoDestino.continente": { $nin: ["EUROPA", "ASIA", "OCEANIA"] } }).count();
