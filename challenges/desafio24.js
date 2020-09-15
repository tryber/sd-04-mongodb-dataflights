db.voos.findOne({"litrosCombustivel":{$lt:600},"empresa":{$nin:["GOL","AZUL"]}},{"vooId":1,"empresa.nome":1,"litrosCombustivel":1,"_id":0})
/*db.voos.findOne({"litrosCombustivel":{$lt:600}},{"vooId":1,"empresa.nome":1,"litrosCombustivel":1,"_id":0})*/
/*Desafio 24
Retorne o vooId, empresa.nome e litrosCombustivel do primeiro voo em que litrosCombustivel 
não seja maior do que 600 e a empresa não seja GOL ou AZUL, e o campo litrosCombustivel exista. */
