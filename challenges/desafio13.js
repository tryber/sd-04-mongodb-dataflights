db.voos.find({ "aeroportoDestino.continente": { $nin: [ "OCEANIA", "EUROPA", "ÁSIA" ] }}).count();
