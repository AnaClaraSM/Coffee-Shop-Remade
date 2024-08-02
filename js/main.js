// SEARCH BAR

// Obtaining the search-box by its class
search = document.querySelector('.search-box');

// Function to be executed when the search icon (obtained by its id) is clicked
document.querySelector('#search-icon').onclick = () => {
    //When search icon is clicked
    //Adds or removes the class 'active' on the search-box to activate or deactivate the style for it according to the class
    search.classList.toggle('active');
}


// HEADER NAVBAR

// Obtaining the header by its element/tag name
let header = document.querySelector('header');

// When the window/screen is scrolled, executes a function
window.addEventListener('scroll', () => {
    //Toggles the class 'shadow' on the header element, to activate or deactivate the style for it according to the class
    header.classList.toggle('shadow', window.scrollY > 0);
});