/////////////////

const colourtButton = document.querySelectorAll(".container button");

const setBackGround = (e) => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);

  e.target.parentElement.style.backgroundColor = "#" + randomColor;
  const parent = e.target.parentElement;

  parent.querySelector(".hex-code").innerText = "#" + randomColor;
};

colourtButton.forEach((button) =>
  button.addEventListener("click", setBackGround)
);

///////////////////
const inputs = document.querySelectorAll(".container input");

const handleUpdate = (e) => {
  console.log(e.target);
  e.target.parentElement.style.backgroundColor = e.target.value;

  const parent = e.target.parentElement;
  parent.querySelector(".hex-code").innerText = e.target.value;
};

inputs.forEach((input) => input.addEventListener("change", handleUpdate));
