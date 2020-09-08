total = db.voos.find({ natureza: "Doméstica", "empresa.nome": "PASSAREDO" }).count();

db.resumoVoos.insertOne({ empresa: "PASSAREDO", totalVoosDomesticos: total })

db.resumoVoos.find({ empresa: "PASSAREDO" }).limit(1);
