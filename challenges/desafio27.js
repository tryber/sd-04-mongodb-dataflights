const passaredoVoos = db.voos
  .find({
    natureza: "Doméstica",
    "empresa.nome": "PASSAREDO",
  })
  .count();

db.resumoVoos.insertOne({
  empresa: "PASSAREDO",
  totalVoosDomesticos: passaredoVoos,
});

db.resumoVoos.find({}, { _id: 0, empresa: 1, totalVoosDomesticos: 1 });
