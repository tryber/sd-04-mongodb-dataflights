db.resumoVoos.insertOne({
  "empresa": "LATAM AIRLINES BRASIL",
  "totalVoosDomesticos": db.voos.count({
    "natureza": "Doméstica",
    "empresa.nome": "LATAM AIRLINES BRASIL"

  }),
});

db.resumoVoos.findOne({
  "empresa": { $eq: "LATAM AIRLINES BRASIL" }
},{
  "_id": 0,
  "empresa": 1,
  "totalVoosDomesticos": 1
});
