let numero = db.voos.find({$and: [{"empresa.nome": "LATAM AIRLINES BRASIL"},{natureza: "Doméstica"}]}).count()
let empresa = "LATAM AIRLINES BRASIL";
db.resumoVoos.insertMany([{"empresa": empresa, totalVoosDomesticos: numero}]);
db.resumoVoos.find({"empresa": empresa},{_id: 0});
