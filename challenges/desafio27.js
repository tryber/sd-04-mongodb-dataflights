TOTAL_DE_VOOS_DOMESTICOS = db.voos.count({ "empresa.nome": "PASSAREDO", natureza: "Doméstica" });

db.resumoVoos.insertOne({
  empresa: "PASSAREDO",
  totalVoosDomesticos: TOTAL_DE_VOOS_DOMESTICOS
});

db.resumoVoos.findOne({empresa: "PASSAREDO"}, { _id: 0, empresa: 1, totalVoosDomesticos: 1 });
