const result = db.voos.count({ natureza: "Doméstica", "empresa.nome": "PASSAREDO" });
db.resumoVoos.insertOne({ empresa: "PASSAREDO", totalVoosDomésticos: result });
db.resumoVoos.findOne({ "empresa": "PASSAREDO" }, { empresa: 1, totalVoosDomesticos: 1 });
