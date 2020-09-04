db.resumoVoos.insertOne(
  {
    totalVoosDomesticos: db.voos.count({"empresa.nome": "PASSAREDO", natureza: "Doméstica"}),
    empresa: "PASSAREDO"
  }
);

db.resumoVoos.find({empresa: "PASSAREDO"}, {_id: 0}).pretty();
