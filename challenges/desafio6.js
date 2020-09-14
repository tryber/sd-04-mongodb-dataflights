db.voos.find({"vooId":756807},{"empresa.sigla":1, "empresa.nome":1, "passageiros":1, "_id":0});
// localiza na coleçao voos o vooId = 756807 e retorna somente os
// documentos especificos sigla nome passageiros
