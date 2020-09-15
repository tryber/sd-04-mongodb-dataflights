db.voos.find(
  {
    $or:[{"aeroportoDestino.pais":"BRASIL"},{"aeroportoDestino.pais":"ARGENTINA"},{"aeroportoDestino.pais":"CHILE"}]
  }
  ).count()
/*Desafio 12
Conte os documentos em que o campo aeroportoDestino.pais seja igual a BRASIL, ARGENTINA ou CHILE.*/
