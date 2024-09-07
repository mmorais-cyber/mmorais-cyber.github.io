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