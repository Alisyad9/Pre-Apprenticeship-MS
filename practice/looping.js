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

const arrayOfNumbers = [2, [[1]], [2], [3]];

for (let index = 0; index < arrayOfLetters.length; index++) {
  const element = arrayOfLetters[index];
  console.log(element);

  for (let index = 0; index < element.length; index++) {
    const lettersInTheNestedArray = element[index];
    console.log(lettersInTheNestedArray);
  }
}

console.log(arrayOfNumber.flat(Infinity));

arrayOfLetters.flatMap((element) => console.log(element * 2));
