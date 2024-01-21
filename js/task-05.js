const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

nameInput.addEventListener("input", (event) => {
  nameOutput.textContent = event.currentTarget.value.trim();
  if (event.currentTarget.value.trim() === "") {
    nameOutput.textContent = "Anonymous";
  }
});
