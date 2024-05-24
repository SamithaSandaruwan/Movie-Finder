const apiKey = ""; // Your Movie API key
const searchInput = document.getElementById('search');
const moviesContainer = document.getElementById('movies');

// Function to fetch movies based on search input
async function fetchMovies(query) {
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`);
    const data = await response.json();
    return data.results;
}

// Function to display movies
function displayMovies(movies) {
    moviesContainer.innerHTML = '';
    movies.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie');
        movieElement.innerHTML = `
            <h2>${movie.title}</h2>
            <p>${movie.overview}</p>
            <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
        `;
        moviesContainer.appendChild(movieElement);
    });
}

// Event listener for search input
searchInput.addEventListener('input', async () => {
    const query = searchInput.value;
    if (query) {
        const movies = await fetchMovies(query);
        displayMovies(movies);
    } else {
        moviesContainer.innerHTML = '<p>Enter a movie name to search</p>';
    }
});
