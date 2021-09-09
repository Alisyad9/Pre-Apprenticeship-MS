// function map(array) {
//   return array;
// }

function map(array, fn) {
  if (Array.isArray(array)) return "is not an array";

  console.log(Array.isArray(array));
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    const el = array[i];
    const newEl = fn(el); // only change is passing i here
    console.log(newEl);
    newArray.push(newEl);
  }

  console.log(newArray);

  // for (const item of array) {
  //   const newEl = fn(item); // only change is passing i here
  //   newArray.push(newEl);
  // }

  return newArray;
}

function filter(array, fn) {
  const filteredResult = [];

  // for (let index = 0; index < array.length; index++) {
  //   const element = array[index];
  //   const filteredItem = fn(element, index);

  //   if (filteredItem) filteredResult.push(element);
  // }

  for (const element of array) {
    const filteredArray = fn(element);

    if (filteredArray) filteredResult.push(element);
  }

  return filteredResult;
}

// function filter(array, fn) {
//   const filteredArray = [];
//   for (let i = 0; i < array.length; i++) {
//     const el = array[i];
//     const shouldKeep = fn(el, i);
//     if (shouldKeep) filteredArray.push(el);
//   }
//   return filteredArray;
// }

function every(array, fn) {
  const filteredResult = true;
  for (const element of array) {
    const filteredArray = fn(element);

    if (!filteredArray) break;
  }

  return filteredResult;
}
