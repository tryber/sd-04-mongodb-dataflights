const domesticFlighs = {
  empresa: "LATAM AIRLINES BRASIL",
  flights: db.voos.countDocuments({
    "empresa.nome": "LATAM AIRLINES BRASIL",
    natureza: "Doméstica",
  }),
};

db.resumoVoos.insertOne({ empresa: domesticFlighs.empresa,  totalVoosDomesticos: domesticFlighs.flights});

db.resumoVoos.find({}, { _id: 0 });
