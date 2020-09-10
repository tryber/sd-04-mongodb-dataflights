db.voos.find({"aeroportoDestino.pais": {$nin: ["BRASIL"]}}).count();
