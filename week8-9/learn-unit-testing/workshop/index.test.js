test("makeUrl should create the correct PokéAPI URL", () => {
  equal(makeUrl("pikachu"), "https://pokeapi.co/api/v2/pikachu");
  equal(makeUrl("bulbasaur"), "https://pokeapi.co/api/v2/bulbasaur");
  equal(makeUrl("hitmonle"), "https://pokeapi.co/api/v2/hitmonlee");
});
