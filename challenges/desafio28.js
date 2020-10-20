TOTAL_DE_VOOS_DOMESTICOS = db.voos.find({ "empresa.nome": "LATAM AIRLINES BRASIL", "natureza": "Doméstica" }).count();

db.resumoVoos.insertOne({
  "empresa": "LATAM AIRLINES BRASIL",
  "totalVoosDomesticos": TOTAL_DE_VOOS_DOMESTICOS
});

db.resumoVoos.findOne({ "empresa": "LATAM AIRLINES BRASIL" }, { _id: 0, empresa: 1, totalVoosDomesticos: 1});
