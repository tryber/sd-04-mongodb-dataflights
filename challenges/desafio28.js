TOTAL_VOOS_LATAM = db.voos.find({"natureza":"Doméstica", "empresa.nome":"LATAM AIRLINES BRASIL"}).count();

db.resumoVoos.insertOne({"empresa":"LATAM AIRLINES BRASIL", "totalVoosDomesticos": TOTAL_VOOS_LATAM});

db.resumoVoos.findOne({"empresa":"LATAM AIRLINES BRASIL"},{"_id":0});
