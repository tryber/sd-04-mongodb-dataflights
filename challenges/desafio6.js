db.voos.find({vooId: { $eq: 756807}}, { "empresa.sigla": 1, "_id": 0,"empresa.nome": 1,"passageiros": 1 }).pretty();
