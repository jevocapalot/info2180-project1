document.addEventListener("DOMContentLoaded", function () {
  const emailInput = document.getElementById("email");
  const subscribeButton = document.getElementById("subscribe");
  const messageDiv = document.querySelector(".message");

  subscribeButton.addEventListener("click", function () {
    const email = emailInput.value.trim();

    if (email === "") {
      messageDiv.textContent = "Please enter a valid email address.";
      messageDiv.style.color = "yellow";
    } else {
      messageDiv.textContent = `Thank you! Your email address ${email} has been added to our mailing list!`;
      messageDiv.style.color = "white";
    }
  });
});
