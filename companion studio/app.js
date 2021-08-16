
    
   
/////////colour button
    // const colourtButton = document.querySelectorAll("#bgcolor");
    
const colourtButton = document.querySelectorAll(".container button");
    console.log(colourtButton);

    
    function setBg ()  {
        // console.log(this.type);

        
        console.log(this.name);
       

      const randomColor = Math.floor(Math.random() * 16777215).toString(16);
      // document.body.style.backgroundColor = "#" + randomColor;
    //   colour1.style.backgroundColor = "#" + randomColor;

      document.documentElement.style.setProperty(
        `--${this.name}`,
        "#" + randomColor
      );
    //   color.innerHTML = "#" + randomColor;
    };
    // colourtButton.addEventListener("click", setBg);
    colourtButton.forEach((button) => button.addEventListener("click", setBg));



//////colour handlers

const inputs = document.querySelectorAll(".container input");
console.log(inputs);

      function handleUpdate() {
        console.log(this.type);

        
        console.log(this.name);
       

        document.documentElement.style.setProperty(
            `--${this.name}`,
            this.value
          );

     
      }

      inputs.forEach((input) => input.addEventListener("change", handleUpdate));
  
////////////random css variables 
// function randomColor() {
//     const r = Math.floor(Math.random() * 256);
//     const g = Math.floor(Math.random() * 256);
//     const b = Math.floor(Math.random() * 256);

//     console.log(this.name);
    
     
//     // document.documentElement.style.setProperty(this.name
//     //     `--${this.name}`,`rgb(${r},${g},${b})`
        
//     //   );
//   }
  
//   const color = document.documentElement;
  
//   color.style.setProperty("--random-color", randomColor());