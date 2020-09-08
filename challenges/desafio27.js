TOTAL_VOOS_PASSAREDO = db.voos.find({ natureza:"Doméstica", "empresa.nome":"PASSAREDO" }).count();

db.resumoVoos.insertOne({ empresa:"PASSAREDO", totalVoosDomesticos: TOTAL_VOOS_PASSAREDO });

db.resumoVoos.findOne({ empresa:"PASSAREDO" },{ _id:0 });
