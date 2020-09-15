const flights = db.voos.find({"empresa.nome": "PASSAREDO", "natureza": "Doméstica"}).count();
db.resumoVoos.insert({ "empresa": "PASSAREDO", "totalVoosDomesticos": flights });

db.resumoVoos.find({"empresa": "PASSAREDO"}, 
{"_id": false, "empresa": true, "totalVoosDomesticos": true});
