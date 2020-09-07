db.voos.count({ $and: [{ "empresa.nome": "PASSAREDO"}, {"natureza": "Doméstica"}] });

db.resumoVoos.insert({"empresa": "", "totalVoosDomesticos": ""});

db.resumoVoos.findOne({"empresa": "PASSAREDO"}, {"_id": 0, "empresa": 1, "totalVoosDomesticos": 1});
