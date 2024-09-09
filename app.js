document.addEventListener("DOMContentLoaded", () => {
    const searchButton = document.getElementById("search-button");
    const recommendationsSection = document.getElementById("recommendations");

    searchButton.addEventListener("click", () => {
        const searchQuery = document.getElementById("search-bar").value;
        if (searchQuery) {
            // You can later replace this with actual recommendations from an API or database
            recommendationsSection.innerHTML = `<p>Showing results for: <strong>${searchQuery}</strong></p>`;
        } else {
            recommendationsSection.innerHTML = `<p>Please enter a search term.</p>`;
        }
    });
});

fetch('https://api.themoviedb.org/3/movie/popular?api_key=YOUR_API_KEY')
    .then(response => response.json())
    .then(data => {
        const movies = data.results;
        movies.forEach(movie => {
            const movieElement = document.createElement('p');
            movieElement.textContent = movie.title;
            recommendationsSection.appendChild(movieElement);
        });
    });


document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll("#nav-header a");
    const currentPage = window.location.pathname;

    navLinks.forEach(link => {
        if (link.href.includes(currentPage)) {
            link.classList.add("active");
        }
    });
});



document.addEventListener("DOMContentLoaded", () => {
    // Array of movies with images
    const movies = [
        { 
            title: "Mamma Mia!", 
            genre: "Rom-Com", 
            rating: "6.5", 
            image: "images/mamma_mia_ver2.jpeg" 
        },
        { 
            title: "The Breakfast Club", 
            genre: "Comedy/Drama", 
            rating: "7.8", 
            image: "images/breakfast_club.jpeg" 
        },
        { 
            title: "Interstellar", 
            genre: "Sci-Fi", 
            rating: "8.7", 
            image: "images/interstellar_ver2.jpeg" 
        },
        { 
            title: "Hamilton", 
            genre: "Musical", 
            rating: "8.3", 
            image: "images/Hamilton.jpeg" 
        },
        { 
            title: "Pitch Perfect", 
            genre: "Comedy", 
            rating: "7.1", 
            image: "images/pitch_perfect.jpeg" 
        },
        { 
            title: "Forrest Gump", 
            genre: "Drama", 
            rating: "8.8", 
            image: "images/forrest_gump.jpeg" 
        }
    ];

    // Select the button and movie display elements
    const generateBtn = document.getElementById('generateBtn');
    const movieTitle = document.getElementById('movieTitle');
    const movieGenre = document.getElementById('movieGenre');
    const movieRating = document.getElementById('movieRating');
    const movieImage = document.getElementById('movieImage');

    // Function to generate a random movie
    function getRandomMovie() {
        const randomIndex = Math.floor(Math.random() * movies.length);
        const randomMovie = movies[randomIndex];

        // Display the movie details
        movieTitle.textContent = `Title: ${randomMovie.title}`;
        movieGenre.textContent = `Genre: ${randomMovie.genre}`;
        movieRating.textContent = `Rating: ${randomMovie.rating}`;
        movieImage.src = randomMovie.image; // Update the image
    }

    // Add event listener to the button
    generateBtn.addEventListener('click', getRandomMovie);
});

