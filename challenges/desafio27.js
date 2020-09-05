db.resumoVoos.insertOne({
  "totalVoosDomesticos": db.voos.count({
    "natureza": "Doméstica",
    "empresa.nome": "PASSAREDO"
  }),
  "empresa": "PASSAREDO"
});

db.resumoVoos.findOne({
  "empresa": "PASSAREDO"
},{
  "_id": 0,
  "totalVoosDomesticos": 1,
  "empresa": 1,
});
