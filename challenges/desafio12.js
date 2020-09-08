db.voos
  .find({
    "aeroportoDestino.pais": [/BRASIL/, /ARGENTINA/, /CHILE/]
  })
  .count();
