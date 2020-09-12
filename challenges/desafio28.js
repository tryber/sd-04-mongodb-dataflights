qtylatam = db.voos.find({
  "empresa.nome": "LATAM AIRLINES BRASIL",
  "natureza": "Doméstica"
}).count();

db.resumoVoos.insert({
  "empresa": "LATAM AIRLINES BRASIL",
  "totalVoosDomesticos": qtylatam
});

db.resumoVoos.find({ "empresa": "LATAM AIRLINES BRASIL" }, { "_id": 0 });
