db.voos.findOne({ "passageiros.pagos": { $gt: 7000 } }, { mes: 1, ano: 1 });
