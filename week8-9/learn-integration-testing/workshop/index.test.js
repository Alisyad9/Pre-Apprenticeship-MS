test("add", () => {
  equal(calculate(2, "+", 2), 4);
});

test("subtract", () => {
  equal(calculate(4, "-", 2), 2);
});

test("multiply", () => {
  equal(calculate(5, "*", 5), 25);
});
