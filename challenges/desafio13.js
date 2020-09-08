/* db.voos.find({$and: [{"aeroportoDestino.continente":{$not:{$eq:"EUROPA"}}}, {"aeroportoDestino.continente": {$not:{$eq:"ÁSIA"}}}, {"aeroportoDestino.continente":{$not: {$eq:"OCEANIA"}}}]}).count(); */
db.voos.find({"aeroportoDestino.continente": {$nin: ["EUROPA", "ÁSIA", "OCEANIA"]}}).count();
