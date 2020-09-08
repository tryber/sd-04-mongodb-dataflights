// Primeira query
db.resumoVoos.insertOne({
  "empresa": "LATAM AIRLINES BRASIL",
  "totalVoosDomesticos": db.voos.find({"empresa.nome": "LATAM AIRLINES BRASIL", "natureza": "Doméstica"}).count()
});

// Segunda Query
db.resumoVoos.findOne({"empresa": "LATAM AIRLINES BRASIL"}, {empresa: 1, totalVoosDomesticos: 1, _id: 0});
