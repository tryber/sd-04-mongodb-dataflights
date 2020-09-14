db.voos.find({},{"vooId":1 , "_id":0}).skip(9).limit(3);
//pegando(mostrando) somente o vooId pulando os 9 primeiros
// e mostrando os proximos 3 , resultando em mostrar do decimo ate o 12
