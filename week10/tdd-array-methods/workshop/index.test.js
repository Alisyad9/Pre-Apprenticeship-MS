// testing map()

test("map() should return an array with the same number of elements", () => {
  const result = map([1], () => {});
  equal(result.length, 1);
});

test("map() should transform each element of the array using the fn argument", () => {
  const result = map([1, 2, 3], (x) => x + 1);
  equal(result[0], 2);
  equal(result[1], 3);
  equal(result[2], 4);
});

test("filter() should return an array with the same elements if they all pass the test", () => {
  // const result = filter([1], (x) => x > 0);
  // console.log(result);
  // // const result = filter([1, 2], (x) => x > 0);
  // // equal(result, true);

  // console.log(equal(result[0], 1));
  // equal(result[0], 1);
  const result = filter([1], () => true);
  equal(result[0], 1);
});

test("filter:removed element", () => {
  const result = filter([1, 20], (x) => x > 1);
  equal(result[0], 20);
});

test("every test", () => {
  const result = every([1, 2, 3], (x) => x > 0);
  equal(result, true);
});

test("every() should return false if any element fails the test", () => {
  const result = every([1, 100], (x) => x > 10);
  equal(result, false);
});
