const names ={
    person1='james',
    person2='ale'
};
const car = { type: "Fiat", model: "500", color: "white" };
const people = ["james", "ali", "john"];
function namesInObject(arrayOfcarnames) {
  //     console.log(arrayOfcarnames.map((car) => car));
  //   return arrayOfcarnames.map((car) => car);

  // return arrayOfcarnames.map(function (car) {})
  return arrayOfcarnames.map(function (cars) {
    return cars.type;
  });
}

namesInObject(car);
