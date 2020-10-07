let VOOS_LATAM = db.voos.find({"natureza": "Doméstica", "empresa.nome": "LATAM AIRLINES BRASIL"}).count();

db.resumoVoos.insertOne({"empresa": "LATAM AIRLINES BRASIL", "totalVoosDomesticos": VOOS_LATAM});

db.resumoVoos.findOne({"empresa": "LATAM AIRLINES BRASIL"}, {"_id": false})
