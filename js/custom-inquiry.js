//Create variables for name, email, phone, message, flavor, and reason
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
  let phone = dataObj.phone;
  let message = dataObj.message;
  let flavor = dataObj.flavor;
  let reason = dataObj.reason;
  // updating the DOM
  let namePara = document.createElement("p");
  namePara.textContent = name;
  container.appendChild(namePara);
  let emailPara = document.createElement("p");
  emailPara.textContent = email;
  container.appendChild(emailPara);
  let phonePara = document.createElement("p");
  phonePara.textContent = phone;
  container.appendChild(phonePara);
  let messagePara = document.createElement("p");
  messagePara.textContent = message;
  container.appendChild(messagePara);
  let flavorPara = document.createElement("p");
  flavorPara.textContent = flavor;
  container.appendChild(flavorPara);
  let reasonPara = document.createElement("p");
  reasonPara.textContent = reason;
  container.appendChild(reasonPara);
  // create a message and update the DOM
  let summaryMessage = `Hi ${name}! Thanks for reaching out to Cannons Coffee. We received your inquiry and will get back to you at ${email}. Your favorite flavor is ${flavor} and you are interested in ${reason}.`;
  console.log("summaryMessage", summaryMessage);
  let summaryPara = document.createElement("p");
  summaryPara.textContent = summaryMessage;
  container.appendChild(summaryPara);
  // 	include this at the end
  form.reset();
}
