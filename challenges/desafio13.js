db.voos.countDocuments({
  "aeroportoDestino.pais": { $nin: ["BRASIL", "ARGENTINA", "CHILE"] },
});
