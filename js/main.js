// Obtaining the search-box by its class
search = document.querySelector('.search-box');

// Function to be executed when the search icon is clicked
document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
}