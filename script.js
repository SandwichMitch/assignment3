let allMovies = [];

class Movie {
    constructor(title, rating, haveWatched) {
        this.title = title;
        this.rating = rating;
        this.haveWatched = haveWatched;
    }
}

// Function to display messages on the web page
function displayMessage(message) {
    let resultDiv = document.getElementById("result");
    let messageElement = document.createElement("p");
    messageElement.textContent = message;
    resultDiv.appendChild(messageElement);
}

// Function to print all movies
function printMovies() {
    let resultDiv = document.getElementById("result");
    displayMessage("Printing all movies...");
    for (const movie of allMovies) {
        displayMessage(movie.title + ", rating of " + movie.rating + ", havewatched: " + movie.haveWatched);
    }
    displayMessage("You have " + allMovies.length + " movies in total");
}

// Function to add a movie
function addMovie(movie) {
    allMovies.push(movie);
    displayMessage("A new movie is added");
}

// Function to change the status of a movie
function changeWatched(title) {
    for (const movie of allMovies) {
        if (movie.title === title) {
            movie.haveWatched = !movie.haveWatched;
        }
    }
    displayMessage("changing the status of the movie...");
}

// Function to display movies with a rating higher than the specified rating
function highRatings(rating) {
    displayMessage("printing movie that has a rating higher than " + rating);
    let matches = 0;
    for (const movie of allMovies) {
        if (movie.rating > rating) {
            displayMessage(movie.title + " has a rating of " + movie.rating);
            matches++;
        }
    }
    displayMessage("In total, there are " + matches + " matches");
}

////////////////////////////////////////////////////////////
//Test code - DO NOT DELETE
let x = new Movie("Spiderman", 3, true);
let y = new Movie("Citizen Kane", 4, false);
let z = new Movie("Zootopia", 4.5, true);

allMovies.push(x,y,z);

/*replace console.log with display on web page*/
displayMessage("----------------");
displayMessage("running program......");
displayMessage("----------------");
printMovies();


let movie1 = new Movie("Parasite", 2, false);

/*replace console.log with display on web page*/
displayMessage("----------------");
addMovie(movie1);
displayMessage("----------------");



changeWatched("Spiderman");
/*replace console.log with display on web page*/
displayMessage("----------------");

printMovies();

/*replace console.log with display on web page*/
displayMessage("----------------");

changeWatched("Spiderman");
/*replace console.log with display on web page*/
displayMessage("----------------");

printMovies();
/*replace console.log with display on web page*/
displayMessage("----------------");

highRatings(3.5);
