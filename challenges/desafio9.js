// Desafio 9
// Retorne a quantidade de voos dos anos de 2017 e 2018.
db.voos.find({"ano": { $in: [2017, 2018] }}).count();
