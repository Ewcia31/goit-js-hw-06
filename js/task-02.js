const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsContainer = document.querySelector(`#ingredients`);

const items = ingredients.map((ingredient) => {
  const liName = document.createElement(`li`);
  liName.className = "item";
  liName.textContent = ingredient;

  return liName;
});
ingredientsContainer.append(...items);
