# Phase 1 SA-03 Code Challenge: Flatacuties
Flatacuties is a web application that allows users to vote for the cutest animals!. Users can view a list of animals, vote for their favorites, reset votes, and add new animals to the list.

## Project setup & Pre-requisite Data
- In your project directory, create a db.json file and use this dataLinks to an external site. for your server DB.
- Run the following command to get the backend started:
          json-server --watch db.json

- Test your server by visiting this route in the browser:
          http://localhost:3000/characters

## Project setup
- Create a new project folder.
- Create a new GitHub repository.
- Add your TM as a contributor to the project. 
- Please make sure you regularly commit to the repository. 

## Project Guidelines:
- User can see a list of all animal names. You will need to make a GET request to the following endpoint to retrieve the character data.
- GET /characters
- Example of response:
- [
  {
    "id": 1,
    "name": "Mr. Cute",
    "image": "https://thumbs.gfycat.com/EquatorialIckyCat-max-1mb.gif",
    "votes": 0
  },
  {
    "id": 2,
    "name": "Mx. Monkey",
    "image": "https://thumbs.gfycat.com/FatalInnocentAmericanshorthair-max-1mb.gif",
    "votes": 0
  },
  ...
]
- Click on an animal’s name to see its details i.e image and number of votes.
- When viewing an animal’s details, I should be able to add the number of votes for each animal. This number of votes should then be displayed together with the animal’s details.

## Bonus Deliverables
- Add a reset button that resets the votes back to 0
- Have a form for adding animals.
## Running the App
- Open index.html in your browser.
- Interact with the app by viewing animals, voting, and exploring additional features
## Authors
This project was contributed by:
Mutua Joseph

