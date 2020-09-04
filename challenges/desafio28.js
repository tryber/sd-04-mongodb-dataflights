db.resumoVoos.insertOne({
  totalVoosDomesticos: db.voos.count({
    "empresa.nome": "LATAM AIRLINES BRASIL",
    natureza: "Doméstica"
  }),
  empresa: "LATAM AIRLINES BRASIL",
});

db.resumoVoos.findOne({ empresa: "LATAM AIRLINES BRASIL" }, { _id: 0 }).pretty();
