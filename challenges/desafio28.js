db.voos.count({"empresa.nome": "LATAM AIRLINES BRASIL", "natureza": "Doméstica"});
db.resumoVoos.insertOne({"empresa": "LATAM AIRLINES BRASIL", "totalVoosDomesticos":20026});
db.resumoVoos.find({"empresa": "LATAM AIRLINES BRASIL", }, {"_id": 0, "totalVoosDomesticos": 1, "empresa": 1} );
