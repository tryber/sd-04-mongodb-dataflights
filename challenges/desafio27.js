// db.voos.count({"empresa.nome": "PASSAREDO", "natureza": "Doméstica"}); // saber valor = 4187
db.resumoVoos.insertOne({"empresa": "PASSAREDO", "totalVoosDomesticos": 4187 });
db.resumoVoos.find({empresa: "PASSAREDO"}, {_id: 0}).limit(1);
