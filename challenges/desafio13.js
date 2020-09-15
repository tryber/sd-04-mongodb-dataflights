db.voos.find({"aeroportoDestino.continente": {$nin: ["EUROPA", "ÁSIA", "OCEANIA"]}}).count();
/*Desafio 13
Conte os documentos em que o campo aeroportoDestino.continente não seja igual a EUROPA, ÁSIA e OCEANIA.*/
