db.voos.find({"payload": {$gt: 7000}}, {"vooId": 1, "mes": 1, "ano": 1}).sort({"payload": 1}).limit(1);
