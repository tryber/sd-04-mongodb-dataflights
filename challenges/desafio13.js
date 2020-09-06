db.voos.count({ "aeroportoDestino.continente": { $nin: ["EUROPA","ASIA","OCEANIA"] } });


db.voos.count( { "aeroportoDestino.continente": { $nin: [ 5, 15 ] } } )
