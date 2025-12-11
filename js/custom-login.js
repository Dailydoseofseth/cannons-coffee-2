//Create variables for name, email, and password
//Show each back to the user one by one at first, and then in a template literal sentence
let container = document.querySelector(".container");
// boilerplate event listener and form saved into JS variable
let form = document.getElementById("form");
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
  // updating the DOM
  let namePara = document.createElement("p");
  namePara.textContent = name;
  container.appendChild(namePara);
  let emailPara = document.createElement("p");
  emailPara.textContent = email;
  container.appendChild(emailPara);
  let passwordPara = document.createElement("p");
  passwordPara.textContent = password;
  container.appendChild(passwordPara);
  // create a message and update the DOM
  let message = `Welcome back, ${name}! You have successfully logged in with your email ${email}.`;
  console.log("message", message);
  let messagePara = document.createElement("p");
  messagePara.textContent = message;
  container.appendChild(messagePara);
  // 	include this at the end
  form.reset();
}
