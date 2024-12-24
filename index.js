// Challenge 1: Fetch Dog Images
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const dogImageContainer = document.getElementById("dog-image-container");

document.addEventListener("DOMContentLoaded", () => {
  // Fetch dog images
  fetch(imgUrl)
    .then(response => response.json())
    .then(data => {
      data.message.forEach(imageUrl => {
        const img = document.createElement("img");
        img.src = imageUrl;
        img.alt = "Dog image";
        dogImageContainer.appendChild(img);
      });
    })
    .catch(error => console.error("Error fetching dog images:", error));
});

// Challenge 2: Fetch Dog Breeds
const breedUrl = "https://dog.ceo/api/breeds/list/all";
const dogBreedsList = document.getElementById("dog-breeds");

document.addEventListener("DOMContentLoaded", () => {
  // Fetch dog breeds
  fetch(breedUrl)
    .then(response => response.json())
    .then(data => {
      const breeds = Object.keys(data.message);
      breeds.forEach(breed => {
        const li = document.createElement("li");
        li.textContent = breed;
        li.addEventListener("click", () => {
          li.style.color = "red"; // Change the font color on click
        });
        dogBreedsList.appendChild(li);
      });
    })
    .catch(error => console.error("Error fetching dog breeds:", error));
});

// Challenge 3: Add filter functionality for breeds
const breedDropdown = document.getElementById("breed-dropdown");

breedDropdown.addEventListener("change", (event) => {
  const selectedLetter = event.target.value;
  const allBreeds = dogBreedsList.querySelectorAll("li");

  allBreeds.forEach(breed => {
    if (breed.textContent.charAt(0).toLowerCase() === selectedLetter) {
      breed.style.display = "list-item"; // Show the breed
    } else {
      breed.style.display = "none"; // Hide the breed
    }
  });
});
