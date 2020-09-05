qty = db.voos.find({"empresa.nome": "PASSAREDO", "natureza": "Doméstica"}).count();
db.voos.insert({"empresa":{"nome" : "PASSAREDO"}, "totalVoosDomesticos" : qty });
db.voos.find({"empresa.nome": "PASSAREDO", "totalVoosDomesticos" : 4187 });
