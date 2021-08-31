// "pikachu" -> "https://pokeapi.co/api/v2/pikachu"

function makeUrl(name) {
  return "https://pokeapi.co/api/v2/" + name;
}

const x = { name: "oliver" };
const y = { name: "oliver" };
console.log(x === y);

console.log(x.name === y.name);
