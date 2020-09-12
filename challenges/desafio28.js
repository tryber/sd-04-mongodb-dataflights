TOTAL_LATAM = db.voos.find({
  "empresa.nome": "LATAM AIRLINES BRASIL",
  "natureza": "Doméstica"
}).count();

db.resumoVoos.insertOne({
  "empresa": "LATAM AIRLINES BRASIL",
  "totalVoosDomesticos": TOTAl_LATAM
});

db.resumoVoos.findOne({ "empresa": "LATAM AIRLINES BRASIL" }, { "_id": 0 });
