db.voos.findOne(
  {
    "passageiros.pagos": "700"
  },
  {
    vooId: 1,
    mes: 1,
    ano: 1,
    _id: 0
  }
);
