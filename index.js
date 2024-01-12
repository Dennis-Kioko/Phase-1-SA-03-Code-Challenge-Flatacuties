document.addEventListener('DOMContentLoaded', () => {
    const characterList = document.getElementById('character-list');

    // Function to create a card for each character
    const createCharacterCard = (character) => {
        // Create card container
        const card = document.createElement('div');
        card.classList.add('card'); // Add 'card' class to the card container

        // Create image element
        const image = document.createElement('img');
        image.src = character.image;
        image.alt = character.name;
        card.appendChild(image);

        // Create heading for name
        const name = document.createElement('h2');
        name.textContent = character.name;
        card.appendChild(name);

        // Create paragraph for votes
        const votes = document.createElement('p');
        votes.id = 'votes'; // Add an ID for easy reference
        votes.textContent = `Votes: ${character.votes}`;
        card.appendChild(votes);

        // Create textarea for description
        const descriptionTextarea = document.createElement('textarea');
        descriptionTextarea.placeholder = 'Description...';
        descriptionTextarea.value = character.description || ''; // Set initial value
        card.appendChild(descriptionTextarea);

        // Create vote button
        const voteButton = document.createElement('button');
        voteButton.textContent = 'Vote';
        voteButton.addEventListener('click', () => {
            character.votes++;
            votes.textContent = `Votes: ${character.votes}`;
        });
        card.appendChild(voteButton);

        // Create reset button
        const resetButton = document.createElement('button');
        resetButton.textContent = 'Reset Votes';
        resetButton.addEventListener('click', () => {
            character.votes = 0;
            votes.textContent = `Votes: ${character.votes}`;
        });
        card.appendChild(resetButton);

        // Create delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            deleteCharacter(character);
            card.remove();
        });
        card.appendChild(deleteButton);

        // Append the card to the character-list container
        characterList.appendChild(card);
    };

    // Create Add Animal form
    const addAnimalForm = document.createElement('form');
    addAnimalForm.classList.add('add-animal-form');

    const imageUrlInput = document.createElement('input');
    imageUrlInput.type = 'text';
    imageUrlInput.name = 'imageUrl';
    imageUrlInput.placeholder = 'Image URL';
    addAnimalForm.appendChild(imageUrlInput);

    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.name = 'name';
    nameInput.placeholder = 'Animal Name';
    addAnimalForm.appendChild(nameInput);

    const descriptionInput = document.createElement('textarea');
    descriptionInput.name = 'description';
    descriptionInput.placeholder = 'Description...';
    addAnimalForm.appendChild(descriptionInput);

    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Add Animal';
    addAnimalForm.appendChild(submitButton);

    // Append Add Animal form to the bottom of the character-list container
    characterList.appendChild(addAnimalForm);

    // Function to delete a character
    const deleteCharacter = (character) => {
        // Fetch to the server to delete the character
        fetch(`http://localhost:3000/characters/${character.id}`, { method: 'DELETE' });
    };

    // Function to add an animal to the server using the provided URL and description
    const addAnimalByUrl = (imageUrl, name, description, votesElement) => {
        // Fetch to the server to add a new character
        fetch('http://localhost:3000/characters', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ image: imageUrl, name: name, votes: 0, description: description })
        }).then(response => response.json()) // Parse the response JSON
        .then(character => {
            // Create a card for the newly added character
            createCharacterCard(character);
        }).catch(error => {
            console.error('Error adding data:', error);
        });
    };

    // Submit event listener for Add Animal form
    addAnimalForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const imageUrl = event.target.imageUrl.value;
        const name = event.target.name.value;
        const description = event.target.description.value;
        // Pass the 'votes' element to addAnimalByUrl
        addAnimalByUrl(imageUrl, name, description, document.getElementById('votes'));
    });

    // Fetch data from the server
    fetch('http://localhost:3000/characters')
        .then(response => response.json())
        .then(characters => {
            // Display the list of characters by creating cards for each character
            characters.forEach(character => {
                createCharacterCard(character);
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});
