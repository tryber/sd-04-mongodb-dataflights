total = db.voos.find({ natureza: "Doméstica", "empresa.nome": "PASSAREDO" }).count();

db.resumoVoos.insertOne({ empresa: "PASSAREDO", totalVoosDomesticos: total })

db.resumoVoos.find({ empresa: "PASSAREDO" }, { _id: 0, empresa: 1, totalVoosDomesticos: 1 }).limit(1);
