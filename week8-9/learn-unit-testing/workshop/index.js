// "pikachu" -> "https://pokeapi.co/api/v2/pikachu"

function makeUrl(name) {
  return "https://pokeapi.co/api/v2/" + name;
}

const x = { name: "oliver" };
const y = { name: "oliver" };
console.log(x === y);

console.log(x.name === y.name);

function searchParamsToObject(parameter) {
  ////// URLsearchParams get us this object {name: "oliver", email: "hello@oliverjam.com"}
  let searchParams = new URLSearchParams(parameter);

  /////changes it to an objact containing the name and email.
  return Object.fromEntries(searchParams);
}

const entries = new Map([
  ["foo", "bar"],
  ["baz", 42],
]);

const obj = Object.fromEntries(entries);

console.log(obj);
// expected output: Object { foo: "bar", baz: 42 }
