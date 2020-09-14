db.voos.find({}, { "_id": 0, "vooId": 1 }).skip(3).limit(9);
