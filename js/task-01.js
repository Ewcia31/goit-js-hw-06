const categories = document.querySelectorAll(`li.item`);

console.log(`Number of categories: ${categories.length}`);

categories.forEach((document) => {
  const titleEl = document.querySelector("h2");
  const numberOfElements = document.querySelectorAll("li");
  console.log(`Category: ${titleEl.textContent}`);
  console.log(`Elements: ${numberOfElements.length}`);
});
