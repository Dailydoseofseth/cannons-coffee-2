//Create a login form that shows a welcome message
//When the user clicks Submit, show the form data in console and a welcome message on the webpage
//The form will disappear when the message shows on the webpage
let container = document.querySelector(".container");
let form = document.getElementById("form");
// boilerplate event listener and form saved into JS variable
form.addEventListener("submit", onSubmit);
// submit function
function onSubmit(event) {
  // 	boilerplate code start
  event.preventDefault();
  const data = new FormData(form);
  const dataObj = Object.fromEntries(data.entries());
  // 	boilerplate code end
  console.log("data", dataObj);
  //saving values into variables using dot notation
  let name = dataObj.name;
  let email = dataObj.email;
  let password = dataObj.password;
  // create a message and update the DOM
  let message = `Welcome, ${name}! You are logged in!`;
    console.log("message", message);
    
//   // hide the form
  form.style.display = "none";
  // show the message on the webpage
  container.textContent = message;
}
