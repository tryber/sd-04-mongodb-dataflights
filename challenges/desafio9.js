db.voos.find({$or:[{ano: { $eq: 2017}},{ano: {$eq: 2018}}]}).count();
