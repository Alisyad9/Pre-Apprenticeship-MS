let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

biggestValue = 0;
smallestValue = Infinity;

for (let index = 0; index < array.length; index++) {
  const element = array[index];
  if (element > biggestValue) {
    biggestValue = element;
  }

  if (element < biggestValue) {
    biggestValue = element;
  }
}

console.log(biggestValue);