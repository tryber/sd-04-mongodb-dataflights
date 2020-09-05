db.voos.find({ rtk: { $exists: !true } }, { vooId: 1, _id: 0 }).limit(1);
