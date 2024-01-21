const fontSizeControl = document.getElementById("font-size-control");
const textSpan = document.getElementById("text");

// Add an event listener for the input event on the fontSizeControl element
fontSizeControl.addEventListener("input", () => {
  // Update the font-size property of the textSpan based on the input value
  textSpan.style.fontSize = `${fontSizeControl.value}px`;
});
