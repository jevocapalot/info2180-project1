document.addEventListener("DOMContentLoaded", function () {
  const subscribeButton = document.getElementById("subscribe");
  const emailInput = document.getElementById("email");
  const messageDiv = document.querySelector(".message");

  subscribeButton.addEventListener("click", function (event) {
    event.preventDefault(); // Stop refresh

    const email = emailInput.value.trim();

    if (email !== "") {
      messageDiv.textContent = `Thank you! Your email address ${email} has been added to our mailing list!`;
      messageDiv.style.color = "white";
    } else {
      messageDiv.textContent = "Please enter a valid email address.";
      messageDiv.style.color = "yellow";
    }
  });
});
