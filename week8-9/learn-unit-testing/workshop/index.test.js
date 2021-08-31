test("makeUrl", () => {
  equal(makeUrl("pikachu"), "https://pokeapi.co/api/v2/pikachu");
  equal(makeUrl("bulbasaur"), "https://pokeapi.co/api/v2/bulbasaur");
  equal(makeUrl("hitmonle"), "https://pokeapi.co/api/v2/hitmonlee");
});

test("searchParamsToObject");
