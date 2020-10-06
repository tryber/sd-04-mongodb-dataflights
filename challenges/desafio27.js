const PASSAREDO = db.voos.find({"natureza": "Doméstica", "empresa.nome": "PASSAREDO"}).count();

db.resumoVoos.insertOne({"empresa": "PASSAREDO", "totalVoosDomesticos": PASSAREDO});

db.resumoVoos.findOne({"empresa": "PASSAREDO"}, {"_id": false});
