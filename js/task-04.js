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
