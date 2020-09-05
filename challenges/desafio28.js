// db.resumoVoos.insertOne({
//   "empresa": "LATAM AIRLINES BRASIL",
//   "totalVoosDomesticos": db.voos.count({
//     "empresa.nome": "LATAM AIRLINES BRASIL",
//     "natureza": "Doméstica"
//   })
// });

// db.resumoVoos.findOne({
//   "empresa": { $eq: "LATAM AIRLINES BRASIL" }
// },{
//   "_id": 0,
//   "empresa": 1,
//   "totalVoosDomesticos": 1
// });
