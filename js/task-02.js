const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsContainer = document.querySelector(`#ingredients`);

ingredients.forEach((ingredient) => {
  const liName = document.createElement(`li`);
  liName.className = "item";
  liName.textContent = ingredient;

  ingredientsContainer.appendChild(liName);
});
