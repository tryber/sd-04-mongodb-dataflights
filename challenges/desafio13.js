db.voos
  .find({
    $nin: [
      { "aeroportoDestino.continente": "EUROPA" },
      { "aeroportoDestino.continente": "ASIA" },
      { "aeroportoDestino.continente": "OCEANIA" },
    ],
  })
  .count();
