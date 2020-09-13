const domesticFlighs = {
  empresa: "PASSAREDO",
  flights: db.voos.countDocuments({
    "empresa.nome": "PASSAREDO",
    natureza: "Doméstica",
  }),
};

db.voos.insertOne({ empresa: domesticFlighs.empresa,  totalVoosDomesticos: domesticFlighs.flights});

db.resumoVoos.find({}, { _id: 0, empresa: 1, totalVoosDomesticos: 1 });
