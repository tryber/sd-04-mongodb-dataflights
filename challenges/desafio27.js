// Erro TypeError: x.toString is not a function
db.resumoVoos.insertOne({"empresa": "PASSAREDO", "totalVoosDomesticos": db.voos.find({"empresa.nome": "PASSAREDO", "natureza": "Doméstica"})});
db.resumoVoos.find({empresa: "PASSAREDO"}, {_id: 0}); // Aqui
