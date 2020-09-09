// db.voos.find({$and:[{"empresa.nome": "PASSAREDO"},{"natureza": "Doméstica"}]}).count();
db.resumoVoos.insert({empresa: "PASSAREDO",totalVoosDomesticos: 4187});
db.resumoVoos.find({},{_id: 0});
