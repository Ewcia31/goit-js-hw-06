const galleryContainer = document.querySelector(".gallery");

// Create HTML markup for the gallery
const galleryMarkup = images
  .map(
    (image) => `
    <li class="gallery-item">
      <img src="${image.url}" alt="${image.alt}">
    </li>
  `
  )
  .join("");

// Insert the gallery markup into the DOM in one operation
galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);

const decreaseBtn = document.querySelector(`button[data-action="decrement"]`);

const increaseBtn = document.querySelector(`button[data-action="increment"]`);

const counterSpan = document.querySelector(`#value`);

let counter = 0;

decreaseBtn.addEventListener("click", () => {
  counter -= 1;
  counterValue();
});

increaseBtn.addEventListener("click", () => {
  counter += 1;
  counterValue();
});

function counterValue() {
  counterSpan.textContent = counter;
}
