// Primeira query
NUMERO_TOTAL_DE_VOOS = db.voos.find({"empresa.nome": "LATAM AIRLINES BRASIL", "natureza": "Doméstica"}).count();

db.resumoVoos.insertOne({
  "empresa": "LATAM AIRLINES BRASIL",
  "totalVoosDomesticos": NUMERO_TOTAL_DE_VOOS
});

// Segunda Query
db.resumoVoos.findOne({"empresa": "LATAM AIRLINES BRASIL"}, {empresa: 1, totalVoosDomesticos: 1, _id: 0});
