const totalVoos = db.voos.find({
    natureza: "Doméstica",
    "empresa.nome": "LATAM AIRLINES BRASIL",
  }).count();

db.resumoVoos.insertOne({
  empresa: "LATAM AIRLINES BRASIL",
  totalVoosDomesticos: totalVoos,
});

db.resumoVoos.findOne({ empresa: "LATAM AIRLINES BRASIL" });
