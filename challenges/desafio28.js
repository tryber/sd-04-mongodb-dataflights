db.resumoVoos.insertOne({
  empresa: "LATAM AIRLINES BRASIL",
  totalVoosDomesticos: db.voos.count({ natureza: "Doméstico", "empresa.nome": "LATAM AIRLINES BRASIL" })
});
db.resumoVoos.findOne({empresa: "LATAM AIRLINES BRASIL" }, { _id: 0, empresa: 1, totalVoosDomesticos: 1 });