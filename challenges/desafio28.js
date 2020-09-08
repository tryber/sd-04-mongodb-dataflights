total = db.voos.find({ natureza: "Doméstica", "empresa.nome": "LATAM AIRLINES BRASIL" }).count();

db.resumoVoos.insertOne({ empresa: "LATAM AIRLINES BRASIL", totalVoosDomesticos: total })

db.resumoVoos.find({ empresa: "LATAM AIRLINES BRASIL" }).limit(1);
