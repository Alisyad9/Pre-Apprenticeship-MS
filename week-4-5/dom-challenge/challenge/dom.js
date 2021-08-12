/* CHALLENGE 1
1. Find the second paragraph on the page
2. Add a class of "highlight", or
3. Remove the class of "highlight" if already present
e.g. "<p class="para">Hello</p>" -> "<p class="para highlight">Hello</p>"
*/

// const toggle_button= document.querySelector('toggle-highlight input[type="checkbox"]')
function toggleHighlight() {
    const paragraph = document.querySelectorAll('p')[1];
  
      paragraph.classList.toggle("highlight");
      
  
  
  // {
  //   document.documentElement.classList.add("highlight");
  //   console.log("add");
  // } else {
  //   document.documentElement.classList.remove("highlight");
  //   console.log('remove');
  // }
}
  






/* CHALLENGE 2
1. Take an array of strings as a parameter
1. Return a new `ul` containing an `li` containing a string for each element in the array
e.g. generateList(["hello", "world"]) -> <ul>
                                           <li>hello</li>
                                           <li>world</li>
                                          </ul>
*/
function generateList(array) {
  console.log('it works');
  // let newArray = array.map(element=> element); 

  // console.log(newArray);
  const list = document.createElement("ul");
  array.map(element=> {
    if (element.length<10) {
      const listLi = document.createElement("li");
    listLi.append(element);
    list.append(listLi);
    }
    
  })

  return list;

}

/* CHALLENGE 3a
1. Take a `textarea` element as a parameter
2. Count how many characters have been typed into it
3. If it contains > 140 characters set the `aria-invalid="true"` attribute
*/
function validateTweet(textarea) {
  // your code here
}

/* CHALLENGE 3b
1. Find the textarea with ID "tweet"
2. Whenever a user types into it validate it using the previous function
*/
function validateTweetOnInput() {
  // your code here
}

/* CHALLENGE 4
1. Find all buttons with a classname of "toggle-button"
2. When each button is clicked show/hide the next sibling following the button
e.g. <button class="toggle-button">Toggle</button>
     <p>This should appear/disappear when the button is clicked</p>
*/
function setupToggleButtons() {
  // your code here
}
