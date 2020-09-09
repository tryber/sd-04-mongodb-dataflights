passaredoVoos = db.voos.find({
    natureza: "Domestica",
    "empresa.nome": "PASSAREDO",
  }).count();

db.resumoVoos.insertOne({
  empresa: "PASSAREDO",
  totalVoosDomesticos: passaredoVoos,
});

db.resumoVoos.find({});
