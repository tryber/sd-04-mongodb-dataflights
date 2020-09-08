total = db.voos.find({ natureza: "Doméstica", "empresa.nome": "LATAM AIRLINES BRASIL" }).count();

db.resumoVoos.insertOne({ empresa: "LATAM AIRLINES BRASIL", totalVoosDomesticos: total })

db.resumoVoos.find({ empresa: "LATAM AIRLINES BRASIL" }, { _id: 0, empresa: true, totalVoosDomesticos: true }).limit(1);
