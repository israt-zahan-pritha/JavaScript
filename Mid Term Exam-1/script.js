const cocktailContainer = document.getElementById("cocktail-container");
const searchBar = document.getElementById("search-bar");
const cocktailModal = document.getElementById("cocktail-modal");
const modalContent = document.getElementById("modal-content");
const closeModal = document.getElementById("close-modal");

// Function to fetch cocktails
async function fetchCocktails(search = "") {
  const response = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`
  );
  const data = await response.json();
  displayCocktails(data.drinks.slice(0, 12)); // Display up to 12 cocktails
}

// Function to display cocktails in the form of cards
function displayCocktails(cocktails) {
  cocktailContainer.innerHTML = ""; // Clear previous results
  cocktails.forEach((cocktail) => {
    const cocktailCard = `
            <div class="cocktail-card bg-white p-4 rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition" data-id="${cocktail.idDrink}">
                <img src="${cocktail.strDrinkThumb}" alt="${cocktail.strDrink}" class="w-full h-48 object-cover rounded-lg">
                <h3 class="text-xl font-bold mt-4">${cocktail.strDrink}</h3>
            </div>
        `;
    cocktailContainer.innerHTML += cocktailCard;
  });

  // Add click event listener to each card
  document.querySelectorAll(".cocktail-card").forEach((card) => {
    card.addEventListener("click", (e) => {
      const cocktailId = e.currentTarget.getAttribute("data-id");
      showCocktailDetails(cocktailId);
    });
  });
}

// Function to display cocktail details in a modal
async function showCocktailDetails(cocktailId) {
  const response = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktailId}`
  );
  const data = await response.json();
  const cocktail = data.drinks[0];

  // Populate modal content
  modalContent.innerHTML = `
        <h2 class="text-2xl font-bold mb-4">${cocktail.strDrink}</h2>
        <img src="${cocktail.strDrinkThumb}" alt="${cocktail.strDrink}" class="w-full h-64 object-cover rounded-lg mb-4">
        <p><strong>Category:</strong> ${cocktail.strCategory}</p>
        <p><strong>Alcoholic:</strong> ${cocktail.strAlcoholic}</p>
        <p><strong>Instructions:</strong> ${cocktail.strInstructions}</p>
    `;

  cocktailModal.classList.remove("hidden"); // Show the modal
}

// Function to hide the modal
closeModal.addEventListener("click", () => {
  cocktailModal.classList.add("hidden");
});

// Search bar functionality
searchBar.addEventListener("input", (e) => {
  const searchTerm = e.target.value.trim();
  fetchCocktails(searchTerm);
});

// Fetch initial cocktails on page load
fetchCocktails();
