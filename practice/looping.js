let array = [1, -2, 2, 3, 4, 5, 6, 7, 8, 9, 10];

biggestValue = 0;
smallestValue = Infinity;

for (let index = 0; index < array.length; index++) {
  const element = array[index];
  if (element > biggestValue) {
    biggestValue = element;
  }

  if (element < smallestValue) {
    smallestValue = element;
  }
}
console.log(biggestValue);
console.log(smallestValue);

let nestedArray = [[1], [2], [4]];

for (let index = 0; index < nestedArray.length; index++) {
  const element = nestedArray[index];

  for (let index = 0; index < element.length; index++) {
    const result = element[index];
    console.log(result);
  }

  console.log(element);
}
