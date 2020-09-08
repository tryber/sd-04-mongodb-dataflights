db.voos.find({"rtk": {$exists: 0}}, {"vooId": 1}).sort({"rtk": 1}).limit(1);
