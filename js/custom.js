// Get the form element
const form = document.querySelector("form");

// Add event listener to the form submit button
form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Get form values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.querySelector('input[name="name"]').value;
  const comments = document.getElementById("msg").value;
  const flavor = document.getElementById("flavors").value;
  const decision = document.querySelector(
    'input[name="decision"]:checked'
  ).value;

  // Determine if buying coffee or seeking employment
  let decisionText;
  if (decision === "buy-coffee") {
    decisionText = "buying coffee";
  } else if (decision === "seek-employ") {
    decisionText = "seeking employment";
  }

  // Log to console
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Phone:", phone);
  console.log("Comments:", comments);
  console.log("Favorite Flavor:", flavor);
  console.log("Decision:", decision);

  // Create thank you message using template literal
  const thankYouMessage = `Thank you ${name}! We appreciate your interest in ${decisionText}. Your favorite coffee flavor is ${flavor} and your comments are ${comments}. We will soon contact you at ${email} or ${phone}.`;

  // Hide the form
  form.style.display = "none";

  // Create and display the thank you message
  const messageDiv = document.createElement("div");
  messageDiv.textContent = thankYouMessage;
  document.querySelector("main").appendChild(messageDiv);
});
