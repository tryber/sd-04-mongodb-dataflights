db.voos.find({}, {"_id":0,"vooId": 1}).limit(3).skip(9)
db.voos.findOne({"vooId":756807},{"_id":0,"empresa.nome":1,"empresa.sigla":1},{"passageiros.pagos":1})
/*Desafio 5
Retorne o vooId do décimo ao décimo segundo documento da coleção voos. */
