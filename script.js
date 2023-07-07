// -------------------- Get a reference to the character list element --------------------
const characterList = document.getElementById('characterList');

// -------------------- Function to fetch character data --------------------
async function fetchCharacterData() {
  try {
    // -------------------- Fetch character data from the API --------------------
    const response = await fetch('https://rickandmortyapi.com/api/character?status=alive');

    // -------------------- Handle potential errors --------------------
    if (!response.ok) {
      throw new Error('Error retrieving character data');
    }

    // -------------------- Parse the response as JSON --------------------
    const data = await response.json();

    // -------------------- Get the first 50 characters (if available) --------------------
    const characters = data.results.slice(0, 50);

    // -------------------- Iterate through the characters and create list items --------------------
    characters.forEach(character => {
      // -------------------- Create list item elements with the card class --------------------
      const li = document.createElement('li');
      li.classList.add('card');

      // -------------------- Create an image element and set the source --------------------
      const img = document.createElement('img');
      img.src = character.image;
      li.appendChild(img);

      // -------------------- Create a span element for character details --------------------
      const details = document.createElement('span');

      // -------------------- Set the character name --------------------
      const name = document.createElement('p');
      name.textContent = `Name: ${character.name}`;
      details.appendChild(name);

      // -------------------- Set the character location --------------------
      const location = document.createElement('p');
      location.textContent = `Location: ${character.location.name}`;
      details.appendChild(location);

      // -------------------- Set the character species --------------------
      const species = document.createElement('p');
      species.textContent = `Species: ${character.species}`;
      details.appendChild(species);

      // -------------------- Set the character gender --------------------
      const gender = document.createElement('p');
      gender.textContent = `Gender: ${character.gender}`;
      details.appendChild(gender);

      // -------------------- Append the details to the list item --------------------
      li.appendChild(details);

      // -------------------- Append the list item to the character list --------------------
      characterList.appendChild(li);
    });
  } catch (error) {
    // -------------------- Handle and display error message --------------------
    const errorMessage = document.createElement('p');
    errorMessage.textContent = 'Error retrieving character data. Please try again later.';
    characterList.appendChild(errorMessage);
  }
}

// -------------------- Call the fetchCharacterData function to fetch and display the character data --------------------
fetchCharacterData();
