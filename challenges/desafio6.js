db.voos.find(
  {},
  { "empresa.sigla": 1, "empresa.nome": 1, passageiros: 1, vooId: "756807" }
);
